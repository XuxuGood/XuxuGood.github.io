/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2a755ff355aafac2f4ee13b687e5840e"],["/about/index.html","6a2e4b00504cf64c8c41a2b951edf974"],["/about/renxi/default.css","113d9471c4dcac243e40c2569a99b4cb"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","1da39a00680e60cf89bc97852dfbea27"],["/archives/2019/11/index.html","2742f0a40f9b63114e5e8b510e3ce458"],["/archives/2019/11/page/2/index.html","bb0afdced1c3744097b2073fd572e228"],["/archives/2019/12/index.html","9ba5a6e1d2d7b43b854aa10f99e441fd"],["/archives/2019/index.html","be7c32554f4900ceda3301e1b3089151"],["/archives/2019/page/2/index.html","ed189a73c9b9c45e91a5d6a2bbd7af38"],["/archives/2019/page/3/index.html","43808cc87512e7daf232038060124acf"],["/archives/2020/01/index.html","3b6854fcc4de58d0375a66b21e8cef69"],["/archives/2020/02/index.html","1d6d9e52e025db7394011d275f1f7a40"],["/archives/2020/index.html","82724f07099101e4a66703e0f90b0952"],["/archives/index.html","3e7ccd0683d39cff801a5a0a80a9cb84"],["/archives/page/2/index.html","5891f6f4e7015a26e2a515fb52e8227b"],["/archives/page/3/index.html","30b8dc8322f153deb3ed6b95fb0e89e6"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","20e1073090023df15093bb77fa0bc5b1"],["/categories/BUG/index.html","9e77d207055c25818a394903a87f6273"],["/categories/Hexo/index.html","9e87a9f97123ede1251c9076bab8a7d1"],["/categories/Hexo/page/2/index.html","91b77dd1d417919f09b1f42b474cd8f7"],["/categories/Hexo/点击特效/index.html","dc3b69f7372a36fe8bce63105eaca847"],["/categories/Hexo/豆瓣/index.html","2419b2e1631ee2349ceda55914bc2e51"],["/categories/Hexo订阅/index.html","6b505a75577ca2951e81debef96dd886"],["/categories/Java/Base64/index.html","33a8897fd1e22243d664ad4013324e63"],["/categories/Java/MD5/index.html","af482b69d64d999a1a81283131cdce93"],["/categories/Java/SpringBoot/index.html","9b6fa4c85a02692fce80442b6ec9f39f"],["/categories/Java/index.html","edd29bddb75466b4d9c06c156f6be2d5"],["/categories/Nginx/index.html","751902bb534f6848b43c573975aaf5f9"],["/categories/Valine/index.html","cce1d05d92adbf98811b432fc5bac36c"],["/categories/Vue/Axios/index.html","b838f52470ead4dd129fb0c6cba7a45f"],["/categories/Vue/el-date-picker/index.html","8fcf96c7496f66ddd411da4c5ab95184"],["/categories/Vue/index.html","8b0112c30ba1e4642ce80ecb338cf2d7"],["/categories/Vue/工具类/index.html","42953e2841ad4ce7dc8934fd57b30f4a"],["/categories/index.html","a6c7a7b05580d6a417aa9bbd76301e07"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","a6e283a4e547137e2e0ddda52580d07a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","01cb656cc979e18afc17b0979dc6e19b"],["/games/index.html","0541b9e62e43b771043ccdc18dbe29b4"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","50b7231f74e4b7392b402b0db3e329fc"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f9a9998c38cf7b0567724f19beaa6f8c"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2964a82c54fba495b33598639c20b8a0"],["/js/src/algolia-search.js","f4d34e96e46d0df47b8f48525640e461"],["/js/src/bootstrap.js","a592d568189bf29e39af6ad38508004e"],["/js/src/browserType.js","44598b94313dac0f48c7a5456d766f5c"],["/js/src/bubble.js","71f3eddff278f1561878157ea62d83a5"],["/js/src/canvas-dance-time.js","9b56c8e853adfeab6ab8386edafdddcc"],["/js/src/clipboard-use.js","0153cc9c6736f928ea4a236ac34c6aab"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","e93ea9d93c9b25ce9366cc3ebb8db935"],["/js/src/exturl.js","99e5dc5bd7c8c65799d08a1594e5b17a"],["/js/src/hook-duoshuo.js","5bd799a25d167661733b7dd90aea5ef1"],["/js/src/js.cookie.js","f216013dac593183f0fff66aa0bac883"],["/js/src/linkcard.js","058ad0530c3c5947e18b08f111362a4b"],["/js/src/motion.js","5010862779c80b102008c648ffd67632"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","59d096cfebe8b2a366c8faf31fc2f12c"],["/js/src/schemes/pisces.js","71b5cc7df6f2d30106f8352208afdebb"],["/js/src/scroll-cookie.js","d94d84029d4617ae23d344672c41a5c6"],["/js/src/scrollspy.js","158c1355a5fbe7221fbe386476a155d2"],["/js/src/snow.js","9833d44459f33059089c6dec5da50b0f"],["/js/src/utils.js","0ebddf45c625cf3e23fd09611fbc901d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2cbc36b0b35fc842e21b8afd6cd20704"],["/lib/Han/dist/han.js","41777642d6102329714073deea924eb2"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","fca91aace8a8e2218d7cc53cdfdb7bc3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e2fb53bff1d08f11037e114e87cda60e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","49ee50898a0f16a299ae6db978e0f81b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0377214db9d5bc01cc19f2f3b281ddef"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c942efe0d4dfbf2de0694b2714061c13"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1ec7b15578a4cbd9a4516940e49e3939"],["/lib/fancybox/source/jquery.fancybox.css","f61a87a3f931dedf2059a147a9578a4f"],["/lib/fancybox/source/jquery.fancybox.js","441aa13b29e681c230e574741b8dcb55"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","9307fb170c081cce19fca60f3c2cd5cd"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","e9ee4275b1943167eee2f0430caf2a3f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","c1966f8474b2ef829d4756545198ad2d"],["/lib/jquery_lazyload/jquery.scrollstop.js","6ba07bb26eb5bd7bee792d3626888ccc"],["/lib/needsharebutton/font-embedded.css","9c17ebd6bbe0afc590e02eef33c4af84"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","572e769f64f6e656799fcedbf3214995"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9f95a657620405a883fe318b380d05b8"],["/lib/velocity/velocity.js","b0f42999f2ee037535946059fb93e7be"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","71869833a2c9494090f52de5a4300499"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","1ccaabcae4f81baf2af6e5f98d7cc15a"],["/links/index.html","9dda7bff92480b71233fb26a061051ba"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","23754aada751b2677e81a374c80025b9"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","c17c32588493275cbb906dd1c8ef30bb"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","036da7110b439bcc8c5636074dc99a54"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","52bd9cedb7e1098a4ba38b1563fa33e6"],["/page/2/index.html","2d131892b55e33f5a3d1c2a7624c4c4c"],["/page/3/index.html","67b63267bb1e2680fcb9e5462284b9c4"],["/photos/default-skin/default-skin.css","16b0ef0cf98ae704b0ac7ec835ec79b8"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","935faea173b27d4697fd6d32908b02d5"],["/photos/ins.css","d7a858e71c7dc2bdb1cd6a9fdee427ad"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","3ed4ccf1b1ae948787f7d9ae557c88cd"],["/posts/19c94341.html","06462d80d70165bd713fc041554c7030"],["/posts/27514.html","273e810e8e2830034cce972deec2aa96"],["/posts/2b56997e.html","86455c09a86268c5cab95cd44f225a25"],["/posts/39d47c89.html","c088456f2d644b8fb4b6b77175f1e337"],["/posts/3e5a3bb6.html","3943cc223577bd3885954c3440d1409f"],["/posts/4394a738.html","b3e3dec21fd54a05807c5e51713dfe20"],["/posts/4598d3ed.html","627293f26466f05ee7cd1e4bb5bfc967"],["/posts/495d0b23.html","dfc9150b07bd49cefa6f58b7d6e77816"],["/posts/5e773fb.html","966a48f21ce7c273da1c5c7efa19b4f3"],["/posts/61913369.html","7a4114c8e5e84ec3df16215c65f7297b"],["/posts/69ab28bb.html","654e478ef2584118dc6d1012f7d0e195"],["/posts/7fbe9500.html","3b9940ae64629932b50dabe0cd0d7946"],["/posts/89ea6c8b.html","804fa9089445204bcbdfa4f79991f66d"],["/posts/9c9b482b.html","400510737591668d6581350ef4d27332"],["/posts/a63fb3ae.html","8f90286627f045d742fa59f596b22a5c"],["/posts/a7df3b40.html","cf225cce3b2e2f74813a83bbdde2fb18"],["/posts/ab21860c.html","ea5b56d4ff559a33613929e294374353"],["/posts/b4831a5e.html","fbd55377d23a697e29377607ccf04582"],["/posts/bf9eba42.html","aef3bded469f116b3ba90b9eec679ae9"],["/posts/c1cdcf68.html","cc0fc19b0f28523ff1b8fcdca1f5ad4c"],["/posts/c4782247.html","fdc106c5edf1334a9a39beae43270aea"],["/posts/c7631ec1.html","c07c12ff110e57f73e2fcd2afcc434c1"],["/posts/c9b4cff2.html","16b66af891d1ab4b2d462beb74cc6a77"],["/posts/d7399e80.html","abafa2e2b0d19190ca84457b8b92a483"],["/posts/dc877e7a.html","0ff99c85e4e17f59fb58ba13110de461"],["/posts/dd9d9f86.html","6161f714d8d063229e3b81d8d592360b"],["/posts/dff7e11c.html","9bb514ca35e3728484a760ac74a886c8"],["/posts/e1b9c6c5.html","14f1234fbaea8e553ec0d2763a7a493b"],["/posts/f68f129b.html","8566d24ab20c2be84c0ace44a1621eb9"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","cd54bd63e5aecd315de7688d395fb522"],["/tags/AOP/index.html","6656610f8e5746e7db55d134f631f5f4"],["/tags/Axios/index.html","38c8a5e585b57d7ede256087de0be1da"],["/tags/BUG/index.html","31f210652581f1f952e234dfb00adcae"],["/tags/Base64/index.html","e82f235b9033c1b0b31721153438375f"],["/tags/Coding/index.html","af9d6988eb11377da98fa7e6b0ea3229"],["/tags/Github/index.html","558063d05d0d400fb93838664f47cb8d"],["/tags/Gulp/index.html","23aaefe82b5022468ba99c0c2918214e"],["/tags/Hexo/index.html","caa7ed18442cac8bfdfb39ca91fa2d87"],["/tags/Hexo/page/2/index.html","81f63207db745490ba2975e31e9083ab"],["/tags/Java/index.html","f9924e58a1d4f4fc72f161a1e69e41e7"],["/tags/MD5/index.html","3e2b6bb511cf85e9ec28cfe6f7e364ab"],["/tags/Neat/index.html","b736bce515d1371714980577a1e922dd"],["/tags/Next/index.html","7f01d4b03ab7381a3e2b8adb3d7164af"],["/tags/Nginx/index.html","1a6e9b14f8b12149f6af3f196a0f02cb"],["/tags/Password/index.html","b39eb1845f282ee553809099f508cd81"],["/tags/Photos/index.html","b41efd60c1112aca1f9d41cba13e1e7c"],["/tags/Rss/index.html","003390d3164190255652861b538fb9db"],["/tags/SHA-1/index.html","ae3a4c16ef999f719041c6df0850350a"],["/tags/Security/index.html","dc062dccb53487458859745600314553"],["/tags/SpringBoot/index.html","e7c4e938da635a3636d918892befb6af"],["/tags/SpringBoot打包/index.html","ab412292dfe8e2e3038d9e31ec09e247"],["/tags/TravisCI/index.html","ad257ec318aaf0792a24f9955c0db6a2"],["/tags/Valine/index.html","e8a64abb88b7a05dfcae7c1f44bcc8f2"],["/tags/Vue/index.html","a8d1f64659458fe828e6d92cfec21b30"],["/tags/el-date-picker/index.html","c8703cee82a1a751825b393b664ea5da"],["/tags/index.html","6f373414b9c297013e6c8fddbe046323"],["/tags/lazyload/index.html","6abe1a235ca99e51f418f7522c531421"],["/tags/代码块/index.html","b927941a00b5ddbda0230c935365482d"],["/tags/图片/index.html","7b3a0455f055d5d6f85105ab0011e226"],["/tags/工具类/index.html","b90bbff6df44cb3826e69f41f1b2ef16"],["/tags/邮件订阅/index.html","5b0191af25313468a5157a703133183a"],["/top/index.html","d6ffffa9320146ae33e6276fcd484c14"]];
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
