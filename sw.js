/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","087f53afe552a6858aebc0cf57b7eda5"],["/about/index.html","302ba2326256ddadd384c698fcbd3729"],["/about/renxi/default.css","eb6c0ee4347edf57e229172deec9e034"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","8ff4db23ad0c9ffbc9090b3d22dcf1ab"],["/archives/2019/11/index.html","73bc66a536e399cfcd792b9f6ebceae9"],["/archives/2019/11/page/2/index.html","36cee713dd8fcb6e786ad731eacb46e5"],["/archives/2019/12/index.html","2d93ef4599e7fdc3e0d6d41fa2051d41"],["/archives/2019/index.html","353579498bcdd72d67fa9429290d7ddc"],["/archives/2019/page/2/index.html","e413c8c39b67e589d84582b72c02e741"],["/archives/2019/page/3/index.html","c99f8581941bf4f28c8ff6aad9aa489e"],["/archives/2020/01/index.html","5b1d42008459519e70cc50720a8a4880"],["/archives/2020/index.html","23ccd618c3a024c18fe00b62adee0eac"],["/archives/index.html","fbfc9514246a9cafe5506489dacd2e2b"],["/archives/page/2/index.html","92749f16fd70197a0010c5f371aa9567"],["/archives/page/3/index.html","7ad29a285c3d4c9dce7b9a4b654593f7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f2193ff05e6f5b2c65555bc4fc186f1a"],["/categories/BUG/index.html","89779898e20e0dfec40a43a80e416876"],["/categories/Hexo/index.html","401fa859c18fc2ceabb28a93f3a03f7f"],["/categories/Hexo/page/2/index.html","42a2a90970fde7c4024125dbe19afc71"],["/categories/Hexo/点击特效/index.html","c393680e6ce5b78593c8135b01b1c964"],["/categories/Hexo/豆瓣/index.html","72af25b720c267d04d8f77b639ab1e1a"],["/categories/Hexo订阅/index.html","7441c5db7b92f38d24651f33086b9a8d"],["/categories/Java/Base64/index.html","f239eef218fe27e779270a84dd90f2b2"],["/categories/Java/MD5/index.html","a6fce2950139e6a36ac8271871cc4848"],["/categories/Java/SpringBoot/index.html","07e7a6e8f7a7ee4de816d88f730647f5"],["/categories/Java/index.html","fe9d4c6f54a7e383c686101c834500c7"],["/categories/Valine/index.html","5e627b3f0231217fc25041464f7ee5da"],["/categories/Vue/Axios/index.html","d8225aef9b41db5f0352a951d6422e17"],["/categories/Vue/el-date-picker/index.html","49c112189e2fa9a2247a82a5f93d04d5"],["/categories/Vue/index.html","05b9ec671fa23c9d6cd7b72bc3b170dc"],["/categories/index.html","468cc015226628a92cc0c45d72907b27"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","15106ef2915605295414c11cc206ef75"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","869ccbd0a9936729745ea148757630b4"],["/games/index.html","a68ce0f8439ab6fe7890436f8e2037ff"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","503fe498ad859d05c860470a177e6c63"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","5caa71a6dff98d9e0e6db8a21708291f"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","cd5c7cb86e9fe7d7e4fc8368b19fe6f9"],["/js/src/algolia-search.js","87896d20c2f33d5954ba1164c357c53d"],["/js/src/bootstrap.js","a1ce091e1ae7592a25b2a7f75f4143d2"],["/js/src/browserType.js","32e42a820dae1cd936413584d4bde68b"],["/js/src/bubble.js","4a0ef584090c67dec0afd3fe5a3d0a0a"],["/js/src/canvas-dance-time.js","12991e45cd2971631d93beb8a565384f"],["/js/src/clipboard-use.js","db62f49d62348be060dc070c9117b577"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","0b2c9ee65df3cba4c9a96d714b16f531"],["/js/src/exturl.js","00d2a5228b35d5192165252d1f4ec61e"],["/js/src/hook-duoshuo.js","3f5eca72c7514ff1863f6693e966965a"],["/js/src/js.cookie.js","29e1d89e92864515aaf0ddb23dcbb91b"],["/js/src/linkcard.js","bdd9198aa06e802cac491c233d5ff61b"],["/js/src/motion.js","a50d2fc867920a577ed3f39f4b8e538b"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","def825166ce161a01b9381a9da82712c"],["/js/src/schemes/pisces.js","b77c90028ab7d0d6cca045603bf603f5"],["/js/src/scroll-cookie.js","e237c192dd36ee29be6b4e8c94e89914"],["/js/src/scrollspy.js","6d0d0f957ebb0a248f7259b64b6d1b9c"],["/js/src/snow.js","32d7a68de060a8e4e5127fc9b250c42f"],["/js/src/utils.js","32ad27113f901041af88258d7ffd8f58"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","50887a4f9233e0ed266876ea9c535dac"],["/lib/Han/dist/han.js","fd52747531652ecfc8d13613b03ab3ab"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","06f17a37791289d47e464e3518594b39"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f281e3221a3e3b8786aa16c9e1290816"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","06d5c8e6a9c8a4a57e0a6608b39f1b94"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","3fc96685924c16f183e18476743a6f95"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ccb767d5530d58a936eb91eab89278ca"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","89c87e7693d6889b2265749bbf8a9c69"],["/lib/fancybox/source/jquery.fancybox.css","0a24ebd368c5eec621e01ea11118ffab"],["/lib/fancybox/source/jquery.fancybox.js","2f2aab24ac2422c30bd715b83d5376b7"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","2270fcc9a1feb7e43b8264b535bcd9da"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","339c5558599319772b88f4c4bc2599fd"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","19e25fb5b1e0a8bf06aeccd005e665c4"],["/lib/jquery_lazyload/jquery.scrollstop.js","03d28883d258af4f7e26e9ad30c3941c"],["/lib/needsharebutton/font-embedded.css","ce4f2f9df3a3fda6d67915f42415802b"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","b5b4d4502391179f45f458805421ba42"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b5003b1f99a3919ecb94d73a9be813ac"],["/lib/velocity/velocity.js","0997d4cc1f4a3b6f2ba3a00e13f7450a"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f806b910c776300fb75362328d7f7411"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","214fb4cc4f0a651e3e8575e0636ee2f3"],["/links/index.html","f5ff0e949e359af837bb31da5feef965"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","6b211b52f66b84a31c75cea621a1c7e3"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","e6bffd8b06ac25313c004b84e56ce0d2"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","9ef240abfdcd7635e62b660eb04cacb5"],["/page/2/index.html","69cc5b46efcc8efbf6a0d87a6637e971"],["/page/3/index.html","917a8a5ed24e80851bb8cbbc0b2aa766"],["/photos/default-skin/default-skin.css","df0761b8b23c183b262ebaa60978c5c3"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","05fef0ea11431af7a2e094d385b30b2a"],["/photos/ins.css","68b04f9bfdf7803e12f1f760c82a40c6"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","a2bb2ea71e6b019f9139a2642b77edba"],["/posts/19c94341.html","a75b4152ab71cc5479f0a47c45300acd"],["/posts/27514.html","bde125bef6c158182eb06ffa6cf830e6"],["/posts/2b56997e.html","cc86643048bb7b5ddd1003393e164a02"],["/posts/39d47c89.html","62514547ba31fafbc860814ee10d6c53"],["/posts/3e5a3bb6.html","bcd7e17737a887bb35266833b31a5bb7"],["/posts/4394a738.html","916515628c733634977f3d5223dc21d3"],["/posts/495d0b23.html","af94e02fa5aefd0822db7c4e50480079"],["/posts/61913369.html","7ac3ce543fbf6e8107326744e9682f90"],["/posts/69ab28bb.html","9777357c224914526adf489d1d84797a"],["/posts/7fbe9500.html","dc38362c37d52daf424e2b9a7bb19399"],["/posts/89ea6c8b.html","7337ddc9e7b56d4897d4c4dc24a041d0"],["/posts/9c9b482b.html","cb4ef9b5ab8df8e55affaba8d69c785e"],["/posts/a7df3b40.html","bca7a1df45c6359b6432fad0b8746ddf"],["/posts/ab21860c.html","4dbdbe9d9e5dc54003b0b1e9cfd33cb8"],["/posts/b4831a5e.html","3983e4ffc23b90504a006beb04e5bf26"],["/posts/bf9eba42.html","4ecc2ccf22fecd2a095f9ef10f4a4a1a"],["/posts/c1cdcf68.html","c5e676f9b42d88866d661221fb669bf1"],["/posts/c4782247.html","106ff90b7b9b1efaf39432d7c710f8af"],["/posts/c7631ec1.html","28231e36d2a67494ea05ed34efedd418"],["/posts/d7399e80.html","e93cd8549725afdfa32007a4eec3e91f"],["/posts/dd9d9f86.html","2db8a82b276961e5e9532edc42ba8f66"],["/posts/dff7e11c.html","64e56e589ae4a740fa598c62de4eb014"],["/posts/e1b9c6c5.html","fdb9198bac0d94f87384f777810d3e9c"],["/posts/f68f129b.html","2aade3ff0cc439e3613377931497b01a"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","b9bf4e8471ad2e090840f1ac998b076d"],["/tags/Axios/index.html","93ae49e841ace17fe0a2b60588b93b1d"],["/tags/BUG/index.html","7acfb794c27df5e302bde823afda0b2b"],["/tags/Base64/index.html","a2a562948211125c476c8a094389caa4"],["/tags/Coding/index.html","a2340c001ab881bf3a0207e6deda1f18"],["/tags/Github/index.html","22c6e3f159b913a8f5feef09dcedb5c2"],["/tags/Gulp/index.html","37a0408793955f57361914368b5cbb56"],["/tags/Hexo/index.html","01033e8c4e178db5b16e58463c1b4341"],["/tags/Hexo/page/2/index.html","2ff58e428428392e4e8e15bf077f2bfa"],["/tags/Java/index.html","1a2d5c68be422919ddac4b54fe6a727e"],["/tags/MD5/index.html","e0f2db294732c90484266c912cb8eab3"],["/tags/Neat/index.html","2420634dcf4080b66e378b84557e8d36"],["/tags/Next/index.html","be0299813716fb34a4c397c5586d0b8b"],["/tags/Password/index.html","5334c8153a444daf8ffb0d8adc341fbe"],["/tags/Photos/index.html","c5f06a8a0e1d7141afad93c829b44772"],["/tags/Rss/index.html","4bc0933251c165eac3f0bcfe80f54c6b"],["/tags/SHA-1/index.html","63318a87df25a2f1bbf89392df6b70a4"],["/tags/Security/index.html","a818003a7c6fc865fc2eb27bfdfa1564"],["/tags/SpringBoot打包/index.html","6a4ddc24cb551c97d07d8908b6f90d78"],["/tags/TravisCI/index.html","aa1a7a493a5fd851716b73d083ff5796"],["/tags/Valine/index.html","d9cfc826df367bdfcd98f7bea23ca4b7"],["/tags/Vue/index.html","019fe7de05ec772343b1f42fa4df4966"],["/tags/el-date-picker/index.html","b3270f59f044e3086fd796631c2e8251"],["/tags/index.html","665db3322027889edf99599eb4c2263c"],["/tags/lazyload/index.html","feabccfa645e64a451f9dcc236763787"],["/tags/代码块/index.html","ad581ed3bb9ce4507d7257e5f2bca769"],["/tags/图片/index.html","609d66b3348ac464a4e62775e9c40e12"],["/tags/邮件订阅/index.html","915b81b6249a9c499767352e3fd1f7d6"],["/top/index.html","237b2d8d7f38a01a51e143a1b0e72b00"]];
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
