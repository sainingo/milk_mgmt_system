const express = require('express');
const app = express();

const userRoutes = require('./interfaces/routes/userRoutes');
const { dbConfig } = require('./interfaces/config');
const db = require('./infrastructure/dataAccess/Database')(dbConfig);
const UserUseCases = require('./core/useCases/UserUseCases');
const UserService = require('./application/services/UserService');
const UserController = require('./application/controllers/UserController');

// Initialize database connection
db.execute('SELECT 1')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

// Setup Express middleware, routes, and start the server

app.use(express.json());
app.use('/api/user', userRoutes(new UserUseCases(new UserService(db)), UserController));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
