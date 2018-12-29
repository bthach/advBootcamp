function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function() {
        console.log("just barked!");
    }
}

function Car(make, model, year) {
    this.make = mae;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

// Bind returns function definition, so no go.

// The first parameter to call or apply, we specify what the value of this to be.

// We want it this to be is the object that will be created from the motorcycle function when the new keyword is used. Access to that object is this.

// Second parameter to apply is an array of arguments.


function Motorcycle(make, model, year) {
    Car.call(this, make, model, year)
    this.numWheels = 2;
}

function Motorcycle(make, model, year) {
    // using apply
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle() {
    Car.apply(this, arguments);
    this.numWheels = 2;
}

// OOP like java uses classes and creates instances

// Javascript does not have built in class support, mimic lcasses by using functions. Objects created thorugh use of the new keyword.

// Avoid duplication in multiple constructor functions by using call or apply


