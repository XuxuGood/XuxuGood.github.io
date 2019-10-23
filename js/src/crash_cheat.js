$(window).load(function () {
//整合页面欺骗特效 window.onload有冲突
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            $('[rel="icon"]').attr('href', "../../images/failure.png");
            $('[rel="shortcut icon"]').attr('href', "../../images/failure.png");
            document.title = '(●—●)喔哟，崩溃啦！';
            clearTimeout(titleTime);
        } else {
            $('[rel="icon"]').attr('href', "../../images/favicon.png");
            $('[rel="shortcut icon"]').attr('href', "../../images/favicon.png");
            document.title = '(/≧▽≦/)咦！页面又好了！';
            titleTime = setTimeout(function () {
                document.title = OriginTitile;
            }, 2000);
        }
    });
});
