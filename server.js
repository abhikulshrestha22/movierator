
const fs = require('fs');
const http = require('http');

const httpRequest = require('./connect-api').httpRequest;

var path = process.argv[2];


//console.log(path);

// fs.readdir(path,(err,files)=>{
//    if(err){

   
//    console.log(err);
// return;}
//     fixNameGetRating(files);
// })





// var getRating = function(url){
//     var path = 'http://www.omdbapi.com/?t='+ url;
//     http.get(path, (res) => {
//     const statusCode = res.statusCode;
//     const contentType = res.headers['content-type'];

//     let error;
//     if (statusCode !== 200) {
//         error = new Error(`Request Failed.\n` +
//                         `Status Code: ${statusCode}`);
//     } else if (!/^application\/json/.test(contentType)) {
//         error = new Error(`Invalid content-type.\n` +
//                         `Expected application/json but received ${contentType}`);
//     }
//     if (error) {
//         console.log(error.message);
//         // consume response data to free up memory
//         res.resume();
//         return;
//     }

//     res.setEncoding('utf8');
//     let rawData = '';
//     res.on('data', (chunk) => rawData += chunk);
//     res.on('end', () => {
//         try {
//         let parsedData = JSON.parse(rawData);
//         console.log(parsedData.imdbRating);


//         } catch (e) {
//         console.log(e.message);
//         }
//     });
//     }).on('error', (e) => {
//     console.log(`Got error: ${e.message}`);
//     });



// }


// fixNameGetRating(files){

// }

//getRating('the incredibles');



var fileName = 'Before I Go to Sleep (2014) 720p BluRay x264 [Dual Audio] [Hindi 2.0 - English 2.0] Exclusive By -=!Dr.STAR!=-';

var res = fileName.split('.');

//console.log(res);


// Get the fileName


// Check if the movie exists or not

//if not then remove the last word 

//repeat till words are 0





//=========================== get name of the movie out of the raw file or folder name==================
//============================and choose one of them as the movie title=================================
//============================== the approach i am using here is ========================================
//================================= if the movie name is ==================================================
//              Pet.2016.HDRip.XViD-ETRG
// then first check if it contains "." or " "
// if it contains . then remove the last part of the string (then the string would be Pet.201.HDRip) and send the http request to the api
// else do the same, remove another last part(then the string would be Pet.2016) 
// repeat it untill there is no "." or " " left
// if the http request get the result in any case, return true as well and stop furthur 




//getNameFromRaw(fileName);

var sendRequest = function(fileName){
httpRequest(fileName).then(function (data) {  
    console.log("resolve" + JSON.stringify(data,null,4));
try{
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
            //}
        }

        





}

}catch(e){
    console.log("this is the data " + data);
}
    
}).catch(function (err) {  
    console.log("error " + err); 
});
};

sendRequest(fileName);