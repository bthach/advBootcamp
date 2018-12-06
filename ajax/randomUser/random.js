var btn = document.querySelector("#btn");
var fullname = document.querySelector("#fullname");
var image = document.querySelector("#avatar");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener("click", function(){
    var url = "https://randomuser.me/api/";
    fetch(url).then(handleErr)
    .then(parseJSON)
    .then(updateProfile);
})


function handleErr(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request.json();
}

function parseJSON(res) {
    return res.results[0];
}

function updateProfile(data) {
    image.innerText = data.picture.medium;
    username.innerText = data.login.username;
    fullname.innerText = data.name.first.slice(0,1).toUpperCase() + data.name.first.slice(1) + " " + data.name.last.slice(0,1).toUpperCase() + data.name.last.slice(1);
    email.innerText = data.email;
    city.innerText = data.location.city;
}

