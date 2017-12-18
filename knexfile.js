// require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/cookie-login',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};