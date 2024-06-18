// while and do while loop

//while

let index = 0; // Ensure index is defined and initialized

while (index <= 10) {
    console.log(`index value ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 20

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);