var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var btn = document.querySelector("#btn");
var priceDisp = document.querySelector("#price");

btn.addEventListener("click", function() {
  
  var xhr = new XMLHttpRequest();
  
  var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var rsp = JSON.parse(xhr.responseText);
        var price = rsp.bpi.USD.rate;
        priceDisp.innerText = price + " USD"
    }
    }

  xhr.open("GET", url);
  xhr.send();
});