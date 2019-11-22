/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4e300b0d732016277dcb9eeca0bda0e7"],["/about/index.html","b6744d26e39ed9aac865ae31b8b40585"],["/archives/2019/10/index.html","a593e0b70755b84f09d93e718904e87f"],["/archives/2019/11/index.html","c7ca8cf9accbd9a47319d5d96e98cfbc"],["/archives/2019/index.html","569e8e9d66b1083722121e35bfba3f5a"],["/archives/2019/page/2/index.html","87816276c980d5be13f98347965b2f7c"],["/archives/index.html","b23071aeab60d4f4daa6e0d6e7999bbd"],["/archives/page/2/index.html","025a062403c44dbcd7edb40883ff09c0"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","10ce915d728da37bab38e8a98686553e"],["/categories/Hexo/index.html","49b1a5a45899483afb00f5b7815b125e"],["/categories/Hexo/page/2/index.html","dbc85f3455149d1d5525469efd1c60c1"],["/categories/Hexo/点击特效/index.html","2b039102eb755714ccf6cdddd501c26d"],["/categories/Hexo/豆瓣/index.html","ec2dfd1d632a0b0dba12ce490ee4604c"],["/categories/Java/Base64/index.html","01aef785dc2bee259edfe3cd5047bcd6"],["/categories/Java/MD5/index.html","ab38c6d225518ba19b3df21dc0df8bc0"],["/categories/Java/index.html","1550dd7b88bfc9843872572d2d1de948"],["/categories/Valine/index.html","39a687a421d967fbca66faeea6746b81"],["/categories/index.html","ef3bcfe21e2b32c7f27a691c72956eb0"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","4b4ea88b1484170a6ac47211d6ceacef"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f5030b21e6270890a3f0c21436f32d59"],["/games/index.html","b92ec8408b1506804b23e3c1132e22a3"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","b4642620212a8f20c68b4fc93db103f9"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ffc81ae649e34015be5fb38b89a087fd"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","063d30ce4b04955cea53c63a17b288e6"],["/js/src/algolia-search.js","f963a0dd906b9759ed3b92b5e3106522"],["/js/src/bootstrap.js","fdd61af75ebc1c7755036d6341dbc969"],["/js/src/bubble.js","e6248ba04e7e10498238296de38d7a2d"],["/js/src/canvas-dance-time.js","04240b704d1f846f99993e8e9380d768"],["/js/src/clipboard-use.js","197a7a61265a1749bf809fb655236404"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4aacf47ff24da60227e372f73ab9062c"],["/js/src/exturl.js","3ae6c8412b4dd0c75382ad94d69aae2d"],["/js/src/hook-duoshuo.js","d3adcfd8b8fe0a47c4a848ab68e2adb9"],["/js/src/js.cookie.js","be115264cb3794a2b4ca7006715e283a"],["/js/src/linkcard.js","d21208b84b86af2849b849feb21c38fb"],["/js/src/motion.js","054d24f3e3a86e635b147ea08c2ed294"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","8734c225a10a34453e2bfc93aece92cd"],["/js/src/schemes/pisces.js","5ddd973f36eab6cc2ca590bfee07c7d5"],["/js/src/scroll-cookie.js","e73d2df7bffaa6bf57bd775e391ba2df"],["/js/src/scrollspy.js","97941df238891d0c3ceb87e8ac0fd12d"],["/js/src/utils.js","dd8f82fcf224f9ca3fd4909ae6d38bd4"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7da1860c24085733a88dce3fdb9530f6"],["/lib/Han/dist/han.js","7507de7367f45ca7fa79f73d89a6f387"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","cfcf35dece9511ec831a2429d4d87693"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6d5c8c79e654c7582483299798d64d02"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","86bb897b50dd831a91ea73e735553368"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6fb12c16b60e53ad6a2b15e03ac09e57"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","25c40d08cd4d37f8bcd6ee14863a52db"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c5001e720c956506afcb0c670b994b27"],["/lib/fancybox/source/jquery.fancybox.css","a702cc55f327d4803887c7572dfef005"],["/lib/fancybox/source/jquery.fancybox.js","c133028364b9d145fd379297bc5086a4"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","0a324dc2d8854fa9d8b4ece1bb6627c4"],["/lib/fastclick/lib/fastclick.js","f77f350417ee6152f798d467a5fb265e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f2ddbb88a15c420cb03fcd88de8b4ab0"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","6b87e1e06b925144a4fca6b521bc71da"],["/lib/jquery_lazyload/README.html","807e8c4a83fc38aa53360dc1524be421"],["/lib/jquery_lazyload/jquery.lazyload.js","c54723a7c73863d2ab96398308115565"],["/lib/jquery_lazyload/jquery.scrollstop.js","4b9e83f3a6f3ed23feb2970cdc169fd2"],["/lib/needsharebutton/font-embedded.css","663869d0efdc4346a335fa0aecf6fb09"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","556f14b551661ece0a0308e1ddbf1a39"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","10a84f65f8f001b82e065b4859ec8ba0"],["/lib/velocity/velocity.js","faf5944f80832a44ef76d8d080340b99"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f2be7a1edb8f7b2a798fa1cbae066b79"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","901101127722a5efeb30f54ffaa47be7"],["/links/index.html","77e473c5b7a593fee4db6c2cfeeb0cb9"],["/live2d-widget/README.html","ca371e94ae76129ff7e198c6afbbb98b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5bd0af51f92cd9cbf3b2f935c8e15197"],["/live2d-widget/demo/demo1.html","feb4b7cf5de573fdbe82323f93403284"],["/live2d-widget/demo/demo2.html","f8e5fad551c8f3c33b16edca180fe93b"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","d4936f9990d728622b290816cb46aaf5"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","c98388f9e439cb18d3a5041042e1509c"],["/page/2/index.html","45c21c3ed349e17d8c0b76697a18b962"],["/photos/default-skin/default-skin.css","c5948a7debe5c6cf855167e9be673876"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","017478e10b0f35a3c6d1190c15335c61"],["/photos/ins.css","16d5dfde3dca693b765c93ce11c4cce4"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","23c6f9febbe6017f2ec670f0746f8fcd"],["/posts/27514.html","3d4642b9f89610313795e5554fdae785"],["/posts/39d47c89.html","072e08dc05c59c8e87df6c7b7a7a5ff6"],["/posts/3e5a3bb6.html","3d477cae3079f45eca45fa4ed7d9b9bb"],["/posts/495d0b23.html","151e2e6c8583952f39cb948383d0b211"],["/posts/61913369.html","edc030024d510fc027745454134098d8"],["/posts/7fbe9500.html","b7be2086ad9a7edb47f868e21b16fa2c"],["/posts/89ea6c8b.html","7f1d1ba699192a4f31e584a07c97b30e"],["/posts/9c9b482b.html","be6d5177cfa4abe1367c51589eb63981"],["/posts/a7df3b40.html","4799bba62ec192458b17b310bcf77fdd"],["/posts/ab21860c.html","22d58cda61612671934353c03d12e931"],["/posts/bf9eba42.html","64ad7c3973163e1433b46e9efa2cca9b"],["/posts/c1cdcf68.html","63db1ab45073d75e3c13e3edd3a4a920"],["/posts/c4782247.html","472bf9bca0fb8fabe6718bc5159c23c3"],["/posts/c7631ec1.html","68ae120fab35eb0583758d00ab2f368d"],["/posts/d7399e80.html","df91e63afaa32b32b520bffae76c3b02"],["/posts/dff7e11c.html","798979132c6523f9cfe35bb9dbcb6d88"],["/posts/e1b9c6c5.html","a69516255fa6fd92d8581d3110a5e127"],["/posts/f68f129b.html","d90c003aa60c371a0d71ab1b318a4a37"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","7ed7dc829d6bcbd67d77dbe2ad3093b8"],["/tags/Base64/index.html","d6be595346969b471a2dac71d93beaa4"],["/tags/Coding/index.html","302e20d62a6133ef1d29327ddaa9c6c0"],["/tags/Github/index.html","064d80e1d254825344fdeb593abcda00"],["/tags/Gulp/index.html","eede3c5b4e9da6ccb207e1afdaa191fd"],["/tags/Hexo/index.html","1fd53ddc9dfad7b6c1f97ad40990f873"],["/tags/Hexo/page/2/index.html","388a1944c7776cf429a81b6a12621195"],["/tags/Java/index.html","aff7cbb47172263ac9c696597a8ef41a"],["/tags/MD5/index.html","799bf2bb3cf129d8cb9e8dc4faf13647"],["/tags/Neat/index.html","c4b7954829775e1ee49ce97946a1ce86"],["/tags/Next/index.html","68b326c4a7bcb5e643e7ee2239f75633"],["/tags/Password/index.html","e824318dbb16381314e64564e1a4b8da"],["/tags/Photos/index.html","2b0b878c764a5b36f53d4e6d448e88d7"],["/tags/SHA-1/index.html","78a0194911d92d5c4cefcba0e8472ca6"],["/tags/Security/index.html","ee24e539e6364c60e1eea1df4f07dd1e"],["/tags/TravisCI/index.html","13bed284d7e5006a33198f5f8be6ccdb"],["/tags/Valine/index.html","1ef628861c14bd86e16cbeda246f09ee"],["/tags/index.html","2c3f30c672b99345e6b443432dcf7ccb"],["/tags/lazyload/index.html","d4f26e6be122bb5c233bfd05d9d01802"],["/tags/代码块/index.html","208215e7f1446b4bd18439651ae1021e"],["/tags/图片/index.html","5d35784241033d2ddab37ec78b27a17a"],["/top/index.html","bf01cc4feefec8011d2caa600013cef9"]];
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
