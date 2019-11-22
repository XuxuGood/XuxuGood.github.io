/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e768e0821d5f126bff5ef73af076b6bd"],["/about/index.html","0d57bb42f7ffef182c9e982b6dc534a9"],["/archives/2019/10/index.html","dd0926dc721a1c3674c51e1d89bad16d"],["/archives/2019/11/index.html","1676d8b5f9dee9f9233aece69c842090"],["/archives/2019/index.html","3fe820cfeb9543bb39bb7f926265453b"],["/archives/2019/page/2/index.html","c5c962d87e4cc62d49909885bc644272"],["/archives/index.html","8cd6bdb4205c6bb1fafaac362f1697e2"],["/archives/page/2/index.html","db9278ff37f147b802d4603084167657"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","23bdb5660fb3932d37a60beade469fe3"],["/categories/Hexo/index.html","6fc9e1727f5f779dfc103d8ab9a740e3"],["/categories/Hexo/page/2/index.html","798745f9f79b917a3d6ac8510c20bc0f"],["/categories/Hexo/点击特效/index.html","d847034d53e052f37fdebc67093333c5"],["/categories/Hexo/豆瓣/index.html","aa076a88ccf06f6df6064b2279e9f569"],["/categories/Java/Base64/index.html","77d8e8fc429e9a6c48ac5e475ce0e74e"],["/categories/Java/MD5/index.html","4c1f3ab4e2847fd9a3713441d8a2d8d0"],["/categories/Java/index.html","c12927a4a47694698170f3cb0953b53d"],["/categories/Valine/index.html","97afd66bb1d0bdbbca6177d0da0f1ef8"],["/categories/index.html","7aa7904f128f0c32ac41b4a3bb80e26e"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","a2d52732c50f0dff6c9729507f1424c1"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","c5f064f031d32836330928296033c6fd"],["/games/index.html","8fbb230e2d4a0a2a7cb9069195db8a81"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","9a166bf107032e2fe281ccf51f75592e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","884452a241ac4677f5532a28db69f327"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","4cc25bdf28253eefb2fa038687a14099"],["/js/src/algolia-search.js","39f1542f52df0f91af63da33a7ddacfb"],["/js/src/bootstrap.js","3faf41e72d9864b17a0f5b161b9d2d45"],["/js/src/bubble.js","3ba1d5cbe93ae1bd456687b9e80ebbd6"],["/js/src/canvas-dance-time.js","712deb200d3a1ab454f7ce7ea8602e0e"],["/js/src/clipboard-use.js","833a1274e386b0bd623944a78d12d9d1"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","524430b3387dad1dbce5347a1d9db8af"],["/js/src/exturl.js","ecc8d99ac3025a4039bc6cabcaf616d6"],["/js/src/hook-duoshuo.js","2bc78345dbe81e8976ca062abc62f1a8"],["/js/src/js.cookie.js","ef7a7b97439f4815e4a78931292e7395"],["/js/src/linkcard.js","584e878c1756141e6d84bb859ec2f90f"],["/js/src/motion.js","b0954032aa221f14fb0529acd08b13dc"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","0577ac9ed427ee1198ada2e215387c68"],["/js/src/schemes/pisces.js","911b86665c36241fcca48045d03687f1"],["/js/src/scroll-cookie.js","2c1a8577c94f6f87f31cf38e43e01a31"],["/js/src/scrollspy.js","e92d1a7ff614748fdd81edec86725d59"],["/js/src/utils.js","b8d71866ba47d9d99bb69fcc304871a1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2dfc50bf7e8363a06177eb9d2d28681d"],["/lib/Han/dist/han.js","2faa2932d24792865d9104a357b5e98c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","10302af38a6554c92296c123f869e018"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f14c8ea69cef4ce3bf4d65aeaae25d78"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ff2f6a439bad724751dbc9f02a85d1a3"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0c49465fadeaf1cc28d18b3119be5da7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2da183748442959fb0fd85ebaea6a4ac"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","aaf1bf23fa23530913a1236b27884696"],["/lib/fancybox/source/jquery.fancybox.css","8c0f89d67130c5c3631eef7fcc4c4b73"],["/lib/fancybox/source/jquery.fancybox.js","af69bba20e23ec5af190672700347a49"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","89bf3e993a801617ab9e5aa6e5dc53b6"],["/lib/fastclick/lib/fastclick.js","7d0453bba47cf0abbcc1cd088dbc6858"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5019461d0732779ecb69386ce3d58878"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b723ea37ecf9f717e2b204bbd153f059"],["/lib/jquery_lazyload/README.html","decdae4dddb6310a4e4587eceb581c8f"],["/lib/jquery_lazyload/jquery.lazyload.js","738474bc8b159c4d2e66394bb0189793"],["/lib/jquery_lazyload/jquery.scrollstop.js","20fcc004d92acaf4e52c098f87908654"],["/lib/needsharebutton/font-embedded.css","231c49627170ef6b139198f3d42e00bf"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","28333a5495505030539be1c801a1fd2a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","3ce14df6787567739fd8670c17446e89"],["/lib/velocity/velocity.js","cf6d35ab38cb6b5f82fbf9a4f450bec8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","eba6d2de7a36ea83c6b273913d5bf804"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","a52e3356884f92304bee4098e3331dcc"],["/links/index.html","a12ed5b3b9b3eef118427dc34dfd6805"],["/live2d-widget/README.html","2ad560f4183fc578cb886e1eb4ad92f4"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","e9f10894d77a77b8705251d0883a7314"],["/live2d-widget/demo/demo1.html","ca0ef21193db50d93227179b533cad5b"],["/live2d-widget/demo/demo2.html","f6e10010f9516eb84d5f0e5bad8c45d1"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","7f43b8c6361a70eb6c338070690eb634"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","e1359a601833a46ebe41718edb3e213f"],["/page/2/index.html","c3f268a31c63e2ea706d23e0b8f46bbf"],["/photos/default-skin/default-skin.css","452e7c6038ccabe24ee1e861b3bb042a"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","734413a2de4a41fbe2441bf07b68d773"],["/photos/ins.css","25080fc8cb745c8811afa714c28025dc"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","0d2189cc7c14dca61ba92dcc625f20f5"],["/posts/27514.html","b85bc494a2f461be1eae7cd4e1242a99"],["/posts/39d47c89.html","ba09d7d7f262dd18d6de9d2e9adc8ecd"],["/posts/3e5a3bb6.html","fe5dd23f4a4aa9c647bd334587e7247a"],["/posts/495d0b23.html","877e345026350501c816a74590732249"],["/posts/61913369.html","579df81e6fd4b1748c21b7362c61689e"],["/posts/7fbe9500.html","f1f98720483e4a2e35bcbbe100363def"],["/posts/89ea6c8b.html","b7e1f087fc33fc573aeb96beaeeb5724"],["/posts/9c9b482b.html","4f3c458d3ff00bd79f7b182828b19a1f"],["/posts/a7df3b40.html","340c3262db583cc9db68fa2dc9e87691"],["/posts/ab21860c.html","752e1ed59adba04c3303c847825f706c"],["/posts/bf9eba42.html","f9712508a7907ffc3f6dc30ec9b4864a"],["/posts/c1cdcf68.html","e16737e8a12a38985faf3f256a3ff568"],["/posts/c4782247.html","a985a3174e8e99b6ab399ee845921547"],["/posts/c7631ec1.html","de0abbab5ed4c6d50e7926cf6c314c5b"],["/posts/d7399e80.html","0949a13b73f4bd0f6adb28763d5b7be5"],["/posts/dff7e11c.html","07476e8ea615a3f30d75205a26b88877"],["/posts/e1b9c6c5.html","54ddb51480a2e686a61e0b48f1b7dd27"],["/posts/f68f129b.html","0e7c27f6439cd85a04897454edfcb504"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","fa195b1d2b8b5fc7f223ed1ca3c82f68"],["/tags/Base64/index.html","b05349291068cfc4e1ab193c3a414a80"],["/tags/Coding/index.html","18bfe1b7c0abad3cedd950a740a30ecd"],["/tags/Github/index.html","dbda3ba6d1e7c4591416610395d2dcb8"],["/tags/Gulp/index.html","13c11e17492ec9c3ff3d3a2ddeaf619b"],["/tags/Hexo/index.html","a47c892a19cfa6cd91bc6b9f3d663bf5"],["/tags/Hexo/page/2/index.html","2fa74d14ce89e0640e71c6254d60f7cc"],["/tags/Java/index.html","2c2a99b898b6d5ff5d50073e6990a252"],["/tags/MD5/index.html","e068ca62c1d42354c54a68eee94a35e0"],["/tags/Neat/index.html","cc28ed5c2f77ac1abfbc2d6d49a44f8a"],["/tags/Next/index.html","3a17fb1f979a2f401715d4c961601dc9"],["/tags/Password/index.html","200f90c2e7db126bdaa922aa8c537635"],["/tags/Photos/index.html","8044b996cf821795148cd42d9102dddf"],["/tags/SHA-1/index.html","f2cf6e9c67abb7fc317a61fe7a26715f"],["/tags/Security/index.html","52eb8930a0baac57ac0cc440c86746f4"],["/tags/TravisCI/index.html","4377c8e912ed89c84ab2f5a968e35681"],["/tags/Valine/index.html","c4ce2a9c9599d77313cc204438c0c543"],["/tags/index.html","663b903455ba0e998a473f040735a3c6"],["/tags/lazyload/index.html","df73e3705993d10ca62042c37a128ab3"],["/tags/代码块/index.html","8e53cb8da369841cf94b4baf42e7e3ef"],["/tags/图片/index.html","ef7691d113fbef705df21806c1f13d09"],["/top/index.html","9145e5b8f705622408b7d228d99b916f"]];
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
