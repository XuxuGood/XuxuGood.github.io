/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","472ddd277d84f578b84f4fbccb4d3093"],["/about/index.html","c7bcbf34588e5e0bf572416ac52ba6e7"],["/about/renxi/default.css","cfc4e7b10ed66ef79ccf0df06105dc6d"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","1fc27dd127147fca1457d59a02d13a79"],["/archives/2019/11/index.html","1f7f20ec3b138709a3ff6a413d94deff"],["/archives/2019/11/page/2/index.html","48caf400fde2e5db54fc8cc6963ffd32"],["/archives/2019/12/index.html","3f287f5c6b011671d823728b122ffcb6"],["/archives/2019/index.html","d26a7729f5c6dcf09d51306e013e3533"],["/archives/2019/page/2/index.html","d2bc658d560f5451e879971a3f954415"],["/archives/2019/page/3/index.html","645968f61ca00bc351b5328200fdab9c"],["/archives/2020/01/index.html","68ee0d5ab592d6f2a672f96daed1f607"],["/archives/2020/02/index.html","2f790cb94f2c289637b0398ab5b40cdb"],["/archives/2020/03/index.html","b62b0e81b5de6b7d43bfaf70e3dec515"],["/archives/2020/04/index.html","1766bdf917168dc6aaed2f3fb1fa2c44"],["/archives/2020/index.html","94764923a867f3c5ffe9d31173f98952"],["/archives/index.html","6909480688295f1e3e3e8bea3cb9f330"],["/archives/page/2/index.html","ba423f1a56bd55a93d938eec2d141b16"],["/archives/page/3/index.html","b10593b3c4e421c0f6fe82f2cec20404"],["/archives/page/4/index.html","413bd11110a840e50a807cc4f6b08979"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","47f8576aace8e0510b53ca844fb89b21"],["/categories/BUG/index.html","6b1bda0e03f20caaf0854f48562b7583"],["/categories/Hexo/Hexo订阅/index.html","bda89091b546f3a817c11748d837ee60"],["/categories/Hexo/index.html","6a2e4d75bc1322e72d496e5d099d3903"],["/categories/Hexo/page/2/index.html","398462312f092ed8f265021e06bbd360"],["/categories/Hexo/写作技巧/index.html","92694496f51d93bee1fa9caf11cf7b45"],["/categories/Hexo/点击特效/index.html","b4d35729f23ba8d00d98b0ca6fb3b677"],["/categories/Hexo/豆瓣/index.html","b9fef4cc90cc4db6efec8c4dc439d97c"],["/categories/Java/Base64/index.html","4288c5eb9366acb053b0891f7e3fa06a"],["/categories/Java/MD5/index.html","62b551d06bffe735d9293f3811752847"],["/categories/Java/SpringBoot/index.html","9c666ac6e7f33adc85eea9ef32bb47b1"],["/categories/Java/index.html","ac1b2b71b9b5356a36ba6cc90e3bcc15"],["/categories/Nginx/index.html","137161aad6a4c2b1537fd8f837ef3aa2"],["/categories/Valine/index.html","be30bf72465f90add7781379cb6d4102"],["/categories/Vue/Axios/index.html","2fe898eaea6aeca4c60deaa3cfccda3c"],["/categories/Vue/Jwt/index.html","a1a94d3b6010c221311f980eed19f1ba"],["/categories/Vue/el-date-picker/index.html","a516a9d5a81a0e3d2f6763281aa623ec"],["/categories/Vue/index.html","6354535941ae037759670b07fb99b8d7"],["/categories/Vue/工具类/index.html","84e41c7ce968655285511e34098b24b8"],["/categories/index.html","16f43e74e22cbe72e21ec29933f62d06"],["/categories/视频流/index.html","dc1406ab846be848021b7ef683a7e397"],["/categories/视频流/nginx-http-flv-module/index.html","9797410cadf627c23b2840109bf56b63"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","acfa6e507eba41b747ee63ac0271f541"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d0cfdbfeec6ccadaa061bd73bc7890e4"],["/games/index.html","d04f5d735d422e315a732a6b6de853b1"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","81198a176284b72208abd8b5d0f0627d"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","81198a176284b72208abd8b5d0f0627d"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/o_rocket_button_up.png","1d881045380fd517fb2a2f6e12cd1f80"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","21b529c43b8cb724af7f69f35002a449"],["/jquery_alert/css/alert.css","11f190a40551911d21a1a8b5d99888dd"],["/jquery_alert/img/error.png","49dd0813f6bc21695f2362d92f70df2d"],["/jquery_alert/img/right.png","ed0f6cc070d082aea55bec2a593d50a7"],["/jquery_alert/img/warning.png","b2c4c74d4e42259062c416f35ce207c0"],["/jquery_alert/js/alert.js","ab27717f9da5210f7b882ab6b0fdaa21"],["/jquery_alert/js/alert.min.js","cfd2e95e905c108a83db4063b088cc04"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","0f061daade58bc9c2cd9b682b3aae8a5"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","3e77e8356f108c7c8e9959f318bb7226"],["/js/src/algolia-search.js","a866faa26f4712dbe49f4da2e1a70956"],["/js/src/bootstrap.js","5b0e4831216688a94e94969833b4b49b"],["/js/src/browserType.js","bb946fe3a003b284eab1ff38624fe027"],["/js/src/bubble.js","18eca75bc7bf7905b7dc88bb8043508c"],["/js/src/canvas-dance-time.js","ad5c9516d851a8ebfcf682b264fa66e2"],["/js/src/clipboard-use.js","3de0f07f7b60be7885df3aabe3f2f4be"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","cb7c8a5aa36b8c5c0c74039c77b91c1d"],["/js/src/exturl.js","3de3c403032e9badd0ec56a71655a95b"],["/js/src/hook-duoshuo.js","80a78280f259c30e5832452f8fd1c30e"],["/js/src/js.cookie.js","a101344222ccd841cfbefeb80d62c8fb"],["/js/src/linkcard.js","2084f8a6180fd8b9d64c25de3e9ce67a"],["/js/src/motion.js","081023221ad049632a7104f050e32973"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","a22e783ac9d3ac548c39ea1ab0666f47"],["/js/src/schemes/pisces.js","0d293a1954da5c906c556310259d1c28"],["/js/src/scroll-cookie.js","2efda3e8f1362bfdf1bd62960a11c88b"],["/js/src/scrollspy.js","d7910556c8749bd5df398c0187c3edf0"],["/js/src/snow.js","7aca89864e67f68e0e8a05a257951c62"],["/js/src/utils.js","e93fd7bc0463b4b21327414a23fc1a41"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2e9942d32735b733f452390a4f5b7b06"],["/lib/Han/dist/han.js","751d75f43d0913227e66899b0e9ce323"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","859629b246eecec7129698a274d53cfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d045a3029932d2c1d57b640c65c5f022"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","67b1d6c1ac5584acaf80f9e1ca6000f2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c80b94e7b2155aac56e51b167b6d8b1c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","0dd6e006636d79b686d2e97a85667a3f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","224e015cea756735956fb0c1089471e2"],["/lib/fancybox/source/jquery.fancybox.css","15e3b9b0281443d91ec6915f766c919f"],["/lib/fancybox/source/jquery.fancybox.js","041e14dc7b2c9296c114ea2d136365c1"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","38f4cbfa872dbc836618a6e39122faf3"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","6e94bcf115ea90a5b615bc745a2999de"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","ae2594f62479eac6468f08e89743afc1"],["/lib/jquery_lazyload/jquery.scrollstop.js","214781f0fb5fb5497e2cdd603d297fe6"],["/lib/needsharebutton/font-embedded.css","4709b97c2e8ff7e8ed85476084fed69e"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","3ba6b5fd4ec40258757420ed596d846b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","37a224d2c02aa86be629d7dae5ee31e0"],["/lib/velocity/velocity.js","b21211ab72ad14a3b10013b81ae8dce2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1d323564f6aac856f734edddde821b20"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","147041a2e436b67e68c909fa183befa9"],["/links/index.html","0788fd8bf73f938c3af2d525713a58ca"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","6f98e23e81203039a92a1744117d7a37"],["/live2d-widget/demo/demo1.html","a8e8723a8c776624578fcda3bd99daf5"],["/live2d-widget/demo/demo2.html","9161c9d24f5d730884b10f06f3044c53"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","206098afd3e8a00ea7b5234271e9b8a5"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","184e0a576ad91995eaafd9e3af95eed8"],["/page/2/index.html","a524890743df76a251b0f325257651f5"],["/page/3/index.html","ec3c90f5e6ec3026da3b7fa32828e57e"],["/page/4/index.html","9ec93f569c177cd62fdae79ace226e43"],["/photos/default-skin/default-skin.css","0f9eea3b27b2fbd94e1b950d141b6f3f"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","4e3d9917f8d4c04bcd72d58e57c4d495"],["/photos/ins.css","ac043488b3d1c04a0a2b8b5ad65ffa92"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","d9c9a32f9fdd4f83495c942a2abbcd4a"],["/posts/19c94341.html","bba4c715ee2cf26195cb77488b55c4ae"],["/posts/27514.html","3915bead67af026af182c2ca536b32dc"],["/posts/2b56997e.html","1e43c39a87810910466b997fbfa519a4"],["/posts/358f95d9.html","4797fc58b9e05929fa93c6bb1a873e46"],["/posts/39d47c89.html","d7de57b686c60339267d42b544172cf7"],["/posts/3e5a3bb6.html","611890bddad795834a27405ba8c57174"],["/posts/4394a738.html","c9b15514f4f27887e60b247b6dd1357b"],["/posts/4598d3ed.html","6a3e39ccee467205e60a411e9f3bf305"],["/posts/495d0b23.html","fe8ebf88adc2973f71b669714f1e8cda"],["/posts/5e773fb.html","eeda78196b49325f43fbddbaf2f10bbe"],["/posts/61913369.html","5f2406984d3682ee41e85157551e7364"],["/posts/69ab28bb.html","ac86099186f53a1e31f786dbb394dbc2"],["/posts/7fbe9500.html","a490ef76a7a7e67197e90b10d1393d31"],["/posts/89ea6c8b.html","f9b1f20a9d50ce6386892caef401fde0"],["/posts/9c9b482b.html","f4c1486db0554ae792f17e6a29dc3c3a"],["/posts/a63fb3ae.html","14382a23f8cdb3486b63d0a152007d8d"],["/posts/a7df3b40.html","5cd1bfeeb55b4e2f87806417e6d7ee36"],["/posts/ab21860c.html","ed7a135436165c2f49e802d60f563f99"],["/posts/b4831a5e.html","b4755e3e9334025854f5e9f8d6abb86e"],["/posts/bf9eba42.html","8e5695f92a1656ebd444f2cc191ba21f"],["/posts/c1cdcf68.html","fd7c39b33ef67a7c96ac6d8266a32810"],["/posts/c4782247.html","137e181acd0ed9d794ecd41d5a9ba2d9"],["/posts/c7631ec1.html","1d5ea0d68fd0be80c52afa45d99d2bb2"],["/posts/c9b4cff2.html","9b9763b6ab194064b3a19cadac85e0c8"],["/posts/d7399e80.html","e347019dd194abe9d3d6dc001964d88a"],["/posts/dc877e7a.html","b69cb0120ec95265f3a4c5d6176bcfae"],["/posts/dd9d9f86.html","4fbfe9b6a3db4ffe913756a371d67f70"],["/posts/dff7e11c.html","5d72a5a1f79697d5b3b0b943a03b1ad5"],["/posts/e1b9c6c5.html","affcdafb987c13603f78946d70243223"],["/posts/f68f129b.html","c1434d120ea72f32f07ef119ee46af7e"],["/posts/fc31ea3.html","b8dc93981932b59dc33453f83108c4ed"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","65025e50fd5c812c18b28f5fc0b453e7"],["/tags/AOP/index.html","851d8ff2fdc9e5a6a9d28f9d438f0ed2"],["/tags/Axios/index.html","a3a978ec5abe9bb35deacf1225bb76d4"],["/tags/BUG/index.html","3687122d966d3acec367062988513f31"],["/tags/Base64/index.html","5209a2e2c879220ad4a9c8d73b4deb07"],["/tags/Coding/index.html","3a8e9d0337f734dfd40afc2bf335ebf3"],["/tags/Github/index.html","22d3d76779aea6a967e6b05b658a93c7"],["/tags/Gulp/index.html","6581ac66db0905bc7b127073837cd00a"],["/tags/Hexo/index.html","570e348659ca2ff96cb0f1459a983385"],["/tags/Hexo/page/2/index.html","af136ddbfa22ef6e72847fc3e4f914f7"],["/tags/Java/index.html","f5b72ed8fe047a96966473ec93456cbf"],["/tags/Jwt/index.html","da05750ce21d45da95743bb234dec0c3"],["/tags/MD5/index.html","d719bffe193e3c995e4ef166ee0e4705"],["/tags/Neat/index.html","282d3f091c066338b7466d993ed50e98"],["/tags/Next/index.html","121d3f00dabe70c93655c6ad3b2a5bec"],["/tags/Nginx/index.html","c11e96780918589d208ca6b7ecc43ba0"],["/tags/Password/index.html","d7063b57ebffa204a7a4a734d306c233"],["/tags/Photos/index.html","fd8bdd5c3b1953a9d41acba0146cb5e8"],["/tags/Rss/index.html","1e694904248d6db543dc98fc503fd67f"],["/tags/SHA-1/index.html","e6b8ca7deac0a4fa6419f823be7bba60"],["/tags/Security/index.html","db5780f10f25e0e0108bcc8525ea9a44"],["/tags/SpringBoot/index.html","76b1dd4514a40a3a59b0904c4386b2ad"],["/tags/SpringBoot打包/index.html","8ff6976a700d958dfa34c8ff0431f529"],["/tags/TravisCI/index.html","f451b7f6ac062b3683d384801534ffa8"],["/tags/Valine/index.html","68ebb2a8931b77613b7f757350757074"],["/tags/Vue/index.html","718bcbcebf28ca5402bcccef1a1b9aea"],["/tags/el-date-picker/index.html","41b18f8dec21456d761fd5ad20792b0d"],["/tags/index.html","1dc769e9a2cd7dd14b492ab0ece1c392"],["/tags/lazyload/index.html","d0361c738a6315fdc2a79a0417029dc7"],["/tags/nginx-http-flv-module/index.html","2f359b9d4269f8abb2d6281e4ae147b6"],["/tags/代码块/index.html","e8c3e2446f2a8b7b27a95b16ffd0855e"],["/tags/写作技巧/index.html","e00dbc097e6bcb195223037324e00977"],["/tags/图片/index.html","9a3d571f53ebbc124bb03716f34bbc49"],["/tags/工具类/index.html","b6f7805cbb725f244cba7b90aeb7cc3e"],["/tags/邮件订阅/index.html","8dc2209117a57a4436ec07f834f14e26"],["/top/index.html","7665513053e3d7bd0136046127a7c55b"]];
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
