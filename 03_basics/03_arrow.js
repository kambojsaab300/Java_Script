const user = {
    username: "mohit",
    prince: 20,

    welcomemsg: function(){
        console.log(`my name is ${this.username}`)
        console.log(this)
    }
}

// user.welcomemsg()
// user.username = "ms"
// user.welcomemsg()

// console.log(this)

//1

function chai(){
    let name = "hitesh"
    const age = 20

    console.log(this.username)

}

// chai()

//2

const chai2 = function () {
    let name = "hitesh"
    const age = 20
    console.log(this.username)
}

// chai2()

//3

const chai3 = () => {
    let name = "hitesh"
    const age = 20
    console.log(this.username)
}

// chai3()

// arrow function 2015 

// arrow function simple way

//basic arrow functions

// const addArrow1 =  (num1, num2) => {
//     return num1 + num2 // need return impliment
    
// }

// console.log(addArrow1(4, 7))



// arrow function advance way

// not need impliment return keyword 

const addArrow2 =  (num1, num2) =>  num1 + num2;
const addArrow3 =  (num1, num2) =>  (num1 + num2);

// console.log(addArrow2(5,8))

// object return in arrow function 

const objfun =  () =>  ({
    name: "hitesh"
});

// console.log(objfun())

// array return in arrow function 

// const myArray = [22, 44, 55, 88, 99]

// myArray.forEach();



