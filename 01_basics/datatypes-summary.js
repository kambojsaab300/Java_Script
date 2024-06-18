//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


// " " string format 
// {} object format 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// 


// stack (primitive), heap (no-primitive)

let userName = "mohit"
let userid = userName //value copy

userName = "kamboj"

// console.log(userName)
// console.log(userid)

let user1 = {
    email: "mohit@gmail.com", 
    upi: "upi@gmail"
}

let user2 = user1

user2.email = "ramankamboj@gmail.com" //permanent value change no copy

console.log(user1)

console.log(user2.email)
