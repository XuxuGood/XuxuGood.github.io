/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","653862198759f6600b1edee2c6af0255"],["/about/index.html","7bea3ce9b25437b3eca29317377c8d6b"],["/about/renxi/default.css","59c483cefd1732d67e225e469a89cb81"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","b9a0b8235379f698bdc442c88ec5450c"],["/archives/2019/11/index.html","05facc319b7e995d87802a5f49abc42b"],["/archives/2019/11/page/2/index.html","b38fe0298616e3388ac8d3bffe6c93f8"],["/archives/2019/12/index.html","f2b21f4d9e651767ac73aaaf9395015b"],["/archives/2019/index.html","c283d11d64561977c4ebb1d896fac615"],["/archives/2019/page/2/index.html","a4320a199ec5fcf419013cae313c4d27"],["/archives/2019/page/3/index.html","bfe592221b2c09379f046054c7376fcc"],["/archives/2020/01/index.html","6a64157dcab103e28bc4f5e0f049952a"],["/archives/2020/02/index.html","37c6f4d7d9086844cc6176c730fef4c0"],["/archives/2020/03/index.html","d470eceab68e5de0df2da478bd295419"],["/archives/2020/04/index.html","5b67580f28ef00964e7abf466a9e8ec6"],["/archives/2020/index.html","3bff87ad35e4a1390d49a10ee43b58f3"],["/archives/index.html","2ccf04d5a1f05f92ac61996e56b73885"],["/archives/page/2/index.html","83d35fdd53520045d8c5dc78e6fad251"],["/archives/page/3/index.html","e9a9cd5b80d2732f2b5feda4e0157a79"],["/archives/page/4/index.html","eccab84a454e9858f279aa840b6c68cb"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","57fe85c72265e7082be54c243dad67dd"],["/categories/BUG/index.html","d9d361ca20f818e63e8da03b3599d025"],["/categories/Hexo/Hexo订阅/index.html","7a1a6c2271d211519adf52835a42706e"],["/categories/Hexo/index.html","f621c22737839410c9f4233e003786bb"],["/categories/Hexo/page/2/index.html","0fde37b0fb9df52bc0ea38b697f44f87"],["/categories/Hexo/写作技巧/index.html","926e611b3146a580bf85f69b1eced69d"],["/categories/Hexo/点击特效/index.html","336fa868b3b557d3362fc4649f503a29"],["/categories/Hexo/豆瓣/index.html","cc851e0b2ee3572aa9606018b7a1b6bf"],["/categories/Java/Base64/index.html","6389d3702028ed5774d13b80ac99c093"],["/categories/Java/MD5/index.html","6bb455be417889961be060f88f42aeeb"],["/categories/Java/SpringBoot/index.html","92980fb8b195a97c28ffe8fc537412e3"],["/categories/Java/index.html","03469dddf0154665239f1ae6c306b1d5"],["/categories/Nginx/index.html","eecb5e1475c7662bd19da0351b5420a2"],["/categories/Valine/index.html","8a3d0a0132115ed75181082add3920fa"],["/categories/Vue/Axios/index.html","ad8795cbd3d4264809fd1d839b6242fe"],["/categories/Vue/Jwt/index.html","7c51c08059a41a4889cdc379cae14279"],["/categories/Vue/el-date-picker/index.html","82155ab1a08ba0119d3bfd6044974b30"],["/categories/Vue/index.html","7a1fe2e92a03f6d18c06abb4b1132609"],["/categories/Vue/工具类/index.html","2fd97a8bb393aa4474065aa83611ce2b"],["/categories/index.html","176d8e701baa9919eb289a327e2b82d0"],["/categories/视频流/index.html","b831f73b475355e2c7a031646a8d14bf"],["/categories/视频流/nginx-http-flv-module/index.html","baf62c064db9730703b27b8fc2f10c15"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","3b7a0b6cd9ea237af602d45e583cbcbc"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b4a3d5c268985d8941f2429e2f0a635f"],["/games/index.html","d4ea5f6f0f93a2fec5706eee7ce19e49"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","81198a176284b72208abd8b5d0f0627d"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","81198a176284b72208abd8b5d0f0627d"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","90a75224d1897f4f6d9d0a8a20afba3c"],["/jquery_alert/css/alert.css","8ef5730eb28f0d1d536f58bb5db803a1"],["/jquery_alert/img/error.png","49dd0813f6bc21695f2362d92f70df2d"],["/jquery_alert/img/right.png","ed0f6cc070d082aea55bec2a593d50a7"],["/jquery_alert/img/warning.png","b2c4c74d4e42259062c416f35ce207c0"],["/jquery_alert/js/alert.js","b696cd7753b0186ea3bbaea9f5ae2fb8"],["/jquery_alert/js/alert.min.js","cfd2e95e905c108a83db4063b088cc04"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2fe4c84d9563a7c3234624c627241fca"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8e89aa6a258322ad731cd1089493f1e6"],["/js/src/algolia-search.js","0ea9e36d5650d6b69db586c194d5bfbb"],["/js/src/bootstrap.js","2fa7f863e7747fd08d88a1f62269fa0b"],["/js/src/browserType.js","96d440a4c75e3a67e916eaebbf9c4cab"],["/js/src/bubble.js","978799071d58aa793bae7b9426c322cd"],["/js/src/canvas-dance-time.js","072516cc9a47018f6699b931e7a21673"],["/js/src/clipboard-use.js","df783d04bae04a5e742ce5ce45802bd0"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a5f4df6957bdd8b96104b166bcf0437f"],["/js/src/exturl.js","cc0670381317c0555a43aa7c7f262f99"],["/js/src/hook-duoshuo.js","f7bbb6916443211f9d477ca137619f39"],["/js/src/js.cookie.js","4a7591dde83871ab13a1654649017de7"],["/js/src/linkcard.js","59421b57241a605bc2d37cd73b5826c1"],["/js/src/motion.js","5a3d471047be24d7ff12afe2ef1073c3"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","1c870e63828056be44915de56f5f1f30"],["/js/src/schemes/pisces.js","af230de9e39920ce4f11c372220a6ced"],["/js/src/scroll-cookie.js","e2b111ee28bdb1c3b47314826e31dfab"],["/js/src/scrollspy.js","53c8d66ff54a7c6884dc760ee7574689"],["/js/src/snow.js","4011920ac00d31172fbd52d7638a6a62"],["/js/src/utils.js","29fa9d01bcdd33efe9f8a63e1f27e385"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3bd926a745d80aecdbf734b1b89441f4"],["/lib/Han/dist/han.js","83d4bb2fd8def0faa7aa1cd29141ea25"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2f16001b6d4ff804457263da9eef5ef1"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6f97f0fd034b105372636f392d1d5d41"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","74e41e177c5b1b6e2a7a042e035c433f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9c329f668aebdd02cf31ad40991a28cb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","963760646dbaeb329336511f430b885b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","feb41cd06186c9e8a96c9d7b5712b8c8"],["/lib/fancybox/source/jquery.fancybox.css","2608292ac5393cd1b858d20b8db74c38"],["/lib/fancybox/source/jquery.fancybox.js","f4b63bc74f25c73a909cbe5b92d1a867"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","c3d2c1e808dd5b598f69d2624eb198bd"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","771d6b7b98a65d85ade163d3361198ce"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","b74e6eadae607ff59eda197250f23630"],["/lib/jquery_lazyload/jquery.scrollstop.js","a8ad76f4a3456acbf3ceefd378e86f96"],["/lib/needsharebutton/font-embedded.css","0b61b400e1c31a612d1a9f523d87fd81"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","5332f9e4336cfaabf1bb91c7ddb3dc16"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","90ae399d9005bcc3fd31d191dd044a59"],["/lib/velocity/velocity.js","3615ea2fdf03d0b949a3cce540f502f6"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","7a0f1362470c9c4daac863145ffa9cd5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","5e250be8db599c1c02d66ac96185c346"],["/links/index.html","4f862ed2b2555a02954fb330c6966284"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","19f0465fbfbee594147002fdce0b32f2"],["/live2d-widget/demo/demo1.html","a8e8723a8c776624578fcda3bd99daf5"],["/live2d-widget/demo/demo2.html","9161c9d24f5d730884b10f06f3044c53"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","b5012b7b3fe95f6da7510fd65a876c8e"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","a4d16c60f243faa828d04b3ba576b597"],["/page/2/index.html","366376eac1f95aee453618d38732544c"],["/page/3/index.html","6162499253685e2eff8d0e9a335574a7"],["/page/4/index.html","8dc24fb8ebae5da35bab551c66de4093"],["/photos/default-skin/default-skin.css","ddba3bb137a3ccd84bf4b2aea84f96e8"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","fe74eedced279dda7d3a2df5fd65c13d"],["/photos/ins.css","20055ab51b507399523461b6a498cd70"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","16e766669fb667f50b6a4fec91c36203"],["/posts/19c94341.html","c0a1ed9247618ed0efebaca5b3227648"],["/posts/27514.html","d36ff780f3c2f39642be5786db12f15b"],["/posts/2b56997e.html","3d47715edf186d0d1ee0abeafd752130"],["/posts/358f95d9.html","1550ac934ad0e1095f5b7808efb63eef"],["/posts/39d47c89.html","129b4fc7c9b4d79d92d226bfdd546e19"],["/posts/3e5a3bb6.html","23232b7074415c72365c9a0f081bbc90"],["/posts/4394a738.html","ac76d2b95a29409f44c8d8f3fb09ed72"],["/posts/4598d3ed.html","dddc1f23f9bfa9effa77af53e1544ade"],["/posts/495d0b23.html","798d7e274d18b349605818afc2994f55"],["/posts/5e773fb.html","9759fbebc3bd1eb459f850c0efdf90b6"],["/posts/61913369.html","3e812c9c44a891fd8b33e4c3e30bdfe3"],["/posts/69ab28bb.html","c3ff0153676eaee916273771a249cc59"],["/posts/7fbe9500.html","d9b217d49d7edfbc9bbe8aafbaae10cb"],["/posts/89ea6c8b.html","fb64faef911068d5eed67a554cd41977"],["/posts/9c9b482b.html","fe34f95c874343dc468eb143fa91169c"],["/posts/a63fb3ae.html","9d74557246493eb3f24bb000585d1804"],["/posts/a7df3b40.html","3801f0b4b20c3564f2b3613737795451"],["/posts/ab21860c.html","7b6f91fe72cf5157e1dae7cbf800464c"],["/posts/b4831a5e.html","dbdf6ff0e4c7e9923a4b527a277bb7b1"],["/posts/bf9eba42.html","e49cef61cb0d321305c436352c8fe4b2"],["/posts/c1cdcf68.html","5837897f0b63ca279ed109ff8aa907da"],["/posts/c4782247.html","8e7cb5c494699be6e48c53ed0a0e0a4a"],["/posts/c7631ec1.html","b1f8604a38b66e0627cd8a73f9332c74"],["/posts/c9b4cff2.html","faa113e24b7c3a28144045719f709018"],["/posts/d7399e80.html","ee8b46cc70c46b2593a0de5a8466c84a"],["/posts/dc877e7a.html","884c5eaa01b4fe9c11e5f992460ed6ab"],["/posts/dd9d9f86.html","b395f020dac108da273d58dbcf8cce79"],["/posts/dff7e11c.html","5d0edaea804ab2f3f1fffc0f54ffb3d9"],["/posts/e1b9c6c5.html","4b077a87d9b564cf86aa7cb164f83e28"],["/posts/f68f129b.html","202207bd3287b8179ebe79a2a667072b"],["/posts/fc31ea3.html","d65af6755dbb0f59ac37641b6000684b"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","11e727d9458037cc72d2c81508feac40"],["/tags/AOP/index.html","90ebfaf22524651360326f4ff2cabef0"],["/tags/Axios/index.html","142f1fabceeeffc7256aebb5e5eb76f8"],["/tags/BUG/index.html","073ee7d2811e6dbfc8ccb0b5f91420eb"],["/tags/Base64/index.html","89420487ba13fc0af33f26e8ca4197dd"],["/tags/Coding/index.html","95c8810e0c39b34c56595e0b00142a1d"],["/tags/Github/index.html","cf358f89432a344dd3423232e05eb807"],["/tags/Gulp/index.html","491a987c889593a4d6ee006c28cdf55a"],["/tags/Hexo/index.html","e4f9e494663f83d7111aeb458f30e3fa"],["/tags/Hexo/page/2/index.html","614bbaf265f537617cb9f972e6081b78"],["/tags/Java/index.html","dbcfbbca1ceadd6cb5fe8a5e0345f6e1"],["/tags/Jwt/index.html","abf7aa1f0bacdf53fd14336ada8d65c2"],["/tags/MD5/index.html","6869fd33467d461d39f915ca0305a37a"],["/tags/Neat/index.html","ff6465923acb5a94ef453247f0829e0b"],["/tags/Next/index.html","a9173cea0f2ee3670b64d5ef4e10d776"],["/tags/Nginx/index.html","37e5c3f0516d702f367cbc1d0631309a"],["/tags/Password/index.html","bc29f2663a8fa3352d229623e0c944e3"],["/tags/Photos/index.html","c746acf65743c6eb2699a8862a250c00"],["/tags/Rss/index.html","4f72f4929fb5147c8cc317c901a75e0d"],["/tags/SHA-1/index.html","76cbd005832bc6a8d6e21c24b1654257"],["/tags/Security/index.html","20886fcf74a76f6c3f024cac5c7479ee"],["/tags/SpringBoot/index.html","ec326a080fddc09e7af4439a8cf84516"],["/tags/SpringBoot打包/index.html","ae8404994214a9aaf4c8a222ffaca58b"],["/tags/TravisCI/index.html","2ae4911b16ae087c49a562deaf460bda"],["/tags/Valine/index.html","2514bf9b15c188f19ce5b28b1780da59"],["/tags/Vue/index.html","7530f481cfb13b397986795907e43e87"],["/tags/el-date-picker/index.html","cba26ff9b7a6183d54bd20b5c9acde2f"],["/tags/index.html","cde1487d5e6a16352f864f4e0d171a4e"],["/tags/lazyload/index.html","05a3bfe0af57cd16376adba440e7fe21"],["/tags/nginx-http-flv-module/index.html","aabf933e5e8f5a0878e45774689dc859"],["/tags/代码块/index.html","521eeb0b520243c745463abb8cb113c5"],["/tags/写作技巧/index.html","9ea4258a66fc60f91827f9384e425289"],["/tags/图片/index.html","373c5152ed4119a64887f953b5467c36"],["/tags/工具类/index.html","7ceb24c15a164716f8a671be736cb71d"],["/tags/邮件订阅/index.html","2462ff4d71b39cef3d82e424288e4de0"],["/top/index.html","a43a304a7a8dad97fec216f10a355132"]];
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
