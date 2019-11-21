/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0e039e10a8561aea800d4f0294244d3f"],["/about/index.html","7af853626f3f867bb49c0c182e0414ab"],["/archives/2019/10/index.html","260f792133b452b556611b542e20d92b"],["/archives/2019/11/index.html","5312542c22d891cb8758444f1ad47d20"],["/archives/2019/index.html","f716442b4788205ec4c0b98eaf04d15d"],["/archives/2019/page/2/index.html","f546e01cba3b9ef9a635c5c2551a0b87"],["/archives/index.html","3dbdcede1608ac35a771943b9d3c217b"],["/archives/page/2/index.html","7e0d6ada640390c08325ab38ec436b47"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","049a8dd3efbef77f853eed0e53a42e4c"],["/categories/Hexo/index.html","a560f4c14d8506d8c4b5fcbcfd9477cf"],["/categories/Hexo/page/2/index.html","2596ba65ed23376049122811b6128802"],["/categories/Hexo/点击特效/index.html","5e6a7dd3d406f214d10bc6d7f0739b85"],["/categories/Hexo/豆瓣/index.html","ec7dab48b6101928e151cbca2139f94d"],["/categories/Java/Base64/index.html","955f5695d21b1d8ec00f040e39f483f9"],["/categories/Java/MD5/index.html","7c4170986ee311611580ad17a76c19b8"],["/categories/Java/index.html","5a5e49087d54d8ea4e720abee02e05ff"],["/categories/Valine/index.html","7cbf29bbbde77dfec114b206478dd62d"],["/categories/index.html","716ea59a3924c5154c2d5064ba60accf"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","be10cc30dd8b93d524e9c694d9ba3f46"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5b52d727ac852a38870538e2b0783f16"],["/games/index.html","f09d94f537ca2dde245142c8526a1e5e"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","f1f064b617cb255ff0efde8fab48570e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3d5bb8549c11c3f04a4688b2ea9fda5c"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2ff0b63ab632118febb9d6e72d122dd4"],["/js/src/algolia-search.js","d85d88e026b038d14d3d7979d147a96c"],["/js/src/bootstrap.js","a2fea9dbc4848ccec64a2b87017bc498"],["/js/src/bubble.js","5d6b54ca56387a459828de494801a1d4"],["/js/src/canvas-dance-time.js","92dc1af6c18c8b1ba6499531aca7d6a5"],["/js/src/clipboard-use.js","b7c3eae27c4b7346e562ce00b2dde58d"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","469722d187f4a0e512f28b961e122836"],["/js/src/exturl.js","b67af547103d08c0fe31fdcf567f508a"],["/js/src/hook-duoshuo.js","fa9340a1865b113e15bb11a9b4527238"],["/js/src/js.cookie.js","038db199176c54906db094e9285934f8"],["/js/src/linkcard.js","821a03ac8dc26def5c190da813273690"],["/js/src/motion.js","4dccc00582c7349410ae582046802828"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","c62eff779206cb5b40c5f3fe63085950"],["/js/src/schemes/pisces.js","c8409f16b4493875460d818604974f2e"],["/js/src/scroll-cookie.js","5aea75eb44c75d4c3f23dfe25d6e0e42"],["/js/src/scrollspy.js","2a32886865d88420de8d25d1a918e546"],["/js/src/utils.js","7fee9db092bb5e40a674bca8641a592b"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","573610009cdd32be5e45a910b14387c6"],["/lib/Han/dist/han.js","534e793b65c52009fad229a9bae3506b"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0de88b5337d511329611e1cc0b036cdb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a86dfa9d8e56319f7e8bc22a111c461f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9ea342ededc04b95b405a5123228af1a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4df3a8de14adc75bcc741ce366f51bd7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ea223480276f141ab678b65a2d22609d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7a81df9b57440d4b5cd7c516e56bf9c0"],["/lib/fancybox/source/jquery.fancybox.css","86bb0a4625b1e9e76c4c5207077529dd"],["/lib/fancybox/source/jquery.fancybox.js","8957d894291eb6e0c064bb270f45cb65"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","e7126e623ccfebff971ea4e941c79b9e"],["/lib/fastclick/lib/fastclick.js","818f84ee4f1f3a7aa2fa70ed22ecb875"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","20edc521d857c2df08e7a6008b2c47a3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","9a91dae8758679b94e6012eee77adfc7"],["/lib/jquery_lazyload/README.html","1ec3941a23237c2541ddfc37204d5517"],["/lib/jquery_lazyload/jquery.lazyload.js","2af4e02286a55920e1850d15b69d8a57"],["/lib/jquery_lazyload/jquery.scrollstop.js","2539c104d0f2dc070c2588471d51a7f2"],["/lib/needsharebutton/font-embedded.css","6996567b17e34fcf86cb5a8f3ba64631"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1721ea6cd2aa9a487c8ca9557c0c6c98"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","78fb2fb07001512f4658c87d8cb43d9c"],["/lib/velocity/velocity.js","5afb7d7cd0da51eb72ae2c11e4b16cd9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","56919b2a013089bc25c52048fdd78e67"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","e4d04182d910487f88dbc7f9347b9521"],["/links/index.html","67a384f05a5fecd580c75f127a9583b6"],["/live2d-widget/README.html","54941a81726f994f5d5f1624c06a97aa"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5bd2240237598faa2795b1c2b8d6caf5"],["/live2d-widget/demo/demo1.html","10c6a402861bb924e2dace0ace96c3ff"],["/live2d-widget/demo/demo2.html","3bc36f6dbcee8c8199a7f0dff4e06c6c"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","9f442b77e62ca4de6649d48ccf6ca522"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","a9ea77730c16d031696415ed03b50657"],["/page/2/index.html","b1604684d4481affa20208927a7d970c"],["/photos/default-skin/default-skin.css","ea218440828012f88aa732666a0d2e6b"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","e557534b1602593715c82ff97f6ea505"],["/photos/ins.css","da5815bc7da5bbbb02ba47cd9bb9acb0"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","61af889c1be91dc4cb6b57519e8c1154"],["/posts/27514.html","ca3177360277a537e865ad4a52f01c3b"],["/posts/39d47c89.html","0a89cd8af1323c9893f048ccd5331b23"],["/posts/3e5a3bb6.html","e799ae31cbdff28af2811d864b028529"],["/posts/495d0b23.html","c51e805bd31bcdfee11dbad1491465f7"],["/posts/61913369.html","1652ab18b1959cc07880d1a8e04018e2"],["/posts/7fbe9500.html","345b3c1d475588fdfdcc4beb0006eb72"],["/posts/89ea6c8b.html","f58bf18f5f187af3cd6c7823b76a3ad2"],["/posts/9c9b482b.html","4fdb3f7caa260e1058d1f2f224484cd5"],["/posts/a7df3b40.html","622b1488c3bdbc7cf7c7bc00acca5a29"],["/posts/ab21860c.html","82376be5759dd60885c9b8ec42bf9ad3"],["/posts/bf9eba42.html","30f79225f5843bb24f3a7dfd19fcb0b3"],["/posts/c1cdcf68.html","7640845bb6b7eb4ab3a7ed2c56fe9a87"],["/posts/c4782247.html","665c60665036ea041858ac3bb57cc049"],["/posts/c7631ec1.html","8561c6b32b83469832a72b3ae97a790e"],["/posts/d7399e80.html","8af5fcfe56500006c130fa05a547e21a"],["/posts/dff7e11c.html","8219feb7b75126f36201924783b7e1b9"],["/posts/e1b9c6c5.html","8f74e76ae06be9f18da99a103977d510"],["/posts/f68f129b.html","ffe87632a9537668374844ac6e804e24"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c044c10225832bd2572954742c88a148"],["/tags/Base64/index.html","886501bd1e7ce004d9650e250224d2c6"],["/tags/Coding/index.html","1ae42a94aed3c48721fabe5e8c1cfb47"],["/tags/Github/index.html","5272add5df32e3239363ff24553aa806"],["/tags/Gulp/index.html","66534c5521e1b72577468726ed223a1a"],["/tags/Hexo-Neat/index.html","ea1c4067f020f3d43e0e82441f29f601"],["/tags/Hexo/index.html","7dd75cfc3f1de3331151d3950d8ace7e"],["/tags/Hexo/page/2/index.html","032d16232ff15e006c1bbe27d5ba519a"],["/tags/Java/index.html","4fbde94b0247a1769fd81563f3785b1c"],["/tags/MD5/index.html","c516a9cb1d4a29a34183342ba4f90f3f"],["/tags/Next/index.html","3f5ba97bd890539bc079fd252934080e"],["/tags/Password/index.html","be4a8a66694a2f47cb156cc363fdb400"],["/tags/Photos/index.html","f7b3dcb3720bfdd47621a51aa552a26a"],["/tags/SHA-1/index.html","572d7c922d6db686fd26701dd8eff4f0"],["/tags/Security/index.html","f4f2acb1aa38059480bef3978f6b09c7"],["/tags/TravisCI/index.html","8a9a7db5a144886ad52b1dd14587a605"],["/tags/Valine/index.html","5455cbce43756e89f047d99114cf7503"],["/tags/index.html","36b5c2366577594a4c2d2267a7f9d0af"],["/tags/lazyload/index.html","3cba8c5f8657ebb6ea40a7261b52bc6a"],["/tags/代码块/index.html","52270645e5de529ae078780806350afd"],["/tags/图片/index.html","9d8e6839a2522874088283a2a385e319"],["/top/index.html","7d49e4b80d165399731f06e123748561"]];
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
