/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","04b54d258440cef18bdf0a698d0ea032"],["/about/index.html","7e79178acb345b598f61b7f109a421f4"],["/archives/2019/10/index.html","b1455c67eeb10ce379281049e7e10416"],["/archives/2019/11/index.html","2464509f9f3c27044ee610333cbb80b1"],["/archives/2019/index.html","459c076d46dde8a538dde511655cd6c1"],["/archives/2019/page/2/index.html","4adc83e0c393454aeab211c7b67208a9"],["/archives/index.html","bccec100ab59935bcd776b944791ef8c"],["/archives/page/2/index.html","9681b82e948fec84715dfdd768a1c2fd"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","cf3001a9fb5911db3b0d196181d3d91f"],["/categories/Hexo/index.html","e7d54350a64b4b172e380cba623f759a"],["/categories/Hexo/page/2/index.html","8c70918a299a0921c47a9449e6af360d"],["/categories/Hexo/点击特效/index.html","3c369ff0554a6324f3251fc2a1c5de76"],["/categories/Hexo/豆瓣/index.html","f88f2ff7b7efddc2a3ba9dea9c79198e"],["/categories/Java/Base64/index.html","86c146fbc8d2600a548a5e8ae84ed829"],["/categories/Java/MD5/index.html","e9f6bc2987567d29c312f6e43b1b5c25"],["/categories/Java/index.html","481d0f12158918ae4c28c87e5c3f7ebc"],["/categories/Valine/index.html","3ad1c48f18e2caa8a7458b12698481b4"],["/categories/index.html","ed764ddef21413d37738afdb24de8c7b"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","03ff3f2d02d68488f8b5702262645c18"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","fd5f44701284e033db861f1f5ef6e051"],["/games/index.html","e1902760c0e102f98956ef7ba4d1c285"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","6ce0d2067050b15b4ad454f6e84c1c7f"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","0001e4259d6c9b3ec56831d2b8242f78"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","ce147cc11eaebd65b338a558b0568b39"],["/js/src/algolia-search.js","69ecbb8ebad4d48abb5242eb234ae736"],["/js/src/bootstrap.js","3f21cb4cbd1a060ba64860dd985b1233"],["/js/src/bubble.js","0d0d980f77f3622d970bc52c51ebbb48"],["/js/src/canvas-dance-time.js","54a5e05c14b2adc101b0793ee386b44f"],["/js/src/clipboard-use.js","164801d0c6cb791bbdeffbae058d7337"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","aea5577afd7d17038d7eab4cd593d1ce"],["/js/src/exturl.js","cdc933031b2e40217d33cff7c23875e4"],["/js/src/hook-duoshuo.js","013a3be512fb10e7516b3b661c3d8f51"],["/js/src/js.cookie.js","500ff3d0186db639383540a61a1aafb2"],["/js/src/linkcard.js","a03c43131639602e6a70e497efe2d103"],["/js/src/motion.js","c8b54bd46ee4bd8f7304c0bb67769e23"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","1b3c6037f09510a75df7580757186e1d"],["/js/src/schemes/pisces.js","7bc5fea80f0c25ab9c9ebaa578daaa1d"],["/js/src/scroll-cookie.js","957ade75702c32298056dfb8985dfca0"],["/js/src/scrollspy.js","f8a1a8d513e4206afc224b3d4cff3fbe"],["/js/src/utils.js","ca6083bbdc5743f203750966de2e9735"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3e9fd0eeb261fc191b95f9375fd9adfd"],["/lib/Han/dist/han.js","792ef4526b3e2bf626e06420b32f5a68"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","f837e0779b03e0a190f7fa82cc8cf508"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","41ff160e753096665a992741391af45a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","62eb85f444459f9426d729d916c564a2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5e92a119dcc6b7a15a321299208bf186"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b1f4d80be2a83764cee973841c52db26"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","644499ac26c2740fc7b86b25da2a2c90"],["/lib/fancybox/source/jquery.fancybox.css","b6e893ee2c00c370ac47d98e005badef"],["/lib/fancybox/source/jquery.fancybox.js","8d32a603f9818aa730edc45d9857e5db"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","4ca678d503c0088fe6d1056599a13b41"],["/lib/fastclick/lib/fastclick.js","5fc5c67cf372f58984ff9b0a06ceb407"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f5d896d91747f00cecf935167f5ec1c0"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","10a38274ab0aee768d4c59dc17e07517"],["/lib/jquery_lazyload/README.html","b5c013a89789828e97fad7efaa978e17"],["/lib/jquery_lazyload/jquery.lazyload.js","f5eff6d4f66f0ce7b8a6ac1fd770b502"],["/lib/jquery_lazyload/jquery.scrollstop.js","6611d298e2256a450d950a7127d3c6fe"],["/lib/needsharebutton/font-embedded.css","fba8fb501b8d4d6b68a45203d842139a"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","672188fbae607b179d0b07665d36b54d"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a86e73f09dded85b17bb307ed799417f"],["/lib/velocity/velocity.js","781a3f2bade722ecdc79cd8211bbc43d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","da1509497070d8c1bc10ab57b3354e8c"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","55704a6a3a88e0b6134e6c7a6248474e"],["/links/index.html","dfffa58d65a2ee499268ae9f19a8f964"],["/live2d-widget/README.html","e767ee90dc598a69d0325b9bc89a923e"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","e1e97b799137ff1f3c3a720ff814b9e9"],["/live2d-widget/demo/demo1.html","94e08befdc23123218f01145964cc746"],["/live2d-widget/demo/demo2.html","1f58b6d12d155ea4853e95edbb3bed9b"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","cd5996884add10b0a72e8166333e26f5"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","2e6f88a42783ff9a6af9bc391f1e2659"],["/page/2/index.html","82406aa072026c41d271233b0a5cb80f"],["/photos/default-skin/default-skin.css","0f64e36a6fae03c339f3aed34247f4ea"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","1238b9c3b176028564f021a14c582c41"],["/photos/ins.css","a09e2c6f2da34f773feefba93abb2396"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","48aea2466e1be92b49a04c17983601af"],["/posts/27514.html","6ce9279416888eeb517331fc0c63cb55"],["/posts/39d47c89.html","d0aa14d1187919e7b6687a3de9bf2fb5"],["/posts/3e5a3bb6.html","5cd208f50245edaf2525382813a32cee"],["/posts/495d0b23.html","d189de4fecf50d40f221e9dc307e8262"],["/posts/61913369.html","9448d941819e2ca6496ce7363369bb87"],["/posts/7fbe9500.html","18d4c841cb537b47ba3df55c907d93bd"],["/posts/89ea6c8b.html","cd79ac8a48576ce3ebb097e4bfb68b83"],["/posts/9c9b482b.html","1d3fbc6e3bdf6d014d76dd49108d9f6c"],["/posts/a7df3b40.html","8806047fa0effb38f83b7588f4fc0732"],["/posts/ab21860c.html","a48830ecde2eca961a330d45de253a48"],["/posts/bf9eba42.html","3704176a72a09f7247446208e49b74b3"],["/posts/c1cdcf68.html","0d67c3dae6f966602b4b9dbbfe5a1b1a"],["/posts/c4782247.html","049563d5a28a7de06f044c6bdb67046c"],["/posts/c7631ec1.html","59a3ccb9e711aecd623852480a349b5b"],["/posts/d7399e80.html","b194f3008720b6a75c682dfccc0fca54"],["/posts/dff7e11c.html","9e041dbd57c3ecd9d037a9a5ababaf0f"],["/posts/e1b9c6c5.html","7a03031fd02db698d2ad52301b9c672d"],["/posts/f68f129b.html","9329faf8692b4bd07bf8baf2ee87687b"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6b36d96b3e51d639312ab1097d057313"],["/tags/Base64/index.html","0ef56f223f0f3f3aa53c16f4bcd51562"],["/tags/Coding/index.html","121f394d92477f8ecd60d257ddd4b19b"],["/tags/Github/index.html","3ac1cfa09c7e594ad34beacfb3d4c49d"],["/tags/Gulp/index.html","abe8a55891a0ec072d40b43e6dd3b51f"],["/tags/Hexo/index.html","8c62f7e8e3ba1b2991975c007d8a15a9"],["/tags/Hexo/page/2/index.html","a8e780bbe03a97597ea77e5484866334"],["/tags/Java/index.html","9e60dd2532ba52ef9b372d81752f5a3e"],["/tags/MD5/index.html","72972f2f64a0ee3102d79ef7e6674330"],["/tags/Neat/index.html","671e143d44d1d8e799d4e2c25eec4277"],["/tags/Next/index.html","407db20c9da3a7b7fc01f4b9fa9043d6"],["/tags/Password/index.html","e5980b3bd31331192ac6409383b8dc8c"],["/tags/Photos/index.html","955497b4a27014bc05d638b8308903e1"],["/tags/SHA-1/index.html","762509b132f09b064e20f507468a393f"],["/tags/Security/index.html","31a316d9cb55e67f456bd059f157345e"],["/tags/TravisCI/index.html","a5ac132d7b9699c5ce500d87a7ea0dc4"],["/tags/Valine/index.html","ecf4331fcf988bb22f1ae44dd5bf3855"],["/tags/index.html","8b842923dc038f88f32733771619646e"],["/tags/lazyload/index.html","37da2349923bb20165c8297976fc95fd"],["/tags/代码块/index.html","e6ceb0b64cf9bcaa3536cb54660179d8"],["/tags/图片/index.html","65323c8fe5a02922e176e6fb3a759625"],["/top/index.html","e73f07583d11a7c6ed85adcea1e5a72c"]];
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
