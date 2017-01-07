
const http = require('http');
const httpRequest = require('./connect-api').httpRequest;

/*
    sendRequest - I am a the most imp function in this whole app.
                I take the name of the file and send a httpRequest 
                if I get an error of movie not found, I twerk the title a bit like as removing the words after a "." or " "
                and then send again the httpRequest until I dont get the desired result 
                or there is no scopt left of such twerking
 */

var sendRequest = function(fileName){

    return new Promise(function (resolve,reject) {
            
        httpRequest(fileName).then(function (data) {  

    //console.log("resolve" + JSON.stringify(data,null,4));
try{

    console.log("this is the try block");
    if(data.Error==="Movie not found!"){
        console.log("movie not found");

        if(fileName.includes(".")){
        var lastIndex = fileName.lastIndexOf(".");}

        if(fileName.includes(" ")){
            var lastIndex = fileName.lastIndexOf(" ");
        }

        str = fileName.substring(0, lastIndex);

        console.log(str);
        if(str!==fileName){
           // httpRequest(str);
           sendRequest(str);
        }
        else{
            // fileName = str;
            // var lastIndex = fileName.lastIndexOf(".");
            // str = fileName.substring(0, lastIndex);

            // if(str!==fileName){
            //     sendRequest(str);
            // }


            // else{
            console.log("this is the end");
            reject("this is the end");
            //}
        }

        





}
else{
    console.log("mil gayyi");
    resolve(data);
}

}catch(e){
    console.log("this is the data " + data);
    resolve(data);
}
    
}).catch(function (err) {  
    reject(err);
    console.log("error " + err); 
});
            

      });

};


module.exports = {
    sendRequest
};