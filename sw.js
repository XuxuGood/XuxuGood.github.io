/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6b54d8ee8e005fc9329df2c4112505e1"],["/about/index.html","6a8fcc3bd23b9bcec3bad6036131ffd5"],["/archives/2019/10/index.html","2431c0e66b8608c8b9f20ecdd74875fe"],["/archives/2019/11/index.html","7d7f9badeaab1f7d9e467b42d422b440"],["/archives/2019/index.html","5aca03d36bf4a68e5b39131d6191a135"],["/archives/2019/page/2/index.html","a9a9d1f05d798686fb0cbf66bc1e29d7"],["/archives/index.html","b740f50fcbe8fcb4f1f2c58b037a2ada"],["/archives/page/2/index.html","263408c30c1e4206c0d4ad8380440977"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","5d8ce6b9f54585e102fe951dc7e2fa37"],["/categories/Hexo/index.html","021cdcab945f2086cf0edcc23f9a47d0"],["/categories/Hexo/page/2/index.html","6874d74504c2046a3a85c93c457a836e"],["/categories/Hexo/点击特效/index.html","2671688e56cce59406f1957ad32cfeab"],["/categories/Hexo/豆瓣/index.html","89998250c4c69b438633b13a285a5dbd"],["/categories/Java/Base64/index.html","35d3f6f101576c3d20c8669a98c09790"],["/categories/Java/MD5/index.html","1037bd5c44a3d5b20826078e0f20f1a8"],["/categories/Java/index.html","7425241e45d3e6d278cbbe02e7761994"],["/categories/Valine/index.html","c81232b5af1bfcc70170a5a0f33856c4"],["/categories/index.html","8d14fb1660735796ce478f8bd98cd3ec"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","dcf854d7da738c5b3830a09f81bfbb39"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b4fac04d8b17f0b8761199e17cf31846"],["/games/index.html","62d6f7876fe417cf02210372e861e889"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","327916bb94af79e345eca4d780676f58"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2956239e4d2c32631115ba3f4057c087"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","a7c67809d050e77b175bde5ab6172c85"],["/js/src/algolia-search.js","3276fcd504f65810dcfcfc7a610daa6a"],["/js/src/bootstrap.js","4833cbf6491b345103e4783e8ce08499"],["/js/src/bubble.js","0f9045d7dc623aa74f53dafe9a46cba2"],["/js/src/canvas-dance-time.js","54994f5096f8a55eee1f5d2de089482c"],["/js/src/clipboard-use.js","ccd432fc0f6f43e4887bf06915000c58"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","939857897bee0adffbddf2d691067158"],["/js/src/exturl.js","e185a5589f66bd4c1b08e919ce7aa6bd"],["/js/src/hook-duoshuo.js","47cab8bfa7e47321596b3433fe503010"],["/js/src/js.cookie.js","cb2dc7409871d396774d5803da03f9ad"],["/js/src/linkcard.js","88eff774fd1cfdf39e065837633c4d68"],["/js/src/motion.js","1b9e1b4931f9b7f6d3214151ffedeb8e"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d0c2fc5bd1bb0d026d9462210bbc7336"],["/js/src/schemes/pisces.js","3bfe2323ad309775cb5da1994a776f83"],["/js/src/scroll-cookie.js","7aac87b5d4da985a89adc0da760ab179"],["/js/src/scrollspy.js","771f45d8ee185a3941d156185e4178ca"],["/js/src/utils.js","a12e447066867ad221c442d0e9d6c5c1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1a4113a82ef6e962e57b744fc9638cc6"],["/lib/Han/dist/han.js","e009ce453ce4e9918fdb48bd4978f3e3"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","971b59bee7b4ff5831676c66eaa80dbb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c55958355f8cd29e9c64edcf4b6ba58b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6a91daffa811dc5c428e5be3c60a28b0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","fca93217d8d115677b1b75e89efacb52"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f569e9ff271a384ad4e6f26c747150fc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","00caeb3a2e0530b582fae8c893159a45"],["/lib/fancybox/source/jquery.fancybox.css","55427c1c21dd281fa3388c1bf7b7f47b"],["/lib/fancybox/source/jquery.fancybox.js","c70cd33154c3dd3b9fa0ca0d4df3ec92"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3ff206eb8d64354649ebbc0b27bb6d7a"],["/lib/fastclick/lib/fastclick.js","41a98c257c3f79e5fa4f91490a2dfa95"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","3356dd1b94629001b241c470b75a73db"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","39184ccb944feb5e696c8cfb95548241"],["/lib/jquery_lazyload/README.html","05a5967a1050ab1d21b6a613caefbfbb"],["/lib/jquery_lazyload/jquery.lazyload.js","b2f76d954516579167aa62342aeb3916"],["/lib/jquery_lazyload/jquery.scrollstop.js","b4287127860e69735c7251bbeda59f52"],["/lib/needsharebutton/font-embedded.css","b24bcd7a1238c401657e3df3ec47cda3"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","089282507595b37db3f49a6741e9fc15"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","372a6eb2b42ccf0cf5fc50260c516e76"],["/lib/velocity/velocity.js","73e410580879a402945812b10d2cdf20"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","40a9cd893ae46c3e8f56d4b44c31f1d5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","d2d95cc5c8abfe883ea207f6a5f77a78"],["/links/index.html","29d3b8d3fc98bb36045508e3584d0879"],["/live2d-widget/README.html","104cae0596604316d5c6cb631e62d7c5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","3f25d90b75e0e8e45ceebb087794b1b4"],["/live2d-widget/demo/demo1.html","3fe78680bb07d11ebf902d11591f8be7"],["/live2d-widget/demo/demo2.html","cdbb10cf88f65c0dce0a7ba6b018de81"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","e637796c744e38903e09f8017726def3"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","4da69241288aeddedc4b85593718fb8d"],["/page/2/index.html","4135b790948d98868ec247341a2a9d5c"],["/photos/default-skin/default-skin.css","b0686e2eb688f1ba211d959723cc6f20"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","cba19f72a3ad448ef8405b24dc46b56c"],["/photos/ins.css","ee8222d54b89cdacf294f4c042e7aff1"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","fccf3df04a77a63b021511fcfdee8aa9"],["/posts/27514.html","969fc4123ebfa48e9d090ee715c50edf"],["/posts/39d47c89.html","8e689a9629c4a4dd8c256eef2d2a3dee"],["/posts/3e5a3bb6.html","651200d7ce97d628ad4d3d798e9fe222"],["/posts/495d0b23.html","f60bcb1f380300b3f0a707c261e1495d"],["/posts/7fbe9500.html","36a1c0049cfe254ab34db5bfd8900425"],["/posts/89ea6c8b.html","91efeb5b8d2375fe499a9c88f18ae7d3"],["/posts/9c9b482b.html","9761a3fb0fa3f5dc25b8d2dacec76659"],["/posts/a7df3b40.html","31993a937a6b9b49debba7d0ef900912"],["/posts/ab21860c.html","734f4cc900aa5e820f50f43ceab6d1f2"],["/posts/bf9eba42.html","6e6e296b605776133f1f179ca0a1585c"],["/posts/c1cdcf68.html","ac9f508c159304111c7e1e4e491066f9"],["/posts/c4782247.html","63b4e0a4be26057bbb9886ec1b8c2214"],["/posts/c7631ec1.html","ad683a26e56d2c9c6c4654616b986526"],["/posts/d7399e80.html","397d9cfb11f44600b0ee1eeed08985e1"],["/posts/dff7e11c.html","073453c19f536da0cb2735252ec07fe3"],["/posts/e1b9c6c5.html","87211ea55043b73cf1a390d594cc88da"],["/posts/f68f129b.html","186dfe8347406ebff6e3b67fa161bf35"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","803f1a5bea4eb15f005e27bd1cb85a55"],["/tags/Base64/index.html","cb468e8c93dfc2fe68b1fe25b213a029"],["/tags/Coding/index.html","6cca2d4beeb2387570824552c5bed317"],["/tags/Github/index.html","f0c306d1a7b2b34d57e82e76899b3f3d"],["/tags/Gulp/index.html","9774aca6f24b6b570448bf48c1e82ed4"],["/tags/Hexo-Neat/index.html","5da764faa79e6fbc32dc7f4fd1924cfd"],["/tags/Hexo/index.html","60b4d7ba5303d97383d484bd349a1d88"],["/tags/Hexo/page/2/index.html","c128856d10861bbdfb92a21aa9b5350e"],["/tags/Java/index.html","27ba1ddf91c563a3bef2dc168be0056e"],["/tags/MD5/index.html","78c7e47a90b6287c1e2e96b37778064c"],["/tags/Next/index.html","d9e3d4af02cfe0d8af6003ceb5a8e913"],["/tags/Password/index.html","1ce579d038f9d6d47f600bfb66e6ff0f"],["/tags/Photos/index.html","1e71d4a3c9e92184ae099b3edda7cb6f"],["/tags/SHA-1/index.html","84a1e040b10c56043ae2bdbaf0a151ea"],["/tags/Security/index.html","43b382b652ed9c42fe597f34e929944a"],["/tags/TravisCI/index.html","e61a5558a183ff8937fdad96786d3db2"],["/tags/Valine/index.html","cccc1e06285e01f32c12ca02d0e2698d"],["/tags/index.html","6a94bb46e4dcd27abab24ce7dd18ded4"],["/tags/代码块/index.html","9421bccd39a7d4622c51c7d32720a599"],["/top/index.html","3b69841c9d570f49728a1fea4a3022ed"]];
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
