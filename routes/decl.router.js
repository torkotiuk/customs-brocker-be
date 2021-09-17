const { Router } = require('express');
const declController = require('../controllers/decl.controller')

const declRouter = Router();

declRouter.post('/doc', declController.createDeclaration)
declRouter.get('/doc', declController.getAllDeclarations)

module.exports = declRouter;