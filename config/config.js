require("dotenv").config();
const key = require("./key");

module.exports = {
  "development": {
    "username": "root",
    "password": key.SQLPASS,
    "database": "devdb",
    "host": "localhost",
    "dialect": "mysql"
  },
  test: {
    "username": "root",
    "password": key.SQLPASS,
    "database": "devdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  production: {
    "use_env_variable": "stockpiledb",
    "dialect": "mysql"
  }
}
