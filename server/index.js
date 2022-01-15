const express = require("express");
const cors = require("cors");
const db = require("./models");
const router = require("./router");


const app = express();

const PORT = 3001;

app
  .use(cors())
  .use(express.json())
  .use(router);

  (async function () {
    try {
      await db;
      app.listen(PORT, () => {
        console.log('🚀server up and running on port: ' + PORT + '🚀');
      });
    } catch (error) {
      console.log(error);
    }
  })();