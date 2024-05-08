const fs = require("node:fs").promises;
const path = require("node:path");

const data = "file created";
const updateData = "file updated ..";
const fileOperation = async () => {
  try {
    await fs.mkdir("./textDir");
    console.log("directory created");

    // ! Create a file inside the created dir

    await fs.writeFile(path.join(__dirname, "textDir", "newFile.txt"), data);
    console.log("file created in new dir");

    // ! Read a new file
    const readFile = await fs.readFile(
      path.join(__dirname, "textDir", "newFile.txt"),
      "utf8"
    );
    console.log(readFile);

    // ! Update a new file

    await fs.appendFile(
      path.join(__dirname, "textDir", "newFile.txt"),
      updateData
    );

    console.log("data updated");

    // ! Read Updated File

    const readUpdatedFile = await fs.readFile(
      path.join(__dirname, "textDir", "newFile.txt"),
      "utf8"
    );
    console.log(readUpdatedFile);

    // ! Rename the file

    await fs.rename(
      path.join(__dirname, "textDir", "newFile.txt"),
      path.join(__dirname, "textDir", "RenameFile.txt")
    );
    console.log("renamed");

    // ! Delete the File

    await fs.unlink(path.join(__dirname, "textDir", "RenameFile.txt"));

    // ! Delete the Dir

    await fs.rmdir(path.join(__dirname, "textDir"));
  } catch (err) {
    console.error(err);
  }
};

fileOperation();
