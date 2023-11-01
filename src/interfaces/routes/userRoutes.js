// interfaces/routes/userRoutes.js
const express = require('express');
const router = express.Router();

const UserController = require('../../application/controllers/UserController');

module.exports = (userUseCases) => {
  const userController = new UserController(userUseCases);

  // Define user-related routes
  router.post('/register', userController.registerUser);
  router.post('/login', userController.loginUser);

  return router;
};
