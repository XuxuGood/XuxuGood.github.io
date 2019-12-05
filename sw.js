/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f738fdbd3df26b68a333afc7b1285199"],["/about/index.html","9dce1b600f77d1a97c44cb735c3ebfd0"],["/about/renxi/default.css","0a14c1dc6d0a6ca71b82dc10689a9db4"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","1a386b8aa460f3bfb3e64fe7d99d4778"],["/archives/2019/11/index.html","38297dd8975b001208b0e459193dc8c4"],["/archives/2019/11/page/2/index.html","95fcbabb7a13a5f624c18d843480f081"],["/archives/2019/12/index.html","5b4cdaba938cffaf027600206b6d5cef"],["/archives/2019/index.html","b8e95c3faa96080686f096c2dea611ef"],["/archives/2019/page/2/index.html","bcd1856eb5db6bbe537025c529863b7b"],["/archives/2019/page/3/index.html","97ecf9024d8fb07331ffd4967e08fd4a"],["/archives/index.html","5e625dc6660ca9206244885d097eb65b"],["/archives/page/2/index.html","cb3c1ef468eb951664fe05bda8779b51"],["/archives/page/3/index.html","b386b0d4e6dbfb15793cd485f07cee26"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","2ccbc67a0797d58a1fb84ced86b0cb77"],["/categories/Hexo/index.html","2714bbadff57a5b89e4fcd4b9895aa22"],["/categories/Hexo/page/2/index.html","3f5ec20a3802d89f6e98e98854e59f94"],["/categories/Hexo/点击特效/index.html","db373f0a109621b8445394763038547c"],["/categories/Hexo/豆瓣/index.html","9b87db5ee09a6cecbeefc06e4e8c44bc"],["/categories/Hexo订阅/index.html","e7b89583df6edaea89d9bd93ab44d616"],["/categories/Java/Base64/index.html","8905cef1b7a22986546ad72479f95f7a"],["/categories/Java/MD5/index.html","b6670b8f96e07b4cd22645520af40ff6"],["/categories/Java/SpringBoot/index.html","704dae512ad9d291ea727d8ebe06f48b"],["/categories/Java/index.html","be9beed78e54cea73954ed85d5f2481f"],["/categories/Valine/index.html","74c05cc8551e57afd95efec8c14b8694"],["/categories/Vue/Axios/index.html","9b5021cdeeae32a23f965dc9e5f59c04"],["/categories/Vue/index.html","9e1aebf207c6a6b9f0e78d095d1845d0"],["/categories/index.html","40e4755447ca9b3781b24012be4f32a5"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","ae9f95eda8b9acb055e3679d48fa5fdd"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","de8360923ad30b92890e0d15f8967bb8"],["/games/index.html","08532e89c5e37c960886fa78c50ca696"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","0a6a2171b2cc04d28e28e03eec990270"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","d8a0e4ff0452e6b36c1d165ce6589db3"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","4ccc352324dd0bf3604e9c312e044c6a"],["/js/src/algolia-search.js","b9f095a405482eca198df7e90f91e4f7"],["/js/src/bootstrap.js","1bf731c49ede954c24b75aeafbca8816"],["/js/src/browserType.js","5f3d113ab736ed9519fbf5c4fe2a94a0"],["/js/src/bubble.js","500c6a22adfac9f7d5c9bcf80b8d81c8"],["/js/src/canvas-dance-time.js","3c4414005768463524a75121945e1065"],["/js/src/clipboard-use.js","2b2e14bedd27f4de027f0ea732db4588"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","d0437eefb91de9fedaad1cc2544bac01"],["/js/src/exturl.js","48696b2dc9c4f01737a6587908b7d2bd"],["/js/src/hook-duoshuo.js","b2d4b0798534ad6566e296fe49afa21a"],["/js/src/js.cookie.js","23554391d34b2dbc7bc206c4d384d139"],["/js/src/linkcard.js","1869e7d46ddfad2da6dcb8e23656d84e"],["/js/src/motion.js","a9cbad29a48f6557e91fa44c330a17c7"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","688b845acf90721f7e7b645ed8a1faee"],["/js/src/schemes/pisces.js","1b9406baf9d2d76964e55b3bf492b835"],["/js/src/scroll-cookie.js","a18b2ac3a9cab9bd6afd2472f5551bf1"],["/js/src/scrollspy.js","fb1b77f3bcdea701479fdcb35eb98189"],["/js/src/snow.js","c9adc726e2118f7c41b3cf55bafaf5c3"],["/js/src/utils.js","525a0394a0e1273a81193db04ffb42f6"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","578bdb45ff632e009adf4dcefaa2d211"],["/lib/Han/dist/han.js","16e4d31dc7bcaefdf5be23de0dc1a544"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","85e738214a765d8cae18571099d113e1"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","06ae0ee4eab41fef0e93eb156fcce55b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","68dcdbdb85f752de559099de57a54f33"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","538e8069ab42453fe8199270d71eae83"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","45b67fecf65cf8cc48f17c85ac58030d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f0af79268b6965f3d944a54730b78b3f"],["/lib/fancybox/source/jquery.fancybox.css","07e852d16def7ec4b509eeed6e9dc673"],["/lib/fancybox/source/jquery.fancybox.js","53ce66884da94832ecc15e9b36350758"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","4ad2d22a343106de66d64f2f9a441c58"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f4eae2a0b7099dd1720d81ab75fe1c78"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","8bf287e841aa994efce42fa7d7dc91fd"],["/lib/jquery_lazyload/jquery.scrollstop.js","ef03a8761ee217a9000d0f635ec2d6a1"],["/lib/needsharebutton/font-embedded.css","e03d7566dc1535cccbfba52d36737f27"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","791d4bc4a0e8b5dafd053244cf9b22a1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","32c7c624d501545fd5f4e7092fa7aece"],["/lib/velocity/velocity.js","61cfbfcac8baae43b62da37932818d55"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","7ed62e207d82f078d2ed59c7b4a6594d"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","8efa7ac8ab3eb644e42ee68cf3fd62b4"],["/links/index.html","3136bc9fb867fa7d588a6d342d0923a8"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","36ebc0250fb3ae5a079fa5678ebe7a61"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","bb2dec44b5b530f064c8cd1506f6a306"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","dd33c50bbb6919af46958e3b9df0e9dd"],["/page/2/index.html","fb82353ff99e6fdf8b1a4a9a04720598"],["/page/3/index.html","fae9cf2f093cd5740b5bd3d393e58ef7"],["/photos/default-skin/default-skin.css","2dbf9c9e3fb3bdc59e6129fd78d0a739"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","52997bcabed1e4c01fee7e551b0e9784"],["/photos/ins.css","f0cd12bb840b6274ca48cf77192c64b6"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","184513adfd9a1f0b070ce3a6663ee3ad"],["/posts/19c94341.html","04e1167f3931ad0226fbc190c82790e8"],["/posts/27514.html","f1fbdda94763785cbb95e6913fbf21b7"],["/posts/39d47c89.html","d72be22804ed603955666288554a9406"],["/posts/3e5a3bb6.html","5e67992e66d6a078ac6a3513e51c833f"],["/posts/4394a738.html","d1c24c36bad0f24e9be9236ebc16e520"],["/posts/495d0b23.html","adf2af9e709674f992ad46790f3ff718"],["/posts/61913369.html","cf20b6eb6742610b349da708ad4fa214"],["/posts/7fbe9500.html","ce2a1bdac0dc5e9c5a12837a3e967537"],["/posts/89ea6c8b.html","e797c2133cd82ae15483454a62c8e2ca"],["/posts/9c9b482b.html","ae37a69db5dbc6e2da4eb1030eff994d"],["/posts/a7df3b40.html","637ad007b64c36f2c41ed32b6387c1d4"],["/posts/ab21860c.html","e912cb4fd9434f87df63e0f15bd673c1"],["/posts/b4831a5e.html","3e1c3310907e39e5242b9eae7fa26125"],["/posts/bf9eba42.html","c3cb3f3f52444681ab60ffcdf72b579e"],["/posts/c1cdcf68.html","f7245501023e052916ee2d516ff7fa3e"],["/posts/c4782247.html","bad167f218af1ab42e1781725c57311a"],["/posts/c7631ec1.html","7019558f3e529e62d805844336083e93"],["/posts/d7399e80.html","ddc38d0eff30d7c24e7be365793a1e53"],["/posts/dd9d9f86.html","3fc7764c3c0db8b2a9b9cc3f4f2ff2ab"],["/posts/dff7e11c.html","35cff186b3456306edb761354378a34d"],["/posts/e1b9c6c5.html","c614818f074afc00bd3bfd66513dd63d"],["/posts/f68f129b.html","8c8733b6d2df2ba6af523a6db1021459"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","d438def060ba172d145d8efa9d589f84"],["/tags/Axios/index.html","88210e6096615f9a2365f612c2d26c88"],["/tags/Base64/index.html","95f7e9fc8f6c4734a6e6c1cee4d356cc"],["/tags/Coding/index.html","a1d7768d8a7d138599c5dde991e39367"],["/tags/Github/index.html","f8fe2879e0af0e307e777b36c554c8be"],["/tags/Gulp/index.html","86a5b4907881123c29f76f1a5c61bd56"],["/tags/Hexo/index.html","f764d40f30b198236a6b0ee534735218"],["/tags/Hexo/page/2/index.html","47ce316ed03930b19da2b689fc2ce974"],["/tags/Java/index.html","c28f062307b6cf021fe81049639665bd"],["/tags/MD5/index.html","69d7d07a4bbbc71f8fe9977ca87ac0ca"],["/tags/Neat/index.html","62548b64f5df1d2a228d35809486503a"],["/tags/Next/index.html","5773eaa0320948cee6c64b63102919c8"],["/tags/Password/index.html","3050a0eb58e4bb30e33d75a8de16452d"],["/tags/Photos/index.html","e6b761f7a2fdd4cbef37a85fd0b7a7b8"],["/tags/Rss/index.html","c1da7ceaf7d9b05f0eaeed139a0b4b47"],["/tags/SHA-1/index.html","ef27acae26c16c1019bff374125d26d0"],["/tags/Security/index.html","b2f1d5966b562db9541caef0a9bd5e94"],["/tags/SpringBoot打包/index.html","898527370ad39573bc113636e2c75b9c"],["/tags/TravisCI/index.html","ae33704c308d53c8c30426623fee70dc"],["/tags/Valine/index.html","acb87d7c6b8bcb2ea600fe26e725624b"],["/tags/Vue/index.html","a391a217494f4a3dec85781856e441b9"],["/tags/index.html","387667ddab38ca57f9fdc8b54e6875d6"],["/tags/lazyload/index.html","da77a54d4b3a68797aeb63ca09dfd0a3"],["/tags/代码块/index.html","c6bb43527a8c376645a56bbdccdbd324"],["/tags/图片/index.html","fc348e08fd9d9819c9fc81d2d14d4ef2"],["/tags/邮件订阅/index.html","8d8788e47522c3181ba8c13359bac9b4"],["/top/index.html","75c80ab7391c8fcee29565f4ef8eb6e1"]];
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
