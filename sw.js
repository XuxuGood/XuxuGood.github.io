/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d78badb897ef27a7f9ae609f8ceb3f59"],["/about/index.html","dad9e171b996dec6e6304c4cc7edc119"],["/about/renxi/default.css","000b830ab1582c8e361543da904c8a4c"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","e6eb6ea12db555fd4be87769b130a69c"],["/archives/2019/11/index.html","f76cfb34aaa0c751aa59003b7792e69e"],["/archives/2019/11/page/2/index.html","9d00f439b32a95c40f55b87d4f1f7c2f"],["/archives/2019/12/index.html","2d1f958a41e4c39e798ef4bcff81a3b3"],["/archives/2019/index.html","c43ad29b48db92a1aacae267e1e178f3"],["/archives/2019/page/2/index.html","70b1651b026f59ef32a9205836b3907f"],["/archives/2019/page/3/index.html","3af106b0935eb0c24fb5d4a260c5573a"],["/archives/2020/01/index.html","59472e466ff616b5b4ca89a37561725c"],["/archives/2020/02/index.html","57f13c5c69c58ad28cc8abd78f4bcf7a"],["/archives/2020/03/index.html","e7aba5a4e510c15dfddbac2b8f818fa8"],["/archives/2020/04/index.html","9d56053a359c33f50a1d0a17e878c652"],["/archives/2020/index.html","c9a218cb87fd34b4152def3e9664a1f7"],["/archives/index.html","855e90b23e2e68b0578877307bc5576e"],["/archives/page/2/index.html","bda50c39f09128117555adf51a8971ff"],["/archives/page/3/index.html","2a753a35dd5eaf59837b867e1fee3400"],["/archives/page/4/index.html","0c83322ec22751102537cc7f472fa78c"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","e6ccc08fb9b316eec85a67034b0e383b"],["/categories/BUG/index.html","1c9ce1d99319ea0574604ebdf4fe720b"],["/categories/Hexo/Hexo订阅/index.html","45371971570af8004c78ae183e1d0d34"],["/categories/Hexo/index.html","9fa70b5a417caeb2fa312473432059f6"],["/categories/Hexo/page/2/index.html","dcea51917a0d03cb63ddbca8f207d2de"],["/categories/Hexo/点击特效/index.html","f7606fd439bdb2b0b7841d024b2f987e"],["/categories/Hexo/豆瓣/index.html","1725e0028825ea671315bfd1ab1eca25"],["/categories/Java/Base64/index.html","cd91f7db0550c7e8334ade93b214ebf8"],["/categories/Java/MD5/index.html","181eb7f82bef604dd4557092b945b6bc"],["/categories/Java/SpringBoot/index.html","4ba564c979419d7f4555159942157f3e"],["/categories/Java/index.html","6504bfdfa7fb9235459fb21b04617ca0"],["/categories/Nginx/index.html","41e69c0f79b8f48a109f08f3fb1a2082"],["/categories/Valine/index.html","2f427c0d3f6286793b800f1481668ba4"],["/categories/Vue/Axios/index.html","0c33927245d7616c63decb974d754c72"],["/categories/Vue/Jwt/index.html","42d6c63c593a266640630cf6546bb937"],["/categories/Vue/el-date-picker/index.html","249531b1ee7a6107ee96d6f193aceed8"],["/categories/Vue/index.html","a63ace6173b113db4794356354bb3d6e"],["/categories/Vue/工具类/index.html","e20b61e11faa26b3ee18c4739b9b2feb"],["/categories/index.html","45694ac0cd0f8fa79cc87dce24b261a2"],["/categories/视频流/index.html","ea53ee09f5f0109530a05888dafbe5fb"],["/categories/视频流/nginx-http-flv-module/index.html","b9e832ebc7b54d9fbcad3bb8ea8192e7"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","f82ca906d0344845268f1f1dca3a1b5a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","515aca064bb29a501abf5da35c266ff4"],["/games/index.html","846baef2a1907512b9ce7311b7b09996"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","81198a176284b72208abd8b5d0f0627d"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","81198a176284b72208abd8b5d0f0627d"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","c3ccb2abb47662892fd6909c169e7154"],["/jquery_alert/css/alert.css","b6113fd71409aaa4c2f67a622b9f7ca7"],["/jquery_alert/img/error.png","49dd0813f6bc21695f2362d92f70df2d"],["/jquery_alert/img/right.png","ed0f6cc070d082aea55bec2a593d50a7"],["/jquery_alert/img/warning.png","b2c4c74d4e42259062c416f35ce207c0"],["/jquery_alert/js/alert.js","1738f984bbc54a19281e0d8d7885b337"],["/jquery_alert/js/alert.min.js","cfd2e95e905c108a83db4063b088cc04"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f42bfc3ebf9dd1e0e2ce88e9a617ec61"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","ab0bf231aeab83da2aa0e2b4cfc9f67e"],["/js/src/algolia-search.js","530260f80522dd0f91aa51a1c0439421"],["/js/src/bootstrap.js","199d0e42a97aa5074441185396362dbb"],["/js/src/browserType.js","fc1419c43804ed9c6ed880ccb5268632"],["/js/src/bubble.js","06d0d228eced68c31b07cfa6a87c5938"],["/js/src/canvas-dance-time.js","f1b1e5b35c3389f977364e7275bfc9de"],["/js/src/clipboard-use.js","1f314409c8432f5e40c4775c379cdb36"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","33fe12b78acc7dbcfff4c45af48f75ce"],["/js/src/exturl.js","b82d7835f88a734c35e4a01241be641c"],["/js/src/hook-duoshuo.js","9c97006b71ef43c45468a9262472123b"],["/js/src/js.cookie.js","108cf1d34993c7e452ff43198abcc885"],["/js/src/linkcard.js","cff10a973639315c72162d86de6cfd99"],["/js/src/motion.js","57864bff57a0fb81db4fd07add275b21"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","a4003a4efef061801ab66edc9d3ccb7e"],["/js/src/schemes/pisces.js","2936e0daefba22719612e62ca1cc0471"],["/js/src/scroll-cookie.js","4d590f12663955dd9012ce02213822cd"],["/js/src/scrollspy.js","61051101e793532660bd6865c3f630e8"],["/js/src/snow.js","f668a13cece361cf1b2114ede5397841"],["/js/src/utils.js","cae6a223b55d50669b0bb35bfdc7d72d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","47c17d8ad9ae266b6c55f7fabf2f479b"],["/lib/Han/dist/han.js","566f84c5f91848a238640f2618242ffa"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e5ec60ac957e079af53ecaab52615bb7"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a95f569dd17c570a924733797bec5223"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6d5b889aa2e838c2ab3e855341aa298c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f586ad44efc2d5317d50f7b009356515"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4f044d934ba0464349d77d2ddce3b3df"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fc39271b84ceb0e5b7aad7fb2560dc71"],["/lib/fancybox/source/jquery.fancybox.css","772afa724dade355fcbb36f33cfc88b9"],["/lib/fancybox/source/jquery.fancybox.js","d536ccadc314aea8c7832c9601c44019"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","7be15bbb4366a6c1f525625b3b711cce"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","72e7aab05815099abd3ac4568bf6eb1c"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","cbb0b6061b4e15f6a93e9d9fe8ad2145"],["/lib/jquery_lazyload/jquery.scrollstop.js","bc436ae58510d54c4791d638a5b33f66"],["/lib/needsharebutton/font-embedded.css","c3e4e7758e3e7f7240b62920527564b5"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","8b54e2448cb05dddd28a50536031b42c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","683e78053207f7d7236e0f5749269962"],["/lib/velocity/velocity.js","a8ad44171828c5870fdfc6b7ad017953"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","d067201e31b3dd4a4a3c6c5e5dd08654"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","de0b7f5a04be4f9ffc3dc87d03b8958b"],["/links/index.html","297a67cd87b20f719726fbba911e251a"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","06735bb8337651490053ec2fead4f073"],["/live2d-widget/demo/demo1.html","a8e8723a8c776624578fcda3bd99daf5"],["/live2d-widget/demo/demo2.html","9161c9d24f5d730884b10f06f3044c53"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","eaad57d6a7e89cf6e541c88e3bf64bc2"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","ec5f9ac1cf739795a2fdfb78bf206189"],["/page/2/index.html","2cf22c4a657ec50c13cc4f49cdcb4498"],["/page/3/index.html","6db453c40414fcd930f481fbe0a8ca4f"],["/page/4/index.html","723c680858d4b64fb4770a1689207298"],["/photos/default-skin/default-skin.css","dd8a4178e64ef3100f828595dcb7ce5a"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","f9da3c7c84050976a0dc81bb7fbef97a"],["/photos/ins.css","1c7e4e7f49655e9e7c3e825662255748"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","bacebdd0e66c4358daa1f79a47243079"],["/posts/19c94341.html","6763e135953a75d7766f7f1e16796a72"],["/posts/27514.html","8eab207024749216c844e50ca73e2c47"],["/posts/2b56997e.html","c005c741a1acf4feba74c94cd8d18a79"],["/posts/358f95d9.html","dcce47597eda5b7b3937192560058a6b"],["/posts/39d47c89.html","1cec69c7e43912ffbf5c514864a5e6a8"],["/posts/3e5a3bb6.html","1f2876bbe4e6aaa1e725b4564542a297"],["/posts/4394a738.html","a2554597de09f5df0f58e8b96ef7bda0"],["/posts/4598d3ed.html","39028fa3ffb8aeb9bce0eaf2df9d8e23"],["/posts/495d0b23.html","56d66f868bc75a5e126694f1535f4c64"],["/posts/5e773fb.html","9b250dd65bffd1b72a88565a106c3c4e"],["/posts/61913369.html","9c54bda2491b4d9b64efd7830ce714bb"],["/posts/69ab28bb.html","abf2873f46b855ba7bc9e4e81a16dcc2"],["/posts/7fbe9500.html","b5de5178122fc77aef1d7acc63004d02"],["/posts/89ea6c8b.html","751fc1b1c6c0b72ebbffc02868fc0309"],["/posts/9c9b482b.html","583f6a839fef1efec4117c95334c8359"],["/posts/a63fb3ae.html","3a7ac4b6d6ea0f6256332b14a293eef9"],["/posts/a7df3b40.html","613585d86b70e1a6a067122d32008891"],["/posts/ab21860c.html","5a426717155436bbd2590835beb68fdd"],["/posts/b4831a5e.html","18f1eed869e95267783be689f702238c"],["/posts/bf9eba42.html","86a3760aa074c021e8fb5cd2fc861cac"],["/posts/c1cdcf68.html","2fa822686e3af1c18f6e3c6c278f0ca8"],["/posts/c4782247.html","4f2f867478bbc1981d18543cb21aa931"],["/posts/c7631ec1.html","3220edbbeca23d83f494824a8a959239"],["/posts/c9b4cff2.html","0536c202b74d59623a82720a4f5f6258"],["/posts/d7399e80.html","3dde51275b6fe2aa0e6a512f948bad58"],["/posts/dc877e7a.html","64886c8d0ad59ae77301d0688db3a9c3"],["/posts/dd9d9f86.html","27e34fdad18a1061d46e35625945e7f9"],["/posts/dff7e11c.html","805c3f6faac4f8f83f4916554974800e"],["/posts/e1b9c6c5.html","d125130e180fb06f19b1a931dac625dd"],["/posts/f68f129b.html","14d4f9f9c1e23fda5e538c836ac6773b"],["/posts/fc31ea3.html","7c467501edb111805c05c78cc15eb618"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","f0b37ac83c9d356dc094e109e5f557d3"],["/tags/AOP/index.html","73359a055fdcda669c03de8beefe8f41"],["/tags/Axios/index.html","f8374655ac4c5404442a3404d3906a65"],["/tags/BUG/index.html","9157bfd8c3c2c9170196897c3b2cbb2f"],["/tags/Base64/index.html","ae2098291a60763ae4a5cde85a754cb6"],["/tags/Coding/index.html","6b5f11827ad930668f90c34537822871"],["/tags/Github/index.html","41c40125d236823ceecb8c32fa5b509c"],["/tags/Gulp/index.html","0837bce34f3befbd983f44c5cb474142"],["/tags/Hexo/index.html","8166a2a629095cb26e6c6522e6dbbda1"],["/tags/Hexo/page/2/index.html","c18c31e62f9fbf13a944f2d119a7d7f8"],["/tags/Java/index.html","a15de5cb3594795a39ccc2c7d8bc2a25"],["/tags/Jwt/index.html","993fd46213a4673a8cf0c85c11800601"],["/tags/MD5/index.html","498d34a73d5f42717eac62df9082a390"],["/tags/Neat/index.html","d16e6e5c0efb887511ba0abe307b29ef"],["/tags/Next/index.html","a9a3f3df454b7b881daf0d91157062d9"],["/tags/Nginx/index.html","0730d9d171704b4b68e2e633a4a79694"],["/tags/Password/index.html","071a8b9a63b6cb588575bb3470f9f57e"],["/tags/Photos/index.html","b631b9137288abd47e6be15953459550"],["/tags/Rss/index.html","b9f281a90712c5bebe0f0c4c4a06c2c2"],["/tags/SHA-1/index.html","a712b215bc8e4b0e66c56231d8e35c05"],["/tags/Security/index.html","cd257c4e660750fc4dda842030f51ad2"],["/tags/SpringBoot/index.html","193358a45ccec1e57d169d13c9e28c07"],["/tags/SpringBoot打包/index.html","42f404d31fa8853b31a1418f9adeb1da"],["/tags/TravisCI/index.html","e54a173b438967eba239bc12683c4d10"],["/tags/Valine/index.html","c641860c5267fea41c0ab063a691c67d"],["/tags/Vue/index.html","89ae325d2d36393c7cae8e4336fd71b7"],["/tags/el-date-picker/index.html","2e2aab314dbf7f1c020768d942e924f2"],["/tags/index.html","a23c38a743e7bdcb88692c63bceecacc"],["/tags/lazyload/index.html","c348126dfe9d132aad7d13839c672d09"],["/tags/nginx-http-flv-module/index.html","3d3f35b7f63d5be99796c6c4d1de9739"],["/tags/代码块/index.html","f56876343ff10ef6d928f51765198cc1"],["/tags/图片/index.html","c8c2a4982e1e0aaba1b9aa8ad679afd7"],["/tags/工具类/index.html","f6248f37b42910b0772cdff2cb7737bb"],["/tags/邮件订阅/index.html","a35d6c3b4ce91a9174dc97621bece993"],["/top/index.html","790d64db77e9fc9ffda53e32e7229660"]];
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
