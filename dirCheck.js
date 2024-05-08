const fs = require("node:fs");
const path = require("node:path");

// ! Create a dir ! same name it's true the dir will be created
if (!fs.existsSync("./newDir")) {
  fs.mkdir("./newDir", (err) => {
    if (err) throw err;
    console.log("dir created");
  });
}

// ! Already the dir exist the dir will be removed
else {
  fs.rmdir("./newDir", (err) => {
    if (err) throw err;
    console.log("remove the dir");
  });
}

// ! Catch the error and print

process.on("uncaughtException", (err) => {
  console.error(`there was an error ${err}`);
  process.exit(1);
});
