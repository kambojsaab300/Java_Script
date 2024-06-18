// array

const myArr = [1, 2, 3, 4, 5, ]

const myHeors = ["mohit", "raman"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr2[0])

// Array methods

// myArr.push(6, 7, 8, 9) // value add

myHeors.pop() // last value remove

// myArr.unshift(9) // add value first value

// myArr.shift() // remove 1 index (value)

// console.log(myArr.includes(10)) // value = false
// console.log(myArr.indexOf(11)) // value = -1

const newArr = myArr.join()

console.log(typeof newArr);
console.log( myArr);


// slice, splice 

const Arr1 = [0, 1, 2, 3, 4, 5, 6, 7]

// console.log("A", Arr1)

const Arr2 = Arr1.slice(1, 3) // only show value 1, 2 not change original array value = 
// output  = 1, 2
// original value = 0, 1, 2, 3, 4, 5, 6, 7 (not change Original value)

// console.log("B", Arr1)
// console.log( Arr2 )


const Arr3 = Arr1.splice(1, 3) // remove value 1,3 = 0, 4, 5, 6, 7

// output = 1, 2, 3
// Original value = 0, 4, 5, 6, 7 (change with splice method)

// console.log("c", Arr1) 
// console.log( Arr3 )


// A [
//     0, 1, 2, 3, 4, 5, 6, 7]

//   B [0, 1, 2, 3, 4, 5, 6, 7]
//   [ 1, 2 ] slice
//   c [ 0, 4, 5, 6, 7 ]
//   [ 1, 2, 3 ] splice

// https://www.youtube.com/watch?v=cejBux2gtEE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=14 