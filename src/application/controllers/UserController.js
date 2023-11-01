// application/controllers/UserController.js
class UserController {
  constructor(userUseCases) {
    this.userUseCases = userUseCases;
  }

  async registerUser(req, res) {
    // Extract data from the request
    const userData = req.body;

    try {
      // Call the use case
      const newUser = await this.userUseCases.registerUser(userData);

      // Send the response
      res.status(201).json(newUser);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async loginUser(req, res) {
    // Extract data from the request
    const { email, password } = req.body;

    try {
      // Call the use case
      const user = await this.userUseCases.authenticateUser(email, password);

      // Send the response
      res.status(200).json(user);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
