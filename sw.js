/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5c56a099e85c8981f1c8927f461c0120"],["/about/index.html","aaba545c87bbda69692a56524d8a230e"],["/archives/2019/10/index.html","b4851ad61d3db11d83ba8d4ac467db35"],["/archives/2019/11/index.html","cbc788bfd784f0df611a981ad8d58cce"],["/archives/2019/index.html","05738d5bf8541054f903eeeeb07475c0"],["/archives/2019/page/2/index.html","cb98262169f29d95bb5db2542fe22494"],["/archives/index.html","300a822becaf31201eb94cb870059a21"],["/archives/page/2/index.html","50b931f9e7dd134d7c35337c32a42865"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","a12217707e97b388fafa3d2ee0f5154f"],["/categories/Hexo/index.html","12bbb7a4819ecc332e7e0de445cdaace"],["/categories/Hexo/page/2/index.html","48c2e39bfe34cbbe250de949d89ea07e"],["/categories/Hexo/点击特效/index.html","262d9a329e93b69c48124655ace5cc43"],["/categories/Hexo/豆瓣/index.html","7a136aaa085ca84fdf9bc1eb178c8ee6"],["/categories/Java/Base64/index.html","610ed2242017976b986a322c13eb8ff8"],["/categories/Java/MD5/index.html","2792db653103fae2343819ca5af5af43"],["/categories/Java/index.html","393a693987a7d5eed671aa117f956c9f"],["/categories/Valine/index.html","6b355859c577f3817510ea856d9b6cc2"],["/categories/index.html","c4e3c490fdb7666ad9fe8a9c810cd3f5"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","9308f1cb36a73293040a8157e78c28bd"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9196b50d4e83817e83140b1dd64f1a60"],["/games/index.html","cf756eda779596372d6816b69da38044"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon1.png","7355ab1a8004c6603334ad1b3638d4c0"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","517511faf16112be8164747b8fd4cce9"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","5268a840a06394bd8b43ca4fccd16fbc"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","86fd30410d2a3dd09e7ff225990fbf7a"],["/js/src/algolia-search.js","3978fa2d16d788ee25c8f016460cf9e0"],["/js/src/bootstrap.js","ec3f645e9b5d8bc67e439fcc6c6d4cef"],["/js/src/bubble.js","bc9652eacca73107a6e752b6793de068"],["/js/src/canvas-dance-time.js","60191466bd583df5d7412e646f2d8832"],["/js/src/clipboard-use.js","f0986e61ec18ef2f9f4f52d1dd238344"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","734df0f767c4219e06c42174bb46d6e2"],["/js/src/exturl.js","716c3b0c1c3b256e62230c1b46e2889c"],["/js/src/hook-duoshuo.js","b9fd5ed088203a3d529dc92e39d904b0"],["/js/src/js.cookie.js","61f3237c913fa91c3bbab67ee512c805"],["/js/src/linkcard.js","64af7c495ad7e01951dad0a28a66cc9b"],["/js/src/motion.js","7c95af6310c23b56b0ccbc7bdcc6d4d0"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","a957fd161b78a503c54d1499311054d1"],["/js/src/schemes/pisces.js","ddaf93a7bce736516407f42bf1eed1df"],["/js/src/scroll-cookie.js","39babd5e45d0e2caf40b0a2b0820943f"],["/js/src/scrollspy.js","b78ca35a061ef10ecf13ca6b54e32208"],["/js/src/utils.js","2b7aa1675ab5f5ae31aba8c03cebb33a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f9b4d597ea6b3a4b09fdd88ae91a5204"],["/lib/Han/dist/han.js","920e09cc01f601d73df335499272cc4d"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2764242e4ab78f468d5ca442a832102e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","16c88173fb3436128d8507a82ff7be26"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f723d9249eeaa10c076e1e014e9c6a5e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4c7b950e9d48be8a7617afbc2fbc4ae2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","bf103505c89c1c89f84fe907c36c7373"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b787ea4ee1a6373654bee38081e63b7a"],["/lib/fancybox/source/jquery.fancybox.css","270f074fcabb7ccbaebac51c46a75c09"],["/lib/fancybox/source/jquery.fancybox.js","cc3959cf02b84cb8cddfe034413dd22b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","744fed81a1b62be5bae5b527a30606c6"],["/lib/fastclick/lib/fastclick.js","f76d738b32ff86af332ea1ec4002b4d5"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","43f32677d6bd1a57a4cd1135a4d27ce3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c048020ce13e79b1993e6c9c41430544"],["/lib/jquery_lazyload/README.html","142a3e8fca97e99def6dce5dec882e11"],["/lib/jquery_lazyload/jquery.lazyload.js","8381a465cf86628ca027b8b82b7497a1"],["/lib/jquery_lazyload/jquery.scrollstop.js","edb0a8dc899418f3046f0d3e40d3ccfe"],["/lib/needsharebutton/font-embedded.css","9cd09fbb6af19be93bf8f996af64582d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","5d370853a7cdedccf0b01df78b2a77ef"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7bd63fad6e979ed05ff7a0b35f18ec14"],["/lib/velocity/velocity.js","161444c2badfa0023d11984feb2ac9dd"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e32315471f340c199a98ebb63da836ed"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","a0de07b9842eebbf7fd274a65a04e3ec"],["/links/index.html","87465144945ba0d2cdb68fd7edd0ad9a"],["/live2d-widget/README.html","90b28d1932a63c4f7c58f1d2dbbc5d07"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","3f94d8c274fd5bc642aeb8c3f9f52c22"],["/live2d-widget/demo/demo1.html","3e7a0587dd9a2f94cc50b6631cc8af61"],["/live2d-widget/demo/demo2.html","5e8ce70463266fc5d1641b23fb03bb11"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","dbeffe7dea25689c7f3e256af1948870"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","9e85d655a51041af5696c8110f3135db"],["/page/2/index.html","a280d50936499b4f6e1aeecfdadb36ab"],["/photos/default-skin/default-skin.css","df43b83dcf89988d18166f5d59684353"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","55e00a7f9571e6da402c212321b3ddae"],["/photos/ins.css","7911b851810a7d7470430f813e36b84b"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","b6f23f6554102c7dbfe9adc09338abf6"],["/posts/27514.html","e67e8fa29a35dd9e5836eb45c3911b39"],["/posts/39d47c89.html","41f46aea51717cceb126826ec4771123"],["/posts/3e5a3bb6.html","e46b269fa83824358aa55dc373599fbe"],["/posts/495d0b23.html","284d3c00ecaae37765fec8fbe367f36c"],["/posts/61913369.html","3abc1ae7b364318a7c335b8eb219952d"],["/posts/7fbe9500.html","0d48ce29e96763586a26510305c87098"],["/posts/89ea6c8b.html","cf8246635ed671ac351a8aaa686db607"],["/posts/9c9b482b.html","17501a73233203ceaa2c9c196652f93f"],["/posts/a7df3b40.html","c48721d9c7cb49114ef19b11c9eddf10"],["/posts/ab21860c.html","1ca6a7b15eff8ca342a0b460130d35f8"],["/posts/bf9eba42.html","49f90672bed7c2a01bc12fbdf52df5a3"],["/posts/c1cdcf68.html","8968af7dbf8097440d006c87d727a183"],["/posts/c4782247.html","4e1a4b0156fc9910e73a9334011cd322"],["/posts/c7631ec1.html","fbb70a3c4fae4541501ff9bf510cb509"],["/posts/d7399e80.html","3eb4e61e4a62e21d0ebe4679c77d1c85"],["/posts/dff7e11c.html","8054c86970d7c89f3f4fbdb5b70b71fe"],["/posts/e1b9c6c5.html","afcffa839370f770c0283a8d8fb29037"],["/posts/f68f129b.html","84d15d0949c40838433ebb7efe34ec05"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","bff69621ae8208c744fdbdc853fcffab"],["/tags/Base64/index.html","81f5eca4f646f7e47f3a93748c310c95"],["/tags/Coding/index.html","d7e0b609ce7826628d1f08d4c78910eb"],["/tags/Github/index.html","a3334fccff500562a5ad2d076817fcc6"],["/tags/Gulp/index.html","cb6b417a8422dca14665e9c9d20647fd"],["/tags/Hexo-Neat/index.html","4d12228e07cf14fa9efee25a84e05044"],["/tags/Hexo/index.html","915b5f0a755fbf9f5673e592214d407c"],["/tags/Hexo/page/2/index.html","ee399ea7757780e928429f63f54d7a7a"],["/tags/Java/index.html","60560f46aa085610d9f1ac83f7785b8f"],["/tags/MD5/index.html","83d3aa9c844b860350ef62fccef3d18e"],["/tags/Next/index.html","aecdf52ed97e1d02fe2edf4a1a1d709c"],["/tags/Password/index.html","80b711408ab8bd0b771620d98ffedfec"],["/tags/Photos/index.html","c8fc7048ffeaa920eebaa848613b5317"],["/tags/SHA-1/index.html","7d39585cbdf64ca829ac424fa409be2f"],["/tags/Security/index.html","c42a095abd29db1e74ed5fcd6ad5132a"],["/tags/TravisCI/index.html","eb6d866426eec9fe1a4a6a5e0cb9d2d2"],["/tags/Valine/index.html","60a650cb52773c75ae8739432763c1a3"],["/tags/index.html","8b18df345515638a4a360485a092457d"],["/tags/lazyload/index.html","d985dc98a3aad76fc756817cc4bf57e6"],["/tags/代码块/index.html","18ccf54621f31f4888f222ee8cc298ab"],["/tags/图片/index.html","1ad35d45391c711083f101606259a5de"],["/top/index.html","2b7045de9e4459bcaa35ab6c6718a89c"]];
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
