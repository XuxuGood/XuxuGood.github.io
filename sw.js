/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2fa07c7dd71bbb6ca7e6bc5503c9904e"],["/about/index.html","ef5b526f48af047dc8e8153da6a9338e"],["/about/renxi/default.css","528ec7383944052dad84d5fa8f83fb43"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","4ba3abf1c9899be8553c19db24e56168"],["/archives/2019/11/index.html","9520e0219cdf1c4c831d66e3ff9e9f9e"],["/archives/2019/11/page/2/index.html","208a94f602675b655eda3048d66c0aa2"],["/archives/2019/12/index.html","d8900ad155c8b8fc36d12fd0168d18df"],["/archives/2019/index.html","078653b7adfa7b931eacf4d5b47321e6"],["/archives/2019/page/2/index.html","f21084ab056e8f2bc92aebed0995ee05"],["/archives/2019/page/3/index.html","8442b1deff710bb964bfddce4cdbeafb"],["/archives/2020/01/index.html","2f248a416ec625f8d1f2e5d63760a09a"],["/archives/2020/index.html","083d7976a2b0ec7aaeb271725d68a029"],["/archives/index.html","6fb04c6214ef2e271a732c750fb81327"],["/archives/page/2/index.html","a8e8da0c7bca159fa11862ad698423b3"],["/archives/page/3/index.html","f892ce307cf7d61440c17b744e4d9691"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","8924f17974d8e6f6623b4328a5600e0f"],["/categories/BUG/index.html","203c71f50dbf8992fab59bb60a4bcbcd"],["/categories/Hexo/index.html","9980bc4d0bd564b9d4f93f7e093d014b"],["/categories/Hexo/page/2/index.html","8845e66e007466d4e34fc50da57c6c07"],["/categories/Hexo/点击特效/index.html","bfda733aa34fb2d41f8d2c6919f8e564"],["/categories/Hexo/豆瓣/index.html","8b3a990fd1045f0c257eebe01974ee08"],["/categories/Hexo订阅/index.html","16899dc47612686371340026fdb860d6"],["/categories/Java/Base64/index.html","6755ec04ab756e5d7d3bc3be0f5d2498"],["/categories/Java/MD5/index.html","40d7cac0d95bb4da56c92bb52ee60112"],["/categories/Java/SpringBoot/index.html","00afedc77adee73e88581528ccd4affa"],["/categories/Java/index.html","b59cec263c476d6ad99a4cafb5d04365"],["/categories/Nginx/index.html","a084411c105e72704ed100c61fb0038f"],["/categories/Valine/index.html","097dbe1724c07d802ddfb15d80d9f5cf"],["/categories/Vue/Axios/index.html","eae455d9c0ab18bbcd8aeffbbbb427d9"],["/categories/Vue/el-date-picker/index.html","fccb926f819a66ecd071ccc38d25e0fe"],["/categories/Vue/index.html","21b78bebc467ef4911df4adbf4c26a9b"],["/categories/Vue/工具类/index.html","87ccc548833d0cc742181f7a18035931"],["/categories/index.html","2aad402e9d1b9389571b57938db1740a"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","44907af387d54a7b1d765073196c37b7"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0ae2e523b1901af86cc0dc5245e098b2"],["/games/index.html","a2e9e0fbaa98eeb83bdf22aa0aaf7172"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","ada077a949d5137f72436f5bfbec1892"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","aea5c6a92869283aeb2c018d4e5bbb86"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","a796c16366a9c84b3c2e93fca75bbef7"],["/js/src/algolia-search.js","a9990eac2a8d52b562e9c0f902f07b54"],["/js/src/bootstrap.js","4c28ebc2ec9f15cf453cd3783d6795c6"],["/js/src/browserType.js","e48f3af2a1653cde83a9746af5981e8e"],["/js/src/bubble.js","70a390a03ff531db5a855b2d161a1588"],["/js/src/canvas-dance-time.js","06737343913210fe6acfa061e235435a"],["/js/src/clipboard-use.js","83af327b1a8585dfb632a8004c9d0c26"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","f52b3bb15e4bdfc468e8f201b5279501"],["/js/src/exturl.js","6d4c3318e21998420720468c6a153d0b"],["/js/src/hook-duoshuo.js","f324c2f7747e26eacc387afc17b46385"],["/js/src/js.cookie.js","4361e647b0d6dedaa01d9c605cc9cf5f"],["/js/src/linkcard.js","f9ff522495389c4a5feb2138a2272d3a"],["/js/src/motion.js","14832ab7e12c4f68ce34cb102d769a6d"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","9e1b6df96758f7f55b734e7961f31940"],["/js/src/schemes/pisces.js","b3ac961d575bea8019fa22ef1df79eff"],["/js/src/scroll-cookie.js","e214bbafef9b5594e4b373a15e92c505"],["/js/src/scrollspy.js","734ecedb26cfc404faf139d0aff79599"],["/js/src/snow.js","b4b683529e8a063ceccd1958b7b77526"],["/js/src/utils.js","333b8ab4d8ee7d78f09d6a1eb8f43721"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","15ac2648d9ecec90da0f63a366e199bb"],["/lib/Han/dist/han.js","67690fcafa211e83fc8e4d4fd951231c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7a90f3fd77fc7e8d103fb59bd968f8a8"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3522e1a07feab1b09e02e10190528e0d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","44b28ffde10599aa6e37b3820f8865de"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ea888e009deb220b3227bffb65e49724"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4d878858fc1b30812a6fc451b3951701"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","919cc67ec651112835ff3e815ede200c"],["/lib/fancybox/source/jquery.fancybox.css","4f89670807645a84599142116637e86c"],["/lib/fancybox/source/jquery.fancybox.js","d0265e58f87ec570e735f82e879e63c9"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","adb733a5df2cc5a5b3f24e10f540464e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","72ac5ad848d00702122679846fda28b8"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","9b9dc6e682a02b33af7f4733bfbf3789"],["/lib/jquery_lazyload/jquery.scrollstop.js","484394496f07618f9044210aaa2be2e9"],["/lib/needsharebutton/font-embedded.css","4f3be71b123bd2cee138a1ce7f54a820"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","58a2ffebdd7afb5e79465d5d93dea16b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","31b9d68117bfdfec59462fc9c32b6018"],["/lib/velocity/velocity.js","ef7e0cb258d259203665d88e9bb7959c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","35a5c34af9c7d86dd0f7603ac7e71ce5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f09a7217052b003b8bafeb7850deb968"],["/links/index.html","c01a3ae3a62af8aa29f697816a306570"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","bac12abc17ab3a21247b1dd4c2b34ffa"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","4825ad2b73a1d0d54e8eb5313a37929f"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","036da7110b439bcc8c5636074dc99a54"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","13c8c608e3dc3f76d22fd8fc24b63e0f"],["/page/2/index.html","031b787d6444109f2dff8320651b364e"],["/page/3/index.html","2dd08c31fb1e52920dbec5615299d5e3"],["/photos/default-skin/default-skin.css","6e65a54ae6b067538c8cd6bf4b12ff9b"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","1082dcd9dd213adb5031ecdbc11b220a"],["/photos/ins.css","d830897240fe1dd79883d8cdbc2facb8"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","1053b4e4bc54864922260194b4a6d996"],["/posts/19c94341.html","dc1c06f196dd6e25c71954d362a40681"],["/posts/27514.html","0784aad78fc4a1525bfd3bc359f38a10"],["/posts/2b56997e.html","85c46917726f16cd83a1c484ad5a9cbd"],["/posts/39d47c89.html","f4b34b06fdd9721fe72e6ab3ec322737"],["/posts/3e5a3bb6.html","d5c07fc541ffcee5da85ba9d318d4a75"],["/posts/4394a738.html","17e567a98aac23eca5678cfa4787a6e2"],["/posts/495d0b23.html","a89ddb0288232ebe187edaf10830fb14"],["/posts/5e773fb.html","9b1d45506964f055425965535135c2d0"],["/posts/61913369.html","3f55f993b6f2b0b6358119e2f6dd050e"],["/posts/69ab28bb.html","66b7d95efe4cc64a1e7e6780c27b1f4c"],["/posts/7fbe9500.html","3b9bf016c2832a4427e8e50df28ff900"],["/posts/89ea6c8b.html","1acf14447b8fb987dfff828fb999d0e8"],["/posts/9c9b482b.html","7d2c11c306f685952c390cd2cd7b0127"],["/posts/a7df3b40.html","4442f7ef66b08522f6fc47bb0d4dda00"],["/posts/ab21860c.html","12049854df6b731a20621e46250640ff"],["/posts/b4831a5e.html","481f4aa2d3a39593ceb5ef71cbeb9334"],["/posts/bf9eba42.html","82bb38ba0dbbf599e50a87ba86d2c2ef"],["/posts/c1cdcf68.html","8a4c20afb9e894cd4e7db8d0b3e6f9bd"],["/posts/c4782247.html","8be8704aa081a394d5681e718be70148"],["/posts/c7631ec1.html","2ede61649408419ebcd7c151b0eafc7e"],["/posts/c9b4cff2.html","7e68ff42126f460314e179b6d93dc019"],["/posts/d7399e80.html","e53d1515b6b9701dc703468e57f6e086"],["/posts/dd9d9f86.html","a2ffc469167c0c0c8914dbaa06a893c2"],["/posts/dff7e11c.html","88d5a882bb036075deca4dc242889fa1"],["/posts/e1b9c6c5.html","addd482c512dda15f096c055a20f8e78"],["/posts/f68f129b.html","00f574add309c25cc5af155206c41dde"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","a9e215e60cce26f9be0bf2ab4c8a5d0a"],["/tags/Axios/index.html","a1550ce40be2b8f7e28be0d73eff03a9"],["/tags/BUG/index.html","44b3f6ae403728ef448095280c084944"],["/tags/Base64/index.html","3297c80feb06c4ab34d2a886b8dfbd11"],["/tags/Coding/index.html","533c9cfe53d5cefebe1ec97770a366db"],["/tags/Github/index.html","8d46e1cc4f332e195a8a621c8f5a2fb5"],["/tags/Gulp/index.html","945fc14dc7923f4e5b4133b52916f67c"],["/tags/Hexo/index.html","1c92900fb68694b059a937b288e03a23"],["/tags/Hexo/page/2/index.html","65f5c18400e2e68d46cfe6e01d18d78f"],["/tags/Java/index.html","1f4c2f30f3a282eb3926091992974e31"],["/tags/MD5/index.html","cb055ac2314be15479cd0925f61ae719"],["/tags/Neat/index.html","271aace3771f6ce8194d846357316aa3"],["/tags/Next/index.html","7ddfe68f52dd5aef5754aa65aa7534b3"],["/tags/Nginx/index.html","9e176db381f2e013af3d5fd978686976"],["/tags/Password/index.html","3305ef61632489fb1b8e22a87dfe8f01"],["/tags/Photos/index.html","75d86a967405fd4c427ec159049a67e3"],["/tags/Rss/index.html","e89a45f32602fa6ecdb3e6d1d9fa6e2e"],["/tags/SHA-1/index.html","987d2385d62095d3bb3ca944583fd2f3"],["/tags/Security/index.html","cc3344ce93e18e0ed4500c55e4c3035d"],["/tags/SpringBoot打包/index.html","96bd9972af74c64a059bb0c6c2c5985d"],["/tags/TravisCI/index.html","e120bc744ca8576743f1e3a772c6bb7a"],["/tags/Valine/index.html","31e026aa11fe2ed6fe67eb89daf6aaf5"],["/tags/Vue/index.html","dc556f51aa7d80cc65bbab33df9bdbad"],["/tags/el-date-picker/index.html","cd469a58c398e80dc94216fefb457174"],["/tags/index.html","80c40b453b3dc1ad5c6d00786f47b090"],["/tags/lazyload/index.html","bb55ba7aa22e3eb08ac0632de646f11c"],["/tags/代码块/index.html","1fae2046321f33a865577c5c52b9dd0e"],["/tags/图片/index.html","eea3c81c52e9f4e36f54c9859b418cba"],["/tags/工具类/index.html","c58bb8df41f6de174d758201063b6b23"],["/tags/邮件订阅/index.html","46d0f91b5b2fc8bfb94907d4ef1e4c3b"],["/top/index.html","9f654da004308b6172d32c214f3c20f7"]];
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
