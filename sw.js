/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b5ef31d92f7302169c8dfd47188722d0"],["/about/index.html","d4590b24b2b7bc664d928682174e29f9"],["/archives/2019/10/index.html","8b69142f63d8a80204f5b755400865f4"],["/archives/2019/11/index.html","d81188a445654599da0864d0dd56f9b4"],["/archives/2019/11/page/2/index.html","397fdcd23252a42a53dae9d4c103ec0f"],["/archives/2019/index.html","a0a55f99aad6bd645bb8a2a873010d15"],["/archives/2019/page/2/index.html","7960ff9528fd56321b1795ebb4f37c74"],["/archives/index.html","6d07723b8c30e4cdaee1f6662788193c"],["/archives/page/2/index.html","3d418e88c0965760a965011bea5bc8d3"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","08dc9ec9be5358027dc8ea58ca85540d"],["/categories/Hexo/index.html","dcb007af57cb7aedaab6cb98db67ffe6"],["/categories/Hexo/page/2/index.html","7b802e03c3a4f02d14b615165fdb713f"],["/categories/Hexo/点击特效/index.html","9bcaf8ed9bdbcabaa4a8945b28d1a424"],["/categories/Hexo/豆瓣/index.html","1fa8f903ebaef02736de69d32105efe2"],["/categories/Hexo订阅/index.html","e7cd9d684cdfa77c56f51affcc0269e0"],["/categories/Java/Base64/index.html","1c9705d5289f29140f09f864261efccc"],["/categories/Java/MD5/index.html","3b4683134a411414cebc4d3a3c9662a6"],["/categories/Java/index.html","c1adce015409fffd81583b4b8fabc5e0"],["/categories/Valine/index.html","8eabab37683c053a87e9dd7e7a3c06a5"],["/categories/index.html","d1054b14b64127b50a20440390ab34bf"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","fc078e00951e4dace9a5e359ab5d3c58"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","69fc633dd519a528c00b5c1a44d81edf"],["/games/index.html","0a18f660df3ee965600ec7dcbf998fa0"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","b9b4769fb502a6876692ffc334761fc1"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","90bd61bfd6dd3d418377853898b6f35e"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","f460606284ded25940b4f68e40a3d086"],["/js/src/algolia-search.js","a41465cc5b3195fbc4d408c94802c742"],["/js/src/bootstrap.js","5bbd50ab4b9ab04a9fb98992e18141f7"],["/js/src/bubble.js","86d384d7f029c7a7760aee4d817fcffa"],["/js/src/canvas-dance-time.js","54b9ec4cb27e3956a9a1f8eea24a00b3"],["/js/src/clipboard-use.js","ed4649220087ecbe4c94d56b4510a002"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","8de3c1acfc17f84a5245dbb9a89dc5cd"],["/js/src/exturl.js","096aa2cf95996e0340a2530fbb28e66b"],["/js/src/hook-duoshuo.js","563eeca04f1bc224d5378d3851f6a0cc"],["/js/src/js.cookie.js","b51b9d3aba23f259fb9896171b1c12e4"],["/js/src/linkcard.js","cd716c576684bab33508c7803edca6a1"],["/js/src/motion.js","44bb654295b950ab0018fe474837d8e4"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","a0aa4a698ab0273e3099e95574fdad3b"],["/js/src/schemes/pisces.js","ae2f5707a4fc0c1b940304885fef3d47"],["/js/src/scroll-cookie.js","52501de2d638680a25b0faa5d09fe3fb"],["/js/src/scrollspy.js","ba755bea090f5a18ed97d4bfd2121553"],["/js/src/snow.js","8c036c1494f6320f0c8862b35904e742"],["/js/src/utils.js","989e1f2425344636d86feabd9ec6c5bd"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","4f4df8f95f95006b36976c757a7df118"],["/lib/Han/dist/han.js","c6279cc5109f374c7588b7edfc3a8e29"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","93cebfd44d2d87a6989d5020f15b11e4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b594e6e84b29e0962f0e719ad17ad89b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","befc63000057ed335a821a64bd519bec"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","19666bc6f7baf8f1b30ab2200a50386b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2c435e27bed7a485cbd0b44838b9a8ea"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cc48f5ef364d5ef60716420f82180d57"],["/lib/fancybox/source/jquery.fancybox.css","6165b3b601a76d6b94ab2c948f1f0986"],["/lib/fancybox/source/jquery.fancybox.js","187fda7c6031ff3022724e9a1283cbab"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","77ad9807372a1d70f0045b3e8c0d46f6"],["/lib/fastclick/lib/fastclick.js","91cbbc0c4d0bb0afadf4e5b46a12d6b5"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","ec2c64a8d880f8deef24281b0bd388dd"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","70d137f8e402d451327c1fc71a547f4f"],["/lib/jquery_lazyload/README.html","1ed062696532148419de762f1d869e49"],["/lib/jquery_lazyload/jquery.lazyload.js","90164bb88cb229fccf54b053d4bd8ff5"],["/lib/jquery_lazyload/jquery.scrollstop.js","784e0b64a800dcddc493cc7bf616321a"],["/lib/needsharebutton/font-embedded.css","ebce9f9c6377b5fcad801a828a25bc27"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","3a25bd011e6a063fb15135e91b32fa81"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d548c0c26dec44a3ff801841d0752fb7"],["/lib/velocity/velocity.js","7fa0871a37354ca1e7af72c63ddb94e7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","78e85f00c0f415f3cfe36baf016d07b7"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","e1d488d58257b5215eeca3a204cfe078"],["/links/index.html","d96557792ebb21961bb17a7f37a0aba7"],["/live2d-widget/README.html","719a74367f4feeb23ab7552271cce5af"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","a0d0a36cd9cce705e41f43f1aa82425a"],["/live2d-widget/demo/demo1.html","e803fbcc6a44c488a9403b8b669c2d17"],["/live2d-widget/demo/demo2.html","a6ba63b66949a5be18aca6c47a0d338f"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","c7c645a23816f57ae52098391bf40a9a"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","048738d605d1263ee31a61e9f84a37a3"],["/page/2/index.html","e05e95e61a54b5470af987c4069637ef"],["/photos/default-skin/default-skin.css","54cd6ce1473ca25705cd2bc0bf9e01b8"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","8ae737e081505d5be0f138c4c06cf184"],["/photos/ins.css","a225aebb7519ee5bfba859c7cccfe3cb"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","4296c7f4da335d4445b8a45cb2b0ac23"],["/posts/27514.html","85743a7e960f51f2ce63663a28f568e3"],["/posts/39d47c89.html","d2cc504097148c9bb17970a431b82c5b"],["/posts/3e5a3bb6.html","93c13600b02e5c0e2e03b10a045a7e37"],["/posts/495d0b23.html","b5cd2239ad2307f24bc701c3bdb46964"],["/posts/61913369.html","b147700441ebea731d4580c5c308180c"],["/posts/7fbe9500.html","bfd30f9847b9e233b96866eedfe7aa4a"],["/posts/89ea6c8b.html","ee514cab0a1724becd2a7bd4a121f37d"],["/posts/9c9b482b.html","a865da690c8655ced5d7fbcf3c45155a"],["/posts/a7df3b40.html","98c31415367e0162f4fb841c3b1f8222"],["/posts/ab21860c.html","5f3fb2cca911635a4368d7b60a89f0de"],["/posts/bf9eba42.html","12380db8bd49ed434b14580c3f3e9f60"],["/posts/c1cdcf68.html","979882880e761a2bd7f7acc12f96cb70"],["/posts/c4782247.html","476386dbe2967ea35f251bd355fe14bf"],["/posts/c7631ec1.html","705f7da6077bdb9d8d7fc6e4e1539041"],["/posts/d7399e80.html","8253fd2a7b159769879084f456913f95"],["/posts/dd9d9f86.html","2756df1ac8ddc00db07196e79facb397"],["/posts/dff7e11c.html","2fc33e5de57d7f8464120b018b762d9d"],["/posts/e1b9c6c5.html","2bda5c545622e2de0e7f6a331542b813"],["/posts/f68f129b.html","d89295f9689b34cc645b93b0493d9a34"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","bde37fe30527cb1cb9de9b7183e8e11b"],["/tags/Base64/index.html","00878172b65dfc89e5fdd4671e7074dd"],["/tags/Coding/index.html","d96ebe46a629531dddd14e8741fc227b"],["/tags/Github/index.html","59c4bb13760316b707f45c40bc0ed8be"],["/tags/Gulp/index.html","637ea376500869a60ef17be2d85f2e94"],["/tags/Hexo/index.html","f0c1a3a17da85065da6355f5e558ad92"],["/tags/Hexo/page/2/index.html","87ebae0a96eff4eb96edbbfbff378ea8"],["/tags/Java/index.html","a09702f602b14e87ce2e8ec29c662bb7"],["/tags/MD5/index.html","774984c887eb6a5afe7c98ed6c53cec4"],["/tags/Neat/index.html","3ceefb705bdc0c83615c4e145000026c"],["/tags/Next/index.html","e6a6e49c5d5c29d704751e92397a7fd0"],["/tags/Password/index.html","21e0b5d00df8bdae99b7343bfbdae9a7"],["/tags/Photos/index.html","b092102c1e9cd5c097bd20ec55ca50e8"],["/tags/SHA-1/index.html","58d076e431e18af38b53a807f1bd8ec5"],["/tags/Security/index.html","573b55cc112744c6e864d0f2c9cad9d2"],["/tags/TravisCI/index.html","c1491c626ac62c0d222e082e09ad8b49"],["/tags/Valine/index.html","f308babdc5fd5908eea06b568639a22d"],["/tags/index.html","cdbb541716bca7934bb40b77f12c635e"],["/tags/lazyload/index.html","834a6d65e73a1c5219c427c51076a97a"],["/tags/代码块/index.html","1808927de0ce073c44728c83ebb9d720"],["/tags/图片/index.html","e3e2165c16be47a57bced145b9a29617"],["/tags/邮件订阅/index.html","4a34e8dcfe56cb788d3c1da4d0219479"],["/top/index.html","f2daaaf042c89aa3f7c5fc9b19aaf281"]];
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
