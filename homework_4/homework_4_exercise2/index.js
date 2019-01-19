const http = require('http');
const { fork } = require('child_process');
const url = require('url');
const path = require('path');


http.createServer().on('request', (req, res) => {
    const filePath = url.parse(req.url, true).query.url;

    var childProcess = fork(path.join(__dirname, 'readFileChild.js'));

    childProcess.send(filePath)

    childProcess.on('message', (message) => {
        console.log(message)
        if (message !== 'asaad') {
            res.write(message);
        } else {
            console.log('been end')
            res.end();
        }
    });

}).listen(3000);
