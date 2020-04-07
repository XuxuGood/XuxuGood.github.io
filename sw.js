/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","35eff44df788276965609f8234ae04ae"],["/about/index.html","1097940468c84eae84ebf340fb1337de"],["/about/renxi/default.css","876639750d5f5b372bef7d68c3b5f4b5"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","b9a0b8235379f698bdc442c88ec5450c"],["/archives/2019/11/index.html","05facc319b7e995d87802a5f49abc42b"],["/archives/2019/11/page/2/index.html","b38fe0298616e3388ac8d3bffe6c93f8"],["/archives/2019/12/index.html","f2b21f4d9e651767ac73aaaf9395015b"],["/archives/2019/index.html","c283d11d64561977c4ebb1d896fac615"],["/archives/2019/page/2/index.html","a4320a199ec5fcf419013cae313c4d27"],["/archives/2019/page/3/index.html","bfe592221b2c09379f046054c7376fcc"],["/archives/2020/01/index.html","6a64157dcab103e28bc4f5e0f049952a"],["/archives/2020/02/index.html","37c6f4d7d9086844cc6176c730fef4c0"],["/archives/2020/03/index.html","d470eceab68e5de0df2da478bd295419"],["/archives/2020/04/index.html","5b67580f28ef00964e7abf466a9e8ec6"],["/archives/2020/index.html","3bff87ad35e4a1390d49a10ee43b58f3"],["/archives/index.html","2ccf04d5a1f05f92ac61996e56b73885"],["/archives/page/2/index.html","83d35fdd53520045d8c5dc78e6fad251"],["/archives/page/3/index.html","e9a9cd5b80d2732f2b5feda4e0157a79"],["/archives/page/4/index.html","eccab84a454e9858f279aa840b6c68cb"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","57fe85c72265e7082be54c243dad67dd"],["/categories/BUG/index.html","d9d361ca20f818e63e8da03b3599d025"],["/categories/Hexo/Hexo订阅/index.html","7a1a6c2271d211519adf52835a42706e"],["/categories/Hexo/index.html","f621c22737839410c9f4233e003786bb"],["/categories/Hexo/page/2/index.html","0fde37b0fb9df52bc0ea38b697f44f87"],["/categories/Hexo/写作技巧/index.html","926e611b3146a580bf85f69b1eced69d"],["/categories/Hexo/点击特效/index.html","336fa868b3b557d3362fc4649f503a29"],["/categories/Hexo/豆瓣/index.html","cc851e0b2ee3572aa9606018b7a1b6bf"],["/categories/Java/Base64/index.html","6389d3702028ed5774d13b80ac99c093"],["/categories/Java/MD5/index.html","6bb455be417889961be060f88f42aeeb"],["/categories/Java/SpringBoot/index.html","92980fb8b195a97c28ffe8fc537412e3"],["/categories/Java/index.html","03469dddf0154665239f1ae6c306b1d5"],["/categories/Nginx/index.html","eecb5e1475c7662bd19da0351b5420a2"],["/categories/Valine/index.html","8a3d0a0132115ed75181082add3920fa"],["/categories/Vue/Axios/index.html","ad8795cbd3d4264809fd1d839b6242fe"],["/categories/Vue/Jwt/index.html","7c51c08059a41a4889cdc379cae14279"],["/categories/Vue/el-date-picker/index.html","82155ab1a08ba0119d3bfd6044974b30"],["/categories/Vue/index.html","7a1fe2e92a03f6d18c06abb4b1132609"],["/categories/Vue/工具类/index.html","2fd97a8bb393aa4474065aa83611ce2b"],["/categories/index.html","3231f1c3a9f660810e97b9d78aa5ad51"],["/categories/视频流/index.html","b831f73b475355e2c7a031646a8d14bf"],["/categories/视频流/nginx-http-flv-module/index.html","baf62c064db9730703b27b8fc2f10c15"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","26307664cc8fd273e8d37919d82a6cd1"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1ab077de7b3bfb631f786bf709fd53b3"],["/games/index.html","d4ea5f6f0f93a2fec5706eee7ce19e49"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","81198a176284b72208abd8b5d0f0627d"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","81198a176284b72208abd8b5d0f0627d"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","bf42e0a7c12632e833b7d88564783331"],["/jquery_alert/css/alert.css","86ee482210ce85d38f9e2486c7da7a4e"],["/jquery_alert/img/error.png","49dd0813f6bc21695f2362d92f70df2d"],["/jquery_alert/img/right.png","ed0f6cc070d082aea55bec2a593d50a7"],["/jquery_alert/img/warning.png","b2c4c74d4e42259062c416f35ce207c0"],["/jquery_alert/js/alert.js","4de203fd8214ed603217343fe42b0e4c"],["/jquery_alert/js/alert.min.js","cfd2e95e905c108a83db4063b088cc04"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","59d735daec7edf3b15d4ed0d45c11f84"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","0f594bd86393e93f42c5ab407c294894"],["/js/src/algolia-search.js","b92136fa4ebfc13a7f048fc6c0b5d33a"],["/js/src/bootstrap.js","9553e956a9154d257b5c78e53b4c8329"],["/js/src/browserType.js","f988c2c69580bf7cda901a345349a3dd"],["/js/src/bubble.js","e914d8958d3b80de3739074b9bd3995a"],["/js/src/canvas-dance-time.js","2d3a60d00b6c690b6c2887eada2e4e06"],["/js/src/clipboard-use.js","941fa0295bc55f020e2dfea7f57e535b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","525690c69cfa3ae15d9ec4f9c56bc5bd"],["/js/src/exturl.js","1a5a097a7a0174d426ed6be0eb849a7e"],["/js/src/hook-duoshuo.js","2249c54fa2c83ffee9a3aa294866f0b8"],["/js/src/js.cookie.js","10c140234560102f4f4cc604c3db7bab"],["/js/src/linkcard.js","34d783ceeb63f51c89564f10b938538d"],["/js/src/motion.js","7f6f57a09da5355781640dc95b504c7c"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ccecd8ec626043cc6cc20693f14ad173"],["/js/src/schemes/pisces.js","a2b5ca4f49b7223ddce08facd7a10ee2"],["/js/src/scroll-cookie.js","bb7ec4bc2b66d8bb47f9f386200a1ac9"],["/js/src/scrollspy.js","87e55c30574c31035acbfd52f02a40da"],["/js/src/snow.js","e84fe118fc8b72cc4618c72ca4e869f4"],["/js/src/utils.js","7f181e1738e09a72229fc50615dd1985"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","b8506a42359614e92c1adb36ac834230"],["/lib/Han/dist/han.js","a8c6d948559c0e660148b126e293423b"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","a0657f2f3cf864de9dbbed14bb115538"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","90669e02bb0f96787534f728683bec0a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6acd213255f3efa9adba42cc93e018c8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0228800c411cde26741b5637d04daf38"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e33708a2b5c1881f8e81b797eb54747b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f74b20abdbceb118a9a9e1d049d9d54f"],["/lib/fancybox/source/jquery.fancybox.css","3e9321da1a1c9b11448939bf2bde51c0"],["/lib/fancybox/source/jquery.fancybox.js","337094f6b234cc46e680a7cdd47f91ca"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","00344ae45919509c80f2632122b4352c"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8af74537fc30193ba7c9e0310cae3a7c"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","a5b368223ade1a62e12b0ef8bbfb4775"],["/lib/jquery_lazyload/jquery.scrollstop.js","3add6279820267839077a7c50b7fe1e2"],["/lib/needsharebutton/font-embedded.css","24717f616e425857377e956c07f8f26f"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","df7c633d5327bcb446eaa3ba544b38c0"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","fcb048ea79ceac9e8aaef538de4184ce"],["/lib/velocity/velocity.js","3adeb85e49248acc556308df365514dd"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","755f8cde0103548e717756d6ad43097d"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","512ed4b450605f2f3bec7ee892b40fe6"],["/links/index.html","1ccc2d4757f8b893947b5ce6945d2258"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","064a6bb5362e595459865f798c32c70b"],["/live2d-widget/demo/demo1.html","a8e8723a8c776624578fcda3bd99daf5"],["/live2d-widget/demo/demo2.html","9161c9d24f5d730884b10f06f3044c53"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","4cdc40c41fe4154d149c14bc1a60cb27"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","a4d16c60f243faa828d04b3ba576b597"],["/page/2/index.html","1cda7ba62518d0f27d4a22786bbd88b6"],["/page/3/index.html","26fd301a898f54c76f6c8693d1890b45"],["/page/4/index.html","368321d6e5654311e260380cff03765e"],["/photos/default-skin/default-skin.css","8a0a1df9e7fb77b179ee9747a0f2411f"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","84f748f64d0788abc8f7313403b097cd"],["/photos/ins.css","92dd86a053860c51ab6c5e1f601a7fc5"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","9f26c2ed982d1e4e39847511a14137a2"],["/posts/19c94341.html","d3072ea9d884c5a1d6fb4f2995c0d11d"],["/posts/27514.html","515ed9e115c7f0d33ba34b541c48244a"],["/posts/2b56997e.html","9f486acbc29028d5a224ba883577b12f"],["/posts/358f95d9.html","dc98bba91d0ff4497a696512fb0377aa"],["/posts/39d47c89.html","ded9ff43660c2a3a8a7b2414ac401a2e"],["/posts/3e5a3bb6.html","c70097ca155b1e9f730c25df81edc79a"],["/posts/4394a738.html","1de7459921ada3e7f22bf2df1f7e9544"],["/posts/4598d3ed.html","f281b484843282a2e506d41d86d68b54"],["/posts/495d0b23.html","173f27297cf8c564affdfd54b4bbce35"],["/posts/5e773fb.html","3713f84848d6e756242fdf7d6496bf01"],["/posts/61913369.html","462348e4b440204acf35f0125bf21bfd"],["/posts/69ab28bb.html","535f703b585475c364520e0e9f3813a8"],["/posts/7fbe9500.html","87e53286c832cca2f93481d170c48756"],["/posts/89ea6c8b.html","dce06c393ff48036fe57b5cc7969f11f"],["/posts/9c9b482b.html","7f0e398644eb50d389111b1d4a681e1f"],["/posts/a63fb3ae.html","e021cfa7efbe3ac912e0388880ca445f"],["/posts/a7df3b40.html","81a588798248b7d4f342199a68a0e829"],["/posts/ab21860c.html","d44eb71663b3e5a16cf42a5881a64664"],["/posts/b4831a5e.html","5248b4c7e68585caef559fc8a91bd9c1"],["/posts/bf9eba42.html","393e4eadc429b675c9e07eb509d40da4"],["/posts/c1cdcf68.html","e20290bbb2e401bcd802950cb5db7c3b"],["/posts/c4782247.html","32c04597e4bf4f894a6397096b548df6"],["/posts/c7631ec1.html","0d44acfdb739cda3237a4566504f22cb"],["/posts/c9b4cff2.html","8f95493ba0321bfeda9c68deac1c511c"],["/posts/d7399e80.html","84e0d51e9661b038cbaaaebeddf747a5"],["/posts/dc877e7a.html","ba0bf34858ea44d582836929668f6801"],["/posts/dd9d9f86.html","3336fbacbe535e7038bb13fb9eb4b2d8"],["/posts/dff7e11c.html","ffb58043e29fe23ed6ffc67f5124dbb6"],["/posts/e1b9c6c5.html","b3dfff50425afac0d18fd7b1ddf1750d"],["/posts/f68f129b.html","6a8f97dd60d4b1ff3c5bd96378a7b320"],["/posts/fc31ea3.html","21be75273df7bf9e01e5ba03c3a21c06"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","cb16e8b7905ff2f7137ce161f329c12d"],["/tags/AOP/index.html","90ebfaf22524651360326f4ff2cabef0"],["/tags/Axios/index.html","142f1fabceeeffc7256aebb5e5eb76f8"],["/tags/BUG/index.html","073ee7d2811e6dbfc8ccb0b5f91420eb"],["/tags/Base64/index.html","89420487ba13fc0af33f26e8ca4197dd"],["/tags/Coding/index.html","95c8810e0c39b34c56595e0b00142a1d"],["/tags/Github/index.html","cf358f89432a344dd3423232e05eb807"],["/tags/Gulp/index.html","491a987c889593a4d6ee006c28cdf55a"],["/tags/Hexo/index.html","e4f9e494663f83d7111aeb458f30e3fa"],["/tags/Hexo/page/2/index.html","614bbaf265f537617cb9f972e6081b78"],["/tags/Java/index.html","dbcfbbca1ceadd6cb5fe8a5e0345f6e1"],["/tags/Jwt/index.html","abf7aa1f0bacdf53fd14336ada8d65c2"],["/tags/MD5/index.html","6869fd33467d461d39f915ca0305a37a"],["/tags/Neat/index.html","ff6465923acb5a94ef453247f0829e0b"],["/tags/Next/index.html","a9173cea0f2ee3670b64d5ef4e10d776"],["/tags/Nginx/index.html","37e5c3f0516d702f367cbc1d0631309a"],["/tags/Password/index.html","bc29f2663a8fa3352d229623e0c944e3"],["/tags/Photos/index.html","c746acf65743c6eb2699a8862a250c00"],["/tags/Rss/index.html","4f72f4929fb5147c8cc317c901a75e0d"],["/tags/SHA-1/index.html","76cbd005832bc6a8d6e21c24b1654257"],["/tags/Security/index.html","20886fcf74a76f6c3f024cac5c7479ee"],["/tags/SpringBoot/index.html","ec326a080fddc09e7af4439a8cf84516"],["/tags/SpringBoot打包/index.html","ae8404994214a9aaf4c8a222ffaca58b"],["/tags/TravisCI/index.html","2ae4911b16ae087c49a562deaf460bda"],["/tags/Valine/index.html","2514bf9b15c188f19ce5b28b1780da59"],["/tags/Vue/index.html","7530f481cfb13b397986795907e43e87"],["/tags/el-date-picker/index.html","cba26ff9b7a6183d54bd20b5c9acde2f"],["/tags/index.html","2915f4b2ce6e6419933a078da3bf3352"],["/tags/lazyload/index.html","05a3bfe0af57cd16376adba440e7fe21"],["/tags/nginx-http-flv-module/index.html","aabf933e5e8f5a0878e45774689dc859"],["/tags/代码块/index.html","521eeb0b520243c745463abb8cb113c5"],["/tags/写作技巧/index.html","9ea4258a66fc60f91827f9384e425289"],["/tags/图片/index.html","373c5152ed4119a64887f953b5467c36"],["/tags/工具类/index.html","7ceb24c15a164716f8a671be736cb71d"],["/tags/邮件订阅/index.html","2462ff4d71b39cef3d82e424288e4de0"],["/top/index.html","f01e238d49ef11a3b232f7df3a5a3bd1"]];
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
