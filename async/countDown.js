// Your goal is to Implement a function called countDown that accepts a time in seconds. The function will print the time remain to the console every second. Instead of printing 0, the function should print "Ring Ring Ring!!!"

function countDown(seconds) {
    var time = setInterval(function() {
        seconds--;
        if (seconds > 0) {
            console.log(seconds);
        } else {
            console.log("Ring Ring Ring!!!");
            clearInterval(time);
        }
    }, 1000);
}

countDown(5);