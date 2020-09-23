const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api", (req, res) => {
  res.send("Hello world 2!");
});

app.listen(3000, () => console.log("app listening on port 3000!"));
