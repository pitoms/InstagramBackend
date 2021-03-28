exports.up = function (knex) {
  return knex.schema.createTable("photos", (table) => {
    table.increments("id");
    table.string("src");
    table.timestamp("time_posted").defaultTo(knex.fn.now());
    table.integer("user_id").unsigned().references("users.id");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("photos");
};
