module.exports = (() => {
  const knexfile = require("./Knexfile");
  const knex = require("knex")(knexfile);
  const jsonColumns = require("bookshelf-json-columns");
  const bookshelfParanoia = require("bookshelf-paranoia");
  const bookshelf = require("bookshelf")(knex);

  bookshelf.plugin("registry");
  bookshelf.plugin("visibility");
  bookshelf.plugin("virtuals");
  bookshelf.plugin("pagination");
  bookshelf.plugin(jsonColumns);
  bookshelf.plugin(bookshelfParanoia);

  return bookshelf;
})();
