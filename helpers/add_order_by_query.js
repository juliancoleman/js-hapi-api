const R = require("ramda");

const { knex } = appRequire("config/bookshelf");

module.exports = (qb, sort) => {
  const isDescending = sort.startsWith("-");
  const orderByColumn = isDescending ? R.takeLast(sort.length - 1, sort): sort;
  const orderByDirection = isDescending ? "desc" : "asc";

  qb.orderBy(knex.raw(`LOWER(${orderByColumn})`), orderByDirection);
};
