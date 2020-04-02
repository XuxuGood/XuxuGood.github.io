/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d136de8f8469234782911e1e9e6c7f76"],["/about/index.html","58fe1682740da8d7fde693e863b7585e"],["/about/renxi/default.css","2cceb38a881a47ba955dc17332a2e77c"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","52f1bef19885f2d2f4507f955874d033"],["/archives/2019/11/index.html","3c5aa0e1bddc486ff4acd16cde0cc06c"],["/archives/2019/11/page/2/index.html","5b34a7112d2dc6785dab22ed91a99285"],["/archives/2019/12/index.html","888cb2efdfaf73d5dca80e9bbc434470"],["/archives/2019/index.html","eb14a6931091cecfc1e000b2c8009746"],["/archives/2019/page/2/index.html","e5bc6d7b2e9e84806db5a648d3450df7"],["/archives/2019/page/3/index.html","747d4925f3679adfe314c3e5bbd40bce"],["/archives/2020/01/index.html","2ca01a24f9e97f0c56f76fdf400fb7f9"],["/archives/2020/02/index.html","b20882e9bf5af317339e952b0d57d9d1"],["/archives/2020/03/index.html","8581cb3a5947e35c84efc17ee1f8cc08"],["/archives/2020/04/index.html","1397329064dd3c328c1577d93e5c336a"],["/archives/2020/index.html","2b47fedfc876f5f1adc0046d959e2593"],["/archives/index.html","6c9c981073e27dbb3e9e8b780c501001"],["/archives/page/2/index.html","2b5145cae4922543fe5748cac0f575b9"],["/archives/page/3/index.html","64443cd1de28f2867465a317ad4dea6d"],["/archives/page/4/index.html","c050f059cfba9de75aaa37a49843d5bd"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","c5aee66b363254674cf3cc6ebc8183e5"],["/categories/BUG/index.html","08a4cf3a492654c3aec4eca2ff3d5444"],["/categories/Hexo/Hexo订阅/index.html","d604c83cce7f65b4360be292daf35cb2"],["/categories/Hexo/index.html","7e8a306355eb89bb1a7716e5650523c5"],["/categories/Hexo/page/2/index.html","2328cf879d2994395557fe60ba2e7b2a"],["/categories/Hexo/点击特效/index.html","7a3c4cc3b74980728028964bc46f614a"],["/categories/Hexo/豆瓣/index.html","b44e974551014c679914cd76b19b5817"],["/categories/Java/Base64/index.html","023b1653ba90825cc67c2abfca68b3f0"],["/categories/Java/MD5/index.html","0be9632f41fe856ee2a3684abccaa7ce"],["/categories/Java/SpringBoot/index.html","0dc5da09a6c330ef83a22d142f05f314"],["/categories/Java/index.html","55a3df416de6ec34805d1485a79be739"],["/categories/Nginx/index.html","cf0aab867f1b692a55cd0b7d082ca7c5"],["/categories/Valine/index.html","530a7537eb0fd2c872935df602df7cc1"],["/categories/Vue/Axios/index.html","e2f7a5c0cf1ab320c107124ef22d84de"],["/categories/Vue/Jwt/index.html","5709230a65f3a189520466b2f7a719d0"],["/categories/Vue/el-date-picker/index.html","9a808a410a1f8cfca1bf9f08370b7852"],["/categories/Vue/index.html","ae125f93d8a448b26aa43b6f8fb723b2"],["/categories/Vue/工具类/index.html","2758cf616751cb5c4ccc15e16f0dd0a5"],["/categories/index.html","56c2014d39e152b01fab68865bd2cdae"],["/categories/视频流/index.html","4abda08e2cf4e7cdcc72cf9ee9071ad1"],["/categories/视频流/nginx-http-flv-module/index.html","a1ab3c040ba7c6b8339054658010ec38"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","5017ce6e28f7a83b21f4720771ed3e2e"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","618703c0d5ea226c739d6547badf5436"],["/games/index.html","14fadb05113bcb3a1ab1d55fa1f7b002"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","a4a16d14dd19767a1b38c333c76f339d"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ff1fdaae3a7fc1cecbbcdf062a813f47"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","08062e67f94f443630a6d95a44966931"],["/js/src/algolia-search.js","efc396592eff75f14076138c5a47238d"],["/js/src/bootstrap.js","1cb14dc96da6767f198c4048f021aee9"],["/js/src/browserType.js","cbafc16895e3016ec97e96e5431cf221"],["/js/src/bubble.js","0e21a5680be1cb7a37ab333503270647"],["/js/src/canvas-dance-time.js","284394416d71a8ffafe3dd1999733e92"],["/js/src/clipboard-use.js","173e19671f2d20868fa27d35171b8c4a"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6431d94c3e78a3390a35581e4e3426d0"],["/js/src/exturl.js","d775da06fa2882eb31bf48dd1a13a263"],["/js/src/hook-duoshuo.js","d1afd1235b92fb8f521e879fb541d560"],["/js/src/js.cookie.js","727f18fdadd63fe4762590d43e07a25f"],["/js/src/linkcard.js","e37cfc028d08b5821370441b434c2509"],["/js/src/motion.js","a228cb0ecf4393a99fad44133c9b0c5c"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d10013d751e4b132d65a75883fb5990b"],["/js/src/schemes/pisces.js","69e58e4407d63584eb689d356add5d28"],["/js/src/scroll-cookie.js","b4571658239d98e67f56514c6834e78f"],["/js/src/scrollspy.js","13c10e9f5909c0cd734d93bc942aedcb"],["/js/src/snow.js","8ff4b8537383b14df3fb43811ffed345"],["/js/src/utils.js","8772f86b560af2671474c97e06738254"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2a585e39f1b99a3be12df9ebcda9ffe4"],["/lib/Han/dist/han.js","948283b964beb16ab082a2fd4a4871f0"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","31c27a767fd23033239f821a386a083b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d44f08e81961179daa905ecd48f88155"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a7f557d1ea6cfbffabe3e3d6e762b2f8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","60d95bf1d739e63d124ef8f8b22b50cf"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","51d18fd13786831471c106aceaa0665c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6fae8c5c570f030d1fca305d2b4310ef"],["/lib/fancybox/source/jquery.fancybox.css","830465791b5a79f65160e2acc8ef79b2"],["/lib/fancybox/source/jquery.fancybox.js","21fe7b815782ee1be25826946db8b9ad"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","1a0d8e71d51934e311875c09ada7c968"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","189e4aed1f5babe3a258c62a15069f9f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","2685ae373935e4ac72f8802fe46c74ae"],["/lib/jquery_lazyload/jquery.scrollstop.js","3016b74196bd983343baebeab7fab19f"],["/lib/needsharebutton/font-embedded.css","5925023222dfd674dfda95290dbfbd37"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","0b83dd295897b7a43ebd20ad4bb92d5f"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d6ce2d8ef936bb8133ddb4784a8c0c63"],["/lib/velocity/velocity.js","a2afe39f5d55a155068f1b79e9bd4455"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5591080dd1527e111ddee17dc50588d6"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","ae0d622f812cdc274c173dc7d56b8713"],["/links/index.html","49b46f68c852ed5742c13f1383d930a1"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","b07adbff4e3793713e9b4c5c72773a9d"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","d072d70d930aced5111befb6159e44c2"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","673e2a2db9e963f07d284810c6f4c730"],["/page/2/index.html","4070ba2c6dd7ba31e87a7ff7cd0d5b7e"],["/page/3/index.html","46bcbb68e1bea6e3300b0b83d086fa10"],["/page/4/index.html","cdc9d5297375c143e5ca61876238173a"],["/photos/default-skin/default-skin.css","d26bf26afaf784451fb64f77b55a8e43"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","21a9e1858fbbac2db1168677fd82fefd"],["/photos/ins.css","d58c929ca6ab5c9d39cb829c5035acf0"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","b80e2a74ffddddadd2851f033bbe742c"],["/posts/19c94341.html","5af0711d08e0e60fbf0048f6832c9a94"],["/posts/27514.html","8ee53e06a3b87700e259f9b79c9a681b"],["/posts/2b56997e.html","a06624420cd4c04d67a6a28ae9238412"],["/posts/358f95d9.html","ff2f5bc7e0073c9133df38ec9f18b644"],["/posts/39d47c89.html","a2e818053419fa56436724638bf8d7d5"],["/posts/3e5a3bb6.html","53ab61e165af424c54696c68c28da05f"],["/posts/4394a738.html","669c0ec865ac0c592eb2a1f0ddda150c"],["/posts/4598d3ed.html","c3420be3d8ec8999862e25d3b66055a1"],["/posts/495d0b23.html","288fcb7698861a9b92718d0c705e905c"],["/posts/5e773fb.html","daf72061dd7b2262bdf53985bf067944"],["/posts/61913369.html","382cea51a14c9343cce6983f57989ee6"],["/posts/69ab28bb.html","de466154de0cd428d20f29f39a3b9c60"],["/posts/7fbe9500.html","f4d10aaa4a15fa6d3f0e14c1fb594b75"],["/posts/89ea6c8b.html","98d53ec6b8902e60d6188509bc41b33b"],["/posts/9c9b482b.html","1135128504907cb94f645fcc7e222bf3"],["/posts/a63fb3ae.html","da105a16978264ec09f0251c795a7abe"],["/posts/a7df3b40.html","0c285a21af77f1083b1b79464fab9867"],["/posts/ab21860c.html","c8c68cdd6394033bcb43f9a46a5b830c"],["/posts/b4831a5e.html","170672f18538f42cc22e9e77e19fe7f7"],["/posts/bf9eba42.html","7181de8721ac89369cdd45f5f1b74259"],["/posts/c1cdcf68.html","6ca28aafc7730b17e94a7b3555a72908"],["/posts/c4782247.html","e0141c9b76f5a31b3ea79ffadc28ca97"],["/posts/c7631ec1.html","33cc8d4dbd8f756e8fba50272309befa"],["/posts/c9b4cff2.html","a6b7e6f9142730adbcd045eff0cc11d1"],["/posts/d7399e80.html","da06ef57953955367032bf0355136457"],["/posts/dc877e7a.html","b982ef8a0bba262cafdf24cf077f8791"],["/posts/dd9d9f86.html","015eac5b341a4a071c76355a9b414410"],["/posts/dff7e11c.html","51b9b7575e93afb837fb5f7fb8513169"],["/posts/e1b9c6c5.html","78743dc7e053a465461444115b9fff54"],["/posts/f68f129b.html","cca1089c8a26d75c83b88662c5b1cfa0"],["/posts/fc31ea3.html","738337bdb0f34f036062fbbfa70cacd9"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","f3bdd9da87d19748a09921997f566226"],["/tags/AOP/index.html","d2ac59c80fe72707c3d65b6ebe497cdc"],["/tags/Axios/index.html","270630c69e89d2420bedc58972c90876"],["/tags/BUG/index.html","05e55c66070d26a6ac11e2991a219e3e"],["/tags/Base64/index.html","e587f73752665b775d7542241aadd243"],["/tags/Coding/index.html","f4d6587da76e6f3d9e6726d1d08c1c8b"],["/tags/Github/index.html","44b7bdc70585ef14f32f152f32dbb19a"],["/tags/Gulp/index.html","f415f36b145ae934699a7b242e9f6a5f"],["/tags/Hexo/index.html","4f97136b4e95393edebac683e993680d"],["/tags/Hexo/page/2/index.html","5272143d190e33f8b861f594546f980b"],["/tags/Java/index.html","f039d2ed8e5ada6d5de331ea114d665b"],["/tags/Jwt/index.html","ef2a40a955ee5364e9d9394aecb285ff"],["/tags/MD5/index.html","2a604b543ffc42a0bc16954cbd424e1c"],["/tags/Neat/index.html","20929f4ffc16a2e951862fd3359d5076"],["/tags/Next/index.html","eec0a6ed67981b3df2c3681eb9ceaf6d"],["/tags/Nginx/index.html","42a6c0eeb9e4f09aaf51f49611a4e488"],["/tags/Password/index.html","72589ed84fce738a8256130cabf58bd5"],["/tags/Photos/index.html","3c4445b306fc1d9b307d8de2f9396ffa"],["/tags/Rss/index.html","363f6e8b2a1db5d022d3978ef7e21a19"],["/tags/SHA-1/index.html","bbbe9e2759f38d90d9d017dda8fb7dcb"],["/tags/Security/index.html","da4cc5af262170c231b44dc5b32aabaf"],["/tags/SpringBoot/index.html","3af2402e4b1fbcdae1f7c049a03d1bf9"],["/tags/SpringBoot打包/index.html","60da865b59a440e6d60743674fb72c6f"],["/tags/TravisCI/index.html","d465bef9fb1d58b52451b7dc45dbce1c"],["/tags/Valine/index.html","34b6e50888414419f80070d1eb0dc385"],["/tags/Vue/index.html","81f1e8c667276ad58a38da21a365235a"],["/tags/el-date-picker/index.html","8a153a225a392129d90825a9a18f9245"],["/tags/index.html","d16110a802a6b002a3624bf6b0b9ee63"],["/tags/lazyload/index.html","1971e0a2043685687df25a1e70276780"],["/tags/nginx-http-flv-module/index.html","a4cb3069e8e4b2e93cf0d77a042e6d29"],["/tags/代码块/index.html","6548649cc5d2c607733d47ec3dee92c6"],["/tags/图片/index.html","355c42a77ab06c586c269087102a8c8f"],["/tags/工具类/index.html","82c04feee254d39f8e346bc994fc30ae"],["/tags/邮件订阅/index.html","b9f0f2493d932a92b386d6c441211d51"],["/top/index.html","d2fab913a453f5894532d4b309988f39"]];
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
