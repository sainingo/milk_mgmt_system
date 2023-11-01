// interfaces/routes/userRoutes.js
const express = require('express');
const router = express.Router();

const UserController = require('../../application/controllers/UserController');

module.exports = (userUseCases) => {
  const userController = new UserController(userUseCases);

  // Define user-related routes
  router.post('/register', userController.registerUser);
  // Add other routes for user management

  return router;
};
