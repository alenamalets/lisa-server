const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = require("./dish-table/routes");
const app = express();
const port = process.env.PORT || 4000;

app
  .use(bodyParser.json())
  // .use(dishRouter)

const server = app.listen(port, () => console.log(`Listening on port ${port}`));
