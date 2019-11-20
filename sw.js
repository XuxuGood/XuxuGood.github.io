/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","785098c54a945054ce12629de019f245"],["/about/index.html","59229d3f2e9b3be3f8a8afcc803e8dcd"],["/archives/2019/10/index.html","4ff4c950bc4310f6f801c74900bcde86"],["/archives/2019/11/index.html","2bf6d41feea71f9e055d0c3983657253"],["/archives/2019/index.html","8929151b1dd4d889699e3145adbcc669"],["/archives/2019/page/2/index.html","1d9ee08f9b864d8173b3885d25c0eaf7"],["/archives/index.html","d5ad59936f2530fc894c7b0e236bffa7"],["/archives/page/2/index.html","ded5a33af50b5b0d5ed17855d97f8a6f"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","1fdffb679db671207ac15d523e6965bf"],["/categories/Hexo/index.html","2994ea2251b63af90406d8f6b47f3704"],["/categories/Hexo/page/2/index.html","84e056bd576a337419299f79279048e9"],["/categories/Hexo/点击特效/index.html","8e7e92330d3863af17579c1f389a1d7e"],["/categories/Hexo/豆瓣/index.html","7b03acb2b4d097a294dda3a1b56f5ab9"],["/categories/Java/Base64/index.html","46b6475048e85925685c91a9dcc864cc"],["/categories/Java/MD5/index.html","a10a895163eaca6dc32107cfe81ccc26"],["/categories/Java/index.html","0ceaaf015fd30420a0d0dcf8d9d1c2fe"],["/categories/Valine/index.html","383fd1a54a12c58e0dd5e14685037c48"],["/categories/index.html","06ea0d5795bca43717d0cbdb4ade805c"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","2363ff8d5c837f41edbb6b6ea8cbc405"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f5af21c24b9642032c37daf1456ae6b5"],["/games/index.html","c119e7a69ca9c8ff89855f637bb1cad4"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","121d70c7f1ac363ee8fcdad9541e23ba"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","e1695361472aa357e285cf00d9d8ead3"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","eead5f78279a588c306fe10dbba0f365"],["/js/src/algolia-search.js","a7035403585ef34b1090e0574baa46f0"],["/js/src/bootstrap.js","cc5687b621685d361559861254062b5f"],["/js/src/bubble.js","2e6d99805cd695cfff31dfe93637c937"],["/js/src/canvas-dance-time.js","91d4984b5b6bb7f28faa6a440442f2b3"],["/js/src/clipboard-use.js","b7117a18802ea5cc43fed1f8f6c33475"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","abad6b4110536eb7e6733293f90c40c8"],["/js/src/exturl.js","06038fd65619c449d44b612dae008ef3"],["/js/src/hook-duoshuo.js","8c863c6d57b424d8b592e2d6f46037b0"],["/js/src/js.cookie.js","cc78f828d4302c4ce2e9de22953cc341"],["/js/src/linkcard.js","6270650a53a6e8607db3f81950e77e75"],["/js/src/motion.js","91fa60ec16af1baae6c672ddbcc5c43f"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ed638cbaa288ccda3ee3360c78f65155"],["/js/src/schemes/pisces.js","b61cf0194d8618c89278c67dcfa6812c"],["/js/src/scroll-cookie.js","73cd6e1542c954d30ac6e389a5acba62"],["/js/src/scrollspy.js","f6c2ae1e5de5a2e60dfd58d67ec5c321"],["/js/src/utils.js","1dcecddb51743a6b042acb788ebb1ba9"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","662394088573da3fb7f819be678168e9"],["/lib/Han/dist/han.js","f83e2c330454fa4d316e79743a1fdc11"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","6eb3d7624d07b0fd0f0c18cc939cf8a2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","60ad7dd15f4bfd1497c12da9ebe0b78e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3637f18b148f51e7aed93a4a761bd1a5"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","68f29fc67cb30af5072608787f35c8b4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4590f59b40da016de910af67a05db300"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9403893eb8276018597152e66a3d9e8e"],["/lib/fancybox/source/jquery.fancybox.css","b1c891c8e626c492b5fbfdc06be48b9c"],["/lib/fancybox/source/jquery.fancybox.js","55a8f6cc00a60930292eca6928b667bc"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","692c7c00d6539866b2572b7ea5032be4"],["/lib/fastclick/lib/fastclick.js","368a4a18c9db5a4e504246a9a83cb386"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5962bd7c8d58d62a94f689ee20964795"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","011f06fb9ea52f95645586f2eba892db"],["/lib/jquery_lazyload/README.html","45627be0540cfcf0a5c354428e61c9fd"],["/lib/jquery_lazyload/jquery.lazyload.js","27b72503e4405cec2d6a8e84df4e8831"],["/lib/jquery_lazyload/jquery.scrollstop.js","47f887fab3b8002069d171eda35a0f68"],["/lib/needsharebutton/font-embedded.css","842820ed2a0056df171e81f4e79cf733"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","c1d88c09809f0429bf751bfc67e7d6e5"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","646773353ad7b75d5509eee2f36a29fd"],["/lib/velocity/velocity.js","4024b97fbbe53d3096de3d5e96b78c98"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","c4dcecd0172661b67f94af11a357b453"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","4346cf212c6171449cd1921566419829"],["/links/index.html","1f522a211f3b505c2f49eab09724ec6e"],["/live2d-widget/README.html","ce58f2d7801fa6968300311fe83e19e6"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","ecbd26e566be60b82571b3c450cc558b"],["/live2d-widget/demo/demo1.html","61238218b7cdf102b941cfca8cbf4661"],["/live2d-widget/demo/demo2.html","6c3612ed27e9e6a896ea08bccf530d8e"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","a6d54fba8d00fc64e733b4a24c9db52a"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","77d36f7e30462aeaf0295061ee884360"],["/page/2/index.html","5673064629d1cb1311b6d2ae7b16eadf"],["/photos/default-skin/default-skin.css","a21e6a732339f144da7a66d05438e08a"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","8997302e002589a39c461b5f985fc178"],["/photos/ins.css","299605be08eb164ed0c4ef02fe9af3ba"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","4451a91316634bad1fcc28a56cd9814f"],["/posts/27514.html","5ec8c81397f6fa05da4445fd313cb061"],["/posts/39d47c89.html","d2f2df0f6d5c93059b52a3493b78b147"],["/posts/3e5a3bb6.html","19357df715bc08db461cfccdbabee906"],["/posts/495d0b23.html","9b24577ace37d322f0a9595f8fa138df"],["/posts/61913369.html","69f33afbd191f057d2cc7e33f74b99e5"],["/posts/7fbe9500.html","0cb3635c14ae7687587b8a0cb3429fcd"],["/posts/89ea6c8b.html","f9450aa5a45db12755f252d3320aee79"],["/posts/9c9b482b.html","a30d7168b26580da49e554d01abf2630"],["/posts/a7df3b40.html","f7a5f3ea480de6f8cf6ca47f0ce84d10"],["/posts/ab21860c.html","64105606384efce09fe7b257ed0b48cc"],["/posts/bf9eba42.html","845ebc0a2b0c9972fdd3e4ea3a73cc43"],["/posts/c1cdcf68.html","28dba6e0bd3536b7ade57969e426bcfc"],["/posts/c4782247.html","a3557937fa92b5ee5c69beddbccde65f"],["/posts/c7631ec1.html","efac8c2608cf43a9212715e65b8a886b"],["/posts/d7399e80.html","3db1dab7f3bae513693db5539e6bb0a8"],["/posts/dff7e11c.html","bc69b2c0bb22d3836e98f06849320fcf"],["/posts/e1b9c6c5.html","304d04ad34276c750d66caac186aa644"],["/posts/f68f129b.html","166c62b460c85c44c0a1d5becc80d1c7"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","833737d117074a6fc91b9fab89e0c3ea"],["/tags/Base64/index.html","7dcd54d8b0843cb78ac6284a4f99334e"],["/tags/Coding/index.html","0f53adc1112e5c5061d16464fa9cad73"],["/tags/Github/index.html","1257952b17e74aff7e14a2c1e2088a9b"],["/tags/Gulp/index.html","eec36c6cefb279b8b0c6a7ba111ba4ef"],["/tags/Hexo-Neat/index.html","6b7c521962c8b6a9467e1e2b073564c4"],["/tags/Hexo/index.html","d786c8d95127a1216e07b2b53c7e6507"],["/tags/Hexo/page/2/index.html","5bad9ebaa2ee3db46ee14f9d997ea6e4"],["/tags/Java/index.html","b24992b29078005156a57edc60d78e0e"],["/tags/MD5/index.html","6ab8701650b64b613092ef4cb02fc9e1"],["/tags/Next/index.html","dd166b9de9fa685bee9696a905c24fd9"],["/tags/Password/index.html","c0b863f7f0446866216b0a8b97b01759"],["/tags/Photos/index.html","5d3438f1cc86e00f8b573601e830f649"],["/tags/SHA-1/index.html","8c6b9b156eafa416409c2446610187c2"],["/tags/Security/index.html","b3eb241c8aa428ba557b15d65ec510be"],["/tags/TravisCI/index.html","cdb165026226703a8085dd960100eb37"],["/tags/Valine/index.html","5a63722b4a8463e07d1a10ae79e60b62"],["/tags/index.html","70a95ce46277589605f4c332935ba849"],["/tags/lazyload/index.html","86fb987fd5a48ec87ddadff8b05581b6"],["/tags/代码块/index.html","b6d6f1852e964d56edc463954ea39d93"],["/tags/图片/index.html","d1eb06341fa44208e21d9c95b8878e79"],["/top/index.html","b2c22b117fb32a7337a788ad60740d85"]];
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
