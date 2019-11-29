/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0c5742e16860f043b96450b52614be4d"],["/about/index.html","d69cc83d974cf243d9e6dd53607503ec"],["/about/renxi/default.css","9534c87fc3da9c70a9ed65e7c257cde2"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","200746522c1e6e0b151ccddfa9de64ee"],["/archives/2019/11/index.html","b2ee1e87f34e8223b57a56c234bfa48f"],["/archives/2019/11/page/2/index.html","4bc69850f8a38561f10e3675563e835e"],["/archives/2019/index.html","86e9cc1f6da7394ba971b32dd8c1d3ec"],["/archives/2019/page/2/index.html","104f8336b6b5e1289765dccd9645b2e5"],["/archives/index.html","4f339eaf1cad38c4cdf19372be68448c"],["/archives/page/2/index.html","26be714f53caedce53bc2ad130f3b004"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0b72a9656e7bc22afba971037bc0625b"],["/categories/Hexo/index.html","33d7f7e4767ab54ac8f8587a05561eb2"],["/categories/Hexo/page/2/index.html","3ca1c23315f8b5d3e73eda9b6aae4f06"],["/categories/Hexo/点击特效/index.html","b517aaf174c1266d39f8617048dbe995"],["/categories/Hexo/豆瓣/index.html","7e1e3083e6cf4e9eb8b19a1d214a7dc2"],["/categories/Hexo订阅/index.html","a30aabc92de8fd9513f3ef29038b36cd"],["/categories/Java/Base64/index.html","6205dadeb51172129f46627d47fa8ced"],["/categories/Java/MD5/index.html","d1564c380f9c67196d2b954a0e29b6b4"],["/categories/Java/SpringBoot/index.html","72d28a2af69cc4d1fbc011356b70f5a3"],["/categories/Java/index.html","40cba19e043e85af03c39ef8926093cb"],["/categories/Valine/index.html","c9cc26166272be876004b6d46fca22ac"],["/categories/index.html","b4bf365dec98716d7fc6e79c017f0e86"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","2c5b6a9f7e8daeebeec65c6724316eab"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","665a12f31493f1389cb7f4a6f84e5941"],["/games/index.html","f54fab7dc2863f12425832269429e7a2"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","26a085782b13e47739dc4c1ea18888d0"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","efecc464faf8ac16b23e60d909dd7557"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","e4df8b5e0ec7afc0141132e034a25044"],["/js/src/algolia-search.js","0d8be49d62afdd857e8f5f73a5ceef77"],["/js/src/bootstrap.js","96d45517e0c3ae7f9a78b2cf59fd6692"],["/js/src/browserType.js","73f00ce0f58d50a63c6212a2ed0c6f58"],["/js/src/bubble.js","5c163563be87c5dca91980e931f8b309"],["/js/src/canvas-dance-time.js","5b47981e8f337228f5b59668009781ec"],["/js/src/clipboard-use.js","c6c5817e5aa6d9e4ea155fcad19e762d"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","dd4fa655170f46a5d3dd516b3d4ef26c"],["/js/src/exturl.js","70c2005911de4cac823b5fadc7f0a7c2"],["/js/src/hook-duoshuo.js","58e652ce1d00ed7584474cd1e6755d72"],["/js/src/js.cookie.js","ebb89272f9da61f81ee3d286a9ae5c03"],["/js/src/linkcard.js","a2ce0b21db3648c633383a373b89196a"],["/js/src/motion.js","dd8d03d1e311a86e1af90208c5095f59"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","98a4f051ff6e0d1ac2108e560b87930b"],["/js/src/schemes/pisces.js","6afbb6621e679392ae493d77189da3b5"],["/js/src/scroll-cookie.js","ee5d49246a65490472ad2f60f28eeecc"],["/js/src/scrollspy.js","550e69f4b362f6a580a88109288f51ab"],["/js/src/snow.js","90d65652c9cf7a1eace957cd45d1564b"],["/js/src/utils.js","3b222dba03add98afae7245e59e5e905"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","daa9ceb6578b7757077ccec716fc7f5f"],["/lib/Han/dist/han.js","18431bc415453fc70fa931c8fe3f7db3"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","5f7d2bb21abcd061762b701105c9a682"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c4725a97f5ce8142225212d5b010c7b3"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3144f7f5282beccc2883186da25790c8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b5b8157acd70415e55cfa0f88976f619"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","840de942fc91bac2154cb2e4480e8d21"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","68fa4af862f66538a6654da22a7b0d81"],["/lib/fancybox/source/jquery.fancybox.css","eff119b8cc444ddab9386e0d2ed87fef"],["/lib/fancybox/source/jquery.fancybox.js","3589dc0fecb5efa7bf7ce4ee55ae5b5e"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","8a28d2b964489e265f668ad559f35bcf"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d561f0900061a1fff96e795bae62ef19"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","2a72c9b56d4fe0270de56c315d87b9c2"],["/lib/jquery_lazyload/jquery.scrollstop.js","299d3d1742735a294a23e04ee9ceb1da"],["/lib/needsharebutton/font-embedded.css","e9b2adcf02e0ba8c26bf4a2c6639b384"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","01d5fc2a2de5bd82100566bd7447b23a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d1b4d41bde14d422d4a15de2a6d0d8c0"],["/lib/velocity/velocity.js","5eba2c1fd2b80c4895bf9c4d9df0e4a4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","7502418ce1255fd76819ee488c530048"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","4ea81deacf2694757c432688eedd198b"],["/links/index.html","4aadb0fbdeecd92e5e82ddc627b0b9e9"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","b6b76c1a924fc2ed83c9eeb41a668f5e"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","821f27e37c5748cb6b0fe2fe8e2f84ba"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","cdead0a9a42ed9780ff6b09e038d32c0"],["/page/2/index.html","80ae7f66ba4729a21b61d788ce1ec8da"],["/photos/default-skin/default-skin.css","156f8b180b46bb5d1ba177d9ce66fa44"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","64f93b31a4a0283b272f781f6169ea6d"],["/photos/ins.css","59e26e415b0511fbd1fe87be99395435"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","0072e024f9ea03df16b69ceb9d0d65b6"],["/posts/27514.html","f6abf213474f7cf59ee347d043fbbeae"],["/posts/39d47c89.html","ed6d5bee94257fb371f152bd365e725a"],["/posts/3e5a3bb6.html","1673244a8f5425422633c17509e8fb65"],["/posts/495d0b23.html","c8bcc00f6554ac3d2c38302afab6ddc7"],["/posts/61913369.html","d1717f90b172f2662680653c90c7a1f8"],["/posts/7fbe9500.html","de507f7228028c6f70bce2f1ca1c16d5"],["/posts/89ea6c8b.html","5237a1b1098744a71462ccf7addfea8c"],["/posts/9c9b482b.html","40566b601e6cb7c120189efb4d02256b"],["/posts/a7df3b40.html","72e88d82fbeefb360c78224a7e9f141e"],["/posts/ab21860c.html","bd4e12f369282620a71f0534293fee20"],["/posts/b4831a5e.html","5555cdc5eb7462df7a180474da3d201d"],["/posts/bf9eba42.html","cec42d5fc473c961bd2cd19416c0dcc9"],["/posts/c1cdcf68.html","dd5b578042ea96b789a7d155fa8b0005"],["/posts/c4782247.html","804a78548580c2247251dd32390497c8"],["/posts/c7631ec1.html","b4c58ab1eea3aa5af82505c7c985a210"],["/posts/d7399e80.html","b0bb5abe17b2c2ee649ede7b86beb4ea"],["/posts/dd9d9f86.html","5dd72e628d5b80a63322511f3e795f02"],["/posts/dff7e11c.html","3940719578d68fbeba93a08ebad5d3ed"],["/posts/e1b9c6c5.html","42aa2c1d892e60b5c2d8cfbb9bdde067"],["/posts/f68f129b.html","b223e4f007e8f95e5f5c7f96053dc721"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","485bb72188553383d796db71bddd3faa"],["/tags/Base64/index.html","4d4d86a8273e0a191d42fd7d4ded7a48"],["/tags/Coding/index.html","5431cc8dcb5a13d8ef781bd473f4c3b1"],["/tags/Github/index.html","cae0ef6e5e6b887816fa81d7a47d6802"],["/tags/Gulp/index.html","6cd649b2071551ad0f87aa23ff2ee7f4"],["/tags/Hexo/index.html","4fdae43d586e7b7393a9302e95f0daa5"],["/tags/Hexo/page/2/index.html","d60feb53f13210154fa8fcb9a2ce2406"],["/tags/Java/index.html","607aab9c365dc3a98053e11b9a0e9064"],["/tags/MD5/index.html","6ff552798968e2a29057ba93effffe21"],["/tags/Neat/index.html","39ca1553cbbf911bce87c8188fc3ccda"],["/tags/Next/index.html","8963c389dd90ed24fa8e10f5d025731c"],["/tags/Password/index.html","f01985a1d928d1bfc7a07bd4c5e5fbdf"],["/tags/Photos/index.html","dde637ec495362281e08601bf4fdca1c"],["/tags/SHA-1/index.html","d0cb54d8721e3bf8c38dd2ce2fafa48a"],["/tags/Security/index.html","754fb31651caa98909cdde7974dc89ec"],["/tags/SpringBoot打包/index.html","60bdf0cf1a11e9d36e01adc7be206422"],["/tags/TravisCI/index.html","7eeac445b3dae88bdab3dd4f8d8ea7b1"],["/tags/Valine/index.html","fa2a8caf12848185139d5dc2ba5d1297"],["/tags/index.html","1aa15d3450725fdb87e74d1f1026055d"],["/tags/lazyload/index.html","691c6bf71cc02d6a40f23e336a584d28"],["/tags/代码块/index.html","c1d49081097b3668220dfc42f462a5bc"],["/tags/图片/index.html","74f030118a0936ae5eb27cbf581ff6c9"],["/tags/邮件订阅/index.html","75fb7ae9b14ee9dafcfa5129c4ef3e9e"],["/top/index.html","ea195124b04ac8998cc7abd233b5efaa"]];
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
