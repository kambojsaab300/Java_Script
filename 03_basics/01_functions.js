

function sayMyName() {
    console.log("M");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}

sayMyName() // referance and execute

// number1 perametors

// function addTwoNumers(number1, number2){
//    console.log(number1 + number2);
// }

// addTwoNumers(3, null) //addTwoNumers(3, null [arguments]) 


function addTwoNumers(number1, number2){
    // let  result = number1 + number2 
    // return result

    return number1 + number2
 }

 const result = addTwoNumers(3, 2)

 console.log("Result: ", result);

// 1

// ... rest operator 

// how to pass value in function operator 
// pass value in perametors ...num1 
function calculateCartPrinc(...num1){  
    return num1
}

// console.log(calculateCartPrinc(200, 300, 400, 500))


//2 way to object pass

const user = {
    userName: "mohit",
    price : 99
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

handelObject(user)


handelObject({
    userName: "sam",
    price: 99
})

// passing array with functions

const myArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray))


