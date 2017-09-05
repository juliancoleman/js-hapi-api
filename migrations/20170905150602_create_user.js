exports.up = knex =>
  knex.schema.createTable("user", (table) => {
    table.increments();
    table.string("email_address");
    table.string("encrypted_password");
    table.timestamps();
    table.timestamp("deleted_at");
  });

exports.down = knex =>
  knex.schema.dropTable("user");
