module.exports = (() => {
  const knexfile = require("./Knexfile");
  const knex = require("knex")(knexfile);
  const bookshelfParanoia = require("bookshelf-paranoia");
  const bookshelfBcrypt = require("bookshelf-bcrypt");
  const bookshelf = require("bookshelf")(knex);

  bookshelf.plugin("registry");
  bookshelf.plugin("visibility");
  bookshelf.plugin("virtuals");
  bookshelf.plugin("pagination");
  bookshelf.plugin(bookshelfParanoia);
  bookshelf.plugin(bookshelfBcrypt, { rounds: 12 });

  return bookshelf;
})();
