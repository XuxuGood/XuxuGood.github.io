var allCategory = document.getElementsByClassName('category-all');
if (allCategory.length > 0) {
    //链接
    var categories = allCategory[0].getElementsByTagName('a');
    //数字
    var counts = allCategory[0].getElementsByTagName('span');
    for (var i = categories.length - 1; i >= 0; i--) {
        var r = Math.floor(Math.random() * 75 + 130);
        var g = Math.floor(Math.random() * 75 + 100);
        var b = Math.floor(Math.random() * 75 + 80);
        //链接颜色
        categories[i].style.background = "rgb(" + r + "," + g + "," + b + ")";
        //数字颜色
        counts[i].style.color = "rgb(" + r + "," + g + "," + b + ")";
    }
}
