const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.write("Welcome to our home page");
    return res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    return res.end("Here is our short history");
  }
  return res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Go back to home</a>
    `);
});

server.listen(5000);
