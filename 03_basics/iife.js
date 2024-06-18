// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
    
// function one(){
//     console.log(one)
//     two()
// }

// function two(){
//     console.log(two)
//     three()
// }

// function three(){
//     console.log(three)
// }