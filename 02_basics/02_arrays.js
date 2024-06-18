
const marval_heros = ["thor", "ironman", "spriderman" ]
const dc_heros = ["superman", "flash", "batman"]

console.log(marval_heros)

// Methor 1 

// marval_heros.push(dc_heros); // add 2 array in one line but not add in 1 array
// marval_heros.pop(dc_heros); // last value remove

// console.log(marval_heros[3][1]); // this is a wrog way (i have no use)


// Method 2 

const allHeros = marval_heros.concat(dc_heros); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.


// console.log( allHeros)

// Method 3

const all_new_heros = [...marval_heros, ...dc_heros] // this mathod is useable (eassy to use )

// console.log(typeof all_new_heros)

// Method 4

const another_array = [1, 2, 3, 4, [6, 7, 8  ],[4, 3, 2]]

const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_another_array)

// method 5

// data scraping


console.log(Array.isArray(["Mohit"]))
console.log(Array.from("Mohit"))
console.log(Array.from({name: "Mohit"})) // interesting case (key and value)

let score1 = 100
let score2 = 200
let score3 = 300

let finalScore = (Array.of(score1, score2, score3));

console.log(typeof finalScore);



