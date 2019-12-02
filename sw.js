/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ea72aa006833d80f0436f4f6647776e1"],["/about/index.html","b43405f54dd9b17c5b04e4fb81328463"],["/about/renxi/default.css","51f2d8b24aef801cfb20ad8ee13b1e98"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","fb864ac384fbb37dae6c7e0b97500580"],["/archives/2019/11/index.html","3ef2ca37718d3d1e36f696b0e82dffcc"],["/archives/2019/11/page/2/index.html","379201c2bb7f78aa985febf7e6c92914"],["/archives/2019/index.html","a5db8c10a1f36361f4205672ec5b109c"],["/archives/2019/page/2/index.html","295e96ee2f126205be86a000e0b7f5e2"],["/archives/2019/page/3/index.html","669ffed3329c3f2d989798cb10c6a9ce"],["/archives/index.html","44837bac45c2698ee83f6461aae316ec"],["/archives/page/2/index.html","c4247c88be87bf42f644b521e829e795"],["/archives/page/3/index.html","4a594327abfb501703e3912558a77ac2"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","98c131ab75434b15d1032d229b1ff351"],["/categories/Hexo/index.html","8bc37383002fa059090be02f8be11117"],["/categories/Hexo/page/2/index.html","e40d579b914bc63ec22af51adf50fed0"],["/categories/Hexo/点击特效/index.html","0e04b402d820f2b86b58b91945f66429"],["/categories/Hexo/豆瓣/index.html","56c8e1c01493aa8b31db090362db4dca"],["/categories/Hexo订阅/index.html","65f767ff173ed8315f9798e1f9a7a277"],["/categories/Java/Base64/index.html","b2ac1578fc99f2274f543afac63edb16"],["/categories/Java/MD5/index.html","08ab5eea37cbe4f5624f84ffcef3e7c7"],["/categories/Java/SpringBoot/index.html","81bcd75eb18f14eccf5164e29c962bd9"],["/categories/Java/index.html","42be98213493cfbe7cf4366721e05887"],["/categories/Valine/index.html","e514be7233d722da552ea072c3eec01e"],["/categories/index.html","52529b509c7aabdb47d1dd27de6db55e"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","01443245519f45cac24eb4b9bd805c80"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","34d397986c1250da610d23636f4db836"],["/games/index.html","18eb75e6179d44b916ec5bb50bbbd276"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","5877d4c66351841890ee10c9c28723c9"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","268cbec8842a696c3d6e79c890e07430"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","443a67b4071975ce30657a72da4432dc"],["/js/src/algolia-search.js","9a36a26a89ef235e7270bfbbb529456c"],["/js/src/bootstrap.js","02a6ebf07f25f9bdd1918af3603d13bf"],["/js/src/browserType.js","449974154069cdf3549362e9d0cdf513"],["/js/src/bubble.js","40248895d93d986258c7149d7350f6cc"],["/js/src/canvas-dance-time.js","95e4d8111518dcfc5c49f0eb1bc75f00"],["/js/src/clipboard-use.js","a478d0b21af62f5e1fc935b48f12df31"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4d69630ad377d13c4013127bf5bbb314"],["/js/src/exturl.js","e1641a194708d0e75756bbc8ffd84a8f"],["/js/src/hook-duoshuo.js","beba5f35f1328b84cc610e58d657503c"],["/js/src/js.cookie.js","a06cc787d33602e48b954dddd6081c4c"],["/js/src/linkcard.js","b77114bef80ef112c57a62b1cf74161c"],["/js/src/motion.js","6117634c6e4481b52ad627adf1365ba0"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","62d34125cb92078a6f7efebcfd206b65"],["/js/src/schemes/pisces.js","8bb27129a970004f54dad86ffe8a4118"],["/js/src/scroll-cookie.js","49cf667b53159c65a04af2cf71f24f15"],["/js/src/scrollspy.js","2c00934f10229038397b881fc0a18aea"],["/js/src/snow.js","75a9901a7823b427d9c3f8093900ff88"],["/js/src/utils.js","28bbfce2abb5335c02a0ba57fc27c718"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f78f6f59e1681e16e3ad414794155dc6"],["/lib/Han/dist/han.js","082bc16522f2ee31ed9017751b08bfd8"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","34a7710d83430d49c4cceb528e44e255"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5d008710325a7c7c0a53b4eab7e320c4"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9991f9a8623c501461f7aa07adcdcb73"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9931662861c319d9e54fadd49acb68f1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","6f84fa18e0143d2ffe72029534e408a4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d88178dc26b7bb36b87a17f07b5357d9"],["/lib/fancybox/source/jquery.fancybox.css","f016393f94cee9d376a2d7c65623a09f"],["/lib/fancybox/source/jquery.fancybox.js","58c810029c321f5b12e3c5d1a8f0a9a2"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","204c37d8577bf2cc1022914132d0172d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8d346c153a6271ac8af4ec742f4bcdd6"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","89c97dc7b9ee97eb2fe5ab13df4fab19"],["/lib/jquery_lazyload/jquery.scrollstop.js","12944faf1c1e399d306d45ecf5ae6006"],["/lib/needsharebutton/font-embedded.css","67837e9d298bd417e8ef20d002d76995"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","3f172f56863cb57066fae5bf84052d1f"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","53bc0f49b58f957aaa05e4ce55e6bd0c"],["/lib/velocity/velocity.js","a64779624e8bcad099037692303136c7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","9663dd405f843b0400e21df38963f9b5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","25b86280c5897d32f9a957136f0240ca"],["/links/index.html","39c45194851664feebe146b915b1c597"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","13a896d0cea5edf331f1b9eb13afa9f7"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","aff846e8b8078b72d592e3b148e32ac2"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","ce5d201c754ac1562ca3a6e601a2121a"],["/page/2/index.html","975c1fffe3d93e987f0d022d4e013227"],["/page/3/index.html","668b3f11d0eb34713008951ef52ab6b7"],["/photos/default-skin/default-skin.css","e356b9247f5cdb4d063257b0d3662ce9"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","93e65a9ab1470069c3cd8a03f3cd7997"],["/photos/ins.css","3781313c7238aaa8b81adaa75f4850cc"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","e60a6a61e25348fa534da0154d877e86"],["/posts/19c94341.html","688e6273c36886252bb660573332c0dc"],["/posts/27514.html","d4acae408ccf9f902bb00b885d973c8b"],["/posts/39d47c89.html","6037495411f61bb4cda14ed3aceb7930"],["/posts/3e5a3bb6.html","2ccc29d8a96b22d9c4f458890278d84f"],["/posts/495d0b23.html","8240e8d4fd1e784f64d5d73196106047"],["/posts/61913369.html","58c7678c31b69ce8d4cc7a19d1f2ee2b"],["/posts/7fbe9500.html","7cb0b34b68e3db04980242fff7759303"],["/posts/89ea6c8b.html","9bf778b3dc02521149677cb61061421a"],["/posts/9c9b482b.html","c7c2c021abe5417404774011a0886e28"],["/posts/a7df3b40.html","78090fd33898476a7888d8a22d70fdb7"],["/posts/ab21860c.html","7bfa32ba8dd885d31ee04ab09acca7ba"],["/posts/b4831a5e.html","363ed438c747786e3da25c43d3f2b088"],["/posts/bf9eba42.html","6413431246b0148a54703ef7a0be4b9b"],["/posts/c1cdcf68.html","b2cca66c12ee08c742e09ad3c2b8c61e"],["/posts/c4782247.html","352267c66816ebdb8e8feef050944f0d"],["/posts/c7631ec1.html","6ba91667455964b864a75737907d170a"],["/posts/d7399e80.html","5325715777743d434cc8f1afa1a4b995"],["/posts/dd9d9f86.html","ed2013e9ba5d2149130fdf75ec916c03"],["/posts/dff7e11c.html","840a18e7a9ad8a40ba79427275d10bbb"],["/posts/e1b9c6c5.html","a28396c398d902fbbc762821cfd42bf5"],["/posts/f68f129b.html","83850e47419273eb3196df47b79185bc"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","25e98c644e6416b3827008e2bf17b1dd"],["/tags/Base64/index.html","4391cc51db40a8aa8623684f90fcec5b"],["/tags/Coding/index.html","58b474879d02848a5848d662b4b90588"],["/tags/Github/index.html","b6e614d7f48dbc641166857c8da76af3"],["/tags/Gulp/index.html","e8f53f8346a8673ececcf17bb949da63"],["/tags/Hexo/index.html","0c191aa6ec7ec02fa2dee3b887d7fd89"],["/tags/Hexo/page/2/index.html","1b20e33011fdc8aeb387bbe773af8872"],["/tags/Java/index.html","b85c6926305b4e16b2312cf4baa655fb"],["/tags/MD5/index.html","8e69b21048a8fba5fe13e46cf5a3b687"],["/tags/Neat/index.html","9f48d6b8299977b8ec027c99141d8485"],["/tags/Next/index.html","aac1d8a4e0204d8e7c37e612f9187a3d"],["/tags/Password/index.html","8e387f0bba366a2aff8c99fbd811ad26"],["/tags/Photos/index.html","892cd03e3c8a753b4aff091a4cc69dc6"],["/tags/Rss/index.html","80d7463eb0d5838c26e35de1bb1633a9"],["/tags/SHA-1/index.html","3204c8e74f4e328b4d3b64fe66de44d1"],["/tags/Security/index.html","80e3f21d1477557fea8bf051bdb1c200"],["/tags/SpringBoot打包/index.html","a9189ae04415fbda1bd6f56ea936fd5f"],["/tags/TravisCI/index.html","6cfd686dc555d3c3590d3e604ebc8958"],["/tags/Valine/index.html","b08f7a4f8798a2bbf4546b0580acaa75"],["/tags/index.html","9957a55447ecaafcf4f67709901c0dff"],["/tags/lazyload/index.html","f8cbbb1695c0598150025774c26826c0"],["/tags/代码块/index.html","e1e39fbce2156c1fb2cc828534170d49"],["/tags/图片/index.html","394873f6c84cd89d654d1f01df9c2294"],["/tags/邮件订阅/index.html","07959bea086a313a1ffa449316ab9edf"],["/top/index.html","43501e5f16320cf0bf36f6fc56deff42"]];
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
