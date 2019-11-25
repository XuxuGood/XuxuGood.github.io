/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9af8f5f392438c25192d0ed2ec409162"],["/about/index.html","67f2326b83654ab4d0b6c57af99fbba9"],["/archives/2019/10/index.html","963f63a7b4725390a585462b73f95b54"],["/archives/2019/11/index.html","9fd6ba3f15cc4190dadf790dd84ef12e"],["/archives/2019/index.html","58eee809a1392c0407427d1eec080d0d"],["/archives/2019/page/2/index.html","1b70906a787d2db2012df436ebec7ff4"],["/archives/index.html","c22eb0b06184cd9fffa9db3de35732d0"],["/archives/page/2/index.html","a144045085980c0a938710304d31cf90"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","1718a5e0036c82d0c9b52c6057c24f34"],["/categories/Hexo/index.html","12133766017ffc870f21257b7a65d07c"],["/categories/Hexo/page/2/index.html","143149e59588ce819cf24c3dabe3c7b0"],["/categories/Hexo/点击特效/index.html","32900ba3a1bd63d77455acb590d9a720"],["/categories/Hexo/豆瓣/index.html","1505374234c51613c9d8edf4b9121306"],["/categories/Java/Base64/index.html","011f380043f70e27b894844daf25b0f0"],["/categories/Java/MD5/index.html","e4b9601990fc577cd9b1181077f2c13e"],["/categories/Java/index.html","9b781e361742c61e7f73bc60522769af"],["/categories/Valine/index.html","e3be385cd1bb59fe25c9d3cf7599e275"],["/categories/index.html","72d0b5dd66bf863e4a5db1cc317ba69f"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","3f05e664ed297a3b8a92f354fdbef6e4"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","95edecd49ec5ff88a92824f89b098a9b"],["/games/index.html","d31a697e91671b5c3510261f8d15fabc"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","75ed34ff46cdfa7fac57586f8be2b71a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f9adb0f92607c68f0680a2ccfedfefae"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d34c0fefec8d058c0dd623264afc94a5"],["/js/src/algolia-search.js","9260bea75d49937d2166ca6e2d8dfedd"],["/js/src/bootstrap.js","70b34f470c05fb9a00476208f72dcf64"],["/js/src/bubble.js","088693b410cbe1955ff5170b6557e979"],["/js/src/canvas-dance-time.js","bbcdadbf5151a9620ea7a84a52e0c273"],["/js/src/clipboard-use.js","990fe6a5c5ebb03a915ea801cca809aa"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","61a88f5bb9d412fd2f0aeee337bb8865"],["/js/src/exturl.js","16b7c36618cfbfd0dca41382b3f516f1"],["/js/src/hook-duoshuo.js","2c98276176b5b024f49bd3fa02eba873"],["/js/src/js.cookie.js","cc9b85f86b969b721af62e8efbfe3fba"],["/js/src/linkcard.js","939af57cfe9d51a49575ef3ca316d0de"],["/js/src/motion.js","82fcbc063b5549ff20170f44c7a1cc82"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","fb27fab7f9b501105e936ae47900b5c9"],["/js/src/schemes/pisces.js","1a64dc5073a0e9a376f106520a5d3a7f"],["/js/src/scroll-cookie.js","c43114e08e85e88107c635fa32a0a515"],["/js/src/scrollspy.js","b979e61c6e97890280255e8abb41ca74"],["/js/src/snow.js","1b06529cb5418c6436573324f8bbffec"],["/js/src/utils.js","9562426a43e60f7feb713a99c7fa1a50"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","a34f3560e829eb9a5ae9ba0be20a15b3"],["/lib/Han/dist/han.js","4ec67751fdccb346848d536ffd35aea4"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e539eee5596506f51c1f73cab6fdcf6d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","887c22ff0eb3c4b80666507ec2b0c9c8"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","8e5992ea049e22314e010a0443094cf4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9d65cc74495d5317411733661ca3a79c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d313b18d1a6c5aa786d4df38ec1348d8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","094345ba49aa48e675128a66e0bbb94a"],["/lib/fancybox/source/jquery.fancybox.css","056c68599806967c67e5fe99a3dfe7ed"],["/lib/fancybox/source/jquery.fancybox.js","47950c37691cd39dae3ba48ffd832ce5"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d230c04b70880e7a913a21f9730b310f"],["/lib/fastclick/lib/fastclick.js","5da2db170c2027c6076c953ab00c76cf"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","dd2caa1dd2db1eba99682e9c7c65edaf"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e632c4cd1cb3191eded2cbbe956f1882"],["/lib/jquery_lazyload/README.html","3c20f6d380513e603523449f4dfcc9d6"],["/lib/jquery_lazyload/jquery.lazyload.js","728a360afdd631176ed529c4761fa4a8"],["/lib/jquery_lazyload/jquery.scrollstop.js","49ceef7250658d1e27acd3b26c7e3254"],["/lib/needsharebutton/font-embedded.css","851b5bfeb7943b6c5ac05224d901d13c"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","a8416bd7f65175599073384f407c44ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f32e96d6335e5eb6ea162b73a4ccf918"],["/lib/velocity/velocity.js","ab472fff72a270f8507a76254086ea7f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","366c4803ded403ae9700fae823291458"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","9e1064adfe9191d2492fc278130d941a"],["/links/index.html","9ab3c9be5a5fa03925da634a2cee00d2"],["/live2d-widget/README.html","d4588c6eb980f0980f126b330742dffb"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","2482ee6a4e4c27bd18b49b89231ec278"],["/live2d-widget/demo/demo1.html","7dba3fb9095f2d24b2b4398d436ffa8f"],["/live2d-widget/demo/demo2.html","b55c1b37f5f980082cba776e64bb3ebf"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","11de89a2f52a9f3a1243d8283cae06e4"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","e21f3bee4da08802e2b5fc0f6ef2b81d"],["/page/2/index.html","5d5679a85a74c0c92f6b6c9f67f7a7f5"],["/photos/default-skin/default-skin.css","0b794f3be4fce21dab35f4cb068df97c"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","0dfc62cde80ba964cc760eca8677a835"],["/photos/ins.css","c43262de624f2b5c7aec880b15debf46"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","77aa12aa3a8766c7f2588ec029e1d1c4"],["/posts/27514.html","e514e58b7598f5ba5251df4d4d8640a9"],["/posts/39d47c89.html","16babac1c4ba02a2ca978f1376a031b3"],["/posts/3e5a3bb6.html","d8aa3e1bdd09dc215b18f0c8ecdc4ff8"],["/posts/495d0b23.html","0016c0369cbab918910133a1bd51a589"],["/posts/61913369.html","2ce42cd0f4809bdbc803a9ecb56498ae"],["/posts/7fbe9500.html","b58f3f282b8f040c5184095078ba48ca"],["/posts/89ea6c8b.html","0e35e01faa842a8cdaf8df8f8fbc97b3"],["/posts/9c9b482b.html","fd6cad79059711451b6824064fd2fbc7"],["/posts/a7df3b40.html","4ff659dd928466bed6e455a3db8162bb"],["/posts/ab21860c.html","554cd1a8b5397c0804022b2c8e8e4e25"],["/posts/bf9eba42.html","9a3da82492e2d7b39b4a50ef2136d386"],["/posts/c1cdcf68.html","e09b646da8d1b3eb37e9ba20bae91fb2"],["/posts/c4782247.html","926f69961c2210acdfd9e6aa3cd3437c"],["/posts/c7631ec1.html","cf897ae853e7a36ad33b712aea88b8fb"],["/posts/d7399e80.html","8c29e1b4ad529567914fe6236beefa62"],["/posts/dff7e11c.html","a608515da3e13db21ed5924b6ed0f4fd"],["/posts/e1b9c6c5.html","2a72441b5256d659ff33cc497a83861d"],["/posts/f68f129b.html","73e5032afee16a41406cc29697b15f27"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","e51bf7db374684708639f6a826db42e6"],["/tags/Base64/index.html","0b0e002050e5e9a88dbef0837197c971"],["/tags/Coding/index.html","83fe193657e8cd9973b499162aedbf0e"],["/tags/Github/index.html","3c4db52a38abdc81960dc3ef7fa9d509"],["/tags/Gulp/index.html","d5ec3391ddf4d2160872d38de07ad550"],["/tags/Hexo/index.html","42c1c26ff956424bdb14fff09c41bcb1"],["/tags/Hexo/page/2/index.html","00de5128f482a176b5ef6ced61bac228"],["/tags/Java/index.html","68407570e173814e8fe74e0d0f92aab7"],["/tags/MD5/index.html","7aadc1e9930d99d0d8a554be1092fc6f"],["/tags/Neat/index.html","304f4f4ab719c2b9889b1b4509beccc3"],["/tags/Next/index.html","ead1d087ec82770cbd1e81e695da5b1a"],["/tags/Password/index.html","4bb3554641b7e1e882da25fb8d03a641"],["/tags/Photos/index.html","b09c11a39763121b3ff20294becb8c2b"],["/tags/SHA-1/index.html","92d013f2cadeb4effe95207dbe8becda"],["/tags/Security/index.html","90eb8eac89648171e0eb70909ba5b89a"],["/tags/TravisCI/index.html","53c7154a02938e3766c3e7645b618a4a"],["/tags/Valine/index.html","78847be85112bd2cafb42277b2c28b6b"],["/tags/index.html","1b019b8358386e0a8cf33de52c91d6bb"],["/tags/lazyload/index.html","65d3af1e34a00ec1e41c32645f41029a"],["/tags/代码块/index.html","1418eaf8e145d80904cc8e88f623dbc0"],["/tags/图片/index.html","2b6ba60e937577758344c947576de786"],["/top/index.html","b5daa78b7c0bdb46ccaf68cdab387a34"]];
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
