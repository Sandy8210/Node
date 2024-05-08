const file = require("node:fs").promises;
const path = require("node:path");

const fileOperation = async () => {
  try {
    const data = await file.readFile(
      path.join(__dirname, "files", "rename.txt"),
      "utf8"
    );

    console.log(data);

    const newContent = "new File created";
    await file.writeFile(path.join(__dirname, "files", "new.txt"), newContent);
    console.log("write operation complete");

    const updateNew = "some content Updated";
    await file.appendFile(path.join(__dirname, "files", "new.txt"), updateNew);
    console.log("update operation complete");

    const readNew = await file.readFile(
      path.join(__dirname, "files", "new.txt"),
      "utf8"
    );
    console.log(readNew);

    await file.unlink(path.join(__dirname, "files", "rename.txt"));
    
  } catch (err) {
    console.log(err);
  }
};

fileOperation();
