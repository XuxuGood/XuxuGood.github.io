/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","18959bbcf5e078ac79f9638f8d0db7f0"],["/about/index.html","de1f63e005621f8e1904d6305148098a"],["/archives/2019/10/index.html","ad47e27b66371beb51db5b8ed6d28143"],["/archives/2019/11/index.html","2181dccdf61fbd7c90d526847a926b39"],["/archives/2019/index.html","c6c8bcb9f2bea84a03d8a2d3a093131d"],["/archives/2019/page/2/index.html","33320d5fbfe9a33be8f27e948f7b88c1"],["/archives/index.html","8d976b175a5a6d0a8f03a5b0e99919e0"],["/archives/page/2/index.html","9709de46c011dcb35c36e82a4424f933"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","683ad02ec281f7b35d62f9c899bc0250"],["/categories/Hexo/index.html","736fe7a439569fb3ffbd961172b5ba4b"],["/categories/Hexo/page/2/index.html","b1b829d67a3bec2218031e2951018da4"],["/categories/Hexo/点击特效/index.html","68ba64b154ba000acbcd6eb72c4fa47b"],["/categories/Hexo/豆瓣/index.html","3d12754eb58f2a61a9831cf48fbd6d27"],["/categories/Java/Base64/index.html","04f6a425f015fad26a7c2d33ce6d8d78"],["/categories/Java/MD5/index.html","9dd027f85b2ac99152339cc6f684a8e0"],["/categories/Java/index.html","e016ca3d1e5b3c91194ebf9f6b44836a"],["/categories/Valine/index.html","ed49a944bf5f9bb4738a07d117382cc5"],["/categories/index.html","f0f262dc2c9560ee59482568e1f2250d"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","686a6adf1da25ed51cb631035f4fd8b2"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a8da45b5d0e4dc9f7683c45349d08d20"],["/games/index.html","bdec11ea92da793935a6cb4d21a16f9b"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","f956e3b171b49f36e2edca193b59ce7b"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2e02055f99aeb2270f05e8c07aa5af86"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","39f4934ec88c8603e320a96683be0ade"],["/js/src/algolia-search.js","1f329e890d9aaa47d5c0349938e39c28"],["/js/src/bootstrap.js","25b60fde8a703dd221a087f6b5f7bcca"],["/js/src/bubble.js","fa88797ecfda7caea8ccd3bad190aee3"],["/js/src/canvas-dance-time.js","48f460ef3a7ca525aca5de66dbf30b0d"],["/js/src/clipboard-use.js","ba825212293ce5c5402e0ccb32595bf2"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","651cb360800e392ccb5086319750e3e0"],["/js/src/exturl.js","f677854ecf0e2357621fecc64db441ab"],["/js/src/hook-duoshuo.js","e0bd4b98b2a6017abc107502602e87a0"],["/js/src/js.cookie.js","43f41888f6ed5ce92db05978b83fb580"],["/js/src/linkcard.js","ea38fe2f8ce41ecae40c91cc02351198"],["/js/src/motion.js","f405eba2ac1530ebbbeebbc0776a9f8c"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","0b3068c1f3f2e35fbc9fec6244f0e02a"],["/js/src/schemes/pisces.js","88e1c6616c8d91506076c5f6726e9f18"],["/js/src/scroll-cookie.js","17500758c55d4c96345865de5e2e6e18"],["/js/src/scrollspy.js","6327817e3cafeb5b2826933e8e56aba3"],["/js/src/utils.js","4dde38ddaa2a58ad212816e75431772e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f4cecb9e22c299a10e3139a695554a1e"],["/lib/Han/dist/han.js","b595711cb6ee52b06844da8beef0271c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9864af12212e072e878c96ec5b66715c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b6f94a6dfccf5a6e6d105fbe63bbb4d4"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","789248b607557def38f49591f7f637d6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2f6f26203ccc17cb3776d3634cae5c74"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","cbd22cc3947f8842c36a25227a515325"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","28bebe5cb954f2c0d3fb41bf1c0cef68"],["/lib/fancybox/source/jquery.fancybox.css","0d08cff27b41fcaec3fffb0e56b801dc"],["/lib/fancybox/source/jquery.fancybox.js","7e267cc4cb17ee33b1b9830dca02f33f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","756dcee53e1fa4db9bd6d5ab110f9699"],["/lib/fastclick/lib/fastclick.js","158ce91302bef909d5ce294a6fbb4336"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","69a834565dba12a5aa62affbe47e208b"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","439c35455593987dc058467177c07653"],["/lib/jquery_lazyload/README.html","5c9729d08aef38ff62647ca8e5edad24"],["/lib/jquery_lazyload/jquery.lazyload.js","e44b76179a026c7d1e767daf0f7f8acf"],["/lib/jquery_lazyload/jquery.scrollstop.js","04aed4b4393cf89349ea286e88f9394f"],["/lib/needsharebutton/font-embedded.css","802ecdb6ddceecef74070bc5c6d8653b"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","3d18bfae99a16fbb24ff8c22874bdd88"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e16e7d59bb77904d02eca575eb825519"],["/lib/velocity/velocity.js","a873d2d599953da8bbb347c709ffc18d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","298e24be39ebfaf1cad7b4f4aa908ef9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","9ecdf14ed81eb063bc95f108c5cb2ed2"],["/links/index.html","72f9697f05bec13778ec66764ab34929"],["/live2d-widget/README.html","276a3955b3d6f2abdd14341d4b5e5f03"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","ae2580836d8d0e829fa18c8273a03b53"],["/live2d-widget/demo/demo1.html","aff9f9ac316fc10d012e1227aa42a1e2"],["/live2d-widget/demo/demo2.html","aabbfcdc21a3ca83661d2f5af880830a"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","c425df7eda5477db8b3ae8d2bcebb0c2"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","90153d59489d3f6debf3c3bfbcedc307"],["/page/2/index.html","44997060979cb86ac869474107575811"],["/photos/default-skin/default-skin.css","359d96574c27a94a150e45aa7dab86f5"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","2f28eec237f270c831594fc24dc486d3"],["/photos/ins.css","f7d2796a210efa36ea565b2c25234b78"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","8523a12d6e90b738ef4731d61155a867"],["/posts/27514.html","023fed56bb5868113c7446d6fe76aec3"],["/posts/39d47c89.html","f1115bc8b4ee7745bbc9f3c4c76f8f30"],["/posts/3e5a3bb6.html","70a816d86e21a47949df4ccdfc8d4a71"],["/posts/495d0b23.html","b9c7cae48b42c5e8f1b086de45e9f561"],["/posts/61913369.html","b8ac5cda8462dca92dfd221fa0c324a2"],["/posts/7fbe9500.html","063ffa5cb173173059f70397a3ad442c"],["/posts/89ea6c8b.html","1ed15442ccb9bcb38c843a167dc636fb"],["/posts/9c9b482b.html","8b5c19982f8d7bd43fece5d32a0fc3e7"],["/posts/a7df3b40.html","2246a73b5a718c573515007fbbcc750b"],["/posts/ab21860c.html","7ed315e5d81bb0c0fcd71367d4de2080"],["/posts/bf9eba42.html","c39e68fb8728da176495c3091dae747b"],["/posts/c1cdcf68.html","835fafee133315c17cd089f4515de333"],["/posts/c4782247.html","db928d464758185398e082b434ad7a31"],["/posts/c7631ec1.html","f6876cd29263fc6e4e2c6a346d456de7"],["/posts/d7399e80.html","076bbb1398d7810021190e29761abbf1"],["/posts/dff7e11c.html","b753cff2659c91d5ea7340478e5bd421"],["/posts/e1b9c6c5.html","c2e43154b47729341e2c0c3dce46ad75"],["/posts/f68f129b.html","6bd44040766e7c27b3435410960226c9"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","01407a04d44e4e775ac5c7847990437a"],["/tags/Base64/index.html","29a5c94db6de708e8897b14381ef41cb"],["/tags/Coding/index.html","477f203fe1bbc78fec79ef98a500b5c8"],["/tags/Github/index.html","8d180c57d5ca1c8c690ef66e25c7d837"],["/tags/Gulp/index.html","9df95750bab65f9503c643ab24e24a43"],["/tags/Hexo-Neat/index.html","422074d2db02e173a75a5842f9c9c86f"],["/tags/Hexo/index.html","42485e89ff77be7ea2d4a90e62b4943d"],["/tags/Hexo/page/2/index.html","f55241c637dab122a98511cb70ad94e0"],["/tags/Java/index.html","ccebd95e4c60db6e4511940bde7c8808"],["/tags/MD5/index.html","a04babca4f6d823dc7b691754240aa57"],["/tags/Next/index.html","9dd0f87417a8223b282fd81fcec83261"],["/tags/Password/index.html","7fb87f0f3ba5b91d6d9c5d93972091f5"],["/tags/Photos/index.html","a913b8f7a3499da803129471c0849f86"],["/tags/SHA-1/index.html","3c8bf460795542b3af281a81c17cbe7c"],["/tags/Security/index.html","a641aecdb870b3316dfca15b5c95f883"],["/tags/TravisCI/index.html","72b23f87e492b29201f0cd5aa3be46a4"],["/tags/Valine/index.html","2aa4baa5bccedf2bdfac76cf857f6fdf"],["/tags/index.html","bd2ab51281f6474fd721c32f31ccd251"],["/tags/lazyload/index.html","a495986063b40fe2d7305efaf355e25e"],["/tags/代码块/index.html","4e1f90e6591bf84243799547aab9cbce"],["/tags/图片/index.html","9cbdb926dc0287c29d2825b777a0718b"],["/top/index.html","e575fa53f6e7689d07d40a3f7d4c63ad"]];
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
