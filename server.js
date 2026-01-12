const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Run request...`);
  res.setHeader("Content-Type", "text/html");
  res.write(`<h1>Hello World</h1>`);
  res.write("<h2>from tuna</h2>");
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log("Server is running on http://localhost:3000");
});