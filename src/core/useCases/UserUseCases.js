const validateEmail = require("../helpers/is-valid-email");

// core/useCases/UserUseCases.js
class UserUseCases {
  constructor(userService) {
    this.userService = userService;
  }

  async registerUser(userData) {
    try {
      // Basic validation: Ensure all required fields are provided
      if (!userData.username || !userData.email || !userData.password) {
        throw new Error("Invalid input data");
      }

      // Check if a user with the same email already exists
      const existingUser = await this.userService.findUserByEmail(
        userData.email
      );
      if (existingUser) {
        throw new Error("User already exists");
      }

      // Check if the email is valid
      if (!validateEmail(userData.email)) {
        throw new Error("Invalid email");
      }

      // Store the user data in the database through the UserService
      const newUser = await this.userService.registerUser({
        username: userData.username,
        email: userData.email,
        password: userData.password,
      });

      return newUser;
    } catch (error) {
      throw new Error("User registration failed");
    }
  }

  async authenticateUser(email, password) {
    // Add authentication logic, password hashing, and validation here
    try {
      // Basic validation: Ensure all required fields are provided
      if (!email || !password) {
        throw new Error("Invalid input data");
      }

      const user = await this.userService.authenticateUser(email, password);
      return user;
    } catch (error) {
      throw new Error("User authentication failed");
    }
  }


  // Add other use cases like updateUser, deleteUser, etc.
}

module.exports = UserUseCases;
