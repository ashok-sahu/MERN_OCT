require("dotenv").config({path:'./server/configs/example.env'})
const keys = require('./server/configs/keys.config')
const database = require('./server/configs/database.config')
const assets = require('./server/configs/static.config')
const app = require("./server/app");
const http = require("http");
const socketio = require("socket.io");
const expressWs = require("express-ws");
const chalk = require("chalk");

const {port} = keys

const PORT = port || 3000;
const server = http.createServer(app);
const wsInstance = expressWs(app);
const io = socketio(server);

//database configuration
database()

//asset for production
assets()

//server connection
server.listen(PORT, () => {
  console.log(
    `${chalk.green("✓")} ${chalk.blue.bold.rgb(
      255,
      186,
      91
    )(
      `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    )}`
  );
});
