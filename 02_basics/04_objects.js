// const tinderUser = new Object() // value = {}
// singleton object 

const tinderUser2 = {} // valie = {}
// no-singleton object

tinderUser2.id = "123re"
tinderUser2.name = "mohit"
tinderUser2.isLoggedIn = true

// console.log(typeof tinderUser2); 

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "mohit",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname); // all value show


const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "c", 4: "d"}

// console.log(obj1, obj2);

const obj4 = Object.assign({}, obj1, obj2 ) // {} targate source

// console.log(obj4);    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


const obj5 = {...obj1, ...obj2 }  // value spread(...)
// console.log(obj5); // value combine


const users = [

    {
        id: 1,
        email: "mohit@gmail.com"
    },

    {
        id: 1,
        email: "mohit@gmail.com"
    },

    {
        id: 1,
        email: "mohit@gmail.com"
    },

]

// console.log(users[1].email); // value print method

// console.log(tinderUser2);

// console.log(Object.keys( tinderUser2));
// console.log(Object.values( tinderUser2));
// console.log(Object.entries( tinderUser2)); //[ [ 'id', '123re' ], [ 'name', 'mohit' ], [ 'isLoggedIn', true ] ] all value convert in array

console.log(tinderUser2.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // key name change

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
