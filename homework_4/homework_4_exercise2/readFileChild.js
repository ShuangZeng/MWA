const fs = require('fs')
const path = require('path')


var readfile = function(pathName){
    const readStream = fs.createReadStream(pathName);
    readStream.on("data", (data) => {
        // console.log('chunck: '+data)
        process.send(data.toString());
    })
    
    readStream.on("end", (end) => {
        // console.log('end')
        process.send("asaad");
    })
}

process.on('message', file =>{
    var filename = path.join(__dirname, file);
    readfile(filename);
})