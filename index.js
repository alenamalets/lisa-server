const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = require("./dish-table/routes");
const menuRouter = require("./menu-table/routes");
const typeRouter = require('./type-table/model')
const app = express();
const port = process.env.PORT || 4000;

app
  .use(bodyParser.json())
  .use(dishRouter)
  .use(menuRouter)
  .use(typeRouter)

const server = app.listen(port, () => console.log(`Listening on port ${port}`));
