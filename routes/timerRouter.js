const express = require("express");
const router = express.Router();
const Timer = require("../models/timer");

router.get("/", async (req, res) => {
  const timerData = await Timer.find({});
  res.status(200).json(timerData);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const newTimer = {
    timerSeconds: body.timerSeconds,
  };
  console.log(newTimer);
  const timerFound = await Timer.findByIdAndUpdate(id, newTimer, {
    new: true,
  });
  res.status(200).json(timerFound);
});

module.exports = router;
