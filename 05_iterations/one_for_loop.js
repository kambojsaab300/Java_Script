// for


// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

for (let index = 2; index < 9; index++) {
    const element = index;
    // console.log(index)
}

for (let i = 0; i < 1; i++) {
    // console.log(`outer lop ${i}`)
    for (let j = 0; j < 3; j++) {
        
        // console.log(`inner loop value ${j} and inner loop ${i}` )

        for (let a = 0; a < 10; a++) {
        
            // console.log(`other loop ${a} j loop ${j} i loop ${i}`)
            
        }
        
    }
}

// array print in loop 

let myArray =  ["mohit", "raman", "sahil"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);

}