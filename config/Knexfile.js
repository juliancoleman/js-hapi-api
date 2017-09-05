require("dotenv").config();
const pg = require("pg");

// Parse stringified BIGINTs from Postgres
const numberTypes = [700, 701, 1700, 20, 20, 1021, 1022, 1231];
numberTypes.forEach(type => pg.types.setTypeParser(type, "text", parseFloat));

module.exports = {
  client: "postgresql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DATABASE_POSTGRESQL_USERNAME,
    password: process.env.DATABASE_POSTGRESQL_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: "../migrations",
    tableName: "knex_migrations",
    disableTransactions: true,
  },
};
