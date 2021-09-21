const { Router } = require('express');
authController = require('../controllers/auth.controller')
const jwtTokenMiddleware = require('../middlewares/jwtToken.middleware')

const authRouter = Router();

authRouter.post('/users/signup', authController.registration)
authRouter.post('/users/login', authController.login)
authRouter.get('/users/logout', jwtTokenMiddleware, authController.logout)

module.exports = authRouter;