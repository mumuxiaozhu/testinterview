/**
 * Created by xiaozhu on 2017/9/14.
 */
var path = require('path')
var http = require('http')
var fs = require('fs')
var  url = require('url');
const server =http.createServer((req,res)=>{

    var pathobj=path.parse( req.url);
    var urlquery=url.parse(req.url);
    if(pathobj.ext=='.html'){//__dirname+
        fs.readFile(path.resolve(__dirname,"./src","./"+req.url),(err,data) => {

        if(err)  {
            //res.setHeader('Content-Type', 'text/html');
           // res.writeHead(301, {'Location': 'http://itbilu.com/'});
            res.writeHead(302, {
                'Location':'/html/404.html' });
            res.end();
            return ;
        }

            res.end(data)
        })
    } else if(true){//urlquery.query = callbackfun=JsonpBack&_=1506616245034  下次在解析

        res.end("JsonpBack({id:3,name:"+"星星"+"})")
    }else{
        res.end()
    }

})
server.on('clientError',(err,socket)=>{
    socket.end('HTTP/1.1 400 Bad Request \r\n\r\n')
})
server.listen(8000);
/*
var express = require('express')

var app = express();
app.get('/',(req,res)=>{
    res.setHeader("Content-Type","text/html");
    const errorHandler = err =>{
        if(err&&err.code ===404){
            res.status(404).end('404 | Page Not Found')
        }else{
            res.status(500).end('500 | Internal Server Error')
            console.error(`error during render : ${req.url}`)
        }
    }


    return res.sendFile(__dirname+"/src/html");
})

const port = process.env.PORT||8080;
app.listen(port,()=>{
    console.log(`server started at localhost:${port}`)
})*/
