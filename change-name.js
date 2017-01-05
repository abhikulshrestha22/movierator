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


var getNameFromRaw = function (str) { 

    if(str.includes(".")==false){
        return "";
    }
    else{

   
var lastIndex = str.lastIndexOf(".");

str = str.substring(0, lastIndex);
console.log(str);
return getNameFromRaw(str);

    }
 };


 