require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const PORT = process.env.PORT;

module.exports = { CLIENT_ID, CLIENT_SECRET, PORT }