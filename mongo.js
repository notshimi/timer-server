const mongoose = require("mongoose");
const url =
  "mongodb+srv://admin:admin@countercluster0.fmrmedw.mongodb.net/timer?retryWrites=true&w=majority&appName=CounterCluster0";

mongoose.set("strictQuery", false);
mongoose.connect(url);

const timerSchema = new mongoose.Schema({
  timerSeconds: Number,
});

const Timer = mongoose.model("Timer", timerSchema);

const newTimer = new Timer({
  timerSeconds: 0,
});

newTimer.save().then((result) => {
  console.log(result);
  mongoose.connection.close();
});
