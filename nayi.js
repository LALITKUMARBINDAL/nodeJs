//definition is only definition. will be used only when they're called. actually.

//only use of defnition is that you get a name for the function. so that you give only the name 
//while giving it to another function (as argument i mean)

simpleMethod = function (num1, num2) { // this is definition.
    console.log(num1);
    console.log(num2);

}
getNumber = function() {
    return 6;
}

simpleMethod(5, getNumber());




var fs = require('fs');

callback = function(err, data){
    if(err == null){
        console.log(data);
    }
    else{
        console.log('oops')
    }
}

fs.readFile('./hello.txt', function(err, data){
    if(err == null){
        console.log(data);
    }
    else{
        console.log('oops')
    }
});
//console.log(filedata);


/*
readFile = function (str, callbck) {
    data = readFileFromThisLOcation(str);
    if(data == null)
        err = 1;
    // yaha pe jaadu kar rkha h.. ki bhaiya aage tabhi jaio jab data aa jae.
    if( callback != null)
        callback(err, data);
    else
        // gallia de saalo ko.     
}

*/