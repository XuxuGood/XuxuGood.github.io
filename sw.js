/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3a5108c4cdb9dc510ea134de5ce145f3"],["/about/index.html","04a7e328c0477d873e1553a778f30936"],["/archives/2019/10/index.html","a2a228ef4ce1f295b4fa5075d7b73fea"],["/archives/2019/11/index.html","82244629ce7bd683a84a55770bdfd932"],["/archives/2019/index.html","8b80b9571c18dca73e8a25ed620ea2a3"],["/archives/2019/page/2/index.html","984adfb6895cc2936b2627e925fda7b9"],["/archives/index.html","b8c8eb798b83b6b584129d7119665b06"],["/archives/page/2/index.html","9ea745fb1b349d3ee651ed7142d89f8f"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0c08fc28400a8b5f38405fa3cfdc4116"],["/categories/Hexo/index.html","87e9eb4ed1f509e1a146c203f3809d55"],["/categories/Hexo/page/2/index.html","59f3768e208ba5b4acb59fdf079703b8"],["/categories/Hexo/点击特效/index.html","0f1e7a4671fbb4334a187130c8f493ac"],["/categories/Hexo/豆瓣/index.html","e9bf1a9c2483a72f3ed12b8a654d9bf4"],["/categories/Java/Base64/index.html","a5c2b54843df67510aef7f149c030a4d"],["/categories/Java/MD5/index.html","b20d511d6950e1c1e390b7288eeee131"],["/categories/Java/index.html","2ee72aa2d98249fc4f5e103f169a31d2"],["/categories/Valine/index.html","a64084bb9b8fd10e0b24518ad66b072f"],["/categories/index.html","ab7baba24a6c8eb7a6db8679317534fa"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","6bc73209131b990e5c977e75e3404c2c"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1b09500c257aaa7ea68e14c4cbe5eec9"],["/games/index.html","73a86464489f83efe865f3dc17ae6e4a"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","7513fbe9577cc98d25c12a30230277d7"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3061dbb53b41daad0020e06f98e2d6a5"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","e4ec4fad7b1df831bb59282a0e970a57"],["/js/src/algolia-search.js","732810b5b1bec1dacc3e55c4d0e8974c"],["/js/src/bootstrap.js","d10e2664d8710f05096081d6887f53bc"],["/js/src/bubble.js","9b87f682b3ab38cf951b4593f0821067"],["/js/src/canvas-dance-time.js","8dba6e9cfd2d2c0679ab7d7bcf22b7f4"],["/js/src/clipboard-use.js","5c9b651873a0a55df694f06e0885e02b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","752ba70598ea3f2962d6a74943a12a4f"],["/js/src/exturl.js","f4a856fc2a55aca8e8cd5df7882530f9"],["/js/src/hook-duoshuo.js","8fe9ed8f0890c08cfde30d425d886ab5"],["/js/src/js.cookie.js","7eb1e907601f9b0d8cdc37a97a31e97d"],["/js/src/linkcard.js","396f8e972440307ab87f97655dd5e1a8"],["/js/src/motion.js","b8316170a6eed688ee10e89d63974c01"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","78bae8b0a56b51f5966b76b68bd61db8"],["/js/src/schemes/pisces.js","adb05db1b00ee2e51f742fb56c60d78f"],["/js/src/scroll-cookie.js","35d5367d5957a0dcc4ca3b94f7bf8d34"],["/js/src/scrollspy.js","d8acb0dd7f7b0110afa82948bfd54bff"],["/js/src/utils.js","4c6714bcebd0e2e318b514ba24fc5cbc"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","8ef22216498251109887ba8be0e9889f"],["/lib/Han/dist/han.js","fe9c9d6812bf8fce7ccc6f26d3f4fda7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","34b12c24ef8f06a8876bd5637dd3dea6"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","05beed30b4246bac85c79e8fbacf2384"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3d066517eeb9bb87521646c173cbceb8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2294d75ba575122452c2073082d3c48a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","211a64e17f45fa38d8e634b3523d6c71"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","17fc9d3f08877d2d71a189d8a70894e5"],["/lib/fancybox/source/jquery.fancybox.css","c70871437463115127ac8224bc5656dd"],["/lib/fancybox/source/jquery.fancybox.js","f3107c12dc110cd6ba9d8fdd00bb30fa"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b25fa735c4bc478fb872cb1321602bdc"],["/lib/fastclick/lib/fastclick.js","fafc7bb56c8e2e63aaf180e5f3d55c71"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2a9aeffbb355714d3ff733374d109b98"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","ed562959eed5a6d31895ea546c4f2a0a"],["/lib/jquery_lazyload/README.html","8a25f8d9c92480eca2a2224ddae5ac10"],["/lib/jquery_lazyload/jquery.lazyload.js","9439c4939020a23c7a6ed5778a6e2456"],["/lib/jquery_lazyload/jquery.scrollstop.js","30b4010f1c8bb6ae832622ec2d355adb"],["/lib/needsharebutton/font-embedded.css","e9b06fa9cfc349bad919ffb3c04667ac"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","069336538920d06a5e4f2e431c01abad"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ee61c3c2008c1be43acc503ef03d0ecd"],["/lib/velocity/velocity.js","9b8c167b6c701ad9133a7a9e79e09cca"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","79dc09fef9ea282d540448f7f3fe2d9c"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","c6d67bee6f67b59aaeb87ad097ae093e"],["/links/index.html","d16e9f87fed3e8f9320093a19187a8a0"],["/live2d-widget/README.html","b10d24efd4be1bf92139e2d5eaba1c83"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","6a0a90c86da9ba53c1a97a55607c6916"],["/live2d-widget/demo/demo1.html","a8f0fe4b431e44e87fe4baeae773ff47"],["/live2d-widget/demo/demo2.html","bdd8e1705b84b99301af080e1a405e04"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","2117d2204c103d3a981c8ce01b4bd7ae"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","7ad64c3d89eee64e31789a62c5ca4ca6"],["/page/2/index.html","4efdd57ee431f070a124204b8e3296bb"],["/photos/default-skin/default-skin.css","707f2bc1ee8ba7c1c2e716bb0f0d0fb1"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","07d2a25de573eff1a39adc1277255269"],["/photos/ins.css","dfeb45665b6a168f42e46d68903b541a"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","094d6cdcc9b9f25e9b5972035cd4b3fe"],["/posts/27514.html","2acb273cd8c1e61e4f5a7548cf6f7b49"],["/posts/39d47c89.html","ba255573d4607a4f677a83a2804b8743"],["/posts/3e5a3bb6.html","10b57633a82c731f12c40e17ff3b7132"],["/posts/495d0b23.html","644b5f9545d080543b8e3fb10e8ef664"],["/posts/61913369.html","4a341b4672f50528ddd545d30a7d21ee"],["/posts/7fbe9500.html","b48e5b5da988fc2a914b9090e0f50ff7"],["/posts/89ea6c8b.html","e89f84d072fe37ab797d6d892e065aa0"],["/posts/9c9b482b.html","2db8d3098e0b01beb44c50e19c494ca5"],["/posts/a7df3b40.html","63ca095c0a42df2c2d5b9b7662c1189d"],["/posts/ab21860c.html","78f2512ce1bca0b808f18b8ecb7751c4"],["/posts/bf9eba42.html","c82b95c33cf0cfb2ba8401a819a21a22"],["/posts/c1cdcf68.html","216a82e209b8c01cac109a1906a2954b"],["/posts/c4782247.html","875a79b311bdb39bc8d3401f1112483f"],["/posts/c7631ec1.html","a09d0b811fe66c79aea499177a190c90"],["/posts/d7399e80.html","11d5020b184fc39cdec84e529c70cceb"],["/posts/dff7e11c.html","e9a954077e888c76bf38117dfd8aac4f"],["/posts/e1b9c6c5.html","8007593c0892c4545138603d9335b837"],["/posts/f68f129b.html","c5eeefc8aaa56b2710a9205cfcc103f9"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","2c1a507d07cf88c34d6a0ff469fb5bd1"],["/tags/Base64/index.html","54ace221eac3bb21a76edc89cbe30554"],["/tags/Coding/index.html","47fb58d2955f3490e0b9adc4b98d8a89"],["/tags/Github/index.html","1fd8034c202cbdd5ed0ffce23c3a79d4"],["/tags/Gulp/index.html","8b24de81df3f26c4b6d86ea9b09ee109"],["/tags/Hexo-Neat/index.html","4312fa5e0d1516ee7f6c9295934d8aa3"],["/tags/Hexo/index.html","cc181bca9b1a5057984de3290ab32197"],["/tags/Hexo/page/2/index.html","9125603c2ef65f259a844b78484efb3d"],["/tags/Java/index.html","f512447b1bf0f54475ae7741fe6d50fc"],["/tags/MD5/index.html","83818f15d7390165d79ffab96da16ca2"],["/tags/Next/index.html","a79b343fb99f7e97ca293c05fcb6cb41"],["/tags/Password/index.html","a1675af6f9e48a7b4a03d170fc141dbf"],["/tags/Photos/index.html","3c181323496d6f61085faa5e43229cae"],["/tags/SHA-1/index.html","615d3580fd3c5118721223feb6bdd60c"],["/tags/Security/index.html","dd58490c41d2c476b855b17dca6b24fe"],["/tags/TravisCI/index.html","0892746dd56e61aa1fe18fe049c1cd80"],["/tags/Valine/index.html","ed73a3f59b1754dfb36363cd6f0bef0b"],["/tags/index.html","5138e9b7016204b101b9c40d2591b6ed"],["/tags/lazyload/index.html","44df7354877d7f0ccc75b1829d8e92c2"],["/tags/代码块/index.html","afdc3b436fdc13988e464f1921221611"],["/tags/图片/index.html","23c2ac676e71560d02322a0e9e4fc60c"],["/top/index.html","be3f58f70909007dd6570765e215a771"]];
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
