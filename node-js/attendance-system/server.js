const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const obj = {
    name: "Minal Ahmed",
    email: "minal@gamil.com",
  };
  res.json(obj);
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
