const pg = require('./knex');

let getUsers = () => {
    return pg('users')
}

let getUser = (userData) => {
  return pg('users').where({username: userData.username, password: userData.password})
}

module.exports = {
    getUsers,
    getUser
}