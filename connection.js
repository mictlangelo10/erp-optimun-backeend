const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect((err) => {
  if (!err) {
    console.log("Conectado");
  } else {
    console.log("Desconectado", err);
  }
});

module.exports = client;
