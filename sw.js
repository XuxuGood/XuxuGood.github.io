/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","33ec365a8f14c651b217addab0d507ef"],["/about/index.html","d7d135d307aaff5bc78d331b7d52772f"],["/archives/2019/10/index.html","5a36ef6e4bcbf7f004f80b2060aa1338"],["/archives/2019/11/index.html","cff978f6023ee15e6f707e28f3c9e099"],["/archives/2019/index.html","aff9c0239f146d3e6e2211e09ee5b5a7"],["/archives/2019/page/2/index.html","8525d30be341c8efb8072756ac2ce6c9"],["/archives/index.html","21a83a34716ab0cb760785305cacd30e"],["/archives/page/2/index.html","877c1fe10397b80aa968b14cb129f203"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","85ebd879a206251833c891c6f97917e7"],["/categories/Hexo/index.html","96cc625a9d093a87440de68fa6017cf5"],["/categories/Hexo/page/2/index.html","58459d43aec8bb884099c34d36a7ccf6"],["/categories/Hexo/点击特效/index.html","cfa620dd6fac54e44aa95ffa3678079d"],["/categories/Hexo/豆瓣/index.html","350251f87d241ff6179c22a839a58299"],["/categories/Java/Base64/index.html","4adbffd35fcc7b416afb820d50c9ece5"],["/categories/Java/MD5/index.html","6fa0370b3c3e4de1d4d19c0722787ade"],["/categories/Java/index.html","fc24b73819d41a97588ef04b78fdb48c"],["/categories/Valine/index.html","ba078083e96ae343024a9d7e1443cf78"],["/categories/index.html","87479103b1b4c8300cdf2f3f8b6fe52a"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","e89b31b36b3255145e4051f3fb018156"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b04bf09cd3f3fdbb59e683c591b67e8a"],["/games/index.html","abff78c3b99acd75c249fc1218bfe69c"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","8d201dcef1802a4d3a7bd90ccca22252"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","6ce30af1eb57b0a0d9fe82cf395bfcfe"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8f1d7322ec30b1168dce968b879118c3"],["/js/src/algolia-search.js","40013064cf10793affb29d65fb5db446"],["/js/src/bootstrap.js","6913575eb800537ace3a92bde7ba8f29"],["/js/src/bubble.js","2d2832b96c0a72895933e3227fa89701"],["/js/src/canvas-dance-time.js","a30fcd51567d9999d4abea758c376f55"],["/js/src/clipboard-use.js","20b3c9e322254267e8ce17857ed78c90"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","61d4a10b8926a3738c1f24abc42dd1c0"],["/js/src/exturl.js","4c572d6c276772485b95b80e579558ea"],["/js/src/hook-duoshuo.js","18a713107d1f4c2b5f19077080456781"],["/js/src/js.cookie.js","751a65103bd85801e63e8af7d560ab1b"],["/js/src/linkcard.js","2559dda1a19de8ec6f75da78381d06f4"],["/js/src/motion.js","01566cbb9316600fe6ab69f62316666f"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","983db45cb01abbca8b2d1efd2b38ae9d"],["/js/src/schemes/pisces.js","6c432442396be9c54e2546f7c764cc40"],["/js/src/scroll-cookie.js","2b82f018916ea0b177a86261f48f8aae"],["/js/src/scrollspy.js","96a1a4e40f8d76875544ce5c4c9fbd3e"],["/js/src/utils.js","18f20f349cce4feca2c8694be4690d86"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","6573d27207e321375b17a066b1d7b59d"],["/lib/Han/dist/han.js","0d7096d1906ff4144585fd0c7e30cb94"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0ed6fbbc13c30b8e0495cd4df2e95a70"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","93f5ca6644a3db8d13b4bd9aa6779ddd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f816ed79caf65dacb19c90399027fb6c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d8cdc1fd449b0422fe3dca2b796ae7b6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d504ed463d136a0887ad88b683c480dc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4a94652dd2ebffd024e0f78aa5540a6e"],["/lib/fancybox/source/jquery.fancybox.css","2b2787de353ea24475d79ea22dd50031"],["/lib/fancybox/source/jquery.fancybox.js","2aea288f0d31109794ff0d8abc15b363"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","6e01c484c15689fc559396fb672e46ca"],["/lib/fastclick/lib/fastclick.js","d1240701e1afeaf0bc2e52a4c0e6f85e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c2907df7aed4fcb8a43012f5edf95630"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3de8288aab82eef4df54d67754bde096"],["/lib/jquery_lazyload/README.html","18283cf3c1898ec4497d26026f97a334"],["/lib/jquery_lazyload/jquery.lazyload.js","5e05acc976d013f1eca80964c949e92b"],["/lib/jquery_lazyload/jquery.scrollstop.js","7ea5ea6c19e5be80821875fa39aa2eca"],["/lib/needsharebutton/font-embedded.css","afa067bafcfe06d327aeeb6a7b8086ad"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","0530b4f27492bc47750462903b7a4245"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","eefb2de2c3c26c646f0fc4abfb4247a8"],["/lib/velocity/velocity.js","ac074ea2fb513c7ef859de19a1ed17a1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","8332293d11cf7e79ec019282a6b9c1f0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","5821322cc4fa630703e6766ce563a187"],["/links/index.html","0e898f0c5433da9fdacdda1fdad0ed9b"],["/live2d-widget/README.html","ba888503d3c051614bcacb5096719f6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","a6b58d7d01af595bdf8587d66c554330"],["/live2d-widget/demo/demo1.html","f85fc1619b5291170a8a571a53246458"],["/live2d-widget/demo/demo2.html","a345212ca55a261b6e71304d4a5b7656"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","f32fda7112709f7f11f5c39a812f7aca"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","70c4ccb5f925ef6eeaf346c46591eb99"],["/page/2/index.html","143935be4217c82809c8fd3a65d0fdde"],["/photos/default-skin/default-skin.css","193a39f548e23963e2b6334afc3fa4ca"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","2a6e118a1d0284bf1fb714782895744f"],["/photos/ins.css","bfb5d1edff41292f3d74e8a554e28d66"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","3e891c0f196dcbda1c1e1138cfd117cd"],["/posts/27514.html","b3f735ce3d70233f34038803c46d1da9"],["/posts/39d47c89.html","587f4bf693d2f0a503c378fb8b19624c"],["/posts/3e5a3bb6.html","fc1829509eb190edc77556de699962ba"],["/posts/495d0b23.html","4b927c1b426898bf1147569866c03c81"],["/posts/7fbe9500.html","80007f4a05a9302957d3b0c5d151d317"],["/posts/89ea6c8b.html","a2a86db1c4974157ad6a92e55d4dbdd0"],["/posts/9c9b482b.html","fc9925863dfb29c430a8fe3982657be1"],["/posts/a7df3b40.html","5c97d6507edadbddb05e9353b45f7ff1"],["/posts/ab21860c.html","7b601f96fdeab7075fef7e865d1649f0"],["/posts/bf9eba42.html","3218e6e3a54b5e97a703e55ddbb0ca34"],["/posts/c1cdcf68.html","79868317e0ed1e95b6fac665e05cbc50"],["/posts/c4782247.html","ffdf599a64fc55898d51193d47e544c8"],["/posts/c7631ec1.html","3e9bb4c0fe1c8967f3f51a9c560b6435"],["/posts/d7399e80.html","6f19a39df4ca2333cdf791a06966ae31"],["/posts/dff7e11c.html","f316ac8778721b631cd869d044c7e79f"],["/posts/e1b9c6c5.html","622db356a21ec8216b673e9fe622183c"],["/posts/f68f129b.html","2b9a73de5a6341e0ea664f1a3794e013"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a0808dd6b4fa4ef0ec664b2ac79a7d67"],["/tags/Base64/index.html","d5eb6fe145a466b6f739a37ac1906af3"],["/tags/Coding/index.html","58d496e4cf7852d63b1a0c652447af22"],["/tags/Github/index.html","bed88228a97dd401b321a2735ee93d8e"],["/tags/Gulp/index.html","4b3052e9b64adaae3c31f5de05e01fb1"],["/tags/Hexo-Neat/index.html","04b539103c9ecdd1edf3d838c9541117"],["/tags/Hexo/index.html","dac08a6e8e5b2678fd21cb3c4b81a5d3"],["/tags/Hexo/page/2/index.html","85a2684ad67548d5b6330e5b051395d6"],["/tags/Java/index.html","4653d4d7190cabe081bab7f88fdc4340"],["/tags/MD5/index.html","981f584e3ea2bce74e48af3b81f9a537"],["/tags/Next/index.html","74717e4c9d1d86280eb4234884ac1ff9"],["/tags/Password/index.html","fa5a1d1b30be7ea4e84ac83e4b3aaa47"],["/tags/Photos/index.html","072ea77a241a3d32cd3ab8441d4dc618"],["/tags/SHA-1/index.html","4dabddec73cc6c45534171083c9f9e39"],["/tags/Security/index.html","479cad63fc5484a72c192f840b517386"],["/tags/TravisCI/index.html","067bde2df37e858e10b2bd8045e404c7"],["/tags/Valine/index.html","a61a7db47654d88fe530fe47c2f75e79"],["/tags/index.html","5099515d6a189beb5d4358d70545092b"],["/tags/代码块/index.html","7f3af5916bb4a7671c4498d39f636589"],["/top/index.html","80d6fecbb14fc082a588f606edcd575d"]];
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
