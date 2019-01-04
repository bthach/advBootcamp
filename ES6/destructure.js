/* 
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

// Destructuring extracts values from data stored in objects and arrays


function displayStudentInfo(obj){
    let str = "Your full name is ";
    var { first, last } = obj;
    return str + first + ' ' + last;
}

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

/* 
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/

// you will have to pass in the correct parameters for this function!

function printFullName({ first, last }){
    let str = "Your full name is ";
    return str + first + ' ' + last;
}

// console.log(printFullName({first: 'Elie', last:'Schoppik'}));

/* 
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')
*/

// you will have to pass in the correct parameters for this function!
function createStudent( { likesES2015=true, likesJavaScript=true } = {}){
    if (likesJavaScript && likesES2015) {
        return 'The student likes JavaScript and ES2015!';
    } else if (likesJavaScript) {
        return 'The student likes JavaScript!';
    } else if (likesES2015) {
        return 'The student likes ES2015!';
    } else {
        return 'The student does not like much...';
    }
}

// console.log(createStudent());
// console.log(createStudent({likesES2015:false}));
// console.log(createStudent({likesJavaScript:false}));
// console.log(createStudent({likesJavaScript:false, likesES2015:false}));

/* 
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

Examples:
    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
    reverseArray([1,2]) // [2,1]
    reverseArray([]) // []
    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/


function reverseArray(arr){
    for (var i = 0; i < arr.length/2; i++) { // return [a,b] = [b, a]
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    } 
    return arr;
}

// console.log(reverseArray([1,2,3,4,5]));