const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((request, response) => {
    const urlPath = url.parse(request.url).pathname;
    let filePath = `./client/${urlPath}`;

    fs.stat(filePath, (err, fileInfo) => {
        if (!err && fileInfo.isDirectory()) {
            filePath += "/index.html";
        }
        fs.exists(filePath, (doesExist) => {
          if (!doesExist) {
            response.statusCode = 404;
            response.end(`Resource not found .${urlPath}`);
          } else { fs.readFile(filePath, (err, data) => {
                     if (!err) {
                     response.end(data.toString('UTF-8'));
                     } 
                     response.statusCode = 500;
                     response.end(`Server error: "${err}"`);
                   });
          }
        });
    });  
});

const PORT = process.env.PORT || 3000;
server.listen(3000, ( _ ) => console.log(`Server listening on port ${PORT}`));