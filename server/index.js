const express = require("express");
const app = express();
const cors = require("cors")

const config = require("./utils/config");

app.use(cors());

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
