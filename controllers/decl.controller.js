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

const getDeclarationById = async (req, res) => {
    const { declId } = req.params;

    try {
        const result = await Declaration.findById(declId)
        res.status(HTTP_CODES.OK).json(result)
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({ error: error.message })
    }
    
}

const deleteDeclarationById = async (req, res) => {
    const { declId } = req.params;

    try {
		const result = await Declaration.findByIdAndDelete({ _id: declId })
		res.status(HTTP_CODES.OK).json(result)
	} catch (error) {
		res.status(HTTP_CODES.BAD_REQUEST).json({ error: error.message })
	}


}

const putDeclaration = async (req, res) => {
    const { declId } = req.params;

    try {
        const result = await Declaration.findOneAndUpdate({ _id: declId }, { ...req.body }, { new: true })
        res.status(HTTP_CODES.OK).json(result)
        
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({ error: error.message })
    }

}

    module.exports = {
        createDeclaration,
        getAllDeclarations,
        getDeclarationById,
        deleteDeclarationById,
        putDeclaration,
    };