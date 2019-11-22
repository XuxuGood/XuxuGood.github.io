/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1111cc769af1dfc4c3eea023e2c99fe4"],["/about/index.html","a584a9b65e5514dc4276bfc6a66c1c46"],["/archives/2019/10/index.html","ff5c6190eb01d49998a992f078a11db0"],["/archives/2019/11/index.html","d0e1a4073c256f4e363fc3a94da3c9df"],["/archives/2019/index.html","d297e9f5a2b355b1599c11cd54df819e"],["/archives/2019/page/2/index.html","f5b1f3cb80a5df6174637e2120c3baff"],["/archives/index.html","aa8e03b1c202bb3e3fbe25731bcf669f"],["/archives/page/2/index.html","cfe47d32f8b870a3ab1d541d519bec6b"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","e71080c2089f72fba66956908727c92e"],["/categories/Hexo/index.html","e7720e7496e54769d1c9206de2ab2e31"],["/categories/Hexo/page/2/index.html","4db16388772f9d1c1719bb6ef956bef6"],["/categories/Hexo/点击特效/index.html","eab0e14f1365d2de7de619239b762c9a"],["/categories/Hexo/豆瓣/index.html","dd4cbd51849a2799b8bb7a0c43df809e"],["/categories/Java/Base64/index.html","524f39ede7aa9c4ba6a1e31404c3d5ab"],["/categories/Java/MD5/index.html","eeca6911353cc9f8a49e933579eed537"],["/categories/Java/index.html","5d8b01c469a6305f97ebd686fe2f6335"],["/categories/Valine/index.html","d5db5914039583e5c03608acf03066c2"],["/categories/index.html","93edafbdf8f4c784fb6073bbe7c1aa05"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","63618cdd07556ed9be5bf818efed0658"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","dc3dfce30918d22e564794b3a75e0240"],["/games/index.html","f8aa894b0fbd2288a6e8beba96b816b9"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","c39f6a2992b0b645dd2f0989e9eaf331"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","a14db63a6b78afc23ac4b2811c5a3d98"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","023664c1d1d652269095ba36fe24c662"],["/js/src/algolia-search.js","d49bb2371d2cb24fbea070a15fd3a8dd"],["/js/src/bootstrap.js","8e78155e4bfb5fd54594c03ddd19d46b"],["/js/src/bubble.js","c970a5f3a4ec2aa46b7f0062149fc522"],["/js/src/canvas-dance-time.js","d35dbf2e11889b641ccc2390d1cba47b"],["/js/src/clipboard-use.js","b14d56c9342797a67eab1a1c1defe23d"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","8a20d509c627002dbfb5f460902aeb5a"],["/js/src/exturl.js","a9ae233a8a6ab82513363cedb2e986c9"],["/js/src/hook-duoshuo.js","3eee7fd4d1bd76e2ecb6407013e7978e"],["/js/src/js.cookie.js","ff36e5249330c4a9bcb0be224e86a783"],["/js/src/linkcard.js","ac89fb0903defa9e1e5ffac44af5ee6d"],["/js/src/motion.js","a9b8c426cd0c3071e87a3c1be555174c"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","a082a8870086953d289fae88367b6f5d"],["/js/src/schemes/pisces.js","7228c0859394db3eca17c93e068925c9"],["/js/src/scroll-cookie.js","298533e2a895f1276a80b94826596296"],["/js/src/scrollspy.js","bd00db9a28c1f44ee8177fac566ead2a"],["/js/src/utils.js","7805c6afe3e510d9cd5c98e79de86a03"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1293433b79d85a50b3e37c91f6a7b874"],["/lib/Han/dist/han.js","aa816261a55c75c851e7de7d6ed43a10"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","35bc70f30376fe2351786009849e872f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","37da22a4d59a3d60393214525786f977"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","91d9e677e917ce5d6fb8bdfa076c5614"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","871634bd0cd7f9ec07a797d83e9e32fa"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2de7f35081a41a6102c3477a795b3a0c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","aa0bb046e65d0a08411a9b217d0011a9"],["/lib/fancybox/source/jquery.fancybox.css","3ea3279453b178f15474041c6c9f4749"],["/lib/fancybox/source/jquery.fancybox.js","59c589005c261453af79fc9871963f98"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","2d8ee9258ba7b7a30d3c3b2e6ce99533"],["/lib/fastclick/lib/fastclick.js","e762f0fe85b465acd216d451c65e8d71"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","6c80b7ab033541f255c99801a2350eff"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3821a143a37e8a6459ba11fe032eeba9"],["/lib/jquery_lazyload/README.html","3b541e03c32266caeb8d5d65f4124828"],["/lib/jquery_lazyload/jquery.lazyload.js","b94253cd3977bc5f5ed85c82d3c02cfb"],["/lib/jquery_lazyload/jquery.scrollstop.js","55059983a16a7849839915eb04f7ae2f"],["/lib/needsharebutton/font-embedded.css","2a28fc2cdd882aa695ad8c153be6e593"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","00b4b56601927be09386484be0983788"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9d7900d1147188759e4ad2bdb4c54d39"],["/lib/velocity/velocity.js","ef68729de8edd418604a1cce3ac56dbf"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2ba9912c89c42016cc6ebdc7583673ab"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","59954f21d80380f0517a2f57ac6822db"],["/links/index.html","38ea26f610247fcc220a7c857b232951"],["/live2d-widget/README.html","0e3c2a355f1d30f76109781db416f5b1"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","33dbf9363ec2c0536a081dcbbd9ca2ed"],["/live2d-widget/demo/demo1.html","2a1fe48339ef6beec953b5a381c50d00"],["/live2d-widget/demo/demo2.html","17a4a9b4fe5e5d76ffb34aca5da1ed89"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","61b924f153698e28d92b2c77596a1b4c"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","f4154386111b80d8eb67736e01c5690c"],["/page/2/index.html","4753c9855f5a8073f273cbf68935dd95"],["/photos/default-skin/default-skin.css","495440b595ef1381a81fa658d5df1dcc"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","b403bed64c17889166451b142fce7d56"],["/photos/ins.css","5ddeec93e01103734b429aa05a49afe7"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","c27b8c2462637dbb5762f980fd479315"],["/posts/27514.html","e14107ca074e4a5318314f5b6bb1069e"],["/posts/39d47c89.html","a5aa50518a3f9c2c83853c6d54e530b6"],["/posts/3e5a3bb6.html","69ab3d392896762fc8a06865bb532240"],["/posts/495d0b23.html","af9fc1329e90790f12975a0b0eec2d4d"],["/posts/61913369.html","1f586f3955df99b8a023874b70fcf568"],["/posts/7fbe9500.html","28307b4d977c976f8fc08325ff8af6e9"],["/posts/89ea6c8b.html","ef371771122672c3fb9bb4a43d2b7d40"],["/posts/9c9b482b.html","4ce6994a8ad95a47ae0e26c89bc499db"],["/posts/a7df3b40.html","97cad5206416f548bb93f17128229390"],["/posts/ab21860c.html","328eaf8cd10081bf2fae2a7765b854fd"],["/posts/bf9eba42.html","de0e78bd1695bddf2eb4b5c925e41740"],["/posts/c1cdcf68.html","37c8da5e9adce76afa26ad60fbbedfd8"],["/posts/c4782247.html","5878c6a3bdc2fea9c515c937f32e5c30"],["/posts/c7631ec1.html","b5304ec8a826758bdacaf0d0c6a3c372"],["/posts/d7399e80.html","d6c216e245a102526865f8de3226dc9e"],["/posts/dff7e11c.html","b8b2ccc09e147075916a5cc9be8979e6"],["/posts/e1b9c6c5.html","8aaf76d38cda927f510436fefe1bc9cd"],["/posts/f68f129b.html","01fd5f68800fad16509b946f868b11f1"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","397ab171dba4cc4dd6ec719d0572fa28"],["/tags/Base64/index.html","cf297fe0fce856bcf560f2ba9fa84f50"],["/tags/Coding/index.html","c7f60430c7dca35c48ee657c9ae33f4e"],["/tags/Github/index.html","c39adbc08f968ed4e58e702640d6c932"],["/tags/Gulp/index.html","ddd4998201f994fc937e206dee107ede"],["/tags/Hexo-Neat/index.html","642e9a264e004f422540a7d22cedb665"],["/tags/Hexo/index.html","bb71c021ce83d053fa3396c367623511"],["/tags/Hexo/page/2/index.html","8578a8872f6dd8701cae1d8644c88b26"],["/tags/Java/index.html","685efe0ffab8dae6be3bb3cbb5dc6ad2"],["/tags/MD5/index.html","6b003e6b880faa4a647cfcda45194efb"],["/tags/Next/index.html","0d6e7bd35a6f4d6d10aa87c36433346c"],["/tags/Password/index.html","3c770d557c2492e4f628431069f8c88f"],["/tags/Photos/index.html","d12c77303cf3b3d76cdbda996809c902"],["/tags/SHA-1/index.html","c0360dc25a40c9836bb54e3806e7957d"],["/tags/Security/index.html","2d2819ddd19ac54a41f9d58f69dc5e9f"],["/tags/TravisCI/index.html","3e35fa5128a5064922d7aea102b751d1"],["/tags/Valine/index.html","2b9bfed2864059e9795bfb98cb188782"],["/tags/index.html","867ed48c6d80f7fe4e6f56a7dcd8ac7d"],["/tags/lazyload/index.html","b136af1d0c7d726d400700a812318a2d"],["/tags/代码块/index.html","804b77ae4fe8c15784712887a33e7481"],["/tags/图片/index.html","953bf475196a6d7aff837290c581d27d"],["/top/index.html","210178bc7f642117ee1fdb4a5e8da41d"]];
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
