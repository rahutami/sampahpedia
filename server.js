const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === "/" ? "main.html" : req.url)
    let extName = path.extname(filePath)
    console.log(filePath)
    let contentType = "text/html";

    switch (extName) {
        case ".js":
          contentType = "text/javascript";
          break;
        case ".css":
          contentType = "text/css";
          break;
        case ".json":
          contentType = "application/json";
          break;
        case ".png":
          contentType = "image/png";
          break;
        case ".jpg":
          contentType = "image/jpg";
          break;
        case ".svg":
          contentType = "image/svg";
          break;
      }

    if(req.url === '/'){
        fs.readFile(filePath,(err, content) => {
            console.log(err)
            res.writeHead(200, {'Content-Type' : contentType});
            res.end(content, "utf-8")
        }) 
    }
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));