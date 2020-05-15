var allTags = document.getElementsByClassName('tag-cloud-tags');
if (allTags.length > 0) {
    var tags = allTags[0].getElementsByTagName('a');
    for (var i = tags.length - 1; i >= 0; i--) {
        var r = Math.floor(Math.random() * 75 + 130);
        var g = Math.floor(Math.random() * 75 + 100);
        var b = Math.floor(Math.random() * 75 + 80);
        tags[i].style.background = "rgb(" + r + "," + g + "," + b + ")";
    }
}
