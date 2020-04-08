/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a00cba911f1d7c6776af90ec9227338f"],["/about/index.html","10ab64f8384020cf4f467ea047c5add5"],["/about/renxi/default.css","095f5824be55e15894247f4b87d0f387"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","f9f91be87e05869e4f618d578e872675"],["/archives/2019/11/index.html","978cd91ad1f5598875d8b51a6860d9c1"],["/archives/2019/11/page/2/index.html","f9cb6c384ab4b85f58db81df5711959d"],["/archives/2019/12/index.html","67f03c9eb0b85b45b309ac1b310855fd"],["/archives/2019/index.html","34d5f43f9655a412618b5f058ee2b9ce"],["/archives/2019/page/2/index.html","1495aa0b9c316d093546ceb262befa1b"],["/archives/2019/page/3/index.html","b1e139da36a731a15755ee9fcbc11151"],["/archives/2020/01/index.html","4ddd429ad43a05eeaca0c765fc518354"],["/archives/2020/02/index.html","e12d1e9f35eba74dc957a45541bc5995"],["/archives/2020/03/index.html","0d02e2c22e81acb718a8f9fba3ff334f"],["/archives/2020/04/index.html","f4a5364419e949712945ad85dea7b463"],["/archives/2020/index.html","3f464c99c48957ccf7210ff6c774111b"],["/archives/index.html","b46284d07929a4f4ef2b68889effc582"],["/archives/page/2/index.html","7211d938699f668c856f843c66ad667f"],["/archives/page/3/index.html","5bbf3301aec2eabf1ea52727fcf8d060"],["/archives/page/4/index.html","a5518975747b6a555334f911a944ecc9"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","ca011ddde57d9ea847453b0637c4cddf"],["/categories/BUG/index.html","f6c3f375e647879465d5ba805206d60a"],["/categories/Hexo/Hexo订阅/index.html","dc11e24216459a7a6a650f90e0a82c01"],["/categories/Hexo/emoji/index.html","8d35169b59d48fac8afbb19c76b383d5"],["/categories/Hexo/index.html","952bb7bbd0a8bf32fb2454d9c1c0a8e3"],["/categories/Hexo/page/2/index.html","3524df26aeb8e616488c4952bbffe38f"],["/categories/Hexo/写作技巧/index.html","83d19860590dd53c9b6162307596fef3"],["/categories/Hexo/点击特效/index.html","9921dc52ac7d586a7ba1b848acc408a6"],["/categories/Hexo/豆瓣/index.html","925ff7257d3fa8501abf6fb7c26e3f37"],["/categories/Java/Base64/index.html","8f16cb4a6af6e5d3d3a07a287eed31ef"],["/categories/Java/MD5/index.html","d5c1e0772dc33146286c6c59663be8cb"],["/categories/Java/SpringBoot/index.html","2c5d86f613a764bae9f771b1fb7442f3"],["/categories/Java/index.html","5a52b949e37f267777eb40fb90f6e783"],["/categories/Nginx/index.html","39e771bbcfe59a0b2c55d9b3ff82e9d7"],["/categories/Valine/index.html","06efe8ad62bd8e541bc0cf362d837cd6"],["/categories/Vue/Axios/index.html","17f45b2e8573d5f0db10013101546f4d"],["/categories/Vue/Jwt/index.html","99e6e9ca6fa79b55c33d7f47c0c17b4a"],["/categories/Vue/el-date-picker/index.html","fe73a476d3ecfb0e0fe94a11630a48fd"],["/categories/Vue/index.html","ef3ad0468ac560a4e4ad310f69baeec8"],["/categories/Vue/工具类/index.html","4134457e47c1bc5916fe42709405830b"],["/categories/index.html","0a2d96e8576482ba46e889b4ed026864"],["/categories/视频流/index.html","bc0fd146a0882d86dc391b05d0ad458a"],["/categories/视频流/nginx-http-flv-module/index.html","812131258b518af5f05eaf1f1d4b4caf"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","d1e10a3abac1104ed96cdaf1b58bc047"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","bab58544ab6094c9428e599f2d88f5dd"],["/games/index.html","7ad1266c727bf8ff98cb1b5446e11ea8"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","81198a176284b72208abd8b5d0f0627d"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","81198a176284b72208abd8b5d0f0627d"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/o_rocket_button_up.png","1d881045380fd517fb2a2f6e12cd1f80"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","43fc063d1dc5b5c2d23528f8fd602c19"],["/jquery_alert/css/alert.css","63fa3f79d01e71f7b22f0f4fae6ccd92"],["/jquery_alert/img/error.png","49dd0813f6bc21695f2362d92f70df2d"],["/jquery_alert/img/right.png","ed0f6cc070d082aea55bec2a593d50a7"],["/jquery_alert/img/warning.png","b2c4c74d4e42259062c416f35ce207c0"],["/jquery_alert/js/alert.js","eca70372d1c90a625f14db15b803777d"],["/jquery_alert/js/alert.min.js","cfd2e95e905c108a83db4063b088cc04"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","b69f51143edfe685bee523a237ec10e6"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","14064c1defac7bd07ac00a10d84c1cdb"],["/js/src/algolia-search.js","f8d5263d11304b7d07d5226c0f7d4106"],["/js/src/bootstrap.js","c6c10de7cf0cc80b84ea7f1b81aec10e"],["/js/src/browserType.js","a384720495034d3fe52c729a8f73b921"],["/js/src/bubble.js","db6789f34221908b5170f67780108708"],["/js/src/canvas-dance-time.js","169cfe39f624df4eb3efe675c87365ae"],["/js/src/clipboard-use.js","127e472ef9fcd0f99e63da0f780ca0f3"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","85daee8a7f76407821167e655be0180c"],["/js/src/exturl.js","55afe2409861190b05b31106924438b9"],["/js/src/hook-duoshuo.js","c8ad86ef36fd0791139488cfe3e19c23"],["/js/src/js.cookie.js","de3cb8ce571eed99b9faa9ca5d80cd09"],["/js/src/linkcard.js","8d1d28178dd7420f60ad15c6accea84a"],["/js/src/motion.js","b9b6d6492b1908ffbc0b024ee7e55b4f"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","2059bb8f1e88d68a99481f7dc4234064"],["/js/src/schemes/pisces.js","4edc299ee8bb79ce06ffba00a40e2c07"],["/js/src/scroll-cookie.js","ec701361c77410a5b95b5453fbf40e06"],["/js/src/scrollspy.js","8c28a75246c76e9ee6a03e3f85c42e91"],["/js/src/snow.js","a07033a0cd3903c7bed78f96079fb540"],["/js/src/utils.js","604ebe782c5c00ac2003731c1d8e194c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3e190493524c80629a0a44d9f79676c0"],["/lib/Han/dist/han.js","ed2c36de04836af6efc101765ee102a1"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","63f570541ae2753545958662e8fc972a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7c0a657a8eaffe9f289b0a92f144db27"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","047b16c4d1f5c5f2999dc92760629bd3"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f1e44df4f987433054d1cef9418f4c92"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3e473824a13b075a54c9f324e6311f12"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c01b7e6f5cbabbb00e81e70b947fc321"],["/lib/fancybox/source/jquery.fancybox.css","9ac28806ac5e7a89c8fe256614047e08"],["/lib/fancybox/source/jquery.fancybox.js","573dbe61cbd91dc01c1944a71f3661bd"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","41335d040a2ba405526195e92dc6b3bf"],["/lib/fastclick/lib/fastclick.js","5f1d4ffea8863db2a391f4409795a736"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","e7e6bd2895964d665278817a88c26da5"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","d02d06ade5217a8d2aa978e0a735dd95"],["/lib/jquery_lazyload/README.html","1f6a138b1c9f70e4dca19955c26b0992"],["/lib/jquery_lazyload/jquery.lazyload.js","f215c529c46d6767ea788a3fc5e23922"],["/lib/jquery_lazyload/jquery.scrollstop.js","651daae61d42761d1adf447e66bb1ff3"],["/lib/needsharebutton/font-embedded.css","79365f674594e2a22ab8d034b5679053"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","58ada989f9c42a63cb0a7bc2818b243c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","47967ad6a136abf7301e0d3a93375848"],["/lib/velocity/velocity.js","6a75e9cb16bbc4c38a11d4c3bb6dfb71"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a1f88517d20b74347bc85187c45cb233"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","6073c3bae265f8865f573a0862bb8e41"],["/links/index.html","a64a88e6b3bee9a6e39cc896ce05bccf"],["/live2d-widget/README.html","791a8c59fac4990017e64cfb5822d10f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","00224575881046f7807ae251f94c983e"],["/live2d-widget/demo/demo1.html","a8e8723a8c776624578fcda3bd99daf5"],["/live2d-widget/demo/demo2.html","9161c9d24f5d730884b10f06f3044c53"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","6e2ba636c1acdd3a67a0d04d6722c136"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","4e0d68878f19f94be80bc0e80a83221e"],["/page/2/index.html","d3f6e76c66a7baf372d0a05582c2b82b"],["/page/3/index.html","5fa25fcf3381b99c327b3fa3c928ecac"],["/page/4/index.html","9e38094877b1c885737e25afd5f8418d"],["/photos/default-skin/default-skin.css","ecbb6be084a7dbab158ec44d60044a61"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","bb8f8d807ff80d477beca632645faf58"],["/photos/ins.css","fb97b424de7602a5a77e1fc39f40de05"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","25b44aeb1e13725979d309d23414388c"],["/posts/19c94341.html","3889a84181d287c0b70a7727d064ea7b"],["/posts/27514.html","1f2f75e6a3d63bc0728ee844ed3dcf8b"],["/posts/2b56997e.html","91c49b190c464b0d3f6a11daf13a9d5e"],["/posts/358f95d9.html","a1930bb2f251e6c839d9fd49f611e2e6"],["/posts/39d47c89.html","7e6d1576ace82dfd46ac188adb7f9916"],["/posts/3e5a3bb6.html","fb485043d75a46f9193a86b1c9c058b8"],["/posts/4394a738.html","f3b288c96de686ff3c4512cc4a391cfd"],["/posts/4598d3ed.html","c1d11a6fdd7eb63837db042153306a0a"],["/posts/495d0b23.html","7e971b9dc1818ad39b7ca13f65a71b9f"],["/posts/5e773fb.html","f06916af8e79eb04e815814356c2c59b"],["/posts/61913369.html","04c43291a45938ac1baa066f1e609ac3"],["/posts/69ab28bb.html","f6ed0d0d01f4da97aacadee579e0dca5"],["/posts/7fbe9500.html","2f19a301e73799cfc9c5d3e29f2918d6"],["/posts/89ea6c8b.html","6742a33eff3cc059a194bd12839bbfca"],["/posts/9b280ea3.html","c43f529023a9ceab246cefab38719ed6"],["/posts/9c9b482b.html","d5554193ae438f271bc72e3d50249327"],["/posts/a63fb3ae.html","59c3009805b76d69ed66b8979e04ac7d"],["/posts/a7df3b40.html","6fba691e961b7d27f92a4be7f8c26a69"],["/posts/ab21860c.html","b1ad3e640b633da97f769f6c7174ad74"],["/posts/b4831a5e.html","0363f8dd49c57091fcea6e17a8a0af21"],["/posts/bf9eba42.html","632e87582f3c0615a7fcc363f7030d68"],["/posts/c1cdcf68.html","785c148c9b1e52d08302515786d54a50"],["/posts/c4782247.html","91b93c19affc72b3c12c665512317319"],["/posts/c7631ec1.html","1cb48242372150608877ea20992304f9"],["/posts/c9b4cff2.html","29e93e7c192aa733b8cbf44179d54014"],["/posts/d7399e80.html","a899812c291ace7eb2c4c04c0b728ea4"],["/posts/dc877e7a.html","50d8448262db6229bf5f2cb4d5a19475"],["/posts/dd9d9f86.html","71912dd36f3db3cb17464f7aafa5d091"],["/posts/dff7e11c.html","87ed019c096b927583064b5d041b6345"],["/posts/e1b9c6c5.html","cfa4089d41d1c6199528cf3f28c8bf9b"],["/posts/f68f129b.html","abc60ee016fe93f108fa38b04cb9ebb3"],["/posts/fc31ea3.html","c748071815025ddf0d84c2049d5044ad"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","030cea215ba3e7cb459aa0d8fc9849e6"],["/tags/AOP/index.html","527f7b3bb4b3adbad382178ed289fafa"],["/tags/Axios/index.html","abf18ca5d3bf8af72a2cc08b181e8d05"],["/tags/BUG/index.html","0de0f0379fcc96c1ef57cc1753d3e6b4"],["/tags/Base64/index.html","d108035ed47eebbbe1b404306aa71325"],["/tags/Coding/index.html","477a34af71f26de39fd1cef102bb31f4"],["/tags/Github/index.html","c7c3fdabc99c5b3ed280583ce4bb5640"],["/tags/Gulp/index.html","99f0660c99d4a0d1b09e46679bdd65fd"],["/tags/Hexo/index.html","3a4fe9d33b2c749dead22d08057c4841"],["/tags/Hexo/page/2/index.html","43f9189d81113cd7a99ec823e64888fe"],["/tags/Java/index.html","25b25b3e01efde3a6a47ca1e4e0a5297"],["/tags/Jwt/index.html","abf3f99dadd0096c55410c35bb8a2588"],["/tags/MD5/index.html","fb87364847d3cb2b3732806a74c6346e"],["/tags/Neat/index.html","5d754be53dd4ae323c0b68c19f993fd7"],["/tags/Next/index.html","53daa77b9ecd9cb3ed64a8d27e2539b2"],["/tags/Nginx/index.html","77779462222a767db77b5fed2729e505"],["/tags/Password/index.html","7124479eac39e8346bf0b7352f1b6fda"],["/tags/Photos/index.html","25ea3610e755d8461d0beaabd009ac93"],["/tags/Rss/index.html","08f05a4a05115f45d37056c3e727990c"],["/tags/SHA-1/index.html","f3d14d53f85f8e1b312a55924750ef0b"],["/tags/Security/index.html","981075d97c08ea60a003c26a275e17a4"],["/tags/SpringBoot/index.html","698e922840276765955dab054a607588"],["/tags/SpringBoot打包/index.html","7d3ce4b7a81d27be43c28a87fafac4d9"],["/tags/TravisCI/index.html","0e58e207cab084f5fc0d359d3effb765"],["/tags/Valine/index.html","e9e0930999810f9105015eaa3addc61b"],["/tags/Vue/index.html","90dc25c5762f227c06d130ec37c569e2"],["/tags/el-date-picker/index.html","cf95a48f5097d83e17f87323d4a793b7"],["/tags/index.html","4fb00d7e1352cce1a265ec67e94a59fe"],["/tags/lazyload/index.html","4d579ee155771d983ea25cdf78a33851"],["/tags/nginx-http-flv-module/index.html","6392e640756c953d1432a79ad9f498ca"],["/tags/代码块/index.html","3dfab94f7385ec8cb4d2a93f192ded17"],["/tags/写作技巧/index.html","e4ba14fb29e9bda35b7d6d65176859f2"],["/tags/图片/index.html","2d3ebb4e3ce964ca76b439c6ead87628"],["/tags/工具类/index.html","9d4da652ed2c659bc8ce2f74e2a9a29d"],["/tags/邮件订阅/index.html","b9219ac704241d9e3947f8be61168216"],["/top/index.html","b3846bf506576fad73d2d8a9ccf2c01c"]];
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
