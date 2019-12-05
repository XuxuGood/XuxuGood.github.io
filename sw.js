/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","325286a1f0c0083a0a982e43b1581dba"],["/about/index.html","5713fd80fb4843f69ed8c3f67fc1e285"],["/about/renxi/default.css","2b333cdc0b3692c8fbffe4119bc0cef7"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","1a386b8aa460f3bfb3e64fe7d99d4778"],["/archives/2019/11/index.html","38297dd8975b001208b0e459193dc8c4"],["/archives/2019/11/page/2/index.html","95fcbabb7a13a5f624c18d843480f081"],["/archives/2019/12/index.html","5b4cdaba938cffaf027600206b6d5cef"],["/archives/2019/index.html","b8e95c3faa96080686f096c2dea611ef"],["/archives/2019/page/2/index.html","bcd1856eb5db6bbe537025c529863b7b"],["/archives/2019/page/3/index.html","97ecf9024d8fb07331ffd4967e08fd4a"],["/archives/index.html","5e625dc6660ca9206244885d097eb65b"],["/archives/page/2/index.html","cb3c1ef468eb951664fe05bda8779b51"],["/archives/page/3/index.html","b386b0d4e6dbfb15793cd485f07cee26"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","2ccbc67a0797d58a1fb84ced86b0cb77"],["/categories/Hexo/index.html","2714bbadff57a5b89e4fcd4b9895aa22"],["/categories/Hexo/page/2/index.html","3f5ec20a3802d89f6e98e98854e59f94"],["/categories/Hexo/点击特效/index.html","db373f0a109621b8445394763038547c"],["/categories/Hexo/豆瓣/index.html","9b87db5ee09a6cecbeefc06e4e8c44bc"],["/categories/Hexo订阅/index.html","e7b89583df6edaea89d9bd93ab44d616"],["/categories/Java/Base64/index.html","8905cef1b7a22986546ad72479f95f7a"],["/categories/Java/MD5/index.html","b6670b8f96e07b4cd22645520af40ff6"],["/categories/Java/SpringBoot/index.html","704dae512ad9d291ea727d8ebe06f48b"],["/categories/Java/index.html","be9beed78e54cea73954ed85d5f2481f"],["/categories/Valine/index.html","74c05cc8551e57afd95efec8c14b8694"],["/categories/Vue/Axios/index.html","9b5021cdeeae32a23f965dc9e5f59c04"],["/categories/Vue/index.html","9e1aebf207c6a6b9f0e78d095d1845d0"],["/categories/index.html","13fd4bf5b18c865488c55b4878252817"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","01ffa1f5a6efb1fdbde672e437bde455"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","8c13d89520b933ecaee77350decf234d"],["/games/index.html","08532e89c5e37c960886fa78c50ca696"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","c4bcfdff40b06c883e35a25fc012d048"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ab00ee3cc8d156888101ab97089f0c18"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","3e16f7c4c7d38871cda481913edbc4c4"],["/js/src/algolia-search.js","8273534f798e6e002be0b7766efe5e5e"],["/js/src/bootstrap.js","7cf30213035a2cb3c4e7bebd5b14c29b"],["/js/src/browserType.js","7e26caf7ed40e66d941378e102da46c6"],["/js/src/bubble.js","e7ea8df047d3ed2d5ad64916b0591a0a"],["/js/src/canvas-dance-time.js","d5464e2dc2cfb515978ad8d305d65fd2"],["/js/src/clipboard-use.js","70e96a2303a05a36230f4cd8e69e222f"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a7f4ac7b90011ab6b5015b2455020f46"],["/js/src/exturl.js","8e51ccca8d9d6d39e13f3fa0e3d5f1b1"],["/js/src/hook-duoshuo.js","76a98db40af96ccfe5c113513579b5aa"],["/js/src/js.cookie.js","bcc4b68da554db3cd7d929e53b7dc180"],["/js/src/linkcard.js","ccababfad08e774f2e9aaf5eb0de39e7"],["/js/src/motion.js","85c8b182924af2225398513ebb1f9497"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","87118c8ba34b96a20a4b179399604cc7"],["/js/src/schemes/pisces.js","b05fd67ed902ef67a98fdf8c5dd047b6"],["/js/src/scroll-cookie.js","17512330f50fe24b7038e29e6acdd573"],["/js/src/scrollspy.js","8eda900e5df3ccb3e3847dd13a2926d8"],["/js/src/snow.js","2086635650d0b4e650085e5e5da2b261"],["/js/src/utils.js","55871347d9f2a50b3899654e9b28f6bc"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","4f555650e304152b076f9d0509d547ad"],["/lib/Han/dist/han.js","2817011edb6a65c84cc028302ba0f76f"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b766951a8be61dc381c14abb451f3e8e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a3d658780a7d585541b39dc154189d0b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f28add11ed438be008e45cd27a310509"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f52109f74b1f83151d0e37d133aca642"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","14e1a99a09118994bfa073634a527943"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","61490a4661bf70ae4b301046e412a1fe"],["/lib/fancybox/source/jquery.fancybox.css","39ea0d4c0c5f6f184aa598b9d3ab16d7"],["/lib/fancybox/source/jquery.fancybox.js","6aee088fc8769764ae3c2e81429e119d"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","9ec7475dba409662887c8885fa31a9e7"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","323c5466a47295cef8792f434e8fc723"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","4cf56fef3c5b195213bb6bdb0de91c8e"],["/lib/jquery_lazyload/jquery.scrollstop.js","f2775764d618c7402473369224da2797"],["/lib/needsharebutton/font-embedded.css","dbb7041cab41db84b66538b3deefe408"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","aff1d58d6060a3cdf3100dc510d78552"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","2a6c5d4e1a17ea088ff3ee1a41f1af9b"],["/lib/velocity/velocity.js","298522e1b8f4b76b5a4ee1b59e65002f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","beddc597fa4eba50aac1ac52dcf4e14f"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","9f1e46d5bd9988380bd91f4fa59f46f5"],["/links/index.html","e1be8f25e0d9c03e46c66a7fb76a9d42"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","67a41e8d05abed3d43679b039551537e"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","7dfad0a43ee274601403f8a1a7924108"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","dd33c50bbb6919af46958e3b9df0e9dd"],["/page/2/index.html","4dde36baee07587dd1489d99bd9af785"],["/page/3/index.html","b2d60c019427f1e0283072177ca41d34"],["/photos/default-skin/default-skin.css","13640b97ab92c98d95af5e2900c85776"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","dcb3be065fd66ce8284f87127e8b15a2"],["/photos/ins.css","fc58323dc8baa5dbc09b04c95035d452"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","e4936ecd67cd0adc686902ca98614215"],["/posts/19c94341.html","d41c1959af41cb5d46891b5c3991b09a"],["/posts/27514.html","9ccfcfd0e80efcf878970b2ec845b79b"],["/posts/39d47c89.html","aac83d6485f59fbab45a1b11dda951f9"],["/posts/3e5a3bb6.html","99ed2ff0af74c4c78485e6edc170db4a"],["/posts/4394a738.html","aa9eb6f92925e88d6b886d3a97e69ede"],["/posts/495d0b23.html","55f830339b853378fb342f00dc943d0e"],["/posts/61913369.html","01ccf4ca7a9969e9860d002e4774192c"],["/posts/7fbe9500.html","348f23541c72ea042b226699fa9c91be"],["/posts/89ea6c8b.html","7633ef2247174bcf5c53e888f86e4e4c"],["/posts/9c9b482b.html","164e71ac6d9ec857f1c21ddf24cf4a73"],["/posts/a7df3b40.html","189c66d8fa044719d69bac1d1044f8e3"],["/posts/ab21860c.html","4fc42ab1319b988bf8d26c4ec7b0c469"],["/posts/b4831a5e.html","e844356796a1c40f14586136cfa0a200"],["/posts/bf9eba42.html","12c5119a7b984d5b876bd53df39bfd33"],["/posts/c1cdcf68.html","63fc151a68dcffee89904639f51f15e6"],["/posts/c4782247.html","83fda004a4954573f88c345b6caea1cd"],["/posts/c7631ec1.html","39be5491730a34445c1afc1298da447d"],["/posts/d7399e80.html","3ad6736a7a18044caf01ef957f872f52"],["/posts/dd9d9f86.html","b733d94791623a74639dd60ad7de4dd2"],["/posts/dff7e11c.html","955b1b83e5dfc189f804c802bdfe5ebe"],["/posts/e1b9c6c5.html","78a4398655d1f122600a139930b17147"],["/posts/f68f129b.html","205af92bf722400e02059b2290908398"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","cd4eeae334c53a9a317b8d448aada332"],["/tags/Axios/index.html","88210e6096615f9a2365f612c2d26c88"],["/tags/Base64/index.html","95f7e9fc8f6c4734a6e6c1cee4d356cc"],["/tags/Coding/index.html","a1d7768d8a7d138599c5dde991e39367"],["/tags/Github/index.html","f8fe2879e0af0e307e777b36c554c8be"],["/tags/Gulp/index.html","86a5b4907881123c29f76f1a5c61bd56"],["/tags/Hexo/index.html","f764d40f30b198236a6b0ee534735218"],["/tags/Hexo/page/2/index.html","47ce316ed03930b19da2b689fc2ce974"],["/tags/Java/index.html","c28f062307b6cf021fe81049639665bd"],["/tags/MD5/index.html","69d7d07a4bbbc71f8fe9977ca87ac0ca"],["/tags/Neat/index.html","62548b64f5df1d2a228d35809486503a"],["/tags/Next/index.html","5773eaa0320948cee6c64b63102919c8"],["/tags/Password/index.html","3050a0eb58e4bb30e33d75a8de16452d"],["/tags/Photos/index.html","e6b761f7a2fdd4cbef37a85fd0b7a7b8"],["/tags/Rss/index.html","c1da7ceaf7d9b05f0eaeed139a0b4b47"],["/tags/SHA-1/index.html","ef27acae26c16c1019bff374125d26d0"],["/tags/Security/index.html","b2f1d5966b562db9541caef0a9bd5e94"],["/tags/SpringBoot打包/index.html","898527370ad39573bc113636e2c75b9c"],["/tags/TravisCI/index.html","ae33704c308d53c8c30426623fee70dc"],["/tags/Valine/index.html","acb87d7c6b8bcb2ea600fe26e725624b"],["/tags/Vue/index.html","a391a217494f4a3dec85781856e441b9"],["/tags/index.html","3b1b91c3df15832886feb225803b6813"],["/tags/lazyload/index.html","da77a54d4b3a68797aeb63ca09dfd0a3"],["/tags/代码块/index.html","c6bb43527a8c376645a56bbdccdbd324"],["/tags/图片/index.html","fc348e08fd9d9819c9fc81d2d14d4ef2"],["/tags/邮件订阅/index.html","8d8788e47522c3181ba8c13359bac9b4"],["/top/index.html","584a1f4b687d0a721fe6c0a68da8591a"]];
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
