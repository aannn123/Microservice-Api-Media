require('dotenv').config()

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOSTNAME
} = process.env

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql",
    "define": {
      timestamps: false
    }
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql",
    "define": {
      timestamps: false
    }
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql",
    "define": {
      timestamps: false
    }
  }
}
