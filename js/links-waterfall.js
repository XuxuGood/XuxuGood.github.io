$(document).ready(function () {
    <!-- 技术大佬们友链 -->
    $.getJSON("/links/skill-link-list.json",
        function (data) {
            let nickname, avatar, site, li = "";
            for (let i = 0; i < data.length; i++) {
                nickname = data[i].nickname;
                avatar = data[i].avatar;
                site = data[i].site;
                li += '<div class="card">' + '<a href="' + site + '" target="_blank">' + '<div class="thumb" style="background: url(' + avatar + ');">' + '</div>' + '</a>' + '<div class="card-header">' + '<div class="card-header-span"><a href="' + site + '" target="_blank" title="' + nickname + '">' + nickname + '</a></div>' + '</div>' + '</div>';

            }
            $("#link-navigation-skill").append(li);
        });
    <!-- 实用链接 -->
    $.getJSON("/links/practical-link-list.json",
        function (data) {
            let nickname, avatar, site, li = "";
            for (let i = 0; i < data.length; i++) {
                nickname = data[i].nickname;
                avatar = data[i].avatar;
                site = data[i].site;
                li += '<div class="card">' + '<a href="' + site + '" target="_blank">' + '<div class="thumb" style="background: url(' + avatar + ');">' + '</div>' + '</a>' + '<div class="card-header">' + '<div class="card-header-span"><a href="' + site + '" target="_blank"  title="' + nickname + '">' + nickname + '</a></div>' + '</div>' + '</div>';

            }
            $("#link-navigation-practical").append(li);
        });
    <!-- 虐狗博主 -->
    $.getJSON("/links/sweet-link-list.json",
        function (data) {
            let nickname, avatar, site, li = "";
            for (let i = 0; i < data.length; i++) {
                nickname = data[i].nickname;
                avatar = data[i].avatar;
                site = data[i].site;
                li += '<div class="card">' + '<a href="' + site + '" target="_blank">' + '<div class="thumb" style="background: url(' + avatar + ');">' + '</div>' + '</a>' + '<div class="card-header">' + '<div class="card-header-span"><a href="' + site + '" target="_blank" title="' + nickname + '">' + nickname + '</a></div>' + '</div>' + '</div>';

            }
            $("#link-navigation-sweet").append(li);
        });
});
