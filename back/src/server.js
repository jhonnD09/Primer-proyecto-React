const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const cors = require("cors");
const morgan = require("morgan");

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});
