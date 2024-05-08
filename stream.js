const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "bigfile.txt"), {
  encoding: "utf-8",
});

const ws = fs.createWriteStream(
  path.join(__dirname, "files", "new_bigfile1.txt")
);

// ! FIRST METHOD

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

// ! SECOND METHOD ( EFFICIENT way )
rs.pipe(ws);
