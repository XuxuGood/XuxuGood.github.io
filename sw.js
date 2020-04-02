/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e70e5d886783553b54c23975d70b3f0b"],["/about/index.html","973828df4f79e500c0674e5642928a35"],["/about/renxi/default.css","a1678d778f644a2d91ea8c2dc48a9276"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","52f1bef19885f2d2f4507f955874d033"],["/archives/2019/11/index.html","3c5aa0e1bddc486ff4acd16cde0cc06c"],["/archives/2019/11/page/2/index.html","5b34a7112d2dc6785dab22ed91a99285"],["/archives/2019/12/index.html","888cb2efdfaf73d5dca80e9bbc434470"],["/archives/2019/index.html","eb14a6931091cecfc1e000b2c8009746"],["/archives/2019/page/2/index.html","e5bc6d7b2e9e84806db5a648d3450df7"],["/archives/2019/page/3/index.html","747d4925f3679adfe314c3e5bbd40bce"],["/archives/2020/01/index.html","2ca01a24f9e97f0c56f76fdf400fb7f9"],["/archives/2020/02/index.html","b20882e9bf5af317339e952b0d57d9d1"],["/archives/2020/03/index.html","8581cb3a5947e35c84efc17ee1f8cc08"],["/archives/2020/04/index.html","1397329064dd3c328c1577d93e5c336a"],["/archives/2020/index.html","2b47fedfc876f5f1adc0046d959e2593"],["/archives/index.html","6c9c981073e27dbb3e9e8b780c501001"],["/archives/page/2/index.html","2b5145cae4922543fe5748cac0f575b9"],["/archives/page/3/index.html","64443cd1de28f2867465a317ad4dea6d"],["/archives/page/4/index.html","c050f059cfba9de75aaa37a49843d5bd"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","c5aee66b363254674cf3cc6ebc8183e5"],["/categories/BUG/index.html","08a4cf3a492654c3aec4eca2ff3d5444"],["/categories/Hexo/Hexo订阅/index.html","d604c83cce7f65b4360be292daf35cb2"],["/categories/Hexo/index.html","7e8a306355eb89bb1a7716e5650523c5"],["/categories/Hexo/page/2/index.html","2328cf879d2994395557fe60ba2e7b2a"],["/categories/Hexo/点击特效/index.html","7a3c4cc3b74980728028964bc46f614a"],["/categories/Hexo/豆瓣/index.html","b44e974551014c679914cd76b19b5817"],["/categories/Java/Base64/index.html","023b1653ba90825cc67c2abfca68b3f0"],["/categories/Java/MD5/index.html","0be9632f41fe856ee2a3684abccaa7ce"],["/categories/Java/SpringBoot/index.html","0dc5da09a6c330ef83a22d142f05f314"],["/categories/Java/index.html","55a3df416de6ec34805d1485a79be739"],["/categories/Nginx/index.html","cf0aab867f1b692a55cd0b7d082ca7c5"],["/categories/Valine/index.html","530a7537eb0fd2c872935df602df7cc1"],["/categories/Vue/Axios/index.html","e2f7a5c0cf1ab320c107124ef22d84de"],["/categories/Vue/Jwt/index.html","5709230a65f3a189520466b2f7a719d0"],["/categories/Vue/el-date-picker/index.html","9a808a410a1f8cfca1bf9f08370b7852"],["/categories/Vue/index.html","ae125f93d8a448b26aa43b6f8fb723b2"],["/categories/Vue/工具类/index.html","2758cf616751cb5c4ccc15e16f0dd0a5"],["/categories/index.html","fbed1285c78b5b066c852a0702e3f9bc"],["/categories/视频流/index.html","4abda08e2cf4e7cdcc72cf9ee9071ad1"],["/categories/视频流/nginx-http-flv-module/index.html","a1ab3c040ba7c6b8339054658010ec38"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","5a7409097d6f36240449a8dc032a99ca"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a4a5c6a6d70b0c257b93360e40be3499"],["/games/index.html","14fadb05113bcb3a1ab1d55fa1f7b002"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","564804d3c055c4095ab61be75703d989"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","b016d188570f4870fc9748997ec3efdf"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","feb476169d84b497c26672ba0c1d0585"],["/js/src/algolia-search.js","884e49fceb64d6189f9a2f1ba4afa822"],["/js/src/bootstrap.js","40446d5d162c75c67ad70e006e3eadf4"],["/js/src/browserType.js","deaecf479c252fb12c90e7bdea2cd85c"],["/js/src/bubble.js","9f82749678afd29045f2eb936e5a2957"],["/js/src/canvas-dance-time.js","06f2642e90ffbc287bc4d83a36a848fd"],["/js/src/clipboard-use.js","04b062865f1ff2fd8acf0e45c5cb13ac"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","5df8cbc5f149897e0eba8c9929a9df19"],["/js/src/exturl.js","f3b58d2c3fffa0b7eb6e52d16898b153"],["/js/src/hook-duoshuo.js","ae8b4ac7913a42607ddff44f2dd192a3"],["/js/src/js.cookie.js","23f066b15dceea1274cf272f4c70638c"],["/js/src/linkcard.js","4d2cc79551427940a07267978dd93612"],["/js/src/motion.js","481c25ae39516909d6f320636de8e43c"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","79b35fcbe82168e557804c2b20fe8611"],["/js/src/schemes/pisces.js","8d380ab5555378e2eca4efac8aae2df9"],["/js/src/scroll-cookie.js","cfcdec1417d9b431472ad70e85f87560"],["/js/src/scrollspy.js","8b14264cd9de203d27ea1f1e27d3a57b"],["/js/src/snow.js","9699ca73453a13a3a453f00c4963149d"],["/js/src/utils.js","317048ad3b589ed17fa89d5ab61105ac"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","94a28d9d8f78e61a2a6fcc16ff3d82cb"],["/lib/Han/dist/han.js","31d82b09284c4512bd987a2f18f468c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","eab07da6fbd75c03693a5a0480ae0a66"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1823fcbcfc1c64b3bbc6cc5293e70fde"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","cf2611dac94fe43c5667a7576d904cd2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","dc5878b8908800f8f394a39e601e3ffe"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1c2ab14ef667c7c12889b9a6832f0653"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","de8c8b0eaef562eb0b6018aaf7c9e1ec"],["/lib/fancybox/source/jquery.fancybox.css","0be3d3a3523f114b266c57ba6e40f7ea"],["/lib/fancybox/source/jquery.fancybox.js","b789a5dc7d5a6664bb54805a46eee1db"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","91a1b6cb6f4da52fef004bdcedd974e6"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d52bf277c290ea9adae8c38ad7d49e73"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","e81083bbcb935a4a8a17be5028b4a239"],["/lib/jquery_lazyload/jquery.scrollstop.js","23c675afc274c36d2138a0830f4e899b"],["/lib/needsharebutton/font-embedded.css","dd7b9a124435d0930a5ace99140426e8"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","5f787fcc410d0ee6f796127850a7b9ca"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5247735f8124f0ef20dac517e844f75e"],["/lib/velocity/velocity.js","35413f000f7a7686c9d99c2123ee589e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bc866cc40789a54c28472b6ae91fcbfd"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","99249bd3795b05df3237dfc70bb7cbf7"],["/links/index.html","1a62572c33eb36682aecd99a6df6269c"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","dfa902ee89f368474cffe47d27e64fc7"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","c5471609c21dd4d06109375c57e5a242"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","673e2a2db9e963f07d284810c6f4c730"],["/page/2/index.html","09c5071cbab012928fb86f7d7dd9ae61"],["/page/3/index.html","c0ba3b46ec02ae2801f974cc4d5e8bfd"],["/page/4/index.html","1f0bd860e12cac4492cdcc2af444def7"],["/photos/default-skin/default-skin.css","3fe45edc597cd92163ad786ff041711b"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","9730cd8dff39b0d51ce7363720d0a9ed"],["/photos/ins.css","61dd50ec635bbb1edf1daeee74bbdc7f"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","b363756b263f0c48ca9ab98a48a4be8b"],["/posts/19c94341.html","a758651c6ace748554fe0b2ce1b7147a"],["/posts/27514.html","7e433d88acd318d0214dd5c196664f71"],["/posts/2b56997e.html","1eb94aeae36d2efecfa7b4e7cb6781ad"],["/posts/358f95d9.html","cdb522e9225ece7adc615fa5dfbd93fa"],["/posts/39d47c89.html","3ae0255dbd4caaa6fc2588785b0a6133"],["/posts/3e5a3bb6.html","2258443a28cbcfc520d7ed0df24c3ea7"],["/posts/4394a738.html","c5d2ee5220fcbb8c81a52fb4f4cbe503"],["/posts/4598d3ed.html","e304056f1291b60104d2ec34020da890"],["/posts/495d0b23.html","e390a79df72326b7f390f2234c8b86eb"],["/posts/5e773fb.html","b47adf50ccfe805c22bdbb722c96306d"],["/posts/61913369.html","d3200b21e2b4c523a8774d2e2db32b9a"],["/posts/69ab28bb.html","19c91786204b0b20735d307e699d40ce"],["/posts/7fbe9500.html","46072d45dbf6142494411e63a9519504"],["/posts/89ea6c8b.html","9d203af665d717c3d93b57d240bcaae8"],["/posts/9c9b482b.html","dd1cccf2c4c369ebfda14b87136f4a08"],["/posts/a63fb3ae.html","ea76dc23d963b0329b858a5bd813c46e"],["/posts/a7df3b40.html","4a535a327b255ac1ef9d269203c8859c"],["/posts/ab21860c.html","7808a26d80c7edea1d2d88416b187a21"],["/posts/b4831a5e.html","6e69c642166b5eff4bb1b16b050fa0f5"],["/posts/bf9eba42.html","0cca35a83571a42b51c39cf124043254"],["/posts/c1cdcf68.html","03bb8909cc1867c34302ddb0085ad7fb"],["/posts/c4782247.html","b28af8e6c85dc0c24494ca46105454fd"],["/posts/c7631ec1.html","c6985aefeb38348eba7bffd7940b6e70"],["/posts/c9b4cff2.html","8fd00e2f1744acf705a8e5b1805c83fb"],["/posts/d7399e80.html","a3c2ee6b020220208d3b5df9e4446c0a"],["/posts/dc877e7a.html","82d00dca4911c20d1fbef5091e0e8645"],["/posts/dd9d9f86.html","8a0a2a774675907428ffca3bff1b32f5"],["/posts/dff7e11c.html","9d7d9cd4c2d731355d300c4ca722a686"],["/posts/e1b9c6c5.html","2042c934de16e502c501f27efa6acd3f"],["/posts/f68f129b.html","53edb41cf326bec2ee268e6eca706817"],["/posts/fc31ea3.html","9844038a25122e724de4484bab2190f0"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","fc6f851f58f9009be17fe009b4d1a780"],["/tags/AOP/index.html","d2ac59c80fe72707c3d65b6ebe497cdc"],["/tags/Axios/index.html","270630c69e89d2420bedc58972c90876"],["/tags/BUG/index.html","05e55c66070d26a6ac11e2991a219e3e"],["/tags/Base64/index.html","e587f73752665b775d7542241aadd243"],["/tags/Coding/index.html","f4d6587da76e6f3d9e6726d1d08c1c8b"],["/tags/Github/index.html","44b7bdc70585ef14f32f152f32dbb19a"],["/tags/Gulp/index.html","f415f36b145ae934699a7b242e9f6a5f"],["/tags/Hexo/index.html","4f97136b4e95393edebac683e993680d"],["/tags/Hexo/page/2/index.html","5272143d190e33f8b861f594546f980b"],["/tags/Java/index.html","f039d2ed8e5ada6d5de331ea114d665b"],["/tags/Jwt/index.html","ef2a40a955ee5364e9d9394aecb285ff"],["/tags/MD5/index.html","2a604b543ffc42a0bc16954cbd424e1c"],["/tags/Neat/index.html","20929f4ffc16a2e951862fd3359d5076"],["/tags/Next/index.html","eec0a6ed67981b3df2c3681eb9ceaf6d"],["/tags/Nginx/index.html","42a6c0eeb9e4f09aaf51f49611a4e488"],["/tags/Password/index.html","72589ed84fce738a8256130cabf58bd5"],["/tags/Photos/index.html","3c4445b306fc1d9b307d8de2f9396ffa"],["/tags/Rss/index.html","363f6e8b2a1db5d022d3978ef7e21a19"],["/tags/SHA-1/index.html","bbbe9e2759f38d90d9d017dda8fb7dcb"],["/tags/Security/index.html","da4cc5af262170c231b44dc5b32aabaf"],["/tags/SpringBoot/index.html","3af2402e4b1fbcdae1f7c049a03d1bf9"],["/tags/SpringBoot打包/index.html","60da865b59a440e6d60743674fb72c6f"],["/tags/TravisCI/index.html","d465bef9fb1d58b52451b7dc45dbce1c"],["/tags/Valine/index.html","34b6e50888414419f80070d1eb0dc385"],["/tags/Vue/index.html","81f1e8c667276ad58a38da21a365235a"],["/tags/el-date-picker/index.html","8a153a225a392129d90825a9a18f9245"],["/tags/index.html","a52560d7fabf945c0a882e5da0350a2c"],["/tags/lazyload/index.html","1971e0a2043685687df25a1e70276780"],["/tags/nginx-http-flv-module/index.html","a4cb3069e8e4b2e93cf0d77a042e6d29"],["/tags/代码块/index.html","6548649cc5d2c607733d47ec3dee92c6"],["/tags/图片/index.html","355c42a77ab06c586c269087102a8c8f"],["/tags/工具类/index.html","82c04feee254d39f8e346bc994fc30ae"],["/tags/邮件订阅/index.html","b9f0f2493d932a92b386d6c441211d51"],["/top/index.html","a8d2ec92b1300a90ac3f93a0d9c6edfb"]];
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
