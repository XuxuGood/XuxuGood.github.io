/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","64d66284fa3008e77f3d7d36ebd8f7ec"],["/about/index.html","56edb2bf1ac1b54cc1213fb190a9e405"],["/about/renxi/default.css","a5976cf152c61e660158754f62f8b671"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","7482be20ff142befe7fc2ddf3d16243c"],["/archives/2019/11/index.html","06a363950c0afebfdb158ff597e85acf"],["/archives/2019/11/page/2/index.html","2cd8646df889a21e575f38cf39341f04"],["/archives/2019/index.html","8f599b1c16471774d38e3973e9a6449b"],["/archives/2019/page/2/index.html","013483c87467f49d9db68c77beffa41e"],["/archives/index.html","006dac97afa056a2b52dbfe6d7eca92c"],["/archives/page/2/index.html","6f21f0b0d724436d0950a6400c597137"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","16b9318859c7ed54ba8b70a300d57b5f"],["/categories/Hexo/index.html","4729a443be358ed2dd250226ea7a2de8"],["/categories/Hexo/page/2/index.html","8b5df2f1c6448359a988384dc0e6322e"],["/categories/Hexo/点击特效/index.html","be76465a9f86695cc035de7ee992d7d0"],["/categories/Hexo/豆瓣/index.html","50c47c7c295cdd8bcbe9a848e1a10665"],["/categories/Hexo订阅/index.html","10ffbed76125d16cf727fcff8dd4e455"],["/categories/Java/Base64/index.html","7d1bbea75059844ef5749c1ad8741291"],["/categories/Java/MD5/index.html","30b12d0055dae21d30902961d7d0523c"],["/categories/Java/index.html","da27c612afd029b93877f22e1f8622fa"],["/categories/Valine/index.html","02b769553db35756dc6654b614b61926"],["/categories/index.html","4f21c528ceba05107da85891c752e4be"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","0e214579a9e44734be6069e559138de2"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","765be4948449cc657c3fc3e85418b8e4"],["/games/index.html","ad4ea5f6c4820b5fdb8087acd3e875d3"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/snow0.gif","31fc38a82198b4133b5cc6feee296ccc"],["/images/snow1.gif","3c5b3626c42d66d70ff91c21282ef610"],["/images/snow2.gif","0b379ce486be98e1ab473ce25a3b8fe2"],["/images/snow3.gif","3c5b3626c42d66d70ff91c21282ef610"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","606b2c7c9d9230c8d923756e45ab6883"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","82cbf9e51bd48b3d013c8c8dbd2690a4"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d15231fe16141c34d65f378849cff5e3"],["/js/src/algolia-search.js","9914c4b07cc325532b9070f133493571"],["/js/src/bootstrap.js","aaf9fcdadf749c9713970a1ba76f5c0c"],["/js/src/browserType.js","832d033ecc27a2253107e12d1ba53700"],["/js/src/bubble.js","7a94c704438569126c98c58349444be7"],["/js/src/canvas-dance-time.js","c04015b198e140908c6b9989975cdd79"],["/js/src/clipboard-use.js","082d3bf12dbafe9ca0f08bb0fb0191db"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","1b7b161c87bff3ab740447f6893837b0"],["/js/src/exturl.js","1a51a6c7a70a907ab086511ad7bc4ded"],["/js/src/hook-duoshuo.js","3446e539ee0e297ac1135554ee707843"],["/js/src/js.cookie.js","5840ff463892a289cc9b4ba94b3dddc1"],["/js/src/linkcard.js","1fac318e35cb2a53feeaed2f1103b3a5"],["/js/src/motion.js","ec08299c873a0cc9446fc7cbf7c906fb"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","15a028c918d56e4e7a4555a8c6803641"],["/js/src/schemes/pisces.js","6a5a571ff922cad325900e963951ff3a"],["/js/src/scroll-cookie.js","08eb8b9aa3c9d8860953fbc24a0ae76a"],["/js/src/scrollspy.js","da6680a5042595a8f3529a1ca89b4171"],["/js/src/snow.js","a5c8234a73c45f38c30a2efceb7de617"],["/js/src/utils.js","65d47f1124b3a2c66a03f5c3fbffb91c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","8ccb85172bde50bb4546df6183d11218"],["/lib/Han/dist/han.js","aef25733fb704d1e0b2446b5de0e361c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","424ddecb26cd4b1348f06ee49736fbec"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","242db6b940f6249ffc97e66c6ff79294"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d0e17b39d51e05a4100c7967ae03a933"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","78cc6de7cf572e8f1993aa6994106c66"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2ced75d13455ed556dc2943d969e0a70"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e5b15d5eca95d1878e41c786249ab599"],["/lib/fancybox/source/jquery.fancybox.css","000fc767c474ffc6e1e6cecbe037076f"],["/lib/fancybox/source/jquery.fancybox.js","e8b7ab5fe28d61fdb19ecb1ee1ef352f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","a3c92adf8ceb5f10531b743ad1b0eaab"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","7442b66e061fce3d26942d2cddfdbda3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","83f756d5234370508390d593cc3ebdc1"],["/lib/jquery_lazyload/jquery.scrollstop.js","f5ba7e1b2df8737c2b7163d510c8a754"],["/lib/needsharebutton/font-embedded.css","37a8dfb4df5347c1972a73bfa6df27e2"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","7dc403fa075e95bfb4b5968637dec69c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","602759249f9d49be5cfea4e3fdb01e44"],["/lib/velocity/velocity.js","4b85b091449adf9d21f8acb63a9bc22a"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","9308fbbf14ac2b7fb84dd66ce3269af8"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","746e6eb034b22a0f9f13a61d6b10ecd1"],["/links/index.html","411f8825f9c0a7b699cff0339dc39028"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","4306541fe7dd20fd63a3eb9d4211f01b"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","6bac46b52200fbff251314ee0372af7d"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","c76c16c5d7d9599d4dcf170ad8fbf3ab"],["/page/2/index.html","431f175d665271cd2bf442dfcaec5c69"],["/photos/default-skin/default-skin.css","d0d6a6c1754ad4cd2bc37a212ced6d5a"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","9a28e4baf7886ee5bae35f03044c8b40"],["/photos/ins.css","fad9d4e50b4382acaf23917a396f8e21"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","aa61a8bcd8a2f0fd5174999ec3329429"],["/posts/27514.html","c7d2f6632a73cd633493d3f588e6c86c"],["/posts/39d47c89.html","fe2a16411fc55e217b311b37955e4dd0"],["/posts/3e5a3bb6.html","7fceb5e35dd84547b0f151597db20757"],["/posts/495d0b23.html","eadcb4cdca0816afabbe096894a20dbd"],["/posts/61913369.html","84d7c1de3f69ffd088cc262040ffba78"],["/posts/7fbe9500.html","166923519a40ba31375bab5b9431e43b"],["/posts/89ea6c8b.html","b368597960ff662816ef47b33a6747a3"],["/posts/9c9b482b.html","2ac3cbf3a9917c3e66a62e9adddbdb5d"],["/posts/a7df3b40.html","2402843e88019fca0e72c4a8603f6532"],["/posts/ab21860c.html","1b3e8159eccc74fa216340ccd49dd17d"],["/posts/bf9eba42.html","e308832aa9623fc859f57d84359b9202"],["/posts/c1cdcf68.html","d8606fcd82fff035601988bbac76baed"],["/posts/c4782247.html","2cad4c92b7f72035070ba72382561d19"],["/posts/c7631ec1.html","3287f61748ed8e305120395fa09b8477"],["/posts/d7399e80.html","c9aa4b7e50e9aa2c41179eaaaf96dbd0"],["/posts/dd9d9f86.html","7461a172a334a2194fdabf6f7f097f96"],["/posts/dff7e11c.html","a89c4cbd394e6c4e0a9e3d96b9750515"],["/posts/e1b9c6c5.html","29ff3582181b90321ba068fb1442f05b"],["/posts/f68f129b.html","4b98d5305e6ef387f1b24630c3961f47"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","0dfded644502ce0d47c81d1bcd361928"],["/tags/Base64/index.html","651fcc25816786c2bfc43065ec6ae9b5"],["/tags/Coding/index.html","8484f47a866cf64445cfb759364f5f3d"],["/tags/Github/index.html","d637ccabc1d9a494f5be55c0a48c0141"],["/tags/Gulp/index.html","c72105d3c8c5ccef43f931129c7be95d"],["/tags/Hexo/index.html","71e4e9abe27e9f5e1ff6bd3c18c21f05"],["/tags/Hexo/page/2/index.html","9df8ade676e7f471f62bb55e502d11a6"],["/tags/Java/index.html","49802269e94dd02a584a32aef99e5e72"],["/tags/MD5/index.html","4be636e53abf84ff42e02430bb2c8d7c"],["/tags/Neat/index.html","4b792c5d8edad2dfea96ba0e85f13398"],["/tags/Next/index.html","4b8d73846ad107e8ccc69d28a0313b12"],["/tags/Password/index.html","176a040b3d97678a70361b46e08af321"],["/tags/Photos/index.html","1cd9bf16e6dd1fba1cb8b40f76a07cdc"],["/tags/SHA-1/index.html","427519af1266cef3e8f9e588d4a2ed61"],["/tags/Security/index.html","c0e3a6bf89da9e294fd9e850d423e63e"],["/tags/TravisCI/index.html","a2ed04f431c8d7d79799a30d0a06ed88"],["/tags/Valine/index.html","72aa3fc18543502035e00104ae295e4a"],["/tags/index.html","7b3c931e8e633873ae5640cc3b28bb39"],["/tags/lazyload/index.html","108ad2c3fa6177e8d8b402c4da3cda2a"],["/tags/代码块/index.html","6b06d5915f01be86c7fa338cb34c6bcb"],["/tags/图片/index.html","0881c42c55b6b6c284e9f67d8a32aaf8"],["/tags/邮件订阅/index.html","c5c6d1d2bcbda0ef87939585835d1471"],["/top/index.html","ca4cf11fe31c0a8b3ce33154b94333ec"]];
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
