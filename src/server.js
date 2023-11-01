const express = require('express');
const app = express();

const userRoutes = require('./interfaces/routes/userRoutes');
const { dbConfig } = require('./interfaces/config');
const db = require('./infrastructure/data-access/database')(dbConfig);
const UserUseCases = require('./core/useCases/UserUseCases');
const UserService = require('./application/services/UserService');

// Initialize database connection
db.execute('SELECT 1')
  .then(() => {
    return true;
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });


app.use(express.json());
app.use('/api/user', userRoutes(new UserUseCases(new UserService(db))));

module.exports = app;