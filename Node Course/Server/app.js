// const http = require('http');

// function requestListener(req, res) {
//     console.log(req);
// }


// http.createServer(requestListener);

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);
