/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2b90410e15c6728d5572bd58dcdb0dee"],["/about/index.html","182b50e9e00ad3bab8a442689e5d6d7c"],["/about/renxi/default.css","807f6201b3b0faaacd15b3cde3060f91"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","935b1679a5729039aa3a58b27a086bda"],["/archives/2019/11/index.html","84baab4b0d55eb3c30bd7858b2627dd6"],["/archives/2019/11/page/2/index.html","fa38935219157f6fba859eaf6c016245"],["/archives/2019/12/index.html","ceaae45bdc1a0698a0d176f0a4e6a05b"],["/archives/2019/index.html","266307c8312b7c88098b87291c133ead"],["/archives/2019/page/2/index.html","a15780bef4da7be229c82d8536e27464"],["/archives/2019/page/3/index.html","4e678f84d81a78a47e2afd75c9623988"],["/archives/2020/01/index.html","2ff8ee82a69609291f7038c3ae154594"],["/archives/2020/02/index.html","7e292df04197549a1f474d3066cbe82c"],["/archives/2020/03/index.html","c9a8084a29c4085594bb0a97a994cdee"],["/archives/2020/04/index.html","1dc2a6a64a4dfecdab4771d60fe975ed"],["/archives/2020/index.html","13af0cb913c5112c3add177b31b87eb7"],["/archives/index.html","a915804853f55319d957cbdbba4aaac9"],["/archives/page/2/index.html","8c00c2c5f13944e3fe05769244610f53"],["/archives/page/3/index.html","d41b48313faed0f5cb04ac8f3d44f541"],["/archives/page/4/index.html","38d550f9e7fd9d3734f6409803a7e319"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","ffd2b5f8fbdef79f1b546eff7e0643fb"],["/categories/BUG/index.html","23df932efc222807e1c4532ba5cfd9e1"],["/categories/Hexo/Hexo订阅/index.html","b463097acbad7294de671d9147f90102"],["/categories/Hexo/index.html","9e7f7f8c3bf16e80123b97e3e59c54d0"],["/categories/Hexo/page/2/index.html","dbfd3eb71078897c1efdaa04e13ad206"],["/categories/Hexo/点击特效/index.html","bbdc44eb4620fa97623fbc4a40472e71"],["/categories/Hexo/豆瓣/index.html","b6932c9cddd93d2c382f4aafb5d43e3c"],["/categories/Java/Base64/index.html","a692fda06c2c64782496151ae42b1f93"],["/categories/Java/MD5/index.html","17808a34468e862a6dc198be4ecc487e"],["/categories/Java/SpringBoot/index.html","00fa0ee37c24fa63f86b802b4aa50eef"],["/categories/Java/index.html","3beddf810966c1ed1bb6f20139db7008"],["/categories/Nginx/index.html","c323632ca7ed2f0c163f9a7a1b93e72b"],["/categories/Valine/index.html","303b3e3f5ea063dfcffbda4ad9e8e6a4"],["/categories/Vue/Axios/index.html","c105cde2a7ffa6f6a877897cd45c6e2f"],["/categories/Vue/Jwt/index.html","80f0aeaf38f29a3ce1b78b69cc64a883"],["/categories/Vue/el-date-picker/index.html","86502e1d0fcbfaeda651a96a655172db"],["/categories/Vue/index.html","8bd43d071d54557e7028fac445613f2e"],["/categories/Vue/工具类/index.html","16272e7804ad816b85e7c8863367d821"],["/categories/index.html","146c7206c6398757d193f566d802bf7d"],["/categories/视频流/index.html","2c16240246992e7753efde54a0012e3a"],["/categories/视频流/nginx-http-flv-module/index.html","056e3c09d44517d16c26cadafb9cb4bd"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","8aed8078cd2bf13f2866ae3f4eb77442"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","569a2a4fa4bdde82ce631996c7db3123"],["/games/index.html","5cff80cb9cafdd44dc1e96e31fe09704"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","ab94e43ec1a285d931dd57bf7f8c368e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","35861058cf33bf00081cf1f7c850cbd5"],["/js/injector.js","483376d17254b832eb8b9e13624f7fb3"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","30143db15cfbdbedb03b51cf877a8342"],["/js/src/algolia-search.js","645353699cf72f0285a307cf700d91c1"],["/js/src/bootstrap.js","6c16b7e8320542f9105d2076265fa9a9"],["/js/src/browserType.js","33656ae67737935e388fa0cc0a9274fd"],["/js/src/bubble.js","70cf72de6378d4da3a080df9ab7d9f64"],["/js/src/canvas-dance-time.js","ae7d762a2d2a8cefe9e411d0ee1fe477"],["/js/src/clipboard-use.js","450fe2978465526b6e9a44c72158ecb7"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","34aed024c91a54f4f19c2f260ca29f75"],["/js/src/exturl.js","74e3954a687e67a411731266e304e571"],["/js/src/hook-duoshuo.js","ec686714b42225bea97f98c02791e145"],["/js/src/js.cookie.js","a4249ed3cbe8c1910f1f4836285d08e9"],["/js/src/linkcard.js","75da7d406e75e0543c7df2e11924959f"],["/js/src/motion.js","8ef133f747f635ffa7497d5eb023f0aa"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ba3026ce209842596efc21b8411bbb1b"],["/js/src/schemes/pisces.js","c3f3dc593ca41c7c148b7408197a0c0d"],["/js/src/scroll-cookie.js","783a4e72ebe250340d262ece562c8290"],["/js/src/scrollspy.js","c4b519905175a6899387236d6aa4885b"],["/js/src/snow.js","b1ab619eddc09dd4ef1c313cb9c3d056"],["/js/src/utils.js","02a194a689b145e84e54b7b303ad7e9c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","d4f4b01a85a33c17501e855c00bf3f12"],["/lib/Han/dist/han.js","5d07dbf9bd3d388b0bca27922e017030"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4364cd843c43c32715d222da574bff44"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","eef5540a95d62e1e8caf4d2117cf5f5b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","190aaff2d0725a7544ed8acf121415b7"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","bda2fe09d4a0d4a1634df01a2440b30b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","add71466d34642b51b8d0e6cbcb21d68"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","970e312ed853c3e4447a5bf4a284455b"],["/lib/fancybox/source/jquery.fancybox.css","a4ae1cbd61532b68a1cb1e645a55952b"],["/lib/fancybox/source/jquery.fancybox.js","f00cb6988bb21547f6cf217f86bc6768"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","b0a750155bf0bf02345f049e3c85f351"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","7dd1f06fe1e86956f01159bb3a1dbdd3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","cb8f4d20afa79d320bb1bc3e00aedfaf"],["/lib/jquery_lazyload/jquery.scrollstop.js","630d1823a9e2532221cd03e295d91cdf"],["/lib/needsharebutton/font-embedded.css","4dd308ca075f6bcff49e66afc4fb5df2"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","3acc3714511f71a9998e11a0e2189cbc"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","775bfd634d0eee4fb4f5d1dc5e85293e"],["/lib/velocity/velocity.js","93efdf4bdad4db7518c90d19164d8cc6"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bc220dbd89ce75e12eca2c5af682ced5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","ce4afad204b1f5946a2b9895f23bd3b4"],["/links/index.html","e243b94f4fda943c0dc56a6096e5f8a7"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","a4adbc616bc43960847d699fdffa0ecf"],["/live2d-widget/demo/demo1.html","a8e8723a8c776624578fcda3bd99daf5"],["/live2d-widget/demo/demo2.html","9161c9d24f5d730884b10f06f3044c53"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","ba1eefd3f0068422a6a4758be06ebf22"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","23347a3e76171533dcaa4c37da12c3d2"],["/page/2/index.html","9f5b386cc446d222f641f764f88a0d67"],["/page/3/index.html","7bd360883443b576ea05cb3f2b632f68"],["/page/4/index.html","71122c16ba47e91cea2922442a276d32"],["/photos/default-skin/default-skin.css","15940bc2a2dd724826c9248603b7e287"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","5c77cd0f011344f45f151755ee38bcbb"],["/photos/ins.css","6477a65a4a74ebeb3c2f86c99e7b49c3"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","d3d102e9cc81a5fbaa8873118d9c306b"],["/posts/19c94341.html","a07b1fa8aa9f58c342c7c8506c14eaeb"],["/posts/27514.html","f2bf54e1f1a5fc4bf6255b6711cc13c3"],["/posts/2b56997e.html","6c35a62db87c413177e1c34c8cc55173"],["/posts/358f95d9.html","b084b4ac4b1beeb029fa3344f4e2baa3"],["/posts/39d47c89.html","3a611bd65cba56499d0a661f3e530f19"],["/posts/3e5a3bb6.html","146effc69289d9d469c3bac9f1b5454e"],["/posts/4394a738.html","7de51a1f04c4b50721db48ec30b19193"],["/posts/4598d3ed.html","72baef0e57cdafa480d5ebbd183a1bbc"],["/posts/495d0b23.html","3e20aaa5942566997596c1dd42b455bb"],["/posts/5e773fb.html","a3a3b2ef1363cb2bb94423f999b7681f"],["/posts/61913369.html","d53fc9d6f94232e37665d76dd0781234"],["/posts/69ab28bb.html","7133a3c050b517a88907ba7b34c347b3"],["/posts/7fbe9500.html","53f47b6cdc7790c7439db64ec37ef86e"],["/posts/89ea6c8b.html","9f5c532d5d4d9ece898974342a4988a9"],["/posts/9c9b482b.html","263a25059ac94bc644d83f261ab1a4ce"],["/posts/a63fb3ae.html","b733864081ce1976e7d9cbb211998bd0"],["/posts/a7df3b40.html","769183cf777398c887f5d8f88c57a83c"],["/posts/ab21860c.html","9e2cf2e16ddbf9791fbe9320faece42e"],["/posts/b4831a5e.html","88378f9edd9af5978fd28498e1e0168b"],["/posts/bf9eba42.html","d78e8eda2fe040859bc210fd506221b2"],["/posts/c1cdcf68.html","ad512ae390f3874ed4b38455656f300e"],["/posts/c4782247.html","115179234313537dadcb81df74db9903"],["/posts/c7631ec1.html","86fb8028087dfe1a455798d236fe8b39"],["/posts/c9b4cff2.html","27c3b74902313aad8e805ac6e97f6e8a"],["/posts/d7399e80.html","479a6e461fd62872b953cb364445eea3"],["/posts/dc877e7a.html","e4d96532e3e478aba50a19ae7cf72348"],["/posts/dd9d9f86.html","6e281cd263685698e427af78376427b2"],["/posts/dff7e11c.html","5fe5ebce1f7a37a4b942da4f7b803927"],["/posts/e1b9c6c5.html","21a5073588300253b4bc0ece453b1e1b"],["/posts/f68f129b.html","d08536f0c1f3679c0620ddb607a037dd"],["/posts/fc31ea3.html","26d23a4fe44f2f8c8aadec30ae83d2f8"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","b170bee61f5604fb467b221f0e127bf1"],["/tags/AOP/index.html","adfc16c434abe7fa6ae1310fc22f4722"],["/tags/Axios/index.html","02a335f77fdd481c482010e0179d2d90"],["/tags/BUG/index.html","85ddfb2a3216026b491f34ab2db14cb2"],["/tags/Base64/index.html","8e9346243bf46a0185999d05a55f479e"],["/tags/Coding/index.html","c97595ea0d5ed33e46d890130e782f3f"],["/tags/Github/index.html","967d34d7b33c9b293834b75707acd4cf"],["/tags/Gulp/index.html","872bd8d0ad1557af9a3e9ccbcdecc4c0"],["/tags/Hexo/index.html","d74a69a18867292e8395be898dca3200"],["/tags/Hexo/page/2/index.html","61860f1baeaeabc9ef2fc5a2af5e6f7e"],["/tags/Java/index.html","c07c6a3fd2c15a92c87d0bdb24f6870e"],["/tags/Jwt/index.html","7261c6e25ab87dd45f58ce569c57e1fe"],["/tags/MD5/index.html","1ff5aedfa779bf740ebd9856085e707b"],["/tags/Neat/index.html","fbb94589c814011b19c61ec812812354"],["/tags/Next/index.html","3a7f01a9b300e7dd55ada0ee63b81ae2"],["/tags/Nginx/index.html","2762e9c3358b4dbcab9e66e7a8736aeb"],["/tags/Password/index.html","441d24d240f49ddb041306c85a631b7c"],["/tags/Photos/index.html","9092f787fee14548dbaf4aa747137bfc"],["/tags/Rss/index.html","863d133ce8dd0719b2634d0ddc15bd75"],["/tags/SHA-1/index.html","439eb3d06902a8ecb2c1371788bab475"],["/tags/Security/index.html","4e6427a6c23fb2fbacb60d70860ff198"],["/tags/SpringBoot/index.html","8e2e16fb0ca551d3f9355d9bb9145662"],["/tags/SpringBoot打包/index.html","bb6d37c9d38a3beeb8c09a4e1805a59e"],["/tags/TravisCI/index.html","c9170359052cb1d37de11cdbc233e069"],["/tags/Valine/index.html","3af6c283dda03769a087a0b0e83dde66"],["/tags/Vue/index.html","cadd592f65f9a17a55541ed495f09da5"],["/tags/el-date-picker/index.html","d52e750cf2c808461fb4b0aab71980f5"],["/tags/index.html","50b1c1abe98f072b5fb0c9300a98cc35"],["/tags/lazyload/index.html","e7779263652577c899fba5332f4d89ba"],["/tags/nginx-http-flv-module/index.html","d9e9fea9bd26e0c7b6fc8331123c4c16"],["/tags/代码块/index.html","97ce0cd7556c06b32b4053eccb3cb9d1"],["/tags/图片/index.html","34236af2ca95d4bbcc417c76db157abd"],["/tags/工具类/index.html","276ef457d077ddc8f5aaac8ebf625b52"],["/tags/邮件订阅/index.html","9b7c0a149a858d38ffc0a2c65679d4a9"],["/top/index.html","3d18c796d64cc5cbf61273d51e477421"]];
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
