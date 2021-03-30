const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("good bye world good bye people");
});

app.get("/satan", (req, res) => {
  res.send("welcome satan :<");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
