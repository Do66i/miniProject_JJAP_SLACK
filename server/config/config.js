require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "sleact",
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT,
  },
  test: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "sleact",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "sleact",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
