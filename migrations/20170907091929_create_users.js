exports.up = knex =>
  knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("email_address");
    table.string("password");
    table.timestamps();
    table.timestamp("deleted_at");
  });

exports.down = knex =>
  knex.schema.dropTable("users");
