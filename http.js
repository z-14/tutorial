const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Home Page')

    }if(req.url === '/about'){
        res.end('welcome about')

    }

    res.end(`error`)


})

server.listen(5000)