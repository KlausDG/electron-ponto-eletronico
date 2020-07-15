exports.up = function(knex) {
  return knex.schema.createTable("work_days", function(table) {
    table.increments("id");
    table.timestamp("entrance_am");
    table.timestamp("departure_am");
    table.timestamp("entrance_pm");
    table.timestamp("departure_pm");
    table
      .date("day")
      .notNullable()
      .defaultTo(Date.now());
    table
      .foreign("id")
      .references("id")
      .inTable("users");
      table.timestamps().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("work_days");
};
