/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2a7b5ac6c2e645fb48c723d079ee9e79"],["/about/index.html","eba848eb8788181b40ee6e74a44fdbd6"],["/archives/2019/10/index.html","7b77ca0d398938aeb5b2a60c82a87940"],["/archives/2019/11/index.html","1dec329cab12c79930e8c35ae57ac7c1"],["/archives/2019/index.html","6c70b207442d9fcff7505f66bf8dba81"],["/archives/2019/page/2/index.html","ebb15d33e2e6ad3969c75c39401ac37d"],["/archives/index.html","78fcb3b55bf372fccc6757c7b5580c82"],["/archives/page/2/index.html","f80f9323ae2cdfc7374d220db33de389"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","79d450f59a1c2bf77a6fc537ed1b8f54"],["/categories/Hexo/index.html","d6a84406610cca3560cec869a2663abc"],["/categories/Hexo/page/2/index.html","66854860ee8d5893a49e73ee7edb4392"],["/categories/Hexo/点击特效/index.html","ba85cbf8bd3f282278e837cce6dbef18"],["/categories/Hexo/豆瓣/index.html","13abbeba458be7a5934982dfdd8db8bb"],["/categories/Java/Base64/index.html","18f2aa74a191c3851b155ed9e4f832f6"],["/categories/Java/MD5/index.html","daef943f67fcbfe5e0109b8c41028286"],["/categories/Java/index.html","d0ed0d3310a34c8c9cc4e254cec1757a"],["/categories/Valine/index.html","9581dcf339063407c15bb243f97ce314"],["/categories/index.html","7abe46305ce5097383bd9d906e0dd15f"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","58c7073a89b18bb20e37aff630fd82af"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ac6f68951f5c74d0e15f3d818737bf04"],["/games/index.html","e2000080a7b3cd722db00a3b727e8806"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","3455ea11e9eebd96eece637c97fbf908"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","b3e3b19a00f4bed4bbe1c43fb5a9cac1"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","6faba12bad11141a0eabef94f46beff9"],["/js/src/algolia-search.js","f61c7ccc1b0d5988627500c0bcc24fd5"],["/js/src/bootstrap.js","b5ee44fafd5b3d895aabf1e5e7a0c1f7"],["/js/src/bubble.js","7eca4f7186077f74c05f5e8263ac4d6c"],["/js/src/canvas-dance-time.js","1d297753c0a1309169615f6253043df5"],["/js/src/clipboard-use.js","f3899ab0a1fd8b1ec3c53ffa912059f4"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6ba17e8738b3347870cad835c5ec0a16"],["/js/src/exturl.js","2dc57ac8885fe34e3d40c47377eab187"],["/js/src/hook-duoshuo.js","169bc08068da30872c560d73dc862b38"],["/js/src/js.cookie.js","9028f4da22f43684c31bb4c40edfca7a"],["/js/src/linkcard.js","e5f6f78526fdbb37f1e8ba7ff7575235"],["/js/src/motion.js","07dba074d0d42c9f03c1d62eab707982"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","1e7e49c0e7069a62174d29d6c8ff5f8e"],["/js/src/schemes/pisces.js","89964eb00e186d93676e9302317dc256"],["/js/src/scroll-cookie.js","a904b5434048beee68eee4355c81de32"],["/js/src/scrollspy.js","f8c42e1837bb5c52022c6359ebfdc679"],["/js/src/utils.js","098e0338cb6866c1003887e06e34e4da"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","89d00ff5a2f66562658667be704e8fac"],["/lib/Han/dist/han.js","9c1624e65dac8a734de591a24ea48b57"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7b72d511a9bf97c7964bc02bbc1d9762"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a571aaa354816629609ba0268bd6050b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d7aa353318b16a6006bafd6cef82ae06"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d46be689e2d9c153d22be78c3fbdea09"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","14eb57a2392da1ceeee63aa77d372f85"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e24545fadbf6615159da4adcf2caa98a"],["/lib/fancybox/source/jquery.fancybox.css","362e1f52b3321ed8eb4d311334d2a056"],["/lib/fancybox/source/jquery.fancybox.js","86e3d1eba0721fe350c18a55731f2727"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f71aa005be801843622d318173162993"],["/lib/fastclick/lib/fastclick.js","53bac8d60af5d6fc4622a1ea8d36aae9"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","41e8b7125606621f8ec4283446de8be0"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","48cdf2a4a4b845247736cb1b443a8013"],["/lib/jquery_lazyload/README.html","064ce04c3ac0dd8542f23cef4f7c0025"],["/lib/jquery_lazyload/jquery.lazyload.js","5d9380f2bc4c1dadaff6a466b79873f2"],["/lib/jquery_lazyload/jquery.scrollstop.js","afc07ebba4bf709c44562f1b7d406f17"],["/lib/needsharebutton/font-embedded.css","42f5d943ee29983f015f1081299fd145"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","bac921addfd59d313d04ed4a8e1d13f8"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1bbae2fcbdb9d4c18a42d7bcaf43b67c"],["/lib/velocity/velocity.js","11ff5b48f18b867331053390bb4bf8fe"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","8caa87d320917d9fc34eb90fdd8e8c41"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","62b1c1f2e9ebfd82ebb289365d150b9c"],["/links/index.html","47174f752fe873c01275c4b8c0e6511a"],["/live2d-widget/README.html","2a14c2a753ae634d5f9b8956333e9a9c"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","4b6ec3da1fa4da86d5a380da41234b44"],["/live2d-widget/demo/demo1.html","e99deb3765f7012c1ec47e201bcf7e3d"],["/live2d-widget/demo/demo2.html","c4c99c5877d6d52496fb8916839d5381"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","bec460ca86c05dde12c41fa09bf4a581"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","bdf8242e3f8608d2d1e5f95e3e16ce33"],["/page/2/index.html","62494115841298a55a468e78e84aed96"],["/photos/default-skin/default-skin.css","f3e8999a043581fb39cfd76d88f885dc"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","f0b7301a77704951113b5363e5541f1e"],["/photos/ins.css","8542fc5f5071411d7ab6538b1059dccb"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","51d34da305a621acbe17712e6c863385"],["/posts/27514.html","1631ce111dc200fbf4016fef90ee50dd"],["/posts/39d47c89.html","0830230502caef6fa077f01def354b8e"],["/posts/3e5a3bb6.html","49c5c233f232eb41ccbb8d57ee220d3e"],["/posts/495d0b23.html","fbe00ec2a76774f2629bc94590060f05"],["/posts/61913369.html","3fd30546bc8dcc3823b74bfe9d7be284"],["/posts/7fbe9500.html","a202dfae6eb7881953bf0aee4b98cb06"],["/posts/89ea6c8b.html","afeaa185763ec2a21f588317d5b96606"],["/posts/9c9b482b.html","d045fc4c0258fd81fb20b10336a565ae"],["/posts/a7df3b40.html","b55cb72808610f61883684e10f60d210"],["/posts/ab21860c.html","147a414043e61d95b486f0d2d7641926"],["/posts/bf9eba42.html","7aff12c41b518f6f77c4a9bd622b1af7"],["/posts/c1cdcf68.html","93bd258fba43f58dfab6fe908a79d414"],["/posts/c4782247.html","312fea10737cf4868d19735de72a9037"],["/posts/c7631ec1.html","b129389d0bc095f53ca4c565314e3134"],["/posts/d7399e80.html","8625f40deeb0e3cfa542e93629c969ce"],["/posts/dff7e11c.html","ee00dd3f5319ed06d149726550d51685"],["/posts/e1b9c6c5.html","8c81bebe29c59c29d6cbd9699f45ccd1"],["/posts/f68f129b.html","cfa244920c0bd21508dddaf0c72129e7"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a34d2d794926c81476e038e68890d99a"],["/tags/Base64/index.html","1b3a4d8390c52362ca43b754f539cdc5"],["/tags/Coding/index.html","41d8eeec22351e0988c28e974924b5e2"],["/tags/Github/index.html","3784d36521acc1aa2326460821dd5e6f"],["/tags/Gulp/index.html","a182da96845766c914fbcf4901249fd8"],["/tags/Hexo/index.html","74f46aaace49a93f3c669014659a3096"],["/tags/Hexo/page/2/index.html","b889146b97dcdf4b5403d635c56fe3d4"],["/tags/Java/index.html","cedfd59143e7d379e791b34dc6a4179e"],["/tags/MD5/index.html","4920445620ca98b49d8b13a5d0b1a255"],["/tags/Neat/index.html","5dfd26fdc5eef384ab69536499947907"],["/tags/Next/index.html","ec08a443208477c3302477c08ae90b56"],["/tags/Password/index.html","e26f1ad8e08624e01c0d7eaed88b80de"],["/tags/Photos/index.html","64231f53a2a4e9f0d7b04c0a4194ae06"],["/tags/SHA-1/index.html","d59e1fdb4e67b1c7623f107bc1dd30e4"],["/tags/Security/index.html","f2d7988feb5560fa20492b1107355590"],["/tags/TravisCI/index.html","b054096400760d7c218f6fb5949435bc"],["/tags/Valine/index.html","93d35df85d2f7eec412583b8ee9d473c"],["/tags/index.html","4e7abdf34f6e96f9abe1501ac8512b59"],["/tags/lazyload/index.html","960f2f2022c350eace84e5dcac45ff9f"],["/tags/代码块/index.html","3a12e37dbd7156b11b63c9531e67b796"],["/tags/图片/index.html","19f950a81d1d504f7e33027315776162"],["/top/index.html","bc5960318d908b71d766ae049b25e0d7"]];
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
