/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0d60564a4c78a03248a7791fb88bd3d9"],["/about/index.html","a2cf811522ac0729c4bfd8e636c87002"],["/about/renxi/default.css","8539cf09e3b8e0cf9542595d8f7579cf"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","010af49b5c7e38b9c626e2be4053a262"],["/archives/2019/11/index.html","5f867d2a1fa9c951e3542eed9b47963e"],["/archives/2019/11/page/2/index.html","10385acb6190981d1dda6ce855e85a43"],["/archives/2019/index.html","a0fe33168cf0466eba349595d5dd0ca2"],["/archives/2019/page/2/index.html","37c19fb2f403f418a0d2f56a44b28bc3"],["/archives/index.html","55d1f6f0e42444e8f2ff98c566187682"],["/archives/page/2/index.html","8757e8ca972a253a264366a48f822959"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","7982250ef8c306a84558c5bfc0158998"],["/categories/Hexo/index.html","f4997d580a874558ad902ade5a6ca74d"],["/categories/Hexo/page/2/index.html","bc09df2b613fcfad0deec4dfc44464c6"],["/categories/Hexo/点击特效/index.html","e609c6b1f4d032d13074ff627db7f607"],["/categories/Hexo/豆瓣/index.html","6a0b40d431e38a94ab5d5e5fe3673738"],["/categories/Hexo订阅/index.html","ff67c1e3bea69c145c4ac99572720b90"],["/categories/Java/Base64/index.html","c6587a7813e0dff704d4e1abca1e791a"],["/categories/Java/MD5/index.html","4867b5254ea1b84062765cfa5d45d68c"],["/categories/Java/index.html","66e534af517422bd645eb5049bdd09a6"],["/categories/Valine/index.html","c29473964d26f3c771682c00549851b6"],["/categories/index.html","34466a1bf98dc753284a005169ac316d"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","0e41a352dad4c17408f5d24bb83dc964"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d455bec23d474c6d770bd575aae5d298"],["/games/index.html","77b8b7bf285e6190aff0d71d17e112d5"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","ce7619a264ad2c118bb174d48f86561b"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","a35e98b836de920ea331eecb4c99f7b5"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","03308514b7615637c3b24807a8e0ea1c"],["/js/src/algolia-search.js","0fddcce08f06129c0b4c6aabe3ecd937"],["/js/src/bootstrap.js","571355043ae52438f33a688f341c6e65"],["/js/src/browserType.js","b087836d2098997446399577ca4066e4"],["/js/src/bubble.js","b7a7639da95b8bdab0bf2825b096eec3"],["/js/src/canvas-dance-time.js","ce6f1cd2e6b85a775f1e4de59c13e401"],["/js/src/clipboard-use.js","d5245ce340e1707120c2f67f1f790b53"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","edca06d3735922b12eb90477e26ff122"],["/js/src/exturl.js","fbfe7e6b040a39678b77fc40cac590a2"],["/js/src/hook-duoshuo.js","abd1372f902854c48e28bdbff31d5898"],["/js/src/js.cookie.js","7791b44a7a44240ace519d0d10621acd"],["/js/src/linkcard.js","de422cac028930f2e32a666d0b324811"],["/js/src/motion.js","de075a5798339d3f78b7c9d41988793f"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","eaf530839bc1b197a172dd396b4cb1aa"],["/js/src/schemes/pisces.js","332d6101bfdefc4e2581b88bfbca3ec8"],["/js/src/scroll-cookie.js","fd08eafaa106dacf426a99a4b01e6915"],["/js/src/scrollspy.js","8d3d8e2fd23dab80a13c9ef046a4e829"],["/js/src/snow.js","30fceb76c19d6793c87c0452eb6e47ea"],["/js/src/utils.js","75a31ffe83be9d2b7e714f0542e2d1be"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c0e18e7c84237b3c533989d1bcc53038"],["/lib/Han/dist/han.js","c6895ead4e3f5c7409460504ff091e78"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8a68e65f9c8cb00e972df64f9cd62bac"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f043a1c548e46cda370bb3fb764322bc"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","43affd9cc2333454798653ff25da4f00"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","517e6b2fa8c679fa1140b5939e0539b0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","aac92b3d93f45a860cb96c80fddbf7af"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","73270e098371013cc6294ca4a7fca402"],["/lib/fancybox/source/jquery.fancybox.css","bed2d8bcc492cbfe057300c81d3a5c62"],["/lib/fancybox/source/jquery.fancybox.js","6570023d1a11af927fdae3f593f52f02"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","4ed96fdfb2959dd2962d24dae8b146e5"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f902c03f173b687e3cbdde3c020e8122"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","1fc895d8f8299d70cf1c3ca4a3a86852"],["/lib/jquery_lazyload/jquery.scrollstop.js","a179908bdbfbb26b3f56d09404c39c68"],["/lib/needsharebutton/font-embedded.css","71df22a40e559d5ea83fd120c1e3e625"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","46bf15015c9877fcac80e992399f3acb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","8eb48308e0de404205e54b0d75609fbc"],["/lib/velocity/velocity.js","39264ec50d1a079ae40b29455b4b75d5"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","d3b113da46909a06ca99ae42d1e40fb7"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f4f682000e059f655ecfcd84f22597b8"],["/links/index.html","c2d8e4922bc62f68c07bc2b28d2ceeee"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","1442ac8fb72a2ab9f7f435f29e4bac37"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","4acb7c4c1211b2ebd2ba44f6a2f0b08c"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","fb5ddd666bf4decbbec7edecca74f00e"],["/page/2/index.html","c6752f7eef74fd64e8f635debd5d7e4c"],["/photos/default-skin/default-skin.css","fdb4686fa9af6f77149ea9155e7861e1"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","71ec202f62dba981e2712e25ca845143"],["/photos/ins.css","0b833e6c6c791799efde47836cd54a85"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","3d2544135b08a10e9b9f3ed5d301c778"],["/posts/27514.html","cb1435a721e2e6221874d3138adbbb59"],["/posts/39d47c89.html","326917b9fbb7e632845d70ffe5ae0ffb"],["/posts/3e5a3bb6.html","bbec2cc2997a752d35693ff16f1a616c"],["/posts/4878e6f3.html","f99038358568aabf8ed7d4b75333930b"],["/posts/495d0b23.html","e23fc8108c8a98205e287002bcd341d0"],["/posts/61913369.html","700983b2b3c7be7f94d9da8f602a9563"],["/posts/7fbe9500.html","5508a0a11ae0b9fa326eabafc4384803"],["/posts/89ea6c8b.html","a0d2325437a60fb8a244a1fabaf86647"],["/posts/9c9b482b.html","2eae34c2dea8dc62d6c9de852978be22"],["/posts/a7df3b40.html","5d70ac7388950ea34f92463437cd750d"],["/posts/ab21860c.html","e447fba2a2996aba6ca0545a12fe99eb"],["/posts/bf9eba42.html","4a5cac30ce4f27bd6c2936250350ef50"],["/posts/c1cdcf68.html","e8626b000be8cde2ac623e3a0054bc6c"],["/posts/c4782247.html","3902b5090b96dca8d64c8e2d0411ab1f"],["/posts/c7631ec1.html","ea4cbe7c9243a01172df330348bba583"],["/posts/d7399e80.html","0cb2769345be2ce536f0618afb30cf9a"],["/posts/dd9d9f86.html","10f745017d6b6ea8fc1f4b2700df2fd2"],["/posts/dff7e11c.html","12f696d49a748b5cf19de62cb2dda561"],["/posts/e1b9c6c5.html","ac567163d1265d15d84ff2f654ecd15c"],["/posts/f68f129b.html","e8f6380c96a752109d2436b1d63f2069"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","c385465fa33bfba09a10230c67baa2a7"],["/tags/Base64/index.html","4a8f9ffd77f12f14f2e9f23400d0811e"],["/tags/Coding/index.html","74512e21c18c249391f048b85d76c5e1"],["/tags/Github/index.html","73288df51eb24d2becdf599ad031f3a6"],["/tags/Gulp/index.html","3c5fb10860ee2170be3c19c81702e019"],["/tags/Hexo/index.html","771f6f832d1cd923f1694b5192b8d161"],["/tags/Hexo/page/2/index.html","e14f91a7f1a93a7e9325fd37711d1af9"],["/tags/Java/index.html","c360e4263546cec33d1791af6f9104e4"],["/tags/MD5/index.html","ae2a5ea0f3da4ff5784a16d62ddd9b0f"],["/tags/Neat/index.html","a749c4156f3c1967cba1b35c585e973a"],["/tags/Next/index.html","bc4a7b4f03a8d411caa8ec49c5bcacc6"],["/tags/Password/index.html","a4085e06fb94a1fd3a2421632d1050cb"],["/tags/Photos/index.html","f48bd81e5b0f600e3ca05bd7c237370a"],["/tags/SHA-1/index.html","50e9f699cc9a85a8bb3de592f743b244"],["/tags/Security/index.html","fc548f660501c698c8d63471d3e9cd50"],["/tags/TravisCI/index.html","137489fc2f3fa022b7490f61000c3feb"],["/tags/Valine/index.html","74336b8c9a7f4225694cb5100b9a7e5c"],["/tags/index.html","8a7c365e5c7805f17bcc26e0054e5c6a"],["/tags/lazyload/index.html","b36a9d7820b9444f7aa44acf1c63df71"],["/tags/代码块/index.html","313114ffc5fe5ea5462f832265f87d89"],["/tags/图片/index.html","0cceaf55446f441332e97ce9c3045fca"],["/tags/邮件订阅/index.html","80bda38cde85deaba5c40b6bf74ea2fe"],["/top/index.html","bbcf44ed9372cab960ba9c97ed21b583"]];
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
