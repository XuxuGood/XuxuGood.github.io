/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a13527c11d40ae4a345840a715ba4f35"],["/about/index.html","cdb75cf20455ce1b1e3e317b9a1e9a81"],["/archives/2019/10/index.html","fdcfa69c67ab0101171a00c35c392394"],["/archives/2019/11/index.html","db4fa6ceab3bbddbe0d4f307bd9105ec"],["/archives/2019/index.html","dcf2d7544c528233b1525b7eef9af41a"],["/archives/2019/page/2/index.html","41b9e436dff605e06eacc7420ecb2390"],["/archives/index.html","4ee50988a67950a47d3ff25add956479"],["/archives/page/2/index.html","a4131f70631824f06cef95d56ec9950c"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","3cc9f7f13a0493eaff459d289cb742ae"],["/categories/Hexo/index.html","5ea7c19c6a6f0440233defcc25024770"],["/categories/Hexo/page/2/index.html","cbd3c2dabb92455fbf3caa43a34b542e"],["/categories/Hexo/点击特效/index.html","2282ec30f238fbc078c3d9a7cbe2b256"],["/categories/Hexo/豆瓣/index.html","6d33348dc8a274cf94ebe413f520097c"],["/categories/Java/Base64/index.html","ef1889bc3518461881638dc1be69b13b"],["/categories/Java/MD5/index.html","4b57bf704db4cdab671728e2ac8ed492"],["/categories/Java/index.html","5324bf52217a2a4fd0c281b283b76cbd"],["/categories/Valine/index.html","9dab9de673d7fdafd0057566157c8456"],["/categories/index.html","462e2d15449a0a0525861b05de076c7f"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","4d1785becc2631514b64d61ee8bea85c"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","484f9af2d76d4d94f4b155ddc4fd638a"],["/games/index.html","b3911200b6444cc6366bbeedcef9c925"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","9d0430738f464ac0808520167916b836"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","934257d16c1ff7e2132fa5b895252e7e"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","f4c07a25ec92c8ed34855485cc5efbaa"],["/js/src/algolia-search.js","c7bef6c59e0c4cff69d90cce3fa84b57"],["/js/src/bootstrap.js","f89efd4b3648f6be099be51796f1a54b"],["/js/src/bubble.js","06bc0e99c73a2fcd56fc353e4be8ede1"],["/js/src/canvas-dance-time.js","6cb6658861843011fe9b54fb060c5dd5"],["/js/src/clipboard-use.js","4af98fea7e29f8194928a4eb26b3f4fe"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","5aacf6bc0d0e025fcad75bfd38a6a36d"],["/js/src/exturl.js","8c5302c67cf743f8e2847a8837311e0f"],["/js/src/hook-duoshuo.js","f3c92b0cf82a40ad85d74a7d634f048a"],["/js/src/js.cookie.js","9b5a44e9aa77bf9d76cf8c5d4d5deb77"],["/js/src/linkcard.js","03aa96bfc034a0e851d50eeb2cf063dd"],["/js/src/motion.js","7d6ab43f7cf703644234f984ebca7972"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","6d18b43eb84e06ec7c9f2f7f44220519"],["/js/src/schemes/pisces.js","e1073d8b278e787e1bc62312ba9dbfb6"],["/js/src/scroll-cookie.js","d3d2b95aa5084ef208d0fdadb290c14d"],["/js/src/scrollspy.js","1e045751763d924e695f9b9fc3d696d4"],["/js/src/utils.js","b669f4297c1eca5cf0b711ac1808229d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","bcd5592153c9782ca06305ba5b55e661"],["/lib/Han/dist/han.js","21a34ef95ec0d3573bbfd44cb847ae47"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2ec8c954b2698dfd0eeab312c13fed92"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","fd226c3eccd94582f93f6ecb773901d9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4c45dc050c026e2cd53275dab93e91e8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ea645f2411dce264e1dc523dc22ccbc2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","bd35c3ac794e330ac59afcea37ca1180"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","066446c85ceeb7afa15af83f42dae33d"],["/lib/fancybox/source/jquery.fancybox.css","add2cc909ad511d774e9640dad481046"],["/lib/fancybox/source/jquery.fancybox.js","fc74492e8571099eced4c174cf30a889"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9cc383ae266c1129d31383470171b164"],["/lib/fastclick/lib/fastclick.js","619fa1ba18a784414da7eec39b194127"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2fe6478b3870813564c4346bd663f8f1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","41bde50dc316f9c787b5a21baac19c5f"],["/lib/jquery_lazyload/README.html","ea1cbb5f4c21a21593931cf10c9976d9"],["/lib/jquery_lazyload/jquery.lazyload.js","c64b85b0cb56dbc0b0b9f59226cc0e5d"],["/lib/jquery_lazyload/jquery.scrollstop.js","8aaa1ef348ca93b42b4f4cdd5531266d"],["/lib/needsharebutton/font-embedded.css","dea91a916f3352fbe7c29cbfb6e27296"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","d888d055b0fc66a19e5f1606cc34041b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1910cfec0c907b0f5eabc8d55d5f17e2"],["/lib/velocity/velocity.js","e022eadef9b23437ebbca5af7ca7eaeb"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","db3e04bf72b2727266afd289e2eab0cf"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","1689eba8791ff915258af2874f3ae5e5"],["/links/index.html","38752d5d410ed85a35093825d18e6caf"],["/live2d-widget/README.html","d361b7a3916a525b8551c1b70f87bfeb"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","1ef18609890f7c1f2f0f910e541f47cd"],["/live2d-widget/demo/demo1.html","aff6eb9fe05ba57b9932910ecbfe7920"],["/live2d-widget/demo/demo2.html","775fb9902a14a5531d9aca77bfbb80e6"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","2330f3750f84123d841452a1fcbc8cca"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","d583ab07d535a64964fd215d61cc3132"],["/page/2/index.html","88b0867bf0e7aa581861a654ef574ddd"],["/photos/default-skin/default-skin.css","a475e79cb035b452774ad96c92077904"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","676dde4383547595807634b955533418"],["/photos/ins.css","7f7a5e82836cf3f6ed6bdc49f7007389"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","0020f9281435cb1d5dfa65479c308294"],["/posts/27514.html","7aaa935237653939912c755070aae4c8"],["/posts/39d47c89.html","ebe0b8aa0e42ee254b6bd69ffc3ba261"],["/posts/3e5a3bb6.html","93fd82b813410d76ecd5da8dd35ff61b"],["/posts/495d0b23.html","66c4d285c665c105340526e171a80075"],["/posts/61913369.html","7c9919ba9f0c6175c48ee1c25873c642"],["/posts/7fbe9500.html","1981a0f3cda24702a185934f63b204cc"],["/posts/89ea6c8b.html","e8198c7e44c5a3795bfc94e9b4fea298"],["/posts/9c9b482b.html","f0ec23ed8c165d06c9033b49e25be568"],["/posts/a7df3b40.html","7a0909558a9239c364ffc96073f6b5c1"],["/posts/ab21860c.html","201f123b35b7a62f85b1188b8c693ea0"],["/posts/bf9eba42.html","144d167787bf6a0cbab7983bbecc7906"],["/posts/c1cdcf68.html","3f509d368d56e913ca625911faea1e7c"],["/posts/c4782247.html","652cc3d854fdf6c2d68b69791e9c064a"],["/posts/c7631ec1.html","0e392093cecd6b718f3bde342523c7b1"],["/posts/d7399e80.html","e9f848c726efb2412292fc52d9acbff7"],["/posts/dff7e11c.html","5d15e94fa66274b323a7aafba1f463c4"],["/posts/e1b9c6c5.html","b35302abc14fd9a30f8a4d689d7fa0f4"],["/posts/f68f129b.html","3a0a9679353c3261b2e0865aaa656e54"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","176e8348283aa929ed263477d9082433"],["/tags/Base64/index.html","c490a7756e092e24de70bb0ed2ab29be"],["/tags/Coding/index.html","7e18e986501a512a4e7262710828ec2b"],["/tags/Github/index.html","9953f6b5f37b45b093b6ceee12421794"],["/tags/Gulp/index.html","6e621c52811521efedae17df06c19104"],["/tags/Hexo-Neat/index.html","16e5e7a7576bf303099295e5c70fa9d5"],["/tags/Hexo/index.html","f034b3de6dca2afc80b1d586ee6d5680"],["/tags/Hexo/page/2/index.html","d6f8302192527adffa4766dc2eeb5fdd"],["/tags/Java/index.html","91928865a89994876fc402c586b85221"],["/tags/MD5/index.html","30b73f571fdd33bf26f56e1175e1091b"],["/tags/Next/index.html","2223faab0ba4a9a589b24629116a5524"],["/tags/Password/index.html","93aa7bc74cce09d9975387ac3d7abb22"],["/tags/Photos/index.html","de2cdce3d7254c4f29df26b3ad8d231a"],["/tags/SHA-1/index.html","301b08ad843386f32746b227e7afc6b2"],["/tags/Security/index.html","172d5765aa009fddcf76833de0c6b682"],["/tags/TravisCI/index.html","bd5707953419502da452bfdfb6c91c5d"],["/tags/Valine/index.html","cf91d582d3e34e1b93ef2044cc5f67c9"],["/tags/index.html","ef364beb16073d18fa88506a898e2ccd"],["/tags/lazyload/index.html","dfbea3761d474a317f0d70ddfbd2f79d"],["/tags/代码块/index.html","45aab3a1c8c79f69b23702cee270ac4b"],["/tags/图片/index.html","57cb4fc14a0d84d0ef7e9df591fd088a"],["/top/index.html","fed0bdc399927aefe023bb1ecc53dff2"]];
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
