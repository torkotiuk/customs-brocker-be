const { Router } = require('express');
const declController = require('../controllers/decl.controller')
const jwtTokenMiddleware = require('../middlewares/jwtToken.middleware')

const declRouter = Router();

declRouter.post('/api/decl', jwtTokenMiddleware, declController.createDeclaration)
declRouter.get('/api/decl', jwtTokenMiddleware, declController.getAllDeclarations)
declRouter.get('/api/decl/:id', jwtTokenMiddleware, declController.getAllDeclarations)


module.exports = declRouter;