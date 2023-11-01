const express = require('express');
const router = express.Router();

const CustomerController = require('../../application/controllers/CustomerController');

module.exports = (customerUseCases) => {
  const customerController = new CustomerController(customerUseCases);

  // Define customer-related routes
  router.post('/register', customerController.registerCustomer);

  return router;
}