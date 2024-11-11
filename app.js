const fs   = require("node:fs")
const http = require("node:http");
const path = require("node:path");
const port = 3000;

// untuk membaca file html
const renderHTML = (halaman, res) => {
  fs.readFile(halaman, (err,data) => {
    if(err) {
      res.writeHead(404);
      res.write("Error: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};


const server = http.createServer((req, res) => {

  res.writeHead(200, {
    'content-type' : 'text/html'
  })

  const url = req.url;
  if(url == '/about') {
    renderHTML('./about.html', res)
  } else if (url == '/contact') {
    renderHTML('./contact.html', res)
  } else {
    renderHTML('./index.html', res);
  }

});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}..`);
})