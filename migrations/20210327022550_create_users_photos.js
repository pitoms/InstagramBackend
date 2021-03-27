exports.up = function (knex) {
  return knex.schema.createTable("users_photos", (table) => {
    table.integer("user_id").unsigned().references("users.id");
    table.integer("photo_id").unsigned().references("photos.id");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("users_photos");
};
