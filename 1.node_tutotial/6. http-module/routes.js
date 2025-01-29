const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url; // will give the current url route
  console.log(req.url);
  if (url === "/") {
    // means url in base form
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("home page");
  } else if (url === "/project") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("project page");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page not found");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server live at port number : ${port}`);
});
