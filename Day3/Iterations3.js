// //Pre-fill
// var newArr = [];
// function fillArray(a,b){
//   var i = 0
//   while (i<=a){
//     newArr.push(b);
//     i = i+1;
//   }
// console.log(newArr);
// }
//
// fillArray(9,1)


// Clean Function

var filterArr = ([58, '', 'abcd', true, null, false, 0])


function filter(arr){
  var newArray = []
    for (i=0; i < arr.length; i++){
      if (!arr[i] === false || !arr[i] === null || !arr[i] === 0){
      newArray.push(arr[i])
  // } else if (filterArr[i] != null){
  //   newArray.push(filterArr[i])
  // } else if (filterArr[i] != 0){
  //   newArray.push(filterArr[i])

      }
    }
  return newArray
}
console.log(filter(filterArr))

//Need to create a function to check for false, null,


// Sum target
