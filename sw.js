/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e8988f200c383953ffde2e113183b724"],["/about/index.html","1d7658973df85d49cf3a09da1928f583"],["/archives/2019/10/index.html","3f328900e0864499ac331d0d96fae4ca"],["/archives/2019/11/index.html","02e588af4abd632aa42288a9a4352081"],["/archives/2019/11/page/2/index.html","f3e8b1ea6fea1589e2e9c61e54693420"],["/archives/2019/index.html","1d9c452fab104721a97f6a03ce7d133f"],["/archives/2019/page/2/index.html","50c0c41d13ea51e012514ca7cc2dbff6"],["/archives/index.html","9e1a57229428f1e858e23f5a7c725756"],["/archives/page/2/index.html","af715259d89a67dc5fe9f914a87e3aad"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0d1830d469393ddac9b7af6177976545"],["/categories/Hexo/index.html","a5e38dcf6ea36603ced76357ce7a4883"],["/categories/Hexo/page/2/index.html","6e54e8b88ec59f112fb976078e2d347d"],["/categories/Hexo/点击特效/index.html","fe2ca0be15299ea9596b94257960f0a2"],["/categories/Hexo/豆瓣/index.html","9e54467887b58d1062858fa7f189bfa6"],["/categories/Hexo订阅/index.html","513fa37317a4a25ebf528d22c0dbeae2"],["/categories/Java/Base64/index.html","3f0324d9011573836a2075a435d47712"],["/categories/Java/MD5/index.html","414d9d7dacd1ac52fce6c8cb3aa58288"],["/categories/Java/index.html","76dda25989f8303b8f23777b113b99dc"],["/categories/Valine/index.html","b47c6f45f38852ac40d8fa993d747c55"],["/categories/index.html","1522f1b96e89c11334f164deb609a0e9"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","d5c38b40992d7116d57b387fd4f54dac"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ae13b2577d70e39530e1c6dd167b842d"],["/games/index.html","7cf5b4361236c2173a791963a95bf556"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","2cbac2cc87c512d160e22f135dc2edf1"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","d305224de90a3b80581c11032846cbdc"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","ab0ad1828284cf9e612b248cdb40e0e8"],["/js/src/algolia-search.js","a0b997e88d56a7fabae3c7b867be3808"],["/js/src/bootstrap.js","6628db85af264c3468fae9e79ca5a154"],["/js/src/bubble.js","c46d87828ccfe486fb330c1b5bd6885e"],["/js/src/canvas-dance-time.js","3c5136437d6eac8651a27a7ae42668a1"],["/js/src/clipboard-use.js","b5f70c140780769c33916dd190a98d12"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6c4f2fb61ce1a8b302a2914790589402"],["/js/src/exturl.js","68c2693d1389548dfd318a99fecbf819"],["/js/src/hook-duoshuo.js","2bf9cd9ceefb58f78530ea1514134ede"],["/js/src/js.cookie.js","c396c7424f9dd404a173e766bf5df6c3"],["/js/src/linkcard.js","e6a8a529f9943be77b6dfa5f21caf4b2"],["/js/src/motion.js","edce06a0e3b4a610eeabf9d20b5e93ea"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","5cde4e75f6b8d747fd651785459a5ccc"],["/js/src/schemes/pisces.js","c61b52ea2ea5980039ee0d788fedac89"],["/js/src/scroll-cookie.js","ae0db6141368c591315e1cba0b9e9a58"],["/js/src/scrollspy.js","04704a0cd195bbfc5f750c6e088c94b7"],["/js/src/snow.js","9710d658778eaaa1ec2d118dc6d8404f"],["/js/src/utils.js","f6973ba46e2893380a45fc7cee3eb3bd"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c40b6de9ee32eaf700aeed16a2aa0c0e"],["/lib/Han/dist/han.js","4963d82085af2cda4b3f00b4e85f7928"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9e0ccdc53a67fd4c8bda79d5e977b85d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","aa4fa45edd356a255680dfdc8fc9c84c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","05398fb7a6268bff6bbb860ed46a343f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","04304fe5d189960dc695cd25a730e2bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ff4242068b49abe52a6d3b6dc5f60e2c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f7158a0a14bdaca5e902af2f867f7a0c"],["/lib/fancybox/source/jquery.fancybox.css","e5ddfd031edf66887b080c4d984c0710"],["/lib/fancybox/source/jquery.fancybox.js","4f13619fbae0aef0b3c205c79264703e"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","215750044a98cf2d57ec26383e440e48"],["/lib/fastclick/lib/fastclick.js","02eeb5ee1ce0e4c2ac61d466bd8f186e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","871c3e4cafa33a3fce7891a073e87438"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5a4c31c54cd02ec7e4ff1097aba7eaf7"],["/lib/jquery_lazyload/README.html","d3677aa0e8c949dfac97bb3c52f68d25"],["/lib/jquery_lazyload/jquery.lazyload.js","1da70bc5a3182bee2543d17c7273f4b0"],["/lib/jquery_lazyload/jquery.scrollstop.js","6743f1c3385834bdc02b6b5bebfc655a"],["/lib/needsharebutton/font-embedded.css","00988af8ea4d1a794d3c570cb65023d1"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","84eff04bc20bd60a6c9426d9ac383958"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","89936447678ca9988bb67f216ba21dc0"],["/lib/velocity/velocity.js","7733d0e0ab75b4ec656f53d14ae403a0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2a6c1b4a3cd7c549cae20452a81dee82"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","c3c9859aac69bb630190537e84f55939"],["/links/index.html","f15b2a98becc3552f444262b8dc6055b"],["/live2d-widget/README.html","bc6d8e8b2bfd21c310216392050803ee"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","755f288b7829ac02900afc8122f36775"],["/live2d-widget/demo/demo1.html","1329f0163f865ee61d01321cf553fd17"],["/live2d-widget/demo/demo2.html","2ddc13842c08b67d3c2c55f3970e8e40"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","007b4292a0ee7fe0417f9421e00d73c9"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","a204d113fbcda66ba3d5c67519eef2ba"],["/page/2/index.html","e825d6828454db69be6f573a8bc355b8"],["/photos/default-skin/default-skin.css","730751be0456e871918455e4ef1ac0e8"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","c92fd42bdf5ca6f5b6cac79a547006ac"],["/photos/ins.css","82802ac8034024077eef9c6275a0d798"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","84f75b3617c0db8e85842ef994735d83"],["/posts/27514.html","b9bce4ea6c7c14f80ae2b19349e49bbe"],["/posts/39d47c89.html","45363f21227991baad23a91841665659"],["/posts/3e5a3bb6.html","81d5f4b0ddc61fead0b7da5dcd6773d8"],["/posts/495d0b23.html","54c5ea73ff52cd8605427f18a87b5095"],["/posts/61913369.html","4e75390c4196f1ae87a6f83fa686e332"],["/posts/7fbe9500.html","e1560e0aae96f0d27e77a07fe2417b2e"],["/posts/89ea6c8b.html","121fc2c991e9a78c4dea18325abd07a9"],["/posts/9c9b482b.html","af55648da61dd601f62624043cd82acf"],["/posts/a7df3b40.html","f3ba2ab8e7822e78c2e72ef51f3a8f2f"],["/posts/ab21860c.html","101f4ecf9cf4e7f7dc42dbdbf2a0c7a2"],["/posts/bf9eba42.html","f1b0b76768e2843179c0db49afb99d28"],["/posts/c1cdcf68.html","54829260f769a053a2d464388e5f173a"],["/posts/c4782247.html","b550c85b0aeaf3ab43255c0105d44798"],["/posts/c7631ec1.html","be4b3cf7d546b056f03be5982297b478"],["/posts/d7399e80.html","3f09f4eade24eb3577d1a46a28fb6eaa"],["/posts/dd9d9f86.html","d499e8cb58d7548f55696998067f1471"],["/posts/dff7e11c.html","0f02fb8d39a316b5e213d74f1a44539d"],["/posts/e1b9c6c5.html","3011137ba90f9f2ad0570d867fa93ae3"],["/posts/f68f129b.html","eab767df317b20012d1affb941ddd860"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","961d5ce4cc9763cc7b774a77fbc2905e"],["/tags/Base64/index.html","2937da75ac17ef2c108ae738fc44b7c5"],["/tags/Coding/index.html","713e9dccb13aae1e0303e56a15912570"],["/tags/Github/index.html","677373dabff904733f98bbe23d5ed417"],["/tags/Gulp/index.html","42860df1d3feca91affa5a411ea79bd1"],["/tags/Hexo/index.html","d4af9a646a59a2837e14077211202663"],["/tags/Hexo/page/2/index.html","40974b2a1906a015889113a7190ccb1f"],["/tags/Java/index.html","d112b8d3ae0445704b2e3fb4723ec242"],["/tags/MD5/index.html","fb3ef88690819c78222bc111a99f006b"],["/tags/Neat/index.html","c48863266727fc288b014520443935ae"],["/tags/Next/index.html","53c65e84f8dd28c9122d4ce3af436de3"],["/tags/Password/index.html","bf731ad03ea36f2cd9bf78f4e8953012"],["/tags/Photos/index.html","e47d601666593312b93183d281f90409"],["/tags/SHA-1/index.html","88d0578255625f9d26bf703bd5227e2c"],["/tags/Security/index.html","b59e441dce81055c7bb46771fc135e8b"],["/tags/TravisCI/index.html","2ca1e10c12ab7dbdf8878cc9d7a0d331"],["/tags/Valine/index.html","8ced0d4f72e60bfb10517320be36d765"],["/tags/index.html","6812946620551107e28784d15e0420ef"],["/tags/lazyload/index.html","3a123563268058f94b310ba2240f5e34"],["/tags/代码块/index.html","c89d1b3549680fbcf4c8a69be377c9b4"],["/tags/图片/index.html","e7d0000b06f55a5682c20710cf7aa432"],["/tags/邮件订阅/index.html","d1cc82c85cb455a2920155a1274a1ab9"],["/top/index.html","782b46d8d4c06e48bec8ef7d8f5649b0"]];
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
