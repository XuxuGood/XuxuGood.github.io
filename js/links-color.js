$(document).ready(function () {
    <!-- 技术大佬们友链 -->
    $.getJSON("/links/skill-link-list.json",
        function (data) {
            let nickname, avatar, site, info, li = "";
            for (let i = 0; i < data.length; i++) {
                nickname = data[i].nickname;
                avatar = data[i].avatar;
                site = data[i].site;
                info = data[i].info;
                li += '<li class="card">' + '<a href="' + site + '" title="' + info + '" target="_blank">' +
                    '<div class="thumb" style="background-image: url(' + avatar + ');"> ' + '</div>' + '<span class="sitename">' + nickname + '</span>' +
                    '<div class="linkdes">' + info + '</div> ' + '</a>' + '</li>';
            }
            $("#link-navigation-skill").append(li);
        });
    <!-- 实用链接 -->
    $.getJSON("/links/practical-link-list.json",
        function (data) {
            let nickname, avatar, site, info, li = "";
            for (let i = 0; i < data.length; i++) {
                nickname = data[i].nickname;
                avatar = data[i].avatar;
                site = data[i].site;
                info = data[i].info;
                li += '<li class="card">' + '<a href="' + site + '" title="' + info + '" target="_blank">' +
                    '<div class="thumb" style="background-image: url(' + avatar + ');"> ' + '</div>' + '<span class="sitename">' + nickname + '</span>' +
                    '<div class="linkdes">' + info + '</div> ' + '</a>' + '</li>';
            }
            $("#link-navigation-practical").append(li);
        });
    <!-- 虐狗博主 -->
    $.getJSON("/links/sweet-link-list.json",
        function (data) {
            let nickname, avatar, site, info, li = "";
            for (let i = 0; i < data.length; i++) {
                nickname = data[i].nickname;
                avatar = data[i].avatar;
                site = data[i].site;
                info = data[i].info;
                li += '<li class="card">' + '<a href="' + site + '" title="' + info + '" target="_blank">' +
                    '<div class="thumb" style="background-image: url(' + avatar + ');"> ' + '</div>' + '<span class="sitename">' + nickname + '</span>' +
                    '<div class="linkdes">' + info + '</div> ' + '</a>' + '</li>';
            }
            $("#link-navigation-sweet").append(li);
        });
});
