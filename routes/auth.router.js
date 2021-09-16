const { Router } = require('express');
authController = require('../controllers/auth.controller')

const authRouter = Router();

authRouter.post('/signup', authController.registration)
authRouter.post('/login', () => {})

module.exports = authRouter;