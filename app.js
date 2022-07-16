var logger = require("./log")
var http = require("http");

var server = http.createServer(function (req, res){
     if(req.url == '/'){
         res.write("Hello world! Thanks for connecting with us")
         res.end()
     }

    else if(req.url == '/pizzas')
    {
        var pizzaList = ['Deviled Chicken', 'BBQ', 'Pepporoni']
        var pizzaObj = {name:"Deviled Chicken", price:"234"}
        res.setHeader("Content-Type", "application/json")//pass as json
        res.write(JSON.stringify(pizzaObj))//chrome doesn't have json responses
        res.end()
    }
});


server.listen(5000); 
console.log("Running on port 5000")

server.on('connection', function (){
    console.log("Connected to the server!")

})






// logger.logInfoMsg("Service is starting up....")
// logger.logErrorMsg("System is crashing down...")
// logger.printmessage("System is pending...")

// console.log(logger.myName)