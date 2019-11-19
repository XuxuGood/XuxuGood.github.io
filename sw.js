/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","09d4725dd7b50817c071e4c22ef1e5de"],["/about/index.html","f463e9df684751cedfb11a66d5bbb213"],["/archives/2019/10/index.html","39de2d5060b0d4ec036d52d64cbe3233"],["/archives/2019/11/index.html","c72bb9d4f334083f23e5267fae71702e"],["/archives/2019/index.html","0b20f4a1f256c9e776f71670be890c34"],["/archives/2019/page/2/index.html","19432ff0a817d60e5fd3b281c2ac5bb8"],["/archives/index.html","6f59be5b1fa8319246fdcda1ccd8a541"],["/archives/page/2/index.html","19064ec534efaa96e5d998cf4d670750"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","4f9f01e6c906193a9a9ef1bdb39139f0"],["/categories/Hexo/index.html","58182edd3d08a0c16cb67498252ee739"],["/categories/Hexo/page/2/index.html","4a3aef482424470cdb22403a585563de"],["/categories/Hexo/点击特效/index.html","904b0d52de6e1cdf4fe94ffdd799d93d"],["/categories/Hexo/豆瓣/index.html","31368e0678f6bd8f81223e0a2477e881"],["/categories/Java/Base64/index.html","7a0f01fb97a4623275d356aa78c56d5c"],["/categories/Java/MD5/index.html","7ff90a279130d70936fdbd6ea8729de5"],["/categories/Java/index.html","18eb598276ef4b7882bee83717f15cea"],["/categories/Valine/index.html","925bbb1de28912a4f0a290cae3306e94"],["/categories/index.html","950bc3a6f5929360e2881245262966ba"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","c0f7d4dfaed5ff31827398cd7452d5d8"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","862bfe878fcdb78365fbf322c44b72dd"],["/games/index.html","a80d1b2f2daa3b0929ad9df6161ab56e"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","da75a9b544ebf68ea4ace4abc96bd18e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","c04526a6374d0e2ea0c6afd0f94e9ed2"],["/js/src/Valine.min.js","c99510cad1c105aebc49d4d829669e22"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","fb1c7fc479b3b820813a3ecc2de5dfcd"],["/js/src/algolia-search.js","d9ba52c948d7b52e6bcf67a0a83a42a6"],["/js/src/bootstrap.js","8967d9a6c968289bab07616d8363605b"],["/js/src/bubble.js","f009b59ee3d8224b9037c06c11d5b153"],["/js/src/canvas-dance-time.js","8c41147f8b6f60f6ae8a22cf97e52f63"],["/js/src/clipboard-use.js","089ff1df092b397bc3e2a75cd5da0db2"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","b7f3a4190981d1e46a65361861c75769"],["/js/src/exturl.js","d4d23046a6a609602048a02054c6ea05"],["/js/src/hook-duoshuo.js","a3eccabd139cfddeec219b7b28bb24f7"],["/js/src/js.cookie.js","06ae47e43bb5756bb0d140b1ca6f0162"],["/js/src/linkcard.js","9f152bd70a4194e2f9b7a724e15fbe62"],["/js/src/motion.js","f51626436bd3809ad57c3e72474c8a81"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","79d4bc028e2c64b374f406ecc43ae262"],["/js/src/schemes/pisces.js","2bef3295ac583072ed55b0199c1c5e5e"],["/js/src/scroll-cookie.js","848b4cc248bde3f11adc9a7e4108c7ed"],["/js/src/scrollspy.js","96a136f94c4f65cdf34931aaac252c73"],["/js/src/utils.js","084f83bf60118c54d91c954bd8a1475a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","528631e53313346988917dac1acb243d"],["/lib/Han/dist/han.js","8adaebce2f60388e526e0e66fd634ea5"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c59fadd9283b8e78be587ce931ad64a9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cf7c3825654b733f390b28c16e4570e3"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e15f586c77bc98ca68e1d112952b340a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e091607e72fc1cd2c03651bacc5069a7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d487e6196a8f1f241490aa0de47ccb87"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a48d11e7443561b3fa73ee8a8c20001e"],["/lib/fancybox/source/jquery.fancybox.css","5706725854b7e9e0f60b40c9ad15d11f"],["/lib/fancybox/source/jquery.fancybox.js","3bba5fe69a6fc4213fcbe5493e580436"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","fb5a1ee9eda042a863e24dc921257083"],["/lib/fastclick/lib/fastclick.js","a2dde712f52804561be2b551a1166813"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","4c8e567b5f5e0759dce96209679b83c9"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","320c1bfdc06e30873180785d5bf144a9"],["/lib/jquery_lazyload/README.html","cc303fdf51c813540ae2ae059cbbe1f0"],["/lib/jquery_lazyload/jquery.lazyload.js","c9d4f00ad79512ac864197fcd78ea748"],["/lib/jquery_lazyload/jquery.scrollstop.js","447f04fba5347dab46c7c641c333486c"],["/lib/needsharebutton/font-embedded.css","aa8d5bd0a08d0eb014b653bda0e69f30"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","907aa257a46e207eaa29160ba5137735"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","3eae69c41337845c83bfb0cef6d31610"],["/lib/velocity/velocity.js","ab66bad7a351627f5668b4bd365e87c4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","edb6f8a5fc7f1941f5d4fb6be3cd9fa7"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","79634b1976747429bd1f1a2635711a3b"],["/links/index.html","8be283c0bf459851522e75e650b7d145"],["/live2d-widget/README.html","28db4972bf17f12cfc04e7fab17b52af"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","101bf34b6e81e5ae3529097a9c8ceb2c"],["/live2d-widget/demo/demo1.html","40bfc0af760aee1216fa48ec86603100"],["/live2d-widget/demo/demo2.html","b774e5d1b2e95e2539ef37a6eebdbdba"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","047ca6bb4759fb6d72a771f76a4b74a2"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","f41c175a1bc167e8ac61e229c2081e7e"],["/page/2/index.html","2036369a90489edecf23e4da76375f2c"],["/photos/default-skin/default-skin.css","79245bf467ef2b9e61b292dc8ab94fa2"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","cb0079e98f0df90afae976ebf609201a"],["/photos/ins.css","3ea5ee29a985183eab263e1d17373d52"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","2401ad9f163f41bdad9917b86a8d6ae8"],["/posts/27514.html","44dc3774d2ecba605363f5e5e0728cdf"],["/posts/39d47c89.html","98cb9ce90ef58799432615f4e644f729"],["/posts/3e5a3bb6.html","3229f0e22a2791ef76ec7a5da2e43ba6"],["/posts/495d0b23.html","da993d5ccd7a267d6d24cb6ff6db132a"],["/posts/61913369.html","60f05df680dd84b83efad0a62e9c9e36"],["/posts/7fbe9500.html","fe09ee19d6c58f9cc37178294af9e538"],["/posts/89ea6c8b.html","e66b1b9c17b1b1dc22fab0f6230ffffd"],["/posts/9c9b482b.html","90466d6216ef690571451e8843938793"],["/posts/a7df3b40.html","87fc694ac21a0e2729a5f22c42e51897"],["/posts/ab21860c.html","dceff90a4f4b80a2da2f23f8c1f9e8a8"],["/posts/bf9eba42.html","d5c429df0c099296be7d182d1f3bada4"],["/posts/c1cdcf68.html","2046767ffc88c4217c44d355af892030"],["/posts/c4782247.html","63d086843904dff2191c76e8db685590"],["/posts/c7631ec1.html","d12a1820b5906d2b79fd95656c63d553"],["/posts/d7399e80.html","c9146e1741b4073ce2f4da60ecde6706"],["/posts/dff7e11c.html","428d248d89b45ec8d0ab73b6e2ecc4f0"],["/posts/e1b9c6c5.html","c41a211725a4c4ee379ef2c256a565af"],["/posts/f68f129b.html","d93a26b5b47234f3681798dcf3a00d97"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","22407947b9a7b97c958c062d8ef2e3f3"],["/tags/Base64/index.html","120cc26aad3dbb47a6ed84939f983a82"],["/tags/Coding/index.html","7f2fdcb209b7fd1743cd74025ba8ec33"],["/tags/Github/index.html","222407d356c7fdc7877b7e05659c7bf7"],["/tags/Gulp/index.html","63f51efa5bbe59e67a1e83f8b3ff1f97"],["/tags/Hexo-Neat/index.html","dfb73d791ea579f76ed1414a0a7805df"],["/tags/Hexo/index.html","44f0380b7a2bec9bae3dfc3fa9fe28db"],["/tags/Hexo/page/2/index.html","9961c3e3a26ff14096ae43230f05db02"],["/tags/Java/index.html","cd3634a0437e0049eba65764484fb698"],["/tags/MD5/index.html","afff24f44c8d51809ca5f283c38644df"],["/tags/Next/index.html","3d99036d452aaafac71ec725a062081d"],["/tags/Password/index.html","0a44dd2e467e8aa2f39397cc83deb9b5"],["/tags/Photos/index.html","a3078856cff95ce6018fccc5d4a52896"],["/tags/SHA-1/index.html","e1a9d5dd2a8866c2210630532a3c875b"],["/tags/Security/index.html","802640224985654e670cc22008cb80e9"],["/tags/TravisCI/index.html","4729349c9b6b824ed83511aaeafc5f84"],["/tags/Valine/index.html","4fbd899a8e338c4dddf46febce69616f"],["/tags/index.html","8e9dae2d27b912e5621cefa1e0def70b"],["/tags/lazyload/index.html","891eb9a4b80ff1a4ca5fccaa70fc5b67"],["/tags/代码块/index.html","24eabfc9f6aa1fdc10e8ea0b0018528d"],["/tags/图片/index.html","a622ab6c032f79e80782c718372ad5df"],["/top/index.html","1af55eaa87f47588f36db49097fc0098"]];
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
