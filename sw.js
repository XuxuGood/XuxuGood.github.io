/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ca5f4ef64875f65455ce0ab1b13384d2"],["/about/index.html","d44367e70b66a75a6696d86c01bd1671"],["/archives/2019/10/index.html","45cd5dd2dc7bfd3b6535d848028ac157"],["/archives/2019/11/index.html","669f20708e57a91c6ba06a7e65a1b28b"],["/archives/2019/11/page/2/index.html","bfd6f8418c10dff9b6b0a9785a7c78ae"],["/archives/2019/index.html","6f42d2b57f166c25865d184ff17bf890"],["/archives/2019/page/2/index.html","856c969bb4ec53f3c21fcb79f5cb98d7"],["/archives/index.html","b997ccacb51a6f526b92c1d4b6600930"],["/archives/page/2/index.html","a4cf993960e115dde670baeb4d20e898"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","53d3b871a575381fc157a672008e129a"],["/categories/Hexo/index.html","a955b4f44ce50c33256b48a5f3d7df3d"],["/categories/Hexo/page/2/index.html","13b227f1827d3259024460d550ec402c"],["/categories/Hexo/点击特效/index.html","f53fe196946a83ffda10b737156186a1"],["/categories/Hexo/豆瓣/index.html","006aa36dc12fb114f89da5490123ef05"],["/categories/Hexo订阅/index.html","78e46213028579ac0adc568ff794602c"],["/categories/Java/Base64/index.html","5837d84bdd0dce7a718a75b5f8e162bc"],["/categories/Java/MD5/index.html","517cde8ac5719c8a3f9a8fefefc629a5"],["/categories/Java/index.html","2673ad12a257c785c02b5e02eb32854b"],["/categories/Valine/index.html","852e93ed6eff90aebf40c6b6713aff8d"],["/categories/index.html","14e9da3e4ee720687cfbcdd308cee56b"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","9c2476bf53153887fd8427d3f099c2f9"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d4ba40e0f8e5d5c45adb86da53e4b6b2"],["/games/index.html","58c8d4f73834cd597c3018f378e49d90"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","322f0cf6188aa8af808b48e8e8fb13e8"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","6e0b729a853d76c1138cda12277f0f09"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","5d06afdd9dee774a43841cfed7db1d72"],["/js/src/algolia-search.js","0ff69cfc63c6cea44acdcd6b21725a55"],["/js/src/bootstrap.js","fbb41ecbaa526aea855b0016e28084b5"],["/js/src/bubble.js","0dca5c6c3c57ec4c56a0af8fb6a0b176"],["/js/src/canvas-dance-time.js","96dd3332367895389fe89d84b5e0afad"],["/js/src/clipboard-use.js","6ceb3d54898986688581f9bccb1db38a"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","d8f8a0dd568a21a84eb4e7d9e269faa9"],["/js/src/exturl.js","4ebecb23fcebc8fdc91762b4922cddbd"],["/js/src/hook-duoshuo.js","feabfcd0070dde0e02470ba211f877d0"],["/js/src/js.cookie.js","ea0fc37363f9f446176ac0b04249530e"],["/js/src/linkcard.js","30ccfe615d1d4e154e32e4d3818eda00"],["/js/src/motion.js","93b7cc8496d6235867680db6c7335b85"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","f01609197b7f56e9a8fd184a650956dc"],["/js/src/schemes/pisces.js","75b5290fbc8e699d2f1e33d17eebc382"],["/js/src/scroll-cookie.js","285da24f2fa221df8fccbd3797de80d7"],["/js/src/scrollspy.js","57740adb6febdb1c544d9fb757f720c9"],["/js/src/snow.js","04f423cdff9fec6a8121222d5349eae6"],["/js/src/utils.js","b38b9b6dc231b236840b1ad7777a8748"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","11e170d4b4b7d4c3afcd4572893377ae"],["/lib/Han/dist/han.js","a9d103785bf90df285423dc038ad6090"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","405420612a00bc46f4ba9e61eae9e79b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","4cdd6347b44ddc6cfe14d47330422001"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3a5be083905e6707c1d99f28b6c447a6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","00452bd3109017db25193f9a269506fb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","948643a1a4e687c0792b1c49b959c0df"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","239c36a344a0efe674f760ff5aac020f"],["/lib/fancybox/source/jquery.fancybox.css","7a6d8dc2e67327a41f1f24944027172f"],["/lib/fancybox/source/jquery.fancybox.js","20434420a025b2d3f084acbe720fe10b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","5533f203214ad820bc2210ad07e68574"],["/lib/fastclick/lib/fastclick.js","e600750d17f5648d940d98bf37ad5f2a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2dbed5f33e65e1063d377437b780828b"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c2cd135390efb0103810bca27247c176"],["/lib/jquery_lazyload/README.html","c78c451b69ddd13f4bc9b2823b591d8b"],["/lib/jquery_lazyload/jquery.lazyload.js","65fd05f713357ca223eafa173a58c2ae"],["/lib/jquery_lazyload/jquery.scrollstop.js","5c5aeb37532bbc02a40d776c1c7c08ec"],["/lib/needsharebutton/font-embedded.css","4bb59b7987631be888d711a4cdd84ca5"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","658ceee1596fe7a494763f56d92048b8"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c34e225dbe0ea84899b09d3f7842e649"],["/lib/velocity/velocity.js","4f53e879b238a4312f4fd1fb2fd7ce9f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","129acdfcd22701b3b08f7ab5b1397793"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","04558969fab0eeffcb9867cedf023bf2"],["/links/index.html","78aca36f20f395bf87ec52545f6420c4"],["/live2d-widget/README.html","ac5176bd71f53d4b975814257e35ff80"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","aaa3a2d33438b0efd5fb5282eceb311c"],["/live2d-widget/demo/demo1.html","ae9003878e9d5434bec562fba75a4547"],["/live2d-widget/demo/demo2.html","0c0852c08d7032ce877b0f2c398aedb2"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","227f44853023b5690d2a872d6b5b5b19"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","efa9bc22eb11c7d70a6eec8bda42f075"],["/page/2/index.html","65cacb53dd6e5bf86eb2f8a0b9d5f304"],["/photos/default-skin/default-skin.css","3c04bc3cbd484b98a2161b4273435237"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","56ef4d6d77ad53632bd9efea72fa11c1"],["/photos/ins.css","a284aca856e1655d5bd0dd793c58e36e"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","08826eb1760a673b50d0a265ae5d6dba"],["/posts/27514.html","2252cb315851647f2ce9a3cc4748584a"],["/posts/39d47c89.html","537e64741ada7779eac69d6073dd6a69"],["/posts/3e5a3bb6.html","268f570a862d9ba2313ed2a22b8f4186"],["/posts/495d0b23.html","be1c1713a95fa13a2ed19f254af28bf2"],["/posts/61913369.html","d9459e63d4af3337d6161d3acc052d02"],["/posts/7fbe9500.html","bcdfe6176abec2fb812981f676b5bb3e"],["/posts/89ea6c8b.html","12cb3408dbad820df95f70196a9a32f8"],["/posts/9c9b482b.html","94b3e4b7dce6d51f401a283dcafcc5db"],["/posts/a7df3b40.html","e4d023a217020d92e96a9d01ab02e707"],["/posts/ab21860c.html","374e0b8cdf2416fe89c86a5b917e49f7"],["/posts/bf9eba42.html","3f7e7579a543302fd0b74897d6a2f757"],["/posts/c1cdcf68.html","1b25d7f17f7fb1a97f8e668ecff72a39"],["/posts/c4782247.html","dd3ffa629045cea9bd7a477b24034c7c"],["/posts/c7631ec1.html","77f2cb8aaad0ede002aa97c6fd1fb8b5"],["/posts/d7399e80.html","6ec25429811a2e4b18501e86d27c67ac"],["/posts/dd9d9f86.html","72d59a473484559da39a6c97ab134e88"],["/posts/dff7e11c.html","131e3a8c8f2ad230aa1251b7f9b26af0"],["/posts/e1b9c6c5.html","ca06f3d3948f6b4885353341df8b75f1"],["/posts/f68f129b.html","878f0bc23348de4b534164ffca173295"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","1a770996ae5b0507f575d4ae2471682e"],["/tags/Base64/index.html","5da99e7db0e0e9893ceb1c0bc3d31bef"],["/tags/Coding/index.html","55969501255a79021dcbd621decf3cfe"],["/tags/Github/index.html","70a882a78a32d935bb3d20387e7f3eb7"],["/tags/Gulp/index.html","b6cc92f1519d4594ff9adac70604f5ed"],["/tags/Hexo/index.html","dce533d75cee21c5dcee3f6fb6549238"],["/tags/Hexo/page/2/index.html","43acd75a2427eb72be8b8e8e0bfe744a"],["/tags/Java/index.html","9aa29e74e8f9a76403486f84d09abbbd"],["/tags/MD5/index.html","015406d4237d0c8e461874e0bad53a77"],["/tags/Neat/index.html","86908a1c341263268260aa71fc81001a"],["/tags/Next/index.html","d1697c84cbeb4148dab4e5cb13b8c6a7"],["/tags/Password/index.html","23e6ac4a28a7c2e4a795e802bcd206d9"],["/tags/Photos/index.html","8f2ba4f99a41a007bb9713556f564b0a"],["/tags/SHA-1/index.html","f7f563eec5254cca99986ac9668f6ddb"],["/tags/Security/index.html","f11112890eca008d883173227ab83ff0"],["/tags/TravisCI/index.html","5545d4f689b8debf5c0e3aa053014882"],["/tags/Valine/index.html","b406be8958e116cba7ee9fad8b874275"],["/tags/index.html","35fda3b87ed137be4cf34beca825ef48"],["/tags/lazyload/index.html","4e1fef1e5622a55291d41e18b12f5251"],["/tags/代码块/index.html","2164415fa8a422419528d98f1bfec110"],["/tags/图片/index.html","7fa65cde0eae4532878c2e59271f64ff"],["/tags/邮件订阅/index.html","25a4497917d7f5e582be94ef44a23d8c"],["/top/index.html","6bff30af1d603276879e4836f54c7599"]];
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
