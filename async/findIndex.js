// function findIndex(arr, callback) {
//     arr.forEach(function(element, index) {
//         if (element) {
//             console.log(element + " " + index);
//             return index;
//         }
//     })
//     return -1;
// }

// console.log();

function findIndex(arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            console.log(i);
            return i;
        }
    }
    console.log("-1");
    return -1;
}

findIndex([1,2,3,4])