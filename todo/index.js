var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todo');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api/todo', todoRoutes);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile("index.html");
})

app.listen(port, function() {
    console.log("App is running on port " + port);
});

