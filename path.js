const path = require("node:path");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__dirname));
console.log(path.extname(__filename));

console.log(path.parse(__dirname));
console.log(path.parse(__filename));

console.log(path.format(path.parse(__dirname)));
console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./app"));

console.log(path.join("form1", "form2", "index.js"));
console.log(path.join("/form1", "form2", "index.js"));
console.log(path.join("/form1", "//form2", "index.js"));
console.log(path.join("/form1", "//form2", "../index.js"));
console.log(path.join("/form1", "//form2", "../../index.js"));

// console.log(path.resolve("form1", "form2", "index.js"));
// console.log(path.resolve("/form1", "form2", "index.js"));
// console.log(path.resolve("/form1", "//form2", "index.js"));
// console.log(path.resolve("/form1", "//form2", "../index.js"));
