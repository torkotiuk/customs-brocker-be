const { Router } = require('express')
const articleController = require('../controllers/article.controller')
const jwtTokenMiddleware = require('../middlewares/jwtToken.middleware')

const articleRouter = Router();

articleRouter.post('/api/article', jwtTokenMiddleware, articleController.createArticle)
articleRouter.get('/api/article', jwtTokenMiddleware, articleController.getAllArticles)
articleRouter.get('/api/article/:articleId', jwtTokenMiddleware, articleController.getArticleById)
articleRouter.delete('/api/article/:articleId', jwtTokenMiddleware, articleController.deleteArticleById)
articleRouter.put('/api/article/:articleId', jwtTokenMiddleware, articleController.putArticle)

module.exports = articleRouter;