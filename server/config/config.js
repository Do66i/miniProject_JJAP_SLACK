require("dotenv").config();

module.exports = {
  development: {
    username: "admin",
    password: process.env.MYSQL_PASSWORD,
    database: "sleact",
    host: "ec2-3-39-195-4.ap-northeast-2.compute.amazonaws.com",
    dialect: "mysql",
    port: "13306",
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
