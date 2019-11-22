/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c351202e723494ea640c44a678ccc001"],["/about/index.html","86dc50ea7f56cb3c3e367fb9248bb150"],["/archives/2019/10/index.html","82d7d54c0387475406e1baca4d04122d"],["/archives/2019/11/index.html","b22116e43e3a3885a412b8e5a01e19f7"],["/archives/2019/index.html","20a344cf84a81b573434cff988f1d4ac"],["/archives/2019/page/2/index.html","f64a51784920bcf34b5476d7c4a3af6f"],["/archives/index.html","c4e7d2cc04214b9970dab6259768c01a"],["/archives/page/2/index.html","409147dd73da7135a1e69dbeed11838e"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","7e199a1c9113f05f6dd8bdfd2df479fd"],["/categories/Hexo/index.html","73e3ee924a66bc3c739965409c41e4c9"],["/categories/Hexo/page/2/index.html","16e8155aacb94f99c9f58228b6be33e5"],["/categories/Hexo/点击特效/index.html","8acfe1658ad8bb759c5fe1f87c88e644"],["/categories/Hexo/豆瓣/index.html","66dbe71889793a76e3b13f816e231ac2"],["/categories/Java/Base64/index.html","63f816126b5b1289111dd3e86ac7fba4"],["/categories/Java/MD5/index.html","326b2c0c2b1c81ac0258ab47d5eb68f6"],["/categories/Java/index.html","8abb9f0ffc4a05f4c9f259746d1ffc96"],["/categories/Valine/index.html","54865375e3d2953faf464dc7fbbd557e"],["/categories/index.html","2777c2f99f3facc06080331b7d5892f9"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","440af9b874b353a0c768605aadf5242a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","6960fbce85b9eadd3831b33769d1f668"],["/games/index.html","80ff8f9e5144e17dd469857af148a106"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","19b58530a0a5b9ece61a0c889ca5ac10"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ec5e8d041a4ac891fc27c44a1689ce96"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","f2ccccd58ff6805ee2a29cee88e8d1ca"],["/js/src/algolia-search.js","7c428d1509e9d70dd5c82b6c20aab594"],["/js/src/bootstrap.js","21266d2515e70f8290cafafc963eb73e"],["/js/src/bubble.js","9a43aa6a19a778306effa908373e4014"],["/js/src/canvas-dance-time.js","9cd1e6809a7710241e38b5b524b857a0"],["/js/src/clipboard-use.js","d8dbab9e20a460a2defc755b02125189"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","1f659d2e369bca9b5e5a81b43661c6a1"],["/js/src/exturl.js","bccf974bd2010af4725150b5eca9bb13"],["/js/src/hook-duoshuo.js","3fc90b5d04782a0c2050282090a60f4e"],["/js/src/js.cookie.js","2cc7dfaf2134a899fcafc76a626eaa93"],["/js/src/linkcard.js","b2c0d41ef66de0a9571bcbadcf923fca"],["/js/src/motion.js","38531d1b3630a46bcb179cb4d1b200ab"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","4355065c728fb0a32a358e1bc2a60e5e"],["/js/src/schemes/pisces.js","72dfb83772b9a1878559178db3171776"],["/js/src/scroll-cookie.js","a3fc483b49c3e41f3a60de3f14135053"],["/js/src/scrollspy.js","00e42002e7704bc1e84fd1705267fc4d"],["/js/src/utils.js","ade2120be3a76d045ecf5228dfeaa6db"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","68eeb251fc04308138a0065c98e1e134"],["/lib/Han/dist/han.js","b2400838d12a387caaaddbde9f4583ef"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","188386cb7a74eb6ebc855604ffc1fd93"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d4ee634add122c4e98b716fdc5030e42"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","52e94eb91597f171289686d0a918191c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","79c2883ffcec88793826c879aa225855"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","78998844aedd784bff420563ffea7b38"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","70ca802befc2c03a6d38e8517d42a383"],["/lib/fancybox/source/jquery.fancybox.css","507e45dfea4751fa8e5888aff67b38f0"],["/lib/fancybox/source/jquery.fancybox.js","a6076b626c159c33c5a88a780b25c070"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","772b8a22f4125bfb6698a874d048d97f"],["/lib/fastclick/lib/fastclick.js","f4a682518e8f30d79ee2bc532c3952ee"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","3aac2a50535946409cc98a9d6b31e455"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cba978dc30834af60a7d24d573f69e67"],["/lib/jquery_lazyload/README.html","e5926f6163f8d11617ee6305a3ca31f5"],["/lib/jquery_lazyload/jquery.lazyload.js","f79b868dfb684481af3cab4c705fbdf9"],["/lib/jquery_lazyload/jquery.scrollstop.js","824568c8868e65bb9c1428f33382026c"],["/lib/needsharebutton/font-embedded.css","2b742568a209f2bb6b5bf62ed7889690"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1089b11156c504d7ae31c745cb479124"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","eabf34afc2770c7305cce1ae890d67c3"],["/lib/velocity/velocity.js","565237ba1f16d57c886cee29e368fdf4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","b4658d33c25a2b6902be0582cc370614"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","fcf04803f4d89470e852dc063fe82773"],["/links/index.html","b1cbcda704f97ace7b65705666b15444"],["/live2d-widget/README.html","a8cbbc1bd9b50b136619e3d9e1d3ac53"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","67871ee346303d14acbc21a3a9256988"],["/live2d-widget/demo/demo1.html","2c6e3c6bfd617de7c8839c769e7baab4"],["/live2d-widget/demo/demo2.html","853268136e8ee79e2c7f3c420d34b932"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","01b995cc18cd44d2ab7b01856772fc34"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","987d88dd89bd4e1f92b27482975cbf09"],["/page/2/index.html","43bd3065ff593fa53459b6fe24018eec"],["/photos/default-skin/default-skin.css","19611c5aabe22cee191e08ef62f1a804"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","dda2eca5915ec0a9da18e80cab847e27"],["/photos/ins.css","b1aeb95e2dca8ec3e122d4c09fb97295"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","52fad314c05a7410f36b640352e4312a"],["/posts/27514.html","9f8f86e1e790137d4908b93359cad1cd"],["/posts/39d47c89.html","2f9a9c7905f98300816a075b4d20c4ab"],["/posts/3e5a3bb6.html","5587d35b6b1093e80ab6ad2317855b7f"],["/posts/495d0b23.html","058be9209dfec44f25290a93c2774ac0"],["/posts/61913369.html","527120c759ed91f76b27ea20e2fc6abf"],["/posts/7fbe9500.html","f0257d4b6f8fd558d643e1c537819f9c"],["/posts/89ea6c8b.html","8798d17279e0c95cef0f2e3f032b059a"],["/posts/9c9b482b.html","a2d10905953fdd1efcb0c177045e6a7e"],["/posts/a7df3b40.html","5519811329fc7bac5c751e8c601f9d12"],["/posts/ab21860c.html","590ec4da98896815b5c32dcd37a33771"],["/posts/bf9eba42.html","529211cf7aced241a97a68ab7cae834c"],["/posts/c1cdcf68.html","0f6b5c9b249ab7027b8c7c2df5ab4392"],["/posts/c4782247.html","43cda01ed710979e18f8648b2da1bc6a"],["/posts/c7631ec1.html","45c4912fdebf83b3f995d66a0acfc8df"],["/posts/d7399e80.html","e439f08713bdf7af9712f704beda87bf"],["/posts/dff7e11c.html","228bbb717d89d680ba8a007039a9e6e3"],["/posts/e1b9c6c5.html","aa94882733da484a9f3cbd697dccc2c5"],["/posts/f68f129b.html","fe2457a001cc29dead5074bee62d9925"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","ee5075941870324776754783052edfb9"],["/tags/Base64/index.html","de0dcca9b25260aab55bf9a9343477c3"],["/tags/Coding/index.html","1dd943c14197e51dfe0dbb739ff1e8ef"],["/tags/Github/index.html","446d0bae68e13e0ff2a9e2c385c63c86"],["/tags/Gulp/index.html","95e2bb4416e002e00b62f1bac23e383b"],["/tags/Hexo/index.html","d2240b5ec5dafabeb73aad9e1bfaa6ba"],["/tags/Hexo/page/2/index.html","a4569d80327309ce5bff5e1cadab4753"],["/tags/Java/index.html","012f3aadf571869332828c1208c45f29"],["/tags/MD5/index.html","3e0a827bde27401e4341995de4c9c87f"],["/tags/Neat/index.html","af96311272f07f0a35187747dca89b8d"],["/tags/Next/index.html","f6b60a0caf6c8ff622f76faed8905748"],["/tags/Password/index.html","0de829f2c0642e82c6a106689e040834"],["/tags/Photos/index.html","cf61f53aaa65c3e38e6c6f5a2eb4215d"],["/tags/SHA-1/index.html","15195430cd03f128a39424d6bbda7bce"],["/tags/Security/index.html","7e3f00d947481e13677f9143444c05ad"],["/tags/TravisCI/index.html","c425b9e3ec9d35c3e96094e338f8ed21"],["/tags/Valine/index.html","288cfac824f3809c98b2bfcb20ec7661"],["/tags/index.html","a686bba2208c386edb45240d80ac5db4"],["/tags/lazyload/index.html","5277bab1ad0bf42d433534752b704673"],["/tags/代码块/index.html","ced5f770ccd7d04d3de0ee61aae34791"],["/tags/图片/index.html","7b165f4697670e092a36a9d71434d877"],["/top/index.html","412aa9be61c3c357a5cc9352c297b8cb"]];
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
