const http = require("node:http");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head> <title> Hello .... </title> </head> ");
  res.write("<body> <h2 style=color:red >Hello Sandy ... </h2> </body> ");
  res.write("</html>");
  res.end();
});

server.listen("3003");

const file = require("node:fs");

file.writeFileSync("serverData.txt", "summa data potan");
file.writeFileSync("serverData1.txt", "summa data potan");
file.writeFileSync("serverData1.docs", "summa data potan");
file.writeFileSync("serverData1.js", "summa data potan");
