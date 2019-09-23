require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.MYSQL_HOST,
      user : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database : process.env.MYSQL_DATABASE
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
