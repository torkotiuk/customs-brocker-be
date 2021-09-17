const HTTP_CODES = require('../helpers/httpStatusCodes')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const { JWT_SECRET_KEY } = process.env;

const jwtTokenMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(HTTP_CODES.BAD_REQUEST).json({error: 'token is not provided'})
    }
    
    try {
        jwt.verify(token, JWT_SECRET_KEY)
        next()
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({error: 'token is invalid'})
    }
    
}

module.exports = jwtTokenMiddleware;