const Declaration = require('../model/decl.model')
HTTP_CODES = require('../helpers/httpStatusCodes');
const createDeclaration = async (req, res) => {
    const body = req.body
    
    
    try {
        console.log("Andrew")
        const result = await Declaration.create(body)
        console.log("Dima")
        res.status(HTTP_CODES.CREATED).json(result)
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({error: error.message})
    }
}

const getAllDeclarations = async (req, res) => {
    try {
        const result = await Declaration.find()
        res.status(HTTP_CODES.OK).json(result)
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({error: error.message})
    }
}

module.exports = {
    createDeclaration,
    getAllDeclarations
};