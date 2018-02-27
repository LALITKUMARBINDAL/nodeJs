var imports = {
    fs: require('fs'),
    http: require('http')
}

function hello (req, res){
    console.log('someone hit me');
    res.write('hey. Im from server.');
    res.end();
}

var server = imports.http.createServer(hello);




ourFunction = function (a, num) {
    // this function will assume argument given to it as method. because it is calling it in next line.
    a("hello");
}

ourFunction(function (str) { // Benaam ka function. we are giving it as argument.
    console.log('u said: ' + str);
});


ok = {
    myCustomServer: server,
    number: 3,
    ourFunction: ourFunction
};
module.exports = ok;
imports.fs.writeFile('./hello.txt', "data");




/*
functionName <-- only varible's name . yahaa variable is a function.
functionName() < - calling ho RTCIceCandidatePairChangedEvent.apply

functionCall(anotherFunction) <-- always give only the name of function , dont call it here.
*/
