module.exports = (() => {
  const knexfile = require("./Knexfile");
  const knex = require("knex")(knexfile);
  const objection = require("objection");
  const { Model } = objection;

  Model.knex(knex);

  return objection;
})();
