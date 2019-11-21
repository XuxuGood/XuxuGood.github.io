/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","11025bbf73b16c83d43ff4d1fd01d2d5"],["/about/index.html","93bb02189fb63c9f44bd3eeb1810f9f6"],["/archives/2019/10/index.html","5108ddb3495b81942f6d8d2fd04ae21f"],["/archives/2019/11/index.html","e464ea1e317511111f1fd9c5239cefa7"],["/archives/2019/index.html","dd34bf1a3d97851edb61999e66054645"],["/archives/2019/page/2/index.html","615c02a16287a5f099c4e4e9e4931314"],["/archives/index.html","c9b73f24b7569880d37ef31603ad3dc4"],["/archives/page/2/index.html","d2a44520a1974e57e4d4adcc55e4a478"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","ac79c1059cb6123836174fd4c9089841"],["/categories/Hexo/index.html","9ec97adaeaae21d2522a15691d6469bc"],["/categories/Hexo/page/2/index.html","ac507bdaac14b77e1c0c9a61a5572f78"],["/categories/Hexo/点击特效/index.html","721437ecaec6b122430921b4782cd8c9"],["/categories/Hexo/豆瓣/index.html","c78dbebd0a8d84af1bb637378e7ffb6d"],["/categories/Java/Base64/index.html","4031ea88a0a9ea174865be238c246a77"],["/categories/Java/MD5/index.html","84d5ee62015574a19a8d4f8c37b88b6e"],["/categories/Java/index.html","69d934acbee2ed668f1be4f1d8c86bbb"],["/categories/Valine/index.html","a496c66c23cd6121d66189c5cdccb8c7"],["/categories/index.html","62c7fac79ddc3a69826106bec8894e57"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","7f2eb8a9575eb07de9f1785ee950deb4"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0618f79d2e81f09b376f07e56d92341e"],["/games/index.html","994e639bec7dc62fa1c7e1676ae112e9"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","b96528c67faa38ec8316b3f588c9a2fc"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","6cad8e5c9f1f3e6f123af6005a913968"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d8112540404b2043024503b8c7c46531"],["/js/src/algolia-search.js","6f60321503933fde52460e31e7cc7c16"],["/js/src/bootstrap.js","8db1efa175cff7a155fbcd384841e001"],["/js/src/bubble.js","55c90e147678f71891ef49c8cd37b81d"],["/js/src/canvas-dance-time.js","9d0ab722fda766cea07d246fd23adb2d"],["/js/src/clipboard-use.js","f58a509a5e10bf4703e9c3e9b97ba33c"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","2db422aecac545452749290bb016b1b1"],["/js/src/exturl.js","c5a06dbe8237ed481ed994d91fe94197"],["/js/src/hook-duoshuo.js","6eab7345a1c68468eb9dc7a26b29cdf3"],["/js/src/js.cookie.js","22ceeb4631157c0787ea60109ce9c0ae"],["/js/src/linkcard.js","0f08fb495fcb195ff358db437eef291f"],["/js/src/motion.js","af43937da46fb5759222d11d99ea1a7b"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ad64ec8b81aafd6652c952af8afd14bc"],["/js/src/schemes/pisces.js","9539cd226d192e9ef9d71584b0b3705a"],["/js/src/scroll-cookie.js","370ad6aaf692590bbbb22a765c5e4961"],["/js/src/scrollspy.js","3250a2251af7e9f98240114187f48215"],["/js/src/utils.js","a2d10bbaa90a5e6a535a50bf8a86e2ff"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","728795135b6b4db5e9efb503ba9e7144"],["/lib/Han/dist/han.js","ae43f6a20f6daed6490a0723081ef4b5"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4abac0ccf144f93dea31f523a732bc06"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1e87ffe02153f0ed2b09dd0142398f42"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","df0b7c078929631ebcc7b12d5597e8bb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d6e8c06c7f98155e9e38bdc64f5fbf20"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9b61644dbe1fbf53cc8b3d054046d74e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","812f4d1c883a1ad5494c2177492871c0"],["/lib/fancybox/source/jquery.fancybox.css","e520cb5e4c09bd034b07eee8db46b658"],["/lib/fancybox/source/jquery.fancybox.js","c7828e5d0a134e8ae7a399bfeb1beba3"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","6bcfa5fa85799708ca85198b83e8ea8f"],["/lib/fastclick/lib/fastclick.js","b76886da2e02d1de7a4d3866b34284ef"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8f6de401aa78d3402571a32878bf4c84"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","dcc0295f2bbdb2c059d242dbe144188f"],["/lib/jquery_lazyload/README.html","288fd727d8402ebbf501333fb57a5d76"],["/lib/jquery_lazyload/jquery.lazyload.js","cac3a4ab526882954c68f6c2b44c7fc0"],["/lib/jquery_lazyload/jquery.scrollstop.js","852eacf725ad3feddf983b6eb095a09a"],["/lib/needsharebutton/font-embedded.css","37444e1cbf9268e17b5eb90fc856dfec"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","882ce2a9402c0ce36367d3ba5f1d04c1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","332e5a515ea0d2e0055c022d01d35ea1"],["/lib/velocity/velocity.js","b394c7c762552b655078a789e87fb962"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e595a18f90c88444f3457fb33b94a3a6"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","82d76bf277843d037ecc274208f9bc96"],["/links/index.html","b400ceb0829ec1338113681145d77dff"],["/live2d-widget/README.html","ccf394f2c1ce90e59d0d1b4e5089809a"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","cab88210173b5f1c582f910116fe6163"],["/live2d-widget/demo/demo1.html","511316ec88d23d5a49fae031efa29519"],["/live2d-widget/demo/demo2.html","939f4527d13e5e735b2bfc3615199a97"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","58d8255880a7e4bf73062e263a43dacf"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","056702c49d6e287f25cc2ae4e342d1aa"],["/page/2/index.html","3abda8927e064fbe47cde594d9f2bc96"],["/photos/default-skin/default-skin.css","5041e6b2ce84236524156b3d5aec299d"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","4476c4a10e8a09b1e5d87e7684957508"],["/photos/ins.css","e44052f9ac0bf8373290e7c3c2bf610e"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","72e688616f29540baafabbb89ca7a8e3"],["/posts/27514.html","fe595dac050da67ba660e1736e900a71"],["/posts/39d47c89.html","f18fa5cd52b74fa4f6b4aaa03e254287"],["/posts/3e5a3bb6.html","16c658d208767fe7aa85d47b097d2157"],["/posts/495d0b23.html","93b8bfec77005152a05bae58d4305b12"],["/posts/61913369.html","401d14eb5c106844f464b57f71f7a917"],["/posts/7fbe9500.html","540696baf9f99497abe322103cd2269c"],["/posts/89ea6c8b.html","e23bda6b38cbcc47bb1bc3ec9649582f"],["/posts/9c9b482b.html","ba2e6d8839294f09cd25a6b18209d785"],["/posts/a7df3b40.html","ed9816bf4aaf39d25dad13699420da4b"],["/posts/ab21860c.html","8798cc2cf7d489ca368b9a32fea3dc30"],["/posts/bf9eba42.html","0a0d2e426ee24848f7f1735c7c8a2f38"],["/posts/c1cdcf68.html","01312c4b9538e74f4a024c813b69c9c8"],["/posts/c4782247.html","f65fb36d1ed4308fbe6754a1b6099a25"],["/posts/c7631ec1.html","7aeadb2aa63d2d23c4010ed5621d3d19"],["/posts/d7399e80.html","1c88efac982da68c671f8c6e63bf9cfb"],["/posts/dff7e11c.html","d9eb7b8feb20c6e3d8ebf1d97238689c"],["/posts/e1b9c6c5.html","695ff6537d769326c5b0fd0e560e8102"],["/posts/f68f129b.html","2a7bc8a3f5bfe76315e0b7871e98b6ac"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","b9b7ae1a96b6c4f2aef1fd0e30b33849"],["/tags/Base64/index.html","59b87197323cba6ed55e1e98711c872c"],["/tags/Coding/index.html","730e46da264a85e366e4e3f2a7a5382e"],["/tags/Github/index.html","ad9b52466537f71f31ed2e5007c321ca"],["/tags/Gulp/index.html","bd1ac6a25908992de16570969a51d32f"],["/tags/Hexo-Neat/index.html","c5842951adf285bfbba9e38623d764a5"],["/tags/Hexo/index.html","740b45dddc96be79836b5005e7e5da7e"],["/tags/Hexo/page/2/index.html","7f368c34225ee7188fe5cdb4956586f4"],["/tags/Java/index.html","a963e0515dbb7e504d2a901e66b9cf70"],["/tags/MD5/index.html","96c613441b4488458e03009ac911578d"],["/tags/Next/index.html","972d7d2f6d041a03c34045c517a7fd80"],["/tags/Password/index.html","9a4cb81046b34fd70bf532609916e19f"],["/tags/Photos/index.html","4da898b9d6a7897aed70af447a69dc06"],["/tags/SHA-1/index.html","7cfe5c9424685e0023e87412d5374eb8"],["/tags/Security/index.html","97add8568215c540fb48bffcfb625875"],["/tags/TravisCI/index.html","46b47cd95dc3b0fa8ad5ed16bfe50361"],["/tags/Valine/index.html","83acbe68db3f86bc848a9ba4071861cf"],["/tags/index.html","2566513bdaa26d93843f4254e30957c6"],["/tags/lazyload/index.html","527f64f30ba32c48e3027d433b3ce7ad"],["/tags/代码块/index.html","fe54a6a13f297b31dd879208517dfbb5"],["/tags/图片/index.html","cec3f7f7c05f934b335baecfa81fdbb4"],["/top/index.html","3200a4d11eabaa44233c72d6d4e90fc2"]];
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
