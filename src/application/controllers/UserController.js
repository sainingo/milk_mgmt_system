// application/controllers/UserController.js
class UserController {
  constructor(userUseCases) {
    this.userUseCases = userUseCases;
  }

  async registerUser(req, res) {
    // Extract data from the request
    const userData = req.body;

    try {
      const user = await this.userUseCases.registerUser(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Add other controller methods for handling user-related requests
}

module.exports = UserController;
