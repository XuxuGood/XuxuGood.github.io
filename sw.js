/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bab8c80fe4a8646703c98891af075daf"],["/about/index.html","c52cf775b3f08e074c37dc25ca7808a7"],["/about/renxi/default.css","c9e78b74e2012e630854d911b3da3e2c"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","fb864ac384fbb37dae6c7e0b97500580"],["/archives/2019/11/index.html","3ef2ca37718d3d1e36f696b0e82dffcc"],["/archives/2019/11/page/2/index.html","379201c2bb7f78aa985febf7e6c92914"],["/archives/2019/index.html","a5db8c10a1f36361f4205672ec5b109c"],["/archives/2019/page/2/index.html","295e96ee2f126205be86a000e0b7f5e2"],["/archives/2019/page/3/index.html","669ffed3329c3f2d989798cb10c6a9ce"],["/archives/index.html","44837bac45c2698ee83f6461aae316ec"],["/archives/page/2/index.html","c4247c88be87bf42f644b521e829e795"],["/archives/page/3/index.html","4a594327abfb501703e3912558a77ac2"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","98c131ab75434b15d1032d229b1ff351"],["/categories/Hexo/index.html","8bc37383002fa059090be02f8be11117"],["/categories/Hexo/page/2/index.html","e40d579b914bc63ec22af51adf50fed0"],["/categories/Hexo/点击特效/index.html","0e04b402d820f2b86b58b91945f66429"],["/categories/Hexo/豆瓣/index.html","56c8e1c01493aa8b31db090362db4dca"],["/categories/Hexo订阅/index.html","65f767ff173ed8315f9798e1f9a7a277"],["/categories/Java/Base64/index.html","b2ac1578fc99f2274f543afac63edb16"],["/categories/Java/MD5/index.html","08ab5eea37cbe4f5624f84ffcef3e7c7"],["/categories/Java/SpringBoot/index.html","81bcd75eb18f14eccf5164e29c962bd9"],["/categories/Java/index.html","42be98213493cfbe7cf4366721e05887"],["/categories/Valine/index.html","e514be7233d722da552ea072c3eec01e"],["/categories/index.html","2450f648a9eaed4f722733f691eff2ef"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","f99cedce47a75f4e41c4373f001594bf"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7f8cef3cd87d743bb6958271d1ffaf86"],["/games/index.html","18eb75e6179d44b916ec5bb50bbbd276"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","93c9b96840d511a4b2e647833afb8286"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","09551f76ff9020cc1cba59ee4ab884b6"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","00165daf6f0283b15ea270fe3d0649c5"],["/js/src/algolia-search.js","a03218209950f4bf15498b8fa416d292"],["/js/src/bootstrap.js","b27b168c3aa29acef474515e10a8dbd0"],["/js/src/browserType.js","66e0ca564b9bf1651f4672ac3b886c4a"],["/js/src/bubble.js","fd48658650a284ea7a85d316c5ceea8c"],["/js/src/canvas-dance-time.js","75eda4366c8bd02ead1bf309b8fd10ed"],["/js/src/clipboard-use.js","bcc694009ee6482e599cd103d7138a6e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","ffc0af962324e3fe0f2e6aaebc92d164"],["/js/src/exturl.js","37228e584b4b34fdd4213e4facd71b08"],["/js/src/hook-duoshuo.js","eed0701aa3f039b2ea8e35bdf32ddb1b"],["/js/src/js.cookie.js","df1add586578188918510afa7128bf3b"],["/js/src/linkcard.js","7a6e6b350fd767729148d698f58f7241"],["/js/src/motion.js","e43d12a6c6364709a24c0aec6cef7148"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","668866338eac22276be78a40cef96ca5"],["/js/src/schemes/pisces.js","7f29e12c20f195fdc37b0e971f257c54"],["/js/src/scroll-cookie.js","5b5cb050f03183ac4c4cd4a6d4e193ab"],["/js/src/scrollspy.js","d82bd570799f1970b18384c8f5c1ba2d"],["/js/src/snow.js","240b18999d53ad5f696b90d6557a1f63"],["/js/src/utils.js","c4d3d6d52974254a5b12f700b25637cc"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","ccc9654f318859ee804933472b7b6f02"],["/lib/Han/dist/han.js","e313c284efc508806d0699811fda1a5a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9cf4e7c60f9e450af6dbbdd737cb55d2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f97104afc77b6c4e554df4dd51e813d2"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","36fdd921374bd575baf5bb32d2eaf339"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","20cf2b580055ea60165a290d09049e0b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","be665e1c191de37be911cd818391e858"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e7231101424868e941572dce91ab7903"],["/lib/fancybox/source/jquery.fancybox.css","503f91a846d3019475f1155deb7621e5"],["/lib/fancybox/source/jquery.fancybox.js","b07c964003c5ceeec9fe795cafc810f3"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","46098f3748c80d4b368fb4918065e80e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c019f116128b1973522274edd87143f3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","fcd8a634607bfe2158e50d24076761b6"],["/lib/jquery_lazyload/jquery.scrollstop.js","5f0fac7922d65461dc4d0872177d5f57"],["/lib/needsharebutton/font-embedded.css","9c74a104f05a109ab14b79a26a1d4a76"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","263389852911293472acb040f6c74b58"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b6a447ff3e85f03993cc3b864e5e8d5e"],["/lib/velocity/velocity.js","9311dd2f87b30178f07632341d209dc8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","31e0f6f03d04fdd970b881bff173a529"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","5a3ff45aa4accfce2b89db86e36b1527"],["/links/index.html","f06191060ca3bd0666aefd628c2b78f8"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","0f368502dd5c866d9d393657e736dcb1"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","ba6b9b6b28c9c1deaeda8eaa4d2914e7"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","ce5d201c754ac1562ca3a6e601a2121a"],["/page/2/index.html","f96e2d83b6297e23914977adb6748bc8"],["/page/3/index.html","81b42d1b4120e86d2156d6fa1ecfd206"],["/photos/default-skin/default-skin.css","596a60b9bb6aa4a8ac24bbfb7b746765"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","cbd0a972b85f7bf46f0384c71d090bde"],["/photos/ins.css","e223ff33f94b1bcceeba1605943ad77c"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","3986c421178ad9a0d8d874b0dd8a08ee"],["/posts/19c94341.html","ed2b5fed7c5702fd0e6269bbccbe78bc"],["/posts/27514.html","603bef4cf3e5ae467be5291f70cef6ad"],["/posts/39d47c89.html","2d8f2e3b37f72633814e4907823345a5"],["/posts/3e5a3bb6.html","f70b0abbb675bc595c7bf3800c16519d"],["/posts/495d0b23.html","ba748a401b4372e573e25685ed3a35ea"],["/posts/61913369.html","5e0c189c7eb41a5c936a6e35f5b61aad"],["/posts/7fbe9500.html","ac27dcabb2d4fe49aaf26852f71698b8"],["/posts/89ea6c8b.html","e7af8bceab0865a5e7343e9f6625a38c"],["/posts/9c9b482b.html","e3ba9a016e5277710746c49187b3cc3d"],["/posts/a7df3b40.html","0f5013116a658f6cf4cd6cfc0491c720"],["/posts/ab21860c.html","f03f171d23728ef860a792dec23cd080"],["/posts/b4831a5e.html","4b395cff9cc330a91f8d8ed58535a7bb"],["/posts/bf9eba42.html","2b392e9d2941c08697b698f0f3fb41cd"],["/posts/c1cdcf68.html","a8a6f6fe21274a8ff12ca2cee71ee1e8"],["/posts/c4782247.html","a6d58813614e0682e68e538a2ff5ab83"],["/posts/c7631ec1.html","0e2b48e92183e9d86601a7b473811b0f"],["/posts/d7399e80.html","ace0b57404aa7d0534b3a15abbc173ad"],["/posts/dd9d9f86.html","332ced1b4b603711cfd213843cd07448"],["/posts/dff7e11c.html","5022b3ffb7dbea5af4cb78432087d947"],["/posts/e1b9c6c5.html","2b37542cc050b249e5f6341f36a15718"],["/posts/f68f129b.html","679cf7c03883ae1d98ee05c6728ff1bd"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","28f4b81bf3b19e5fa66265a5e9fce84a"],["/tags/Base64/index.html","4391cc51db40a8aa8623684f90fcec5b"],["/tags/Coding/index.html","58b474879d02848a5848d662b4b90588"],["/tags/Github/index.html","b6e614d7f48dbc641166857c8da76af3"],["/tags/Gulp/index.html","e8f53f8346a8673ececcf17bb949da63"],["/tags/Hexo/index.html","0c191aa6ec7ec02fa2dee3b887d7fd89"],["/tags/Hexo/page/2/index.html","1b20e33011fdc8aeb387bbe773af8872"],["/tags/Java/index.html","b85c6926305b4e16b2312cf4baa655fb"],["/tags/MD5/index.html","8e69b21048a8fba5fe13e46cf5a3b687"],["/tags/Neat/index.html","9f48d6b8299977b8ec027c99141d8485"],["/tags/Next/index.html","aac1d8a4e0204d8e7c37e612f9187a3d"],["/tags/Password/index.html","8e387f0bba366a2aff8c99fbd811ad26"],["/tags/Photos/index.html","892cd03e3c8a753b4aff091a4cc69dc6"],["/tags/Rss/index.html","80d7463eb0d5838c26e35de1bb1633a9"],["/tags/SHA-1/index.html","3204c8e74f4e328b4d3b64fe66de44d1"],["/tags/Security/index.html","80e3f21d1477557fea8bf051bdb1c200"],["/tags/SpringBoot打包/index.html","a9189ae04415fbda1bd6f56ea936fd5f"],["/tags/TravisCI/index.html","6cfd686dc555d3c3590d3e604ebc8958"],["/tags/Valine/index.html","b08f7a4f8798a2bbf4546b0580acaa75"],["/tags/index.html","bf7319f31c31c13df8b7a03034ce04ce"],["/tags/lazyload/index.html","f8cbbb1695c0598150025774c26826c0"],["/tags/代码块/index.html","e1e39fbce2156c1fb2cc828534170d49"],["/tags/图片/index.html","394873f6c84cd89d654d1f01df9c2294"],["/tags/邮件订阅/index.html","07959bea086a313a1ffa449316ab9edf"],["/top/index.html","ac674402837b5c65cbf3c9dbe0d77847"]];
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
