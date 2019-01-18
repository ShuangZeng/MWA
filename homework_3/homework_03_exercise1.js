const dns = require("dns");
//use sync
dns.resolve4('www.mum.edu',(err, addresses) => {console.log(err);console.log(addresses)});
//use promise
const util = require("util");
// const fs = require("fs");
const resolve4Async = util.promisify(dns.resolve4);
resolve4Async('www.mum.edu').then((addresses) => {console.log(addresses);})
                                            .catch((err) => {console.log(err);});
//use async/await
async function main(){
    try{
        addresses = await resolve4Async('www.mum.edu');
        console.log(addresses);
    }catch(err){
        console.log(err);
    }
}
main();