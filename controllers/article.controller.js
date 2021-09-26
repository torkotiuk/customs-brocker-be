const Article = require('../model/article.model')
HTTP_CODES = require('../helpers/httpStatusCodes');

const createArticle = async (req, res) => {
    const body = req.body
        
    try {
        const result = await Article.create(body)
        res.status(HTTP_CODES.CREATED).json(result)
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({error: error.message})
    }
}

const getAllArticles = async (req, res) => {
    try {
        const result = await Article.find()
        res.status(HTTP_CODES.OK).json(result)
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({error: error.message})
    }
}

const getArticleById = async (req, res) => {
    const { articleId } = req.params;

    try {
        const result = await Article.findById(articleId)
        res.status(HTTP_CODES.OK).json(result)
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({ error: error.message })
    }
    
}

const deleteArticleById = async (req, res) => {
    const { articleId } = req.params;

    try {
		const result = await Article.findByIdAndDelete({ _id: articleId })
		res.status(HTTP_CODES.OK).json(result)
	} catch (error) {
		res.status(HTTP_CODES.BAD_REQUEST).json({ error: error.message })
	}


}

const putArticle = async (req, res) => {
    const { articleId } = req.params;

    try {
        const result = await Article.findOneAndUpdate({ _id: articleId }, { ...req.body }, { new: true })
        res.status(HTTP_CODES.OK).json(result)
        
    } catch (error) {
        res.status(HTTP_CODES.BAD_REQUEST).json({ error: error.message })
    }

}

module.exports = {
        createArticle,
        getAllArticles,
        getArticleById,
        deleteArticleById,
        putArticle,
    };