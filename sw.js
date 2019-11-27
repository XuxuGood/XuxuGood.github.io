/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","483d84a6f96dc9055271b4bd4a142e43"],["/about/index.html","23dbcf3da3e8706b473795aeb5f29cc5"],["/about/renxi/default.css","f2e885d87c7a688094982862883944da"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","871aee3ded1c49ad12a207a7331e7604"],["/archives/2019/10/index.html","6d830faf62f221606a8484d7f3babc8d"],["/archives/2019/11/index.html","0ee82b86d3c62575a3919d26f2f3675f"],["/archives/2019/11/page/2/index.html","1c524c9a6c4af4fd4dbf110eb817c78d"],["/archives/2019/index.html","fc157c5f7c7f75581c781508b47c43f6"],["/archives/2019/page/2/index.html","fb57c7b4ab60e057e8defdd223e61e44"],["/archives/index.html","c5e8e3f311bbcd4a9fe8dfe45caaafef"],["/archives/page/2/index.html","d122c075237b2d3b41af10d104f5a4ac"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","688406a1cd09f5b0292dc37157dff1a8"],["/categories/Hexo/index.html","51828145e2fc5e2c3b325d5511fa7e5e"],["/categories/Hexo/page/2/index.html","497e7aa026495ae14e435cbbc094f19a"],["/categories/Hexo/点击特效/index.html","d623caf4f979e71535d7096855c8055c"],["/categories/Hexo/豆瓣/index.html","68911eed9f94e17f7afb7895d6c1cf06"],["/categories/Hexo订阅/index.html","4ce0b0567aeac79660546d95e7716d9d"],["/categories/Java/Base64/index.html","3ceb125b2f02cc979b27f9af1920bd85"],["/categories/Java/MD5/index.html","351ded895e7639cf12de6da19c180ff9"],["/categories/Java/index.html","479dad1b943310cf98b8f5d2bc52a33d"],["/categories/Valine/index.html","12f0339523708a9e946ec69f21774043"],["/categories/index.html","25edf3dc82be55955419e69b7486d011"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","eefde53ee58663a5c85a80df8b229035"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","55651b2450010d6d159aa653476eb9da"],["/games/index.html","4acf9983e9cdfd8821ae08dfec32cd56"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","6d883c5f45ee6fb95dbcf7d8e5cd36bb"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","13edd33d396f99614e0e7ad04be9926c"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","08dc1983b1bb4dfda29a28080efa3989"],["/js/src/algolia-search.js","1ad5ff225328eda1fa3a020c16c092be"],["/js/src/bootstrap.js","9a6537baf04ffe77f03d36a8ec203aea"],["/js/src/bubble.js","64f233d81a74da76f883c3a4df10e5f4"],["/js/src/canvas-dance-time.js","976f033368d5f235b99db4a045ad77ef"],["/js/src/clipboard-use.js","7461a5baf0f2b17bd7e5b3a0ba6ae0b3"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","5f8fe35b2560430ba8a7d55d72cdcb6f"],["/js/src/exturl.js","bc45ddf575a3057fa5c931abf98769df"],["/js/src/hook-duoshuo.js","31bd7e0faec2060bcdf4c34ecf0f2f01"],["/js/src/js.cookie.js","c218720baacd2970072b8cc321aa4c87"],["/js/src/linkcard.js","b9e299009237c10c0148afd2559173bb"],["/js/src/motion.js","188c3490bc81a7dc4751e7d37b359ff1"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","8a6ea63837be37ad2dc715d03a6ce625"],["/js/src/schemes/pisces.js","9b92d8a0a7865f48b07968de0ea69b70"],["/js/src/scroll-cookie.js","380926b4051b065f232c95dc704eadb2"],["/js/src/scrollspy.js","20eee232088598c92f9f3322fa0b93b9"],["/js/src/snow.js","685aee8d11b137a320db511e81223204"],["/js/src/utils.js","5b774acbc43d61f88dba616111d29654"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","90d0ffcb824e155614c76bdac30ce8d6"],["/lib/Han/dist/han.js","fb3c7f4e76e4bbe96f4e0df7ad8952f4"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2388e5ce49dd32440cb7dd0b8c7e3638"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","049ac025ed25156279c9ba68b905001a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e8e75c9dd7258894b4ec40a1a6b24e59"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c53a5b188045119cc667bd1fa3501f49"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","8430928de0fff5ad5883d8adc22ca887"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d98c22b6365a4b7422e5ecfc8a4a5757"],["/lib/fancybox/source/jquery.fancybox.css","d7bb5cf213aed4515f0ab7f5cf515d53"],["/lib/fancybox/source/jquery.fancybox.js","f7ef48f282633a49ce1b59a7343bf014"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","cbd88ca9ed02cab677a0015379646dc3"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c986774e8e548d9bd7a043a31fa1a750"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","2486ad9d31e78225fe12d8e6b75944b9"],["/lib/jquery_lazyload/jquery.scrollstop.js","9bed36b02d69df497b6d723a7188ec37"],["/lib/needsharebutton/font-embedded.css","50d71e4ca6cbb0e6ae427b745dcc6c10"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","299af1b03191eaa669e3307e6afa18d1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","85414a617c748d8fb6ce2706a9bc7b3c"],["/lib/velocity/velocity.js","6cefe923883fb35ef54dfcbdff77f5ec"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2ebe475888bc5b60161f050a8fc129b5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","3cdec2798f3e6ed5b453b8cf4914322d"],["/links/index.html","be0c11ffa5762d96788b47b873a7497e"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5790168caa48cb2fc99e307645385f9b"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","23810d893a1f6f25d5544ee8701d5ca5"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","a3fcb7345a3f40a3efbf29029dee8122"],["/page/2/index.html","ed5c29c14334c4d0b77403160504d840"],["/photos/default-skin/default-skin.css","9b961541d240d21039f993fdb4a73535"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","f59ac9345d4d4abf0530c4a3b7218b0a"],["/photos/ins.css","a4972630bfcb0bdf234b66637f684ad2"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","d7f608710238034aadd9d1db7e629e01"],["/posts/27514.html","1d1f5bf1286cf151f9c47431ed470e1d"],["/posts/39d47c89.html","62ad93f3a02d92ae93d154237f38ae06"],["/posts/3e5a3bb6.html","dc31d11f90c574c71cbb419248bd3f29"],["/posts/495d0b23.html","473c512b30ac1a971e3f8436c1499d20"],["/posts/61913369.html","0258ffa2a5a8f785044c72f654d9fae9"],["/posts/7fbe9500.html","065d3bf3bcef8ca327d49693a5116107"],["/posts/89ea6c8b.html","a3c9468ce45d073fee1f4fb90d7900a3"],["/posts/9c9b482b.html","faeb8ea52a3be9dd4791bf00f3c8ca20"],["/posts/a7df3b40.html","6287586de141bad101c064d4b3d648d2"],["/posts/ab21860c.html","5c320a20bd95a6104cb5f3de3ca1e030"],["/posts/bf9eba42.html","2d2e549afa7cd88d6b3486cc1554bb72"],["/posts/c1cdcf68.html","ad2d1d71c404ff86de0e368fd29a973a"],["/posts/c4782247.html","8107fc963ef8987b727a6e5684575980"],["/posts/c7631ec1.html","2dca76e33fd68991acd8fb87c6fc0f3e"],["/posts/d7399e80.html","9905625275fd1415c2b9c8402747b49c"],["/posts/dd9d9f86.html","ec9e6a81450db85ab06b261e18fa2523"],["/posts/dff7e11c.html","46d0c2226f0306a7e929368b5f2f09f4"],["/posts/e1b9c6c5.html","ea6974607e4c5410791c79a06bfded7d"],["/posts/f68f129b.html","8b9160d1d9cc12423c4e316418df3c92"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","86f51602e9b924bf882b074442af59b1"],["/tags/Base64/index.html","f3ce7f292b2b78d4d20c27f117ab70c3"],["/tags/Coding/index.html","d30aaf014f1f955713b7cd1d7c53ec94"],["/tags/Github/index.html","724a382868eb13fa068eb722c5705a81"],["/tags/Gulp/index.html","f9916dc270aca55c2ce8d22cd2a5b334"],["/tags/Hexo/index.html","0ab002835d9f387fde580f6322b5c228"],["/tags/Hexo/page/2/index.html","ae8e95f7a353e6f1134a408d28cf6910"],["/tags/Java/index.html","1721d2c0ead3a887c23f259955ca1924"],["/tags/MD5/index.html","7eb2708cfc2d1406b95668c52e5badd8"],["/tags/Neat/index.html","eaedc570a4af177c419241bc8c605d40"],["/tags/Next/index.html","cfdb8edc88aefa3f60679ef95beb8e27"],["/tags/Password/index.html","8489d195289786a8aadcb72507e19463"],["/tags/Photos/index.html","11e9afdd353209c1d9a394035ffee91b"],["/tags/SHA-1/index.html","d7f164bc1f8f61a4ac0629eb868c09bb"],["/tags/Security/index.html","102ecf368117f4646107ce38b2f0ebe7"],["/tags/TravisCI/index.html","e0fac564197493d0ea033cf9e8803465"],["/tags/Valine/index.html","851bd304f304416d69d81b01c5d37dec"],["/tags/index.html","8d8395ec27bca35394263926b6000a3b"],["/tags/lazyload/index.html","bf7d55cdf614fc8cf4ce5e3359732beb"],["/tags/代码块/index.html","199083e0743e4c9d6da70123f04ea02d"],["/tags/图片/index.html","d500a8dc02d2f9b994c5917f27225e69"],["/tags/邮件订阅/index.html","be7d914ef86a60ac7e6fe7dc513ae8dd"],["/top/index.html","0eba5a2f03a6903d6c0a39a4bebd694e"]];
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
