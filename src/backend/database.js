var knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./timeclock.sqlite",
  },
  useNullAsDefault: true
});

knex.schema
  .createTableIfNotExists("users", function(table) {
    table.increments("id");
    table.boolean("isdamin").notNullable();
    table.string("name").notNullable();
    table
      .integer("user_code")
      .notNullable()
      .unsigned();
  })
  .createTableIfNotExists("work_days", function(table) {
    table.increments("id");
    table.timestamps("entrance_am");
    table.timestamps("departure_am");
    table.timestamps("entrance_pm");
    table.timestamps("departure_pm");
    table.date("day");
    table
      .foreign("id")
      .references("id")
      .inTable("users");
  });
