$(document).ready(function () {
    let nickname, avatar, site, info, li = "";
    $.getJSON("/links/linklist.json",
        function (data) {
            for (let i = 0; i < data.length; i++) {
                nickname = data[i].nickname;
                avatar = data[i].avatar;
                site = data[i].site;
                info = data[i].info;
                li += '<li class="card">' + '<a href="' + site + '" title="' + info + '" target="_blank">' +
                    '<div class="thumb" style="background-image: url(' + avatar + ');"> ' + '</div>' + '<span class="sitename">' + nickname + '</span>' +
                    '<div class="linkdes">' + info + '</div> ' + '</a>' + '</li>';
            }
            $("#link-navigation").append(li);
        });
});
