var express = require('express');
var router = express.Router();

/* GET api data. */
app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

module.exports = router;
