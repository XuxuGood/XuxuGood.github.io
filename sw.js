/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a67fd64344bb476e5fd6c1da3391adfe"],["/about/index.html","ba7fe6127995d8a0103c9f2c04a3e576"],["/about/renxi/default.css","656ef42bed7bba4b3be3c60d1616f82a"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","935b1679a5729039aa3a58b27a086bda"],["/archives/2019/11/index.html","84baab4b0d55eb3c30bd7858b2627dd6"],["/archives/2019/11/page/2/index.html","fa38935219157f6fba859eaf6c016245"],["/archives/2019/12/index.html","ceaae45bdc1a0698a0d176f0a4e6a05b"],["/archives/2019/index.html","266307c8312b7c88098b87291c133ead"],["/archives/2019/page/2/index.html","a15780bef4da7be229c82d8536e27464"],["/archives/2019/page/3/index.html","4e678f84d81a78a47e2afd75c9623988"],["/archives/2020/01/index.html","2ff8ee82a69609291f7038c3ae154594"],["/archives/2020/02/index.html","7e292df04197549a1f474d3066cbe82c"],["/archives/2020/03/index.html","c9a8084a29c4085594bb0a97a994cdee"],["/archives/2020/04/index.html","1dc2a6a64a4dfecdab4771d60fe975ed"],["/archives/2020/index.html","13af0cb913c5112c3add177b31b87eb7"],["/archives/index.html","a915804853f55319d957cbdbba4aaac9"],["/archives/page/2/index.html","8c00c2c5f13944e3fe05769244610f53"],["/archives/page/3/index.html","d41b48313faed0f5cb04ac8f3d44f541"],["/archives/page/4/index.html","38d550f9e7fd9d3734f6409803a7e319"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","ffd2b5f8fbdef79f1b546eff7e0643fb"],["/categories/BUG/index.html","23df932efc222807e1c4532ba5cfd9e1"],["/categories/Hexo/Hexo订阅/index.html","b463097acbad7294de671d9147f90102"],["/categories/Hexo/index.html","9e7f7f8c3bf16e80123b97e3e59c54d0"],["/categories/Hexo/page/2/index.html","dbfd3eb71078897c1efdaa04e13ad206"],["/categories/Hexo/点击特效/index.html","bbdc44eb4620fa97623fbc4a40472e71"],["/categories/Hexo/豆瓣/index.html","b6932c9cddd93d2c382f4aafb5d43e3c"],["/categories/Java/Base64/index.html","a692fda06c2c64782496151ae42b1f93"],["/categories/Java/MD5/index.html","17808a34468e862a6dc198be4ecc487e"],["/categories/Java/SpringBoot/index.html","00fa0ee37c24fa63f86b802b4aa50eef"],["/categories/Java/index.html","3beddf810966c1ed1bb6f20139db7008"],["/categories/Nginx/index.html","c323632ca7ed2f0c163f9a7a1b93e72b"],["/categories/Valine/index.html","303b3e3f5ea063dfcffbda4ad9e8e6a4"],["/categories/Vue/Axios/index.html","c105cde2a7ffa6f6a877897cd45c6e2f"],["/categories/Vue/Jwt/index.html","80f0aeaf38f29a3ce1b78b69cc64a883"],["/categories/Vue/el-date-picker/index.html","86502e1d0fcbfaeda651a96a655172db"],["/categories/Vue/index.html","8bd43d071d54557e7028fac445613f2e"],["/categories/Vue/工具类/index.html","16272e7804ad816b85e7c8863367d821"],["/categories/index.html","3d1e68515cb0a7a95ffd5499a60e9b17"],["/categories/视频流/index.html","2c16240246992e7753efde54a0012e3a"],["/categories/视频流/nginx-http-flv-module/index.html","056e3c09d44517d16c26cadafb9cb4bd"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","70ca330deb7922657a7ca88de74cbe9a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","2a91ea22befe13dbd823056ffe8a766b"],["/games/index.html","5cff80cb9cafdd44dc1e96e31fe09704"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","34bee4f605dce069a7f4b8f3741e1e30"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3bbe652dff993e1b1807642893b7c838"],["/js/injector.js","483376d17254b832eb8b9e13624f7fb3"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b5cf229d7853ec771601dae2c4f20d98"],["/js/src/algolia-search.js","6e6e35d53fc98f2cba7e9d780b94e83b"],["/js/src/bootstrap.js","af804a585a6aa4a8dd31534bfec25d9b"],["/js/src/browserType.js","6ac75dec20f0c73e7a925c613077c0cd"],["/js/src/bubble.js","6dc2b19f4345e94b38a4942a46d76dea"],["/js/src/canvas-dance-time.js","8111356eccf2ce6f1c2d5fc6fd8badf6"],["/js/src/clipboard-use.js","a17c70e675ab7dacee0a3b5bf57fb8de"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","bb488f23c8bd91c02058d4473826d1b8"],["/js/src/exturl.js","c79abbb24f10550fb3c9d93de922bc0e"],["/js/src/hook-duoshuo.js","067194d71ac2ff66c8e504166ac6f2c7"],["/js/src/js.cookie.js","5b629ee7968b3960aedacc59893d1796"],["/js/src/linkcard.js","46852167d73b80f9995f9dba7b89f10e"],["/js/src/motion.js","b08cd428e4f694ef3c1b1d1483df3d49"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","6cd01481b775ca95554ec1fb8457af93"],["/js/src/schemes/pisces.js","b37392b2db53ccd50f47bb3a234d6e67"],["/js/src/scroll-cookie.js","94a7d653047ea820de9b295773eff4d4"],["/js/src/scrollspy.js","3c3a553dca825f7d86ed51750ef1cfc7"],["/js/src/snow.js","96ef577f51d487f21f7a7ce02db86123"],["/js/src/utils.js","118cf373dc161d1afa0c3b2db8198756"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","4a35d1ffb8f9dbf537c6c8e87c1790bd"],["/lib/Han/dist/han.js","ffe2647a88429d8d79f98c7df72cf0aa"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b8def3d78855386ae649583658ce2277"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1461f24cc1a7294bdb3d5d353690103b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fa15b3d47d01734499e23ae77399f3c2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2e17c351d6a39d89469dd1eec59bc9f9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","69858587693c5c3c708a39bed911816d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","441d77394c378243b2b685b907cc91fe"],["/lib/fancybox/source/jquery.fancybox.css","c9cdb399cde555e30622f91a9347878d"],["/lib/fancybox/source/jquery.fancybox.js","e359a5bef5b0d01f2dc027c99b4d3f7b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","3c51586593e70d8b1f67f08bd55523c0"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","62a81c969c34ec0d72b85225aab2c01f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","ae34e074ce741080200b3a0bdb578c04"],["/lib/jquery_lazyload/jquery.scrollstop.js","d6030f0d9f0079f00b73f0965f02b53f"],["/lib/needsharebutton/font-embedded.css","42ed52d6d9c6044d2bed108b7dba2bec"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","7cc93a0ce6ebc8a8f23c26e96fd627de"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","2f9f1ff297d4e404c37021c759f12326"],["/lib/velocity/velocity.js","47c421108b896d45c0c354f43052c5d5"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","3e88d8ce4e1173ef3790c815b0a17196"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","1bcc31e4011c528ae698575fd9938711"],["/links/index.html","52ecbae1135d9467409802ed6390bfb0"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","bee7034775a0027e0c86af2c120c4f54"],["/live2d-widget/demo/demo1.html","a8e8723a8c776624578fcda3bd99daf5"],["/live2d-widget/demo/demo2.html","9161c9d24f5d730884b10f06f3044c53"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","a94e7d0871232f2104cc888ccef2d446"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","23347a3e76171533dcaa4c37da12c3d2"],["/page/2/index.html","8cdf047173ddaf95b891b6c065727baa"],["/page/3/index.html","334941087b7a37cab0543442fefa3af9"],["/page/4/index.html","0186b127fec5e66390e7d78f56919063"],["/photos/default-skin/default-skin.css","de145d2691b0f1880075c8e08240b235"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","9b29cf9b4dfd4cad07569d35b3f507cb"],["/photos/ins.css","7f8a0eff42fbf5508a0fcb3e2c9e21fa"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","e05382e308c34a32fc1832e846f68714"],["/posts/19c94341.html","e5c3d0193faf56c0bf51c74d3675596a"],["/posts/27514.html","7c22a5eefcf6247aae60fffbef6cbd9f"],["/posts/2b56997e.html","f98277ac8616d8ee60f2e77f138aabc6"],["/posts/358f95d9.html","a6f0e6d3d493d29246e5f3505faa3397"],["/posts/39d47c89.html","e89daff0f89d3714fca2b23af88d111c"],["/posts/3e5a3bb6.html","461abf5ae7b87a2686d321b58ea010f2"],["/posts/4394a738.html","a814d493496819b846560a9601479223"],["/posts/4598d3ed.html","d58f8272d905d7c9a2909de541144c4e"],["/posts/495d0b23.html","6e9f820cead3721f64db7c782e212ab3"],["/posts/5e773fb.html","300cee5bed14b674879920a135a63bd9"],["/posts/61913369.html","eb416f611da84ea6f31ccee9efdca502"],["/posts/69ab28bb.html","8488d753250afb1164f1d582fef55f5d"],["/posts/7fbe9500.html","aa345a15b9cefa0466866309f4775661"],["/posts/89ea6c8b.html","6911ccafd9fe5029a8f6c69919d854f4"],["/posts/9c9b482b.html","bc09dc88e91ed478a295b4a41155cbd1"],["/posts/a63fb3ae.html","3546d51af1b58c17ab1740c293b0532a"],["/posts/a7df3b40.html","fd69d4b01abfa62fac5b57d63d57f285"],["/posts/ab21860c.html","0828a788cde5b57dacdf5e4f4b6112c4"],["/posts/b4831a5e.html","830f444eb42c1b2437932c491f8f175f"],["/posts/bf9eba42.html","8afc2b258e88b7cf0b166aeb25906612"],["/posts/c1cdcf68.html","6f74a84f983128896426be3306e72843"],["/posts/c4782247.html","b635820767fa29c204bb270136c86806"],["/posts/c7631ec1.html","4c9b15755853b4a07626f5f431fee8d0"],["/posts/c9b4cff2.html","5838d2d33ac12bb18da7d85a8189324f"],["/posts/d7399e80.html","75fb0a27aa5ca84956206e95ac8b278c"],["/posts/dc877e7a.html","6afa3574f1990f3bc5cc655b97b8d4f1"],["/posts/dd9d9f86.html","6011343846e3498bc74285a3ea44be35"],["/posts/dff7e11c.html","4659a5c38ed529837532b50d991f7536"],["/posts/e1b9c6c5.html","9d19c44d4649351b51b9e475e04e4463"],["/posts/f68f129b.html","bf9e017b3445ccec89fc23ab00905bab"],["/posts/fc31ea3.html","5322a1a13b95a891aaf17bffd7d86263"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","631ba90f05790476ce90985fedc6e15c"],["/tags/AOP/index.html","adfc16c434abe7fa6ae1310fc22f4722"],["/tags/Axios/index.html","02a335f77fdd481c482010e0179d2d90"],["/tags/BUG/index.html","85ddfb2a3216026b491f34ab2db14cb2"],["/tags/Base64/index.html","8e9346243bf46a0185999d05a55f479e"],["/tags/Coding/index.html","c97595ea0d5ed33e46d890130e782f3f"],["/tags/Github/index.html","967d34d7b33c9b293834b75707acd4cf"],["/tags/Gulp/index.html","872bd8d0ad1557af9a3e9ccbcdecc4c0"],["/tags/Hexo/index.html","d74a69a18867292e8395be898dca3200"],["/tags/Hexo/page/2/index.html","61860f1baeaeabc9ef2fc5a2af5e6f7e"],["/tags/Java/index.html","c07c6a3fd2c15a92c87d0bdb24f6870e"],["/tags/Jwt/index.html","7261c6e25ab87dd45f58ce569c57e1fe"],["/tags/MD5/index.html","1ff5aedfa779bf740ebd9856085e707b"],["/tags/Neat/index.html","fbb94589c814011b19c61ec812812354"],["/tags/Next/index.html","3a7f01a9b300e7dd55ada0ee63b81ae2"],["/tags/Nginx/index.html","2762e9c3358b4dbcab9e66e7a8736aeb"],["/tags/Password/index.html","441d24d240f49ddb041306c85a631b7c"],["/tags/Photos/index.html","9092f787fee14548dbaf4aa747137bfc"],["/tags/Rss/index.html","863d133ce8dd0719b2634d0ddc15bd75"],["/tags/SHA-1/index.html","439eb3d06902a8ecb2c1371788bab475"],["/tags/Security/index.html","4e6427a6c23fb2fbacb60d70860ff198"],["/tags/SpringBoot/index.html","8e2e16fb0ca551d3f9355d9bb9145662"],["/tags/SpringBoot打包/index.html","bb6d37c9d38a3beeb8c09a4e1805a59e"],["/tags/TravisCI/index.html","c9170359052cb1d37de11cdbc233e069"],["/tags/Valine/index.html","3af6c283dda03769a087a0b0e83dde66"],["/tags/Vue/index.html","cadd592f65f9a17a55541ed495f09da5"],["/tags/el-date-picker/index.html","d52e750cf2c808461fb4b0aab71980f5"],["/tags/index.html","21ec6b5b0bfd456fbb9a697960e667e3"],["/tags/lazyload/index.html","e7779263652577c899fba5332f4d89ba"],["/tags/nginx-http-flv-module/index.html","d9e9fea9bd26e0c7b6fc8331123c4c16"],["/tags/代码块/index.html","97ce0cd7556c06b32b4053eccb3cb9d1"],["/tags/图片/index.html","34236af2ca95d4bbcc417c76db157abd"],["/tags/工具类/index.html","276ef457d077ddc8f5aaac8ebf625b52"],["/tags/邮件订阅/index.html","9b7c0a149a858d38ffc0a2c65679d4a9"],["/top/index.html","64c6c52442ae8ec6d6a89f764fa536b2"]];
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
