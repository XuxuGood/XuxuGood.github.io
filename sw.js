/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cad01176103db7eadbf271700dd510d6"],["/about/index.html","3cd4223586e6b878226e1686bb46bd6a"],["/about/renxi/default.css","d477388da8e224c49f358c6137c039f1"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","6b9092c04c198f717a5080b2fa7cc191"],["/archives/2019/11/index.html","d03dcfd7c0bf103f5ec8954cf0cf9ce0"],["/archives/2019/11/page/2/index.html","bfd72b9734f979c6f7d346f4e0a84917"],["/archives/2019/12/index.html","8fd4d74b6e80e9d0e10ed19660fdac9f"],["/archives/2019/index.html","009733b4fafa42dcf3b27edeacdc8dc2"],["/archives/2019/page/2/index.html","c093ef5c2b71401cff32446450bfd372"],["/archives/2019/page/3/index.html","8e7b657b9e3326fd2dbf811da285768e"],["/archives/2020/01/index.html","28e14df7cdd0fbd7ea130bfe23e6e5ad"],["/archives/2020/02/index.html","9060af66e465383543d9c8c5d6911a4c"],["/archives/2020/03/index.html","b91662e907b066c1a7c3f688d2069bca"],["/archives/2020/04/index.html","e13f167bb5ea39560de3b1ff2f42ecd5"],["/archives/2020/index.html","050590fec8bbfcf69dbfe4f65de675fc"],["/archives/index.html","f67766d9baf16cb27487fa85770a6eea"],["/archives/page/2/index.html","e72c96164189683d94b50b9d4abd84b6"],["/archives/page/3/index.html","f28e7969283fad23b4e4f979f67dac51"],["/archives/page/4/index.html","d2930495d7cf29d84688bbba0a6f3462"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","9c4344d20b0308fa61f2ad199f1fbe49"],["/categories/BUG/index.html","81c978f27cabf2b5d79479829501162c"],["/categories/Hexo/Hexo订阅/index.html","842941bec7b5d7616126fb6d44e0ed8b"],["/categories/Hexo/index.html","c0e13a8a1d839beee4be4ab166c88de4"],["/categories/Hexo/page/2/index.html","4fd2be556c7566f436f1293cc0a90600"],["/categories/Hexo/点击特效/index.html","981ffcb5512e51ced3b9c6724bd031c2"],["/categories/Hexo/豆瓣/index.html","167c6a0717a49ca4f11afaab24cdea20"],["/categories/Java/Base64/index.html","ed1b2ae3465b6d20449ced7b4ee70548"],["/categories/Java/MD5/index.html","f8391277f9b4a8c7deacae8a530af517"],["/categories/Java/SpringBoot/index.html","53bfc9b0d2c4cb0fab8a8d3899564ce7"],["/categories/Java/index.html","1d973ea21a0807ea4b9f569049ae1029"],["/categories/Nginx/index.html","c671a27364b4294901371d70c2108ee0"],["/categories/Valine/index.html","9aa8a164438649214a49175ac0998069"],["/categories/Vue/Axios/index.html","3f18692be186e129c0a1b5170a90451f"],["/categories/Vue/Jwt/index.html","b5d19a7c906d146319d0846d42736113"],["/categories/Vue/el-date-picker/index.html","bc8450620baad38911ae68d38a373c68"],["/categories/Vue/index.html","4c6f851b4fe78384181d1b9acab2b06f"],["/categories/Vue/工具类/index.html","74d27dd0a8df2b6990c30d054fbbbe60"],["/categories/index.html","d63786609fa2a57d5bbdad43945cbfd2"],["/categories/视频流/index.html","2eda1b402ff616874e498ef7e93fde97"],["/categories/视频流/nginx-http-flv-module/index.html","d6bc12154ecc794f08f17ee6f03236af"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","dea0a42a377468e041d8b32556f0dbbd"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","451b7c69c8e90358d42fe2c13e265ec7"],["/games/index.html","e5c75e61a723daa7c1c32cbaebcf2bb0"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","9b5c9dfc6ee858cc297980e757e8f3f9"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","83641bdc360af21bdb4bb1adbd12676f"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","227300a84c0ae191a93948ef5cc56ec7"],["/js/src/algolia-search.js","7f4eedd9a0d9e6325d175ece11ed4474"],["/js/src/bootstrap.js","a46582d339d37831cad7c8bd477192cf"],["/js/src/browserType.js","c8ce8d1185ec7790e1e428acfd5760db"],["/js/src/bubble.js","d732dd98ed8c5487fc1e3088cb6c9ab3"],["/js/src/canvas-dance-time.js","e254eb5232a9a5d9325d4d992d3a7f0f"],["/js/src/clipboard-use.js","1672a0ca32778a6fe51f6f02cdb2bcb2"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","339763f408ba8a109c45bb1843c09f8b"],["/js/src/exturl.js","daad17c3cecea35c804770792a7ca4dd"],["/js/src/hook-duoshuo.js","7861dc658f44c6d010d4a38898aff866"],["/js/src/js.cookie.js","e008d60d91c7f8481b2b39e258ba645b"],["/js/src/linkcard.js","1e01726f1e6a395944bba1c1d2cbc51f"],["/js/src/motion.js","2f1fe018b4d7014961ade09327612607"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ab9de9cc4f785a33aee00c989c058fcf"],["/js/src/schemes/pisces.js","6120a4ee033bec261b71763d13899b99"],["/js/src/scroll-cookie.js","3b23c6bba5a631a08e946b7d73f75586"],["/js/src/scrollspy.js","d0746d4cbb98b4aa50a99764c9db6803"],["/js/src/snow.js","1f84e951c7234ccc8619eac940a00ed6"],["/js/src/utils.js","0bdb2ac5361887c097e110b74a10dd1c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","dd442ed757f3e02a96d59ed2e2df4f90"],["/lib/Han/dist/han.js","29aae402d2494bd328d176dabdbf18f8"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","f67b2d81c7689e5e5b399cb695cab3fd"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e36d78828639e6544aac731e6b1ab153"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","97731bca6cc3b29bdc0d94e59e86510e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","de7cb84f57bb95a7add595e6427d98d2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","012f8dd5dcfa473a89896b1bd63a8aa0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","426a4cd97f1164ce5dd5d1d86b78d2b5"],["/lib/fancybox/source/jquery.fancybox.css","fbe8da88d55a2894e9c16f7d129b126a"],["/lib/fancybox/source/jquery.fancybox.js","b470dc16c832630b342e89f0e61c5161"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","a97e2fcc4a37b0883e601d6c5274312e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f3483487f6dd89e462a0e004872c8ee7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","21f54029c97124e4900d748cdd614097"],["/lib/jquery_lazyload/jquery.scrollstop.js","995623e54ec4a4f1d026b288bd87edc3"],["/lib/needsharebutton/font-embedded.css","052d46e03d9d897553513286f0082916"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","968d8c2b0cc46b2d1a90b54baad24e00"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","52b5249520ada9e798701f8fc260ef94"],["/lib/velocity/velocity.js","469f789af18039a3fabd987e523f0400"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","20d274b5e6536d2026b54b432a740424"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","a1aebdaf950d5d32b564d6559c7276de"],["/links/index.html","a639af36835b360754c7873065c5d9b6"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","0a914084b032da8288cd5cdef9a002ca"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","a1e0c3d543a690ca1a7572d210bde409"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","a637d643db111e9c99fbc62f947c0899"],["/page/2/index.html","1a83e714dc23a138eb2e7b2a9edb6379"],["/page/3/index.html","3d9f5eef0f731db001ee51fb892cede6"],["/page/4/index.html","0a8fef785bd6e0f0b1828201b006cc06"],["/photos/default-skin/default-skin.css","3c4131ec8f9e923c6fead98d79014ac0"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","b4140841fe91d64c9f21945bb1f6588b"],["/photos/ins.css","4844ec8cd4fc054807ec51b413a51d01"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","97db807d3270184dd39cd76fb3f95c39"],["/posts/19c94341.html","632552c8c0d2f1eb53de4a39e2136f11"],["/posts/27514.html","9b528c2658b0af0306e098d770d2a3a5"],["/posts/2b56997e.html","790433b818cd4cd1e72aa4a4db8ae724"],["/posts/358f95d9.html","59e0b72af344588b91832024adf3f6b5"],["/posts/39d47c89.html","004bbb38b602b2841ad806cb77b6bbe7"],["/posts/3e5a3bb6.html","a28791da5220a2b7e59fd184da8a828e"],["/posts/4394a738.html","ff10c6ed063e070d67eac3006eba1e0a"],["/posts/4598d3ed.html","938dac2fefe58a78f4129e4b5edd8fea"],["/posts/495d0b23.html","832fe234ab452e205fba6e25fc754bc5"],["/posts/5e773fb.html","73c8c9126a52470a139df2d32ac62ed0"],["/posts/61913369.html","d8d3f382daa55f73cb1e1e5b007dbaed"],["/posts/69ab28bb.html","d84b1a9e74d9c59d8be904e184e03450"],["/posts/7fbe9500.html","3d747101e87f1ed3b235286e572cb5d8"],["/posts/89ea6c8b.html","61c7dfa656f2027c3b1cc9cb7c929239"],["/posts/9c9b482b.html","425dcb15909b45dd1f6b6f8c452877b5"],["/posts/a63fb3ae.html","8831b82e417d94d2b45dbc585c885cd8"],["/posts/a7df3b40.html","acf3016ab528957ea6739313f612c8f7"],["/posts/ab21860c.html","712b4e3e7df5fed3470f7b7ebb3e6ef0"],["/posts/b4831a5e.html","729d101ecc4d2edf2bbd5c083df15a1a"],["/posts/bf9eba42.html","ce840b1d618435af45d518cb234e5444"],["/posts/c1cdcf68.html","b9ae501c8d4622e0b770e6397edac3dc"],["/posts/c4782247.html","a4a525d9aa636b4b6ca8cb83b55d646f"],["/posts/c7631ec1.html","c860b06eea446874776aca34fdb735f0"],["/posts/c9b4cff2.html","2dac5c90fa88a0e66ae1a0250c262157"],["/posts/d7399e80.html","c1959b7ca582f792f5ecaf814a9dc3f7"],["/posts/dc877e7a.html","b4b90d6253de16675d4d6f3456ca0614"],["/posts/dd9d9f86.html","04fba201e9e3f22916ba8302306af44b"],["/posts/dff7e11c.html","24f054021c1baf6c62a1898bc7fd01b8"],["/posts/e1b9c6c5.html","856ed8409b0e9a441dc1b5ee86dcf038"],["/posts/f68f129b.html","36f81b83aede0671063ca60c19560a8a"],["/posts/fc31ea3.html","617e119808bbc2b952b733eda9a4dc12"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","7eab6222976474d11638e7c4365250cb"],["/tags/AOP/index.html","0277251c8e57e6dd7f8083e96c8244f7"],["/tags/Axios/index.html","ec3f66d0fd52e9e870dcf0189b89a92e"],["/tags/BUG/index.html","cf7ffcab8a95c167a88599158fa58847"],["/tags/Base64/index.html","7a3493148509b3d782b56d896fea3ff4"],["/tags/Coding/index.html","63297f27b135a824d7cc757b80232c2b"],["/tags/Github/index.html","443921d4ff0eeb24df66ea4594150da2"],["/tags/Gulp/index.html","9ae06f4b71ef9c52a3c416ec3c7fa482"],["/tags/Hexo/index.html","51d7f30ca7ee4d0579ecb938e973546a"],["/tags/Hexo/page/2/index.html","858dacff5328e12e4cc294a574439d28"],["/tags/Java/index.html","63a0706bbedfb9fa20a8788f65fe063c"],["/tags/Jwt/index.html","80f8847d921cd46e3278cf9fda9add7c"],["/tags/MD5/index.html","5bf629897234845737daa48c74c1299f"],["/tags/Neat/index.html","07d6a53fc04bd82058a1431d5ff2ceff"],["/tags/Next/index.html","8aa412f5f14da4cd1e63310a90d8f7ff"],["/tags/Nginx/index.html","d71a02444b3d98e3c548ed2311872e32"],["/tags/Password/index.html","716fa512404993ad10d65f41808efa8f"],["/tags/Photos/index.html","16bc7629519899b78fa2e3534fd49568"],["/tags/Rss/index.html","477d7e12347a266d9c3bc45c31df2b01"],["/tags/SHA-1/index.html","b85257d465730478af493e30b48ab832"],["/tags/Security/index.html","a6378dce94675f0414468692c7b6cd8c"],["/tags/SpringBoot/index.html","de7bb9bc0de5e06f03c7b41d2fc96c24"],["/tags/SpringBoot打包/index.html","6cdac7a481ec75fff55f3e3d7a104218"],["/tags/TravisCI/index.html","e2b9a9e3671a3880473d77fe4fa622c1"],["/tags/Valine/index.html","e541650fac1932d4474f6bc76f837c5f"],["/tags/Vue/index.html","8f88fc4d0fe0ef4227c1696bbbe1927b"],["/tags/el-date-picker/index.html","7670bb807c6001952304e9b23e875f89"],["/tags/index.html","f51808cab034a74c54e3ea7a838a322e"],["/tags/lazyload/index.html","abe69cdcf033700064d37cc8da93b16b"],["/tags/nginx-http-flv-module/index.html","5063074c0e204a255e0305f5f6706c6e"],["/tags/代码块/index.html","86d1e6cd3a2cc645bd7e2a51e7d8df55"],["/tags/图片/index.html","87295c22dda8e8d5902e91b573d77005"],["/tags/工具类/index.html","ca6afe9cba9213a8414e343f52547755"],["/tags/视频流/index.html","999aed93100551f750fc7ae87640dc7b"],["/tags/邮件订阅/index.html","6b628f86baad530dc314be5d37d0c402"],["/top/index.html","e79aba5eda8e50ad2cad7a2219aeb3aa"]];
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
