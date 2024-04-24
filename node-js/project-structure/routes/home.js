const home = require("express").Router();

home.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Home route",
  });
});

module.exports = home;
