const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

const getAllComments = (db = connection) => {
  return db('comment')
}

module.exports = {
  getAllComments,
}
