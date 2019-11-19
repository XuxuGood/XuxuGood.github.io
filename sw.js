/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3d38aab99d0d8c02eb9f64198a7b2d80"],["/about/index.html","fa2770e4714c5cdff77b23d857b89f6a"],["/archives/2019/10/index.html","fcd9f481983ca74472c42a2db35ad455"],["/archives/2019/11/index.html","e14a5ce998ba0416f8bfc99378879f35"],["/archives/2019/index.html","624ae45a7762d33737d0c44c68d9636f"],["/archives/2019/page/2/index.html","34268f9395775763567935e5a59a4374"],["/archives/index.html","d31b909900001b90488528de97749d2e"],["/archives/page/2/index.html","fed32d2d1147aeb38858b7ee3d8c4e35"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","e020d75326017b55b090fa5408651035"],["/categories/Hexo/index.html","e2ce333dfadb82eaf0b18b643a875d8c"],["/categories/Hexo/page/2/index.html","acf5e49452d3dfd78888dd6dc68c38de"],["/categories/Hexo/点击特效/index.html","1d1fe42d7cd2813d6afcfdd872c658c4"],["/categories/Hexo/豆瓣/index.html","5394ace52bf7915342fe48e13496f3b9"],["/categories/Java/index.html","1773ac4d3e2fd346f83c62acc24ef7fc"],["/categories/Valine/index.html","cd253bbd29fd7a56e4e60d805e763acf"],["/categories/index.html","91e851b5220582a2a4bf46b7d82c1eb2"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","2eb1f3c22a9cca2f88fc2bfa1825089e"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","083ea5e7a3f7f681bd804f532870c468"],["/games/index.html","9a8cd70036fcfbec927f034e72ff8dab"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","48976a00b64f00d1f191cdb45fb2f6ef"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","96f046fec4fdfaea47f69eecdd7865b1"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","7c9fde901fe992c3ca3bb88759f09d83"],["/js/src/algolia-search.js","056a55fbd0ee655c6c9816f42f1a1a80"],["/js/src/bootstrap.js","61df7f7bf79ebf74bd8887a2415f0db2"],["/js/src/bubble.js","6cfb6c51f3d75aa033027b13a517c149"],["/js/src/canvas-dance-time.js","8b07b4232a0769eb59d1ab2928515d21"],["/js/src/clipboard-use.js","9deda0fd816326e9090861c3e0fc216b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","1a3bb4da3eb9bdc6bc3775c56a8018cb"],["/js/src/exturl.js","0c49f060a729d2ac877b20623d304f11"],["/js/src/hook-duoshuo.js","1a74b957c252991293c16e8da30cfbad"],["/js/src/js.cookie.js","c03a35f935313edda39459b203e57638"],["/js/src/linkcard.js","879afe16d6e38fb3fb5e48e03a080439"],["/js/src/motion.js","3131d6fe0e7e62b24de38d5be9e267c4"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","590a9213e964892cd5f30e6df939971a"],["/js/src/schemes/pisces.js","0ea0b254b2fefe89d2249e7d0d36af22"],["/js/src/scroll-cookie.js","93a59b97a6718fd640e916ec87079895"],["/js/src/scrollspy.js","c15228b0a07d12a1428551397860ecf6"],["/js/src/utils.js","8f833acb90a8b799a9244cefe2d99eff"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","eb904bddecaef87e14da1ced0c408db4"],["/lib/Han/dist/han.js","17b28d161ed5fd24a1c39aaa80e7c81b"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3184ff84a9d2708dc4ebaeed60d4750c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c42af025d5b2d12f27caf1e479d48cac"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9e2ce4fe120597fc54aedb8254dee557"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0239a47c8e9db0cb2b85466244ad68f4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4ba73b6276480ddc077c5e6d0c69d958"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c19f9bf1589a6c8c7f261375261770e9"],["/lib/fancybox/source/jquery.fancybox.css","cf641c3aa05d1cc4f81d0c5e6e5df7c6"],["/lib/fancybox/source/jquery.fancybox.js","01f943d76fbe3f5b8944c030923e1240"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7596a95b67fe572eb79e95f0f33ed258"],["/lib/fastclick/lib/fastclick.js","1bb53018c6729b41eeacd68a61c2b3e4"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2cee3dadcefc83bf47a2e6abecd92855"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e51bdd9e29434c8ca71b04014d2bd563"],["/lib/jquery_lazyload/README.html","baf48043e2612353bb81c7a69d6fec5e"],["/lib/jquery_lazyload/jquery.lazyload.js","38b8ad818c7ebc62c6aed782e7d0701b"],["/lib/jquery_lazyload/jquery.scrollstop.js","e1b9da2af3197af478ca6f073ee6e5a7"],["/lib/needsharebutton/font-embedded.css","b33a88954dfbc14ab12ef4390c43656f"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","8b8a55fa9164bc991f59fc6df578e55e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f286cf5730d348fba6ffe25bc561708d"],["/lib/velocity/velocity.js","9afc908abd250eb734e4465ab20a84d2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1fecb0ea5f613d05914f35b79915a040"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","36b768d77c2373e5df1ee668ec0511d5"],["/links/index.html","81059ba9d648327a5595a9b008b93164"],["/live2d-widget/README.html","a21baae7c8f08feb7718a8ae5bcf9883"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","c832b475a9a266b666ba9e8c5bfc1080"],["/live2d-widget/demo/demo1.html","0f7cf2dbbf33b0e0cf4f5a1b25ae1af5"],["/live2d-widget/demo/demo2.html","c8c4436bd7a17cef6c27fb1aac150235"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","e4903cd8d2a95c9f56057bd3f44d9349"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","f3098f466c8ae56418d85ee6793dadf1"],["/page/2/index.html","c17ad17dd09bb345583ce4be1219f391"],["/photos/default-skin/default-skin.css","f05fa2340e6491005fc156fcf2128545"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","545126ae4758f8f6342621f561705fa7"],["/photos/ins.css","34bb8c727ce1068c043bc40823bcf8d4"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","2f51eddf8ba86b09e6685280fa66df70"],["/posts/27514.html","5c81ddc6d3d00133f9c2d91b2c10c2d0"],["/posts/39d47c89.html","5e2d9fb28b3d45b5ecb81d37ef4fb822"],["/posts/3e5a3bb6.html","9f523a169f7001593f20d1368e27afe1"],["/posts/495d0b23.html","8d0b564c7a8063457d8359dd34bca5a2"],["/posts/7fbe9500.html","b61cdd94e6d30d3cda9ff837424e6bc3"],["/posts/89ea6c8b.html","e1d49ede0037a3a1acf5111c64d8fd2d"],["/posts/9c9b482b.html","03a995af77481941be12f5f588808f4f"],["/posts/a7df3b40.html","49b599d7eb2e42e0f3c21b49e416ae79"],["/posts/ab21860c.html","0e5e80ce6aabec996c0da0867295d351"],["/posts/bf9eba42.html","41b2e3e843ab8310439d1dde2783059b"],["/posts/c1cdcf68.html","b9efb4d1ed2d7c094c25d0a59d28932f"],["/posts/c7631ec1.html","a2c773077a244ab29c08cc6286f4b025"],["/posts/d7399e80.html","b21ad43ec877fe810c18d622be1f3447"],["/posts/dff7e11c.html","736c04886e57c9c9dd9b52e28723e931"],["/posts/e1b9c6c5.html","05c0a55a0f2c3e491175b6357cdb18e2"],["/posts/f68f129b.html","5aafbc3e61e23bdcf606553e37da52ff"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","cc0397474107aa77295d3bb1f4735b40"],["/tags/Coding/index.html","21613433b46a33ab601e990fbcf07d15"],["/tags/Github/index.html","7c4b5ecabd70e3afec218aabae23d86a"],["/tags/Gulp/index.html","c08db55df20442d4b447067ce86c7b80"],["/tags/Hexo-Neat/index.html","e880ab6cbd3b9c0407c3a239907da93f"],["/tags/Hexo/index.html","ff9f4f3d48bd72edee176c6199e9580e"],["/tags/Hexo/page/2/index.html","36a227cc8946ff4a8f846a110bbb63ae"],["/tags/Java/index.html","8f53e9f4873a6e8ae3983e39f8d92cda"],["/tags/MD5/index.html","b790441a908029f7e61fb86eff1973fa"],["/tags/Next/index.html","5c2715e434c44ad2dfae7ab9f72f90ae"],["/tags/Password/index.html","bb8d15ebb01c2880dbb4c042f7813619"],["/tags/Photos/index.html","d1728acb3b75084e2efb984949e35c46"],["/tags/SHA-1/index.html","d23f1845bf30eb1ccaa3c841b12ee30b"],["/tags/Security/index.html","ef8ab82bf41a893ea13659e3a6efd656"],["/tags/TravisCI/index.html","a00de825652a671e1fe8fd93e908e0ad"],["/tags/Valine/index.html","9bb1bd0eab85efc4bf440a22dca6760b"],["/tags/index.html","81a993b76ef475cc7cf25d8af1adea98"],["/tags/代码块/index.html","f8d111e17a57239d513cc738554f022c"],["/top/index.html","b69149e2922e9cdc54324c3609622d01"]];
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
