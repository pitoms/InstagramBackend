// Update with your config settings.

module.exports = {
  development: {
    client: "postgres",
    connection: {
      database: "mosaic",
      user: `postgres`,
      password: "password",
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};
