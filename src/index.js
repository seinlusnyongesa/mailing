const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mailer = require("./sendmail");
const app = express();
app.get("/", (req, res) => res.send("hello world"));

app.listen(4000, () => console.log(`app running on ${4000}`));
