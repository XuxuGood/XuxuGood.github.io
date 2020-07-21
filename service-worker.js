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

var precacheConfig = [["/404.html","6181e8f2c4af9e78a17d86a052d3260c"],["/about/index.html","1823cad9455fe6c8122961ed28c9968b"],["/archives/2019/10/index.html","964999d17fd689b6a456a91777836c5e"],["/archives/2019/11/index.html","0f12cf38377b39d157e2832f9f2c3d0c"],["/archives/2019/11/page/2/index.html","e359856bd3d1fd7ebde76d1d0fa94d29"],["/archives/2019/12/index.html","9f58dc64fab8c49b003152b22540e9b1"],["/archives/2019/index.html","2b19506796ec1926203cd1f978a517c0"],["/archives/2019/page/2/index.html","bc21d40fadc4348936401a3c1de3d251"],["/archives/2020/01/index.html","e679ccea6b8415db089158840e5b5186"],["/archives/2020/02/index.html","d8a1914524efa128457feb5f0c8fdd1f"],["/archives/2020/03/index.html","45a910004284b74fb3c92c7e7d65ed72"],["/archives/2020/04/index.html","9784e8bcf74a879d8bb8a7c07f87f8e0"],["/archives/2020/05/index.html","50079bbcd887d84c83c6c3ec49195e42"],["/archives/2020/07/index.html","7bbdbb7cd7009dce783889b34f61cd3a"],["/archives/2020/index.html","06b123b187562918075db712f5f4310e"],["/archives/2020/page/2/index.html","998884998d5001d7068ab228bd0caa78"],["/archives/2020/page/3/index.html","1f8b89e0ccbd3aa4434f174a2cf7ef96"],["/archives/index.html","40469889ffe60a331d8ff2c37962a11f"],["/archives/page/2/index.html","40469889ffe60a331d8ff2c37962a11f"],["/archives/page/3/index.html","40469889ffe60a331d8ff2c37962a11f"],["/archives/page/4/index.html","40469889ffe60a331d8ff2c37962a11f"],["/archives/page/5/index.html","485c16bd424467baa6d96372ca150475"],["/categories/BUG/index.html","21f9833d05ce16f76e8611c9a3344be7"],["/categories/Gitlab/index.html","71f91ebe17852bf5a6634297b96f53c2"],["/categories/Hexo/index.html","0361017254653ab5dd9cf0625b5e7eaf"],["/categories/Hexo/page/2/index.html","7c88b3abfe437634a85d7c81cf224a6a"],["/categories/Java/index.html","4adad4ab4bdbbaec5701dbfce11e00d1"],["/categories/Nginx/index.html","daac0cfba08c6724f297a42a82d0655a"],["/categories/SpringBoot/index.html","763fc7c50bc55f8e112943c34add814a"],["/categories/Vue/index.html","6b699c3fc8c329c42eda59001454b801"],["/categories/Vue/page/2/index.html","6b84217c138acaa96d857a3f93bd00d4"],["/categories/index.html","221c1dded638bfd02819b2d324d36caf"],["/categories/事务/index.html","eebd58e3d40311da1f0563821f9ba2cd"],["/categories/加密安全/index.html","fdcaf472813ef137aa3bd580e49e16ee"],["/categories/流媒体服务/index.html","fcf4d5ca77596a7b1bbed899896c029b"],["/comments/index.html","d069796362b4c394255dcecd42c51fb4"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/botui-theme-default.css","eb6456d80969d9ee06de92d5cd1913e9"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/message.css","9bba8ea2992fc7b1d48b0f840b644ba8"],["/css/style.css","c5256c6c6f6d4ae211837dfdc3c0b59b"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","196f1370d7742aa92172ecbf248b5bd8"],["/js/DigitalRain.js","b6e0145f236bcbda8665ad74827b74fc"],["/js/app.js","6d52dda29df9fe9765db75431c9be2f8"],["/js/botui-message.js","8aed2648d9ae4616e91781dedf068679"],["/js/botui.js","b72b5a0de1e7261b7d8c5a4f2913b2bf"],["/js/canvas-clock.js","a80d7e1b302037e23907f1dd88d77d92"],["/js/crash_cheat.js","454c79dba914aa6694534c42bac2e3d3"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/typed.js","6a140ffc4bfb252e209d333cba10689e"],["/js/typewriter-color.js","a821ea17301ff809820fc7b8407022c4"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","4258c047e2b7c63d7f1656cd074efe02"],["/page/2/index.html","0a00aec1b40b219262be63f7e4ef1e55"],["/page/3/index.html","7c7ef110958f9f3c59ec3d450f63cf73"],["/page/4/index.html","9faeb897e81d56c4eed9653ed59262f6"],["/page/5/index.html","4ecbc11a174b6d2bd6de9b5e006ae913"],["/photos/css/bootstrap.min.css","a4f783edad4b6dcf80068780febb5bf2"],["/photos/css/hero-slider-style.css","4033978b980d480930c6654e64537c4f"],["/photos/css/magnific-popup.css","77b0b98765d247834aefde641600c49a"],["/photos/css/tooplate-style.css","b5da1c23233b914353acd89764c4e113"],["/photos/font-awesome-4.5.0/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/photos/font-awesome-4.5.0/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/photos/font-awesome-4.5.0/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/photos/font-awesome-4.5.0/fonts/fontawesome-webfont.woff2","db812d8a70a4e88e888744c1c9a27e89"],["/photos/images/gotop.png","e6133f34f47eca3fdd759957c8599dc1"],["/photos/index.html","12d9ed4d0925a1189f92ca8842ef1530"],["/photos/js/bootstrap.min.js","0ca771b2c6d554021dcc1c01cdc77ef6"],["/photos/js/hero-slider-main.js","6329d6e81397fc8c53ad8570b95dd737"],["/photos/js/jquery-1.11.3.min.js","895323ed2f7258af4fae2c738c8aea49"],["/photos/js/jquery.magnific-popup.min.js","743ccc438e10ebe7e1def696d7b0884d"],["/photos/js/tether.min.js","3e50b6f75ff4128f2478b1d44f80fdfb"],["/posts/19c94341.html","e118e1cc4c1d2dd0a0162f2777adc783"],["/posts/2b56997e.html","d3c6f94c906f99ac601ccdbce88dbb9d"],["/posts/34469844.html","25d6221ceae6413c39b77838dc473a25"],["/posts/358f95d9.html","cd6bf7be31c572cc3d09ddde55a677c6"],["/posts/39d47c89.html","06885203215e5171d4ffeac8f877b4a8"],["/posts/3e5a3bb6.html","888c70e5ce75c4e0712687ad0e3b276c"],["/posts/41567ba6.html","a57aee6e9a164453fc187fdf46b2f780"],["/posts/4394a738.html","254825b9a3f57cac3c006f181620cf49"],["/posts/4598d3ed.html","8a1349fd63bc530276a371f45d5f5400"],["/posts/45c03634.html","88728ef853be8ad148c26cdfdcd2abcc"],["/posts/495d0b23.html","df6df176cf193b92b74a5afac036f87a"],["/posts/4fc8b649.html","dedfd0e66d6a125197e97120cf8b795e"],["/posts/5e773fb.html","bf11012b602b762a32f12f1287259816"],["/posts/61913369.html","c87de84a3b3bf605c97093f0880cf532"],["/posts/69ab28bb.html","2e2db2f5beef00e4aea65517f12a2634"],["/posts/78d7e607.html","24d3080b67ff3df8722113bfabceb7d1"],["/posts/7fabafee.html","e7854f1dc82365aba22c397d37442e80"],["/posts/7fbe9500.html","6b169fa9d391e3e7012725ff1e24052a"],["/posts/89ea6c8b.html","8ee4e37ef484bc12a08c975aa887f71b"],["/posts/9b280ea3.html","6fb4a3709645b3a4c03c3a69b2e8ed13"],["/posts/9c9b482b.html","c445f7f8517f23a4b50b76601b3ca5a1"],["/posts/a460b91e.html","72eed21ee85f4f61ddaa10ca02ac1182"],["/posts/a63fb3ae.html","73aa36ea8e85ea9fe2aaf17b7f90448d"],["/posts/a7df3b40.html","efe2d6ce68fdd624deeb893959360dd1"],["/posts/ab21860c.html","79a6b2ab0e641dbb8ac14989c5fa5f51"],["/posts/b4831a5e.html","2d1c4cf03435c6ba84bd54b4204610e4"],["/posts/bf9eba42.html","7a1b691351ff2883907f922ffd253a35"],["/posts/c1cdcf68.html","c20c92398cdc055e050d3949b805e3c5"],["/posts/c4782247.html","97a6b7142acd5513486ea6d319fddcdd"],["/posts/c9b4cff2.html","cf0ebc43277ed719aa3fc0e9ca6644a9"],["/posts/d0bc4f5d.html","5ec0ebefbc41bd0e8c68c99d3952b676"],["/posts/d7399e80.html","f6047a703dd4615acc98bd2e7669c5ee"],["/posts/dc877e7a.html","f34127983e03b45364543043db52b3d3"],["/posts/dd9d9f86.html","25d70ca67f43258ded91f3c02f796a9f"],["/posts/dff7e11c.html","3b68ec6ebbfa18c4b0b2ef22df8b21bd"],["/posts/ef31a0a3.html","6926402ebfc44bee2e26f6c02884ebb3"],["/posts/f4a01af3.html","990b367335b94e7923364551c81d5692"],["/posts/f68f129b.html","312ce9150f76703f92c9b8908caf507c"],["/posts/faf888d5.html","f7c5bf0c597383f6d4878a9a56cd5e98"],["/posts/fc31ea3.html","ec20ca80af285b0b7837ebcbeffec0b2"],["/posts/fe5c5e4f.html","d2355c4971b1daca2e9ce857013124e1"],["/resume/css/bootstrap.css","ef6b9d9c6ef12133d2712610ca82f2e0"],["/resume/css/font-awesome.css","3b52de1e06f1fdb25fafc5643a4affc6"],["/resume/css/font.min.css","7c8cecf479042d2705acd2fc648c366e"],["/resume/css/handsome.css","f4849ae6d23c09f2a04470cf4c91aae4"],["/resume/css/message.css","9bba8ea2992fc7b1d48b0f840b644ba8"],["/resume/css/style.css","2a2d15bb45c552b1750049b7ca3ff8ea"],["/resume/css/swipebox.css","77ba1a67c169176ad25132f0f66db6e5"],["/resume/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/resume/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/resume/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/resume/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/resume/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/resume/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/resume/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/resume/fonts/sourcesanspro/sourcesanspro-bold.woff","1146f3f229f5a3d3c711f0922ea2eb87"],["/resume/fonts/sourcesanspro/sourcesanspro-light.woff","7951903bff82a82e7cde0396dfc9d80c"],["/resume/fonts/sourcesanspro/sourcesanspro.woff","c4f39c8cef7f1746da98c25e82b76f29"],["/resume/images/note.jpg","2732b7b3a5c535aee92773a59fd2ddf3"],["/resume/index.html","8077353d2396aace9e2fbdbe86fb43c2"],["/resume/js/bootstrap.js","9cb0532955cf4d4fb43f792ce0f87227"],["/resume/js/jquery-2.2.3.min.js","33cabfa15c1060aaa3d207c653afb1ee"],["/resume/js/jquery.swipebox.min.js","35ac20b142b2b40bbdb03ea8ff4a9ff4"],["/resume/js/md5.js","6d03025f455869185b57b5c138fd1c01"],["/resume/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/resume/js/skill.bars.jquery.js","fe1be3e502018cd80f941b3cf668adc0"],["/tags/AOP/index.html","22bdaf056031f972a7092dadf1a0a0ec"],["/tags/Allatori/index.html","da0c194f9eef408342b81aa1f2bbfff4"],["/tags/Axios/index.html","36e0fd56a68477f5f9213cf8806d5289"],["/tags/BUG/index.html","c0a6b81e57fad31e208af50de8d6c52f"],["/tags/Base64/index.html","79799ff4f85451c27b0a80b69c0c98dd"],["/tags/CentOS/index.html","b3f0b9ab6f4e315019c50c1e03d0372f"],["/tags/Coding/index.html","0dcdd2debc82006338f37b102d9835c9"],["/tags/Emoji/index.html","4fe3d2bc7daa190acad1b64f803f98fe"],["/tags/Folding容器/index.html","31ba0097314f0729db2a3c5a7beb0af1"],["/tags/Github/index.html","b3004fb4fceea6ea00ade3e6185256b9"],["/tags/Gitlab/index.html","d7616f9d2afde0aab956f5c0c7b8351f"],["/tags/Gulp/index.html","b3862722c433bfa07680c3468e7da933"],["/tags/Hexo/index.html","9984a2714df81dd014bfa5a89ea09b89"],["/tags/Hexo/page/2/index.html","6cbbd4a40ec7d8575fd9e6edf7c0ee7e"],["/tags/Java/index.html","40e1782df719c3bb6755cc70dd27605d"],["/tags/Jwt/index.html","581e583767b51abbdc0fb9b14be5e994"],["/tags/LocalDateTime/index.html","d1148a9be2683b85a3268a9655422bdc"],["/tags/MD5/index.html","15355a519d237ca691daf083b5a44584"],["/tags/Neat/index.html","895d7a2dab226372af1af903e75a851f"],["/tags/Nginx/index.html","45737245e479326a1a2d49f247d8c815"],["/tags/Password/index.html","ba5d2417b9134d2094b61ea4bb9cba06"],["/tags/Photos/index.html","d83a2fbe3751cf955d5e16c1bac4ac6b"],["/tags/Rss/index.html","0a80af03d4becc149a7ced9ea02e24e4"],["/tags/SHA-1/index.html","1721ef075b1031bdcfa376f4620f1b5c"],["/tags/Security/index.html","4a461f1af2fb31b359cbbae376684705"],["/tags/SpringBoot/index.html","b93cd27b038353cd917b7f8221aee83d"],["/tags/SpringBoot打包/index.html","412a11c6ca7ead5cd499460ef640203b"],["/tags/TravisCI/index.html","01c8bf46782ec297df1735820b910331"],["/tags/Valine/index.html","ba2809b643a1f9ba3a8d1b421f26e7bd"],["/tags/Vue/index.html","1921a2cc789ae295104dd4260a05c16c"],["/tags/Vue/page/2/index.html","668f41e94b1f74944ad80064ee106e4f"],["/tags/el-date-picker/index.html","4622996f02a6236b4fe55f9151204581"],["/tags/index.html","f0a5749c59d8641216aa4116d9e75fdb"],["/tags/lazyload/index.html","375967c614ccf9908793f803514636df"],["/tags/nginx-http-flv-module/index.html","0584df15c88457df04bf72c0596d3f96"],["/tags/事务/index.html","a5626506b19ee1ddf311efd8b72e443e"],["/tags/代码块/index.html","bc6fac6364a51db4e1576276fd4ac943"],["/tags/图片/index.html","dd1958523927370d0626418f20deea70"],["/tags/工具类/index.html","643f16f140881fec64a1ed579427c3c3"],["/tags/点击特效/index.html","e5596a346e1319248f22a0152bca476e"],["/tags/视频流播放/index.html","d0ea29e6812cd8e7f7dfd9d6035d174d"],["/tags/豆瓣/index.html","9692bb54f2dd11184dcc37a3224bfa8b"],["/tags/邮件订阅/index.html","afc1eb9f16403ce39a5867c2dbd5d231"],["/tools/index.html","2a285a32e3dcb8854b5399952816b0c6"]];
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




