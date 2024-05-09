// const fs = require("node:fs");
// const http = require("node:http");
// const path = require("node:path");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     fs.createReadStream(path.join(__dirname, "form.html"), { encoding: "utf-8" }).pipe(res);
//   }

//   if (url === "/message" && method === "POST") {
//     const arr = [];

//     req.on("data", (chunk) => {
//       arr.push(chunk);
//     });

//     res.on("end", () => {
//       const parseBody = Buffer.concat(arr).toString();
//       //   const message = parseBody.split('=')
//       console.log(parseBody);
//     });
//   }

//   res.setHeader("content-type", "text/html");
//   res.write("<h1>Server Work agirucheyyyyyyyyyyyt</h1>");
//   res.end()
// });

// server.listen(3010, () => {
//   console.log("server running");
// });

const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    const html = fs.readFileSync("./form.html", "utf-8");
    res.writeHead(200, { "content-type": "text/html" });
    return res.end(html);
    // fs.createReadStream(path.join(__dirname, "form.html"), { encoding: "utf-8" }).pipe(res);
  }

  if (url === "/message" && method === "POST") {
    const arr = [];

    req.on("data", (chunk) => {
      arr.push(chunk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(arr).toString();
      console.log(parseBody); // Log the parsed body data
      //   res.writeHead(302, { Location: "/" }); // Redirect back to the form
      const decodedBody = decodeURIComponent(parseBody);
      const message = decodedBody.split("=");
      console.log(message);

      fs.appendFileSync("./serverData.txt", message[1]);

      res.end();
    });
  }
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Summe server pakkam vantahan</h1>");
  res.end();
});

server.listen(3010, () => {
  console.log("server running on port 3010");
});
