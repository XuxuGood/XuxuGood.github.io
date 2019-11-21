/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fcd9849189e17d0dab2f020bd9954efc"],["/about/index.html","3771972d7d86ce7c18463e81a62463e4"],["/archives/2019/10/index.html","d78821ccf783484c4772c8d91e72b0d7"],["/archives/2019/11/index.html","c100eb22319cd6d70f0e566ff3a3ab75"],["/archives/2019/index.html","888da54928f410060ff63ea11b69ffd8"],["/archives/2019/page/2/index.html","11d1b10645f1f82ccce06415eb9e2ce1"],["/archives/index.html","d4bc6bbacaca6138957712830e6da39d"],["/archives/page/2/index.html","696fe303011232fea23e6fe429444999"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","4696a3cc4c8c9564836065389ceaad66"],["/categories/Hexo/index.html","55b1fba2fee06736ee94048885681946"],["/categories/Hexo/page/2/index.html","99bbab455c01ed32bd5040069517284f"],["/categories/Hexo/点击特效/index.html","ee6a2c83e031f1104f4fcf8a8c002d9c"],["/categories/Hexo/豆瓣/index.html","6517a39c199c7926af01d29b624059d8"],["/categories/Java/Base64/index.html","7e882d04a770b1370b615e3388830a3a"],["/categories/Java/MD5/index.html","f7c8e90e4b0fdd1a577e8650f50ecd39"],["/categories/Java/index.html","9559da3dab8b895db6a7247a6df386de"],["/categories/Valine/index.html","d80cc5deb5fab947f4a2b481ab630f05"],["/categories/index.html","a14e2edfc7f1b8a8c432144c51d52651"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","2ac2f2ceb0d0d8c3b584b52a08b2cfa4"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","e658a7d149eb99c096799d5fe5ec17c0"],["/games/index.html","4348c913ed890babf7261bc3401ecaae"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","5715fe91316ee48a1d51795735b46044"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","dad3f1dda8786fb1b1b8171addbd83ad"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","7e3168ed44389817766111012c788377"],["/js/src/algolia-search.js","ca1fbef35b3f4b1e927090b8e1384aff"],["/js/src/bootstrap.js","736570c3a7c6e9a38924e7af5b51d10f"],["/js/src/bubble.js","bb499e967ba890666038182c9f9456d0"],["/js/src/canvas-dance-time.js","fce0e25cf0b0f69d7b696ad7ac5c6666"],["/js/src/clipboard-use.js","2dbef56b375d592b9b622db4a2f8b825"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","da469fa8cfe3fa062a2ea2035ba85d46"],["/js/src/exturl.js","a46866a8b2c62d93f137dbbd5ba9f406"],["/js/src/hook-duoshuo.js","22e21fd79c0d996454c78eb678077d1f"],["/js/src/js.cookie.js","2db055465db3c2a71be3546ba708b0b1"],["/js/src/linkcard.js","46ff12992209f29ec9aea9116126c087"],["/js/src/motion.js","27c51d0004d880c5a3001c3687a19e8f"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ce1bd1a37b4116f1481ef1472a193fbf"],["/js/src/schemes/pisces.js","e19d66ffd2f55e20bd57672284c6e962"],["/js/src/scroll-cookie.js","ef779d2b62db3bd626c4dd6c58da2ec9"],["/js/src/scrollspy.js","d74433e7f3b4ebb012d642b018f31433"],["/js/src/utils.js","22c45fc9eee6557d53991d704e6b1858"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","ca83e2968936ba6d6327975caecd5c4b"],["/lib/Han/dist/han.js","ba10e33966eaeee404381b338a948674"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b6474cd45e2482876f66cb8ed25a1a87"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","724656b67e0886a15f8dbc0117db4411"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e9e33759a7104fb0d9605ae9480683a3"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","575be05424ee69964e5e5cfced00d248"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4d21b1565b652293008aa81c0814be4c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fb3fa9a4c235e07c14600612454b4b4d"],["/lib/fancybox/source/jquery.fancybox.css","388d9bbeaf2121a5caa0c1687e7f3419"],["/lib/fancybox/source/jquery.fancybox.js","4b93afd33d5d09c01c8a6ffe159ffb4a"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","953d7bd1fa799b0c78a372c0c66d0a78"],["/lib/fastclick/lib/fastclick.js","db37e2d4bd8448b884cc7c1872b122f8"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a74a9e9552feb3db40354460ace950b6"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","beba73522d072f2694ee83e4d8c258fe"],["/lib/jquery_lazyload/README.html","05df136b57711689dd8cfa6d3027063e"],["/lib/jquery_lazyload/jquery.lazyload.js","cf7ee5a2824da7ba30e10bf0614e1b40"],["/lib/jquery_lazyload/jquery.scrollstop.js","e70aa385a7536839d61829920d6d6d59"],["/lib/needsharebutton/font-embedded.css","c0c5060a32b87d057d602134be11081c"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","f629ec4cc652c8e7c05f8193153b3d3a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a9507e95f9c934628f8b872231cbf865"],["/lib/velocity/velocity.js","d7b4a467c06a87ff489a359e952ca89e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","07924c64783afb68fa3a85007fa0b00c"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","44689909141e244fff33f9f001add699"],["/links/index.html","3f08595c9a0c819781d9f6240d0fb96b"],["/live2d-widget/README.html","6dc67b69cdf4c5f94d4181ac29954f90"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","90165471763a4e60faafb6b341e07d50"],["/live2d-widget/demo/demo1.html","b9123de4ab1220a312459fd87de85184"],["/live2d-widget/demo/demo2.html","4e3f513ff9bdac2dde391128ed423aeb"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","6a34208be76e749117d0b623d2246df6"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","f8680712ebe6ae854f4d5b4cf4ef0433"],["/page/2/index.html","b066e7352d1ed5481e578c6dc1d2b65d"],["/photos/default-skin/default-skin.css","361136be8bbbd1fd8da4f8249e41a0aa"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","fd952f2fda1d266af53e3bddf7bfcf33"],["/photos/ins.css","5ef0a262f3faef69cb4dab9c9c218321"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","b0645547b1b30b91c5bb08b4a4c904f1"],["/posts/27514.html","009dff4402a371b12547abcd72611240"],["/posts/39d47c89.html","d0b7903b97e7c3aba6cbe6b1b9ad1021"],["/posts/3e5a3bb6.html","30c2f32afb30b80a577de5893b1fc27f"],["/posts/495d0b23.html","3bc138ae08c1802afeaf5d44d5b43ed3"],["/posts/61913369.html","d6e01143ba0129028658945327e44782"],["/posts/7fbe9500.html","901e6f923a07f5ebf2a056c2465bcec5"],["/posts/89ea6c8b.html","f2596871eabdcbd9dfbf27fab7658156"],["/posts/9c9b482b.html","a4453ab3dc4190cae1b2066a7377478a"],["/posts/a7df3b40.html","69d0dc3a219147f39d40304a93bf1fe5"],["/posts/ab21860c.html","63cbd8033c736026db8594b0ff89ff19"],["/posts/bf9eba42.html","4d00aff0aa8b6c8ca24bfb6892ff26ac"],["/posts/c1cdcf68.html","cf06ce81484c28f6d2f43b9172ee141c"],["/posts/c4782247.html","bc14b906f1962a8f39ff10b135ab4f6a"],["/posts/c7631ec1.html","dd153a54d5e02978ef4023a20d031cdf"],["/posts/d7399e80.html","ea669e133209919571b15be8d6862182"],["/posts/dff7e11c.html","6fcc15a82f1a8a8f6310e1d3b6768ab8"],["/posts/e1b9c6c5.html","b2663c97cc412339a7d527bafba05232"],["/posts/f68f129b.html","7f208702cdef174af0a387b037f037d7"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","38ec35eb0aefa6d979ff7b7f93dd40db"],["/tags/Base64/index.html","1c30075f724684b2135d88113a67416c"],["/tags/Coding/index.html","775d6055f3a773dd65e83b9b401b5409"],["/tags/Github/index.html","c9f9c1a21a93fb36063e2c89d9bea9ea"],["/tags/Gulp/index.html","acf7c8935d9f4632e50a02820af6809c"],["/tags/Hexo-Neat/index.html","12abd279cf54f3e073e6380eb5f337d9"],["/tags/Hexo/index.html","0593c8e67eb68f801740a3daea7fa25c"],["/tags/Hexo/page/2/index.html","1eb1007432bbc9cb6f01ad077542cd18"],["/tags/Java/index.html","a12011cd779506b39ef261e9b736170b"],["/tags/MD5/index.html","088b5b9099af45fd4d61790a3d49bfaa"],["/tags/Next/index.html","403d8186cbaa18e85b58cc8e93635f8c"],["/tags/Password/index.html","74d2feddc8a8d5e40eb6aa07f8bc5ce4"],["/tags/Photos/index.html","e71e6522edcb54c980cbf3ea11ff9a01"],["/tags/SHA-1/index.html","e671cc6ce8925c69941e24f5ed2b0107"],["/tags/Security/index.html","779a6c8ab9a8462ba30cf2a6563d992e"],["/tags/TravisCI/index.html","a813117fa9f06f50e72eafe78f21e973"],["/tags/Valine/index.html","6fd3b354e856ec1b663b1f364132ee49"],["/tags/index.html","578b768cd82f91af4d61e05af52d3857"],["/tags/lazyload/index.html","bc76f839e2f73bd49e77f31db1e0ae78"],["/tags/代码块/index.html","1a189221ef617d4a001839aa707bfc3f"],["/tags/图片/index.html","3a3fe9d691d79d68b0046c9d9d4d584e"],["/top/index.html","d30ee1917eb94900cf03296212d46fe4"]];
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
