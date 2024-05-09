const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream(path.join(__dirname, "index.html"), { encoding: "utf-8" }).pipe(res);
});
server.listen(3003, () => {
  console.log("server created");
});
