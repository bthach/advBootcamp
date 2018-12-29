// // When the keyword 'this' is not inside a declared object, it's value is the global object.

// var data = {}; // empty object called data. declared object.

// data.instructor = "Ellie";

// // data has a key of value Ellie inside it. (inside of declared object).

// // this inside function, so value is global object (window)

// function whatIsThis() {
//     return this;
// }

// whatIsThis(); // window

// function variablesInThis() {
//     this.person = "Ellie";
// }

// variablesInThis() // window

// console.log(person); // Ellie

// // declare variables at top of code

// // when this inside declared object, value of this would be the closest parent object

// var person = {
//     firstName: "Barry",
//     sayHi: function() {
//         return "Hi " + this.firstName;
//     },
//     determineContext: function() {
//         return this === person;
//     }
// }

// var person = {
//     firstName: "Barry",
//     determineContext: this;
// } // keyword this defined when a function is run. no function being run here, so this is the window.


// this.firstName, dog is closest parent object but does not have firstName. So undefined.

var person = {
    firstName: "Barry",
    sayHi: function() {
        return "Hi " + this.firstName;
    },
    determineContext: function() {
        return this === person;
    },
    dog: {
        sayHello: function() {
            return "Hello " + this.firstName;
        },
        determineContext: function() {
            return this === person;
        }
    }
}

console.log(person.dog.sayHello.call(person));
console.log(person.dog.determineContext.call(person));

function sayHi() {
    return "Hi " + this.firstName;
}

var barry = {
    firstName: "Barry",
}

var elie = {
    firstName: "Elie"
}

console.log(sayHi.call(barry));
console.log(sayHi.call(elie)); // array-like objects
console.log(sayHi.apply(barry));

function addNumbers(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
}

console.log(addNumbers.call(elie,1,2,3,4));
console.log(addNumbers.apply(barry, [1,2,3,4]));

var elieCalc = addNumbers.bind(elie,1,2,3,4);
console.log(elieCalc());

var elieCalc2 = addNumbers.bind(elie,1,2);
console.log(elieCalc2(3,4));


var anon = {
    firstName: "Anon",
    sayHi: function() {
        setTimeout(function() {
            console.log("Hi " + this.firstName);
        }, 1000);
    }
}

console.log(anon.sayHi()); // undefined, setTimeout executed later and is the global window.

// call and apply invoke function right away.

var anonymous = {
    firstName: "Anon",
    sayHi: function() {
        setTimeout(function() {
            console.log("Hi " + this.firstName);
        }.bind(this), 1000);
    }
}

console.log(anonymous.sayHi());