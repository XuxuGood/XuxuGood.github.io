/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8831a9f8516ae7c2881c374af0a1bb3d"],["/about/index.html","c51b5e52182af9a286cc215cf7d91716"],["/archives/2019/10/index.html","37b6c99cc84fec8b4c2fcb92fdee74db"],["/archives/2019/11/index.html","f611aab99f58b61cef0e3ef4517490c0"],["/archives/2019/index.html","7dfb4bbbefac8314674140c1f19008ea"],["/archives/2019/page/2/index.html","e1722cad0d643bb4d8f6d5765a3db4bb"],["/archives/index.html","3383a2036ea607a6916dfdbd82b67ee2"],["/archives/page/2/index.html","cbecb09e79b417858e31d7cfcb06f121"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","88b3ec0dbb8c441a8027b3606cb9ddbc"],["/categories/Hexo/index.html","3c722489cb69d74bc90b5fabc50185b3"],["/categories/Hexo/page/2/index.html","c6bf6490310375cdc8bb3339614ca100"],["/categories/Hexo/点击特效/index.html","f096a1376451a147669062f753b2161e"],["/categories/Hexo/豆瓣/index.html","f4075929b05cf21498d9c30e5defacf7"],["/categories/Java/Base64/index.html","090dd7dba19bcb7c8d37e44e45c26e98"],["/categories/Java/MD5/index.html","9b753764f9bc5c72747a282b9c596d8d"],["/categories/Java/index.html","032898a566ceb1a2f4079b81042762fd"],["/categories/Valine/index.html","b02fd5de9b2dc315202e02cb3a4fc99e"],["/categories/index.html","83452de0c17f792525f296522ae0c1a7"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","6cd90061ce8758fb3ce971945b4e061e"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ba16d7d26d2220875db2c9a2c2448d74"],["/games/index.html","5496257b156566102e83d8ac94bc40eb"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","5f6e8a1d2f0f3f340222ff314a4f872e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8f0fcee7f30b43236846cf049ca3bd13"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","449b9b411b04279602261a5c4f921864"],["/js/src/algolia-search.js","cec6150a7d459bc8f4a2af83983abc4c"],["/js/src/bootstrap.js","0fe93e17861e6aa1ca943cf59f89b727"],["/js/src/bubble.js","cc60c76a03598a38e7ad97170c671e3e"],["/js/src/canvas-dance-time.js","2fc771fda9b093754796949280584b0c"],["/js/src/clipboard-use.js","95220765c7af0a3bfd9bff8fe26cee10"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6ec27f42b110a560449501086b50bddd"],["/js/src/exturl.js","bc0e669b2f7e54a49a0265f64a2906be"],["/js/src/hook-duoshuo.js","5161817fe75c9b4ad335f9beea1f3351"],["/js/src/js.cookie.js","db79849e74034e28864af0c9f5a6068e"],["/js/src/linkcard.js","bb722e5af4b4c4e0aada12cb12e6f165"],["/js/src/motion.js","3649008026ae2f5491d1f047fe744a0d"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","f77ea21d09e14ce8ad77d6c6a1e81a57"],["/js/src/schemes/pisces.js","c7543b34d7a1ce7d9da35621ca23e6c5"],["/js/src/scroll-cookie.js","f801b8d999336ec1894b481f8012629a"],["/js/src/scrollspy.js","a955e416ebfca05f84f24f9e78e12aaf"],["/js/src/utils.js","a786ac91d9ab1516c62a70e71f13461c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","8ac6473c0f3c4a6d4f63abfacf7b9978"],["/lib/Han/dist/han.js","211466760d5c03ec24e348d4d62fa09c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2178340c792ac019000795fd60463d66"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","15e36f16b758e237f90859683a2392ac"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4674a630138b6c20113a267cebc6bae3"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","286d7a7af05a5e9cb08d8ab3d6a2544f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2dff3c0e9df173ca2759849c925297e1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3abcbcf92caba2d87d830fe81305b92a"],["/lib/fancybox/source/jquery.fancybox.css","08acad32a498f956c66a4157646632d4"],["/lib/fancybox/source/jquery.fancybox.js","93d1a89f1fab3e864b23e9c984d3ee44"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","830ce535b8228c90c74abafa98d18f7f"],["/lib/fastclick/lib/fastclick.js","12b446a83eb0c2270459c46e4517a1cd"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","e322be43cd8035b3dd5f2cfbdc0eccec"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2030a87ce685626e65a9b27391b77310"],["/lib/jquery_lazyload/README.html","33d1be340fe8d8f13b5e304621228a8f"],["/lib/jquery_lazyload/jquery.lazyload.js","e71320bac6c324aa73ac759a2b94157f"],["/lib/jquery_lazyload/jquery.scrollstop.js","59576adbc130dbc56a201730bdf666b6"],["/lib/needsharebutton/font-embedded.css","34d9c1de05f29677569629dfca3d2ae1"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","205cd0dc4b528df89d03e43cea0b5624"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","48db4ab1388951190e5cdf7aac47a0d9"],["/lib/velocity/velocity.js","2f442bcf999de7fed95459d51897907b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a09074d21cd838b58921bed632b56569"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","77336e92afdd355296d09a59ca8b458f"],["/links/index.html","81085ca6814bd2879d12fd454f56d66b"],["/live2d-widget/README.html","a2243f180dd0ba27c6e5bfc1578e989b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","0b9e8e45a8ff74407742a77a882307bf"],["/live2d-widget/demo/demo1.html","248403d44233b576541e33ebe0ef4031"],["/live2d-widget/demo/demo2.html","665316ec02d0bdc1936c9c52dbd9aea5"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","a239129a441752192ff948b7b1f515e9"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","3dca1562904988550b9a30b481951cce"],["/page/2/index.html","b27054ba9a281ff2d946ff5adb43d144"],["/photos/default-skin/default-skin.css","1c2e851e59782797b8a4de74e817aee9"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","9a1ecc7fd42861b824177a7f03c1b580"],["/photos/ins.css","b01629da51f3f78cda154942a5255489"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","631a85f90ebb9ee3ef0bc6e0dc85c693"],["/posts/27514.html","a92cdd4d7e875e0d786b63a0d9fcfc5e"],["/posts/39d47c89.html","da6f5cffd8627c767fa4131a72cd3f90"],["/posts/3e5a3bb6.html","a53d5a0b97ce94bc7cf552f5656fc313"],["/posts/495d0b23.html","da862fcb7969b824985557045fec79a4"],["/posts/7fbe9500.html","3817c325614c57fd9da76667204a2f42"],["/posts/89ea6c8b.html","eb54f85dbae87716e6f662d9a334f5a7"],["/posts/9c9b482b.html","e77310929306ccedf88d1b73ab65bed0"],["/posts/a7df3b40.html","60980cc9829de3075d04ef436146cf56"],["/posts/ab21860c.html","7281691dd6c3fee4ea79e222986737ee"],["/posts/bf9eba42.html","7f45a55863857299b7b3f6a1e91ae566"],["/posts/c1cdcf68.html","5e73d1ec9af6a72fe3afd75b0859ac11"],["/posts/c4782247.html","baadc9090412a8d07f29febbd879a457"],["/posts/c7631ec1.html","4d8ec91b1943d956dcff39056c97dcc2"],["/posts/d7399e80.html","27c571c59d6f64a62bb7b865ecfa6d4e"],["/posts/dff7e11c.html","228400e5378d846be6f3ecbdb2f07e1b"],["/posts/e1b9c6c5.html","8f316afa694ef1de55e03436ecad7778"],["/posts/f68f129b.html","2d4e7ea540053508d38bf8d7a32d516b"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","3f93a29209e185be92c0ad1085d926a0"],["/tags/Base64/index.html","8e10aa29507349cca5a32bc44f9bbbca"],["/tags/Coding/index.html","eaf46b5993333f660ef89cf14e2211fc"],["/tags/Github/index.html","868c371b29f867f59c512de5964a6d9d"],["/tags/Gulp/index.html","79dec79f1b2bb89620ebcecf784b79a2"],["/tags/Hexo-Neat/index.html","324d403f5bc3b210b9a8cbd752bbcfd4"],["/tags/Hexo/index.html","2100fed4553964ae16010b195c069b97"],["/tags/Hexo/page/2/index.html","ce2f6037d0b585c3a814d7751e734e1d"],["/tags/Java/index.html","6d87ecb2e091287f4f7bee86519dd63c"],["/tags/MD5/index.html","d489b788b90b9d71b51c355cbbeb7cbe"],["/tags/Next/index.html","828e8f4d07af3308e39d6f8bf9b4a0ab"],["/tags/Password/index.html","4802b426b5617b8d736d69e9bb720383"],["/tags/Photos/index.html","e99a0e6584c80741137a5b6c5d249649"],["/tags/SHA-1/index.html","bbdb63711d5391f01cdf66b204a5910a"],["/tags/Security/index.html","3110fa231b05d51af8db3f424202eada"],["/tags/TravisCI/index.html","b0d7447d41b6d15f1da39855be34b2cf"],["/tags/Valine/index.html","34342a5ef17a36335f6c9a96ac57c5f6"],["/tags/index.html","a6d695700a6199d003da294084f4ef99"],["/tags/代码块/index.html","d02c97d2054bc449913a9c71ffe169d2"],["/top/index.html","ba3b425acd4f2fd54fd3f6f7464f141b"]];
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
