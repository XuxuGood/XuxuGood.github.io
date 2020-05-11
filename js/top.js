var time = 0
var title = ""
var url = ""
var query = new AV.Query('Counter');
query.notEqualTo('id', 0);
query.descending('time');
query.limit(1000);
query.find().then(function (todo) {
    for (var i = 0; i < 1000; i++) {
        var result = todo[i].attributes;
        time = result.time;
        title = result.title;
        url = result.url;
        var content = "<p class='my-article-top'>" +
            "<font color='#a7a7e5'>" + "➤【热度: " + "</font>" +
            "<font color='#f1a8ce'>" + time + " ℃】" + "</font>" +
            "<a href='" + url + "'>" + title + "</a>" +
            "</p>";
        document.getElementById("top").innerHTML += content
    }
}, function (error) {
    console.log(error);
});

