/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","846f910a5fae3fe86594f299704327e8"],["/about/index.html","e28c8e7ea41bac2bd55768ad05805600"],["/archives/2019/10/index.html","0df69f2399c9a7940b26724bc4ce880f"],["/archives/2019/11/index.html","4ec7fa595ec5827fc42b4ff509dbca55"],["/archives/2019/index.html","58644944e4734172bf7d0d52e6a9bae0"],["/archives/2019/page/2/index.html","8f5fc79e0d6525dda77224e0f099b57e"],["/archives/index.html","84150ade35cdc49cc3dfae83125b4a4a"],["/archives/page/2/index.html","1b35153f3ec3b8e3ce89b8cfb26810d4"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","98eab1b8cc7388452e3303e6a2db567e"],["/categories/Hexo/index.html","734b5dd1b63b5e07ee868e5ebffce7e3"],["/categories/Hexo/page/2/index.html","0225ee490d1632f643ed46b9bc09244f"],["/categories/Hexo/点击特效/index.html","d226e8a36938fd17a699c5394021df27"],["/categories/Hexo/豆瓣/index.html","db65f0433013f3b55220d9f3dc998de9"],["/categories/Java/Base64/index.html","a0c3140920dbeb08bebfa51a67bfa8c9"],["/categories/Java/MD5/index.html","78bcd9b7bc408ead43a0bc8f797b7943"],["/categories/Java/index.html","c54cf80a011c8388905ff1ff422f2465"],["/categories/Valine/index.html","bdd3a43faf238bd576881e25efdcede7"],["/categories/index.html","38b44f08e14aad177bafa338baf6920b"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","5f44960641e178a22905468a1191ab3e"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","3ac504b13c7907a328de5be9a437d25d"],["/games/index.html","5a96185bb68e402b81dddc0b2c8497b2"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","a775ce8910f2fafb0b5ca4c523c8a802"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","d83872385c33eb034fbc4d5bb6efa450"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","30c7cc5d9d26382ca929f75b943e5182"],["/js/src/algolia-search.js","498695dd877804544d106dde6adbd8f4"],["/js/src/bootstrap.js","3deb446794025336dcd9623e2d5006aa"],["/js/src/bubble.js","aa2942fecba3219351e83e36f5b8f851"],["/js/src/canvas-dance-time.js","d5ac31802f6ebbe0d0e1e1b949ff9fb6"],["/js/src/clipboard-use.js","20aa5911ad126e194723bd5d6c98fbed"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","e6eef15e7cbed6440342c48d2f980062"],["/js/src/exturl.js","5a07bce4409cbe59fa1fda75ac4b2243"],["/js/src/hook-duoshuo.js","9a137e50a1b7574609d1faf3d5e54e9c"],["/js/src/js.cookie.js","1195969e3e44bea56453ca6096105e9c"],["/js/src/linkcard.js","fff82b8184c83156a5f09e616b054836"],["/js/src/motion.js","db6c08a1ff7dede935a0f9aa17aec1ce"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","f0cf447e32c0820cae8bc84e76353b63"],["/js/src/schemes/pisces.js","2350eafe6cd278429f4c07d361d20a1a"],["/js/src/scroll-cookie.js","170449ba3eb1f116589e38c95d76164c"],["/js/src/scrollspy.js","4976a45b130f55ac35a70cd9d0ba7148"],["/js/src/utils.js","afcc2611abe0be3da8b7b56e14291a60"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","704e9217921c8b7c7bda168e4c7a45f6"],["/lib/Han/dist/han.js","ca24c486966055e322cd00ee24378375"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","f1533450c9610e4f411803c426477d6e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2fcbc850f1438f931aa058586ef95be9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fbb02c1ee5e598e6a6a8fe24b45b6a5b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","626b77d387dc59f00a4f20febbaa891c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b439887a7bd4846588e68cb7cc04d955"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c36be40c065112288934b8b4001a448c"],["/lib/fancybox/source/jquery.fancybox.css","6eac93695765f28db015e5ae56d50bcd"],["/lib/fancybox/source/jquery.fancybox.js","85bda7fd746916e6c526a4f7ebab07c5"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","085568590be487df4ead408c5eb63d8a"],["/lib/fastclick/lib/fastclick.js","040c98df97d3d77f48bf76be8a0bc67d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","dd4e782b062e6bf021c6fb0268b38f71"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","a2d5097807976d04b73d964b11bd94ca"],["/lib/jquery_lazyload/README.html","aff4fd37bbc3d97421e935979831386a"],["/lib/jquery_lazyload/jquery.lazyload.js","512486785e1bf854d3fc1638334be627"],["/lib/jquery_lazyload/jquery.scrollstop.js","c258e2248911b68c807c98ae2880afce"],["/lib/needsharebutton/font-embedded.css","72a5c4c64f01d5024caa54e7bf87eac4"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1d75819fbb9ae9cd7c9897ee7897e3d2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","fce8773dd7d46d86159f3654a984284d"],["/lib/velocity/velocity.js","7355f88c07bbb63c061c6899aa056e7b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","b698da0677a468549fa249eb30d98c0e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","eae22e1d3d44e896e08a2a33249d2a84"],["/links/index.html","49f346a08f2376b66e018f8e14eada6f"],["/live2d-widget/README.html","6744459c299680ed4c82a33f01cfeee0"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","95c5c04f42fdb20ba16f4eeb2a4d67f1"],["/live2d-widget/demo/demo1.html","3f99e3562e1cf090beebbae25bc4fe7a"],["/live2d-widget/demo/demo2.html","b7db95bf5398e2a9f8db294289aaeb0a"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","38c3a5b1dc90a4d1732b3849826bf598"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","3a59c9fca297776d31a0e2d39825839f"],["/page/2/index.html","85f135cd0216191f6d87bed5cc462115"],["/photos/default-skin/default-skin.css","07570895bb3e7037236c1221791516dc"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","23bc5b70afa2cfc8dad01291955eead6"],["/photos/ins.css","edbe08a353cae19b0c3fd1035d9ffa10"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","9d7ede4e571da7b435776e32936f407e"],["/posts/27514.html","6f786b8bb40de5e9e092c755c3d9908c"],["/posts/39d47c89.html","eb6d48d97307c05143a507dffa209ae9"],["/posts/3e5a3bb6.html","34cd15d2bd38d9d9298b385e313dbc68"],["/posts/495d0b23.html","cb37767312302798a04fa08729e9df2e"],["/posts/61913369.html","3cb591cab2c5d849bbe778a2658e4829"],["/posts/7fbe9500.html","37f28968804e3294099fba2e8ed7a2aa"],["/posts/89ea6c8b.html","58cf61dac32dc6c7af925adbe06e9e40"],["/posts/9c9b482b.html","d35dc09291387a3ac963d65795242823"],["/posts/a7df3b40.html","0b28f6b3726857b7ba16fd03b62fe5c3"],["/posts/ab21860c.html","084b652677220c9f016a709da1944548"],["/posts/bf9eba42.html","776427e9819fdfe95c29ae1d521c7b57"],["/posts/c1cdcf68.html","51487e37d9c9642d062e7b45f78562e7"],["/posts/c4782247.html","fa8b4ca2eb2fac1a639fd2b4732aef4f"],["/posts/c7631ec1.html","ae060561375829d6f5b37bf9621467ac"],["/posts/d7399e80.html","eb9f4ddb5f9d14e3a8173015c9ac065b"],["/posts/dff7e11c.html","7398e6ee7f54450a29b3e7e0e2d75e18"],["/posts/e1b9c6c5.html","7d2743bb7010fac0f08b9ac770be7f14"],["/posts/f68f129b.html","538bbd2bcd4771e0951bb329df534a23"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","68e9dd23e116c97b2af8e43e2b7eedce"],["/tags/Base64/index.html","feb763e00c123744faf517b70c15ad0f"],["/tags/Coding/index.html","d85d1c2adaf4a48f95c0f4d452eee33c"],["/tags/Github/index.html","8c754801dee93be3d358b7b84d159f1e"],["/tags/Gulp/index.html","599159749bd97e02a5b7865eff66b84e"],["/tags/Hexo/index.html","d48c5ed8f6ae117194e23bfb781fe188"],["/tags/Hexo/page/2/index.html","86990a51eb278fc19d90e4c2c598a418"],["/tags/Java/index.html","b213414657c3459fcf7aaa3a758577d7"],["/tags/MD5/index.html","86dec186780ac7ace577f2408728689d"],["/tags/Neat/index.html","7d466d6582a8e3e76aabed20a64053b9"],["/tags/Next/index.html","eecc84f4b50b5b8803bbdf824b1e5916"],["/tags/Password/index.html","3a56cb91336e80d43d7a54cb30162025"],["/tags/Photos/index.html","5e6dd0646481628e15f3c06784a8939f"],["/tags/SHA-1/index.html","91a27e3e0765a49662698619522153f2"],["/tags/Security/index.html","42a18134f0b073ac18e2566c04114031"],["/tags/TravisCI/index.html","f46ddead87246356a139e9d6fb082a85"],["/tags/Valine/index.html","42d33fc6cc47923e1bf6519bdbc8e066"],["/tags/index.html","fe3c36ffe949ad4ea3cd1dbc2d0d629a"],["/tags/lazyload/index.html","e217425075834c6a07f2a5a9ce307d97"],["/tags/代码块/index.html","f22bb986ae43d33df61e45f4b7f05d29"],["/tags/图片/index.html","4808239536a99fc7984c009480d34361"],["/top/index.html","c878af1ea7ca1ec921b9333fe61a3abd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
