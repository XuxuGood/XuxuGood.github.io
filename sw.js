/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","71648c557687ce42e7c0b88cfd2c7a32"],["/about/index.html","ee3f8cf95041566efda9ea36d24ab3fb"],["/archives/2019/10/index.html","66f10dad8f53647eb98be580b329c9cf"],["/archives/2019/11/index.html","6132ca71b1199c7dc817109ffc06b76b"],["/archives/2019/11/page/2/index.html","50e18d1188bd7addbd47effe6b39dadf"],["/archives/2019/index.html","4a7da98b489c6fe8a6beac9cc62dc3d8"],["/archives/2019/page/2/index.html","4daa1f31f9354ac5162d22eb8378d11d"],["/archives/index.html","1bdd4fc8991323c43adf14b0655fd032"],["/archives/page/2/index.html","a62218f441a63cb4552416787c8b69ac"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","ea7c71a09fe7533ba17a67df781b2bc5"],["/categories/Hexo/index.html","6f0d1cfa635b76a1b9b826d58644e36d"],["/categories/Hexo/page/2/index.html","eae2f750f2c9053e52e0abc78d7d0c18"],["/categories/Hexo/点击特效/index.html","b24da0f5dbcd415a85715a1771770c94"],["/categories/Hexo/豆瓣/index.html","3b395a97622c3a0ea9b09a0e4c0852cd"],["/categories/Hexo订阅/index.html","13446166097a15dc22881d7d5ad6a707"],["/categories/Java/Base64/index.html","e9a645573e9a03fcb3cb5559cd62d7c0"],["/categories/Java/MD5/index.html","2a2ad58d16c7639b5e6c49030246c415"],["/categories/Java/index.html","281dda650c7523144da8a7703f969962"],["/categories/Valine/index.html","d67fd5d5c3ff1a7fd4bf14f90e20808f"],["/categories/index.html","ef95b6d094427a2517b04a8e11c5d503"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","226975f014b2a9cfe0027d24aeb4cdf3"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","c1bfd1f672e518677d9799a53d24aaaf"],["/games/index.html","aeacb353071a57a2247e980aab64f821"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","d58cc522c07742d6d7d6a8945342d4bb"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","d5f749f20583a354ef8b3145005f8ffe"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b1aba4431c2ba9b94c1714320a0dbe2f"],["/js/src/algolia-search.js","d3c2c6b41ad113ffc87cbb6f49f2aea7"],["/js/src/bootstrap.js","83d0f4d3e726f832abfd18ed79617747"],["/js/src/bubble.js","f7b5fbac70dbb994ab49174070dc4ae5"],["/js/src/canvas-dance-time.js","e2a8e2f28734a150f0d7fa189954172d"],["/js/src/clipboard-use.js","92bd2c5f889c52b8536da0d4e3e06f3a"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","f44fce6c29b0b71c8348902bbede2055"],["/js/src/exturl.js","3d9a883a339ee1882d1ca772e08d9c30"],["/js/src/hook-duoshuo.js","c7437f98d8cda76d6206e7d8c6668731"],["/js/src/js.cookie.js","2e43dda208f0e149cc1ef520c1d81d87"],["/js/src/linkcard.js","2c0e800bccf2469241200e99dec82f08"],["/js/src/motion.js","5ade6f0a7e3a560d1c21a0c2781cbf09"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d9231eb258c1ec1eb25d129c787e450c"],["/js/src/schemes/pisces.js","cf18ff6d3c7592a062ff305ebe73ec9b"],["/js/src/scroll-cookie.js","8fc932695d8d9c1af750494b0265287d"],["/js/src/scrollspy.js","2a1336fe9cf39d9b8292704a196cab72"],["/js/src/snow.js","64939d3c1a1a5e37f13c00c8975620e6"],["/js/src/utils.js","73a1bee75f05067e88cc426959311e09"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","63bf005310d33ce8be31d3f3b95b623a"],["/lib/Han/dist/han.js","9f4b52c671659eea44d67f1cb86208b9"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e34e006af25fa5796934668a4e4ae447"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2dbcd35e273d5461e1b11a13aec0055e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e462605ccc7456daf6990551d04cefd4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0999ac8414ded9da4e99e64f455cc308"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9bf31d50564545fbdf58d6696fa8908e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","48844ec4b6898745db0769e9c1779902"],["/lib/fancybox/source/jquery.fancybox.css","3c9e97209f6ccf59d7317e76d71ec0fa"],["/lib/fancybox/source/jquery.fancybox.js","767c27718408c2bf66c9cddd08ce0885"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d08e8fd50c0f5f8d9dad848b52d26c0a"],["/lib/fastclick/lib/fastclick.js","b938972d37ee9f4c98903d28906ee3c8"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","349eb6e6b8495e2a0a0223d22c5db331"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","68dfafca9bc00f0efd37ef6952b62e21"],["/lib/jquery_lazyload/README.html","342dad43e23a08379f3d546fb02c8718"],["/lib/jquery_lazyload/jquery.lazyload.js","a5437aa98ce968448727ffad2abdf328"],["/lib/jquery_lazyload/jquery.scrollstop.js","d0cd4ff9cfec289228de6c80cc0b2dde"],["/lib/needsharebutton/font-embedded.css","510dbcb42b2f8961841d5b3aec3c26fe"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","a022cf3170aad83cdf64266d7bd5c1b5"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","da51170e8ff466dd4320ab710422218c"],["/lib/velocity/velocity.js","517f7e722c8766cefaa1b798dc3422dd"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5e2de4abff220c4cdf356a2d5c38ac44"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","bdd27b8624acb3e79453176685bccfc9"],["/links/index.html","a6449b89f3473518de021c217db5f365"],["/live2d-widget/README.html","79fbab6a92bf16795f7f6184a4ccf937"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","2ad132d84d68fdcb4a37d8cba9eabffc"],["/live2d-widget/demo/demo1.html","2188fc126a1c33b09b89b6306bd0967d"],["/live2d-widget/demo/demo2.html","e3bf0c5728124ceff29d8a6aa318b0da"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","68e728e9249d612e3689ded2e125878e"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","fbc257e9bac55ffe5e0b1cf55b21b6af"],["/page/2/index.html","8263e64614f9e793e5b66d7614af76ba"],["/photos/default-skin/default-skin.css","e18d32e1a40544644708cf239cca7c1b"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","00f65b260fba4ef1f553e6125858cc4b"],["/photos/ins.css","2b6f473c1a378eb8795577fc93f18079"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","c05afbba487ea0608a19e5e3daefd844"],["/posts/27514.html","683871b0f70caa7492b957baae711a6a"],["/posts/39d47c89.html","84c18f4feadfbfa2048fae37dbee31c0"],["/posts/3e5a3bb6.html","6fedf89c49d0e8f3b0ec581157df8460"],["/posts/495d0b23.html","938748fdef51f4d1a35c592a53eba9c3"],["/posts/61913369.html","c5ba36c94d4f4a25923e2d03855b131f"],["/posts/7fbe9500.html","f505e650b69fbab232adf709c4f2300b"],["/posts/89ea6c8b.html","b97e59cb680f17969885018c5afd6bc1"],["/posts/9c9b482b.html","1e55d6cea66e4d98f08e4bb3822a6802"],["/posts/a7df3b40.html","9ef0cf148a972551f61907cc778a0336"],["/posts/ab21860c.html","cc2ecf20a5d5769ee14c9dcd31f5a4f0"],["/posts/bf9eba42.html","2f0ca9c2af12d0f71ed36793a15be9dd"],["/posts/c1cdcf68.html","8f038c902db08fa8a58047c7a53b52ef"],["/posts/c4782247.html","d2a0df4eb4817c93bb74651a5ff5b5e0"],["/posts/c7631ec1.html","58a1c99bfded5e909507f3fcd24b6402"],["/posts/d7399e80.html","55585f1958540fa99d8dde2baf7a5bdf"],["/posts/dd9d9f86.html","c35c6ebdde2d8273eb715cdf6a178784"],["/posts/dff7e11c.html","29316414b3229ae69eca23c8c30918d3"],["/posts/e1b9c6c5.html","bf965fdfccb8a873417f4ded4cbe7201"],["/posts/f68f129b.html","e173fed99a471e2374aefb02d1265535"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","9e6e1dfd9ba1ffc3a6c96c400af310dc"],["/tags/Base64/index.html","9c71c94407fa67613c6a0c5fa5bd146c"],["/tags/Coding/index.html","53f72e14e87c5caf97a59ae2638ee6b3"],["/tags/Github/index.html","6032f18e10020da8d94ef8cb0918bbd8"],["/tags/Gulp/index.html","79f26530b2d09bc4ac7746b416a52b76"],["/tags/Hexo/index.html","4ecbbb1a811a9a988d86768819e76ecd"],["/tags/Hexo/page/2/index.html","eb3366b8cfca76b5d36e450b6663fab2"],["/tags/Java/index.html","cde927777a11b8314912359f3a8ab226"],["/tags/MD5/index.html","fc3b9af7e7787fc4a907956a5e8caa95"],["/tags/Neat/index.html","8436c4236cec570f941ae0660dee0c71"],["/tags/Next/index.html","286a49b5888f9b3fbc82c94a8b5d21a0"],["/tags/Password/index.html","3867f99aab45fa402baa4be7709b8bad"],["/tags/Photos/index.html","e494f0e28e4d55f57f9b8b481360bd49"],["/tags/SHA-1/index.html","b78e43df46e1bffcb6e01ec6b89dde08"],["/tags/Security/index.html","5dff497f394f212f0439757f74ef90a5"],["/tags/TravisCI/index.html","bfd42a624e287ab02d9b485c4ae087be"],["/tags/Valine/index.html","d3c18a95f5a9526fffad9dc9d71fd30a"],["/tags/index.html","3b5408049cc3507e0b5daa5e76ed7186"],["/tags/lazyload/index.html","4be1746f043dd1d17dffb58ba846bae5"],["/tags/代码块/index.html","573cbc1abd6b84eda362cedcd3491f17"],["/tags/图片/index.html","4cd4569c824c1169c038a00d9f204256"],["/tags/邮件订阅/index.html","10a583b80a50c0b9b4e3c305719e26d3"],["/top/index.html","047445d5dd21efa35e7340238aebe99d"]];
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
