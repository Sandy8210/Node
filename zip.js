const fs = require("node:fs").promises;
const zlib = require("node:zlib");
const path = require("node:path");

const zip = zlib.createGzip();

const { createReadStream, createWriteStream } = require("fs");

const createZip = async () => {
  try {
    // ! READ THE FILE
    const data =createReadStream(path.join(__dirname, "files", "new.txt"), { encoding: "utf-8" });
    // const data = await fs.readFile(path.join(__dirname, "files", "new.txt"), { encoding: "utf-8" });

    // ! CREATE THE ZIP FOLDER

    await fs.mkdir("./zip");
    console.log("folder created");

    // ! READED FILE SEND TO THE NEW ZIP FOLDER

    // data.pipe(zip).pipe(fs.writestream(path.join(__dirname, "zip", "newZip.txt.zip")));
    const writeStream = createWriteStream(path.join(__dirname, "zip", "newZip.txt.zip"));
    data.pipe(zip).pipe(writeStream);

    // const dataWrite = awa
  } catch (err) {
    console.error(err);
  }
};

createZip();
