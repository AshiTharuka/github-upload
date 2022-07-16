// function ligWarningMsg(){
//     console.log("WARNING : " + message)
// }
var log = {
    logWarningMsg : function(message){
        console.log("WARNING : " +message)

},
logErrorMsg : function(message){
    console.log("ERROR : " +message)
},
logInfoMsg : function(message){
    console.log("INFO : " +message)},
    myName : "Ashi",
    stdObj : {
        name: "Äshi",
        age: 27,
        isEnrolled : true
    }
}
module.exports = log


// var logWarningMsg = function(message){
//     console.log("WARNING : " +message)
// }

// var logErrorMsg = function(message){
//     console.log("ERROR : " +message)
// }

// var logInfoMsg = function(message){
//     console.log("INFO : " +message)
// }

//logErrorMsg("Allocated memory has exceeded. System has crashed!")
//logInfoMsg("System is backup and running. Start your services.")

//module.exports.logInfoMsg = logInfoMsg
//module.exports.logErrorMsg = logErrorMsg
//module.exports.printmessage = logWarningMsg
//module.exports//export a function to another module in node
