/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","dc45f3620e8a184678bb73f01f854e4b"],["/about/index.html","e671d2775fca3a506c49e2efed3b9f36"],["/about/renxi/default.css","9c4f6513c4cafa4c097132e93591d8de"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","1000d68adfdef4d1086ef79985659177"],["/archives/2019/11/index.html","3002cb107fceb608ad8cc693e6c11b20"],["/archives/2019/11/page/2/index.html","a4ff5f72ad23b5ba4906fff90695edaf"],["/archives/2019/12/index.html","66b39da6d6b9dbb0989727db05bfa02a"],["/archives/2019/index.html","5c4d1ac4bcc2b89831b6a2dbd68c23b0"],["/archives/2019/page/2/index.html","6b4b3495842462c6876bd5e011f383c0"],["/archives/2019/page/3/index.html","c4ed8fcc966796b6ce78961a1f63c665"],["/archives/2020/01/index.html","14a5305662f2127d935a472406cd40d7"],["/archives/2020/02/index.html","682242ff480e5217d74d69e24a7cb210"],["/archives/2020/03/index.html","ec78d7d859747aee5a9807160b37aaee"],["/archives/2020/index.html","9883328a1d3a8778d6ffb6350d84b56e"],["/archives/index.html","518779ab3aab3db5e4c57d8b5a811929"],["/archives/page/2/index.html","2f0a77ded008c1d9f35005cce379027f"],["/archives/page/3/index.html","a465934304c35e473d6fdca112e34c21"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","ab1c8dd48c72ae94f1f4617a83afa09a"],["/categories/BUG/index.html","bbed00b2c19b8a6391d58d199bd7a390"],["/categories/Hexo/index.html","2a24fdeab4497443beb63de532344247"],["/categories/Hexo/page/2/index.html","1cefe3d39970a814259d97aa0f23044c"],["/categories/Hexo/点击特效/index.html","313113223fc9c3afa559dd83a53cb66f"],["/categories/Hexo/豆瓣/index.html","88c3961bf72a334f608cce31801500d8"],["/categories/Hexo订阅/index.html","28ad44cf58d2bc907e7c4d58c1091bcb"],["/categories/Java/Base64/index.html","26b909c04d4296d8cac417fde9415f12"],["/categories/Java/MD5/index.html","8d3e233b686ce14af5d5e678ca44ae9a"],["/categories/Java/SpringBoot/index.html","2dfcd2dac274d62a51f8b32966479c78"],["/categories/Java/index.html","c0136d267df3f32a41e1c03c8f56ca12"],["/categories/Nginx/index.html","aa0f695f1e55df6a97a73a0d579a3fff"],["/categories/Valine/index.html","e198132a5bbca321369218235b5eb772"],["/categories/Vue/Axios/index.html","936bbaa6f7b091c748f41e3605e2b080"],["/categories/Vue/JWT/index.html","9722c625162a111ff1d520aaaff9864d"],["/categories/Vue/el-date-picker/index.html","e5d3972cc94c65cf465af599041b7d01"],["/categories/Vue/index.html","3126cafecdaa95e8af95124679f4c7d3"],["/categories/Vue/工具类/index.html","25fa9e3cb6de2985fd5551bae47d04a2"],["/categories/index.html","44081123cc0947e3f545e35fa0d04931"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","a86ee68b3e8298539c79f5f1476f25b8"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","93deb70bb07eff02d3e722d38fe49a23"],["/games/index.html","88a4b2c3b8caa47d6fb6661ec569a812"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","211ec5a455fede65dd73e0ee4d21f64a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8a6f99fe307987d1fc5f72765cc1ad62"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","4d9e0cf78077a155c17e8dc0f771198b"],["/js/src/algolia-search.js","ccdb14570f240e5dd0031d9489740b9c"],["/js/src/bootstrap.js","823b194ff0a9c49816d14cc6a147025a"],["/js/src/browserType.js","5d7b244cb1cf89796c44b02a4375e977"],["/js/src/bubble.js","18fb367dc747e26ae39ec8b175027b1f"],["/js/src/canvas-dance-time.js","0aa01de0a9b71bdd99395093fb465613"],["/js/src/clipboard-use.js","dbc8b21525ef12645a2d3f388d340916"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","d88d3a491241a3d629ddc1efae89928c"],["/js/src/exturl.js","0e23c33f015d4861bef666ec9eb94182"],["/js/src/hook-duoshuo.js","1e8c563a784605e7e45e56d5bd56ed8b"],["/js/src/js.cookie.js","bfcc4af79e3f038005d72e12622003d4"],["/js/src/linkcard.js","30a1aca95acabe4080ffeef4f78112f5"],["/js/src/motion.js","3e70eaeace77c60d74b265c04b3569bc"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","b087ce65543f2babfb5f9de7e7609e5b"],["/js/src/schemes/pisces.js","25e5270716ad27b60878661c357ccf91"],["/js/src/scroll-cookie.js","634e684b7f7fd94ecc5478f5c191b229"],["/js/src/scrollspy.js","7dd15739f50d06f9045ba1043bc6bf9e"],["/js/src/snow.js","764060b36a4bed9271a0fde6fc2e0561"],["/js/src/utils.js","62cf35b098e0e36f186bc5be1af213c1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1ec6ed38678a06f8594beb256ccec426"],["/lib/Han/dist/han.js","aee397da4d5b470a8b91dfaac6b85212"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","d3f6dd7224bb1a28dc037962cdfaa582"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","9aaf8745c7e079484168c92522c91401"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e27996291351581daa721ff089dddd54"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","8f65703166ae32b7589c35f521630ee4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7e404799a65ea6aa3fcec77567695320"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7b1aec8cd9eaeb9a6fd3877b22e7eace"],["/lib/fancybox/source/jquery.fancybox.css","a8733b8a8e83c66fcf08e8e7215f0137"],["/lib/fancybox/source/jquery.fancybox.js","7f2e74ddd0ed7747131ffe1c527edb0b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","7ea62f3861ca18a10107d0eba270754f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","9028106d7984decdf8338020965ac994"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","05e2f2133ac4c0f80aaa97dd449ef990"],["/lib/jquery_lazyload/jquery.scrollstop.js","54a42c1e74a200cddc37bbe69c064378"],["/lib/needsharebutton/font-embedded.css","d9d900174130d7413b9a50485d476778"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","f73f76c7e1344a00191e4a01114f4908"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","48a4049d4a1091512f1fbf126eb86999"],["/lib/velocity/velocity.js","0ab92233390939a453f047a919ef6056"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","581a995020aa44e5b597c082099ca315"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","fd22d5ab3a197c233901fb1db515bd34"],["/links/index.html","8fedcd62b63e932d1400ca92b883027f"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","3ac3cb3c74f350aefbd7591c477f575f"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","91fc93fc7a3caca2ee2705a670b6c5a0"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","036da7110b439bcc8c5636074dc99a54"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","c90dfae3aa3ae2f7552ad1196f105247"],["/page/2/index.html","299b8bd8a7aaf1ab6d9a99bbb994cb5a"],["/page/3/index.html","3a53cf160970c2a6e122b172b0f79027"],["/photos/default-skin/default-skin.css","6de882798504f31b28ed78716131fd38"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","0c60e475094d711f6d01a8cab1086708"],["/photos/ins.css","5b5cb8befa28fdd96728cdb8c6961e1f"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","c4f9ba4c0cdec07f27da91e629015bfe"],["/posts/19c94341.html","1b4efd9ce3eaf26654ed7e995dc3d68b"],["/posts/27514.html","a370c0f9fcd5c13aa21d89d193a11239"],["/posts/2b56997e.html","487b59f93c770bceb06643379333882d"],["/posts/39d47c89.html","0f369e57f2a3ce8f8bc569ef77f94dd5"],["/posts/3e5a3bb6.html","23f40fa9bc229a4fd766998156f8d391"],["/posts/4394a738.html","a53181308a91457f45a3bc9e2ce4c450"],["/posts/4598d3ed.html","fd25314893d62ceb617518ecbc1bdd51"],["/posts/495d0b23.html","aa84252a16b583f90b34163db830a24f"],["/posts/5e773fb.html","05e5cd00616b1033bed8eb58b6371378"],["/posts/61913369.html","11063541866a112ef98e783218b5a446"],["/posts/69ab28bb.html","1ca8711a4b16aa1b8177a53eff3d8810"],["/posts/7fbe9500.html","d427bb1382e0b0bd6430ef0c6e24e1b3"],["/posts/89ea6c8b.html","b147f30f4d01db2fd52bb3adc71de1a1"],["/posts/9c9b482b.html","378b4b07f9f98ec6cdccd01e24230b0c"],["/posts/a63fb3ae.html","648da4092d200859d9deab17124f82db"],["/posts/a7df3b40.html","ebceeada042180ee3745f8208b78f222"],["/posts/ab21860c.html","84e08ee2bd22edfaec96f714d3eff724"],["/posts/b4831a5e.html","ce78cb90c3a5b00d7a0cb2b05b5acd9b"],["/posts/bf9eba42.html","b90fac6b0c6e8f0ef7126a9ac9b504c0"],["/posts/c1cdcf68.html","3f07db6a6729599697868d763f19de4f"],["/posts/c4782247.html","475a0f30b0e3b5e023a840a6951277fb"],["/posts/c7631ec1.html","3d178052124f00b27c2cbcb148982ab0"],["/posts/c9b4cff2.html","a70b1ffb675d41ecb011129c8fdb64b2"],["/posts/d7399e80.html","b5bd326c5bba4175fbc38ce292df18cb"],["/posts/dc877e7a.html","993c217f5b249bcf84d2ec3b16939617"],["/posts/dd9d9f86.html","699bbb57ed32d8720a60c8420f628c63"],["/posts/dff7e11c.html","2bf9633fe6cbcae08a7d5897d2aefb80"],["/posts/e1b9c6c5.html","2b7940f47cd66b3a8b43d675e7c4e4d8"],["/posts/f68f129b.html","60d7860090383cf41d2a2f18d68602a6"],["/posts/fc31ea3.html","7792823a683cd1e26c8f890194e6b20a"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","34b818d7b612af94033df966d10e9a62"],["/tags/AOP/index.html","b86d81ed8f083eb3ea4837418f534c95"],["/tags/Axios/index.html","ca2c8036fe67cb73a4ff1b4b9bdb7237"],["/tags/BUG/index.html","0d745046f1608231b34f3229bc63065b"],["/tags/Base64/index.html","eefe19578dba0e693488539c454d9b02"],["/tags/Coding/index.html","8b8d292083633b7f4f7a8ac08c327166"],["/tags/Github/index.html","e67420fb3a6ee287bb163366f8282770"],["/tags/Gulp/index.html","b45a7bfeca10649f8cbb3e3e2ab94f1f"],["/tags/Hexo/index.html","7344c9b360a5ec87cd3e5007c65ea6e7"],["/tags/Hexo/page/2/index.html","8f5411c35768fd3f1a654dba5fe090ed"],["/tags/JWT/index.html","934ef32af0c50d81f49047be86d41dd0"],["/tags/Java/index.html","83de626448e20264d0d8cf771e59e26d"],["/tags/MD5/index.html","8c73f74ec91cfa8eb7993a473190a1d9"],["/tags/Neat/index.html","4b7cf818434fe1c9ed1dc48f2ae67525"],["/tags/Next/index.html","d2226645db649bd91c3e6ddca8c5e275"],["/tags/Nginx/index.html","2e9a5277a6a9ffeaa5a2670de4414c1e"],["/tags/Password/index.html","2ded9f617620fbbabdba873db346d234"],["/tags/Photos/index.html","751b9a3bd03d030639d50df2baf815c0"],["/tags/Rss/index.html","c45c6a479c88dba93ca38c8d125167ad"],["/tags/SHA-1/index.html","b52aba4825270f129ab6ae283609c23b"],["/tags/Security/index.html","81b56e228b0be0d82d6cad4e3916136b"],["/tags/SpringBoot/index.html","7e6b88111147decea87cfc7ab86bbc2d"],["/tags/SpringBoot打包/index.html","b27e1e4c7a049fabc3c2fd42c04ec828"],["/tags/TravisCI/index.html","23a4003462b05133acd5801d220ffff1"],["/tags/Valine/index.html","e7807c6fbde0572c7246b8cca31e129f"],["/tags/Vue/index.html","52bef45540f4fb933113bb90ae892eb3"],["/tags/el-date-picker/index.html","993d8578becf72b2d38072eec293bcc3"],["/tags/index.html","88df6efa9305ff16f51c951346c27c22"],["/tags/lazyload/index.html","5561eaa20488669e4f533f3807e5d2dc"],["/tags/代码块/index.html","06dc18a0527096c3ad0eb03dd1191e2e"],["/tags/图片/index.html","b1c5d2b850bb1e080b1d3865d6ce8e65"],["/tags/工具类/index.html","85179aae1bd6742a154200e74bb01ab7"],["/tags/邮件订阅/index.html","1175289b0a3d8bf1820d8098d2388eb0"],["/top/index.html","a9a3601f8c3244f16135d09e8b161806"]];
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
