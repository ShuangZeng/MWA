const express = require('express');
const axios = require('axios');
var path = require('path');
const { promisify } = require('util')
const app = express();
const port = 4000;

const fetch = promisify(axios)

app.set('env', 'development')
app.set('case sensitive routing',true);
app.set('strict routing', true);
app.set('view cache', false);
app.set('x-powered-by', false);
app.set('trust proxy', true);

var oneDay = 86400000; // in milliseconds
app.use(express.static(path.join(__dirname, 'public'), {
    maxage: oneDay
}))

app.get('/users', function(req,res){
    const data = getData()
    data.then(response => res.json(response))
    .catch(err => res.end(err));
   
})

async function getData(){
    try {
        const res = await axios('https://randomuser.me/api/?results=10')
        return res.data.results;
    } catch (error) {
      console.log(`error: ${error}`)  
    }
}

app.listen(port, () => {console.log('The server is running on port %i', port)})