/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3f9cf02845b85a39679d44a41b2beafc"],["/about/index.html","e68a42e84d03792732161b72bc0e76b6"],["/about/renxi/default.css","f443bb8286f8ee9d37025054a9403099"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","7045aa3ae3bdb64dbd5fae92e17d3882"],["/archives/2019/11/index.html","070048e0d4b9f23e51729c79305cc4c7"],["/archives/2019/11/page/2/index.html","a5b7eecef81a347f1ef9d37f6651a1ae"],["/archives/2019/12/index.html","0f321e371c861d4e6ed2ecb6c2486095"],["/archives/2019/index.html","3d1eea32709d1f0ce6075f2c447bd644"],["/archives/2019/page/2/index.html","5bf89710448fd674bbb99973efca96dc"],["/archives/2019/page/3/index.html","6e61e2b886dfc16a08df436860e0d294"],["/archives/2020/01/index.html","6d0504d4f4aad577e5470b2adb2439ed"],["/archives/2020/index.html","7582a5bf5ef7f15186cc15d4451b54ff"],["/archives/index.html","369ee63c885231ede895fa2b6d7a5954"],["/archives/page/2/index.html","7d3dc32bf40e7dac9983c9d105837ace"],["/archives/page/3/index.html","4b481ea9cf04cd27d9ef411164a7e634"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","fceb149b0632e97908af081225dbb324"],["/categories/Hexo/index.html","d896fe8d6207dd81b62e4eb4ab1d8b85"],["/categories/Hexo/page/2/index.html","e8c5aa372ed33ddf1628ec9c4eaff9ad"],["/categories/Hexo/点击特效/index.html","37a3772d41f3dcf4be80b177da84f94e"],["/categories/Hexo/豆瓣/index.html","82803c25811c43cf30e8ca708bf9cae0"],["/categories/Hexo订阅/index.html","c6b07409ac90aa4ab9d4c90404b50568"],["/categories/Java/Base64/index.html","fc50eb07b2ff62f37d31f3b850befe21"],["/categories/Java/MD5/index.html","433002c90c1d8d8930fb771aa8883a89"],["/categories/Java/SpringBoot/index.html","3a479b5e1b9c2aba30437a488eba32cc"],["/categories/Java/index.html","fc7761fab6d5ec0021b49c8a20afce40"],["/categories/Valine/index.html","0f2ff6c5e1c4830bb000a2859ec971d5"],["/categories/Vue/Axios/index.html","42688242995d8c608011fdb85b64e874"],["/categories/Vue/el-date-picker/index.html","701fcdd2a188fad5eb2ad346a7a2d302"],["/categories/Vue/index.html","7b34f698ceba6a75a13170fe0688c42e"],["/categories/index.html","c3ee79a3351336085d62bed9bf920e62"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","78b806439c786a513a452101140965b8"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","91d400ab14d098f7d31e43cec5a2da45"],["/games/index.html","d7b172b592ae7c64f4893ee159210758"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","31f07e06570d1e1055772765a3b384f9"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","43eb2db7283012dce9eff8e405a14a67"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","0dce4631399c2e2355c922e35be849e6"],["/js/src/algolia-search.js","8b8ec27d81bc6f9c30f32d8dd5d24dcd"],["/js/src/bootstrap.js","b7bf67d16db82443f8a971977b9582e3"],["/js/src/browserType.js","2fb871cd3e4127df29b582f693ed7afd"],["/js/src/bubble.js","2c60974fdfeaac99a2578216d6ab3af4"],["/js/src/canvas-dance-time.js","b98d5567bd08723fe8241c61c6ac9cc8"],["/js/src/clipboard-use.js","3d8f5f5fc8956c71f65ccdeab9f8a97f"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","242b8fde6fb8b16edc10db1af171a551"],["/js/src/exturl.js","acc6e3197d05095dc4ffca251578f2c8"],["/js/src/hook-duoshuo.js","2bbdd390720ee2f36c10d7da69ffab7d"],["/js/src/js.cookie.js","34b2251bdbf86f6744f98d94c73aa74c"],["/js/src/linkcard.js","e01a9eebd33ec69769754ba278bd51df"],["/js/src/motion.js","cac0db6cd0b4c399fa0ecf60c364151b"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","81ae33c8476f22c41d6b51c2638755b1"],["/js/src/schemes/pisces.js","3c18cc9679dcc189642311c45bbc24db"],["/js/src/scroll-cookie.js","eeab7434b22cfc5c1799a4ee76273a19"],["/js/src/scrollspy.js","37b04a838e119e873883f288936f8b99"],["/js/src/snow.js","7f0050f1c6de83af90f78a7910d43a89"],["/js/src/utils.js","b02a1f2de6d60a4e28aae9a355c6a38a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","875235075ddd98a2f07e1243bca376f4"],["/lib/Han/dist/han.js","ff7fa177601434017b93dd18dded17a1"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3288fc741a5b18648e199c9727b842e1"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0e8db040f3f204ded251d3dd61b9cd16"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ec6c14f27d6c9e8bedee7b0d491b10fa"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","40bc6c343dce472ee864079aa7a3c7fb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4bbfedb0927cbeb6457b987403ec0b30"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8d12b03876be816b7f4b3d098d219c87"],["/lib/fancybox/source/jquery.fancybox.css","cb335c0ac79588329c20f7538763d1df"],["/lib/fancybox/source/jquery.fancybox.js","1f4e8052a70130beaa87385afa060412"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","56afc9299f70972e941bd16fa1e5fd36"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","9ec5846126e0c59e32148cd42a00c3a1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","84e1fabd5c404317bdadedd17cdf747b"],["/lib/jquery_lazyload/jquery.scrollstop.js","d6d436137ba6445c72f4f597cfc60c44"],["/lib/needsharebutton/font-embedded.css","5c2142f612629381036043af2559f1e3"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","9e013dc5675f14ab5f0fc1b3e4291a45"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ea8c66ad4a6e786f128450ceb76ce659"],["/lib/velocity/velocity.js","04db6c3131e98d50210da451fb17572a"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","0f11384a84f9d666a780f1e1ec9c664b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","7ac182ae4d7223f21ed38bbf9c7c53b6"],["/links/index.html","3780c72cf5a865b6dac8619aae584c2e"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","1457eb40021daef2156907fe9d74874d"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","fa81d26bd97a2a42c58382abd1d2918a"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","437e9fa28ad82c59b607b55cdccb1888"],["/page/2/index.html","080ca9097af793af8f81f21ffeec25c8"],["/page/3/index.html","5fe019924a20b2f9633916cd5c8b724d"],["/photos/default-skin/default-skin.css","2d9b029cbb13419a0eb5e7e834177923"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","858f294689c44a3bc61fb300b713c32c"],["/photos/ins.css","a9f7089f84ac0008eb9e7f043430a852"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","59f4756131a1fffba53665ff56d05f50"],["/posts/19c94341.html","77b68c0639f9719715878c7a25da7518"],["/posts/27514.html","287649bb4e3a7d78463ce5526b46aa69"],["/posts/39d47c89.html","31afb08066d4f38ac2ed66d9a3cfcfb6"],["/posts/3e5a3bb6.html","4647cba8ec644e9a4171353d68adf40a"],["/posts/4394a738.html","d89e3b2d5c4e2ff621d7a2688d726920"],["/posts/495d0b23.html","cebbd3b00b48bb67c1d3fa17439a3070"],["/posts/61913369.html","b9d96dd42bd5d29506fbfb409bfaa728"],["/posts/69ab28bb.html","82621ff6dee9132ef05fd29c7ff10322"],["/posts/7fbe9500.html","b0461c72659cb93510d36951eedcaf12"],["/posts/89ea6c8b.html","c42d58a92df017d7458d66dedd41850c"],["/posts/9c9b482b.html","1e9ea0181b49941c7476e86de02b0d2e"],["/posts/a7df3b40.html","4f55fb1f00a37c8d6646fb81ca1b1328"],["/posts/ab21860c.html","bdfc604e4f76a4dd36b03dec430de121"],["/posts/b4831a5e.html","d4bb4134ec5906cc69c636aef6ace093"],["/posts/bf9eba42.html","8f02c2f0cd9bcb2ee3b1e264d63e99f3"],["/posts/c1cdcf68.html","498ff722a26edc3109a44b06c6841c9d"],["/posts/c4782247.html","eeea3c706b4f7597f305c2f7e2856a46"],["/posts/c7631ec1.html","df6fcde7f28ebaa7cb0b2c03650c8363"],["/posts/d7399e80.html","81ef2784532b8d1db6b710e3696e2990"],["/posts/dd9d9f86.html","9095a6bf113e50ab3cc3f32669ed177f"],["/posts/dff7e11c.html","34c94637c68625b1ace0f4ce2e9fd0b8"],["/posts/e1b9c6c5.html","2290cc372b3b03d5b69301961947289d"],["/posts/f68f129b.html","4991e8fdb5957a638c863f7e75cb783e"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","35943eadeecf55dd4c364694161cade2"],["/tags/Axios/index.html","9f47f1fd100e74cb563fcc4190b15767"],["/tags/Base64/index.html","e3ac3beafe9f354e49612307b0e7d0dd"],["/tags/Coding/index.html","b1cc0fbcedc379a7eba06063ab4a5d81"],["/tags/Github/index.html","0fe4e8c30ca6cf45d071b319abbd4a52"],["/tags/Gulp/index.html","2a90f9eaa623c59089c3869491f71959"],["/tags/Hexo/index.html","ef86198ae39b891b8255fd1ce47ff2f1"],["/tags/Hexo/page/2/index.html","2aea4ff3599fe2da4a3bc5c7cd8607ae"],["/tags/Java/index.html","a0353d18d1b39e7efb2617442a764459"],["/tags/MD5/index.html","386713a58da4aa7f1234570e43730644"],["/tags/Neat/index.html","2cf82c28ebc83f99f4f13e1882923575"],["/tags/Next/index.html","d1ba9e1e78f9b11fbcb549a93638f486"],["/tags/Password/index.html","a22bd36d46ee9a139c822c1dfe552bda"],["/tags/Photos/index.html","7b7756f3ec64d20ea86783d5d4713685"],["/tags/Rss/index.html","7ae77484e10927ca45b00944d07a47ca"],["/tags/SHA-1/index.html","d8bef6fe74d2fcb57afe024f72607c7c"],["/tags/Security/index.html","da1786096eb717eb7e2bb013b9a83dbf"],["/tags/SpringBoot打包/index.html","77283f5927728054c1d9f7361feedd46"],["/tags/TravisCI/index.html","b8d249a1aa7054b3c0dff423c11b0b6e"],["/tags/Valine/index.html","6d04d65514b3c3eca24719e01b36ec9b"],["/tags/Vue/index.html","c332d4f3132c19d68adcc6b4fb900b79"],["/tags/el-date-picker/index.html","61f178ad1f26639ff0e6aa2c86e1dd5e"],["/tags/index.html","b704c0da0eaeb54c8978d84fa1ad5969"],["/tags/lazyload/index.html","e0824ffd49823d60b8fd29ef69ace1c4"],["/tags/代码块/index.html","a92a531b69ba0662e24325439493c4d5"],["/tags/图片/index.html","0929bf80e0dac700bedb35860fec36c9"],["/tags/邮件订阅/index.html","fb5cc3006f7650d877f746110b845f88"],["/top/index.html","c42d94f2d37c78a86daae12408e0ca9a"]];
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
