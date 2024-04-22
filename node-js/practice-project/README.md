# Introduction Backend

-- Using the raw node js and create a server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1>");
    res.end();
  } else if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello Guest</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
```
