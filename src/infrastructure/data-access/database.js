const mysql = require('mysql2');

module.exports = (dbConfig) => {
  const pool = mysql.createPool(dbConfig);
  return pool.promise();
};

