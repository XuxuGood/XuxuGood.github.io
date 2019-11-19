/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d5eee46c22d54a666368af92b85d10e3"],["/about/index.html","3c372b672c0f5619d58837e73aca5b95"],["/archives/2019/10/index.html","ea39aecc9290e17289602bc60dea8fd5"],["/archives/2019/11/index.html","a92db1200cc78ad43ea5147260befff9"],["/archives/2019/index.html","d0c5f3e37da96f2ffd139c18c499f50c"],["/archives/2019/page/2/index.html","166d73483963042ee3a7f9f95d37b15c"],["/archives/index.html","b5c73c50bd79675b5d97306a342f0290"],["/archives/page/2/index.html","5b676248ddb196ed812ab219f3abcd9e"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f02b68af6e1e7b6f57d34b2f46ce4469"],["/categories/Hexo/index.html","8de28db0814d41b22a843ff9338ca6fc"],["/categories/Hexo/page/2/index.html","6e0e984cdeea08aa904d1c3e7d653ac1"],["/categories/Hexo/点击特效/index.html","6dfdb2a10c8235972661afe903318af3"],["/categories/Hexo/豆瓣/index.html","34f7943a004b615223b09b2cc9beebe0"],["/categories/Java/Base64/index.html","5ed6d4ac6c52558be4435d940ffce64f"],["/categories/Java/MD5/index.html","b21ab32a99228b9e4d2d058861872df1"],["/categories/Java/index.html","70af9ba057b41baf3630481a2b9cd1f7"],["/categories/Valine/index.html","121e8e49357bb0a214d21a58cbd112f1"],["/categories/index.html","3d87aae49870407b690c3666b31ad979"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","6883e65967bf950420494c5b3ac86726"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7ea130abc9627ba2939cd5e4bc7af60c"],["/games/index.html","66fd4bbd4ed27badb67cdb8d5d40d296"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","1c51b698ad5632c9112851b3f92b7d8f"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ab118c7374123525d4dd8927672504be"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c0baabaf78148c3c05a9e6d71b4b89b4"],["/js/src/algolia-search.js","507af50c222f2055392712d7805b69ad"],["/js/src/bootstrap.js","b7c2dd43915f3bf07faa64ac528c345d"],["/js/src/bubble.js","86d3dc7fd2c4041f668cc6e70732749d"],["/js/src/canvas-dance-time.js","ca584ab95f3860571a5d7c3a664c9c2e"],["/js/src/clipboard-use.js","88337ee90e8a9007adb5aef4fd8bce0d"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","f91a4c2cfeeea4181e322bdf9b0f56ec"],["/js/src/exturl.js","a95d36ac1f5c5f23ac07c77608b804dc"],["/js/src/hook-duoshuo.js","cf37136f6e62c06c3b28a8b1c43f56c9"],["/js/src/js.cookie.js","7090ce5de96e2b62ebaadb59e2f462f0"],["/js/src/linkcard.js","a8feba1e09ebe289fdd634795f6c90db"],["/js/src/motion.js","d42d258d81a2c998024a67ad4ffbc2b8"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","da945b757fc3e442be3e57fbaee16db4"],["/js/src/schemes/pisces.js","935ede831e225ac8c76893f67ad5f2ce"],["/js/src/scroll-cookie.js","19e08f5bf81f883b3f52b23f699cc4a1"],["/js/src/scrollspy.js","97150055661cfc3b95c4175493a32e2c"],["/js/src/utils.js","ee723326e1e70991f6c91217ee7dc251"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","387e267bbcaa40c2cdce7f73f17c1f8c"],["/lib/Han/dist/han.js","719a29803fb9f99da2c0e837ddd49c71"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7e315bc6ba23621d1bf2955783f73bfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b67319ac9e2ee60dc25943186b938f4f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9cdbcbb0829b5130d7b686764b4582a3"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ba0e65d942c37cf67b7a071c8a0d5bd2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","685fe2745672b76ff866b7931eefef1f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","737acf6a5f41b32bb4b2a7eff9dec0aa"],["/lib/fancybox/source/jquery.fancybox.css","91a106fda54857bcce48bb4ba1ef7359"],["/lib/fancybox/source/jquery.fancybox.js","16a3e3c3fbd3ace7349a5118c7ab0ef1"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","022441a24835486a0efee5e9f3ae4626"],["/lib/fastclick/lib/fastclick.js","d21b3c306081e8958180289cee171bb4"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8683e11e1ddce2ea18652bc2884b341f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","a5e66dd409b024ac80a604ea71e9bc40"],["/lib/jquery_lazyload/README.html","b76f550f9a56d194f7dc7609f1e98e15"],["/lib/jquery_lazyload/jquery.lazyload.js","c5bd66132207a0f1bed812328e376af2"],["/lib/jquery_lazyload/jquery.scrollstop.js","78aa086097129d7901c3e42a23d079d2"],["/lib/needsharebutton/font-embedded.css","ee6d4ca2e887f1ed01985635cab94ad1"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","8f5a4647e9b9d3754e66adcecd3c8983"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","280e9edbcf9ee39a28497d34314c2005"],["/lib/velocity/velocity.js","ebb8565c1721e976455cd6d767e6b052"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1bebf24e215b5c07568a337483260810"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f05a553ee2659c2d9cd9feff08d3d533"],["/links/index.html","870580b516b2d8ffa622b08114e0c179"],["/live2d-widget/README.html","8c20563cca36407221794a09faaab96b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","f494cf38e37090d6810353e4890b7345"],["/live2d-widget/demo/demo1.html","18456028d0c1a3265ea697d09f8f4af1"],["/live2d-widget/demo/demo2.html","409586b0489bf11199cb4834648a86da"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","b566dafe8d2129ae934d85784de0bef0"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","f40fdd9c56e196b5fc1641970b3aca80"],["/page/2/index.html","251267623ecd7db3778116e9d4b97e8a"],["/photos/default-skin/default-skin.css","514970e3c1e80eb8b75974f2771cbfce"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","57679e0cb525baf1e39721d13b8758c0"],["/photos/ins.css","86d50720e5524c3346f2977b219f904a"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","3e750ec43783ee2c8f466fd02878470f"],["/posts/27514.html","8dc5fd71e8b51722fc9bba2a49a9ee23"],["/posts/39d47c89.html","f8c55877ae1aa924e132725ba738ae66"],["/posts/3e5a3bb6.html","57e8bd0e1c54edcf1e4da5f8d63c6e62"],["/posts/495d0b23.html","0790966ff2e9cec7215c549e766649fb"],["/posts/61913369.html","4c2ed868278bb415ebe24c9b58e26b41"],["/posts/7fbe9500.html","3c6fb447210762ae9218e4d559f78b63"],["/posts/89ea6c8b.html","257d3037290813b197ff4d7b14e82d0b"],["/posts/9c9b482b.html","8094c965a5e235d870452676c7bdfa60"],["/posts/a7df3b40.html","5de81e4a3bc2e99e5ac1fa2cb0ab8b7f"],["/posts/ab21860c.html","896390549d137d25c1f8254f9c3dbb9d"],["/posts/bf9eba42.html","ff82c25fb9364a3a56de5dcd176ce588"],["/posts/c1cdcf68.html","25d27bb34df36fcdd1acac38fae23a1c"],["/posts/c4782247.html","159c533f50eaa4519b5f223c25ae4a12"],["/posts/c7631ec1.html","71ca365f380dfc5709dd65b2666a3a96"],["/posts/d7399e80.html","4b3acc2658766dd61abb5ecedde5c4d0"],["/posts/dff7e11c.html","877142a89e65cc502a1d701b5aa56036"],["/posts/e1b9c6c5.html","5023d50814d39b7af633e0db8ed186b5"],["/posts/f68f129b.html","0d63981f25ed9ab3c70799bb2c0f8886"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","0dd82d5c6c5f824866cdf5f18dccb367"],["/tags/Base64/index.html","ca95545a1adf58d040dc86db20c078a7"],["/tags/Coding/index.html","9b0432af94b9d187c41f6b87a58b809e"],["/tags/Github/index.html","02dd0d5761160e5b951bff70b320126d"],["/tags/Gulp/index.html","c108ac0ed7ad0415fca02ead7a69e2cc"],["/tags/Hexo-Neat/index.html","7f2bfc692af79b8fecfd361195465be1"],["/tags/Hexo/index.html","e43d00ef3240c4e61941739d1e5affd7"],["/tags/Hexo/page/2/index.html","4d90534364e406b0736fc8d58825dfa2"],["/tags/Java/index.html","773c1e34b125d957956602d6d39cc886"],["/tags/MD5/index.html","d5413547a9a1599808d09e320104783f"],["/tags/Next/index.html","f0d011c9cbee7e88acf9ddeb58e5de0d"],["/tags/Password/index.html","de66311a942ad791b0f7249689985c69"],["/tags/Photos/index.html","d0e2f581e4daf58d6a2207353434f327"],["/tags/SHA-1/index.html","a0eee00b4e1c23335f611f15ba22933f"],["/tags/Security/index.html","1bfe7e90f94588dd6c58dc068fe3103a"],["/tags/TravisCI/index.html","28a1397d7073394a271b987026acc8bf"],["/tags/Valine/index.html","068805ace1212a61e6d8fe7e083270c3"],["/tags/index.html","4c97d549d005f744c293f16d09e4568d"],["/tags/lazyload/index.html","2f0bbf7af63fc32f7bba19406f6e932b"],["/tags/代码块/index.html","90bb37435f93740afb432d5a340fcf5e"],["/tags/图片/index.html","1af59315c72d04fd26e341fde5d15d11"],["/top/index.html","827c17c4b0b11742c117f33fd31d6069"]];
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
