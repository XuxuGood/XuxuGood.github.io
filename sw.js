/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a4df49361cdeaffdbbadb2741e1cf32a"],["/about/index.html","cf1e89c13aece03771888f091c98e41b"],["/archives/2019/10/index.html","50052ed457c33d75b6d0ffa070d280a1"],["/archives/2019/11/index.html","442da92cd9126b3d1ecf6355c329372a"],["/archives/2019/index.html","431e0b3832b0a25288d4eb94237d494f"],["/archives/2019/page/2/index.html","bce546b70dc145ecbbef1624a27c4193"],["/archives/index.html","da99b3cdbfc53b1b9fe7c3f2735bddf3"],["/archives/page/2/index.html","65add8b5753eb25675f77aa933efb336"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","a6cc0cb5db9421b13881d25931c1868a"],["/categories/Hexo/index.html","9bb6e7e0234dfc12dc78aa7540d02239"],["/categories/Hexo/page/2/index.html","d5edd0c587335f878ed6732580a24143"],["/categories/Hexo/点击特效/index.html","1654c95f68bb53bb2367609344d5c300"],["/categories/Hexo/豆瓣/index.html","76832a988e1e97dc0ebe89a19e7f6b09"],["/categories/Java/Base64/index.html","882c1bb73929747a0dc199c3747ad959"],["/categories/Java/MD5/index.html","9325f8238fea54ad845f7d00058daaae"],["/categories/Java/index.html","1fad293d56ab2c6570b90595e3213018"],["/categories/Valine/index.html","f55a1712b42541555e254952d8af32b1"],["/categories/index.html","5760312a74def6fab7041d44333ffa65"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","3713c1b62f88ce8f728a3703423a9266"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5d037f3ba1ce2aaa744dbc7628eb598b"],["/games/index.html","6955d9244a91144c42edb4cae9197b55"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","8f82cc420ec6e4a897b22b806e137ce4"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","9eceec57531ad11b94e66b6b52be950f"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","42fccb81b636d3e5a0b2773dbb5a0ac8"],["/js/src/algolia-search.js","9438517034b13ce27691cbf13f16788a"],["/js/src/bootstrap.js","469d05d3e3cca4fd4490b2bbc6cda064"],["/js/src/bubble.js","b0b3e69be6e737167e085da0d1a10e63"],["/js/src/canvas-dance-time.js","c43aad1d09d3481fab2feb2edf433617"],["/js/src/clipboard-use.js","8c66e958fa84110a40cfeff0219267eb"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","3737816b9a828e16ddae8e69d0dd8d09"],["/js/src/exturl.js","3bff1cddd3999c01f81ff30fd95b8ca4"],["/js/src/hook-duoshuo.js","dc7b5729ae85fd3f7a70108d7d55f9e5"],["/js/src/js.cookie.js","54b4498dbbe73b9fc1c50c530983bf1f"],["/js/src/linkcard.js","7d6e53c4c1a1c857e75f52eeaf9bd27c"],["/js/src/motion.js","39de578287d79ee8980dfb291cae2e89"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","b4a12ad98fd16c5feb385351a250c277"],["/js/src/schemes/pisces.js","9342acf8fb1b7d179626cd6bde24f2d3"],["/js/src/scroll-cookie.js","34deff84502e544c5e0751ccbf066688"],["/js/src/scrollspy.js","fd56af31dcba6e1f7c117f4aa486cb27"],["/js/src/utils.js","e166877aac0476447fdc56612e293c2b"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","0c923d881ee5fda01806fdf402233ead"],["/lib/Han/dist/han.js","eb307f09dfdc78265f73a15f1c488e80"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","a4038b2e9c39fae6e183192ffc1987c2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1cf24533db2ae7ba73cea45ebd82ca20"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c0796f66db0157e4b3db0e9537800abe"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ec4ad58ad6cd9fcabb0b1f19ce3bff43"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c4ce6c75236453db9238e561e0e0f027"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","044a3762fe4503925bb339837c9aeb73"],["/lib/fancybox/source/jquery.fancybox.css","4d2a09e480c14224dea907ab239f7955"],["/lib/fancybox/source/jquery.fancybox.js","3ff2c549218b2f07cfae8db68209e79f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3cc3fa791b3ab1f4408453546ba37c8a"],["/lib/fastclick/lib/fastclick.js","154780af08ec4e20e8c0cf486e3f32b3"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","9ed0de05c8b5030bb25592873cca2154"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","0f14acdd81d7b050adaffc55f8369613"],["/lib/jquery_lazyload/README.html","1485362dfb93cbabb7fb6689474abb18"],["/lib/jquery_lazyload/jquery.lazyload.js","824c6748fcb528df20a98da960953604"],["/lib/jquery_lazyload/jquery.scrollstop.js","04ba668be1d1f709667e7c2b76269b39"],["/lib/needsharebutton/font-embedded.css","c6ffd6f4a8433f404ebb0850394caaf1"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","99557d92b1bd4d9f65704059edface8e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","54fb635c846f07e3d0db06bdf06ffb55"],["/lib/velocity/velocity.js","10b7aba60ae7361942ad7ec6b7345ae5"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a19b78371c332f329a4c5d7ed1cdc5d4"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","ea35e1ba8cb11a62aff2b91e07f00744"],["/links/index.html","776fe6d6bf8f7bb92414106c48e02114"],["/live2d-widget/README.html","dc49cff1a066d12136e8b7deaf5bfd09"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","62fa61de67d10eea357f53c78d5d2a31"],["/live2d-widget/demo/demo1.html","e90b8ace42c6c9e150b5edf3173e24c9"],["/live2d-widget/demo/demo2.html","b25e5dfe6614e57c63052fd3bf97c30e"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","0cd2e918b3b9891f97da92065829ea50"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","ebb910266d8849c3aaca788f28dccc8d"],["/page/2/index.html","cc488c5acd1d2bbbbfbbfc24907d2c92"],["/photos/default-skin/default-skin.css","2dd3c8deff57969f62d19d1656c5efdc"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","ca41c943e74d785d244d8058a152abbe"],["/photos/ins.css","b2d1fbce2ef9eee89782061f8d8ae4a9"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","eabcaa024f06adba2bc24d59036527d3"],["/posts/27514.html","b8767b749c77b5303d85a638b19d3efc"],["/posts/39d47c89.html","8e0a542bd960b19c5240c0dfbb5752a0"],["/posts/3e5a3bb6.html","567de9f19a6de6219c8c0a7adb9f2b52"],["/posts/495d0b23.html","f77c8f973edce3047c9f5aff231901d6"],["/posts/61913369.html","f12157acf88c079cbe5f309fcd0a43c4"],["/posts/7fbe9500.html","697d7a5360fa1180836761bbfcf283d0"],["/posts/89ea6c8b.html","ed25e184cf551f3c71b447978819586b"],["/posts/9c9b482b.html","94915f003ac0c770288d46e80c00b562"],["/posts/a7df3b40.html","303dd6403de96ccbfa8119fd74161a03"],["/posts/ab21860c.html","8e84a7b44a02ae4086cd579963a70ac8"],["/posts/bf9eba42.html","e45f4b57bea172c0216915626091a27a"],["/posts/c1cdcf68.html","109fb3287f9ef6d85ae71780b609134d"],["/posts/c4782247.html","e93b750ceab834530eccab090c486ff5"],["/posts/c7631ec1.html","9cca3da1de3d3296f0f027a89307a633"],["/posts/d7399e80.html","80396d42b8f38f1211774673b709c4c0"],["/posts/dff7e11c.html","667584a283096197001d9cb4ada62bb2"],["/posts/e1b9c6c5.html","0d9bf604f68d77819e0c237afed905c7"],["/posts/f68f129b.html","35bdf1f41d76f57b3db3a3c8170c9f00"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","f7d9835ad0c29c48d87ddb3b641a7fe1"],["/tags/Base64/index.html","bce30ec370d12de6649daa95435f22a6"],["/tags/Coding/index.html","fe556495fe283c49b20610f24bca4525"],["/tags/Github/index.html","ae5fb2d9fea84f0e67c885ad014795ca"],["/tags/Gulp/index.html","560ea2125db196eaac53edf4f1aa0f24"],["/tags/Hexo-Neat/index.html","9e5c44b925189990cee80b623c5c5987"],["/tags/Hexo/index.html","4f1d17c4f6ea2462e87637c432affe6e"],["/tags/Hexo/page/2/index.html","d894a00670ed22438932a0fa360b49d8"],["/tags/Java/index.html","1e3221d9c322386e8dae86dd31dc8759"],["/tags/MD5/index.html","002a891c083224ed447b2034e8831ba2"],["/tags/Next/index.html","62b094a708557a7b3e5a54058df2e103"],["/tags/Password/index.html","87a00a627afe9e9f9b030d44a69d259f"],["/tags/Photos/index.html","2d404817ff987072685beb358edc6006"],["/tags/SHA-1/index.html","c8566544c17814ed550c93087ca44091"],["/tags/Security/index.html","721291a5640a91fb6869a60ec9bb3813"],["/tags/TravisCI/index.html","8dfbe8d10117a11fe453d0ba97fa428d"],["/tags/Valine/index.html","ce1e348b856becc05068758e36b8048a"],["/tags/index.html","34dc6396b43695774bb2f950985503fe"],["/tags/lazyload/index.html","f434bdcc7024d950c3368f967c963988"],["/tags/代码块/index.html","387c9ac345419890d994b681edf4fe11"],["/tags/图片/index.html","14c5ead01fee34afda7cdc4b9f406c5f"],["/top/index.html","c29df8c0e487f2ab2824dc7f37df6a0d"]];
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
