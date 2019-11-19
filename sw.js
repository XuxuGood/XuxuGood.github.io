/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b1270cdccf1ca90968c50b574d7f8008"],["/about/index.html","66e9063e72e691fc17d528431ae1ec76"],["/archives/2019/10/index.html","8beee0e9fa394dd3650ef75e3cde25ee"],["/archives/2019/11/index.html","8b9caf5f99f90e6d402f0a25ea529c94"],["/archives/2019/index.html","000d453ea0371476423ec903afbd0eaa"],["/archives/2019/page/2/index.html","414e5a32ff116d4734a1f8ad4685c457"],["/archives/index.html","43e4b9d64b14ee1a2a5d2e1f2a41516e"],["/archives/page/2/index.html","cde8d7cb00de66c2c9207f02e7dc2bbc"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","d4c47ca9f60b16982392d5c7ef990e3a"],["/categories/Hexo/index.html","a823d032e6f18ff89b92f90a99d86c85"],["/categories/Hexo/page/2/index.html","97d4df440d73b116f7899368d9709024"],["/categories/Hexo/点击特效/index.html","6234f19e21560a4e2b217029daeec3ad"],["/categories/Hexo/豆瓣/index.html","cb912bdbe84a165740dce2876c811e2c"],["/categories/Java/Base64/index.html","b99e13b60dfc1be442becd35aa1e8ca4"],["/categories/Java/MD5/index.html","e401a5dec51708e7d0114952348f51bb"],["/categories/Java/index.html","f4f24abd11e3b27abb23a970c0cd69df"],["/categories/Valine/index.html","0b7b8299ca780e5a9d7583c0a1e755d7"],["/categories/index.html","aac5f7f0ff4b073f5fae0ec0bbce1f4d"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","972ce4a38e1160b25e69e6b733d9ffe6"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1460ba164767e3badbe5c5c588298a4c"],["/games/index.html","d743b75364c97aa907522a67e94ee4d2"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","ca71d4c656146d8627095e1c957dfa28"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f0da50dbb4e1d975862d5d65c1b66986"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b3b5d08b4eeac68f9d38456ce1afc6ca"],["/js/src/algolia-search.js","f9f388b675cef03ece3f1ffe9662b740"],["/js/src/bootstrap.js","81a12715a51a67e5d9f395034e0a8cae"],["/js/src/bubble.js","0809782e5769af97f796cac571448d43"],["/js/src/canvas-dance-time.js","0ed8419e0c136c8cc45ad5df8d0d0e37"],["/js/src/clipboard-use.js","4250f0ff9a31c02c93c9838b3bcf4275"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","0db93f84afb9de723768d370a508430e"],["/js/src/exturl.js","37a8693e3ef3b38ef05a0eeb0585a7ee"],["/js/src/hook-duoshuo.js","9977c8ff8303ab1057e350bc86584cf8"],["/js/src/js.cookie.js","a9649cb97999ddce8ae28859abb37651"],["/js/src/linkcard.js","caa109e6011ad79328601526c24ecd42"],["/js/src/motion.js","4c8c0a5b417e92c56c5c6dbbfd49519d"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","64e38806081b0619951008a69f3c750e"],["/js/src/schemes/pisces.js","d96799a2aad3e319cbc8be5afaaa3a32"],["/js/src/scroll-cookie.js","7d67a606d65f8b8c74d58b4b14af7b24"],["/js/src/scrollspy.js","042396fd2da4f60e22ae22cbde51fa9d"],["/js/src/utils.js","b5f54326f7f98bdb46293f1890bcc8a5"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","ffbfa5252c1a9622aac6635f27098b73"],["/lib/Han/dist/han.js","24288daf728731d732defc91e0b0c4f3"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4ff7e0aff549109a9bda029b5be9cdb5"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","53687e16110bc0912682752c074ed73c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","38f1d8b2e04a07b47efbef648b7f82fa"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e37ca1e143877b0c1b09a486c508a389"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3ceeff6cc432b543c0b06ce0f6006436"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e6aaecf47f5cc7834e0fde60d6c73a1e"],["/lib/fancybox/source/jquery.fancybox.css","7e32d169b2f4e57d1cc7bd029b01f643"],["/lib/fancybox/source/jquery.fancybox.js","2f4b8820b181e93e73a56a22dc62bd84"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","aa4ab265572f8e368e26860d126573db"],["/lib/fastclick/lib/fastclick.js","addfd560230ad4e0997b6080cdd2c741"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2dbe677dd40168f61ca6f62a721ea9b6"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","fc4ad3d9407d7062029f7cd9d7862f2b"],["/lib/jquery_lazyload/README.html","bbe0b0010b7e409201db0b626fe67359"],["/lib/jquery_lazyload/jquery.lazyload.js","61773798ffd4498ac88b824857dba796"],["/lib/jquery_lazyload/jquery.scrollstop.js","afe1ef08e1a99f51a9b1fe2fda62851b"],["/lib/needsharebutton/font-embedded.css","d14367df1c477db8da15762a6a0090e7"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","cac97672350ed3349256f65965b468d1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","58e07143eaa3ad4bd6d88bbaf9685806"],["/lib/velocity/velocity.js","3e411e5458c2d637e2e1b8e2b113804b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","348314d79a86afac030b324cfa85fa83"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","3136086ad837f00cecf55122a2b8265e"],["/links/index.html","4c1736d20a976b6e3302c4829000405e"],["/live2d-widget/README.html","9f2d6955635086b5617325de5f9cc884"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","606211b5e43be6d6adabbf062a99c497"],["/live2d-widget/demo/demo1.html","b33e2541bc8585fdba4a9dd32652e234"],["/live2d-widget/demo/demo2.html","e5d4a7dbade017478189781602a072a6"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","f383e254b974f7d7f13e0088878a73a4"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","c958209c9ba16309d28738742981afbf"],["/page/2/index.html","93219963b902d9a48a8eadc656fdc9ea"],["/photos/default-skin/default-skin.css","4d295243314f6c8c70f3822804ba663c"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","48b95d94f79b2acf9251e718546a2b8b"],["/photos/ins.css","563544f64f4a80193c81664e12b4c49c"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","e5a6ff49a8dc71f99b58620bf4b5a6b1"],["/posts/27514.html","66316dba0055884747e969871e8019d1"],["/posts/39d47c89.html","5e2e33e96c24043f5b46aa7441bcea3e"],["/posts/3e5a3bb6.html","7d4109462284c4a9696fa399d895c79f"],["/posts/495d0b23.html","4e562908ea1608aba438e7b38a0edbc9"],["/posts/7fbe9500.html","29bef8b3516fa7b76032bf3fd069dddb"],["/posts/89ea6c8b.html","b10264f03290c0137efa95cc277bbff3"],["/posts/9c9b482b.html","c6411198602f4de5f2f0b90c892c4eb3"],["/posts/a7df3b40.html","5690415b0ece4e13a3c761d7bef4b81e"],["/posts/ab21860c.html","497b445ca6199bc6bdc6ace6a79ef66c"],["/posts/bf9eba42.html","f15c7145cd3d1ffdbc6cfa632c353445"],["/posts/c1cdcf68.html","1614df641fed9868924274a5584ddc99"],["/posts/c4782247.html","23bbacf647bc92c139a23cad3787e3d4"],["/posts/c7631ec1.html","6396b0a0ef6873432bfe615171affde4"],["/posts/d7399e80.html","5da2067aa582ef5d76c7ebbd6d4dfdb7"],["/posts/dff7e11c.html","d9119c00dd63caa387824d580825f0da"],["/posts/e1b9c6c5.html","222642e5c6f83d10365decf00541165a"],["/posts/f68f129b.html","e92f9b2d4c717b451387a69c584d2c8f"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c819672671b1c650e786f173a0b8ddeb"],["/tags/Base64/index.html","02cfd85844343c89383d1fd3025d18ec"],["/tags/Coding/index.html","0fc6314910de4484f2ff14f5247443ff"],["/tags/Github/index.html","73ae7dffc39e0a1db24040e11fd080f8"],["/tags/Gulp/index.html","e8b25c455c7b2a00e24f81167589b3c2"],["/tags/Hexo-Neat/index.html","03de0894c107109b4562684a7bc52164"],["/tags/Hexo/index.html","b8170f8d179dd050b7825a0efc093c74"],["/tags/Hexo/page/2/index.html","ba1eb7d5f9a7a3e4de6a84052c5779ef"],["/tags/Java/index.html","3e2bc278df517c319bfb3d0c9ca24c21"],["/tags/MD5/index.html","e5da96ca60dfba7d9ccff60515b1a536"],["/tags/Next/index.html","3ddf4a2ad5081a55af924ee7b9970efc"],["/tags/Password/index.html","c6bd8a21396a78ab3f87ac2e9ed7f5a4"],["/tags/Photos/index.html","596930f5f6487645bab9e9d86e91c3c7"],["/tags/SHA-1/index.html","1e116c0d06db028d2ee839bccdf19714"],["/tags/Security/index.html","b95e92f6865e873c290c7d979404858e"],["/tags/TravisCI/index.html","68f870659aa9578c647bb1374a54f949"],["/tags/Valine/index.html","8780ee7e947c375fee9b69ed4756f2d7"],["/tags/index.html","e9f826b4f3c08724c30ccd1c0a8cae41"],["/tags/代码块/index.html","e865d5fbe19ecf2efce096c8a260a759"],["/top/index.html","6d5de57899f5021f88a05b84b7217e52"]];
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
