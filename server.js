const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST } = require("./config");

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(DB_HOST);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
