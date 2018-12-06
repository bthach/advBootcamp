var btn = document.querySelector("#btn");
var priceDisp = document.querySelector("#price");

var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  
fetch(url).then(function(response) {
  // console.log(response);
  return response.json()
  })
.then(function(data) {
  // console.log(data);
  console.log(data.bpi.USD.rate)
});