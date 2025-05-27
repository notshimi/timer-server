const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const timerRouter = require("./routes/timerRouter");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/api/timer", timerRouter);
/* app.get("/", (req, res) => {
  res.send("Homepage");
}); */

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
