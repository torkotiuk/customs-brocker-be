const { Router } = require('express');
authController = require('../controllers/auth.controller')
const jwtTokenMiddleware = require('../middlewares/jwtToken.middleware')

const authRouter = Router();

authRouter.post('/api/users/signup', authController.registration)
authRouter.post('/api/users/login', authController.login)
authRouter.get('api/users/logout', jwtTokenMiddleware, authController.logout)

module.exports = authRouter;