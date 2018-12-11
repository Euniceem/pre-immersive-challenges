module.exports = function checkAscOrder(numArray) {
  // write your code in here
var boo = true
for(var i = 1; i<numArray.length; i++){
  if(numArray[i] > numArray[i-1]){
    boo = true
  }else{
    return false;
  }
  //if(numArray[i+1] > numArray[i])

}
  return boo;

}

//items in the array are in ascending order
//data type array
//check each item in the array
//check for each unmber except for the first one