/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1227375ef5d7af6d8a25ea06fde5ad79"],["/about/index.html","7629b901e8f78540f9d3ee1138686a7c"],["/archives/2019/10/index.html","425e57e3beb47ed42ab4de7b4ed69925"],["/archives/2019/11/index.html","5e15b21694ed42e52e4b73a9d426b614"],["/archives/2019/index.html","659768db1deb481ffd2570f5b50097e9"],["/archives/2019/page/2/index.html","ead6d21d0d04460fbbfda9046dce305a"],["/archives/index.html","78d202e58a77f22a0c9332d455bc3929"],["/archives/page/2/index.html","51f34f5461a22d40825d5735c04d49b0"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","5a741ee97585a8d4f4728fe1fdc06cd9"],["/categories/Hexo/index.html","a6eb61f693c91d06397459507fe05861"],["/categories/Hexo/page/2/index.html","a8685af5cbb80d8980fa06f5e75d18a4"],["/categories/Hexo/点击特效/index.html","eec5893571bf98edfe9fed56b5d5513b"],["/categories/Hexo/豆瓣/index.html","7795ca2ffb249e6b493661d6f37c1f5a"],["/categories/Java/Base64/index.html","a9d460dc9a88d65f172da96332c7014e"],["/categories/Java/MD5/index.html","45dc1c99662d06b378c9bb35fa9bd4e9"],["/categories/Java/index.html","b55b3372d775d6a8f605738cf30289a2"],["/categories/Valine/index.html","17755df61378cd66da3a3028c486e453"],["/categories/index.html","c156cabdd2e0424a840bd58af649107b"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","e9ce7a15a120febaff285c61223f1fd7"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9538fca3bc806199878229d2b85f8de8"],["/games/index.html","111584e0b192db27c44b9273034ae481"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","f8deead0c435f7d8485c38c5963970b9"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","e2e7a84f02e75fb98482e8f1afbcd9c3"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","04cea7342fd8bcbd198771848dc47c24"],["/js/src/algolia-search.js","fd9e8ae5554d0f37f2ad52d03c9a19a3"],["/js/src/bootstrap.js","49792852e24af17a6648f021f8896914"],["/js/src/bubble.js","78cb01ca8d49fbe67286b796885fa8ac"],["/js/src/canvas-dance-time.js","ee5beb6da071d019e7ea97647a9d476f"],["/js/src/clipboard-use.js","8588c2568c78e0c3bd90186d1d3b962c"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","01eb9e07469a0d17a86b4f317567f1e2"],["/js/src/exturl.js","7f48039e62c5fece8f6e0899bf958495"],["/js/src/hook-duoshuo.js","ae2d6c0ccc9fb891e0b8bbe5fe0bd7fd"],["/js/src/js.cookie.js","2e89feaad3c450d85a6c41a8e8cba27a"],["/js/src/linkcard.js","1f4f6e1f843a011d3c35a7bdd42b661a"],["/js/src/motion.js","46e45c4ce521865846bd8b953070bc80"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","07fe24b1bdd9626168ae52cc966e25c2"],["/js/src/schemes/pisces.js","3225339bb67af6740080899815a7fb11"],["/js/src/scroll-cookie.js","02229bd57efafd444924bf840c0d6a86"],["/js/src/scrollspy.js","d9199f52b4a1bd3dde8ab8f011831cbf"],["/js/src/utils.js","a27e36615a0b3aeda270e73d85bd0379"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","9d631aed9a73d2e8d4788259f300c33d"],["/lib/Han/dist/han.js","fec15e2d5b25a04ac9e3ccd77d5c8b72"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","d597f0b9efe6e9a34451c16b89ff87f1"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","96f3ee056e6b23fef186f97fa71adfcc"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e06df4eadb0f745378bfa0bb18b772f0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","55d5b6a2f7944de6c92ff4d6065dc358"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","72df8e05b02a83c19bee7d264727cc2c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9ebfd182b324349eb7828d6eed6321f3"],["/lib/fancybox/source/jquery.fancybox.css","c0cfe7a1c3990eccd566454eb36d2d28"],["/lib/fancybox/source/jquery.fancybox.js","d3144b5212e665f8e9e70ceaa85c4c5e"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","29216a14fc8c1feb6941a7b2d16a7891"],["/lib/fastclick/lib/fastclick.js","bf8bc74890d41aa7e9d2b6dab96e9804"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c028d8e863cca3264c4c1c219d64199d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","359cf7ba74b128b4ee23ae284efc4540"],["/lib/jquery_lazyload/README.html","3c4104e5fdd6c48eb2c6d3f67298c825"],["/lib/jquery_lazyload/jquery.lazyload.js","dc3d3479e003e30cda662d12f0acd187"],["/lib/jquery_lazyload/jquery.scrollstop.js","6998bef43891752e8bf851c35120d2a6"],["/lib/needsharebutton/font-embedded.css","2c329f04e3d358557625cf495baaf841"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","3fcc32bc74eb94ef64c18c7a54cd7771"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","8e45b83a37e4a6dbf5c59f7f3eca50c8"],["/lib/velocity/velocity.js","3464111a42a5e96ec65f3fa75b71212c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1ea150950a0b305659c5e49bdd2e9c13"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","666367466994b6ded2c65e2b6b21c1a5"],["/links/index.html","2877d389aee11e692e4110e9b318876e"],["/live2d-widget/README.html","cf715d1d80f91546619752845b869ab4"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","174a26e8d8a15a862d56ab167bf95135"],["/live2d-widget/demo/demo1.html","f5c0e5e7cd6d9430bc68a90cf99f8878"],["/live2d-widget/demo/demo2.html","a8982db4443f9a863215ced7c5c54a1b"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","798fd4523fa751596b8c7234dbcee977"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","83a9022b0b256e24434865e6a93f098f"],["/page/2/index.html","384bdfce0b28e26e8300e2d3078c9e98"],["/photos/default-skin/default-skin.css","51b39ee15c4085cc4c2e793a9226656c"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","729c66c2a5ebe1b4174d2480726beb54"],["/photos/ins.css","4059ab3f0059e46480eeb60a69da28cf"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","66a8ea35b4ce893551cbc249a0ef4e6b"],["/posts/27514.html","8fa1db30700ea50dcadae9da12d4e341"],["/posts/39d47c89.html","fee547882fe8b6676c596bc8226a7a8a"],["/posts/3e5a3bb6.html","bfb92df94b89ceb9d79a221bcbf34e5e"],["/posts/495d0b23.html","8898e4d5b74955447f7edc64a5776eb7"],["/posts/61913369.html","0af1be0107027589ef1f23de5a7ff751"],["/posts/7fbe9500.html","ce7b9f02c10c702e5c8574ab6282b694"],["/posts/89ea6c8b.html","b711783f91bd5a353ab2c325cee02199"],["/posts/9c9b482b.html","0c63568189ee72635e69927e174f533f"],["/posts/a7df3b40.html","21c70c768d663730ae2b6c865d87554c"],["/posts/ab21860c.html","3725593e26560de950800584137d1acc"],["/posts/bf9eba42.html","e5c890fe535e42e53fee42b0287dc641"],["/posts/c1cdcf68.html","dd0d9068407924db799670f962c4b05c"],["/posts/c4782247.html","640a53f01ece149b666f6b92966ea10b"],["/posts/c7631ec1.html","eef41e8087aba148de2f4ed93e5f8db2"],["/posts/d7399e80.html","398e225ca6191643694bd6b71ff08c70"],["/posts/dff7e11c.html","1ee6d47ccdec5b16377a6102f5c3b217"],["/posts/e1b9c6c5.html","a08b41da3c8dddb0feaee720b7355375"],["/posts/f68f129b.html","0417cd9111b56f98facb24d9348afc51"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a0dcffe1d12c1c3c84bda7539ed52dcd"],["/tags/Base64/index.html","be61829c45f1506fb2b43cc84b4d164f"],["/tags/Coding/index.html","5858245fd756ae2a7f8c8eb556da735c"],["/tags/Github/index.html","d5384352048c7af8c1efd816ea8de804"],["/tags/Gulp/index.html","1b48660cefba15547172ef954c906049"],["/tags/Hexo/index.html","6d419a9691f8fb7626f2c7e78636046f"],["/tags/Hexo/page/2/index.html","44b037fc2c014286ad96e4f3c857ca27"],["/tags/Java/index.html","9c1e7e52e397bf5798e6826a0bf2a87c"],["/tags/MD5/index.html","822b2bacbcd236042bb848c52fc98547"],["/tags/Neat/index.html","58d0c792fde1323e5a0e93505da5b2fb"],["/tags/Next/index.html","4ad2969fa8e3857672255099386b7bac"],["/tags/Password/index.html","cb2039dd56fa769599e8a6f8da2b15c5"],["/tags/Photos/index.html","ba82c80f6fa8089ce9603b2852001b79"],["/tags/SHA-1/index.html","b8c0e70f47bbf1c44591227e5b9641cc"],["/tags/Security/index.html","8b58b7f7d0a6c599adb763a12d423607"],["/tags/TravisCI/index.html","8b188c23d2bc6d3c3883ecb42d181f05"],["/tags/Valine/index.html","a2c295ef941a4bc2657549414c1e13dd"],["/tags/index.html","852220497c929c46a80a5b18ce9a6df5"],["/tags/lazyload/index.html","6c7e6703e8a9c0feaf138c203c1fc558"],["/tags/代码块/index.html","d7042da29376e9c3be710e24d7409fbd"],["/tags/图片/index.html","1b41598a25d4dc04d76501826ff021b0"],["/top/index.html","f59db860f56cd47578bb5079e3058ff3"]];
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
