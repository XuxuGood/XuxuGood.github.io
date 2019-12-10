/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","824b7e587d0d84370168e2a5a472ea97"],["/about/index.html","9bb09daf9b4146b6cf7368c12a681596"],["/about/renxi/default.css","73a4ef66c12944784d7a83197a098341"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","c126739014720bc4236589301c86fb0d"],["/archives/2019/11/index.html","e4b470ea145aa8c3ac547f62edd62c4a"],["/archives/2019/11/page/2/index.html","79496dc9324be37271ee67d6c2c0249f"],["/archives/2019/12/index.html","58f092fbc88ce9b204d34b4b7c2fba19"],["/archives/2019/index.html","92bb16a2fe72c33a3bd725fa6d3e6ccb"],["/archives/2019/page/2/index.html","cf8fd1d4ab1e94c328c5c216c9e25464"],["/archives/2019/page/3/index.html","ceea0a9008841cffa4dca35d0f8b5009"],["/archives/index.html","585afd06fda7d25e6f52f921ec36aaa6"],["/archives/page/2/index.html","6dc070c5f9d96e05b04679ad48268e57"],["/archives/page/3/index.html","1287dba4646b2c5ad844c0265213bf3d"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","a1440f7a1dcf593b70cdfec0dae21dfc"],["/categories/Hexo/index.html","b88550725b72e881565886791c3c1730"],["/categories/Hexo/page/2/index.html","bb6cc63b8989fdc6449f200656e320b5"],["/categories/Hexo/点击特效/index.html","4806d01bc481f86db5f52fddcaf15a3f"],["/categories/Hexo/豆瓣/index.html","f77c89e34252a4788077043edc0c1349"],["/categories/Hexo订阅/index.html","c028b805f6a683df3f9e24c4b915ecaf"],["/categories/Java/Base64/index.html","01af0229d9463498cbe1bbb2a539ccbf"],["/categories/Java/MD5/index.html","14f6cee2321f8c03c25612f3797712a0"],["/categories/Java/SpringBoot/index.html","42b0b8ab4425baaedb2f4031f3c4e945"],["/categories/Java/index.html","bb84003f82e66d58c107accf714d8628"],["/categories/Valine/index.html","e06df86f6cf76f057f60765c473697a9"],["/categories/Vue/Axios/index.html","46590a567c30ea672d2a919a499e667e"],["/categories/Vue/index.html","0e0061d9c9d13087fbc6d85d1c1f1b6b"],["/categories/index.html","2fafc94740d2840c4501a2c1dc0d7ff1"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","b5b23923b169c44d89de6f8916076fc9"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","32c3ee1ea3c27334a973df5eb325a9a5"],["/games/index.html","b4b9066e9d297aaa932c0248a0464f7e"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","151550d9f9b0c44198c0fb7817760875"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","177c8589bbf5e815f948e524c1c04c95"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b9d83bcc0d0194a9b3d637d6e4e4a72c"],["/js/src/algolia-search.js","3c8157cbe8a6e82278eff6bcca773f1c"],["/js/src/bootstrap.js","1efafa115077b3f0ef7813e7c25bd6e3"],["/js/src/browserType.js","6b1dc260aae8cd4e7721f7d854cfde0b"],["/js/src/bubble.js","055a186aee29165ffcf3a3f6d67414a7"],["/js/src/canvas-dance-time.js","8d8055621b1881513f02a74505e5d831"],["/js/src/clipboard-use.js","2e54aa0f096305ea9588c5256aaa6e5b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","ca6d23cdabcf89bb43ad6a48132f61fe"],["/js/src/exturl.js","9f0b93a5e562b2316e4a071b1ab72f33"],["/js/src/hook-duoshuo.js","1fe7da57fb13c3a925f4a9844c7c5026"],["/js/src/js.cookie.js","7df703d28a8990a15a741b676bb35842"],["/js/src/linkcard.js","8c11415a7140d3264167d4ef5aa1b9fd"],["/js/src/motion.js","912e94bfee0b2a0b472de95c5a3b2ee6"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","dc889a0733868b4c152a5fe8b16b891b"],["/js/src/schemes/pisces.js","d044b101be80e4581671b47471d70dd6"],["/js/src/scroll-cookie.js","4a22f9f2137e335daab5ed359481b694"],["/js/src/scrollspy.js","44fcc23634aea527673b943b6810cd32"],["/js/src/snow.js","92778ab6dfc9023ce6d87fdeae4c5923"],["/js/src/utils.js","224d410f9779f58a6f609f0941c464b3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1d9a193be3ea9a0d3114907e629d8bc6"],["/lib/Han/dist/han.js","ee895880a57a8881223e50000491bba1"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","699f4c69c666ed1e5594e362012e74f4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6e8b1c11e362626d0ca1273bcb7eb0b0"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","35e7695e40f864de023b34e01b82cb7a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","950e450d80b9fce09e001df4533ecfd4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2d060a4d82fdee2e4504f391fcf3e004"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","893062bfea8b0db191abf72e138b86dd"],["/lib/fancybox/source/jquery.fancybox.css","b6f393e6dbf1f47f4f2a1b52895cb281"],["/lib/fancybox/source/jquery.fancybox.js","e96224228ea4be14b7618a9272c01fed"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","b10427ff732641b903abdcd3ebe97175"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","77808bc2e3713ba4f2c946e6f73b51d7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","9170fafc2bdba19f80747a41a3fd0157"],["/lib/jquery_lazyload/jquery.scrollstop.js","469f81399e2af19c7d3636a2e1ab3fac"],["/lib/needsharebutton/font-embedded.css","1a9c9c2dbcc2e541d1c4e2fda153a085"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6a6ece647c175a21a872ed74f80ed4fc"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c1cf3b607d95248ff1e109ee1cbd0962"],["/lib/velocity/velocity.js","bb4f54e292bcf612afaf7fa1cd00224c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","fcec89088a43f40d7dd3eb3483b5dcba"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","08e18a546c48f380fff728a3bef6e949"],["/links/index.html","5ba4059073b9d631cd09e7b38b1b5448"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","b3bcec08f47e04262d9a3b1899b781c9"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","a7658f470d89cfe3658a0d28d32174dc"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","6afa278ae5ed5e6a08b63c470bf6bb40"],["/page/2/index.html","8be259678e6240f958d6e25638723cff"],["/page/3/index.html","89e73372ae4beb7da1111353dbd06895"],["/photos/default-skin/default-skin.css","147dc2efbb842e1b9c5e079dbc33df67"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","e9e7b0965d7da30a0f471025ae61144d"],["/photos/ins.css","cdacbc2be10112930f69012351fe3faf"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","10e490af1cb584b0fb549b2939a51d12"],["/posts/19c94341.html","39dd7b9479d5e516046fff56732cb36b"],["/posts/27514.html","7c51fa03ca0bc005625bbe07248f3407"],["/posts/39d47c89.html","3c78b3e46463617b470fa8b48ba4d596"],["/posts/3e5a3bb6.html","20d679c8fefc1a25a03517b1aa04ba52"],["/posts/4394a738.html","b6212982685fad5f4e16b5fde6ed766d"],["/posts/495d0b23.html","6726423ec0746a42d498e38820653dba"],["/posts/61913369.html","06fd502c7872b2070d221caa37407b99"],["/posts/7fbe9500.html","bcb54c0224500705df536df3ac885e52"],["/posts/89ea6c8b.html","151940537fb45645f730bcaea4c0c924"],["/posts/9c9b482b.html","3eb51d4c2554d66004dfcd67d33c706a"],["/posts/a7df3b40.html","d05949150c819a8e8a3ce598d28a2003"],["/posts/ab21860c.html","65d747cd99f3d5c3633da3e89a4a2794"],["/posts/b4831a5e.html","ff1d79b09ee79d19551f235374f5d2fd"],["/posts/bf9eba42.html","aa1fe8318541d11184b57d42234af010"],["/posts/c1cdcf68.html","c680a6847ed8b694871c729022abe8e9"],["/posts/c4782247.html","959f4e3847d2fb9c2aa3c5cdb33de164"],["/posts/c7631ec1.html","bbfd50ad065f746e8b1f19920c1c1111"],["/posts/d7399e80.html","d08ddf635c90df64dcf11e94ec7e6529"],["/posts/dd9d9f86.html","5de3206c03b51a798bbb2010f5cb98db"],["/posts/dff7e11c.html","b93212024ebe91401b82ab9674f45be6"],["/posts/e1b9c6c5.html","e3f9abbf04e27ed37c5f780b9cccaa13"],["/posts/f68f129b.html","3498ecdae7d0f40dda84340d2592ce3e"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","7bc4462831fbb549829f45173daeff60"],["/tags/Axios/index.html","713d90f002e7dc41471baa6ecbf60526"],["/tags/Base64/index.html","787a9c3435a139439d0141192d8b6d8f"],["/tags/Coding/index.html","b63933a6e6a216c9830acecd292b5924"],["/tags/Github/index.html","6975fda8227b84271ccb522d77898c16"],["/tags/Gulp/index.html","eae47f87ad986e18e8a2220d1fcac527"],["/tags/Hexo/index.html","71316c5ba1f9a2003df8d064d3207eb8"],["/tags/Hexo/page/2/index.html","2f9753c1999c88094fecafed45cb5897"],["/tags/Java/index.html","e12bebb037916c5951259df0de0549a0"],["/tags/MD5/index.html","1e059aa19d9c9945c19c4b67e8f4ae18"],["/tags/Neat/index.html","244c7c78a44d5e924569a1b4ff1b2592"],["/tags/Next/index.html","2087fb6439a87e8d56f8750f56362889"],["/tags/Password/index.html","b5502822d5c1a03f5b372293d348feb3"],["/tags/Photos/index.html","0a22e57864b78128c21acdcdd76f860f"],["/tags/Rss/index.html","93da6dbec697e62cd8e47a86db6b2ae9"],["/tags/SHA-1/index.html","c5a21af39e384117651e3990c341a6a1"],["/tags/Security/index.html","485ed8aa37e72fec50b2fd62ce9c1c6f"],["/tags/SpringBoot打包/index.html","74aeeae0dcc3064faaae9115fae8afe0"],["/tags/TravisCI/index.html","b4c2ed9de803f140df609f338b53b0c5"],["/tags/Valine/index.html","0a951099074ff958cf6b51c42fb94949"],["/tags/Vue/index.html","d399410648f2dd1a7d8824398c9c7613"],["/tags/index.html","58f33dd4184fda2ad7ea75e94717edc5"],["/tags/lazyload/index.html","62ddf11a782155cf51f2922f3e33c4d3"],["/tags/代码块/index.html","2f6d6de8d629894bcba99232003ea855"],["/tags/图片/index.html","8f12a8871bbeccfe44029fa14c29f31e"],["/tags/邮件订阅/index.html","cf66d2e40dd24d4c080481f6a092a7d5"],["/top/index.html","8f7728e943831bb7538e3628d222bab9"]];
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
