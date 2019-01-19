const os = require('os');
const cluster = require('cluster');
console.log("Checking your System...")
 // console.log(cpus);
 if(cluster.isMaster){
    const cpus = os.cpus().length;
    if(os.totalmem() < 4000000000){console.log("This app needs at least 4GB");}
    if(cpus < 2){console.log("Processor is not supported");}
 // console.log(os.totalmem());
 }
 console.log("System is ckeched successfully");