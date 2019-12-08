/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b50c237feef568204ec2bbb42af64933"],["/about/index.html","2a0870da173dda0fceea0b6e4e809e6d"],["/about/renxi/default.css","f86606ffb2d45b0e7a769703484c3596"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","c554f30661a67b4e05f445b8adeb8412"],["/archives/2019/11/index.html","6cf08125673da70b10e43a1826830be6"],["/archives/2019/11/page/2/index.html","158a2829d510b2102b6c0fa997a9761a"],["/archives/2019/12/index.html","24a0ab2f4b35ed1f0f188afab9230e31"],["/archives/2019/index.html","762608d1daa451f492f5c49fb677511a"],["/archives/2019/page/2/index.html","188a5bb5e67b41d4e0e4963c3541e39f"],["/archives/2019/page/3/index.html","871cedcad76cf8bab7f2e545bb27c867"],["/archives/index.html","75c9dd09747d891a033e27d4cab01641"],["/archives/page/2/index.html","ead90d75dd2914359fb6ea2bcfd59eb4"],["/archives/page/3/index.html","ce53596f218130e742655606a03518fe"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","17e39a0d3325529acab8a8c36c7f2fb9"],["/categories/Hexo/index.html","4159497e11533ad45de34d510142851d"],["/categories/Hexo/page/2/index.html","8eeccca81d6cd29301775af81b111826"],["/categories/Hexo/点击特效/index.html","782001a6c7aa8b6d2dd3400f8e67ed38"],["/categories/Hexo/豆瓣/index.html","da51c67bd51c3843151541b139b190db"],["/categories/Hexo订阅/index.html","f1e86ff79e4387d4deac7aa752288919"],["/categories/Java/Base64/index.html","4fff86ddb2779837e201e58ad172df42"],["/categories/Java/MD5/index.html","4c9ff057dd3087b9535f344757376a36"],["/categories/Java/SpringBoot/index.html","7f130fc574f711fa9b292156bfde0763"],["/categories/Java/index.html","0dec5c3da0e8a4f09181593ade35d7e6"],["/categories/Valine/index.html","54279ce010e29d2bc7de3c15f2ceb131"],["/categories/Vue/Axios/index.html","5a1b6d24c1c283ebf79fa8374adae034"],["/categories/Vue/index.html","1b8a699e7522c855530beab628105a14"],["/categories/index.html","459dfb03752b8e272a25ebbf82f46772"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","820be622cd387b341aa6940db0f6ccff"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1966587f9cb50aa5f1ae741320c4e759"],["/games/index.html","3a081234bb415b0ec39cb146ba57ec64"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","49c5f1cdb79efca50650519a86599abd"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","c97c1b0d296f97caa4af09ecbcf7dcba"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d38089b2aae903f93bf579d7dd34f2d4"],["/js/src/algolia-search.js","457d2c78d5555ace0975b6bafdfd3445"],["/js/src/bootstrap.js","387d017ed56ea74dd16c732028c6c377"],["/js/src/browserType.js","9f64a457c9db83feef35225f13757ffc"],["/js/src/bubble.js","3d3eea8a4dfff00c1ec9c5489ed784b4"],["/js/src/canvas-dance-time.js","1c61671d857f4fdf58bc883af8a11b41"],["/js/src/clipboard-use.js","0d65e4c4abc50082b0047d30a33f1514"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a5d095dbb8296fc2bd889c3936cd086c"],["/js/src/exturl.js","b179286ae09ed4a3c4d9b88f9407d23b"],["/js/src/hook-duoshuo.js","95d4f8048686812a616361e77e6379b2"],["/js/src/js.cookie.js","71a33e61cf8a24d161edc87378795b03"],["/js/src/linkcard.js","c20fdb77f61e3391698cf7e71955253e"],["/js/src/motion.js","8423e3da4669f1ef71b852d9f3e7ed44"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","1f9a0e06856e921110046aca4b0daf3f"],["/js/src/schemes/pisces.js","50c60bde2caa82399bed319499321688"],["/js/src/scroll-cookie.js","965cf55d7a1d7368dc6d308c7c013729"],["/js/src/scrollspy.js","bb409af17bdadb76d60c2bfb03599263"],["/js/src/snow.js","bef1ed0b1bde02ba6101b9a547e48f48"],["/js/src/utils.js","bf508c1bf2a1e1f077433aeafa95eb04"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3d4d62ef824fa113f393c723705998c2"],["/lib/Han/dist/han.js","af3c5da21fec88949b6efad40bc6514f"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","a66f5b18f24cc07c70064b947b509e4a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ceb2238cdedd9a08f953f1628638f148"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5180dfad91e94d3396ef318caf27f54a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","57d7c7a0a5f99424cf65753ed306d045"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","584411614d067a49286d5c4e2eaef5ac"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","14e1f18f9091839a53d46347fd39ce14"],["/lib/fancybox/source/jquery.fancybox.css","b0a24410a5d4e6363bae661cb2dcc461"],["/lib/fancybox/source/jquery.fancybox.js","1b1dc0c069024f60a326682b2a32e98b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","d4e358940078d284c045f9a65480d0ce"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","24fc856c7dece74acc746d79e00bb0f2"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","15b9ddf2b007a128a6085fb1d3239e02"],["/lib/jquery_lazyload/jquery.scrollstop.js","9c6f2d51221fe209fbef24e38708ba0e"],["/lib/needsharebutton/font-embedded.css","d345d57b5b1dbd2f8f4fef3691806eb9"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","40b78c6f3c71a7075296c925f760c59a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b8c26f34171fd3926c1f414e649b24f"],["/lib/velocity/velocity.js","697f4a8079615dea37f41150ecf5fe99"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a2492a81a72522596d348802dd85b0e0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","849648dc62d129ddd39fa759420bc6a7"],["/links/index.html","5a2ae5d5e6093b6d4565352a25eb1137"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","b8bdfde3b208958b89b8147d254bc054"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","e9922dfc97753268fc27fc47fb50d3f3"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","229589a79ba5d4c6381b788320d571f6"],["/page/2/index.html","8a01158f2df4fafcebdbf10d78c755c5"],["/page/3/index.html","8b8f474c740b38521312d1a83958937f"],["/photos/default-skin/default-skin.css","7f27a8128960347ae941418a4d86ed2c"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","dab2f4f3130f84c28a8f2a303543b08a"],["/photos/ins.css","9978850bf8ac82ecdc38bfd97b8441ba"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","8f0eb2054b2f9013ec1e365f2028c424"],["/posts/19c94341.html","e79f1f5f0ba31d977a44c802ce6cdf82"],["/posts/27514.html","79326ee0192cdba44bceb38b99e41d1b"],["/posts/39d47c89.html","33d958446bde548fcbe86a324784f59f"],["/posts/3e5a3bb6.html","ccfeedc59240e57bfc1e70daa3fb9179"],["/posts/4394a738.html","d20c8a6ab516bddb9080ef4d1773c788"],["/posts/495d0b23.html","c10e490b84ef23d27d5e4f3d3211d2ae"],["/posts/61913369.html","abc8e426e098391fdb6aca710d9b14a6"],["/posts/7fbe9500.html","9f13e62af161a780a14a311d73fd75ba"],["/posts/89ea6c8b.html","8b4c9e7628cbb4b88b388787a1cf3f1d"],["/posts/9c9b482b.html","b8c494015f13a86b1784fd8ee20f46b3"],["/posts/a7df3b40.html","515b119535c25c0500f25f56f184a7a8"],["/posts/ab21860c.html","59c553024e334990b8d4aab8e7d368f2"],["/posts/b4831a5e.html","2dc4ebcfb1a7076173e1d48aefa5f97e"],["/posts/bf9eba42.html","b2c0da12663c71b278e0a659714a7040"],["/posts/c1cdcf68.html","be230b753f509d6baa1cd638724a8e97"],["/posts/c4782247.html","4ef614b02630896835138a7c6474adab"],["/posts/c7631ec1.html","c38cc06541701e17ddb97f9d6a547aa6"],["/posts/d7399e80.html","c2524c755a23914659b2abc21eebf76d"],["/posts/dd9d9f86.html","f0546c8ec9cf67aec4af288b5a649143"],["/posts/dff7e11c.html","75024db619b30897eb18ac7ea50fc532"],["/posts/e1b9c6c5.html","d066b0f9a558e8a4e36f66dadc1c62eb"],["/posts/f68f129b.html","5a80d189deb3b56421c7ec34f0836470"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","506ab12fa1858c83fea17c95a49513a4"],["/tags/Axios/index.html","1cc7799eaf3314a764262d1399160cff"],["/tags/Base64/index.html","3523f8d752ae693f37a64f6fa04e5f93"],["/tags/Coding/index.html","b9758e3ddac658308597c272abed1b69"],["/tags/Github/index.html","c7367aee348b0b7b5c95cd6f765932a5"],["/tags/Gulp/index.html","30c32786fad23e834ef3e73ed76e757d"],["/tags/Hexo/index.html","9260c80168a1a15cf6f3dcacd88d7194"],["/tags/Hexo/page/2/index.html","5636eb13a05e86ffb67c508c5bc7a57b"],["/tags/Java/index.html","0b55e47f67da46b2629374b086c3c158"],["/tags/MD5/index.html","8f84a5f19fae2e96d666f7e05b5c8cb6"],["/tags/Neat/index.html","84a9e2fc5d18be8606a36dbb8f63ba10"],["/tags/Next/index.html","b445061187595d1114ef2366c1070ea6"],["/tags/Password/index.html","42dbd4db08fb20d042d42b1f00d01c0a"],["/tags/Photos/index.html","59267bf96b4974a3cced3f8891654d96"],["/tags/Rss/index.html","fc149ac2cbd3a408be4e37c5878bafd1"],["/tags/SHA-1/index.html","e527ec279b5b7869c7c3988d700b9f29"],["/tags/Security/index.html","f86cb4571f1224fbfc9be5eaa88061a5"],["/tags/SpringBoot打包/index.html","b6f1f001d09a75dd2dc5ee4ceb8dedbe"],["/tags/TravisCI/index.html","b7ca645af111505848f07ecaa8995ee2"],["/tags/Valine/index.html","258c403b64ffc0ba1bd1075736612584"],["/tags/Vue/index.html","89ac5378524f7a15845edb69c1963f9f"],["/tags/index.html","f63e056a1e36cb198fdca47ec07853ab"],["/tags/lazyload/index.html","6f5002a35956e170fd20f765296da908"],["/tags/代码块/index.html","3a3303ffd1e0ffbe6812b41942690b54"],["/tags/图片/index.html","af2b201f115b3af7c4b1b64bb03f9a7f"],["/tags/邮件订阅/index.html","68ee24e1b34565b8175647cb6cbf3f02"],["/top/index.html","0f36f6584d6f751992395e9a63d71d01"]];
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
