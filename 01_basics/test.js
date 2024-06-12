const userId = 454545 // no value change
let userEmail = "mohit@gmail.com" //
var userPassword = "93434"   // not use  (If I use the variable again {userPassword} all the old values ​​will change)
 
let userState;

// var not understand scope {} so that (Therefore it is not used)



/*
prefer not to use var
beacuse of issue in block scope and function scope
*/

// userId = 4er433 not change

userEmail = "raman@gmail.com"
userPassword = "000000"

console.table([userId, userEmail, userPassword, userState])