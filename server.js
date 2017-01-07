
const fs = require('fs');
const http = require('http');

const httpRequest = require('./connect-api').httpRequest;
const sendRequest = require('./change-name').sendRequest;

var path = process.argv[2];


//console.log(path);

 fs.readdir(path,(err,files)=>{
   if(err){

       console.log(err);
        return;}

        for(i=0;i<files.length;i++){


          sendRequest(files[i]).then(function (data) {

            //console.log("data mil gaya hai ");
            console.log(data + "\n");
            }).catch(function(err){
            //console.log("we got the error");
            console.log("end Error is " + err + "\n");
            });




  //         fs.rename(path + "/"+ files[i] , path + '/abc' + files[i] ,function (err) {
  //    if(err) throw err;
  //    console.log("rename complete");
  //  });

        }
        
    console.log(files);

    



 });

 


// }


// fixNameGetRating(files){

// }

//getRating('the incredibles');



var fileName = 'Before I Go to Sleep (2014) 720p BluRay x264 [Dual Audio] [Hindi 2.0 - English 2.0] Exclusive By -=!Dr.STAR!=-';

var res = fileName.split('.');

//console.log(res);


var getRatingFromData = function (data) { 

  return data.imdbRating;

 };












//sendRequest(fileName);