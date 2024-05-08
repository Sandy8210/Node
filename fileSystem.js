const fs = require("node:fs");

const path = require("node:path");

console.log(" ------------call back hell example-------------");

// Create a file

const data = "file created";

fs.writeFile(path.join(__dirname, "files", "new.txt"), data, (err) => {
  if (err) throw err;
  console.log("file created");

  //   Read file

  fs.readFile(path.join(__dirname, "files", "new.txt"), "utf8", (err, data) => {
    if (err) throw err;

    console.log("new.txt file data is : ", data);

    // Update a file

    const updateData = "\n new Data added to the new.txt file";
    fs.appendFile(
      path.join(__dirname, "files", "new.txt"),
      updateData,
      (err) => {
        if (err) throw err;

        // read file

        fs.readFile(
          path.join(__dirname, "files", "new.txt"),
          "utf8",
          (err, data) => {
            if (err) throw err;
            console.log("updated data :", data);

            // rename file

            fs.rename(
              path.join(__dirname, "files", "new.txt"),
              path.join(__dirname, "files", "rename.txt"),
              (err) => {
                if (err) throw err;
                console.log("rename successfully");
              }
            );
          }
        );
      }
    );
  });
});

process.on("uncaughtException", (err) => {
  console.error(`unCaught Exception is occur ${err}`);
  process.exit(1);
});
