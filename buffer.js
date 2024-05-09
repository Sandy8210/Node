const fs = require("node:fs");
const path = require("node:path");

const readableStream = fs.createReadStream(path.join(__dirname, "files", "new.txt"), { encoding: "utf-8", highWaterMark: 2 });

const writableStream = fs.createWriteStream(path.join(__dirname, "files", "stream.txt"));

// readableStream.pipe(writableStream);

readableStream.on("data", (chunk) => {
  writableStream.write(chunk);
});
