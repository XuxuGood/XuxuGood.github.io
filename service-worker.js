/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","66a7bfb9a345db3d40f13410d9277148"],["/about/index.html","560e8f8afdc2a0bcec9dfe9636d2731a"],["/archives/2019/10/index.html","80da142884addf6d5343e91b7e4cd05f"],["/archives/2019/11/index.html","a0f30426741f23aa0926aa9485560ed1"],["/archives/2019/11/page/2/index.html","d1cfb825c6055ad55c8ffaf65fd01f36"],["/archives/2019/12/index.html","57e9eb64c9f79382136a9a15cc00cd43"],["/archives/2019/index.html","457c4093254dde42ce95985c2ff16711"],["/archives/2019/page/2/index.html","8096e01373505989d3a0d60c7f78ea36"],["/archives/2020/01/index.html","c1948b40dc9e67e57da3550061b60b65"],["/archives/2020/02/index.html","f269f672da4296dd31f8f20d76f729f8"],["/archives/2020/03/index.html","706ea6ca3c4643280ebc5747706a2357"],["/archives/2020/04/index.html","1196a5069177db1628b72f0c009db0a5"],["/archives/2020/05/index.html","857e74e632ce9dc80fc6ef37ae90a33e"],["/archives/2020/07/index.html","ae96aec89f3e70adfbd71c7c4dec9aaf"],["/archives/2020/index.html","c4ab77bebda340d4b40ebcd6ca535887"],["/archives/2020/page/2/index.html","f65916eaf3466159891d08e2550bf26e"],["/archives/2020/page/3/index.html","76dd9a8041a891c29ddf7e8cdf35fb7b"],["/archives/index.html","5b6cdb47ac97ed18edcf5b4eddc84d5c"],["/archives/page/2/index.html","5b6cdb47ac97ed18edcf5b4eddc84d5c"],["/archives/page/3/index.html","5b6cdb47ac97ed18edcf5b4eddc84d5c"],["/archives/page/4/index.html","5b6cdb47ac97ed18edcf5b4eddc84d5c"],["/archives/page/5/index.html","5b6cdb47ac97ed18edcf5b4eddc84d5c"],["/categories/BUG/index.html","25c23e507c3bef0e82e5c55543d46247"],["/categories/Gitlab/index.html","65a4c6a2bec714bee47d652133023b92"],["/categories/Hexo/index.html","2213f6ae64251601665ed9ecebc331bd"],["/categories/Hexo/page/2/index.html","77a91f7eeeb2928eb80b791145c1fb84"],["/categories/Java/index.html","2cff5c808ec483008f1776f9992f241c"],["/categories/Nginx/index.html","d2470062abcaf35d6c171b75e87b8007"],["/categories/SpringBoot/index.html","d76b91d9768ad7503ab1e0ce547c3405"],["/categories/Vue/index.html","6cf7fad3afa36e547e406a029c1361ce"],["/categories/Vue/page/2/index.html","f5c1fceff11a5040214bd23484559b69"],["/categories/index.html","7eea3b42a21365cb8124c9b5fedc83c0"],["/categories/事务/index.html","814a7fb7077523a13bee6415ecdeeadb"],["/categories/加密安全/index.html","e683dd1a432ee6608dfbb91d288aca9c"],["/categories/流媒体服务/index.html","fe438c1d1472fa1ae329078ed7e5f1fb"],["/comments/index.html","db40261c90a54ba87812ab99cf78ae1c"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/botui-theme-default.css","b29b156f9ee2360f3d2b5b6f2e5c03aa"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/message.css","2fad0a97ec76ac0d96b562f26ddd180c"],["/css/style.css","3511845d98e46d2fcb08f76ce146d892"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/images/404.png","999e64811aba104fd8ff9da92340dccb"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/failure.png","81198a176284b72208abd8b5d0f0627d"],["/images/favicon.png","81198a176284b72208abd8b5d0f0627d"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","2d32b9811f8d9fe09bc531cd72db18d0"],["/js/DigitalRain.js","b6e0145f236bcbda8665ad74827b74fc"],["/js/app.js","19a31e6513712eef3a26be11689c84e0"],["/js/botui-message.js","8aed2648d9ae4616e91781dedf068679"],["/js/botui.js","b72b5a0de1e7261b7d8c5a4f2913b2bf"],["/js/canvas-clock.js","a80d7e1b302037e23907f1dd88d77d92"],["/js/crash_cheat.js","a39e37337e199565e809bd9dba0120d0"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/typed.js","6a140ffc4bfb252e209d333cba10689e"],["/js/typewriter-color.js","a821ea17301ff809820fc7b8407022c4"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","7c938275bd54840e0615f821b6e556a9"],["/page/2/index.html","af0811a0013bc1aa812e4383e5edaa94"],["/page/3/index.html","883fc78b1504489a97a8b37df19b7861"],["/page/4/index.html","2badf91bdb8540c836f68b0af0cc5c71"],["/page/5/index.html","672f821220632ce643db22ab36d9f257"],["/photos/css/bootstrap.min.css","a4f783edad4b6dcf80068780febb5bf2"],["/photos/css/hero-slider-style.css","babed5fa42278caac7cbd1e9057e1a6b"],["/photos/css/magnific-popup.css","906d6caca794d9756d22bcbf5b426c86"],["/photos/css/tooplate-style.css","3fe0ca492359dd0f19296f7b5402e5a9"],["/photos/font-awesome-4.5.0/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/photos/font-awesome-4.5.0/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/photos/font-awesome-4.5.0/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/photos/font-awesome-4.5.0/fonts/fontawesome-webfont.woff2","db812d8a70a4e88e888744c1c9a27e89"],["/photos/images/gotop.png","e6133f34f47eca3fdd759957c8599dc1"],["/photos/index.html","12d9ed4d0925a1189f92ca8842ef1530"],["/photos/js/bootstrap.min.js","0ca771b2c6d554021dcc1c01cdc77ef6"],["/photos/js/hero-slider-main.js","6329d6e81397fc8c53ad8570b95dd737"],["/photos/js/jquery-1.11.3.min.js","895323ed2f7258af4fae2c738c8aea49"],["/photos/js/jquery.magnific-popup.min.js","743ccc438e10ebe7e1def696d7b0884d"],["/photos/js/tether.min.js","3e50b6f75ff4128f2478b1d44f80fdfb"],["/posts/19c94341.html","073346717495415036b465d5330d6871"],["/posts/2b56997e.html","9b7bc95bd3bb36820f9fb15c35df018c"],["/posts/34469844.html","a3878cc62908b2d0439d1299278b3bcd"],["/posts/358f95d9.html","7be08717c5ece31d27915ff50e26b285"],["/posts/39d47c89.html","0a66b87ab53878862109c9490f30c72f"],["/posts/3e5a3bb6.html","bbdafae004028357669d93edb7e99fae"],["/posts/41567ba6.html","53c0e78f84132971eafb96f51dd2109e"],["/posts/4394a738.html","96f6025791ef0b296d1569c10d3ef7b5"],["/posts/4598d3ed.html","abadd63a0c9fb318b8ffa797f4ad5347"],["/posts/45c03634.html","3b819b50c7f3dd3c062908c52ec29c64"],["/posts/495d0b23.html","3ea373f7653bac41ac07deaa1946d5a4"],["/posts/4fc8b649.html","7e3bb51205d59819de07dd7d54fe446b"],["/posts/5e773fb.html","e607676c6568c8efe809eedd6695b9d4"],["/posts/61913369.html","378b7e65801a992b2270037842a34f3c"],["/posts/69ab28bb.html","a1275b1f9ad140a7538a675511631d8a"],["/posts/78d7e607.html","f32377317e676a1162e22ac9cbd5f3de"],["/posts/7fabafee.html","7fb396ecb1a271b4446330f6b03bc6c6"],["/posts/7fbe9500.html","98e54b662c1fc90218893b0354303abc"],["/posts/89ea6c8b.html","e80822762b1d2915b66be99a761241c9"],["/posts/9b280ea3.html","4a01a103bb283ee0d251cd45e72b22b3"],["/posts/9c9b482b.html","f7dc8a8759c4381333764d8b0b048135"],["/posts/a460b91e.html","97d3879d97b28185cefb198afb19bdb2"],["/posts/a63fb3ae.html","5de5b8fde8be330218ce4e882ff1366e"],["/posts/a7df3b40.html","cde562b2acd9b1d5375d84ebec014060"],["/posts/ab21860c.html","654cc9cca0d89a30d73842596391b7a3"],["/posts/b4831a5e.html","a304a037b166a613ebfd0d18e9e8d750"],["/posts/bf9eba42.html","70890bf0932d2604d3ca075977e2672a"],["/posts/c1cdcf68.html","5cc6553e6feabf39d78fcf278cc76a9f"],["/posts/c4782247.html","df587ea26b365943afafbd1d217f89b8"],["/posts/c9b4cff2.html","1f7746a3ee66cd6c5cf6bda41190d72b"],["/posts/d0bc4f5d.html","db885c1e48a7de80281653b908b5f684"],["/posts/d7399e80.html","693ab585497520cfa9365badbac13c15"],["/posts/dc877e7a.html","cb47f79894d768fb1e3c52ef0aecb9fb"],["/posts/dd9d9f86.html","ea06190fc137874302e3f9ee76fc25fe"],["/posts/dff7e11c.html","4d423cd1cce7fb1ae232e54e462e7bd3"],["/posts/ef31a0a3.html","ddf514575d7b5eb8b757205ad8fe608b"],["/posts/f4a01af3.html","6976867dfc83082d18d8a45192cc9d0b"],["/posts/f68f129b.html","41cac6dc9a089c3edf5fdc8111a3ce0e"],["/posts/faf888d5.html","c39d5210763f35ca73925db01ddf44cd"],["/posts/fc31ea3.html","2453e0a16b17148f369d158f68ae685b"],["/posts/fe5c5e4f.html","7115d733bfad73433c3e5db546b4b64f"],["/resume/css/bootstrap.css","d1b5fe1aafa671fd5dda5c24d25735ce"],["/resume/css/font-awesome.css","c229d5643834f112cbbcb6f06823c50f"],["/resume/css/font.min.css","7c8cecf479042d2705acd2fc648c366e"],["/resume/css/handsome.css","a89b406705eca2ec60ab1f8b560935a1"],["/resume/css/message.css","2fad0a97ec76ac0d96b562f26ddd180c"],["/resume/css/style.css","18d8be04fb6a09655ee3064c060d7a55"],["/resume/css/swipebox.css","03ca184bf573305ba254e48995691380"],["/resume/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/resume/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/resume/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/resume/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/resume/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/resume/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/resume/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/resume/fonts/sourcesanspro/sourcesanspro-bold.woff","1146f3f229f5a3d3c711f0922ea2eb87"],["/resume/fonts/sourcesanspro/sourcesanspro-light.woff","7951903bff82a82e7cde0396dfc9d80c"],["/resume/fonts/sourcesanspro/sourcesanspro.woff","c4f39c8cef7f1746da98c25e82b76f29"],["/resume/images/g1.jpg","e2a28e97dee5ac4f444fc8f1dfa3ba00"],["/resume/images/g2.jpg","1469f42191942f543fb8f391b9d4fb37"],["/resume/images/g3.jpg","8141ced7bca754eb912c094a2682d367"],["/resume/images/g4.jpg","c6a54ad70ffcce48609c9ef253c6a070"],["/resume/images/g5.jpg","db3878193c0289fc8c0c34d69ce74b0f"],["/resume/images/g6.jpg","83e963b52ee99c9f07924cbed9b37063"],["/resume/images/test.jpg","2732b7b3a5c535aee92773a59fd2ddf3"],["/resume/index.html","f8286cbd96629dbcdf4348ae6ce1c010"],["/resume/js/bootstrap.js","9cb0532955cf4d4fb43f792ce0f87227"],["/resume/js/jquery-2.2.3.min.js","33cabfa15c1060aaa3d207c653afb1ee"],["/resume/js/jquery.swipebox.min.js","35ac20b142b2b40bbdb03ea8ff4a9ff4"],["/resume/js/md5.js","6d03025f455869185b57b5c138fd1c01"],["/resume/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/resume/js/skill.bars.jquery.js","fe1be3e502018cd80f941b3cf668adc0"],["/tags/AOP/index.html","f9b845bda30aa53ad8d317b7c3ca4c76"],["/tags/Allatori/index.html","23f50fd56546e22d3fc7534d1146806d"],["/tags/Axios/index.html","bd115f441443a50925698d2ce07e1598"],["/tags/BUG/index.html","445d0d509d08deb49e53f06a9aa7b5b4"],["/tags/Base64/index.html","0064ef6769a773cf0ecbdc443c021801"],["/tags/CentOS/index.html","611c0c402e086808a51d5f4836045322"],["/tags/Coding/index.html","3b288d652e687751bcb2c5d8dee8fd8b"],["/tags/Emoji/index.html","5f77b6765eb43f0393ed278b3955ffe3"],["/tags/Folding容器/index.html","baf46fe1d8d677019c67f776fb1f7c36"],["/tags/Github/index.html","c4ede0759fa189b444db42e1f050f427"],["/tags/Gitlab/index.html","3f646499a20385f517b4e76d46d586c6"],["/tags/Gulp/index.html","b7d153a8943a94167cf594b69bdb161a"],["/tags/Hexo/index.html","736a4d22627c385e7347648897d229ac"],["/tags/Hexo/page/2/index.html","448d672f0d4b8eade77637804d85da5a"],["/tags/Java/index.html","e38fd62894cd5c43e55648ee462ccb4a"],["/tags/Jwt/index.html","e50c4068ebd96a4eabd44b834a9dd924"],["/tags/LocalDateTime/index.html","b1f181a95df6efd4d3b33fef1cf6b85a"],["/tags/MD5/index.html","19fee10fc15150a998514756123d32d0"],["/tags/Neat/index.html","35a60da0e3a14af864d7517a5298d2ca"],["/tags/Nginx/index.html","a452744661b0adcaacbffac53a607384"],["/tags/Password/index.html","b1480ab21c0e31385f679ca98a6e00ee"],["/tags/Photos/index.html","70f1ac724b5bb05d644523493d41e9b8"],["/tags/Rss/index.html","08c51237a9a81639c1e86aee1ce7fe7f"],["/tags/SHA-1/index.html","85c824525c308087b67f9d6926f76372"],["/tags/Security/index.html","1d9ebc1ae5bad64187383b71567cfbb5"],["/tags/SpringBoot/index.html","c44355c946a2ae64b989fc44fdeb4e21"],["/tags/SpringBoot打包/index.html","f9e04a9a39082bc62612e1eaf0f4e825"],["/tags/TravisCI/index.html","e158ab15ac2cd3ae0cf59c4e1cd07922"],["/tags/Valine/index.html","a6a162ba11d511d361c4cd79f9099104"],["/tags/Vue/index.html","e13ba428eaeaf9a918cc7208cf49e097"],["/tags/Vue/page/2/index.html","4c920d5f138cf0f4a34bf0b02046420b"],["/tags/el-date-picker/index.html","7e0dcf26e5bd9eae8a6d325b9d8b7df0"],["/tags/index.html","a738034df3fcd50ea99269943e1441a2"],["/tags/lazyload/index.html","66c2c449bf8400c5ee7544a11175c1cd"],["/tags/nginx-http-flv-module/index.html","fdd42fb9cedf8f84d9edbc16dca4b898"],["/tags/事务/index.html","cae8fb38284bd0f62b616c6c20da54e3"],["/tags/代码块/index.html","2b734375211e15e0cc784053de3157bb"],["/tags/图片/index.html","4d307967d4004b5258ffe0f7a9fd2feb"],["/tags/工具类/index.html","fac0deb628609f65825427fee0c6bcba"],["/tags/点击特效/index.html","5cf4c4861a2e7f15a4f683fb80f844ef"],["/tags/视频流播放/index.html","1ed51fbac52112940e3f4d691dc6ef4b"],["/tags/豆瓣/index.html","b70e5f0c3a20859553ed62bb82740d50"],["/tags/邮件订阅/index.html","8077a7eb27f37fb25ef9a56854384bcb"],["/tools/index.html","d71d103d4902452440a8c705feec581d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




