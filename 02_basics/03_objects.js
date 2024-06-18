// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // how to use symbol

const JsUser = {   // functions 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    [mySym]: "mykey1", //symbol defince syntax
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]  
}

// console.log(JsUser.email)
// console.log(JsUser["name"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  //symbol

// JsUser.email = "google@gmail.com"
// Object.freeze(JsUser) // no change value 
JsUser.email ="raman@google.com" // no change because add freeze method

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello world")
}

// console.log(JsUser.greeting); // only function referance
console.log(JsUser.greeting());  

JsUser.greetingTwo = function(){
    console.log(`hello world, ${this.name}`  ); // `` convert backtick // property) name: string
}

console.log(JsUser.greetingTwo()); // () exicute

