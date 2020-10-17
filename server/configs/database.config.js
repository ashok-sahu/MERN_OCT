const mongoose = require("mongoose");
const chalk = require("chalk");
const keys = require("./keys.config");
mongoose.Promise = global.Promise;

const { database } = keys;
const mongoUri =  database.url || process.env.MONGO_URI;
console.log(mongoUri)

function connectDB() {
  return mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log(
        `${chalk.green("✔")} ${chalk.blue.bold(
          `database connected successfully`
        )}`
      );
    })
    .catch((err) => {
      console.log(
        `${chalk.green("❌")} ${chalk.blue.bold(
          `error while connect to database`,
          err
        )}`
      );
    });
}

module.exports = connectDB;
