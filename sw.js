/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f2b6be4975e7f290266585fbf1eee5a5"],["/about/index.html","52569ecede55d9b63ba61dafde1f394e"],["/about/renxi/default.css","1a961023d133603b0fa760588915973d"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","fb864ac384fbb37dae6c7e0b97500580"],["/archives/2019/11/index.html","3ef2ca37718d3d1e36f696b0e82dffcc"],["/archives/2019/11/page/2/index.html","379201c2bb7f78aa985febf7e6c92914"],["/archives/2019/index.html","a5db8c10a1f36361f4205672ec5b109c"],["/archives/2019/page/2/index.html","295e96ee2f126205be86a000e0b7f5e2"],["/archives/2019/page/3/index.html","669ffed3329c3f2d989798cb10c6a9ce"],["/archives/index.html","44837bac45c2698ee83f6461aae316ec"],["/archives/page/2/index.html","c4247c88be87bf42f644b521e829e795"],["/archives/page/3/index.html","4a594327abfb501703e3912558a77ac2"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","98c131ab75434b15d1032d229b1ff351"],["/categories/Hexo/index.html","8bc37383002fa059090be02f8be11117"],["/categories/Hexo/page/2/index.html","e40d579b914bc63ec22af51adf50fed0"],["/categories/Hexo/点击特效/index.html","0e04b402d820f2b86b58b91945f66429"],["/categories/Hexo/豆瓣/index.html","56c8e1c01493aa8b31db090362db4dca"],["/categories/Hexo订阅/index.html","65f767ff173ed8315f9798e1f9a7a277"],["/categories/Java/Base64/index.html","b2ac1578fc99f2274f543afac63edb16"],["/categories/Java/MD5/index.html","08ab5eea37cbe4f5624f84ffcef3e7c7"],["/categories/Java/SpringBoot/index.html","81bcd75eb18f14eccf5164e29c962bd9"],["/categories/Java/index.html","42be98213493cfbe7cf4366721e05887"],["/categories/Valine/index.html","e514be7233d722da552ea072c3eec01e"],["/categories/index.html","b8d22809e91331a4de33e2fe86f88866"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","e90b2d4d3af942123ddb3177101a35de"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a409938c6e1d9c6daf19bb972ec83461"],["/games/index.html","18eb75e6179d44b916ec5bb50bbbd276"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","a551c704267fb8978ed5dd194aee07bf"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","072c98c89daf7ad437df456904848a5d"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","0371498044e2ee5292e5de347d389404"],["/js/src/algolia-search.js","20a8dbf4a51a99b8bb31f4837c027163"],["/js/src/bootstrap.js","dea54dea1d085a18396bf6909c9526b1"],["/js/src/browserType.js","9d797c93aa69f076f7fbc84131865382"],["/js/src/bubble.js","8c6fafdf56d14f418adbc3c5e016430b"],["/js/src/canvas-dance-time.js","3ab7b000919e2f983383413c82248080"],["/js/src/clipboard-use.js","d2ac820badce7631f6e9ff87c22e64fd"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","f74588b0589aa83abd612bfa1a5c5b80"],["/js/src/exturl.js","9ab1e6a3d126ef7f1e272a4a72dc8722"],["/js/src/hook-duoshuo.js","a2a145729c96577f6efd037791c1c626"],["/js/src/js.cookie.js","6e52f20c7f82abab17f1064988a9c52b"],["/js/src/linkcard.js","20ba5740a3e4e60ff4fc7257a8672026"],["/js/src/motion.js","f61bb1a8aee9bab3fcafb23537ac50c5"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","cc7a4b8e646d456b84f1145591e75af8"],["/js/src/schemes/pisces.js","82c2de2e7d93c13751a083b6768ba690"],["/js/src/scroll-cookie.js","8595b73df7a832e6f55b52c90975090d"],["/js/src/scrollspy.js","aa4cdf7665c362ec23ac2a8960f8f856"],["/js/src/snow.js","8325ea9a6ed1e96173016dbc59d4a013"],["/js/src/utils.js","b99eaa1b9b300397a3f930b2eb624a92"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c750f569bd27de41ce321186608cad34"],["/lib/Han/dist/han.js","4ccb9bcb3a19cf973306654f1965f343"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","58d069a496ae1b2da257912c20bd23e9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f6d8de732b2e5cc97bc0766e06c37b4e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","529661eccf2c5df27f7424a1d3718396"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","031455043bc0b99358c34be3aab1a3e6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1343df8edfa76795d36c52f7e7ef2b20"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","696a988544361b7047b3cdb64caf93a0"],["/lib/fancybox/source/jquery.fancybox.css","dc0bea153c7e58196361b31edea74ed7"],["/lib/fancybox/source/jquery.fancybox.js","2222b9aef56132e5a7677c84ada1a8d7"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","2e3f3dbbb0b0ffe9b3dc87830ea32ab4"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a5c3b20e3b156e2de1fc7476db328fab"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","99a5a2dfd1811e519d3dd5266703697a"],["/lib/jquery_lazyload/jquery.scrollstop.js","7a969ad63ff44fe0a918b62093c7ec04"],["/lib/needsharebutton/font-embedded.css","d3dc7e5aa092090c93b35a840ca29860"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","489029257ac6a7e3b5f44753c06734e5"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f3764e72c3cde8b887cfba40adb11e9e"],["/lib/velocity/velocity.js","32325b37de0bcb25697339ab1c09308a"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","75a22eaa876a48854069a8c07e53cc41"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","0e41982e85a75deeb6495237aba2de98"],["/links/index.html","4786463be74d7dd195fe9071bcdf4da1"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","68da4bcb6bc673f0d1a689c1663a3b44"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","1b96a72bc695c8c99382c421f4a45625"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","ce5d201c754ac1562ca3a6e601a2121a"],["/page/2/index.html","ff03c90a136e0463c495626ed164266a"],["/page/3/index.html","85ae2b7e254a5b2df86d81123a418b8d"],["/photos/default-skin/default-skin.css","4f6c7d42efd62551db68e12102acfb3f"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","a6b774a19927535c878a88317bfe1f22"],["/photos/ins.css","226d58af214fcea79df71f94c1e34ab3"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","8a4854c9b43a997154bb66db3076f4a8"],["/posts/19c94341.html","c5031432c1f7190e376ed91d69c7dc69"],["/posts/27514.html","4224ad99ca132c62b6cdb8a0303435f0"],["/posts/39d47c89.html","071a1c8498ed912a4894d5f90f8aa95a"],["/posts/3e5a3bb6.html","c364a8250b281a6ba32f80d3e000c920"],["/posts/495d0b23.html","d6a1e42d5bbba7e30e19f751ac225ed1"],["/posts/61913369.html","fa43e7d2d5ff92ea9a8793452268cafa"],["/posts/7fbe9500.html","a73e3c5e3b30a20e2ea55acbda94bbc6"],["/posts/89ea6c8b.html","234b87de91e7927910648be2d0a36ec0"],["/posts/9c9b482b.html","4f9cd34bc7efc88e579e533ee123d665"],["/posts/a7df3b40.html","947ccd71598ab4498418ae699bcf33ad"],["/posts/ab21860c.html","a25c3e95791d82bc81a1f60ff085fc06"],["/posts/b4831a5e.html","282ad5bdc2c754db416adb124f0339a4"],["/posts/bf9eba42.html","3251ca89fded5ee2c694e2de9dcdb249"],["/posts/c1cdcf68.html","363284776a6103f365e58bd7702de5a9"],["/posts/c4782247.html","05139cb007810aa395afb8c11f308973"],["/posts/c7631ec1.html","7c2d789b9c566a30830366166be411e0"],["/posts/d7399e80.html","8e89dc2f8fcb45813912db8f35be4210"],["/posts/dd9d9f86.html","174b57480132de54226cfd1c48844014"],["/posts/dff7e11c.html","ae760bd1108a5bb2936545ed4952d3a7"],["/posts/e1b9c6c5.html","cd8958ecfcb86b5d40a4d47ccc054475"],["/posts/f68f129b.html","f7befa5ae7024cb89b49d737fb5a9b62"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","1b552ad7ed84889494e3914148a243ff"],["/tags/Base64/index.html","4391cc51db40a8aa8623684f90fcec5b"],["/tags/Coding/index.html","58b474879d02848a5848d662b4b90588"],["/tags/Github/index.html","b6e614d7f48dbc641166857c8da76af3"],["/tags/Gulp/index.html","e8f53f8346a8673ececcf17bb949da63"],["/tags/Hexo/index.html","0c191aa6ec7ec02fa2dee3b887d7fd89"],["/tags/Hexo/page/2/index.html","1b20e33011fdc8aeb387bbe773af8872"],["/tags/Java/index.html","b85c6926305b4e16b2312cf4baa655fb"],["/tags/MD5/index.html","8e69b21048a8fba5fe13e46cf5a3b687"],["/tags/Neat/index.html","9f48d6b8299977b8ec027c99141d8485"],["/tags/Next/index.html","aac1d8a4e0204d8e7c37e612f9187a3d"],["/tags/Password/index.html","8e387f0bba366a2aff8c99fbd811ad26"],["/tags/Photos/index.html","892cd03e3c8a753b4aff091a4cc69dc6"],["/tags/Rss/index.html","80d7463eb0d5838c26e35de1bb1633a9"],["/tags/SHA-1/index.html","3204c8e74f4e328b4d3b64fe66de44d1"],["/tags/Security/index.html","80e3f21d1477557fea8bf051bdb1c200"],["/tags/SpringBoot打包/index.html","a9189ae04415fbda1bd6f56ea936fd5f"],["/tags/TravisCI/index.html","6cfd686dc555d3c3590d3e604ebc8958"],["/tags/Valine/index.html","b08f7a4f8798a2bbf4546b0580acaa75"],["/tags/index.html","8232276542f1a3afbb4038c5e6cd86ef"],["/tags/lazyload/index.html","f8cbbb1695c0598150025774c26826c0"],["/tags/代码块/index.html","e1e39fbce2156c1fb2cc828534170d49"],["/tags/图片/index.html","394873f6c84cd89d654d1f01df9c2294"],["/tags/邮件订阅/index.html","07959bea086a313a1ffa449316ab9edf"],["/top/index.html","64d125e9b5582a0b536de6b2d111386c"]];
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
