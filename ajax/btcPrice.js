var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var XHR = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.coindesk.com/v1/bpi/currentprice.json";

XHR.open(method, url, true);
XHR.onreadystatechange = function() {
  if (XHR.readystate === 4 && XHR.status === 200) {
    var rsp = JSON.parse(XHR.responsetext);
    console.log(rsp);
    console.log(rsp.bpi.USD.rate);
  }
}