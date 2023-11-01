-- Create the database
CREATE DATABASE IF NOT EXISTS MilkManagementDB;
USE MilkManagementDB;

-- Create Users Table
CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'cashier', 'collector') NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact_number VARCHAR(20) NOT NULL,
    location VARCHAR(255),
    id_number VARCHAR(20),
);

-- Create Customers Table
CREATE TABLE IF NOT EXISTS Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    contact_number VARCHAR(20),
    id_number VARCHAR(20),
    email VARCHAR(255),
    id_photo VARCHAR(255),
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

-- Create Sales Table for Selling Milk
CREATE TABLE IF NOT EXISTS Sales (
    sale_id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT NOT NULL,
    customer_id INT NOT NULL,
    quantity DECIMAL(10, 2) NOT NULL,
    sale_date DATE,
    FOREIGN KEY (seller_id) REFERENCES Users(user_id),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE IF NOT EXISTS SellerPayments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    customer_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE,
    payment_method ENUM('cash', 'bank') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- Create Buyer Payments Table
CREATE TABLE IF NOT EXISTS BuyerPayments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    buyer_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE,
    payment_method ENUM('cash', 'bank') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (buyer_id) REFERENCES Customers(customer_id)
);

-- Create Products Table (Optional)
CREATE TABLE IF NOT EXISTS Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
);
