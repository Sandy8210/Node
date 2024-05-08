// const fs = require("node:fs");

// fs.mkdir("./new", (err) => {
//   if (err) throw err;
//   console.log("dir created");
// });

// process.on("uncaughtException", (err) => {
//   console.log(`there was an error ${err}`);
//   process.exit(1);
// });

const fs = require("node:fs").promises;

const createDir = async () => {
  try {
    await fs.mkdir("./newDir");
    console.log("dir created successfully");
  } catch (err) {
    console.log(err);
  }
};

createDir();
