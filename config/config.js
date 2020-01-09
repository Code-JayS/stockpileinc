module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "devdb",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "devdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
