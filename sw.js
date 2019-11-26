/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c6437bcebebc9564fcb8049ac15c0c55"],["/about/index.html","194fbd43bf662279cef04c72647cc1a0"],["/archives/2019/10/index.html","6d830faf62f221606a8484d7f3babc8d"],["/archives/2019/11/index.html","0ee82b86d3c62575a3919d26f2f3675f"],["/archives/2019/11/page/2/index.html","1c524c9a6c4af4fd4dbf110eb817c78d"],["/archives/2019/index.html","fc157c5f7c7f75581c781508b47c43f6"],["/archives/2019/page/2/index.html","fb57c7b4ab60e057e8defdd223e61e44"],["/archives/index.html","c5e8e3f311bbcd4a9fe8dfe45caaafef"],["/archives/page/2/index.html","d122c075237b2d3b41af10d104f5a4ac"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","688406a1cd09f5b0292dc37157dff1a8"],["/categories/Hexo/index.html","51828145e2fc5e2c3b325d5511fa7e5e"],["/categories/Hexo/page/2/index.html","497e7aa026495ae14e435cbbc094f19a"],["/categories/Hexo/点击特效/index.html","d623caf4f979e71535d7096855c8055c"],["/categories/Hexo/豆瓣/index.html","68911eed9f94e17f7afb7895d6c1cf06"],["/categories/Hexo订阅/index.html","4ce0b0567aeac79660546d95e7716d9d"],["/categories/Java/Base64/index.html","3ceb125b2f02cc979b27f9af1920bd85"],["/categories/Java/MD5/index.html","351ded895e7639cf12de6da19c180ff9"],["/categories/Java/index.html","479dad1b943310cf98b8f5d2bc52a33d"],["/categories/Valine/index.html","12f0339523708a9e946ec69f21774043"],["/categories/index.html","58f11feb2dbeb876aae03bf123257279"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","a006ef38471af52fef3247cbe7c58246"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7c7f3e85757e0fc539cd192427ecf951"],["/games/index.html","4acf9983e9cdfd8821ae08dfec32cd56"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","08eda99050b29c26eeb27d9099511e95"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","bc1624d7b7fd4b78b8773db6e0718582"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b006343a56953b414c2a57fbc0835498"],["/js/src/algolia-search.js","4e9d506158f82e11ead59d73c94a6f8c"],["/js/src/bootstrap.js","a6d4e99de9236b1435330a53d2a907e5"],["/js/src/bubble.js","3702312c032db3480f18a80313de8b43"],["/js/src/canvas-dance-time.js","bcf659550ea3eab63457bcb1b3d69f78"],["/js/src/clipboard-use.js","7ad32906e296a673dda94b76339189e2"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","eb3806beb421b5803af7043d0cabff94"],["/js/src/exturl.js","c4c5562315ebc0edd542a26129fb4ae8"],["/js/src/hook-duoshuo.js","bbf814f55153d8276c50f286705228cc"],["/js/src/js.cookie.js","cc70cf397c183e2b721c08d04bf1c603"],["/js/src/linkcard.js","39a667b037491ccd91f32800a847403a"],["/js/src/motion.js","4baa0bc3e49a0f738eec6f824958942e"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","739e3edcfefe2c2d0d433be147b37f46"],["/js/src/schemes/pisces.js","3b50880064051df6da81d9409c2cac21"],["/js/src/scroll-cookie.js","ab4451f5140f85579dc4a3e1e191b1da"],["/js/src/scrollspy.js","75e28bc2443c2598ff09f744744afde2"],["/js/src/snow.js","83109402fe91fa7fb8bcaaf01bce577f"],["/js/src/utils.js","cb277eae141af91446cf37e04d4ceda6"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","8fa59487a6a36c2d3241cec74caf7a3a"],["/lib/Han/dist/han.js","174e1dbae27d60251fc79e2a5b4b836e"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","963473fa353233f3813e860804736753"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cbb43179cb34182edf336d7c16f0fce9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3be7236a0c0799a92a3e0ef0f98642b0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7fcf7d5b1ba53ef38864b1d94c13244c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1053966dc6761dbd4e8e055a13b69849"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","76fbbcd49bb607b4971dcf094ff18933"],["/lib/fancybox/source/jquery.fancybox.css","88547747ef1fe9314192779a11906276"],["/lib/fancybox/source/jquery.fancybox.js","8c02ed36a0604a4fea381fb421e3ec44"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","992e4b76649e4b9d826519d77500ed0b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","22fd361ea45e681bf44e32470358cf3a"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","332fb2c14d4a8b696b46dc9d84aa7d7f"],["/lib/jquery_lazyload/jquery.scrollstop.js","5512848a277c66b7b457e618d6b0eb4d"],["/lib/needsharebutton/font-embedded.css","6c675cbd0375cf51a793b8fe21265188"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","4a800d616c0fcf2fc9c705ba23cbeae9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","58fbf0024e9555d94502c3566f6d687c"],["/lib/velocity/velocity.js","0c9f941d53f55fb1769080f888fcee44"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","587a6febd79366675c1f7ad00c2c73bc"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","188d92eed5ecd32238f376f8d6fc3e75"],["/links/index.html","16edc1fbe36d490814344a68debf0985"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","8c3f9eaba909d7b65e447142bb5c54c2"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","b84ae5ed0eeade38b36fc184c1291bcd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","a3fcb7345a3f40a3efbf29029dee8122"],["/page/2/index.html","ebe52da4e5c619a1c41e1e61c3968893"],["/photos/default-skin/default-skin.css","ee104865b388b43fac648768ab4dd3f5"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","049e6a3ea904bda109bcc60fe65a5311"],["/photos/ins.css","f99163005d08c390d9661690472607e7"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","5d565371588546f7d154ec126c09d3c6"],["/posts/27514.html","ed8070c0b3f50b02bd7cd274d690b9fe"],["/posts/39d47c89.html","6e93c77e1020b268bfbbdab99d89bbf8"],["/posts/3e5a3bb6.html","3b042a023d6d91e2d5976815c196ffd1"],["/posts/495d0b23.html","d490fb78c55154ae085b7642145f76e7"],["/posts/61913369.html","47775213e81d88eb138df1f2ea2f54e7"],["/posts/7fbe9500.html","11e8880a37b3e566e230161106b114b7"],["/posts/89ea6c8b.html","e0464b59f5b5ef348e8c628e6a64ee38"],["/posts/9c9b482b.html","ddb605f727ae81162730f79bdf0d02a1"],["/posts/a7df3b40.html","0b132237da5e5eb59b4214aeebe926da"],["/posts/ab21860c.html","0e98fab14b93e5ded1c272eab112474f"],["/posts/bf9eba42.html","08dcd2e333fda54598f111efedd7be43"],["/posts/c1cdcf68.html","228d24f90f8e69ad9c7d046bf41faee7"],["/posts/c4782247.html","15d13e08a387ad4e5f2573f324d2117d"],["/posts/c7631ec1.html","f7fd85290d2ff0469a1b9183681c0afc"],["/posts/d7399e80.html","4f0a36808041040f2de6db8084d6be25"],["/posts/dd9d9f86.html","c7a2ee89033db5007d3f05f12c1cb3e1"],["/posts/dff7e11c.html","81d950eb7f6ea27949b56689ac3b9519"],["/posts/e1b9c6c5.html","3d622034744527f3bc9f8a91cb0b5f59"],["/posts/f68f129b.html","3ba9ce434a78a5d15bad6b2f76f23448"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","998cf16f49324b800591f1c1681a45f4"],["/tags/Base64/index.html","f3ce7f292b2b78d4d20c27f117ab70c3"],["/tags/Coding/index.html","d30aaf014f1f955713b7cd1d7c53ec94"],["/tags/Github/index.html","724a382868eb13fa068eb722c5705a81"],["/tags/Gulp/index.html","f9916dc270aca55c2ce8d22cd2a5b334"],["/tags/Hexo/index.html","0ab002835d9f387fde580f6322b5c228"],["/tags/Hexo/page/2/index.html","ae8e95f7a353e6f1134a408d28cf6910"],["/tags/Java/index.html","1721d2c0ead3a887c23f259955ca1924"],["/tags/MD5/index.html","7eb2708cfc2d1406b95668c52e5badd8"],["/tags/Neat/index.html","eaedc570a4af177c419241bc8c605d40"],["/tags/Next/index.html","cfdb8edc88aefa3f60679ef95beb8e27"],["/tags/Password/index.html","8489d195289786a8aadcb72507e19463"],["/tags/Photos/index.html","11e9afdd353209c1d9a394035ffee91b"],["/tags/SHA-1/index.html","d7f164bc1f8f61a4ac0629eb868c09bb"],["/tags/Security/index.html","102ecf368117f4646107ce38b2f0ebe7"],["/tags/TravisCI/index.html","e0fac564197493d0ea033cf9e8803465"],["/tags/Valine/index.html","851bd304f304416d69d81b01c5d37dec"],["/tags/index.html","50ada8fcc0a151e2c0acd6001292ad03"],["/tags/lazyload/index.html","bf7d55cdf614fc8cf4ce5e3359732beb"],["/tags/代码块/index.html","199083e0743e4c9d6da70123f04ea02d"],["/tags/图片/index.html","d500a8dc02d2f9b994c5917f27225e69"],["/tags/邮件订阅/index.html","be7d914ef86a60ac7e6fe7dc513ae8dd"],["/top/index.html","eac4e9903fe2fa2eaec668743edda8a4"]];
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
