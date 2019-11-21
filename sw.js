/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7f9d90c9d42db8c48c6323b58c59cfcc"],["/about/index.html","1990d70a9fcb5e6aee8a58d416fc7b7e"],["/archives/2019/10/index.html","c7939f0c829361195b9528e2f457c48a"],["/archives/2019/11/index.html","bc1ce2a08d50966b82865bdaf9202a4c"],["/archives/2019/index.html","b992937baf7a6dbbb69966d9ca5dc8d1"],["/archives/2019/page/2/index.html","62bb53c98cac332bda72c5e9bb512ef8"],["/archives/index.html","7e98b9f437b4990dcbdda6cf45694ff1"],["/archives/page/2/index.html","7e78b1475861601a4c0d9d02844987e8"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","2f67f945ea1b5cbdcc164860fc4c62b4"],["/categories/Hexo/index.html","6b3588ee21a692a7cc02b3b99215a478"],["/categories/Hexo/page/2/index.html","e326d3f858fce0f560b55fe4b977e65b"],["/categories/Hexo/点击特效/index.html","0738cd2e555855e70ed925496f89a638"],["/categories/Hexo/豆瓣/index.html","6ed9038e6b84bc41fe0dae78848e5bfe"],["/categories/Java/Base64/index.html","71e96c297f01a5939635c55c49604567"],["/categories/Java/MD5/index.html","0cc1f413dc78617181b0a5f48336741d"],["/categories/Java/index.html","3cabd5fe4873603b4173fe83ea83d5fb"],["/categories/Valine/index.html","46bfb0390c4fdfb5753976379da272bd"],["/categories/index.html","0950b043de2afea4bd73e32c1cb5fa86"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","48f9d3c8b94d8e2c285d8eafbc1acce4"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","4998964ad3d43bfb8326dc970ac8d0af"],["/games/index.html","9bb47f4633088453af903c0cce625c49"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","c55d0e0f6bb4eb116893a09f5051cd70"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","5bad008dde4ca100c98789d09873d8fd"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c6e4e454f67889bc7b1a3d6c778e92fd"],["/js/src/algolia-search.js","b939b7c31635252ffcb11279171b682a"],["/js/src/bootstrap.js","380d690131e733886b825e24218bfb21"],["/js/src/bubble.js","5efccd5b810651940a0f1f6c62fb3fa0"],["/js/src/canvas-dance-time.js","6db935dbf69b1c31652b1e777a53499e"],["/js/src/clipboard-use.js","aad56d3c25b100a780d84f2e1ed321e9"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","96bc8681d674397b282a63272cec7bfb"],["/js/src/exturl.js","87fcfb99eb95362fb5f2f7b959a78be6"],["/js/src/hook-duoshuo.js","fd9f163b7fb6799ba8cc6cf3a9d9d0a9"],["/js/src/js.cookie.js","e11fdd484c3a2d366b4edd12f984cf28"],["/js/src/linkcard.js","1034c7b2a70264e33a74bdf6d6c37dc7"],["/js/src/motion.js","5c8b98d634be7de75951786b44233661"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","aecc8b777096b35054e4fa0fcb04df7f"],["/js/src/schemes/pisces.js","d283baa53b6dce8c50e3ff5290d615c4"],["/js/src/scroll-cookie.js","c9bbcdf227a105bb12cabf85a3667377"],["/js/src/scrollspy.js","90192b8bcaca280852a50dbc5ff3ea55"],["/js/src/utils.js","c8617c2132f97e6cdb87a210bf53a50c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","83f6b1a592a018ebe73cbb5a77e8fb40"],["/lib/Han/dist/han.js","b53620222b700ac4cc90ffe6486ccadb"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","630866c2daf9efaf00a729b7b20b495b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6f85a56b19b4655c2dca3c730ffffdcd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c5bfe4f5608ec0465625ae4639b9a327"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6259bba00ead2aed52c2ecf5095157a6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","bb624db957854a7157d58d795e7838ad"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","60682224580755ed73800880e2622023"],["/lib/fancybox/source/jquery.fancybox.css","f2e9933dfae10283823c11f3c3d186c1"],["/lib/fancybox/source/jquery.fancybox.js","03dceb3193044c51ccf1dbcfd9c67943"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","980666315cb26e6a0f5b3a2cfc0203b4"],["/lib/fastclick/lib/fastclick.js","c06e7ae0826d07512b309b4da14aacf0"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","125fcc3b9a9555c31ff6b021def6fee3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","dc127ff09a4317978eb81595d6b5a4cf"],["/lib/jquery_lazyload/README.html","b69a023eed368c0dbda1744c0309c93e"],["/lib/jquery_lazyload/jquery.lazyload.js","6c11b3107a0c97a0289d9ecb4ada4033"],["/lib/jquery_lazyload/jquery.scrollstop.js","8ca90d26664173897882f41944e02a59"],["/lib/needsharebutton/font-embedded.css","8aa30a1ea3478f39d1fa057b9f606f84"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","594526869d49cbda3625fc72c921b8a1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7d6f1c69412c848b5fa42850fc984172"],["/lib/velocity/velocity.js","164bff9b5fea8cc3b74db7422282d074"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","85f3e4715ea5c0c196ad234129136bb2"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","cc4bb8d23d975e8b0b06decef3d180d4"],["/links/index.html","6156cb600bf07641d59d3e4c20286ca6"],["/live2d-widget/README.html","10250d515b2f08a33ce49016d39f50d5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","adc592729014e6d72df5b34e6964785e"],["/live2d-widget/demo/demo1.html","0533ae4649593cc0a10ab5b98c43c40a"],["/live2d-widget/demo/demo2.html","11745a1b24f7ecf7408679918153dc87"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","206a39a722e15a578460eae61243a908"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","b86e6fd1817414fd11e5bb406a80bc06"],["/page/2/index.html","bcda0dd974c2c07ce80861e2e793a74c"],["/photos/default-skin/default-skin.css","2041776acd2ddcb7b52e93ce64ba1374"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","b6e9b4585a454307737283ead2d1fbfc"],["/photos/ins.css","6cb16039be0f32ade0c3135f3a847711"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","e7dd7dc8dd050c00c0e8a513885a7439"],["/posts/27514.html","cb981f6b4b50f6b21c3ec1468d178f29"],["/posts/39d47c89.html","a2c979e2ce8bbcbbc1b2cbc975e97c76"],["/posts/3e5a3bb6.html","c2b68236c2a9297fe32377a13e97949a"],["/posts/495d0b23.html","6eeb9e9d0c5c205ee7b4b77b8037f137"],["/posts/61913369.html","cfd2444cc15951b99d01b83ed844d166"],["/posts/7fbe9500.html","fc5c786db1ec648ce6643e22317bfcd0"],["/posts/89ea6c8b.html","728db77fa70b060c5016b5270907b4bc"],["/posts/9c9b482b.html","7fcf538d4ca460ee26f14d411c87d9bf"],["/posts/a7df3b40.html","cfe4dfebebd3e53e5f8b2e2090b4d336"],["/posts/ab21860c.html","b3a1c91b91059f3db7003b18ca1d6f24"],["/posts/bf9eba42.html","519cb48bdf3b45d1deaf71dea4c43576"],["/posts/c1cdcf68.html","6d678c239db8287218db3234bb89c553"],["/posts/c4782247.html","b9f6aad50898662a6ae911a0eb0224fa"],["/posts/c7631ec1.html","9b4bdd8592f25b2818e00770e624305e"],["/posts/d7399e80.html","29bd9a8ac70466594ee18582774381f5"],["/posts/dff7e11c.html","1b662b8d7c46e4217617b2319b66ae91"],["/posts/e1b9c6c5.html","abd312c069ccdb545c128d7041c07038"],["/posts/f68f129b.html","e51a85cdd5fb35a32c0ffd12d2d9ec4b"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6a9bbd6ee70a2cc6474121033ea84a4c"],["/tags/Base64/index.html","8aefa3b5ea140043338679d2e0b67b6c"],["/tags/Coding/index.html","b3659b61ea9dafc12229f15eba92644b"],["/tags/Github/index.html","1cbcc007308ec62ce72b6c612f8f99b9"],["/tags/Gulp/index.html","c0386074eff8ba3077fed7d1981592f4"],["/tags/Hexo-Neat/index.html","6376ae128e45839d0a50a5e1505654f2"],["/tags/Hexo/index.html","d5438814df40baad3811a68e6f625e05"],["/tags/Hexo/page/2/index.html","d7930682ea1f400141b660a4be02e358"],["/tags/Java/index.html","01d2eeee10dff29ec759c6c851c6250c"],["/tags/MD5/index.html","e47c2a12f6e6f9b9d3d783f5a5b0e314"],["/tags/Next/index.html","55baeabb6c77d09c110916ea61c0dd0e"],["/tags/Password/index.html","2aa467103b26b75dd059c7d1812fd159"],["/tags/Photos/index.html","5b86ec204c82b05d2dc7f7407ac08ab3"],["/tags/SHA-1/index.html","2f2569f7ecb5341210cae0a4affbf598"],["/tags/Security/index.html","a82ec1a1850dad2ff717cad1117de47c"],["/tags/TravisCI/index.html","4a325e2c21f324b772c36346ccebfa00"],["/tags/Valine/index.html","3c45e561d1720207236ecbb000bd424c"],["/tags/index.html","15fcd6576c6d986891883a58c2e2a44e"],["/tags/lazyload/index.html","5b04af418e2e9df8114772e4b1071e14"],["/tags/代码块/index.html","339383af3c8783ff9cf2466cabb838f1"],["/tags/图片/index.html","b135f7a326c4960456969eadb4abfe7e"],["/top/index.html","a21a05187236aed1e4aff8ac8163dd45"]];
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
