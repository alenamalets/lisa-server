const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = require("./dish-table/routes");
const menuRouter = require("./menu-table/routes");
const typeRouter = require('./type-table/routes')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 4000;

app
  .use(cors())
  .use(bodyParser.json())
  .use(dishRouter)
  .use(menuRouter)
  .use(typeRouter)

const server = app.listen(port, () => console.log(`Listening on port ${port}`));
