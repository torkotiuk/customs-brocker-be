const User = require('../model/user.model');
HTTP_CODES = require('../helpers/httpStatusCodes')
const bcrypt = require('bcrypt')

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

module.exports = {
    registration
}