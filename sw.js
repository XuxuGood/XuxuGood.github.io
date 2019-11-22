/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","04bd69feecc33685fa54c5f0523352f1"],["/about/index.html","bec527b3a9481bd4a965aa02dbeb1b4b"],["/archives/2019/10/index.html","b63c2ccbeb82911dc9caa4e8b1b14dd9"],["/archives/2019/11/index.html","3f1fba09dc24f47ab687ed902957de0d"],["/archives/2019/index.html","0064cee8c1cd5853288dfc6e64b9fd40"],["/archives/2019/page/2/index.html","596332bb6c2f2fa2365bdabb007641a7"],["/archives/index.html","3745d8dd7ecc162a38508c21b9b93a01"],["/archives/page/2/index.html","7d1e267abd741538270d816f2480e69b"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0702de70aa610cc6bf21cf3f0f0ebbd5"],["/categories/Hexo/index.html","ba024046004b69578410731a34d1b416"],["/categories/Hexo/page/2/index.html","638507e6f7330962ff195544db8022b3"],["/categories/Hexo/点击特效/index.html","3116ce91c3bcf8a0ff5671247ebecfa4"],["/categories/Hexo/豆瓣/index.html","12b99bf58254ee8b1e606e0c24af5c44"],["/categories/Java/Base64/index.html","886873f09c925e153b7525e3cb0d3b10"],["/categories/Java/MD5/index.html","dd0b06b312e3a0fa12645b051f79c3b0"],["/categories/Java/index.html","ece974b695732f5817f240786c097d76"],["/categories/Valine/index.html","8c4464dbea252a35f4b1fd5b982259a8"],["/categories/index.html","11f4ac52ce6cbb11452c81d516f5dd43"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","50cfeb481c7300ef22cdfa5b56c34841"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","88d44fd57fa67c28ac0050bdb17392cd"],["/games/index.html","8afe09dc2cfe193ee233b459aed58e59"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","bc0f3ad7a77da9d916b6bea1c46db34c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","54e46577e8b4a6e058042c0c799a3b76"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","49c85c3129949d0db1438ef7b50f4ed1"],["/js/src/algolia-search.js","b94284a285ec11ad2eb4d9140e36dd74"],["/js/src/bootstrap.js","d4003d4c7134d7d3dc664419c6dc2871"],["/js/src/bubble.js","8bd628e5c100bfdaf1af1baeea1cca8f"],["/js/src/canvas-dance-time.js","d8b4b6365d4468122dffb82102182175"],["/js/src/clipboard-use.js","3e47649f24b5003a736e2c68042e11d6"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9fe863c2ca85e35f9926b578891d4da"],["/js/src/exturl.js","dac7bb30d51ae5db676b743e851bf1e0"],["/js/src/hook-duoshuo.js","a618f8f1f3e0bd81b7d707fa61514993"],["/js/src/js.cookie.js","54fca8d0d17ef70368d4b85072cb24c1"],["/js/src/linkcard.js","59de59c6bc18393523281213e373220c"],["/js/src/motion.js","b837d6ff8e630a91df770feac7679725"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","7827a8100ef00845fef75570830b5b5a"],["/js/src/schemes/pisces.js","2f2473d060afeb7a18c83e1db07cf4fd"],["/js/src/scroll-cookie.js","6de92f2fd55d9365d51380722218fad2"],["/js/src/scrollspy.js","07c03b0680e1243d30635f920aaa8578"],["/js/src/utils.js","1ff3f096f2c1523f6c18b1c0c614dc23"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","76f5f39ca9e28729dbf706002e876cf9"],["/lib/Han/dist/han.js","c0ddc2ea49814fe161080e95b32d8a65"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8dd89721a11ee7a1da883ee4c5187aba"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c8f5f029dacb75b40fe57132fcbc1add"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2356922491aea0ff7c20bc540faf581d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","36de050c6ce2ada9bcf872c5f6a7c6a5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3f94eaca144a6bcc3f292d625546f74f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c568612ed6ffad7d35e1948ed4a4792b"],["/lib/fancybox/source/jquery.fancybox.css","44fe98fa7a6f2eba961dcf78dc781205"],["/lib/fancybox/source/jquery.fancybox.js","4fa3741deeb56f64de7d8a051671ad44"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","67a26636ccbdb221c69f900a85c8ac28"],["/lib/fastclick/lib/fastclick.js","1b1cf4bb69d8714f22f1d9315a61b70a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","1b13bfb50d9d203800cdb9759425e535"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2374fa7fa7db9c462dc077c1af0a222a"],["/lib/jquery_lazyload/README.html","991a399d5622aaef14287bc7b76fd3e0"],["/lib/jquery_lazyload/jquery.lazyload.js","841010201c0021a9efebc43b1e91f920"],["/lib/jquery_lazyload/jquery.scrollstop.js","cd12549dabed7c138cefabce47a6dc0b"],["/lib/needsharebutton/font-embedded.css","07510f22da816f0b7d2559283861495e"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","f96d87b4fbbfd18c376f97e16b4ed571"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b968531532d0cb429acb34389770144e"],["/lib/velocity/velocity.js","017035c24a7edf49fd3e125b43ae3a77"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","b0daa5426373a804947da8e46f5438f5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","798c1af4b473a716374f780e0914c804"],["/links/index.html","72aaac1e3384079e9a592dbbc915addc"],["/live2d-widget/README.html","2e66f9994a60a7d00c3e56b8d96d0d4a"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","b30f828361fe009bff8c36ffd6c35d61"],["/live2d-widget/demo/demo1.html","60e98ff1edcac2dbba726f1ab10ea5a0"],["/live2d-widget/demo/demo2.html","191468d5c78a088d7cfa72dd0a3669f6"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","51e286d4c22444e083f68586c7821a88"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","f2b9289ee89a284e5eee4314ae838822"],["/page/2/index.html","d14ab95ef9c86f09dbd5f6b4e0d78ab8"],["/photos/default-skin/default-skin.css","cb42f2743837e138c0a4d42d4b0d6b22"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","a8e982436d6636d53d8faa355e943106"],["/photos/ins.css","9990acc41f6deabeb3467909a84cf4fe"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","32835cb052451030e8a886ba2a4b2a83"],["/posts/27514.html","18e5dd4e031f932f150ed4de4e82f384"],["/posts/39d47c89.html","f6899072b5cb92d9895f83c454ba19fb"],["/posts/3e5a3bb6.html","800b46a4b8dd8a494d09d811b5475585"],["/posts/495d0b23.html","656dba6315fcf66a999e86d68ca63521"],["/posts/61913369.html","2fb5ddb158085735bca39cf8c1056643"],["/posts/7fbe9500.html","09f7ff004c7df09f0267db21696c3644"],["/posts/89ea6c8b.html","e073540f357dcdee5bc136fedd2e5e83"],["/posts/9c9b482b.html","cfb6189a789f0eecff4a17f8293b10fb"],["/posts/a7df3b40.html","dd22ec18e3b3ebd8345bb97a07addc53"],["/posts/ab21860c.html","28606d4dd5871c83c8f122090387f9f7"],["/posts/bf9eba42.html","266e9595092ac64950fa31d7c19cc997"],["/posts/c1cdcf68.html","5173853d3adedf585583b80272db7571"],["/posts/c4782247.html","56445fea9181e7639ef950f8c659e9f4"],["/posts/c7631ec1.html","d1a11fa79edc111ffad5cd487f0430b8"],["/posts/d7399e80.html","75d66c55732f5acc90e0bc47d120a868"],["/posts/dff7e11c.html","4a27e984c418e61444dbeb26a4310c06"],["/posts/e1b9c6c5.html","ec83779baa4304cf0df8f38f9b5701b4"],["/posts/f68f129b.html","910863c6702ea1da64d978cdda5eade9"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","1596baa9a66687421bad7e021db3c6cd"],["/tags/Base64/index.html","8f7bd9ca96f57b86a9fcee62286eed92"],["/tags/Coding/index.html","6a4c9e42beb0315322da794f8a66b6d3"],["/tags/Github/index.html","a098d729592285d1d2c764f2c1507766"],["/tags/Gulp/index.html","22638577c2be9d530ea6992d7248d251"],["/tags/Hexo-Neat/index.html","5faafa7a78b9520052077bda63074c72"],["/tags/Hexo/index.html","e18e42d7df86825aa2c9b5651c1f0f01"],["/tags/Hexo/page/2/index.html","2244306c33230446e5073714aa12d5ad"],["/tags/Java/index.html","93f16e12e66b122457c8c322e05ec0ef"],["/tags/MD5/index.html","09f915732b76ca9ddc5efd30c6f1f04f"],["/tags/Next/index.html","69516e76d4fbe8b67f0910e71176239a"],["/tags/Password/index.html","43d7d591972bcb50b2be545a99698b30"],["/tags/Photos/index.html","0eb06b69a126a92e8a705dca1a592bb4"],["/tags/SHA-1/index.html","b997f3c7ce37122069fef50c8d823b53"],["/tags/Security/index.html","14bb32ce857022f08765edbdb2ecfe69"],["/tags/TravisCI/index.html","7a4376ae8e42298b79aad7c92eeeeae8"],["/tags/Valine/index.html","9dc6cd7b01531d40d4ce0b0228a5a877"],["/tags/index.html","19997734c573118558995e1c22cd00b0"],["/tags/lazyload/index.html","e23290c67b881e54dfe1f45b60232c93"],["/tags/代码块/index.html","87042b46ebc9b96254ac1ab7fa4c1f08"],["/tags/图片/index.html","ea045ecc894bb02128e61a7dcda226dc"],["/top/index.html","7913dfb8716e87bc3227df42a4f542ee"]];
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
