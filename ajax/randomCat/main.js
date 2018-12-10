$("#btn").click(function() {
    var url = "http://aws.random.cat/meow"
    $.getJSON(url)
    .done(function(data) {
        console.log(data.file);
        $("#cat").attr("src", data.file);
    })
    .fail(function() {
        console.log("Failed");
    })
})