const fs   = require("node:fs")
const http = require("node:http");
const port = 3000;

const server = http.createServer((req, res) => {

  res.writeHead(200, {
    'content-type' : 'text/html'
  })

  const url = req.url;
  if(url == '/about') {
    res.write("<h1>Ini Adalah Halaman About</h1>");
    res.end()
  } else if (url == '/contact') {
    res.write("<h1>Ini Adalah Halaman Contact</h1>");
    res.end()
  } else {
    fs.readFile('./index.html', (err,data) => {
      if(err) {
        res.writeHead(404);
        res.write("Error: file not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  }

});
server.listen(port, () => {
  console.log(`Server is listening on port ${port}..`);
})