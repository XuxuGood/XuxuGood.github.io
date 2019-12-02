/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","144748ab54de552b52decd17c4df2e6b"],["/about/index.html","e0f2da3d17a890450260be3fd3f720c1"],["/about/renxi/default.css","d63e14ac42ae99e663effaff0c50f1e9"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","552963cdc1fb9fa8d0cebb38311a1598"],["/archives/2019/11/index.html","6fdb292f9cffcb8f22a7e2eb9c3907b9"],["/archives/2019/11/page/2/index.html","5b470dc8e253ca55c17b7bb082a53ce1"],["/archives/2019/12/index.html","0aec8cfe10342dc55e93330c5759b40a"],["/archives/2019/index.html","6a16946a534f70f4459abc16d56317a3"],["/archives/2019/page/2/index.html","2098a89b4fc930237c61aaf4bfc885b6"],["/archives/2019/page/3/index.html","a40441762bdc0a18b80b6e15e87c512b"],["/archives/index.html","54bf0b2a003441cf78a2d51265f51b16"],["/archives/page/2/index.html","a6f497cb5b150285afbb9b7134d8e102"],["/archives/page/3/index.html","d7dede4b688a258adc0369f9795fd9cf"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","925c63ca1b4cb2d6947d662dd24b104d"],["/categories/Hexo/index.html","83a869927cfe8533a82e789ceedfd79d"],["/categories/Hexo/page/2/index.html","7017ad098c593f885befaf33c613cdd2"],["/categories/Hexo/点击特效/index.html","6b3c61ec4ceb5f759a80510924ce091c"],["/categories/Hexo/豆瓣/index.html","c070c3f0d25a21227ae9357311844ec2"],["/categories/Hexo订阅/index.html","9b61683822069a0a623cef1641bd6e13"],["/categories/Java/Base64/index.html","31dffc5620b76f0eaf0e067d14d73ea1"],["/categories/Java/MD5/index.html","1a52a7bdf58edebfe96c8402e22a2ef6"],["/categories/Java/SpringBoot/index.html","eec254159243033459405d4535a28bf3"],["/categories/Java/index.html","38f92ee9df809367171389ceca0d5db3"],["/categories/Valine/index.html","c7451b4c2a56b20c924c275a182c4258"],["/categories/index.html","c1ec94802b849fbf7e9fab2015783e6d"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","64b02f82446cdf0b8d69bc87705f88cc"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a988832770554a8a1de8bc1e39906b57"],["/games/index.html","9ea2101a817183659d695a06b53934d0"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","6b5968f7ab98bfd98dd130c72a514732"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","cb3fea089aa97af21f5737583a65aab1"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","209292293fe596e23108f526f6b30eab"],["/js/src/algolia-search.js","000155936ad03a4f04a51e7cd6af1b5c"],["/js/src/bootstrap.js","95e49ed889ba54ea5a37892e96557654"],["/js/src/browserType.js","5434edf2c697dc25072aa51d68212368"],["/js/src/bubble.js","a6d45d520635f06f644c871dfdf52eb1"],["/js/src/canvas-dance-time.js","039262f93cb7dc9e003c790e7274e964"],["/js/src/clipboard-use.js","c4e8706f5f1fd1325054f6a4d3491a5e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","e02a37c6a520d184b4b6a7744ea85836"],["/js/src/exturl.js","b1447e35678beee8e18e197eb40cc8e2"],["/js/src/hook-duoshuo.js","af1314d4da6c343daafa37155a4768aa"],["/js/src/js.cookie.js","1b61f5f1a78d894ac4c191f28a5fdb2b"],["/js/src/linkcard.js","dc45341015cfb63344cdef7facd0dce4"],["/js/src/motion.js","5f9d4109fc7f8f5a18d723ff30c1a5ce"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d243f708efd1f492c70fc5f734fcba6d"],["/js/src/schemes/pisces.js","44aebb347c0675bf0072ead9d9bc72bd"],["/js/src/scroll-cookie.js","f81cd9efebcfe2e3f8f5570387856642"],["/js/src/scrollspy.js","e207bf60bda6d605ff81751acce3acf0"],["/js/src/snow.js","e0b6095443c3e1f1da9ff9b4b223d2ee"],["/js/src/utils.js","a2228f2202eab66c49ba68a205e47f6f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f5a2c7f7fc002c06d65e3e6e3d8cae8a"],["/lib/Han/dist/han.js","9454bee86983ac39dabdc56ee992dd5a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","6d9c51ffca2c30518d13c9ecb66aae97"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d392b1215d975e0c05707b26e5d6aadc"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b4543501932c55c1d15e006abe95fd44"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6c302840545cb0ee6068b6870be8fea3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","635884c8120c413e18cb9992d17abb8b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","2ca152953a60deb8fe09b26680400ebe"],["/lib/fancybox/source/jquery.fancybox.css","6c021e403f90e177c888691d315c1c31"],["/lib/fancybox/source/jquery.fancybox.js","fafb026b5809b3990950ed7dda76131e"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","08cecc65f7a3875cdd40189192a4f552"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","4a5453dde5fbb71289c9782e4e90d9b4"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","d69ebd6b27e18a1ea83699b3d5fa42bc"],["/lib/jquery_lazyload/jquery.scrollstop.js","abc4ff39470cef94ff8cf59ba1f56ce4"],["/lib/needsharebutton/font-embedded.css","591f881085d72553c6a315c355666bc7"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","5bf59f6d5a68f49c0a1c732bf4790178"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","57660536ea6c91e32661b931f64b1c12"],["/lib/velocity/velocity.js","fa54e24d51564c4e8c519973c9156e04"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5ce790cae422e4d9ff28237918546b73"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","b73f3461f6325d98c91668cefa060152"],["/links/index.html","aa39861a8f819b0cd704732536019aae"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5a280be5ed1c64eed562935000e8231e"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","0aad054e682fdf7b0629db53f34a4478"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","83e8d3e7f4476d10687911860492486c"],["/page/2/index.html","c73eb56b839eebf02ff3a67cc1a6b33e"],["/page/3/index.html","8a89484eec417b9637cf920849c15df7"],["/photos/default-skin/default-skin.css","f1bfee7ff088d22b5280a4f9d600f946"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","75c8d5bcdb03906648970a5177f4a5a9"],["/photos/ins.css","34df14e0cc7ce4743fc5884b608a8416"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","b010ac147da36e93bf3539f76dc646ef"],["/posts/19c94341.html","e7e417d1ef9e4938f524e26e4f68c0f9"],["/posts/27514.html","1123a0460aa6254a0bd0fcb7c8448c9f"],["/posts/39d47c89.html","5ee6cd9ef29f3bfc493b564380873534"],["/posts/3e5a3bb6.html","fa29653bb8cb624d712d6d13e18329a3"],["/posts/495d0b23.html","9e1658ffa348eaa5a2f1dc2f75aa45de"],["/posts/61913369.html","6ee3cfb20fab2b7eea15ef963733880d"],["/posts/7fbe9500.html","fa818952659b8b308b1556cad96d2e78"],["/posts/89ea6c8b.html","cbc3e6bf75df78a4fcac0b67952e058b"],["/posts/9c9b482b.html","5c3e74ca6fadbca6595725ecddd3970b"],["/posts/a7df3b40.html","27ff5c52d07aa54dfcf9dd3328984c00"],["/posts/ab21860c.html","1d21082012c2e2ae3f02de0a25129e3f"],["/posts/b4831a5e.html","79a02dd242a6675cbab29645a2a35164"],["/posts/bf9eba42.html","0e35cf7e9c3d662647302624ab7a2d2c"],["/posts/c1cdcf68.html","b152806bbea307e280dbf72c87d640fe"],["/posts/c4782247.html","245c85b3e4241edc9aafda588147fb79"],["/posts/c7631ec1.html","d26e88a90dbcefefe19738d1e78f1a22"],["/posts/d7399e80.html","f4fde11793004f1df6d64641f062da35"],["/posts/d87f7e0c.html","903d49ca770a8d1d94209d840f9c2cce"],["/posts/dd9d9f86.html","c0dc2f99087ab6c9acb82c2bcca8b4ab"],["/posts/dff7e11c.html","6f7d379f2fe94e6c5d2293e4bcdeff95"],["/posts/e1b9c6c5.html","e79e3e6c702191810bf9d4fbd39dfcb3"],["/posts/f68f129b.html","8311adaa15f48627f33bcc8ad971056b"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","b8b75e4b4cfda515decfc8df18a233ba"],["/tags/Base64/index.html","228cded84c0e01f2de8eb4a23bc1b900"],["/tags/Coding/index.html","5020f19a46076da7fff8738409855460"],["/tags/Github/index.html","afb809af759ee8efbf0625955dda430e"],["/tags/Gulp/index.html","30a1872c1dc186a9b7714d80b4cae9d1"],["/tags/Hexo/index.html","b84a86c466078d036dbfb4686f4591ff"],["/tags/Hexo/page/2/index.html","f634678da727677a09cab3f135020dd6"],["/tags/Java/index.html","04a82f8157f9771f3ca196c918cafe25"],["/tags/MD5/index.html","8903ba95d90ae03dd0f52087d72446ad"],["/tags/Neat/index.html","a606c574bf64432a7cf4aa721eee0e5f"],["/tags/Next/index.html","833c6ae85d3bce5e21370ce25558bec7"],["/tags/Password/index.html","98c29f6c039ad0138e960aac0ab9beb5"],["/tags/Photos/index.html","306e3a5a275a68cb2bd52db1c562bc1a"],["/tags/Rss/index.html","8d3210d40164e3a9be21d01682f962c6"],["/tags/SHA-1/index.html","7087c6a39214d3dc30c3a5321b3bccd2"],["/tags/Security/index.html","baa25f2c057b867407886d14992ed855"],["/tags/SpringBoot打包/index.html","ab29e91b82b85453a1564717c285a261"],["/tags/TravisCI/index.html","55199522b1d3b1b0a82ea2a7934fae99"],["/tags/Valine/index.html","c3ba39fb100f50f00c241b33984460ee"],["/tags/index.html","35eaa79039df22878f636149895b1bf0"],["/tags/lazyload/index.html","36a95dca4c39cc2093926aa41a1f5c84"],["/tags/代码块/index.html","d41e6273cde5cc1be99e4dcdf4b175af"],["/tags/图片/index.html","e63cbea2730e8479f65f366349aaa71f"],["/tags/邮件订阅/index.html","df4ef17ab0e3973e30652586039a6b6e"],["/top/index.html","af4e8baf421de122312c88f599053ebe"]];
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
