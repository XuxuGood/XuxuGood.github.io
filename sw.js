/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6957f071c260d3a6bbfb282d2878c4ac"],["/about/index.html","786f437470114620a2e446109ecb22c6"],["/about/renxi/default.css","13d4c2bf9b81576ff1376e9d2ff6099e"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","d135dba0f2b89fd6cf95538b74f0805e"],["/archives/2019/11/index.html","6cda852953fdfe0df362e4969804a66b"],["/archives/2019/11/page/2/index.html","8c21fdb9956b9de1a66a920ccefcb7ea"],["/archives/2019/12/index.html","74baabe557a1f4337b5736b105705c17"],["/archives/2019/index.html","5746235afc52707362530a0b04c53092"],["/archives/2019/page/2/index.html","98bdceef8af081501703fd36eb0f9635"],["/archives/2019/page/3/index.html","65cebbf98b9efba41047c68f1e739d7c"],["/archives/2020/01/index.html","71209fa48fdff0ab1c3675d1f21cb2c6"],["/archives/2020/02/index.html","9fd9a7f770b05ef6705a78a6e0dd30cf"],["/archives/2020/03/index.html","ed0278484ce73b20bb4aa2f30e854bbc"],["/archives/2020/index.html","374f844ca55f91e415bc6aa2706748a4"],["/archives/index.html","18858eb4d095654858a84d8267cffc7f"],["/archives/page/2/index.html","49fae88b674a05b0a00d1ba488b845af"],["/archives/page/3/index.html","e017140c8bd24a508047baa0dd45c714"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","deaefdeffb4a25fc79e0dfca1eadd8b4"],["/categories/BUG/index.html","c83d6d044737643886b1889cec009799"],["/categories/Hexo/index.html","1b197c4f622adff3e7ba9648c937fe55"],["/categories/Hexo/page/2/index.html","6fae389bdbf33514246cf2da3843afde"],["/categories/Hexo/点击特效/index.html","ae242199d810e9f4b9d4b6e8264c7ed6"],["/categories/Hexo/豆瓣/index.html","69c72b34258bc211d7ed94361b4aec23"],["/categories/Hexo订阅/index.html","d913bd1110532d4b89883670e558a4b1"],["/categories/Java/Base64/index.html","d0fd6dded08c80092ab5f67fe6e7047f"],["/categories/Java/MD5/index.html","4924cf744789bfe192c4623a9660ea82"],["/categories/Java/SpringBoot/index.html","8e607392531d0792f4de94f6e2ef5fc0"],["/categories/Java/index.html","1010e564ab4087f8c0530b83d8f227a5"],["/categories/Nginx/index.html","2de8d20e9c7888f8cb2295f1b9850338"],["/categories/Valine/index.html","e9df6e72aea612f79ae26676a1367383"],["/categories/Vue/Axios/index.html","db2e6416e30503690ceff00558f62ffd"],["/categories/Vue/Jwt/index.html","ab01c53f1029f05d5d385e17ef2a15a8"],["/categories/Vue/el-date-picker/index.html","0f431dab2c61f7338f2cc851b3e29940"],["/categories/Vue/index.html","4e7ac30c669f500f61f8153d46896f13"],["/categories/Vue/工具类/index.html","8e2db80f233203b2414d49a7ae1a69b0"],["/categories/index.html","013c2da95dd1440797266f983da7dfc7"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","d4ccb9eb609480f15d012dcb9ee67d54"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7ef20b07ca74bf52d030fbddae48db49"],["/games/index.html","dab0c5cab6292b35eeda4c850f9e9eec"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","b1297e068304dea43b09a4055f6614c3"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8cf38dfe745b8120085fb7f4846364ed"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","3e43b3ed4b28b8b543500687f220beee"],["/js/src/algolia-search.js","127d397ec7eee38817e4b00e304f6e5c"],["/js/src/bootstrap.js","01265184ea56463b886862d3796054f6"],["/js/src/browserType.js","365744257d823081ed25155ccc29d1b9"],["/js/src/bubble.js","3155af5fed5d4dc8c211c05dc6efbe74"],["/js/src/canvas-dance-time.js","b8ed0437c0df3e7e1876c536d00daf2c"],["/js/src/clipboard-use.js","0d87b451854d51f004a94b910fa6b5b0"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","307493066036f68f81af3e0d5bdb5905"],["/js/src/exturl.js","06e249dd6abaacdb2b3d44229d1354bd"],["/js/src/hook-duoshuo.js","d3202674e17bd5de8e1848769748dfe2"],["/js/src/js.cookie.js","e8a7c566d1154963e7228b2e66720ff7"],["/js/src/linkcard.js","df4e9af2ac043c86341ed4ad52e69cb0"],["/js/src/motion.js","7e237325facfa81ba2abc7c3c07ec9fc"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","bd220ff6fb0dbf2f1227ab5910527cf0"],["/js/src/schemes/pisces.js","06745f22b0f9d8f15a86ffef7cd03199"],["/js/src/scroll-cookie.js","1134f9228c0bd56b2be71a8fa42c87c1"],["/js/src/scrollspy.js","87ef671b748a5399e5487d8597d5ca8a"],["/js/src/snow.js","1fe3d52a136836d0d03c395d00bdd4d8"],["/js/src/utils.js","8c2241a14e16e9a515b1469d069eccd6"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2196e5375dde966a5ae96311f1410a09"],["/lib/Han/dist/han.js","37bf4a47b8c3830d8bc009d81917470d"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8e9349e4cae4eb0edada66fd9f7333cc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a2c49611fad528d90e1658eacba9be94"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","29b9a45bfbbd52d814e9a64c5f1ef0eb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0d10f297f9f647deef738816def59550"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","241f4fb8aeb4a79ea3ce62cc01547e55"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1bd309bdab59fa26e0dca3b117245659"],["/lib/fancybox/source/jquery.fancybox.css","c6946896a4b36ab584bc2d8d50b7d86c"],["/lib/fancybox/source/jquery.fancybox.js","7f5520b7973df8b0ce3650d0bce0776d"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","dd1710bd016cfcfb450691aaf7a39285"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","e0f1ae44773ceb1df40b735074daefb0"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","45c1943912d848334ffcc23abbd59989"],["/lib/jquery_lazyload/jquery.scrollstop.js","8e007401d80a9ffaaa81873d1d48c095"],["/lib/needsharebutton/font-embedded.css","28a41dc2b2d072d118c24970e2e3a408"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","ed1c69c746c50d5d5c753151987b1974"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7d796ebe30008cff5b2b83c7b184dc73"],["/lib/velocity/velocity.js","89249d8268df1711b185d16b831edcb8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","6a2668fd7a26128387ad9796f8551c4b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","e4af9dbc3e235793c26ac55daf6a9b16"],["/links/index.html","b1b3d97139816b0414609983235b7b2c"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","328c78a9d9848c83149be836cfb87f6c"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","a56a6365c8ea7ae55e9bdf11b31809fc"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","95d60f480f0a18d536a2951f753fe683"],["/page/2/index.html","fa52a3a82dfb498fd4f724bedb65f8fe"],["/page/3/index.html","92b54097b39ceec4d276d9a3f09b6141"],["/photos/default-skin/default-skin.css","a5167a00d2cf08008cb890f538cbd9e9"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","423765aa341ad5d8d6b2febd59919b18"],["/photos/ins.css","d27329a6204cf6283e55749fc63a94ee"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","f02cc80d8c3ce20ed6b1c46013bed4b0"],["/posts/19c94341.html","d04cb98576a7686f14e251973e30184f"],["/posts/27514.html","9fb6f50e7da87459604eab2fc312d3e6"],["/posts/2b56997e.html","12ef213d03daa8b71ed7c1dafb7e295f"],["/posts/39d47c89.html","84a693b4831f2a50ad91ee450356dc86"],["/posts/3e5a3bb6.html","a6349f6ddd5334b6dd6b5ba81615e541"],["/posts/4394a738.html","38d3164ce2e1ff27c263ef7db89b88e5"],["/posts/4598d3ed.html","dc8533c0ce7c3440adb4815be8cc07d8"],["/posts/495d0b23.html","4b7916548d9622851fba7ef7692bed8a"],["/posts/5e773fb.html","39e985cf2c2914cf5dbbde99e26ed366"],["/posts/61913369.html","fa0562411815a3112d631d873fd57c26"],["/posts/69ab28bb.html","bc113d4bdebbb5d501fe43d673db61cc"],["/posts/7fbe9500.html","7e2dfa3975c70e7e9471670de35713a3"],["/posts/89ea6c8b.html","bd1a5595e9172282ab59b677f170be84"],["/posts/9c9b482b.html","a97101bd507e7e84e87f48c16070503d"],["/posts/a63fb3ae.html","c946f53241080b3d7a37bdd995de1d6c"],["/posts/a7df3b40.html","12881a3f5cf2dcb74a5b15a019c642d7"],["/posts/ab21860c.html","7572457212c0140fe88ac810d28afc87"],["/posts/b4831a5e.html","da15401d091db9b830a1c12606b307a0"],["/posts/bf9eba42.html","d5c1fbed3aeadf8671f9789f8686dd4c"],["/posts/c1cdcf68.html","315bad6b435e99ae469edd5705031c26"],["/posts/c4782247.html","c5fe452873790c3c142a29848673b310"],["/posts/c7631ec1.html","9409776a79923877057da67f110c610f"],["/posts/c9b4cff2.html","3a05abc9cce00dc9c2168058f8e84376"],["/posts/d7399e80.html","a816a11cc1a24ff180002743f53958de"],["/posts/dc877e7a.html","60154ed80887385dea5032651dd46c19"],["/posts/dd9d9f86.html","d045c9b35d7e9d0c492608eecf27f280"],["/posts/dff7e11c.html","596c53795903f94dfec71f97f06f0197"],["/posts/e1b9c6c5.html","6d43e767c43d1af43e72eb4624255169"],["/posts/f68f129b.html","f473ff62c0bc0a00f1bb089bd5b81807"],["/posts/fc31ea3.html","52749d92d56b02a30a14180b8b2de2b7"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","175e48109bef5840f91051915e9883a1"],["/tags/AOP/index.html","921ef364216fa4587b93d0b7d5947215"],["/tags/Axios/index.html","0b9f07f28948d5b68560cf43290044d1"],["/tags/BUG/index.html","cf9549439df64c53c0f296cdac5e59d3"],["/tags/Base64/index.html","f486ff8806410c4fdc39cb37b58a1c95"],["/tags/Coding/index.html","98e2ec7ce0b53183ca2f839ec8499790"],["/tags/Github/index.html","4378db6683dfcd3a9f20dd07ac5c40eb"],["/tags/Gulp/index.html","17247cfc113084fc8595aed330827170"],["/tags/Hexo/index.html","960f14873c0a1fbd73e574a5649770a7"],["/tags/Hexo/page/2/index.html","561e7754c4625236b10a33cd7ae8d0a6"],["/tags/Java/index.html","fba713feb86d31fc194a57ce4d7b34f6"],["/tags/Jwt/index.html","29ace49f5de547b3ea4c047fb48968ad"],["/tags/MD5/index.html","3c89857421b582fb8f8052b766267267"],["/tags/Neat/index.html","35331656643e8f970c7e8c4a6b01df43"],["/tags/Next/index.html","d509fdaf2ff927fac4f3a0175ea9d1b3"],["/tags/Nginx/index.html","3de258c2ae3d9be3decff4524474f485"],["/tags/Password/index.html","a8204e5243927cb5a63581643c678152"],["/tags/Photos/index.html","90dc672c15f7b6ab36c893d77b1be7d4"],["/tags/Rss/index.html","3cd4b4e4aeb7284ff407808adeb24f1a"],["/tags/SHA-1/index.html","9618856e1908e828801e2b965e5f4197"],["/tags/Security/index.html","8f6cd88cfa33484cd070a1da1f576ece"],["/tags/SpringBoot/index.html","0dff52d3fae555f5187b72012cd3ba78"],["/tags/SpringBoot打包/index.html","c477d2ee5ccb663172c1be548d99e1d2"],["/tags/TravisCI/index.html","d6fff9b9ff995ac42db690ecfdd97743"],["/tags/Valine/index.html","17ef477213a2647a2991882bae82182a"],["/tags/Vue/index.html","79e8f44b972bfba30fb52ead527cb5fa"],["/tags/el-date-picker/index.html","cd3f7766e379a8e7d547906b73120861"],["/tags/index.html","93cce91ce6a6b28850e69a28ffeb50dc"],["/tags/lazyload/index.html","a9f05d429c73b83b3a3a85abc595889c"],["/tags/代码块/index.html","0a5e408e551a98db11ea04b75e7b8bf5"],["/tags/图片/index.html","c50cb79c5d98da7b55f396868d0cf3bb"],["/tags/工具类/index.html","f21be4cf06afc8abb87981c1fce8026b"],["/tags/邮件订阅/index.html","7cb754a3d543e458afcd7d0e14e9bbf5"],["/top/index.html","15cd22a2f33faede07374d58e5a1f50b"]];
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
