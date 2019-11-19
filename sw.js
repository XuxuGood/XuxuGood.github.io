/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","eeb7c72741c3c3693ca3a59757f8b059"],["/about/index.html","f4824cee6ab5f113bd24bb84262edd60"],["/archives/2019/10/index.html","05fa79ac7e91a64dd4fbb4d23ed1ce60"],["/archives/2019/11/index.html","3ac71e68c7919c36323f08bda35f8b43"],["/archives/2019/index.html","d6dadd98e8c9fd2f9ee13f18707c24f6"],["/archives/2019/page/2/index.html","655e91c81b77189988df64e167cd0898"],["/archives/index.html","b119b5a182cc4d3978454f341ff5257a"],["/archives/page/2/index.html","fe3ae93c59642f5d21c46f61be53c551"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","5eea18fca064e34b908b6f3f8f2bd612"],["/categories/Hexo/index.html","c913a9363b13abaccc68f98fc2fb8588"],["/categories/Hexo/page/2/index.html","dfa4ef7fdd35895f35b99dfe5c06e91f"],["/categories/Hexo/点击特效/index.html","58809a95994338a60b1a34b1485b1144"],["/categories/Hexo/豆瓣/index.html","085859f050811ab1bdd3f1db4c621a49"],["/categories/Java/Base64/index.html","5bb4ca79916827b8ac802612970561b8"],["/categories/Java/MD5/index.html","a3acbe738c987fc50b637387ee1368d1"],["/categories/Java/index.html","e92a4fdbc714249a8a6034b1fdb3120b"],["/categories/Valine/index.html","b3a8d194afdea516f0b6980dd5ce301d"],["/categories/index.html","a00c43d196b901502006972f1ad9b4d4"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","7be9a230645826f177ff129015480d3e"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","74dd04d1fbf1d18d7cbe6eae292b53d9"],["/games/index.html","f4e66fae35511808b799eb2441908f47"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","70fe599d0acc10383eb7385b1b92fd67"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","697d147e927eaad0c53b1242745de2ff"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","90736e24303f8fb4b5adb638b9f5c8e2"],["/js/src/algolia-search.js","fa39628235c0c3625b68bf691dbb3d92"],["/js/src/bootstrap.js","6e765a57b8fff7e60c776a880d2cbb0f"],["/js/src/bubble.js","b7de93f45192120dcd6c58302eb41f6a"],["/js/src/canvas-dance-time.js","9d6d061ecd2be6ded9ccd66303baa29b"],["/js/src/clipboard-use.js","9ac7c0a4aa9d1b5b7594a84d3f49a18c"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","f8b01baeaa28efa8c80666178f713976"],["/js/src/exturl.js","21433b75bfb89caf1b107af754b09fa7"],["/js/src/hook-duoshuo.js","0c090bf076206a01b6a298045afea49d"],["/js/src/js.cookie.js","6414c7274626e68fd23776c6f407a894"],["/js/src/linkcard.js","107748fb52184dfcc0775b4ae4fbe929"],["/js/src/motion.js","3fce83488ff0c1dad449d6e0414890b6"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","54d46450e8c18e330db2f00b0752f3a8"],["/js/src/schemes/pisces.js","be7acf30f956bbbbeb15eea4775c794f"],["/js/src/scroll-cookie.js","7be82f6e4dee87c23fa8649264bd42d2"],["/js/src/scrollspy.js","38884e4e17e480ceffae831a51fb0982"],["/js/src/utils.js","fa75b83dcaf2137ace96c0581921b70c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","77d71cf6c3aa3f24866816d0ff41a2df"],["/lib/Han/dist/han.js","1d841deb7db3e1f785ba00ebe8b72507"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","29fb966d3555fb6e3826f438ef62ed88"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f0445ec6ac2a42296efaa709029aad99"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5281f16097a54fdb1af8c7aa3a207b5c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","bbb798cfe1f1a26119922ffde98c16d3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c1d164f9cf0a8117cbbba08464d1fbfa"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","de89a6cef738e51956f1e9b42bf6ba72"],["/lib/fancybox/source/jquery.fancybox.css","cdfca007c163bd34069542179079d66f"],["/lib/fancybox/source/jquery.fancybox.js","f2d1f7eeb5f36b24b1ef31365907b7d6"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f92b477ba0cd392fcbd9badbed1fb712"],["/lib/fastclick/lib/fastclick.js","ad61d0c9388465b0bec3d0feb98750ec"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","42372edd685ac389f29406b066beb908"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cc879494db3687ab2c2307dd83cafaa9"],["/lib/jquery_lazyload/README.html","0d592fffb2da65c7591bd564091df626"],["/lib/jquery_lazyload/jquery.lazyload.js","0800f11a2a21f98beb6f02279af2cb15"],["/lib/jquery_lazyload/jquery.scrollstop.js","9c94989ea4d3801ee0bf5f1e14eee4f4"],["/lib/needsharebutton/font-embedded.css","7532b314dc9c758d92136e527af0276a"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","a249c1acce77ba437f86a45332f23b05"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","af33c644cfdd885c6c83d9893c4e86b9"],["/lib/velocity/velocity.js","b14cd17d357bdbc6ed32be549c590059"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","6b39c50d7dc40319adffd344de7bac5d"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","bd2c09c11b99cd6f606399c2190aa99c"],["/links/index.html","5622859e129cb349874654696bf141bc"],["/live2d-widget/README.html","585757cc8ca254811ea29c42cdf84139"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","11d64ba06014fdca529487db61d30682"],["/live2d-widget/demo/demo1.html","73b3dd7952f476e56c65ccc7f341d6c3"],["/live2d-widget/demo/demo2.html","5faa5fb7953d0d1d2251e566ee09989e"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","3706a84f8756bb602a2e7d06c2bb717d"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","81836af15e82c22d000378ebf8b211a0"],["/page/2/index.html","9b9ab4a486b084cde1bed9b92b4b2a45"],["/photos/default-skin/default-skin.css","1df0223f184762bb452afbc3935deea4"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","2cf7764aec2ba1f28e9f16774e0f31c5"],["/photos/ins.css","2fa5fa8155d593a6b0df6e6573e90f92"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","2e4ffee5b47d0527d71e8cebf7bcf6bf"],["/posts/27514.html","b5cc5daacb25ec98b2f9cca6e24731b7"],["/posts/39d47c89.html","60a738f619099431e2a7ca4fa01c56a9"],["/posts/3e5a3bb6.html","e4332b895c703fc84127fb9918a88d3d"],["/posts/495d0b23.html","f36c479ff24b5504639eb1cc678dab92"],["/posts/7fbe9500.html","be15122ce0cb1095dd471fe14a2105ec"],["/posts/89ea6c8b.html","2492ed41a3bbd460d09fd5913a4afd44"],["/posts/9c9b482b.html","100ede88d987ab24c51e5227002e6cba"],["/posts/a7df3b40.html","14b624e80bffed44992c140a64f1151f"],["/posts/ab21860c.html","df1e5f7e27c45667f2bdfaf89293d9b9"],["/posts/bf9eba42.html","c88c3c9d4b3fa04db56b6a1c3a8f981e"],["/posts/c1cdcf68.html","f853d906b1d59ad2654338376300573c"],["/posts/c4782247.html","dafc82bff2d3cb4e62216001cdee451e"],["/posts/c7631ec1.html","fe2d2a92d754410bd7f97be7f8f585ce"],["/posts/d7399e80.html","2c2bd6bb0047144afa6b7b68d851331f"],["/posts/dff7e11c.html","cc7b844a87217a5a31612974e610dffa"],["/posts/e1b9c6c5.html","2fdcb96e96e1c8e26265392f280825da"],["/posts/f68f129b.html","c9f16d57f91db470f42f01e5d5d986df"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","da80f441ba8828f20c931b9474337a87"],["/tags/Base64/index.html","11fcfcda765e99fdc09161a5ab921d8f"],["/tags/Coding/index.html","ee1c22c922c1d5e95f839254056c692b"],["/tags/Github/index.html","977eac67faf25d1875eba5eaa44fe9dc"],["/tags/Gulp/index.html","0966c065ddc01cd62c25974052c4bfc4"],["/tags/Hexo-Neat/index.html","957d4e16f0caf684d58cd7b1cf7a4bc5"],["/tags/Hexo/index.html","13809c29a9f182f03ed9d1c9510fe411"],["/tags/Hexo/page/2/index.html","2c2946f0e81e1ab8ab43020e6b1d956e"],["/tags/Java/index.html","8cf37dd11482839f32ece5b38d64225b"],["/tags/MD5/index.html","e3537595381be8ec6e94d845919aa7ea"],["/tags/Next/index.html","811b634c8746512b82848980da06caff"],["/tags/Password/index.html","ecea91760d1a8634260c7f551fa5c66b"],["/tags/Photos/index.html","68872bf0bb5f9509895e7c450d6720e7"],["/tags/SHA-1/index.html","a3e95a0067c37738370cfd60f9a03e9f"],["/tags/Security/index.html","05b3f9a6fab7e3da687c7c90132f3467"],["/tags/TravisCI/index.html","f5809f228c7abe730a13592f44655c1d"],["/tags/Valine/index.html","588e139f0905c4d2da1ff41b36ec6352"],["/tags/index.html","2448a6d3b11464b9a22411db43233c8e"],["/tags/代码块/index.html","45ba3282e9747ed3ffc1cfe8dd8d2bbb"],["/top/index.html","07011d681e6b81b10794a6befeae01ac"]];
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
