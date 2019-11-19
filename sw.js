/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","315f9f8e8c7024d08d7e7629d35f805c"],["/about/index.html","dbff14c14b7a41b347bef13cfbe5d80b"],["/archives/2019/10/index.html","1de172e4e8b5c2b5b448de6e66dbef98"],["/archives/2019/11/index.html","ca2e5bdbef99e11a79b98320b54e9574"],["/archives/2019/index.html","0ca066414527193eb4b0e34ab4fe82f8"],["/archives/2019/page/2/index.html","59c9a4cd0f54a91fbb6bddf070fd962d"],["/archives/index.html","04292de31ab6e292bc4d847ab381a5c8"],["/archives/page/2/index.html","2dbf56c08bc537c55b2b5abfc5c5c185"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","ec71eb883334302da30201becf2b1f83"],["/categories/Hexo/index.html","12455174a17fff90d0f8de80b7561775"],["/categories/Hexo/page/2/index.html","545c76b620de4022d55cea98f9f5b3ba"],["/categories/Hexo/点击特效/index.html","0869774fce35523d0d0a380c24970d1f"],["/categories/Hexo/豆瓣/index.html","327e919559ba250fdb84bf078986b473"],["/categories/Java/Base64/index.html","9fe86b289be712ec428596196c9d0b0b"],["/categories/Java/MD5/index.html","0aa8b626fdbe2536b3578a2c9d7dcf24"],["/categories/Java/index.html","f5213817197d8cdcbc566aab3a075302"],["/categories/Valine/index.html","e2a6cc421250a79f5b4d3909919b006e"],["/categories/index.html","74fc6e32471e469e56c2234899af9c20"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","b43f1bb36cb0b57deb385e5c02a5a1ac"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f8975717a7e38b168062d2c6f3ae92c9"],["/games/index.html","409980c8e7e93a34bc4bb9e5aca3233c"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","5f09d82a76e2ea9efc6d6eedaa433817"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","6159bcc507ab0de4383d4e288aa33394"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","a60ece6cfa1c2d117290ef5e9c3f9377"],["/js/src/algolia-search.js","63b09c0cddda3de61db952f912cb89de"],["/js/src/bootstrap.js","d87c0b5234094d65111e360a73b1ed35"],["/js/src/bubble.js","49d8cb5f8647aed82aec29c91812f4c6"],["/js/src/canvas-dance-time.js","2620cf2c5fa2f1784f42b7d30cc63aa4"],["/js/src/clipboard-use.js","08e87bcb271b4adfa8e1436b43264067"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","bb0cb34a4780282ce173251aa6aac254"],["/js/src/exturl.js","8abc2f12f964c272d8e412d5d5340227"],["/js/src/hook-duoshuo.js","b8bbab32e7b03a6e9e64d4e120dbd883"],["/js/src/js.cookie.js","37a0bc2225f599e96b8028e97b225edd"],["/js/src/linkcard.js","fad421342d4092764f86005c76fe3083"],["/js/src/motion.js","f3cc92e7709b3955ffab428d85af7ab5"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","516bd04ab59af3c28ef19a7c507b338c"],["/js/src/schemes/pisces.js","d329fa0563d13ec924f28bfe674004db"],["/js/src/scroll-cookie.js","51c698b4c87b08db3f513d860e616277"],["/js/src/scrollspy.js","cf2f8b7f666f3d20b582d02ccb6900e5"],["/js/src/utils.js","d1c0578f58a377299e6dc97cc4238314"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","294bd7f95ce5ef9ab77ef6408f9de2a2"],["/lib/Han/dist/han.js","943b26127c32e46860fb322b437e747f"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7a8f74be4a83bf56f26f390824409f98"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","bef19f45861b799ad140ef268099dbc9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1a30d85e7b7e2a28b8e15d80f7309d6c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1d796566ff0fdc65706ae3d78bdf6311"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2a07004a79d0e46e118d04f6ce0c506d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","25b1c84b816c22a716920ff77f4446ec"],["/lib/fancybox/source/jquery.fancybox.css","958635d2ba0fb676278d5f5dbb4328f1"],["/lib/fancybox/source/jquery.fancybox.js","a8deef56d6b6c3ed3856a7308e0872e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","e4c36aa731691a5e089c364c63f17382"],["/lib/fastclick/lib/fastclick.js","34bd623482bdf3ba4eacfbc72ea04c23"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8198cc6000163191c1e1aa6422d1d361"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2e052aedc538fcfeeaa36921ec14d33d"],["/lib/jquery_lazyload/README.html","e69eab1c414a63844f1ceb2c3935e1d7"],["/lib/jquery_lazyload/jquery.lazyload.js","12945a84296f4b228fe84774ad7a94fb"],["/lib/jquery_lazyload/jquery.scrollstop.js","41b2395f3dfc2d8045ba2bdc0d8d9b65"],["/lib/needsharebutton/font-embedded.css","38c432a86bf6c1d2ff80b8af7605c3dc"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","bf64ea78f5cac7b931a6935d9ab2b5fe"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d915e5199c4305659782a8623f75532f"],["/lib/velocity/velocity.js","13bb1ee81a8740359dc11e27dd1950b1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a5b000652c82488bfc16dd12e066f145"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","861c985481c194f7f81f2dd5b50b5723"],["/links/index.html","1aa3e5783d956183393d7746caae4de1"],["/live2d-widget/README.html","a75449f04c6f87943024d9cdf1f170b1"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","1c252fb09bed0a7665a7d39b39e629ad"],["/live2d-widget/demo/demo1.html","fe4f6cc8afeb70aaabe7edb8d6314ba9"],["/live2d-widget/demo/demo2.html","5eaab7b579f9e714b023c12281f3469d"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","c99a903c47f64563ef778ed1240fbfb0"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","2beee321bc3fac6863f9446f84f9ab13"],["/page/2/index.html","c346787a5fe5a359b175cb7d77856ef0"],["/photos/default-skin/default-skin.css","05087010738c88228cf5c6c6e9af865c"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","d83b704be57eabfb80174c534d569be7"],["/photos/ins.css","ffde7c305c0df61e3daa85580cf3f30e"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","f6fd59b572bccb84e8806e289e665d8f"],["/posts/27514.html","56bd14bf408bbacf786a826517c4fbea"],["/posts/39d47c89.html","bc70363270846bc976e4e7f696e0a032"],["/posts/3e5a3bb6.html","5880fd930ab9da55052ffbde7b4d56c0"],["/posts/495d0b23.html","244aca03ac569679c7a8f7aba7e3f180"],["/posts/61913369.html","f8180756dfd3ed52deda9007781391f4"],["/posts/7fbe9500.html","7a69d9504190bc66c3696af7e4795bde"],["/posts/89ea6c8b.html","a27219ae4c7e66391ac1976ee16ba8ef"],["/posts/9c9b482b.html","edddd0168c2c27d5ea5b2442539b0f4c"],["/posts/a7df3b40.html","0564694c4d7185491f686c5d83feb77c"],["/posts/ab21860c.html","da71eabf64ee2add459fd1ca061e5a31"],["/posts/bf9eba42.html","f28956094ca6f34e34a0d30099ac2a1c"],["/posts/c1cdcf68.html","69fe2839dcbf7d903d7f7bd536aabe5c"],["/posts/c4782247.html","6afa2ee1007ca6b066debe00a613853d"],["/posts/c7631ec1.html","4d3a167f0fddf80bc5d49bdcb4aefe2e"],["/posts/d7399e80.html","65ea950636779d0904a610eeb9e32da9"],["/posts/dff7e11c.html","2d37fbf31f65c374d8461d2ecb3c2b90"],["/posts/e1b9c6c5.html","757c7094c5f5028c966fbeb8aa45577e"],["/posts/f68f129b.html","ebf9a66537f957013321f66fd6acd49d"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","d14212e1b9f1656f82a5fb5967b9f357"],["/tags/Base64/index.html","0be02132c36ffcf9d6566ff40261e036"],["/tags/Coding/index.html","2ac6bd14df122e2ef7dc9a4874d5510a"],["/tags/Github/index.html","4d36056cc0a3af1f7e2baee7bd4ff0af"],["/tags/Gulp/index.html","192bd0cdf76cc7fc9e79b8a99a4d8431"],["/tags/Hexo-Neat/index.html","a8c53e3801d9e2ff65498d06e2a9cd72"],["/tags/Hexo/index.html","016d23333b81ded6babeb580a73f5093"],["/tags/Hexo/page/2/index.html","bc393d5b35b92917352cf61bccc06101"],["/tags/Java/index.html","5ce4d5bbf444430da91d4a7462854242"],["/tags/MD5/index.html","c52a1f0b28012d3e63416e8cde7e093e"],["/tags/Next/index.html","9a00cface6025a4ecc0f9a451470fccd"],["/tags/Password/index.html","b38cde5fe419bb601058cc960576081d"],["/tags/Photos/index.html","a85d7cd04995b11c19ff3f41f5898bf2"],["/tags/SHA-1/index.html","e7c05fe62a5e2dc8b78d7abbee0e42a5"],["/tags/Security/index.html","45aec22865100c92b4150316e619d8fe"],["/tags/TravisCI/index.html","95aaceaa0eeefee2af7288b10bb1480b"],["/tags/Valine/index.html","56d137c1f826a2342f403af2ebd46c8b"],["/tags/index.html","099ccb394fb4923cf43b3b0a0f7f1c53"],["/tags/lazyload/index.html","c14d3029d29cd7930fab39924a618dd7"],["/tags/代码块/index.html","13c40cf16bf4f86466cd4719e0c7ae9b"],["/tags/图片/index.html","669eb68ebf301d3627eac236dbc8052e"],["/top/index.html","995ea8315e3161ac8cf8ef4980fb3f1b"]];
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
