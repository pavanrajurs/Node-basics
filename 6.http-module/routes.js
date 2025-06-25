const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("HOME PAGE");
  } else if (url === "/projects") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("PROJECTS PAGE");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end(" PAGE NOT FOUND");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
