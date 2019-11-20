/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","87bed0b67f1fa6dee9c98404fab840d4"],["/about/index.html","19679fa66110a50e1df37c37f0687e91"],["/archives/2019/10/index.html","73d28ab6e6f48a6e1d1e45173f4d3dab"],["/archives/2019/11/index.html","10bd4ee6764ab581bad1ec078d4a8c08"],["/archives/2019/index.html","70881f11d5067d1d54ed3c346714ae90"],["/archives/2019/page/2/index.html","a4a5a775f8ee1a0b8ba87fc86ed7df2d"],["/archives/index.html","08fe7d54d865342fe461b23d02910bbc"],["/archives/page/2/index.html","b928bd15be0e06f8b0c3a9c32c7fa94e"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","5b3d3f8d26f9a3cdeef70fc24868ad22"],["/categories/Hexo/index.html","4bc99234a3866d14f5a378d509bb4bd4"],["/categories/Hexo/page/2/index.html","9771f2210fc52238dc28e4b4ea854d1b"],["/categories/Hexo/点击特效/index.html","09fb466738a0344b3199a9ebbd18f7e2"],["/categories/Hexo/豆瓣/index.html","4fe3c022899e79b0508b0cd251eef9dd"],["/categories/Java/Base64/index.html","113457d6ed3a51b6ec0f98c5181898ff"],["/categories/Java/MD5/index.html","96cf91309d079c3d8c0262876daa14e6"],["/categories/Java/index.html","eb4c63b059e41c185628d7f24eb2b1f0"],["/categories/Valine/index.html","0558bb7e3cc7d56d0c0aac771aee8dcb"],["/categories/index.html","076cf4af79f753a390ca0e2ba6faa31b"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","c3cc9545090aa6222205243a20d387be"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","bbd8162335be0bdcfa991a10ad129bd3"],["/games/index.html","7bc6f928131b5f9431677dfb63c0d2e5"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","7e2cae5a7039dfd5c8cced859e7c38b6"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","455f4461d8e4209aceaafc64a23c17fe"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b63145fee227c3717f26c89b9296e502"],["/js/src/algolia-search.js","5c102063fd0df496beac0ca5b4b5fae8"],["/js/src/bootstrap.js","924eaa64dd629b00babd2cc833d11739"],["/js/src/bubble.js","b0f121f51e92aa879bc924f57e984412"],["/js/src/canvas-dance-time.js","1a2585ee6f8a36619b4da3df05a67b22"],["/js/src/clipboard-use.js","75cf210e166f2a578fe2a1ff3bbaeda0"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","63c2c9ea4e0958d30dbb208955598b94"],["/js/src/exturl.js","2dd951eb2902cf6bac2910317831c76c"],["/js/src/hook-duoshuo.js","f68de38453dde8a5876e17199d2ac8f6"],["/js/src/js.cookie.js","5ef9bea1a342e6292f0697df67abd669"],["/js/src/linkcard.js","1607ddf9fcd6dd3f6193a7f1d5970653"],["/js/src/motion.js","a7422bc9a6b9f5725ceddf05b4e0a093"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","3b9a7df2afd3aafe623c6948973d9869"],["/js/src/schemes/pisces.js","cccd82e4e056f0331bbc28f807117881"],["/js/src/scroll-cookie.js","fc0e9887933c90efe4a168fbeb7d1e04"],["/js/src/scrollspy.js","f2e20cd15ea53e1dffd51792b545086e"],["/js/src/utils.js","973a7ab5be724f06660de5457f82eab0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2e1c5acd044b2af5136a68e71b914636"],["/lib/Han/dist/han.js","5fc94b64f1af4e641df21df6c65d9db2"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9bc27819330801b40b20d376e6d1232a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","38c11ac827835fa4e74951f3cb609676"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ae0664b1d72a3c01279c67a70b204997"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","713b34664e7f643384eaca74d83f2ea3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","27e68f53b935ffe24a67662c271e50f7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5d06894f5911a3ae6091c826499ad28d"],["/lib/fancybox/source/jquery.fancybox.css","8caeab4a7df3ca207b283e81ab8fb4e5"],["/lib/fancybox/source/jquery.fancybox.js","b40afcca3f856bccaf0b66c1677d9fd1"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","950829b516ff9ad0b0e68ae94043bc59"],["/lib/fastclick/lib/fastclick.js","8380f72aec4b6b2fb5f5fd51f80ba512"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","109537e179b42890c39473914f3c3bd5"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","a5b3483da5c46461dc8d4d0bd609bcff"],["/lib/jquery_lazyload/README.html","ead8cd195bffe51ef7abb97af20e48d2"],["/lib/jquery_lazyload/jquery.lazyload.js","1427df250db02c1cda9357023dd628ae"],["/lib/jquery_lazyload/jquery.scrollstop.js","8c8ea47f0f6477d31b7f9fd1ff2dc66a"],["/lib/needsharebutton/font-embedded.css","b2c8322a0ff426fcabb73dc92156eb7d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","29ef062eea5a459551a88b3c030f9687"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4754cd67f7218b2024b108083bfb8128"],["/lib/velocity/velocity.js","3a1d0cbe6f7a46998545010cfff44a49"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","9dea0b645775065801827ec3c03fdd9e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","041b6b196046bceb8a06686cebd29853"],["/links/index.html","47bd241203fecdbe2fab9f877947da47"],["/live2d-widget/README.html","3a1037b4e8e13d27828d24103dd57072"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","506cca77982451a04c77ebdd0fd3b056"],["/live2d-widget/demo/demo1.html","79c91e72eeb9f3cf2813a6305e3d3f00"],["/live2d-widget/demo/demo2.html","40bb6632ae6a78e2e97c96e4c56ce6a4"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","f373f24d096763ca115c3956f4c2956c"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","e1becf38c40f5962880fcb36f9bcd55f"],["/page/2/index.html","1cc12fcc908e19d3ca20d972b74575cb"],["/photos/default-skin/default-skin.css","6931962c43825e3a47e7d16670297aa2"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","e0335431f65c812c3532897a3e552eeb"],["/photos/ins.css","6ecbbde59d76b76b91fa40c5c4ebd27e"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","18b80beba1ea25c34009654fee0fef05"],["/posts/27514.html","af4dc3c34fad1d9ed38737915ceb0a79"],["/posts/39d47c89.html","1694d5c51bcca8540431c7958f73b357"],["/posts/3e5a3bb6.html","cc7d0958a1117eeadf82605882d3eb0f"],["/posts/495d0b23.html","488fec74afd17846f081d9fa50d9e8c0"],["/posts/61913369.html","c86f097ab283ae3dad7aa7fe9773646d"],["/posts/7fbe9500.html","2cd4ae60ffbac4734b011349eccd6252"],["/posts/89ea6c8b.html","33626014b216ee39a786fcf8728564a5"],["/posts/9c9b482b.html","831af73e089ef36aaec0ea20f955a825"],["/posts/a7df3b40.html","9d9ae08f11455e7e36259bda40c4a10e"],["/posts/ab21860c.html","7273312030608dc1cc73ec884471f984"],["/posts/bf9eba42.html","8a7f9339169e0cd36be28c115cd7c9d8"],["/posts/c1cdcf68.html","e968026cff21cc7c8aad1d5d843e3915"],["/posts/c4782247.html","34675a39e31fe075827d4a79cb9d777a"],["/posts/c7631ec1.html","6dcf348942bd4f8604633d8c86ddcdec"],["/posts/d7399e80.html","882344f204b2fb0c400e0227aca632dd"],["/posts/dff7e11c.html","64a003aa7f80117c1cfecc48c37143f8"],["/posts/e1b9c6c5.html","522c14bbfd55d63175791ee45c1486c6"],["/posts/f68f129b.html","61ab7653d4afb1340d1a7e23fe1e30a9"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","9f69b5d6a1b451bd7c7912776dc2fedc"],["/tags/Base64/index.html","a358751a6cafe5f14de454e91f4e9dea"],["/tags/Coding/index.html","ec956586d18e5b3975e70160c390874b"],["/tags/Github/index.html","3166549f66f9423fff560ace2821e619"],["/tags/Gulp/index.html","6eb33ae264a3cabf73a0228a0db471c7"],["/tags/Hexo-Neat/index.html","863ce34d6be295b3fbcb8f08e57263e0"],["/tags/Hexo/index.html","ba8ad532b66f97493c5f18e7ffdecfe1"],["/tags/Hexo/page/2/index.html","5398d7c2b43982abb13178598207f9b6"],["/tags/Java/index.html","c8e1414ad4a5d6221a26cfa2c6a2ad13"],["/tags/MD5/index.html","e5216d9f92d668a77d7dda66b1bc2005"],["/tags/Next/index.html","b66e81020d0181a0a96f8d0242fa2981"],["/tags/Password/index.html","c73bae63b8cb08c72df774df9ea6f003"],["/tags/Photos/index.html","6b94df211dcc20804880cf7b4bba5c20"],["/tags/SHA-1/index.html","e1a423e19012352890567772791e5231"],["/tags/Security/index.html","ff8bbd6b3366f1c187d83ba4ce0b9883"],["/tags/TravisCI/index.html","f21164397bc2b84d38e4a91bca851b8c"],["/tags/Valine/index.html","245f93fca70c11454021de4cdde310d4"],["/tags/index.html","e8b1f17790f34bccdbf175674f0d0239"],["/tags/lazyload/index.html","2251d2545926c439a36b79fdf85e1c2a"],["/tags/代码块/index.html","6957479ead9c3da6d183563a5e10d4d0"],["/tags/图片/index.html","44bc103839111b32a0f27f397127d907"],["/top/index.html","03d739d49a8c540b5c6148e807edf66f"]];
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
