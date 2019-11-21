/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","39fd9d373e6e2263b9e4b274a640bcc0"],["/about/index.html","9f3b9d0c9f14d3dd92fc96e5630799e8"],["/archives/2019/10/index.html","2eede0536c20606b26f83490e1025fca"],["/archives/2019/11/index.html","92755d17cd36b496076cb629f79dac86"],["/archives/2019/index.html","98aab1ffa81530f2713f8cca6b9f3d5c"],["/archives/2019/page/2/index.html","7c64c04b6e72600c440255ec9adbfecb"],["/archives/index.html","7bc2b3873e64c73922604e7fdf579927"],["/archives/page/2/index.html","af34898cbc1fd1d06f2e732dbd272221"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","9c6dd84c6d5e7d7fc80942ed700b7cc2"],["/categories/Hexo/index.html","a8fbac6a2fb59ad0a5756db477a97afd"],["/categories/Hexo/page/2/index.html","5cc0232296ec65db90bd09512dfaf6bf"],["/categories/Hexo/点击特效/index.html","436c96a50a3cf5becd8e9823cbdc9b41"],["/categories/Hexo/豆瓣/index.html","8ec6eb8125e91b65662e0b5e5e9ab184"],["/categories/Java/Base64/index.html","f92b797a691b3a8c359f872d44d676c3"],["/categories/Java/MD5/index.html","42fc1c524c4590c1d8cd93adb329854b"],["/categories/Java/index.html","b0636d994a68eb971dec9beff4756427"],["/categories/Valine/index.html","f9977208ea471d69f745df19dc133293"],["/categories/index.html","ce614c1deb61c2b12b0636ff000208e2"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","ed5cdf1b6415c3df55fbb312499e33f5"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b072e2bbdf3eb02e5f0f18b639e62b24"],["/games/index.html","ecab7b32f4a2d6817596d0d8f34d68d5"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","993b19e72e1258171113f2f0bdcea659"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3e3ecae919c2270c3f5bc476b12e7328"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b8c5f61d8221e16f218406b6825a47ad"],["/js/src/algolia-search.js","57fc196046119dfc585f0a74f0d4b321"],["/js/src/bootstrap.js","63c8b061e6d3e66b9f182382cdc8db95"],["/js/src/bubble.js","5b64a342906f9627567bcce51800cb1b"],["/js/src/canvas-dance-time.js","b94a945dc3087e852af72c4a138162b0"],["/js/src/clipboard-use.js","452b3a77eafb75cbaccef47f124b8d58"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","b2970b0fa1e9b1ad0bf9f08e629d3352"],["/js/src/exturl.js","e1bde4fd7e82fea144e4be40855a206d"],["/js/src/hook-duoshuo.js","35b14ae3927421a2270e15b3363fda6d"],["/js/src/js.cookie.js","b3f7cc3f43fabe5b00cd1f87993b36fb"],["/js/src/linkcard.js","d684af7633057545220d15b48bd5fe4f"],["/js/src/motion.js","e1a381c383317e08ef2ef3a132cbcd30"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","2ecab4f69aef6231cb50272ca3db792f"],["/js/src/schemes/pisces.js","c3de8919e640c12b571f6dd1ba81387c"],["/js/src/scroll-cookie.js","f1aad66a1234d24f6e00da7d7f7ba19c"],["/js/src/scrollspy.js","e1e72d90db8ed6aa418d748a76146293"],["/js/src/utils.js","933b05f704a1bbc316e4fdb08e9d24cb"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","78dac8d000a3306b63b190042e020da4"],["/lib/Han/dist/han.js","c7fe5af8002cdc9902c77c29b2bfa0a3"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","360ab7c6cbfcc5253f81f3fb30928617"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","4d9e58fee2e46aadfb55276461ffa26a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3bb721a78f24273882a162e5802301f0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","03e6bd46cc619ccde377719d3a29f4e0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7512d9b149bff3d1e4527c7f59de1cbc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","aca14a23852ab46bf4f05293770c6fae"],["/lib/fancybox/source/jquery.fancybox.css","18ad333250370ff70b7dfef3298f6d57"],["/lib/fancybox/source/jquery.fancybox.js","43c7a03c6b0abce7c385c49d4174141f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","367ff7c482556c464acd2f367f05633e"],["/lib/fastclick/lib/fastclick.js","434571eccdcd033eb32d59bd151e28f5"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","9bedba09774ce888af6c1b391fe70174"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","af2244f221f1b811250c60f72728cccd"],["/lib/jquery_lazyload/README.html","71277774a155b2bb3efe37512c9d08ff"],["/lib/jquery_lazyload/jquery.lazyload.js","b2261486debd31092a470be8740cfff6"],["/lib/jquery_lazyload/jquery.scrollstop.js","bd5724320c1cd016b03c9b492469a06f"],["/lib/needsharebutton/font-embedded.css","b462d90ba89c43853e2e4ffc9b330340"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","27fee978d8d4c7ee372d5c58974bad1b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f29dd5f58ee4113c6593f5b935a1a972"],["/lib/velocity/velocity.js","ad69875420f0d52e85dd3a61e2d0960b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","99479e771c0de5212db3fbc401b6fcaf"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","eaf78b8a3e5bd2e6970e83cd9f09a2a8"],["/links/index.html","dd969a0091fb461093c5e6e7c3211747"],["/live2d-widget/README.html","ad61aebeb5f3fed0a2ed3c1ab4d3d0c4"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","4e23d933b36b6716b28154add26c1cf4"],["/live2d-widget/demo/demo1.html","8c26c4a4344a86fd1dfd73bb9f4a3efd"],["/live2d-widget/demo/demo2.html","57bfac4930c876162f8c657c5e768590"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","991a8372d4bfe2ffcc33c2574161e2fe"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","8f415dd399626435815fe0a3cd5b7d3c"],["/page/2/index.html","0480a8c54821d022ac1a166767437855"],["/photos/default-skin/default-skin.css","5caef7898d51e8945cd23473a4e8b9f6"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","bcfb100ff8165458f52a6998e4505dcb"],["/photos/ins.css","03923f9a4f7d2a5baf5a566f6ac943f5"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","a68fd441f4e23e1420ffcc2381fa7b73"],["/posts/27514.html","7270266340addff955fa31d24ed707fb"],["/posts/39d47c89.html","c2a05996cb6e114f531709e5b4ee67ef"],["/posts/3e5a3bb6.html","b5b7118de1e93119c1021016938778d0"],["/posts/495d0b23.html","ec2855edc4d0b856c6070b83bb60e98c"],["/posts/61913369.html","4d670b4be17e74ded867f4beeff63b41"],["/posts/7fbe9500.html","45b0511737fbd2d0ad0e4a0786eac7ee"],["/posts/89ea6c8b.html","e5af1ec917667d20a45797abb71d85de"],["/posts/9c9b482b.html","0c2f01afe67d5b4006f5fc1064c6eb75"],["/posts/a7df3b40.html","1e404c77e88940a2100dbbc4ad2a5e8f"],["/posts/ab21860c.html","a2029a5c87ff26402bfed48a9026ed4a"],["/posts/bf9eba42.html","0c86eabbe1d76aa986976c93fc144dc3"],["/posts/c1cdcf68.html","4ab1c8d2680525c4385cb65066338345"],["/posts/c4782247.html","534f7a00d19a0426484746c54f9c314b"],["/posts/c7631ec1.html","66eef79cc33db587aa73567cb9db4919"],["/posts/d7399e80.html","801db9681d8c89d9568dd3c84a62e668"],["/posts/dff7e11c.html","fab8d96d81cc229f9a038e2c019e6e3f"],["/posts/e1b9c6c5.html","89886a386574221f285b3230a76298cb"],["/posts/f68f129b.html","dfd8d08019b72f0361bd11a8bbf63465"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a46bfd9e3d0da6f4be32badacdbb7083"],["/tags/Base64/index.html","c47b8a8b37ae57a5026322f42b6a83a5"],["/tags/Coding/index.html","492fbd3573acc05907e420f090619c03"],["/tags/Github/index.html","5260ebb97189151dc6db2a9e217b478a"],["/tags/Gulp/index.html","a8cf8d1b5a1215a47026d7087b7f8a87"],["/tags/Hexo-Neat/index.html","76e59155a42d39a27dc5dc0018c132ac"],["/tags/Hexo/index.html","0a154853a93608f2bf9d5c388ea76b71"],["/tags/Hexo/page/2/index.html","26e2dd10fe17ad92e29c1c95568a591c"],["/tags/Java/index.html","3dab93b5dad4074362f0a24f00abdb29"],["/tags/MD5/index.html","4b8543eadc9c25259c91ab02521cbf87"],["/tags/Next/index.html","a340a7541d2c9860459cb73a6691727c"],["/tags/Password/index.html","7aa4cd290090c846031a59967301b8c2"],["/tags/Photos/index.html","01c22fd882b9de7f53a81219c895259c"],["/tags/SHA-1/index.html","a048a633e031c13c242daf78d260f718"],["/tags/Security/index.html","2e5f7ae6db4263451a97eec661a2208f"],["/tags/TravisCI/index.html","3fc24e6448f9bbcd4a7f753d04bf3ad1"],["/tags/Valine/index.html","41039ddba9536b295e42367be9e7363a"],["/tags/index.html","010615c2ef85069b8abb3e2bdc8b5bbb"],["/tags/lazyload/index.html","117f9c459aa4a7c60311266553e04ac8"],["/tags/代码块/index.html","e350fa6b0a959b35c5f937ed120baf2e"],["/tags/图片/index.html","efb57eac6416aefcf0f54775f79b56b5"],["/top/index.html","9f36aec2236e945e7b5301635b0a1f23"]];
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
