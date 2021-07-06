"use strict";

const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { routes } = require("./routes/upload.routes");
const port = process.env.PORT || 8080;

const app = express();
require("./database")(); // db init

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", routes);

app.listen(port, () =>
  console.log(`server started at port http://localhost:${port}`)
);
