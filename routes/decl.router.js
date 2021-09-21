const { Router } = require('express');
const declController = require('../controllers/decl.controller')
const jwtTokenMiddleware = require('../middlewares/jwtToken.middleware')

const declRouter = Router();

declRouter.post('/doc', jwtTokenMiddleware, declController.createDeclaration)
declRouter.get('/doc', jwtTokenMiddleware, declController.getAllDeclarations)

module.exports = declRouter;