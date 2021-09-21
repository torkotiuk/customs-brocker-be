require('dotenv').config();
const { JWT_SECRET_KEY } = process.env;
const User = require('../model/user.model');
HTTP_CODES = require('../helpers/httpStatusCodes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registration = async (req, res) => {
    try {
        const { email, password } = req.body;

        const candidate = await User.findOne({ email })
        if (candidate) {
            return res.status(HTTP_CODES.CONFLICT).json({ error: "User with this email is already exist" })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = await User.create({ email, password: hashedPassword })
        res.status(HTTP_CODES.CREATED).json({
            status: "success",
			code: HTTP_CODES.CREATED,
            data: { email, id: user._id }
        })
        
    }
    catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({ error: error.message })
    }
    

};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const candidate = await User.findOne({ email });

        if (!candidate) {
            return res.status(HTTP_CODES.UNAUTHORIZED).json({ error: 'Wrong credentials' })
        }

        const isPasswordCorrect = bcrypt.compareSync(password, candidate.password);
        if (!isPasswordCorrect) {
            return res.status(HTTP_CODES.UNAUTHORIZED).json({ error: 'Wrong credentials' })
        }

        const payload = {
            email,
            id: candidate._id
        }
        const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1d' })
        res.status(HTTP_CODES.OK).json({ token })

        await User.findOneAndUpdate({ _id: candidate._id }, { token })
        
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({ error: error.message })
    }
}

const logout = async (req, res) => {
    const user = req.user
    // console.log(user)

    try {
        await User.findOneAndUpdate({ _id: user.id }, { token: null })
        res.status(HTTP_CODES.OK).json()
        
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({ error: error.message })
    }

}

module.exports = {
    registration,
    login,
    logout
}