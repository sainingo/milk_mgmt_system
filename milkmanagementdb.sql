-- Create the database
CREATE DATABASE IF NOT EXISTS MilkManagementDB;
USE MilkManagementDB;

-- Create Users Table
CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'cashier', 'collector') NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    -- Add other user-related fields here
);

-- Create Customers Table
CREATE TABLE IF NOT EXISTS Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    contact_number VARCHAR(20),
    -- Add other customer-related fields here
);

-- Create MilkTransactions Table
CREATE TABLE IF NOT EXISTS MilkTransactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    collector_id INT NOT NULL,
    quantity DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'approved') NOT NULL,
    transaction_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (collector_id) REFERENCES Users(user_id)
);

-- Create Products Table (Optional)
CREATE TABLE IF NOT EXISTS Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    -- Add other product-related fields here
);
