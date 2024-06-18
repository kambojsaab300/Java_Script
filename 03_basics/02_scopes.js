let a = 900 // global scoapes

if (true) {
 // block scoapes
    let a = 100
    const b = 200
    var c = 300 

    // console.log("number", a)
} 

// console.log(a);


function one(){
    const userName3 = "Mohit"

    function two(){
        const channelName = "kamboj"

        console.log(userName3 + channelName)
    }

    // console.log(channelName)

    two()
}

one()


function addOne(nuum){
    return nuum + 1
}

console.log(addOne(5))


// console.log(addTwo(10)) wrong way not value slow error

const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(10)) right way to 
