//program basically creates a server 
//when the server is in our own machine we will search in browser as "localhost:port_number"

var http = require('http');
http.createServer(function(req,res){  //req=request by client,res=response by server,createServer method have 2 arguments
    //response is given in the html format
    
    res.writeHead(200,{//200 = ok,request is successfull
        'Content-Type':'text/html'
    }); // /plain,bold... 

    res.write("welcome to my server<br>");
    res.end('Hello World');

}).listen(8066);//port_number our choice
// "(" starting barces
// function will get executed the no of times client makes a request to it


//const -will not be changing through out the program
//var may change