// const express = require("express");
// const app = express();
// const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("good bye world");
// });

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    // res.write("goodbye world");
    res.end("goodbye world i am going to try it with express later on");
  })
  .listen(process.env.PORT);
