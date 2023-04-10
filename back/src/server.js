const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const cors = require("cors");
const morgan = require("morgan");
const { conn } = require("./DB_connection");

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/rickandmorty", router);

conn
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server raised in port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
