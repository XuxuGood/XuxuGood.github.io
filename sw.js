/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0d75b7e1639802f59633df1d619aa32c"],["/about/index.html","8c84444768b356f04912143311634009"],["/archives/2019/10/index.html","350e79fb545caf3cbb27f4584ca16179"],["/archives/2019/11/index.html","65e2affc59259624f5ee94fc7e518a61"],["/archives/2019/index.html","b5f6668a72be7a0a01cbf1da1b23d666"],["/archives/2019/page/2/index.html","11c349eea4ef36bd14742e2426902a4d"],["/archives/index.html","339298ffd5918249ecd3d64a6b200a08"],["/archives/page/2/index.html","9eb390eef9f7cbade5db5e0c4f587b63"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","4e187a1a2bf85f8129f58d76333d33ae"],["/categories/Hexo/index.html","b9744f1bbc26833c4ae500cc8a2781ac"],["/categories/Hexo/page/2/index.html","a344253f8f3509a720f1a45e793611bf"],["/categories/Hexo/点击特效/index.html","dbdde9fd0ba5baa5cc665970c9bbef27"],["/categories/Hexo/豆瓣/index.html","5cfd8a5589e6fe707a580af77c966546"],["/categories/Java/index.html","eead91b13b890b79437db37525bb5efa"],["/categories/Valine/index.html","e06a6c8194d5d7d212bc5ec5620a4aac"],["/categories/index.html","004b360e4c6c130a495195216d437df5"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","627c8474a695aa7504bbbcd51f062a24"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5a40ba9235a1b9586d1ee795d64bdcc3"],["/games/index.html","940bf5dd77418f77d232f4a202bd04fd"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","5a93e3358a5fd25cb96e21940a852d2f"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","9d022f83fa61935864082877734aed1b"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","45be28db196acf8f7f06feb695fe993d"],["/js/src/algolia-search.js","ec8a38da9d82ae54d599ba7b2501011d"],["/js/src/bootstrap.js","085b5f6087a72e1e4a1542d66488e3a9"],["/js/src/bubble.js","7da6be68318ce128ce8ee7f14fc10c7d"],["/js/src/canvas-dance-time.js","557780e76186f3fb24546d8e44897f5b"],["/js/src/clipboard-use.js","1854718543dc5699abbc6c9a57bdfb1d"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","9f45fde7cde0040561dd42c98bdfc2d2"],["/js/src/exturl.js","6104fdf50a6742cfdfe54ae616ce5064"],["/js/src/hook-duoshuo.js","3dc10c8d75c1acbf9d5a53f4e4535995"],["/js/src/js.cookie.js","e02f0371004a168c91fc393b758789b5"],["/js/src/linkcard.js","c2d930d92e9cd11ce2fdbe7f8ae9151e"],["/js/src/motion.js","be314998d9cd326575dce86a319a76ed"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","dcf79c711950868b2343b05e65c89908"],["/js/src/schemes/pisces.js","408055e717610c3b7886f1b93c81ae1a"],["/js/src/scroll-cookie.js","bcf77121ac1e854ffac22dcc6be04331"],["/js/src/scrollspy.js","0a7019261a422708371b1c3f30f8c871"],["/js/src/utils.js","90a63c8a08a07198e81bdc3ca84740bb"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","52358a9eff3110321b623fa76e1a4934"],["/lib/Han/dist/han.js","6d94f83bee83ea0da94a30519265e571"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4457b7e241c982152d5445b1236da864"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2284ae85b2bb1d45bf798a5d2bce65a9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c6e5865d4a5524197f1a8dc40ef7d9a4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","fc135648071a9fcd9850c4791991f35a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1459fac20e333b0079fda71aacb9f3fb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e899adb93752de7a3c728b7ebc33e463"],["/lib/fancybox/source/jquery.fancybox.css","90aa683f12b7fbf88140d2ce8355b9b0"],["/lib/fancybox/source/jquery.fancybox.js","72705acc145497cadc210d63694d830f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7430a0b5d7660fa7b89648904f8c6461"],["/lib/fastclick/lib/fastclick.js","4e71d6660ebfa89971115da621e8b1da"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f2c9e5f45265ae4a787f8c48ad4892eb"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","190b40104dd044d8b3c81c6d7cbabf9a"],["/lib/jquery_lazyload/README.html","f4b41c66d97c2a51581585416786fa18"],["/lib/jquery_lazyload/jquery.lazyload.js","4e296a49786af2fabbc3fe0b5254d1fd"],["/lib/jquery_lazyload/jquery.scrollstop.js","afed9195fe4c551576d457e8c5dfce03"],["/lib/needsharebutton/font-embedded.css","70a177506edc2175bd44cda9d3d698c3"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","dc9fc0ef10db8200b229da04a980ac7a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","aa92b3a87b6c8e721a32354d8b16c0b3"],["/lib/velocity/velocity.js","9d66e2aa38b0d88871a5e00039074ba9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f9a1ae2345389aabbe0c12a855f04fd6"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","61a04b08906d43f4d200b15e1629e1c8"],["/links/index.html","cf9d0616a6443e05c4b82489f322b069"],["/live2d-widget/README.html","2d8a3c8bc4a742a423d1dd7291cd3df9"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","98f0d8fa4a72ce1abbd750ad7b17fd42"],["/live2d-widget/demo/demo1.html","435ef9bb017c4a33d3e1167b8ffbd4cc"],["/live2d-widget/demo/demo2.html","00c6eb94f004742f770a5beae40f0cff"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","1da7fa8e45418dc8e6c0dc3d84f40b9b"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","02021c390769a3d66aff2c047c646a0e"],["/page/2/index.html","563930983b593dee0da65cbe0e68cd63"],["/photos/default-skin/default-skin.css","4288ae3a546b1f35d9e24cfab0c84e05"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","3a19ac4f0be722f53075659336c7054b"],["/photos/ins.css","1b946fb8f87c8b0e9ba51c8fd04d2bb9"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","08377aa7a2803ac288a0038752bc62fa"],["/posts/27514.html","f5ea77f68b2064f309c65df2dd3f17de"],["/posts/39d47c89.html","f7c504e0923264174dc095d75a0eda62"],["/posts/3e5a3bb6.html","88d42eccc731f95ad3d748d1937587ec"],["/posts/495d0b23.html","8dd422102ac6418bf4671665d1eaf046"],["/posts/7fbe9500.html","000e02bded5369c0cd9a42cfc35c6e86"],["/posts/89ea6c8b.html","ba5427c09f9f92ac3c563362775c6e69"],["/posts/9c9b482b.html","34e473ebb231c50a56e497da55d266a5"],["/posts/a7df3b40.html","deffeadded1257217dce18b3464dec82"],["/posts/ab21860c.html","2a69468756d8c6d808f66483173a33ba"],["/posts/bf9eba42.html","70c60dc1b6f150947024adfba98aa045"],["/posts/c1cdcf68.html","7f160b33f80a9b433a055469ef03c708"],["/posts/c7631ec1.html","1ecb409571096036b7831f8d8e8182db"],["/posts/d7399e80.html","911a5b2d470287df995ab7ede7395606"],["/posts/dff7e11c.html","47bcb3d5d474cf73c710f5b79c900b9c"],["/posts/e1b9c6c5.html","5e0b7b2d07e2d96c67e8181ee8e60bed"],["/posts/f68f129b.html","28d5d765c50e65e22e28078652ba6aca"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","eac0ecf30a397ba46da0aa7597bc32f8"],["/tags/Coding/index.html","927f29ec3998abce9c52f0a854a1f7a1"],["/tags/Github/index.html","4e4461b4fa3366f1f870e530c0b60b69"],["/tags/Gulp/index.html","073e62e52e6d89419e20f4d8ab822217"],["/tags/Hexo-Neat/index.html","dade9c589758d889b8e310b2a4b56bfb"],["/tags/Hexo/index.html","35891cd4c1570c2d550a672102c36718"],["/tags/Hexo/page/2/index.html","d7b67de3dd6c3dbe80334f0527e304ac"],["/tags/Java/index.html","ed3419c623a9c7e0c498f2dc1fc28857"],["/tags/MD5/index.html","4a5544a32d1122087497aee1c59d71b0"],["/tags/Next/index.html","9df3ad90f22489bce7b9e48bd5a8aa70"],["/tags/Password/index.html","2634ec85af9a5cc0b75449510ce8625a"],["/tags/Photos/index.html","3b872df23e6ec2d6b291fefbef2ddbdd"],["/tags/SHA-1/index.html","4446a7e815daae11e9c8652f83fd808c"],["/tags/Security/index.html","f58fb3a53fc2adce0258c8eeb2322e2d"],["/tags/TravisCI/index.html","69e839a4c0b8fd3588ae103904c88d2b"],["/tags/Valine/index.html","c1dfa4e038b8210d6abfdf034e9e928e"],["/tags/index.html","6aea490c35fa59886df9477e02d97348"],["/tags/代码块/index.html","a12dc690db3203ed68d0beda588d243f"],["/top/index.html","1dbb65b28cc9e9c84502864c7bfd5a47"]];
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
