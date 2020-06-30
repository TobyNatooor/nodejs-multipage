
const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3000
let htmlFile

http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    switch (pathname) {
        case '/other':
            htmlFile = 'other.html'
            break;
        case '/':
            htmlFile = 'index.html'
            break;
        default:
            htmlFile = 'fail.html'
            break;
    }

    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    fs.readFile(htmlFile, (err, html) => {
        if (err) throw err;
        res.end(html)
    })
    
}).listen(port)
