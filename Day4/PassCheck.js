//Create function
//Input user ID and Password
// User ID string has to be a least six characters long and cannot contain !#$




function checkID(password, userId) {
  if (password === userId) { //If password is the same as userId return false.
      return false;
  } else if (userId.length < 6 ){ //If the length of userId is less than 6 than return false.
      return false;
  } else if (userId.includes('!') || userId.includes('#') || userId.includes('$')) { //If userId includes either ! or # or $ return false.
      return false;
  } else if (!password.includes('!')) {
      return false;
  } else if (!password.includes('#')) {
      return false;
  } else if (!password.includes('$')) { //If password does NOT include  ! or # or $
      return false;
  } else if (password === "password") { //If passowrd equals "password" return false
      return false;
  } else {
       return true;
  }

}
checkID('Bobby!','apple11d');
console.log("Accepted password and User ID Combination");


//IDEAS:
// 1) Split() the username string and convert to an array. username.split('')
// 2) Store the new array to var usernameArr
// 3) Check the array to see if it includes() our var         badChars[array].

// "#" !== username ||



// // Working Product

// var password = " "
// var usernameArr = username.split("")
// var badChars = ["!", "#", "$"]

// var username = "Kristen!"
// var badChars = "!"
//
// function checkID(name) {
//     if (username.includes(badChars)) {
//       console.log("Can't use !#$ in username.")
//     } else {
//       console.log("Looks great")
//     }
//
//   }
//
// checkID(username);
