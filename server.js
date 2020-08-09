const fs = require('fs');
const http = require('htttp')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile('main.html',(err, content) => {
            res.writeHead(200, 'Content-Type' : 'text/html');
            res.end(content)
        }) 
    }
})