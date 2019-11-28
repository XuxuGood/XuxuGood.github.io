/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","333ecf0f1455b5ab296f345275144330"],["/about/index.html","b28b6b9dacad6e16a38173a8a2b48e0c"],["/about/renxi/default.css","9ab655847286bfd9dbeba3cb072ba442"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","6329a18792f46db714f0c6b9b114ca6f"],["/archives/2019/11/index.html","15b1867b6d24b56e1a5c8d5ad0257831"],["/archives/2019/11/page/2/index.html","b5f7dda5ac64e5767393fd23ef26962a"],["/archives/2019/index.html","e8b78642274093d53b2441699229cb17"],["/archives/2019/page/2/index.html","ee237ce3004e84ba9d5ffae01c81b577"],["/archives/index.html","f4b4055e900137478d5a370b85d40742"],["/archives/page/2/index.html","fa919b1128f9ad0216b22747f2435ab4"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","91f40422f7acd130a1f0a4f59d4263a0"],["/categories/Hexo/index.html","12475a509523f2a815aedb8f068586de"],["/categories/Hexo/page/2/index.html","0d4fed8de6fb8dfa74cc7321b857e629"],["/categories/Hexo/点击特效/index.html","e6b99c915fd4eebbee53bc2a413dd006"],["/categories/Hexo/豆瓣/index.html","483ec2ae47331f35eb27e5c40872deb5"],["/categories/Hexo订阅/index.html","c13783602c8688c629706fa947738e6b"],["/categories/Java/Base64/index.html","5019bf313dc731bce2023d10d8971722"],["/categories/Java/MD5/index.html","574d2be569506aacc28e981e42b50d50"],["/categories/Java/index.html","b9072199b8aac7dc876651401234f70d"],["/categories/Valine/index.html","007cf40277caafd56c2da9af5b669bc6"],["/categories/index.html","5d4d8c6f0d9cbccfe0ebafbce3807aae"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","de5f0e7f991a605807673172903747e9"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1656359272acc89ef7c0d56c0c3c0e3c"],["/games/index.html","6477f2c8a0dc7d0086d1a5a930a03bce"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/snow0.gif","31fc38a82198b4133b5cc6feee296ccc"],["/images/snow1.gif","3c5b3626c42d66d70ff91c21282ef610"],["/images/snow2.gif","0b379ce486be98e1ab473ce25a3b8fe2"],["/images/snow3.gif","3c5b3626c42d66d70ff91c21282ef610"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","5627b2021c16f938bd0c4c245cfa585e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2011a36aa5674a6541ee38e2a7b41a72"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","4c31b4d819260d4691025455771d1273"],["/js/src/algolia-search.js","c79da89cf21f3a066d32064c7a4ea5aa"],["/js/src/bootstrap.js","33e75e50bd591b30453f44bd4cc00bbf"],["/js/src/browserType.js","c26302c2efc7d397f937e09dea21043c"],["/js/src/bubble.js","e80c65f92b34a3c6f7880e1790de5424"],["/js/src/canvas-dance-time.js","2ebf762acbe2d9af503f74dcf6570fe5"],["/js/src/clipboard-use.js","ad290db9c3142a6de24855e008483ea4"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","62566dc95a59de75938ef208ccb1a01d"],["/js/src/exturl.js","5bdae511a6219b17b21a5d7e3d25e478"],["/js/src/hook-duoshuo.js","65ac848d3004a564e8b67b5ca4538087"],["/js/src/js.cookie.js","781206a6739015bbedc6c9b4e644c8c8"],["/js/src/linkcard.js","79462b072d6fc276c173da92573655de"],["/js/src/motion.js","9c797e3f3bf67e012e5cc4df74c06539"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","42ea2745bdcf4d1d7561aaa7659e7f68"],["/js/src/schemes/pisces.js","e01d59b01aec57a2ada78d0a7de3db1d"],["/js/src/scroll-cookie.js","d6cdce0af976f6537ad8e8bc5e25ba93"],["/js/src/scrollspy.js","37b3b77e3705627ab311b1d41811f029"],["/js/src/snow.js","5debc73dbb91af6181536ec1619a49c5"],["/js/src/utils.js","633279ca17c8b1c4f1ac02d707c5b04d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","36318c85f52f83be2f3f2df1690503ab"],["/lib/Han/dist/han.js","38817158725b5581b8d305e2ca170bfa"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0dd13d54d374f6c697d5ae795b7d3b9c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","9175281b489a5014bd5d7161112b3c1f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e97a579e931008b89353dce4e59cc27f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","efcffa0bffcf497cee1bfa3d43d34ef5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e69685047aa018c64a01102599511118"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b8c78658dbc3d7a023b549e32d6bfacc"],["/lib/fancybox/source/jquery.fancybox.css","27d84cd94bf3cb8648a8a44622c416c7"],["/lib/fancybox/source/jquery.fancybox.js","5756c25c56dce0a7c80716bae0d7be46"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","20606bbcd570fbc99400cd5a01396d1b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","ba30af402106b86e68a33e359f0d65ab"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","bccd0c9b35864246f8bbfeff12d6bf32"],["/lib/jquery_lazyload/jquery.scrollstop.js","4e28fa01bef44ecbe3bccf46bd380482"],["/lib/needsharebutton/font-embedded.css","e37880a7fb4efab50b19eed773ffb031"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","cb006ae58767a03c6bf99207fbb3f576"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","57e53bd1b4ea45f00771c6d3f93c083b"],["/lib/velocity/velocity.js","145245c1de53d37d5ff2e3e6cd7605d9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","49c623416c02c02ad6bd85b9e7f4a052"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","667040932d39dd22ff61dcd829a1a553"],["/links/index.html","c5bb035af4244ebe12db94ab1f1f5666"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","351b281f8bc3499b0c8994e1e9d9577d"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","9a460d3abd703ce30981ebba035de105"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","bddfac450bb82d63347bd6fbd6356aa7"],["/page/2/index.html","96bb3143ae47f28987e6520f1c056cac"],["/photos/default-skin/default-skin.css","0a50013ee4da09d9e03dd8ef0f12bfef"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","c4e64d3e874565d7133c684ec7ed6f97"],["/photos/ins.css","638dce3ee624d87722a3eadcdd217585"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","3803ec38573b58328b4ded5a5f628432"],["/posts/27514.html","4d5a934a7178949bc67ca519cc843323"],["/posts/39d47c89.html","72a74855b92797311a7bda63cc057f86"],["/posts/3e5a3bb6.html","859edcf20e9ec94e093bc6bee51a2128"],["/posts/495d0b23.html","45bec496d5654572750b865ae59d0133"],["/posts/61913369.html","1991078ca9587912dfef17eabbb1147d"],["/posts/7fbe9500.html","e21d4563921d020ba31040776a704fb1"],["/posts/89ea6c8b.html","efbca4ff44dbd239473c101b6f239696"],["/posts/9c9b482b.html","83e8dff5f22380de76253848f07a463a"],["/posts/a7df3b40.html","ea8bff3ff9305c076f54bcd8c505da3a"],["/posts/ab21860c.html","ccb331706370261bd9f01e108146b5f6"],["/posts/bf9eba42.html","bed7097652c8ade1adf14b47e08939b5"],["/posts/c1cdcf68.html","d7ec8b0caccd0588d4eca71f9b82a562"],["/posts/c4782247.html","45fc50fb17e45343561e440481c95bf1"],["/posts/c7631ec1.html","8904f106aa1443144fe253de608bb363"],["/posts/d7399e80.html","c3c1e4e18db61068e5d6169ca73f5210"],["/posts/dd9d9f86.html","18c15f52eb6ceb5cfac119e6f181e597"],["/posts/dff7e11c.html","42894b945fbf803147dec2dbb816e834"],["/posts/e1b9c6c5.html","9fd227a88dc989f4c29711e69f9b223f"],["/posts/f68f129b.html","45596b915a95302c385d5e98084334a2"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","7c0a791aec87ec010a3464f715c06d12"],["/tags/Base64/index.html","82e9128b0c854d386148a40e1e98425e"],["/tags/Coding/index.html","23ec8039577a099403a27c0d825e9340"],["/tags/Github/index.html","5bd37f79ecabd3944e3d75aba3a0abee"],["/tags/Gulp/index.html","d7e7376b3c6408cc36da45cfe91d1257"],["/tags/Hexo/index.html","442d2908c0484aca38b673cfb073851d"],["/tags/Hexo/page/2/index.html","697a3a77e5a4f7be2fcf50d97a171d1e"],["/tags/Java/index.html","95353450cfbbb2f143fc6f8ed7fee954"],["/tags/MD5/index.html","63ff7431bd5a4030387856d8dc8bd757"],["/tags/Neat/index.html","0ba885ee40c7923ff658a104137c599b"],["/tags/Next/index.html","5a0adfe6c345a6f323f2b6c533cdacdf"],["/tags/Password/index.html","c0dfc10e70dbcb5282bc2731cb077d83"],["/tags/Photos/index.html","74e05cf148aa33655ce741ab2448d0ae"],["/tags/SHA-1/index.html","feef2cb00e15a62b913abff894746a94"],["/tags/Security/index.html","e9f259fcf2cd2084cfcedf10b0a6d65f"],["/tags/TravisCI/index.html","04faffd64644adf536a9b0b87612e14c"],["/tags/Valine/index.html","644dd694327c89f2c23ef3102922cef4"],["/tags/index.html","dbc933bed524bec23bea594eadf4dd36"],["/tags/lazyload/index.html","0d797b540313efc8ea1f20633f256a98"],["/tags/代码块/index.html","6c32b052177f7f050591d39f4cac1b88"],["/tags/图片/index.html","b63fc90f9e45d77dfe7783ebd63a867c"],["/tags/邮件订阅/index.html","4b95585342a00d9dfd84004fa5a72125"],["/top/index.html","92ca3a28be9eafb6724ce5be9d0571ff"]];
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
