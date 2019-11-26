/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","db606b80ede5af77a5b6b83d3d838475"],["/about/index.html","7da224e526d7f0899f45e2d7295f0a67"],["/about/renxi/default.css","7a8b6e500f6ae1f6e2c905025b18030d"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","871aee3ded1c49ad12a207a7331e7604"],["/archives/2019/10/index.html","b2ef32aaa9f68d6f5a8e49588aeb05a3"],["/archives/2019/11/index.html","e87f0eb16e1464e9856a48721d4b3320"],["/archives/2019/11/page/2/index.html","11bdbf9685d37a4169ebb9e060fff382"],["/archives/2019/index.html","32025393af14c7c5c31ae3894781b2eb"],["/archives/2019/page/2/index.html","d6282afe94197b5cb9457c9dee16ab6b"],["/archives/index.html","249b38128a5977833484e9c524b61fd9"],["/archives/page/2/index.html","d82502d82243c1c6994faa71b24a9ea5"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","34f29836b137429ad523a1b8866c74a0"],["/categories/Hexo/index.html","fcda1b6e4f0ab9df5b1b6104cc3d5612"],["/categories/Hexo/page/2/index.html","3f8c2b652a65b3b7ac85f0380a7879a2"],["/categories/Hexo/点击特效/index.html","20c386c133093d9ba86d70cedb1d05de"],["/categories/Hexo/豆瓣/index.html","4f7ee4507e55c459f9a1f67cdaaf548f"],["/categories/Hexo订阅/index.html","95fc9c3f6e026dc85251bd3497e59c77"],["/categories/Java/Base64/index.html","f17ad3a661b0970c1eb8c7501b6d1fe4"],["/categories/Java/MD5/index.html","945ce144076562b97acc5d42ec2c3008"],["/categories/Java/index.html","8acff1725ac282d3fd7da30edd5a58be"],["/categories/Valine/index.html","3364b75e6bbbd9518c78376513bd3cd9"],["/categories/index.html","885d38a70cd6302a8cfb4f4310c6166f"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","4252bbff7fa5b94fedee3e283da119cf"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","232d6a7f270bcc0aec24c488d1c6b838"],["/games/index.html","39fd1fb4f3bfe7bf639bc12b730837e0"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","3c69fdc20ce4a4ca2593996e1fdc60f5"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","0685cee043dab3197e26691c8f670c6e"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","ceeabb9334e73ab48fe44eba84d013ab"],["/js/src/algolia-search.js","e12b3455544421b6402607d1203d4c4e"],["/js/src/bootstrap.js","80f9bc7e29781057b5137cc29fc32272"],["/js/src/bubble.js","7a1ea3052a163845151aa74e2a5e14b6"],["/js/src/canvas-dance-time.js","bc63613e0f9242bd81d97e78a9c72e86"],["/js/src/clipboard-use.js","27132d81769417db13f1d76e9cee2a6c"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","66ff2b93d2844d9122c35e316755a60c"],["/js/src/exturl.js","af4c56481f660b0ea40308476d775341"],["/js/src/hook-duoshuo.js","82b86944d36223d9579815da30656607"],["/js/src/js.cookie.js","6ee990722cf1717540fce7e24bd1bd2f"],["/js/src/linkcard.js","8952a3ba783b40edab03b125bfc56131"],["/js/src/motion.js","a18a97646615721a8bb610fcf9fd9b53"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","84174cdaa0886b4ee4c9ef12104ec969"],["/js/src/schemes/pisces.js","db87bd1587748d0478ec20a867d0f28b"],["/js/src/scroll-cookie.js","a27dec5b4bf4e531c989c119a28374a4"],["/js/src/scrollspy.js","030a91bfdfce637d43bf2e9a5cfa81d2"],["/js/src/snow.js","9dadb035e2cea99d670b93a29c4bc37a"],["/js/src/utils.js","093f5d07a92f7d13a46bb63f7231595e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2d0c7fbfdaf6dc4484161a40274bf1ef"],["/lib/Han/dist/han.js","9a25d657d0a8bb78cc2cb29c63693a1a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","60f481bc085fd40bc0268df9ce30622b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f696d02afde4567bcf598783eae3cc6d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","12e280b82f8a6f96f5ef5e532dd9867e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","609eb808b7ca8887533a3e1a37678f49"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9dade6132cc78225d650310ef5ef8973"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b31f76f5ca44435b17ff3c6d9736ef70"],["/lib/fancybox/source/jquery.fancybox.css","0a703e91f63038a079e3b5d323bb8982"],["/lib/fancybox/source/jquery.fancybox.js","7bcf76102cfa3f43dc23152f9add4799"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","a3ae634e5e3104625b2f12aeac90e617"],["/lib/fastclick/lib/fastclick.js","975d571471d9783e02488bd32bda8400"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","e14815aeb144c9e174504aa0e8015d80"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","daa8611e35a1e9a3ec72046a27e54558"],["/lib/jquery_lazyload/README.html","3de7f300c84a4b6e00b35a2f87b43e6f"],["/lib/jquery_lazyload/jquery.lazyload.js","1d5ddae8929abef9311e64376d082448"],["/lib/jquery_lazyload/jquery.scrollstop.js","0f35a68b67a9d2843aa7e56f2aa8d38e"],["/lib/needsharebutton/font-embedded.css","0cbfe834e50d8e59960059734c262688"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","2572ef4de2052a14bdc7aa3e1662490e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ed2efa81d01ecd23b7380e91eda911ab"],["/lib/velocity/velocity.js","017afb5e7e53d8e726d4a538c1a18dff"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1b2d4536340a9cff819d52e47485b94b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f78e24a9426fac751d1544180630c4b9"],["/links/index.html","8315227122ac4cf4f796d1d11010cf62"],["/live2d-widget/README.html","e6e095447e2f76080c461ba9a3d4ad59"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","2dcc14df0900b5be8d21840abddbfee2"],["/live2d-widget/demo/demo1.html","ee9f46f2ac67240e084911af1dfd42d4"],["/live2d-widget/demo/demo2.html","5a4575634e31fbec304ed7fdd4b05db2"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","b9c855bcf5eb4259d375931c1562ea5c"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","f439b5118a094d3fd66c1578aa424e43"],["/page/2/index.html","000b96220c4a3d455fa5ecc637182757"],["/photos/default-skin/default-skin.css","c0421799b62e6538f236b5d61bbef629"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","da837bd79f874f7bdf9ee601d8bb9c1d"],["/photos/ins.css","1fca7022be00651c12fb1ad59648cedc"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","e7f2008835f680017ae7a91ff458582e"],["/posts/27514.html","4189e3bfde4736d4a663f141c85b6cb0"],["/posts/39d47c89.html","53d0db16a09473d8741eb966b533ca0c"],["/posts/3e5a3bb6.html","721bd042f2b8e4b2826ce13983a10065"],["/posts/495d0b23.html","bc00ddf9f3aac8f5fe645fad26d3180c"],["/posts/61913369.html","6326ee6bd45840a94636df59ee6bc2fa"],["/posts/7fbe9500.html","f53e854da15ef243ae6a6667564a70d0"],["/posts/89ea6c8b.html","0e239fecb8352bfb5b7f566234a86ad5"],["/posts/9c9b482b.html","bcc409803df6b668a65f17aebe365a3a"],["/posts/a7df3b40.html","09f3139433d5c099b53a71d646984009"],["/posts/ab21860c.html","ab408339ba8941d0ce8757c50cffddc1"],["/posts/bf9eba42.html","a5896a5f83e8c820e3e9185d7c077ba5"],["/posts/c1cdcf68.html","588fa9699ceca82a15ec51f6597c7cb3"],["/posts/c4782247.html","d9237f4e48cf33716b2221e03fc800ca"],["/posts/c7631ec1.html","dbadb2aa1eb69f2fcaccbac3b572049b"],["/posts/d7399e80.html","d8cc4b265818214e25516f67fa801b1c"],["/posts/dd9d9f86.html","c06752d6ad435757e7ff5407ccb49f9b"],["/posts/dff7e11c.html","f7cbb1e90ba389b05bcb07e6444b9f8c"],["/posts/e1b9c6c5.html","d5277e94fcd4e2029a996c776643c4d4"],["/posts/f68f129b.html","6fa1848f35621e6554d633f6cf32a061"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","adacebc74d78aa1a35510f7dd2101381"],["/tags/Base64/index.html","60ae3da27bba9b7bed68bc4fc562e262"],["/tags/Coding/index.html","60362d4b488047a81ea96b810130eb46"],["/tags/Github/index.html","8bdc833969277194e344af6cb040740d"],["/tags/Gulp/index.html","4a0cbe3049b5206ddb7b6f264682723b"],["/tags/Hexo/index.html","2d82d17cb7f197b5f48bc0883ab35a56"],["/tags/Hexo/page/2/index.html","c74dc920c53c4259ca5820ebbef12068"],["/tags/Java/index.html","d9156e390aaf792cbf7f658eba21f90e"],["/tags/MD5/index.html","85418edd6bf0649ac4b8b15aa7017db4"],["/tags/Neat/index.html","6575d28569c04551cae8738be4f9c56c"],["/tags/Next/index.html","728f134f1527ea9a3100a5a30d11dc79"],["/tags/Password/index.html","26a4e6444b432e94a8060a00f7eb1470"],["/tags/Photos/index.html","c0c0e666e14d2a29aa6110554b76e439"],["/tags/SHA-1/index.html","37e985f70311a6b7fa30af13e9bbe8ee"],["/tags/Security/index.html","f4df24dee3f31e3413f3a064bbef1748"],["/tags/TravisCI/index.html","bfb5f19675f0f4feff3f4aa924f72219"],["/tags/Valine/index.html","41581388bb1226a62b617bc305e3570c"],["/tags/index.html","73714cfb43a8f48991feff80e468c3a6"],["/tags/lazyload/index.html","e25bfca48b39249f9dedca97f9bbd17e"],["/tags/代码块/index.html","0bba25d293a04f3c96984f6708bc2732"],["/tags/图片/index.html","2e5cbaa1690dfa032c2e6a98be258c48"],["/tags/邮件订阅/index.html","519ab1b5ac72466f1590ad1b74eef7a2"],["/top/index.html","1d4181112506e1caa5e9821e6c7d2ee8"]];
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
