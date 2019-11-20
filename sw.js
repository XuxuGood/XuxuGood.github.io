/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","58b39f7104130054a3a36068c69934e5"],["/about/index.html","2c04e38e3588259e41d0902dff1bd149"],["/archives/2019/10/index.html","cb99508193e7750008f3ae2913f12ddc"],["/archives/2019/11/index.html","9e4285183cb52b0396157574340a613d"],["/archives/2019/index.html","3cffbebd4149b97c23af41e6eafe0e88"],["/archives/2019/page/2/index.html","8104d2c635f9af93e7184f25e8a91453"],["/archives/index.html","ddcc68b08e26ff423a70e8291ed4b567"],["/archives/page/2/index.html","1ffaab9c3ca3ac1458534a578fad3fbc"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","3fd8f9186d6be2432d328f72e9ed81ad"],["/categories/Hexo/index.html","f857beba113fe04407adb37f4624c454"],["/categories/Hexo/page/2/index.html","fe35dfe2a34c34ca6a28a01a1f4cdaa6"],["/categories/Hexo/点击特效/index.html","aaea18943a819327dd48b69e968182e9"],["/categories/Hexo/豆瓣/index.html","15a1b6e39d697aca0dc955d3cda35948"],["/categories/Java/Base64/index.html","c55dc0f8a302d81c7d8169146ac405ca"],["/categories/Java/MD5/index.html","447e04d03898e7fa72f6fb9ed6c8d839"],["/categories/Java/index.html","f22c41ace81ef9ddadb12c6e298dd5ed"],["/categories/Valine/index.html","136177f41ea2b59f5c36f5b02cd89022"],["/categories/index.html","14a06ed1b4cd926b44e63305e9ca3f1a"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","5f637ce4e606152bdb64720b568b2d1a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0671ae291a07d3d4c451106b454261a7"],["/games/index.html","72ad94036cdf0705d37efb91220cac5d"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","18b39759a984f801bd5d7e61ba547750"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","80d77c78877c076623ed0a10fe0c5b22"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","7a6f379f1f73ec86d2d697780cbad3a1"],["/js/src/algolia-search.js","2f48deec78bf88d73fa09a247f67e567"],["/js/src/bootstrap.js","ac03d448f78e2b38deba058c6580d4f1"],["/js/src/bubble.js","039cc8617720ca2b29eae9f852e2e848"],["/js/src/canvas-dance-time.js","044c5807f69ee3ea5af5eadb7ac039a0"],["/js/src/clipboard-use.js","4e646e40201ee9acb321b82311b1349b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","cc65a2a7287ee54bf1ee997053e9d393"],["/js/src/exturl.js","6070a4244d3c3073750dc88648b59692"],["/js/src/hook-duoshuo.js","367132852b1c14be00590940a8554502"],["/js/src/js.cookie.js","79be488b85b48c20a076c0d32b35355c"],["/js/src/linkcard.js","ff53bb0ed5b9e67b0ba6f52619c3e82a"],["/js/src/motion.js","c954376f135f8c3dd010cc0d6fcb1c0f"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","daf33b82773fb2a0149fd23c031faa78"],["/js/src/schemes/pisces.js","652de6a2053aaed08109bf1f913253b9"],["/js/src/scroll-cookie.js","c07b7c1d23470e14413b97696cc7a388"],["/js/src/scrollspy.js","ac195f4cf5fd7b4b5689cdc70fa7cb53"],["/js/src/utils.js","fdfc6861d6a0eab67aea4e49de36ac0f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","60c5bc211d1677f6ca1d5c4129a706ca"],["/lib/Han/dist/han.js","0c96091d98a5db2e0f12ed24c12791ec"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2e72b8d3edf18018eadd8819c2067932"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2eefe8c724265913d626db50c97c3c01"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a2138d43b5225e439fac682f311c7233"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","232d4e76fb617fe6698056eab316b146"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","edd80a35e2c82bbfd07fb6ff67c8e0a6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","be08561ba47db943f05602d3855e2a87"],["/lib/fancybox/source/jquery.fancybox.css","45fcefcb20d8e9de9d5df77687bbfabd"],["/lib/fancybox/source/jquery.fancybox.js","79dfdc73fddde297f3ad9d9a0aaa10f3"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ee0d05dad4e13146b10b0026102b38a9"],["/lib/fastclick/lib/fastclick.js","7abe5d692f670172a03144438b706423"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a7cc622494ebc865099c9741554ce0f3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","ddc23f0f5f698f756d64d5547f107863"],["/lib/jquery_lazyload/README.html","e164a8437de58c0a1b43ab77fea73cc0"],["/lib/jquery_lazyload/jquery.lazyload.js","0813a7f0dc6e9b164fbaa1cfd5eb0f42"],["/lib/jquery_lazyload/jquery.scrollstop.js","ba932dc1ce07d5581960de966b0df84a"],["/lib/needsharebutton/font-embedded.css","50f1e1113dae8f483beccbb1e0d7cb28"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","b08915940ed1568548baa3479422ff7f"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","da1c03616a7dcfac41f062729f9ddab5"],["/lib/velocity/velocity.js","999f735fe25d53eed730a9ac5bb981ea"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","641e5cde34a99dc664186288164eaddb"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","9b766d3b5ac8119fe33e5315bc7fa0ed"],["/links/index.html","3747188291ca01d9966a2409925fd37f"],["/live2d-widget/README.html","721adfc409311d58b88443a1f8557192"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","169499bc01a5c3b52aee89359871fe05"],["/live2d-widget/demo/demo1.html","d7dd0ab3efe187ebc9b0f7110be2a198"],["/live2d-widget/demo/demo2.html","07f5b7b6ce1f5df7e4b8085d8884d4de"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","ca83f7e584c36881db16cee4792973b1"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","2322ec7d505c9ad3b8d002e71c276c55"],["/page/2/index.html","c8bfa6fc352b5cf7c319d6804361d6d2"],["/photos/default-skin/default-skin.css","e3f8ec6cc9427e1775f217ffba1cd9ed"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","490bfd38f56ac9fef6911a9a57a7ab2f"],["/photos/ins.css","873b4521b68a3c634c4413bc73c1ce49"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","1d02cb171049c55a96851f0a5d36b7a3"],["/posts/27514.html","19daaebefaf37b90c45dab8a78e50fed"],["/posts/39d47c89.html","ec790457237aaabb46717f17377ec052"],["/posts/3e5a3bb6.html","30d7137d49b1e21422bb205843fa29ff"],["/posts/495d0b23.html","56dbaa5e11b2293bbce65c5e698ae636"],["/posts/61913369.html","68bf13ddde300f1b217d1936139c3dab"],["/posts/7fbe9500.html","66a1d3fc2b9c1fd2a74561c736e29d8b"],["/posts/89ea6c8b.html","408b5843a15f4b4aa50221cc8c154993"],["/posts/9c9b482b.html","702666b720ea3cd66951c3ba787c06a2"],["/posts/a7df3b40.html","464033f39549693a2e5eaa99fda94041"],["/posts/ab21860c.html","fcb91fb4a6ba4a04be3fc3350d19c681"],["/posts/bf9eba42.html","cb563c43e3b29c9e4e2b7ccaf78fcb1f"],["/posts/c1cdcf68.html","64688e72bc2b0d033a219319b4882ae6"],["/posts/c4782247.html","3a63a85271573f559e9bdd4c57f91dca"],["/posts/c7631ec1.html","73cf1fc3a6c5822c6e65bce530065912"],["/posts/d7399e80.html","be7d710a052481014e8263f277b2b24a"],["/posts/dff7e11c.html","83c69aaa03252a4fd6c54a68eecd2bf7"],["/posts/e1b9c6c5.html","edc780cb0027fe5390cf6f25b945aad8"],["/posts/f68f129b.html","32f2c6b5d7b0f72d35283524050200e4"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","e3318cbffd9121cc69dd169b034d2391"],["/tags/Base64/index.html","c848edbcd9502ab9d732a5c064dc0760"],["/tags/Coding/index.html","e112f64fd75aed115e8603bb150cece0"],["/tags/Github/index.html","0e8e1ae3c2bb58e2dce41767bbd045f1"],["/tags/Gulp/index.html","b865f7a179868d546538b77111a65659"],["/tags/Hexo-Neat/index.html","9d4bc179bfb52b8e6f88381e526d1642"],["/tags/Hexo/index.html","71b679ed6dceff5583b6028ffeb1ccbb"],["/tags/Hexo/page/2/index.html","f191030e673eb7a251719955dabcc4d6"],["/tags/Java/index.html","807028727aa43288713526793b0689dd"],["/tags/MD5/index.html","89f51e2f8f5234ad158be435210eb0e0"],["/tags/Next/index.html","4ebe9f60967c69717b51a4940825fc17"],["/tags/Password/index.html","452c8c5f683439b5a0e1476aba3a0e0c"],["/tags/Photos/index.html","79145c2abf88379d11bcab06c487fd25"],["/tags/SHA-1/index.html","9e670d2e8c18a0d9171e4cae7e6020b8"],["/tags/Security/index.html","33768f339ba980b2ef597fedc83ddfde"],["/tags/TravisCI/index.html","8ea8c7989494c5c94b567eb7e12d27ca"],["/tags/Valine/index.html","2488a76dc45ba8917f76dfa375394363"],["/tags/index.html","b25f279f132c8f4b4495ffcacfa6959f"],["/tags/lazyload/index.html","27b89560b0372673d0b618e0dc0db96e"],["/tags/代码块/index.html","c2731ce8140a872ef5cc636961fecf22"],["/tags/图片/index.html","e9a18a0498126ee14289d09f45a57a4d"],["/top/index.html","eb0d78a9d98e9ef5ece3b6d3c7078cea"]];
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
