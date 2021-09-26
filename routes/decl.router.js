const { Router } = require('express');
const declController = require('../controllers/decl.controller')
const jwtTokenMiddleware = require('../middlewares/jwtToken.middleware')

const declRouter = Router();

declRouter.post('/api/decl', jwtTokenMiddleware, declController.createDeclaration)
declRouter.get('/api/decl', jwtTokenMiddleware, declController.getAllDeclarations)
declRouter.get('/api/decl/:declId', jwtTokenMiddleware, declController.getDeclarationById)
declRouter.delete('/api/decl/:declId', jwtTokenMiddleware, declController.deleteDeclarationById)
declRouter.put('/api/decl/:declId', jwtTokenMiddleware, declController.putDeclaration)

module.exports = declRouter;