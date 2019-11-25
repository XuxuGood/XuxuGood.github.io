/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","23ab5e9a82c6d769d46aaa7057b7045a"],["/about/index.html","915f9be51ad4888a55db3215aa31ada2"],["/archives/2019/10/index.html","6a5ae1027feaf87cdc01bc881f4c4c2c"],["/archives/2019/11/index.html","bc22bc69a3492ccdf4095bd0abccfee0"],["/archives/2019/11/page/2/index.html","df1572cd87808d9e7ab88abe72c00745"],["/archives/2019/index.html","ed1ef39b7769f58be8ff840dc1d83d94"],["/archives/2019/page/2/index.html","c88df41f6b56bc2d388c302879bebe16"],["/archives/index.html","ae1e1a4b657618f1c53074cf8822bfd5"],["/archives/page/2/index.html","b93119097deac115f4e1e2e1ed316098"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","72cba403ffbf5863b1997fcf9a191654"],["/categories/Hexo/index.html","1eeb190af55a3ff888b1867b6df22e84"],["/categories/Hexo/page/2/index.html","58b804efa6356b585946799b3a2656f4"],["/categories/Hexo/点击特效/index.html","e2ac56377ceed67a7fc605abec57c352"],["/categories/Hexo/豆瓣/index.html","f03182cb6eb8b4a1ffa09d6ab376ab5d"],["/categories/Hexo订阅/index.html","2cdacc3ca11e036ccac1dd41660e118c"],["/categories/Java/Base64/index.html","054236a864055c89c9cb26042948362f"],["/categories/Java/MD5/index.html","9e0c66f5715c49773543b67805172810"],["/categories/Java/index.html","aeac8560ddcc4f7113474946ae5c993a"],["/categories/Valine/index.html","71750329aad63d270d91e71b7843914c"],["/categories/index.html","52a8744264824987126562f772c88f83"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","8d7f4352a83e5d64239a36d090de2b45"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0c10deeee31c6f25ce04acb5ddaae29b"],["/games/index.html","7bbcb135a9fe76512c1baa29e1e558a9"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","29ab9e49650c370a610a0fa752fb9fe3"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8f337cb2462569f50e7b838daf274e1b"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","dca121e092c7e51b48be57dc09dd48e0"],["/js/src/algolia-search.js","f3624953cb03caf7c33fc5c0594fc6f8"],["/js/src/bootstrap.js","4dde161fded5aff21808a0ff96b6ae5c"],["/js/src/bubble.js","4686ca99598b49f1c560c06f6d236907"],["/js/src/canvas-dance-time.js","70ac7a3eb6af98279e0f02464e22ee2f"],["/js/src/clipboard-use.js","5aded2e82a5ab7582ef010acad723d5d"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","ef72c6ee6e4c5be942d96200e8edf62f"],["/js/src/exturl.js","8453737b392d87cc1e2b8b8850ccc75a"],["/js/src/hook-duoshuo.js","84cfac62094361a2101f6d4fc9d83323"],["/js/src/js.cookie.js","38708a6e4019065cea6c80800579c2b6"],["/js/src/linkcard.js","b622d7e7d64f75bf78a40641159b9ad0"],["/js/src/motion.js","b5417c71cf7b8beae47e740aeb0b48f9"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","559ef3cf424657631f0b205b2cc2d827"],["/js/src/schemes/pisces.js","6689206eda59380e7cbb37f9fc111cb4"],["/js/src/scroll-cookie.js","ff2435220ea63dd433a454251eaf13f8"],["/js/src/scrollspy.js","483eac04b96966771a1976d3cdbbbb94"],["/js/src/snow.js","5dcadfd3db8072d58130233d5d3dec43"],["/js/src/utils.js","a81b9cf545b6d8c015fb5c98cb1a24bf"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","01d58fdb24877386588819d891b9fe69"],["/lib/Han/dist/han.js","91b760e1c1cc654382990d01e30e0e38"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","d52c626d2e6a8ec998a4c5f3ed0c8e54"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","52d793e2ad55e10b0aa9a1566ffe5160"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","397168838bc6370c8469d25a6b33fa6a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","705ea31a727b749d9d5467bf442b16e7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d56cb5c731a294e90fd25ea33f418bfe"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c2037df83b0788fb164dc0f2e424cebe"],["/lib/fancybox/source/jquery.fancybox.css","a2eb1b47880f63e61fedb3f826c7c3ae"],["/lib/fancybox/source/jquery.fancybox.js","fa559cecf0939aee728f82d3acf5c297"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f03941ddcbc70d98cfec48034315103c"],["/lib/fastclick/lib/fastclick.js","8d7ff7be7be42fbaa48723bbbd853924"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","e5c4c61df7617bb98b7f1a59c0a0954a"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","0fbba9150ab131f3925ef3f414c1b322"],["/lib/jquery_lazyload/README.html","005794be90562fb294a63f03dab223e0"],["/lib/jquery_lazyload/jquery.lazyload.js","56ad13ff97bdd07d7f9beb296a8c7620"],["/lib/jquery_lazyload/jquery.scrollstop.js","8dab00626d7888de928bce854797850e"],["/lib/needsharebutton/font-embedded.css","2b0a800832d9cbec93d3f6b6c03a3699"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","bebda64793818e5f5a4daba0e2a5a375"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","aefe4d3ff5104a0aa654dda7aa156c27"],["/lib/velocity/velocity.js","dcfdafe6bdb475db79509204612cddcc"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a2a629db1352fbbfe8683ffc6d4e9226"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","6140357bcda86d77e722dcfcc6a8cf92"],["/links/index.html","3f46c744ec20df179e855437787f7b4c"],["/live2d-widget/README.html","fa96c3fd49d59af14d6f969c056c15ad"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","bcb389ef963770c51aec5d89bb662490"],["/live2d-widget/demo/demo1.html","e377d4319452a7b6c947b340f180e11a"],["/live2d-widget/demo/demo2.html","46fd4d49f476269fc28bef6bf714bbff"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","a7a25293c224f645611490efc538112b"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","e30103473c689b0f0db3b2482f485d46"],["/page/2/index.html","7ab040b43a12404351c2948ed0084e44"],["/photos/default-skin/default-skin.css","42e819b23a07efdd78255ad3eb83f819"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","6cdb5cd4288423038cec93a980709f79"],["/photos/ins.css","48399be803e5dd3aae19e43f7996b256"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","f0f3bc29e19170ab01f5725dc0dd42c7"],["/posts/27514.html","61867a241e115bb39f42186a9a9cea1d"],["/posts/39d47c89.html","9579a5f047b1db43dd2d0baf3cf226ba"],["/posts/3e5a3bb6.html","b240154782e507a0abdcd3f83262d1c7"],["/posts/495d0b23.html","8cd0943f35dd39c8e4a01ad6231396c6"],["/posts/61913369.html","35ca07c1da72ac80ca398be056fcc1c9"],["/posts/7fbe9500.html","47150304af164124b2b1f0149706a79e"],["/posts/89ea6c8b.html","851595fd80a90086e73b8393e3575c2d"],["/posts/9c9b482b.html","5e18475b9f62f4367e425751548718db"],["/posts/a7df3b40.html","0e85af4c4cdc73eb40e6b40d936cb552"],["/posts/ab21860c.html","68659f1450a46a0cf692e0ae8876b546"],["/posts/bf9eba42.html","ec96079cd0e06c5d4447e147dcde016a"],["/posts/c1cdcf68.html","0c525849563d4cd64c3dfaa73d84407f"],["/posts/c4782247.html","9a7dd10e47ba940828fdf88bee6f9cc1"],["/posts/c7631ec1.html","d766dedcc41ace9b711b3566c946ad45"],["/posts/d7399e80.html","e91bb872f19abbcce5efbb924a00659a"],["/posts/dd9d9f86.html","6a087ce27dd302f328d6f9fe0c360fa2"],["/posts/dff7e11c.html","e87edeba4fd3aa703ae017c07bbfc5e7"],["/posts/e1b9c6c5.html","0db57c6d6f923841a8674caedaa6c662"],["/posts/f68f129b.html","ed228ff721c6157ac9399e6ac7afc983"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6c91ad1b4a8e1354765c7b03f3c2f9d1"],["/tags/Base64/index.html","4c0440e7a3779c21f60e230850b2f19e"],["/tags/Coding/index.html","2c1a669e97d66fed3a8e73ef724808df"],["/tags/Github/index.html","7156bad0df0f2777a868c45278476bbc"],["/tags/Gulp/index.html","2fc59181bb3d78f335afc323fcd643f7"],["/tags/Hexo/index.html","db5021b0696efe0b5396d147e1d225c3"],["/tags/Hexo/page/2/index.html","ec4390fd6062fba671e01e58f461be55"],["/tags/Java/index.html","37d26bf20ce64211a33cdc9b0cea3cbb"],["/tags/MD5/index.html","8342d5b8d947ede818f2713907041c32"],["/tags/Neat/index.html","7b262d62caca4c76dfe539556a366a3b"],["/tags/Next/index.html","aa0a9eb7fe9ae4397f7a573782acf995"],["/tags/Password/index.html","d8e02a117cb43f12ffab16f86b29118c"],["/tags/Photos/index.html","79c68caf68244531620a4bff35530fa6"],["/tags/SHA-1/index.html","6ce3ffacfe8acf3069da06ac4a6c5f44"],["/tags/Security/index.html","a646d67e56ac2fdf024906b96d2eadd8"],["/tags/TravisCI/index.html","1cf5a9b50806bd1e8eed829431822d37"],["/tags/Valine/index.html","eca9bb1bfc22df9fa930a9792d689348"],["/tags/index.html","f1d75a9d78406734215e7853a97b09d3"],["/tags/lazyload/index.html","3a022a759d4a3e3913e4548ec0f1af68"],["/tags/代码块/index.html","e10a168d6d1837029423c0a132761464"],["/tags/图片/index.html","92a6d1b246aa2143bb900167459c61cb"],["/tags/邮件订阅/index.html","a4d94ddb77375ff7095df03c7fe5a25e"],["/top/index.html","1103bd67eec74499f4097aaf0068cc9f"]];
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
