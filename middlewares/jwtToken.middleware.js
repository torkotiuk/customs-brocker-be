const HTTP_CODES = require('../helpers/httpStatusCodes')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const { JWT_SECRET_KEY } = process.env;
const User = require('../model/user.model')

const jwtTokenMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(HTTP_CODES.BAD_REQUEST).json({error: 'token is not provided'})
    }
    
    try {
        jwt.verify(token, JWT_SECRET_KEY)
        const user = jwt.decode(token);

        const existingUser = await User.findOne({ token })
        req.user = user;

        if (!existingUser.token) {
           return  res.status(HTTP_CODES.BAD_REQUEST).json({error: 'user is not signed in'})
        }

        req.user = user;

        next()
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({error: 'token is invalid'})
    }
    
}

module.exports = jwtTokenMiddleware;