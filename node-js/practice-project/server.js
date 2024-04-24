const express = require("express");

const app = express();
app.use(express.json());

app.use(express.static(__dirname + "/public")); //server static middleware
const simpleLogger = (req, res, next) => {
  console.log(`Method: ${req.method}, URL: ${req.url}`);
  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("Second Middleware");
  next();
};

// app.use(simpleLogger); // global middleware

app.use([simpleLogger, secondMiddleware]);
app.get("/", (req, res) => {
  res.json({ message: "Sweet Home" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
