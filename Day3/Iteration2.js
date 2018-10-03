// Duplicate Array
var array1 = [1,2,3]
var array2 = [2, 30, 1]
var newArr = []

// function mergeArray(){
var mergArr = array1.concat(array2)
for (i=0; i<mergArr.length; i++){
  if (!newArr.includes(mergArr[i])){
    newArr.push(mergArr[i])
  }
}


// mergeArray();
console.log(newArr)

//!array.includes() -- will find and element within an array but exclude what it finds.
