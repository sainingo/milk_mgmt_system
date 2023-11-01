// application/services/UserService.js
const bcrypt = require("bcryptjs");

class UserService {
  constructor(db) {
    this.db = db;
  }

  async registerUser(userData) {
    // Add registration logic, validation, and database interaction here

    try {
      // basic validation
      if (!userData.username || !userData.password || !userData.email) {
        throw new Error("Invalid input data");
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const query =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      const values = [userData.username, userData.email, hashedPassword];

      // Execute the SQL query using the database connection
      const [result] = await this.db.execute(query, values);

      return result;
    } catch (error) {
      throw new Error("User registration failed", error);
    }

    // Store the user data in the database using userRepository
  }

  async authenticateUser(email, password) {
    // Add authentication logic, password hashing, and validation here
    try {
      // Basic validation: Ensure all required fields are provided
      if (!email || !password) {
        throw new Error("Invalid input data");
      }

      // Find the user by username
      const user = await this.findUserByEmail(email);
      if (!user) {
        throw new Error("User not found");
      }

      // Compare the provided password with the hashed password stored in the database
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        throw new Error("Invalid credentials");
      }

      return user;
    } catch (error) {
      throw new Error("User authentication failed");
    }
  }

  async findUserByEmail(email) {
    try {
      // Define the SQL query to find a user by email
      const query = "SELECT * FROM users WHERE email = ?";
      const values = [email];

      // Execute the SQL query using the database connection
      const [rows] = await this.db.execute(query, values);

      if (rows.length > 0) {
        return rows[0];
      }

      return null; // User not found
    } catch (error) {
      throw new Error("Error while finding user by email");
    }
  }
}

module.exports = UserService;
