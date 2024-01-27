const mongoose = require("mongoose");
const app = require("./app");
const DB_HOST =
  "mongodb+srv://sergei:7G9hXVQ2oLLSlEG4@cluster0.vhuo7wl.mongodb.net/db-contacts?retryWrites=true&w=majority";

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
