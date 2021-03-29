exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name").unique();
    table.string("email");
    table.string("pswd_hash");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
