/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","285b854e6a76b2c181194c3c6e3a1bb7"],["/about/index.html","520614fddfed101e0043956453831c27"],["/archives/2019/10/index.html","235287063a8287e512f8d53618860c97"],["/archives/2019/11/index.html","a3b890e6fafbe5be499ae84e85befdb2"],["/archives/2019/index.html","6de120662ab667ed812917a85423a07d"],["/archives/2019/page/2/index.html","7653976fa5e8f81cd6ff8c003802d4aa"],["/archives/index.html","16effafd32b308ef5aa20ca242a491fc"],["/archives/page/2/index.html","1098f0393d8909ae7607bfc5ac4343df"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","e58383c623c2b50f2ae09b568b9670ac"],["/categories/Hexo/index.html","c6bc3353da5e840b0da773dd5ed4ba12"],["/categories/Hexo/page/2/index.html","8d2cdcd92885486250b9c63ef4cc4be1"],["/categories/Hexo/点击特效/index.html","b681b05719c8448fe06ac768cfe4f0d9"],["/categories/Hexo/豆瓣/index.html","4070423b39aac1fca6b8168fd185bdac"],["/categories/Java/Base64/index.html","f104b4ea24874d3270f8dba7d71084ef"],["/categories/Java/MD5/index.html","ea943207d3bcf8767e79872a402d4a50"],["/categories/Java/index.html","d461bdec365fe6fe34731c046b70fe38"],["/categories/Valine/index.html","31ad96823ae6783ca5340d3d5490acae"],["/categories/index.html","b52239ae799ff0bfdf7a3a0fd2e90b21"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","5c49ab6645b5dbf3500dc36fdaf783bf"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f213f5fef87b4ed9022f89353c0cd00"],["/games/index.html","10212f67f926550016744263fbbc50b4"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","e8ffb5ef323e716d0cc36992369a0d58"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","9450875f888383aeb6d1cf87018031f0"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","4b78fbf28ec357869579a58f312edb5f"],["/js/src/algolia-search.js","557368d63292d6dc0203bb48f8c43a62"],["/js/src/bootstrap.js","538ac56af6d37eae443d49559cfdbc48"],["/js/src/bubble.js","c834c99abfb904f365c52e0f133930d0"],["/js/src/canvas-dance-time.js","1dc58a74c2944cda8e13d63d232bcfb9"],["/js/src/clipboard-use.js","0ba6125578dab881d5fb9bf71524d5c0"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","7ec72552cf3b10bf581366fd55022aec"],["/js/src/exturl.js","ef9aae6b518ee7b59b8fe1b72769036a"],["/js/src/hook-duoshuo.js","3051bcbd0f0b547238be6512c776d601"],["/js/src/js.cookie.js","a170a5050ad64b71ecfdca2e6afe7ad6"],["/js/src/linkcard.js","0285e44dd17d7591f9ebb87b0065929c"],["/js/src/motion.js","92bd23aa1229ed7916cc062d620aee1e"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ed25d10b40bd03e50d1530bcbb451e97"],["/js/src/schemes/pisces.js","a9b65c07acc09e5101341619301e4228"],["/js/src/scroll-cookie.js","9394c270e43c09d8bfb0a850df9b2401"],["/js/src/scrollspy.js","2121eed6826253406f0844cccda5e235"],["/js/src/utils.js","ea86f7b6ad22ecc5f174f90dcefcd835"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1cecd6116eab8d0a6511422da13aab31"],["/lib/Han/dist/han.js","314db9b0806df29088552154ed30e324"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c82151819ca0dfaa6c751911e7d42eca"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d269f4a82ea716dde4efb4207385e7a6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e0d1d92f45099e89c6e3a647f56b7f4e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","09780133c96410fca771538796ea913b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4e38656607f679d1011e6cde899b8fdf"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3e420d4836dc7b611fda405df46dda68"],["/lib/fancybox/source/jquery.fancybox.css","66da63fadb07965d751f3478b96dd7c9"],["/lib/fancybox/source/jquery.fancybox.js","be15f61d6d6ec6480b613c283aed2e60"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f6e24688fb9557852e699999820944f8"],["/lib/fastclick/lib/fastclick.js","3f461c8bb62da54d95f0c8ccbb3b62af"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b4075df54cbd2e2470a6e64151de40e3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3408458d8921372d7f661dc4c954f343"],["/lib/jquery_lazyload/README.html","35fb51e400798e3a4fe9f36e4c159a91"],["/lib/jquery_lazyload/jquery.lazyload.js","3f721fced2615b2cbc2f4b7bf257133d"],["/lib/jquery_lazyload/jquery.scrollstop.js","f23bad1cd38b657795293716a0fdc6c9"],["/lib/needsharebutton/font-embedded.css","46c4da4ae9082a8d889518d0c24ab702"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","b30748139f6b27bae050ebdb6b4e485b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d9f0178fa2b75baab964a0febfafe3a1"],["/lib/velocity/velocity.js","93fb1d5292d85dceec4aa9f85a08237c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1769494955f2891cf18b8a2a2de99327"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","980159af8f77e97db569c04f5d425207"],["/links/index.html","9936a829d9da809da840c4cf0e0acfa3"],["/live2d-widget/README.html","5cd796bdcd994dfe19e7d1400b0f1578"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","c904b3483c54464326ae0d71009f80a0"],["/live2d-widget/demo/demo1.html","0041851340021ff6e9f4c8b47ccb2669"],["/live2d-widget/demo/demo2.html","731093f7b2a8985244f6d5afbc3b09c0"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","92a19097855314a71d9d4b47e4dcc5da"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","8333841ead162b56236dbb4016617a27"],["/page/2/index.html","48d90b04d80e5f070d07c4af5439ba12"],["/photos/default-skin/default-skin.css","3ad9d1838478842c4f5d79054834cc00"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","2af77dddd5a082c09adee808c7b20543"],["/photos/ins.css","baaa3a28b782d160deb486ead31f4c52"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","fb9882e8678fa7c598f508f926d55821"],["/posts/27514.html","0b1b3fdc7f911e76e510f00fc6607529"],["/posts/39d47c89.html","e017a1a4670fc69ba6fc9949616dcba0"],["/posts/3e5a3bb6.html","bedf827c891b5af869afbd4566529091"],["/posts/495d0b23.html","e642f112155333a7fe80d41c4fb0822a"],["/posts/61913369.html","697512558eb91936fa0d5794968dcb66"],["/posts/7fbe9500.html","45e6e2ca2d0df6e16024c75ab1f9a0a3"],["/posts/89ea6c8b.html","0e94ed61966e044f68a9b49c27f3c9aa"],["/posts/9c9b482b.html","e16bf49cd5f4e090f091b84956bdf3f6"],["/posts/a7df3b40.html","8d8aa5f7965cc28e5c5f72f2687de712"],["/posts/ab21860c.html","9b5bf45c9cce1ad76b9de39ba3da2cdd"],["/posts/bf9eba42.html","39c9f0c0d77cf2ae769421e4571ea282"],["/posts/c1cdcf68.html","b0161b0816b447ace74db1623fee836e"],["/posts/c4782247.html","50f714ebc0d87c05f70e4a16fdc496af"],["/posts/c7631ec1.html","920f345b864ec7888da8890f07ffd5ef"],["/posts/d7399e80.html","782612358fe9f2a6121b649ada906f71"],["/posts/dff7e11c.html","955e07d00983b6acad232ae9abcb0b19"],["/posts/e1b9c6c5.html","b841eba3327dcbbed0667d5bab4f4f0d"],["/posts/f68f129b.html","8e4ca609accbd8f3dcb84a48443ab447"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","f23c1309dbc4b395fe8c6cd5414d52fe"],["/tags/Base64/index.html","4d411ae3f5b0ec82041a637a9fd4c1ea"],["/tags/Coding/index.html","e27f3f4582349eafe160a9db80baf248"],["/tags/Github/index.html","093f854e9090f4542a16b517e599624e"],["/tags/Gulp/index.html","d8d3c40db7140eff1bb4279efc61991f"],["/tags/Hexo/index.html","f0907ee06e21fb7a2db81fa88b2225ca"],["/tags/Hexo/page/2/index.html","143007884fc6e7ee5e63b102c953cf8d"],["/tags/Java/index.html","fa1d8425a85f42c362ff0ab4bc4aceb4"],["/tags/MD5/index.html","d938609465dcef8d615024d17e8a4503"],["/tags/Neat/index.html","067a35f401750b473475f1e533945cf6"],["/tags/Next/index.html","7d7da997f40ad4d79edfa4c0d2bee605"],["/tags/Password/index.html","1a456509d2f8a2f24f28eea1e724ffe7"],["/tags/Photos/index.html","c071ceae195c4453e6a1a55a41f21168"],["/tags/SHA-1/index.html","c5dcdf453f0b6a91b0f0bee8ae7e16d4"],["/tags/Security/index.html","41d32f9ea0bbe67d677a6cdadcffbd2e"],["/tags/TravisCI/index.html","6eb1f27284ef84bb83d73b19b75cea5d"],["/tags/Valine/index.html","1e0e88fc9ffb8deec64b08b479d42e71"],["/tags/index.html","b9da9773bd1741947240bd05e5537556"],["/tags/lazyload/index.html","d027b4e045b9f21f46698d850b207b0b"],["/tags/代码块/index.html","66019b84261e8e42e2fa9203b3fd4fff"],["/tags/图片/index.html","93bd7a19e0d21740a30e9082294f408d"],["/top/index.html","ad77b2cfa8668d3296c350674b50d891"]];
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
