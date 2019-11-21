/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d2ac48ab24e47768d296968ad4a6471f"],["/about/index.html","f324e73ceb3f070764b8bd6ddb5bfd92"],["/archives/2019/10/index.html","f72fcc615473276c741f9f3d92654bad"],["/archives/2019/11/index.html","a464f08b1825d9b3ce907b9ea209ca52"],["/archives/2019/index.html","33ddb4c9726ce2c0d02d8269e218db71"],["/archives/2019/page/2/index.html","13f2ce17ce83ae8045f5ababee3417cd"],["/archives/index.html","6a154cb9c9564af3b752d252495716de"],["/archives/page/2/index.html","180373ccc8d34fbacb6ae4efbfdf68b9"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","84befc25b38966040dd171c43089630e"],["/categories/Hexo/index.html","c96910bc7523b821bebbffa3f8dfc10b"],["/categories/Hexo/page/2/index.html","33644cf74bc2a6d720c331298089a49c"],["/categories/Hexo/点击特效/index.html","ddae8eafa0ac49e2a21e4d09d7224a27"],["/categories/Hexo/豆瓣/index.html","acb8bf71d8b34280e7a4c46935db7b03"],["/categories/Java/Base64/index.html","1b0749be7a135354b70094aa24f4753f"],["/categories/Java/MD5/index.html","cf57674a2976750c79e8f010d259bb6b"],["/categories/Java/index.html","79737e0e4917971483a6d5fa257f2eaf"],["/categories/Valine/index.html","2c1517519b508604d6a423a95c434783"],["/categories/index.html","78fdcb6cb5f3ef4e2c4e7ba13381d60d"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","2dd3e6d5f562ef2c00dc34b6d7eba68c"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7ec5adfab94a133cfb7e8d76214bb7f5"],["/games/index.html","3c5405cec78a911074b813aa86dd9dd8"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","5487fc147c4e58e548d7f0a87a9cfc31"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","847c2eab0733ec32410ac728e65fc638"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","785c753356255cf88541dd61aceaf62d"],["/js/src/algolia-search.js","6d4dc3eb46da48609def761af3addd49"],["/js/src/bootstrap.js","b3137a4e38cde43c192ec90677be5897"],["/js/src/bubble.js","e7c9a81f99160a17725db4445c437eda"],["/js/src/canvas-dance-time.js","b65f59ab5245a7dc9971956696653177"],["/js/src/clipboard-use.js","5c3c777582857dbebdb796dde971733e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","475d4ee6a2af91480f0b5dc58491df4a"],["/js/src/exturl.js","80683184a53148c0c47bcc6ca99e4728"],["/js/src/hook-duoshuo.js","15b326f8b071be002a17c8a48503bc0f"],["/js/src/js.cookie.js","b05473b72afaa817077c8a08054bb889"],["/js/src/linkcard.js","c107e4769ecc2644812fdc132cc54f4c"],["/js/src/motion.js","d8d4ff27432584eeea2962f53a9d500a"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d042662172acc1fe58496192b3c0f4ac"],["/js/src/schemes/pisces.js","7937773f6b863fbc2e3c4c5aad76de04"],["/js/src/scroll-cookie.js","ee5d63a8f3eb30f9c8e93035a1be4fc2"],["/js/src/scrollspy.js","d72f904afffcb0058a30f0e992d2b252"],["/js/src/utils.js","326b03a1bd85e4befac1f605e0daa3d2"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","81d0956c759de13ffdeab36fc1027f7d"],["/lib/Han/dist/han.js","e12b26486373bc553d1cd51da56ea70d"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","ce2aa40d9b85c8c36353b8d07442ad36"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","4ae88ae4adc15a3c6298bf6965aa32a8"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","06bffa07d35095ba8da2bae96ff833e1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9bb396afa7b4a309c19462510e343262"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7ec1dda14dd48a93d0c9a70931786701"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c7dbd948cdc32dcaf94f5980c1ac4819"],["/lib/fancybox/source/jquery.fancybox.css","b780b930c647b2c6d338dab7b5756bd3"],["/lib/fancybox/source/jquery.fancybox.js","44446032541b6a9afbc16763548d8eee"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b20a683cced189cfc57f52945fbd4e29"],["/lib/fastclick/lib/fastclick.js","389fa5385fe5649c9b30b712eddc79f8"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f19a64981fea782c53bbcae8a9c711e6"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","f7108b0c3eba1a49ecdde4f0b8969d86"],["/lib/jquery_lazyload/README.html","1d90e9753bf8014eb9a84e0b9465670a"],["/lib/jquery_lazyload/jquery.lazyload.js","e2d18a91cd21d6418ee22efef246e535"],["/lib/jquery_lazyload/jquery.scrollstop.js","5bc64d9573e0c35f9211bfc4f71a9ff6"],["/lib/needsharebutton/font-embedded.css","fd96303eb596771bbe8103bbb11d4cf8"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","c73d478f922133e5fbb22841141a1d03"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","cbe962e60cd5f0cb0f9c5b3a8e0695b4"],["/lib/velocity/velocity.js","58a5c387dcdaaeb46426c93d2743954e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","25a03a012a92fe80faf59b45ec8c44c5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","1338773bf9e8b2bacd818ad28a87293f"],["/links/index.html","e0a8d823acbf1fb979e94af34b349c65"],["/live2d-widget/README.html","2955bdb9692b7ffc76ae98a53199ce10"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","b19c2e05ad0281fc2156267aebb87257"],["/live2d-widget/demo/demo1.html","5b698e29ffdef1268c9b31dc08b3f06e"],["/live2d-widget/demo/demo2.html","696d8679fdb1cf3a7feb6dcd929edada"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","bddff010e368658669870000f708d42f"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","4fe6021b78c22f91d0c97ba4a55b940c"],["/page/2/index.html","d7ea1c4e2de0d6198c46243dec186ab6"],["/photos/default-skin/default-skin.css","0a587f2cbe17aa9e83fc3314a62cf065"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","73ff4ced494ec4f7e6675344566c7945"],["/photos/ins.css","0486485cc7b6af386e175b6ce8161971"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","d9a5d8ad6163e908efec023e612d9d05"],["/posts/27514.html","45d0526ee29fbd5722dc922fbf025204"],["/posts/39d47c89.html","d43cb2f785879dcb7cd4184e0761a629"],["/posts/3e5a3bb6.html","0a72c1a7540c8589f583e6065f786a4a"],["/posts/495d0b23.html","9f178834679b6a02eb2181202492b00e"],["/posts/61913369.html","c857ec83a13764674e60a1a3cf932773"],["/posts/7fbe9500.html","1af66e42e910faf40f1bb9488d1d82ac"],["/posts/89ea6c8b.html","9d3e6ea308872c548bd0c5a6424b29d4"],["/posts/9c9b482b.html","1bf4386e374115a7d2c2503df57d0ff5"],["/posts/a7df3b40.html","5a2c75f6bae7849e16de89d8da0147a8"],["/posts/ab21860c.html","627ea97fd8f83cbea59bf6f10166032b"],["/posts/bf9eba42.html","82f44356d42284f215e3992ec3e0e595"],["/posts/c1cdcf68.html","9af74cfaff6efe4f386c67216ad3b250"],["/posts/c4782247.html","a194cd2838622a67d8f0a929695fe3ee"],["/posts/c7631ec1.html","17370768b722e21a5be8c66c0e739f84"],["/posts/d7399e80.html","e3d8578cb1ea1fcc00a6a1cc14ab4225"],["/posts/dff7e11c.html","0c7b015116029b4b9d1425a1596881c9"],["/posts/e1b9c6c5.html","92f4b748903c0abd73c4bd3193b16bd1"],["/posts/f68f129b.html","e168c74be65dbdd26e2a7b74b3d845be"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","21ba53b4f337ab710277864ad7be3fc5"],["/tags/Base64/index.html","8be5b7ed4bbdff4290fb044fdb6bd1f1"],["/tags/Coding/index.html","02d7fae1913443853ff4020bf7ce7643"],["/tags/Github/index.html","55adf83242ef65cd63d1230930ccf81d"],["/tags/Gulp/index.html","2530515eda4a89e8e967705e93ed2975"],["/tags/Hexo-Neat/index.html","b303d984f818a5c0ed03f8f529e1ce45"],["/tags/Hexo/index.html","3963c4d460941cc332c07a31e70eb59c"],["/tags/Hexo/page/2/index.html","89a72eb3c510e74c2fc2038a11e2cb9c"],["/tags/Java/index.html","2b2449faf9aa7ee046354117bac8d951"],["/tags/MD5/index.html","7df690c1ca4e92f7ca49c758205e97f5"],["/tags/Next/index.html","aab22440dcc2e3b1edade6e195b381df"],["/tags/Password/index.html","7ebc0e7a8714b892b186f93495736071"],["/tags/Photos/index.html","d82237a2e96c9b6031de679da3f18f89"],["/tags/SHA-1/index.html","8af174606838358a9c28712aefd7ac07"],["/tags/Security/index.html","484b26d08c482a27232926ed9b4f064c"],["/tags/TravisCI/index.html","335c8aa92a11218c8489753be56fafba"],["/tags/Valine/index.html","38b690b3b98da3dd34ecf284bb31082a"],["/tags/index.html","7e2f94e7f7dadb14419500b1ca296baf"],["/tags/lazyload/index.html","790b69823057bd9e2fc5e03e505a4a4c"],["/tags/代码块/index.html","8fa0b5637db049a058ebc44738bf4e0c"],["/tags/图片/index.html","b243a54c77de2aad43490172e55cbdc5"],["/top/index.html","3264ae770361c808929b2b96b1287b70"]];
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
