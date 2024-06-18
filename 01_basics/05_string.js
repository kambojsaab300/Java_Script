const name =  "mohit"
const age = 23

const ms =  (`my name is ${name} and my age is ${1+1+age}`)

// console.log(ms)

// const gameName = new String('mohitkamboj')

// console.log(gameName.length) // 12
// console.log(gameName.toUpperCase()) //MOHIT KUMAR
// console.log(gameName.charAt(7)) //a character position check (a)
// console.log(gameName.indexOf('t')) //4 word position check (4)

// const newString = gameName.substring(0, 4) // all value start (0) 
/*
Example:- 
0 = m
1 = o
2 = h
3 = i
4 = t

*/

const gameName = new String('mohitkamboj')


const nameString = gameName.substring(0, 6)

console.log(nameString) // mohitk

const anoterString = gameName.slice(-12, 4)

console.log(anoterString) 

const  newStringone = new String  ( 'mohit_kamboj_sama')

console.log(newStringone)
console.log(newStringone.trim()) // starting  space and end space remove (white space remove)

const url =  "https://www.google%%19mohit.com/" 

console.log(url.replace('%%19', '-' )) // replace world

console.log(url.includes('mohit'))

console.log(newStringone.replace('mohit', 'sama')) // replace text

console.log(newStringone.split('_'))
