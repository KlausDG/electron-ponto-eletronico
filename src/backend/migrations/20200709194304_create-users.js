exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table
      .boolean("is_admin")
      .notNullable()
      .defaultTo(false);
    table.string("name").notNullable();
    table
      .integer("user_code")
      .notNullable()
      .unsigned();
    table.timestamps().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
