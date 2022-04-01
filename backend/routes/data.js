const express = require("express");
const router = express.Router();
const Data = require("../models/data");
// get all

router.patch("/update", async (req, res) => {
  const oldData = await Data.findOne({ email: "arushsarna@gmail.com" });

  try {
    const data = await Data.findOneAndUpdate(
      { email: "arushsarna@gmail.com" },
      {
        profit: oldData.profit + req.body.profit + ",",
        drawdown: oldData.drawdown + req.body.drawdown + ",",
        capital: oldData.capital + req.body.capital + ",",
      }
    );
    const newData = await Data.findOne({ email: "arushsarna@gmail.com" });
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get 1 data
router.get("/:id", (req, res) => {});
// 1 month data
router.get("/month", (req, res) => {});
// weekly data
router.get("/week", (req, res) => {});
// delete 1
router.delete("/:id", (req, res) => {});
// update data
router.patch("/patch", (req, res) => {
  // try {
  //        await Data.findOneAndUpdate(
  //     {
  //       email: "arushsarna@gmail.com",
  //     },
  //     {
  //       $addToSet: {
  //         array: "500",
  //       },
  //     }
  //   );
  //   res.status(201).json(newData);
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }
});

// create data
router.post("/post", async (req, res) => {
  const data = new Data({
    // capital: req.body.capital,
    // drawdown: req.body.drawdown,
    array: req.body.array,

    email: req.body.email,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;
