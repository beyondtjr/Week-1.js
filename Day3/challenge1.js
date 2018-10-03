//HIGHEST NUMBER
// var number = [1.2, 4.0, 3.3, 0.6, 2.4];
// var max = 0 ;
// for (i=0; i<number.length; i++){
//   if (max < number[i]){
//      max = number[i]
//   }
// }
// console.log(max);

//HIGHEST NUMBER IN NEGATIVE
// var number = [-12, -4, -3, 0, -2];
// var max = -1 ;
// for (i=0; i<number.length; i++){
//   if (max < number[i]){
//      max = number[i]
//   }
// }
// console.log(max);




// //LOWEST NUMBER NEGATIVE
// var number = [-12, -4, -3, 0, -2];
// var max = -1 ;
// for (i=0; i<number.length; i++){
//   if (max > number[i]){
//      max = number[i]
//   }
// }
// console.log(max);


// LOWEST NUMBER POSITIVES
// var number = [12, 4, 3, 40, 2];
// var max = 1 ;
// for (i=0; i<number.length; i++){
//   if (max > number[i]){
//      max = number[i]
//   }
// }
// console.log(max);
//

// LOWEST FLOAT
// var number = [0.1,0.01,0.001];
// var max = 0 ;
// function lowestNumber(number) {
//   for (i=0; i<number.length; i++){
//     if (max < number[i]){
//        max = number[i]
//     }
//   }
// }
// lowestNumber();
// console.log(max);

//
//  Calculatin Sum of an Array
// var sumNumber = [1, 2, 3];
// var sum = 0
// function sumNum(sumNumber){
//   for (i=0; i < sumNumber.length; i++) {
//     sum = sumNumber[i] + sum;
//   }
// }
//
// sumNum(sumNumber);
// console.log(sum)


// Calculatin Sum of an Array
// var sumNumber = [];
// var sum = 0
// function sumNum(sumNumber){
//   for (i=0; i < sumNumber.length; i++) {
//     sum = sumNumber[i] + sum;
//   }
// }
//
// sumNum(sumNumber);
// console.log(sum)

// // Calculating Averages of an Array.
// var number2 = [1,2,3];
// var sum = 0
// var avg = 0
// function average(number2){
//   for (i=0; i < number2.length; i++) {
//     sum = number2[i] + sum;
//     avg = sum / number2.length
//   }
// }
//
// average(number2);
// console.log(avg)

//
// // Index of Highest Number.
// var number = [10,4,2];
// var max = 0 ;
// var ind = 0;
// for (i=0; i<number.length; i++){
//   if (max < number[i]){
//      max = number[i]
//      ind = number.indexOf(max)
//   }
// }
// console.log(ind);


//Index of Highest Number Negative
var number = [-10,-2,-26];
var max = 0 ;
var ind = 0;
function findMax(number){
for (i=0; i<number.length; i++){
  if (max < number[i]){
     max = number[i]
     ind = number.indexOf(max)
  }
}
}
findMax(number);
console.log(max);
