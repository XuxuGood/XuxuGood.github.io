/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f7e641aaadfb513650c8fc04e98514c7"],["/about/index.html","99b9737e11e492acbecbb30b47e4f99e"],["/archives/2019/10/index.html","ba40b5009c8b426387f4d9049ad363da"],["/archives/2019/11/index.html","d4236b02d675418e76e8e12f88d11cf1"],["/archives/2019/index.html","6b06bc68d0bc80984f334ade406f8851"],["/archives/2019/page/2/index.html","ca5637295074da51d2ff0f903b051ccd"],["/archives/index.html","064bc3e7cd5a608fcd1aa7cfe3d4ddf1"],["/archives/page/2/index.html","dc7924296e51bcc3910b622c98d3c413"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","9d00d2c5d6aec0a60df3328e02699d12"],["/categories/Hexo/index.html","f72abb0ab5f6deed6c2bd4edaf386ede"],["/categories/Hexo/page/2/index.html","24ab97c2057cb1f66265d9b6e4df783c"],["/categories/Hexo/点击特效/index.html","f11e4ad3708327f4158600adad59ac8f"],["/categories/Hexo/豆瓣/index.html","652ef9526ad50ab1d922fa009767f090"],["/categories/Java/Base64/index.html","7cc34e502543d06f5835b81143cdca8a"],["/categories/Java/MD5/index.html","011bd12bd51a0002e18a9b8bed025ab0"],["/categories/Java/index.html","f39f25823388b3d7164362efe39f7244"],["/categories/Valine/index.html","252965a9908dd5823b879158f87eb0e8"],["/categories/index.html","a7093d66346a39b86f82b07ea469f73d"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","a63118a894932d49515bd2a65c0dbfae"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","c692fec3d70d0e5556f7dda519198213"],["/games/index.html","56adda455fdb325e3931a163587c58ff"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","16f61c8c66ea9f4ae34b605cfa2bf30e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","7e7e3b71b159e7aca2b567b9bf2f8c6c"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","f5d56c39de89a3723f2d4b17c8549202"],["/js/src/algolia-search.js","4a42dd2c7888d9804bff2db0a5a8fd95"],["/js/src/bootstrap.js","c676f51ed02157e11de72f824a2b3d67"],["/js/src/bubble.js","15cd5552f532c6a2c3fe4dcc54718940"],["/js/src/canvas-dance-time.js","57e17fb3cd5efb675333b9e51ae1901d"],["/js/src/clipboard-use.js","a1a529d604ed65a1097787aa73df0cec"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","fa3a40674dc4294b81f8996dc7c829e5"],["/js/src/exturl.js","2ff7f10a51db2b58722a2e9d7accdadc"],["/js/src/hook-duoshuo.js","1ea2753cd5eaa8e2e92b9f3b274de064"],["/js/src/js.cookie.js","91a81cfa1957e1fe21ef5b6394fda9ce"],["/js/src/linkcard.js","8f3bd67a68f2bb2b882e4fa59f0c2bdc"],["/js/src/motion.js","d50599278c359418781c5fd655114300"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","e69b2a1de09f72793e085a3583df6d66"],["/js/src/schemes/pisces.js","9de8d447d056fc1461cea52a3d4f0cf6"],["/js/src/scroll-cookie.js","1b6a7b5ae564d53091a078c5fbf603d3"],["/js/src/scrollspy.js","4b65f5ab1b84c9585c03f8bbbc61e99e"],["/js/src/utils.js","9f5a32bb029a0b17624c25157f606bc1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","74b90489c4a8faba8c59f8f2c00a63fc"],["/lib/Han/dist/han.js","df2dbeb548f14fedb1da1d20c896c532"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4ea93f1314e10d4769b408f95c8969f4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","207e851d9aca68c1c80fb340f70e915b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","baa30d6cd55985a07780fa37c8cc39eb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c2fc47413a1f5d1416e739d50fb95a5d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a2b4202da21dc494b1cf68ae16cd19ef"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","09ff818263388e5d9112993a58ab591c"],["/lib/fancybox/source/jquery.fancybox.css","ec943e2a47b85cb99ef333165bb9fd9a"],["/lib/fancybox/source/jquery.fancybox.js","8891ba55361443c8f94f841593e92963"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f6226765c8411760c5d0805071ad62f6"],["/lib/fastclick/lib/fastclick.js","91280e7de5688c94bab28e0a322ba683"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","88d80f2af659dc31dbe353a89fcaaf4b"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b2cd4492275bf5c13815d8d223ca1349"],["/lib/jquery_lazyload/README.html","1a25920540b3ece89a610bdd85b52680"],["/lib/jquery_lazyload/jquery.lazyload.js","69bdebeeb61ce6b8fc01daea24b46810"],["/lib/jquery_lazyload/jquery.scrollstop.js","4b994fc4b6944031f1986f6764d372a1"],["/lib/needsharebutton/font-embedded.css","a03eac2581e71551b49c992b5d92437e"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","a9502a03d872f899414b5c4e2fcbbde7"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d588e5df92803f326a31c31279a27c75"],["/lib/velocity/velocity.js","609cf2ba758f8408d9b9180a784097b6"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","180dae8392dc2a48f97e41ec7c5fa455"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","7c0571d3ce0728f36433ec992852fd1f"],["/links/index.html","497769f832ff4e4ba7c421e66b868ea3"],["/live2d-widget/README.html","28d88426ac3d035df4c9e9d99a48b720"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","f60b84b661eaeb9deda9c1e133c0cad2"],["/live2d-widget/demo/demo1.html","62abf39d5f02c40db4319c9e7f57f08e"],["/live2d-widget/demo/demo2.html","cdc6f173a4d4fa24c26223c1a5968eb0"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","d75f0b1d3f5d54dc1fe1b808e5fc7643"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","ed2c669ba75f2fe51ce1728703e876bc"],["/page/2/index.html","cd48d3eb2a7639317d12c312373e6784"],["/photos/default-skin/default-skin.css","ca2cc54f49e4919fe9541370610d98ab"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","848e440102e22d520f5a9b203d378d89"],["/photos/ins.css","d777c8b00c2dd1875818713aeb594901"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","910f73c2f3c8c81fb488d976200b53d2"],["/posts/27514.html","9a776fe12ae6d78ee0015607851628fa"],["/posts/39d47c89.html","bac2463e7841bca2c5da2c074f05a74f"],["/posts/3e5a3bb6.html","8e0d0ee8ea1abb6ad2bee9a77d6c1455"],["/posts/495d0b23.html","fec38f89883defaeb2794d30f7408743"],["/posts/61913369.html","c56da93fbd41c76c2bc17d91fd2c24dc"],["/posts/7fbe9500.html","95d87587f706e817945890de87793e9f"],["/posts/89ea6c8b.html","13d11cb207a713390fcbc666b4071482"],["/posts/9c9b482b.html","75cf83d7d8392cf9a0a4c7085ba18e61"],["/posts/a7df3b40.html","e67fa364b8baf10a492b4f8fb5554b8c"],["/posts/ab21860c.html","b5bb29fccfad59e2e67042491c2398fb"],["/posts/bf9eba42.html","e8f08531727267f35a876fb7d177a2b5"],["/posts/c1cdcf68.html","723f9674d2cd85216f5781f74b372e2a"],["/posts/c4782247.html","f0219058dd9b528a36f27c1062bcd3cb"],["/posts/c7631ec1.html","bb2922deeebb8ccea077b146d8ba8f01"],["/posts/d7399e80.html","472ddc98bb5b0137f986332473378531"],["/posts/dff7e11c.html","370b38d95b023efeb55896c2e4f8f663"],["/posts/e1b9c6c5.html","3d5e8fba6767c725f9d1bbf6e763a563"],["/posts/f68f129b.html","4eaf4ef48257cc2f3dc2612252302f4e"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","ee0599ddaecd3c6b578933a3c904ab0e"],["/tags/Base64/index.html","bc5741dc9a4e24ceb12b4ce67663f7b6"],["/tags/Coding/index.html","ccca39f7359eb19c27b688be29e6236c"],["/tags/Github/index.html","f8b71faacd30ae50e6e1f2b331741cf3"],["/tags/Gulp/index.html","37c4e29a7ce914fe922efccb1ef11693"],["/tags/Hexo-Neat/index.html","b765aea1e3f7ec45c0fb41cf83ec2fbc"],["/tags/Hexo/index.html","d779837fb1efb11c8c56c49e190b204e"],["/tags/Hexo/page/2/index.html","ae4cacb9274675aa8cb56422e86dd41b"],["/tags/Java/index.html","a0a290402272cf8dd74cdae243f7868f"],["/tags/MD5/index.html","212a3de3e6f737303185f725af36d4d2"],["/tags/Next/index.html","87c923433476b99aa842f4ebbe3a8daf"],["/tags/Password/index.html","2d8f522c4f43c224eb71b1fc160b2355"],["/tags/Photos/index.html","b6f17429dc13e48f220e3c0867944108"],["/tags/SHA-1/index.html","700426c6364abb129e3d2645f642e04f"],["/tags/Security/index.html","3488c1f19c15043fccddbbfc7cb5bef8"],["/tags/TravisCI/index.html","8d016bc98a974c2d5907e70951776491"],["/tags/Valine/index.html","b476565c53eadaedb6aca40c6d236343"],["/tags/index.html","4b98fb4e221104aff41d5742badad94f"],["/tags/lazyload/index.html","a9d675835a5e77666ecd20947082d7c2"],["/tags/代码块/index.html","3b8d2982505eb929ea34b56d02f323e6"],["/tags/图片/index.html","89bc392402bf4acdc9d8146ef5db03e8"],["/top/index.html","01c4b5354c32d004735a740ee996c2e1"]];
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
