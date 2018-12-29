// New keyword to create objects from constructor functions.

// Creates object, assigns value of this to the object, returns this at end of function, creates link (__proto__) between object create and the prototype property of the constructor function 
    
function Person(name) {
    this.name = name;
}

// Person.prototype --> Object {constrctor: function}

// var elie = New Person("elie");

// elie.__proto__ === Person.prototype

// Person.prototype.constructor === Person

// function Person(name) {
//     this.name = name;
    // this.sayHi = function(){
    //     return "Hi " + this.name;
    // } // inefficient
// }

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function(){
    return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi();


// Constructor function for Vehicle

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}

Vehicle.prototype.honk = function() {
    if (this.isRunning) {
        return "beep";
    }
}

