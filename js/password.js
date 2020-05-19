function password(value) {
    if (value) {
        //暂时储存文章中的内容
        div = $('.post-body');
        //暂时储存目录的内容
        toc = $('.post-toc')
        //将文章内容删除
        div.remove();
        //将目录删除
        toc.remove();
        //将文章删除后，向原来文章的地方添加，应该出现的提示用户输入密码的样式
        //下面这里的第一个用textarea是因为如果在手机端的时候只能显示一部分文字，
        //只是拓展:input里面的字只能显示一行，不会自动换行，目前上网搜索没有发现好的办法，所以用了textarea，右下角的小三角通过resize:none 去掉。
        $('.post-header').after(
            '<span class="description" value="请输入密码，然后按 Enter 键阅读" style="font-style: oblique;font-weight: bold;border: none;display: block;' +
            'width: 60%;margin: 0 auto;text-align: center;outline: none;margin-bottom: 40px;resize:none ">' +
            '<i class="fa fa-heartbeat" id="myheartbeat"></i>&nbsp;' +
            '请输入密码，然后按 Enter 键阅读' +
            '&nbsp;&nbsp;<i class="fa fa-heartbeat" id="myheartbeat"></i>' +
            '</span>' +
            '<div class="qiang" style="height: 100px;width: 60%;margin:0 auto">' +
            '<input class="password"  type="password" autocomplete="new-password" autofocus="autofocus" value="" style="border-radius: 5px;height: 30px;display: block;border: 1px solid #908585;' +
            'margin: 0 auto;outline: none;width:95%"/>' +
            '</div>')
        //绑定点击事件，如果是点击的.password 这个div就改变样式，如果是document中除了div之外的其他任何元素，就变回原来的样式。
        document.onclick = function (event) {
            var e = event || window.event;
            var elem = e.srcElement || e.target;

            while (elem) {
                if (elem != document) {
                    if (elem.className == "password") {
                        //$(".password").animate({paddingTop:"30px",width:"100%",borderWidth:"2px"},300)
                        return;
                    }
                    elem = elem.parentNode;
                } else {
                    //$(".password").animate({paddingTop:"0px",width:"95%",borderWidth:"1px"},300)
                    return;
                }
            }
        }
        //绑定enter键按下后离开的事件
        $(document).unbind().bind("keyup", function (event) {
            if (event.keyCode === 13 && $('.password').val().length > 0) {
                if ($('.password').val() === value) {
                    // 恢复文章内容
                    $(".post-header").after(div)
                    // 解决pjax导致img无法查看
                    $(".post-body img").each(function () {
                        var imgUrl = $(this).attr("data-src");
                        var alt = $(this).attr('alt');
                        $(this).wrap('<a class="fancybox fancybox.image" href=" ' + imgUrl + '" itemscope="" itemtype="http://schema.org/ImageObject" itemprop="url" data-fancybox="default" rel="default" title="' + alt + '" data-caption="' + alt + '"></a>')
                        $(this).after('<p class="image-caption">' + alt + '</p>')
                        $(this).attr('src', imgUrl);
                        $(this).attr('data-loaded', true);
                    })
                    // 恢复目录
                    toc.appendTo($(".post-toc-wrap"))
                    // 解决类Mac Panel特效丢失
                    NexT.utils.registerCopyCode();
                    NexT.utils.wrapTableWithBox();
                    // 如果没有目录直接就显示站点概览
                    if ($(".post-toc-wrap .post-toc").length === 0) {
                        $(".sidebar-nav").hide();
                    } else {
                        // 显示侧边栏
                        $(".sidebar-nav").show();
                        document.querySelector('.sidebar-nav-toc').click();
                    }
                    // 删除本页面的输入密码组件
                    $(".description").remove();
                    $(".qiang").remove();
                    $(".password").remove();
                    $(".post-body").css({opacity: 1});

                } else {
                    toastMsg("操作通知", "密码输入错误！")
                }
            } else if (event.keyCode === 13 && $('.password').val().length === 0) {
                toastMsg("操作通知", "请输入密码！")
            }
        })
    }
}

// 提示通知
function toastMsg(title, message) {
    iziToast.show({
        class: 'test',
        color: 'dark',
        icon: 'icon-contacts',
        title: title,
        message: message,
        position: 'topRight',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: '/images/iziToast.jpg',
        imageWidth: 81,
        layout: 2,
        onClose: function () {
            console.info('onClose');
        },
        iconColor: 'rgb(0, 255, 184)'
    });
}
