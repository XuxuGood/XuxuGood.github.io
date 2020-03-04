/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3f2f35a9654beaf64f4301577f8101d2"],["/about/index.html","021b51e9be4d84757dd6ab0c097a0ea5"],["/about/renxi/default.css","472c44cc82025ecacd6aa06e8debddf8"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","3eddb3e4e69070878f0f41e2289a2610"],["/archives/2019/11/index.html","dad78dd45b61cd4b4250b389ad33508e"],["/archives/2019/11/page/2/index.html","a6c72cd40de4a92eac0c56a54b3e321d"],["/archives/2019/12/index.html","cdef82f2c47584614645001fa6466d33"],["/archives/2019/index.html","a644335de7b0915a520c9a0931ba2073"],["/archives/2019/page/2/index.html","4e290bcead0f2a79bddaea8ddf51478c"],["/archives/2019/page/3/index.html","4737f3f99d8f140a8522bdca457f598b"],["/archives/2020/01/index.html","3d19425da68bf8aa0dc8ac461ebbb59f"],["/archives/2020/02/index.html","d6eb605df1ac9c968077efe435ac736c"],["/archives/2020/03/index.html","d87c41721d8c26128d0c326485bdacc6"],["/archives/2020/index.html","076378e6e5d22f254a3b6ac6ca3ec892"],["/archives/index.html","d58e214e7abd0980ff6cea45bf8e5946"],["/archives/page/2/index.html","a9e479f4d9e769a8399f6624f65c85e7"],["/archives/page/3/index.html","122eccbea82f9178a8341bbc7d864132"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f14aa6b05ce55c3cce1b3e77ca777625"],["/categories/BUG/index.html","0bf809819c53d4c332ed8d8e2879ad4b"],["/categories/Hexo/index.html","54b53b54d1e5fabed34e9010d7c50032"],["/categories/Hexo/page/2/index.html","4afd57806dcaa5d95a3f4d46ecc146b4"],["/categories/Hexo/点击特效/index.html","89b49ada951ea652666c9ecf9b195b23"],["/categories/Hexo/豆瓣/index.html","d2a8c5cf30549f841d985f1b9642df67"],["/categories/Hexo订阅/index.html","e2fcad969bfd9d37a3770b084170460d"],["/categories/Java/Base64/index.html","2a949af64e0e65928474839c825d9bf3"],["/categories/Java/MD5/index.html","50b18cd5a1b162c5865e3370463a143f"],["/categories/Java/SpringBoot/index.html","e5a652bfeaa721c96201329973e50c39"],["/categories/Java/index.html","2ffb3f3b9ac72e284f46fead54d02307"],["/categories/Nginx/index.html","5e9a4d899f509d6748e1270819f47127"],["/categories/Valine/index.html","bcc7a332a37eaefeadd4dbee8b89dd41"],["/categories/Vue/Axios/index.html","854bbd0b0febd713662793b5008e4ea6"],["/categories/Vue/Jwt/index.html","71fbbecdeb2e975cec71b8189cb839ed"],["/categories/Vue/el-date-picker/index.html","eca4d6b94b7fbd251fc2abb1c3d4c0ae"],["/categories/Vue/index.html","8674b50254640230f4cf575ca43bf60a"],["/categories/Vue/工具类/index.html","33415b0f2d251c40866363c4d6ce5eeb"],["/categories/index.html","7bbcd004ff6aa5b1dbcd28d31ab54261"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","1c5ff44c4c35c4be4efcf242b6f5ecdd"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","8a70c4ee21c43f194dc52eb2ad49e46b"],["/games/index.html","361e288426fb259abe180eefd7b251b6"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","cd510ef8eeba66bfa004cb5ebb039c8b"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","7119bdbb1a34155afe7607b08ebc4254"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8198d88d11d65e174785201131135885"],["/js/src/algolia-search.js","603ea5316a141617745637859106a86a"],["/js/src/bootstrap.js","e2e15e7c212bcb0fc5287773ef5c0879"],["/js/src/browserType.js","872b340be9f048f4722b44a31f9e4d8c"],["/js/src/bubble.js","427baadfc7ca1fa651f0070bad1deb15"],["/js/src/canvas-dance-time.js","d208bab5883f4d007926ec3cc4d25cb7"],["/js/src/clipboard-use.js","28bc52dab600e6737b264ee2b747fd59"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6818393eae4de581af6e89125537323b"],["/js/src/exturl.js","042df0d34870a020d80f5db2355efbcc"],["/js/src/hook-duoshuo.js","ba080ae495dd54123a2ba1958bedf376"],["/js/src/js.cookie.js","e26225370df4054909bbc78f4740e5b0"],["/js/src/linkcard.js","a83dc89ad7bfc5a1e4fc2f709155d8bb"],["/js/src/motion.js","064af038305d92b5393e0d1e3bb150b5"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","abd04d87f78453160c4e39b896f355df"],["/js/src/schemes/pisces.js","d0a74a8cea33a5ee95c96aa421476a38"],["/js/src/scroll-cookie.js","e7380e145941da1c7b4c408f6f6fffd6"],["/js/src/scrollspy.js","8ebe268ed4f4b3883059360832a1e80a"],["/js/src/snow.js","68eee722acd95bc9b098b4ff3ef6c367"],["/js/src/utils.js","3a839d5f9048c459f472d1023a342d5e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","43cc72270b330a8c9607303986c8362f"],["/lib/Han/dist/han.js","7fa4e08e17134a8edd6c59dd7c81e270"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","467b9e552aa926ad3618e2242b20497d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8455a6f5fa843949bbbaeff3b1744356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","83f5b6716feedb84c501a98b8d01f33d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f9b3777619f6509416edf3f39d0a7040"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ad24027a0295af108c0d6c07a25f5958"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","bab8ad3ee077181b3a934314b1a71196"],["/lib/fancybox/source/jquery.fancybox.css","72e627b0b4a7ac36709fe7536c3c1dc2"],["/lib/fancybox/source/jquery.fancybox.js","4035f8069f4e2de9720769b9e0f30570"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","11f13fde790e203574a0f7182dd661f4"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a914998b0b234bf8bae5bab7674208a4"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","f5ab9dd27ec167b464fbb02919b84111"],["/lib/jquery_lazyload/jquery.scrollstop.js","86f8bf18351d30fb1e8c772891c2b991"],["/lib/needsharebutton/font-embedded.css","0a05688f66242e74c02c82bed1cb2bf2"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","661bd77990d34259fce9c9e52e3bc233"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","be121d83bf335f74fcbdcccbfe0da252"],["/lib/velocity/velocity.js","311ed74bedf42dc2417f0a1953f1e516"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5458a57ea78354181c4c73a9a3199bb0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","b0483c96348493ee1e14a28cbdedd73e"],["/links/index.html","95de143ff18af3f908e32f921c58bf94"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","8b8b77cdf8d42bcb2844c5eb6caa7cdb"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","2a251e12cbe9a1f06545edaff6873894"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","1f2f1dbb33803de389fa038f8730e5bc"],["/page/2/index.html","548fb4c0ce52126ec96e0f657794926e"],["/page/3/index.html","37f38e383569b8064df676bc7a3084a5"],["/photos/default-skin/default-skin.css","dde69ed95de954d1e96628ece6328f96"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","d327ed765d55cb9e93219c116e5aedbd"],["/photos/ins.css","1491a4dc923bd58a665d98427415ae3f"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","af644a20b87022aca652cc0301de4742"],["/posts/19c94341.html","182ee45871f610ccbde99a00dad9a27a"],["/posts/27514.html","bd6df3838056396b4705e4b910ee54b1"],["/posts/2b56997e.html","df44868ea6ecff04e33491d4fd7c8ac2"],["/posts/39d47c89.html","1c537726f4c59663bb26663599454570"],["/posts/3e5a3bb6.html","3913896208a665b3ea3464afc194ae75"],["/posts/4394a738.html","589fb77f687a0805755e2498c8123b50"],["/posts/4598d3ed.html","03d6ada668450e7cf2ab82da654b20d5"],["/posts/495d0b23.html","212d5a5640816c16d72063faa050d80e"],["/posts/5e773fb.html","0d19dd3ae33c44a7671b12a8409ed21d"],["/posts/61913369.html","33e9b82f6cc0732a45a5c91f2f9e5ebc"],["/posts/69ab28bb.html","82d929942eaf820631027abb5771e6ec"],["/posts/7fbe9500.html","f96b042a4cab272934d1d773e22dc1b4"],["/posts/89ea6c8b.html","6b4f525783c5180b6b25a13648727ce2"],["/posts/9c9b482b.html","c7f377c3fc79898a947644710cfde128"],["/posts/a63fb3ae.html","7804ff5e6a685d03179bb0a8f1df6c80"],["/posts/a7df3b40.html","def1ed19ebc7301b8bb0bcfdc8fb8346"],["/posts/ab21860c.html","15c93c6f0ba92c669e580486295595df"],["/posts/b4831a5e.html","a6ad3d092e1cce9c497d14f9af97ae54"],["/posts/bf9eba42.html","a9240dda16a32b90cb431219cc913e73"],["/posts/c1cdcf68.html","183e2d48213efd9c6faf719bd2892423"],["/posts/c4782247.html","a3105be51f8009b3c606907215ab620b"],["/posts/c7631ec1.html","2a3d7e3fd3080b718e1d5891ad27e01d"],["/posts/c9b4cff2.html","d53230c5a74edf17fb1c9af80a26da8f"],["/posts/d7399e80.html","6bf1536655557aeffe8989f21872f3d8"],["/posts/dc877e7a.html","be893ccd91f0fdac5b29d285a96779b7"],["/posts/dd9d9f86.html","a034c2b620df578a2b6bbeedc0218def"],["/posts/dff7e11c.html","70e7ddffdda18e67a5e0bb41861edad8"],["/posts/e1b9c6c5.html","5859e7fcc4bcbf8f9aa3aec79a66c176"],["/posts/f68f129b.html","1ecd357e698f4c002951a4257294a450"],["/posts/fc31ea3.html","8e562b1408536c30d89af0a954cc3a64"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","e5e24ac1ac28ce9529bbd99b1c7818a5"],["/tags/AOP/index.html","381a0db973384094c8b90f394af6ff62"],["/tags/Axios/index.html","f55eaa52841461bf04bd6ee6547a7e1b"],["/tags/BUG/index.html","573fabfaae6b5aa42678684f058e5a25"],["/tags/Base64/index.html","5aafaa0b6096ef0ba848b7cd551ca01e"],["/tags/Coding/index.html","b1d3ff29bcfea88c5aa2d6cf5b49a45d"],["/tags/Github/index.html","7e4add50608af05f403b98d927d19b37"],["/tags/Gulp/index.html","2d69a31d4454919a420fd6b8e433029c"],["/tags/Hexo/index.html","35f85e7002007aa197384ee5c984a0cc"],["/tags/Hexo/page/2/index.html","d85ecbd3a7fe7fe7809b5c467b647ea9"],["/tags/Java/index.html","4b4a1378d0be555e37bab3c531100056"],["/tags/Jwt/index.html","37957bdd81c4070db5a53c7c04bc8bb0"],["/tags/MD5/index.html","3ef8942a79a93937490477920582b1c4"],["/tags/Neat/index.html","d8f387f90e69f7bd233b1b26b3733075"],["/tags/Next/index.html","1b20b01e030b8124c4b4cedcc5f2ed1a"],["/tags/Nginx/index.html","dcde69529a777421ba5c52290e73fad0"],["/tags/Password/index.html","8ee24f2394d17987fb2fa1a6efd5c5e5"],["/tags/Photos/index.html","c26a5d7c6e27231458efd55858547caa"],["/tags/Rss/index.html","8f816d7bc4f75e47d97e0fe228e81e72"],["/tags/SHA-1/index.html","9d523489b339ee36aa98e08f3e0504f7"],["/tags/Security/index.html","55f724d4b1ed081fb0bb498abdc6787f"],["/tags/SpringBoot/index.html","ccaca3ca5e5b0a9bbc9c6b3fef988d55"],["/tags/SpringBoot打包/index.html","4dc7fb98c293d7fa3d92a5f09914ef51"],["/tags/TravisCI/index.html","63182405b614eb2b5a1223a856f9e0eb"],["/tags/Valine/index.html","b66f976c9784d3f83d930c7b6f0a5c15"],["/tags/Vue/index.html","078f1725dcf30e44e42aca9d5a1299dd"],["/tags/el-date-picker/index.html","65f0531a652439d468d2c5c171cf88cb"],["/tags/index.html","b5a7397d8f2ace01b6d3e0f4cc472c90"],["/tags/lazyload/index.html","00bebf0c24b671334b63becd9b4de8b3"],["/tags/代码块/index.html","828c21e139bc928934849a1e1c6d0434"],["/tags/图片/index.html","73b3c3f0cdd83cb9fd77f8edd23481a7"],["/tags/工具类/index.html","d2cc7c3dccc6cd8758c27f26e50318a7"],["/tags/邮件订阅/index.html","29734d3e8ff8a74e2f56a6940737385a"],["/top/index.html","c513e2d89bd708cca410ffbe60a47e24"]];
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
