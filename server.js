const { pool: pool } = require("./connection.js");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
