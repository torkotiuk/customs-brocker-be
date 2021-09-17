const { Router } = require('express');
authController = require('../controllers/auth.controller')

const authRouter = Router();

authRouter.post('/users/signup', authController.registration)
authRouter.post('/users/login', authController.login)

module.exports = authRouter;