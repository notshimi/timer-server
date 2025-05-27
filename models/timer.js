const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const timerSchema = new mongoose.Schema({
  timerSeconds: Number,
});

timerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Timer", timerSchema);
