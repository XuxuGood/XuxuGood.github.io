/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7327aaa7a1d39142dbf691355515acc7"],["/about/index.html","1158976d8431e7364cf13462c06c4435"],["/archives/2019/10/index.html","13fde4ee2a086bd366e70c2a7c118a04"],["/archives/2019/11/index.html","b391ba47abecd04db5632850ca54030f"],["/archives/2019/index.html","e7bfd955603c38d5d1d48f902f74ada3"],["/archives/2019/page/2/index.html","3e01eaac9fb71128be0714f24fb8ce74"],["/archives/index.html","ba874337a750527775095380b1fe9696"],["/archives/page/2/index.html","032d22df4a89b7ffe980d6de2a35f1b2"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","9e2852c7f2ad93c0ad102a14f89fac66"],["/categories/Hexo/index.html","a95e57c06cace5a531ff4c53ec660ca9"],["/categories/Hexo/page/2/index.html","d39f193dba3a4191c922c3bb576b423b"],["/categories/Hexo/点击特效/index.html","4115dd83ce826ed702660085131815aa"],["/categories/Hexo/豆瓣/index.html","357fbb8ef5bd314eeb0948408c8753dc"],["/categories/Java/Base64/index.html","b1bc463842d815c43b106b839b7fad7b"],["/categories/Java/MD5/index.html","891dea8642e7ba44a2b5d3ba23b692fe"],["/categories/Java/index.html","535a28534ac73c66fe6f0337630b0fda"],["/categories/Valine/index.html","ae97dac70e724f7600cc9ee78bc08314"],["/categories/index.html","0b7731bcb4380e403699cd88e4ffa8cd"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","b03750957395ce798e8fefd232c38309"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","3a0f53da9b45685cded07517c2fc5f06"],["/games/index.html","33f212261fcc4bb5afa399ae08c33964"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","a95668f47457fc74968df8dd90407608"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","54fbb18e09b572eaaa55c691df27d082"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","05d25c90c541f440838bb8a300e5f220"],["/js/src/algolia-search.js","b3b6d5701be0583a8259b7d7f28b3143"],["/js/src/bootstrap.js","ae0123a6d91fdef455bfe9cdce911e3d"],["/js/src/bubble.js","81e262f28ba99c634081c0f8a8978d86"],["/js/src/canvas-dance-time.js","6af60e0f0ab65e60325137a7f81a986c"],["/js/src/clipboard-use.js","ee7c46f6e34c9f78df87953388bc818b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4d52ed079b8ccd5a91a0035794ecebed"],["/js/src/exturl.js","6c52f6433880638ac095015426c12f0e"],["/js/src/hook-duoshuo.js","00ac3c619d7408df31c87883a147c4b9"],["/js/src/js.cookie.js","2aaf2599590155ecd79728d5b76da1a6"],["/js/src/linkcard.js","69b263a6ab3ffbd8875f9991f549c7a3"],["/js/src/motion.js","0a9794f7b131e64c187019aee34b2198"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","131e144b74e9035bb9ba592777f729b1"],["/js/src/schemes/pisces.js","133cdc339cc5f825afcc1b0c54820db5"],["/js/src/scroll-cookie.js","13de6e062df3a5e90a61e5d985d71359"],["/js/src/scrollspy.js","9bbee8ec26da19706cd586e30805748e"],["/js/src/utils.js","735f2baf32a2d47204ee565147539af0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","e112de56a07c25d8fc284c73cd23916c"],["/lib/Han/dist/han.js","429b298347e9984dcccf3558948d6927"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","6f10ed21be89c2da57bb369ca993a1a3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7c2883cff2b529dc8fd028d65cb5e7b0"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","87d4c302413650c715c31ec0c22bf399"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7ea9f0e239e99b90c4b9954c23833e6b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d1c4a7e25d5a4e39646d0219d68cbe97"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","754c6988a02439bfe0bdcd2a65eb8acd"],["/lib/fancybox/source/jquery.fancybox.css","148f06c8d25aff35c092fa12bfd93f1f"],["/lib/fancybox/source/jquery.fancybox.js","cf65ba2ca2f24c68138c9321c2fa6be2"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b9dda4f42a56642397bb1faa20baf699"],["/lib/fastclick/lib/fastclick.js","7dbf3e71a98d57d81b6ce759293371b4"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2ad9fef7759d55168b4b77847ef59271"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","994470c06c0235bc192c0665eba8314e"],["/lib/jquery_lazyload/README.html","c0ba4b15b7d1163a316e15cc3ea4d03a"],["/lib/jquery_lazyload/jquery.lazyload.js","4c634d0198d0e26cad31a03ad1e1c437"],["/lib/jquery_lazyload/jquery.scrollstop.js","f140453b59be678ce0a4fcf2e41bfec1"],["/lib/needsharebutton/font-embedded.css","4f28712f57f7969a1fa5149d90bff153"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","30f17471076a515e621aedec709351b9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","622c0fc4252e6fbb47faca7551b35f34"],["/lib/velocity/velocity.js","b8926e198a573ae117c46dc7a6b41ee0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5fc388865ef2e6895c0059a3f9716c5d"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","bf656d042516e0bb6348db73564f581b"],["/links/index.html","1ac4287d2b8903ac5127768996a3bdb5"],["/live2d-widget/README.html","81d59c522d50ac5fa12977930e8cd2de"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","faa12d3281fed9b4d8fa67094a7ced41"],["/live2d-widget/demo/demo1.html","c30e206eecdd0999152d4661f19d26d2"],["/live2d-widget/demo/demo2.html","40a3d8019fbb541eb1bfd43e4aead2ab"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","b3a63a56966c2460a9f0d04cb16c3963"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","c22794c32b91aff5d1873608c3da338c"],["/page/2/index.html","dc8a846c0c06a72016ce3e8933b79b20"],["/photos/default-skin/default-skin.css","e9d08316118a8b3b73bf3a0135a16c0c"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","f1a8701830fd954c94ca1932e259b87d"],["/photos/ins.css","8b2d2087c86902c943b32ead25543fbb"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","3a078ae68ac9a294fbddeae94bf39c23"],["/posts/27514.html","02258ad274c3f7a3a6debb37a3e4ed13"],["/posts/39d47c89.html","2a00b2c955339a6ccc830e043447aaf2"],["/posts/3e5a3bb6.html","b4508a8ff02b6ac44a0f61c256a3884b"],["/posts/495d0b23.html","7e9daca15ee9a8b4516ce3cdf7b082ca"],["/posts/61913369.html","edf03720176f651a644e603bf904277d"],["/posts/7fbe9500.html","55e380a02e5059c6bd2fd2e2b44a2ddb"],["/posts/89ea6c8b.html","2804455dd9e57430a601a1340f578327"],["/posts/9c9b482b.html","0e2155d4c4dd50edc92d22dc374b9465"],["/posts/a7df3b40.html","e4514f60339147112820324d94dbb4dc"],["/posts/ab21860c.html","b3d5f89f20d7c16105f43c45d946fa4d"],["/posts/bf9eba42.html","0f142cbcf83546e28f3a66db947868ad"],["/posts/c1cdcf68.html","2910bfbbe49957ddf954ef23d2dc986a"],["/posts/c4782247.html","192b3ad1a3328acd06179d9ed5fc8f1b"],["/posts/c7631ec1.html","f008cc9544a550f4eeeea1fec68caed1"],["/posts/d7399e80.html","31c7062c8e5bcc5884925deb34d8f72f"],["/posts/dff7e11c.html","a09a6a7dc5699ed9719d67039a19cb0c"],["/posts/e1b9c6c5.html","82f0f0c9341e0b27318e77e300f61bc2"],["/posts/f68f129b.html","860a83c11596a4e8923f0aef1b817b36"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","1b53c196ccc3152dbebb540302610cd8"],["/tags/Base64/index.html","dcb49d373cd14d6ce4358ab0bff07a28"],["/tags/Coding/index.html","35857163abe881d4992591592e1e18c9"],["/tags/Github/index.html","069aaaf6644a345bb148bec12de04211"],["/tags/Gulp/index.html","a26f236298fbc158cf19f4e3d0b765f3"],["/tags/Hexo-Neat/index.html","f7348b030766ba662dd43890d2750072"],["/tags/Hexo/index.html","16f091d34387554d1246a93176a5717a"],["/tags/Hexo/page/2/index.html","35de8982bbfc57205625bbe891b762d4"],["/tags/Java/index.html","fbb022a1824bcdbde84c880770f6248f"],["/tags/MD5/index.html","5b033baff17953bb7104ca2482f26dec"],["/tags/Next/index.html","ccc3c0aca4ad46fea823a3281ebe3876"],["/tags/Password/index.html","88c7779fd22909ae9f21daa767729f01"],["/tags/Photos/index.html","b80c051b2bb9b6319fcc2250ff5e66d6"],["/tags/SHA-1/index.html","15a5c4057b5bac7732057c5da6e837bb"],["/tags/Security/index.html","004ef0a30cff303a4a453b1c32f642d6"],["/tags/TravisCI/index.html","3853eb4c469d6212923835a699d22bf5"],["/tags/Valine/index.html","63f43b4985e54e561cdb28581c3c1c97"],["/tags/index.html","81765406309d7d6de5efbc76a2549d6a"],["/tags/lazyload/index.html","9af324cbe177cd85329262e2c46958b3"],["/tags/代码块/index.html","195d6a5e213b0a22d6a10589203c4e1f"],["/tags/图片/index.html","0c1227a2c86c6018bf91345b6d1682c4"],["/top/index.html","1897b1e0270770c5ce9638ac60636ebd"]];
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
