var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

// const axios = require('axios');

var xhrButton = document.querySelector("#xhr");
var fetchButton = document.querySelector("#fetch");
var axiosButton = document.querySelector("#axios");
var quote = document.querySelector("#quote");

var xhr = new XMLHttpRequest(),
    method = "GET";

xhrButton.addEventListener("click", function() {
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
          quote.innerText = JSON.parse(xhr.responseText);
        }
      };
    xhr.send();
})

fetchButton.addEventListener("click", function() {
    fetch(url)
    .then(function(request) {
        if (!request.ok) {
            throw Error(request.status)
        }
        return request.json()
    })
    .then(function(data) {
        quote.innerText = data[0];
    }).catch(function(error) {
        console.log(error);
    })
});

// $(document).ready(function() {
    $("#jq").click(function() {
        // alert("Clicked");
        $.getJSON(url)
            .done(function(response) {
                // console.log("works");
                quote.innerText = response[0];
            })
            .fail(function(error) {
                console.log(error);
                    })
    });
// })

axiosButton.addEventListener("click", function() {
    axios.get(url)
    .then(function(response) {
        // console.log(response);
        quote.innerText = response.data[0];
    })
    .catch(function(error) {
        console.log(error);
    })
});