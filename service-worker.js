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

var precacheConfig = [["/404.html","38539b80967c0e95d8054b56bcd2dcb8"],["/about/index.html","8ae78de1b54b33519311008db4c961ed"],["/archives/2019/10/index.html","21fe398c34ca0034a76c66039ca2161a"],["/archives/2019/11/index.html","44b2d91b881be5ad5b295a39c9633945"],["/archives/2019/11/page/2/index.html","ccfc16b76f49d355a5d16378bf05f973"],["/archives/2019/12/index.html","f21c3b0db330d04e92ee8f5a43ca988a"],["/archives/2019/index.html","7354c1e2f2066909b80b34f9b23d3901"],["/archives/2019/page/2/index.html","0f074b049d30b78de3680c2d6e90e517"],["/archives/2020/01/index.html","df25fae888311eaaa5bcc9f551c0cb46"],["/archives/2020/02/index.html","ef010ac34ecf146fb6e3ccb9aa285776"],["/archives/2020/03/index.html","e96bd675218e0ab2f74049017510699e"],["/archives/2020/04/index.html","824fd2457aebb980e5235c25a64077b8"],["/archives/2020/05/index.html","72ab633ab46532d4858580a34fe870ac"],["/archives/2020/07/index.html","f0c48adfe317a4bca9e951b3a3ca7cbf"],["/archives/2020/index.html","33ed92542d3f1aa672ad7a6d3455b502"],["/archives/2020/page/2/index.html","33cf1e509b41dc2b61881de8bdf59932"],["/archives/2020/page/3/index.html","014c7a74d6574b2fc5fe6125e15b4b97"],["/archives/index.html","a78566f79f0847da8382fd022668983b"],["/archives/page/2/index.html","616b0999d598fb0d75da4f29f5508039"],["/archives/page/3/index.html","616b0999d598fb0d75da4f29f5508039"],["/archives/page/4/index.html","616b0999d598fb0d75da4f29f5508039"],["/archives/page/5/index.html","616b0999d598fb0d75da4f29f5508039"],["/catchTheCat/index.html","daa63b0dd7e8c9bb7aee1f96066b7747"],["/categories/BUG/index.html","7f22314520c5a3ef0ecca0d5ff483638"],["/categories/Gitlab/index.html","de0ec56ec2d19d14f338e93b06413875"],["/categories/Hexo/index.html","8ba4f3e6bcfee35bdb05e33b231c5dc3"],["/categories/Hexo/page/2/index.html","19035cd3b48ca4c0a5a5d45550847dd1"],["/categories/Java/index.html","536d74cf05ef0715a03892bf5526c59a"],["/categories/Nginx/index.html","64309f3281d4d926edfd04e12998e3a2"],["/categories/SpringBoot/index.html","1523c223d7ae1961052966fc78a47c51"],["/categories/Vue/index.html","b0440dc07f898c5f573cad3ceca7455c"],["/categories/Vue/page/2/index.html","81dcdbf67b3ff9abd749af0ccd76a29b"],["/categories/index.html","71074a7289b400765929c0db5665ada3"],["/categories/事务/index.html","d2861d052743194f0181050d403f8908"],["/categories/加密安全/index.html","771892bff44f448a82e19b54741669f9"],["/categories/流媒体服务/index.html","b2562c22b57ead93c771201fc1b17b6b"],["/comments/index.html","af49b91944a6d37cd4390058e35580e1"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/botui-theme-default.css","ffa878cd95d42389e380e24159ecd571"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/message.css","763a64802543f4a7c3c453925c716e78"],["/css/style.css","a5d88a2f5ff211e8c0e8aa58e0101aa4"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","1ca9212f62beccaac65742d68a837c51"],["/js/DigitalRain.js","b6e0145f236bcbda8665ad74827b74fc"],["/js/app.js","6d52dda29df9fe9765db75431c9be2f8"],["/js/botui-message.js","8aed2648d9ae4616e91781dedf068679"],["/js/botui.js","b72b5a0de1e7261b7d8c5a4f2913b2bf"],["/js/canvas-clock.js","a80d7e1b302037e23907f1dd88d77d92"],["/js/crash_cheat.js","874c4f5bbe76d790ca9a2caebff31ad2"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/typed.js","6a140ffc4bfb252e209d333cba10689e"],["/js/typewriter-color.js","a821ea17301ff809820fc7b8407022c4"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","27c639f648965accc029ad4fc098d50d"],["/page/2/index.html","558f57f07eb0d2d3c1d6b6f59b26b1dd"],["/page/3/index.html","a16ab12956c685e2627a7362d8c8929e"],["/page/4/index.html","5c6ee9882254fce522090e25cd6939ec"],["/page/5/index.html","d6ef24ed5ffafc13d68e574faa5b73b6"],["/photos/index.html","756b814bffbda5d7a4b985bd86a7b357"],["/posts/19c94341.html","a2f4273f8e786b6b0d5507c45253ff2c"],["/posts/2b56997e.html","aa98918e51e8dc26e3a713a3238d7cfb"],["/posts/34469844.html","e4cb59ec16ae001ad8e0d04f2b4f7f89"],["/posts/358f95d9.html","49dbbd5752b4e4e30a4ef66083a9f921"],["/posts/39d47c89.html","9ac75df50fbe291271e533aed835a0b3"],["/posts/3e5a3bb6.html","bc8a987fa5eafe41de4de7b9dd17bbd8"],["/posts/41567ba6.html","eea30bc44773c2ec9eb1eb103b5123d2"],["/posts/4394a738.html","5aab3f26300f1a769fa9cdaa46f4a0e7"],["/posts/4598d3ed.html","711ebe69e5a394d5e602a88d076d0655"],["/posts/45c03634.html","4e2c569f266e4116224c13bed2db486b"],["/posts/495d0b23.html","98cd686314ba9cd8763a9caa7f7ea136"],["/posts/4fc8b649.html","3c82a99c729bd5bdd85ea5f1fcddee62"],["/posts/5e773fb.html","0dcfe36cb08d26bf7ac195ee14d17057"],["/posts/61913369.html","175e58679b4a07f71433c35a69bd5d2b"],["/posts/69ab28bb.html","8a74df89aff81cfea0c057cdd7e7c4b2"],["/posts/7fabafee.html","3ecbd9a10d772047d1b900ab61992e78"],["/posts/7fbe9500.html","eb13d6ec213c307b64765e5b13a4d30d"],["/posts/89ea6c8b.html","80196a86266668cdf42bd286a8e63c2c"],["/posts/9b280ea3.html","b3714825cab580a15a95852029de91e3"],["/posts/9c9b482b.html","cf2a0d8889b6b7b88e31aab4bad0a626"],["/posts/a460b91e.html","2783d97bf277fc1b5b49ac30dcd1ed1a"],["/posts/a63fb3ae.html","181e3696cf6fa559b7ca8e83784947ba"],["/posts/a7df3b40.html","534f5ac6ef5d349c4de1982267bd0685"],["/posts/ab21860c.html","1026842c8edf8aaef4a7088999aa0c2d"],["/posts/b4831a5e.html","f1a603319bf855c2bc4f1a1d006d5373"],["/posts/bf9eba42.html","f9624fcced307ff051d806ac916b414c"],["/posts/c1cdcf68.html","ed3343c10620f325592c579246e46464"],["/posts/c4782247.html","4711124f242d772050ab463adc85f7ba"],["/posts/c9b4cff2.html","ff6000e59fa1368f6a5aa9ed3a6e6311"],["/posts/d0bc4f5d.html","54c117a9800bb13169794b75a9df729e"],["/posts/d7399e80.html","e970228dd72425b1f3ffc55af5e06047"],["/posts/dc877e7a.html","0735c5a7ba7fc3ba1b6936eb07f05aa7"],["/posts/dd9d9f86.html","76bf59cb9b0d6eafd0218ffc35b455a4"],["/posts/dff7e11c.html","bdb140866b23aaab79db9d9d32b9da01"],["/posts/e1b9c6c5.html","ce56897d5113064e405f49209df6bf3d"],["/posts/ef31a0a3.html","1bd2eb8ef2cd2a79fb73d982a76f3772"],["/posts/f4a01af3.html","dad7b3e0880527c38eaae4c6d92b1b08"],["/posts/f68f129b.html","39bf7a6f5f2baad222f35371466d9051"],["/posts/faf888d5.html","f2d4d5f5e2fb0b4d3f2dcbdb85ca95a0"],["/posts/fc31ea3.html","114813218ccec644eca6d3c0b1d722b2"],["/posts/fe5c5e4f.html","436ee3eac886ef63ea6ad860e017c8e8"],["/resume/css/bootstrap.css","b9cecc151557dae6a71a97f6ed2b6b68"],["/resume/css/font-awesome.css","e1b186a6fcbccf14aab4674c1e4a2e5a"],["/resume/css/font.min.css","7c8cecf479042d2705acd2fc648c366e"],["/resume/css/handsome.css","effc6754ef2eba97070ff5734779e6fa"],["/resume/css/message.css","763a64802543f4a7c3c453925c716e78"],["/resume/css/style.css","27e279bebbe943e8d33c15b281ea4e96"],["/resume/css/swipebox.css","380627f81bdf8121f118038023bda23e"],["/resume/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/resume/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/resume/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/resume/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/resume/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/resume/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/resume/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/resume/fonts/sourcesanspro/sourcesanspro-bold.woff","1146f3f229f5a3d3c711f0922ea2eb87"],["/resume/fonts/sourcesanspro/sourcesanspro-light.woff","7951903bff82a82e7cde0396dfc9d80c"],["/resume/fonts/sourcesanspro/sourcesanspro.woff","c4f39c8cef7f1746da98c25e82b76f29"],["/resume/images/favicon.png","3c73ba24b72390dbeea983d47154962b"],["/resume/images/note.jpg","2732b7b3a5c535aee92773a59fd2ddf3"],["/resume/index.html","0e155fd08bb52773e8ec7d40231591ce"],["/resume/js/bootstrap.js","9cb0532955cf4d4fb43f792ce0f87227"],["/resume/js/jquery-2.2.3.min.js","33cabfa15c1060aaa3d207c653afb1ee"],["/resume/js/jquery.swipebox.min.js","35ac20b142b2b40bbdb03ea8ff4a9ff4"],["/resume/js/md5.js","6d03025f455869185b57b5c138fd1c01"],["/resume/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/resume/js/skill.bars.jquery.js","fe1be3e502018cd80f941b3cf668adc0"],["/tags/AOP/index.html","b70f896697b8251d500b82d9ff168428"],["/tags/Allatori/index.html","4212ba009e6ffe166c2aa9918c9b0fc0"],["/tags/Axios/index.html","df4d9006ae7654d4e69b43939b998b67"],["/tags/BUG/index.html","5f17cb07dfd45e8540d20b83419b6499"],["/tags/Base64/index.html","75fe5573860f1e82152aeeb70b5db9ec"],["/tags/CentOS/index.html","d206f8cdcc5e2423d349657d11a09ead"],["/tags/Coding/index.html","1cb14a044a84842efebc65c28c2b6ae3"],["/tags/Emoji/index.html","8f80a9abe8b29cc1c412edced1adc0f5"],["/tags/Folding容器/index.html","7d53b7b3a61d8d24faadee0d11cfb635"],["/tags/Github/index.html","1892cc3799d86eefd4f0a6f3451792bb"],["/tags/Gitlab/index.html","c69d702a62e67186f718047c88f47c3f"],["/tags/Gulp/index.html","a8efdf9deb4f0b07bf20404bf78bd051"],["/tags/Hexo/index.html","5cf12b8b6e271a4f88aaede6bcdc75ba"],["/tags/Hexo/page/2/index.html","37090005851ed096e2920defc38cd84f"],["/tags/Java/index.html","d8bf6820131263a707e3035b4bdc6585"],["/tags/Jwt/index.html","281033958eaa365b9eb8482f3ab19c87"],["/tags/LocalDateTime/index.html","d0dc6d7f2fc2856fd82c6e58076003ea"],["/tags/MD5/index.html","76feeb66382152a8d9c630f89cd685a0"],["/tags/Neat/index.html","9f730906f7d03750b8dfa3bbeae34c5c"],["/tags/Nginx/index.html","b7bcb6a0a6f759aaa08e441fbd1a7aeb"],["/tags/Password/index.html","393f815df4217ce0c92fbf43c4385263"],["/tags/Photos/index.html","00890958dc7d104b3400ee5c702448a9"],["/tags/Rss/index.html","29df376d80ad4b7ac2225e02c0605c1b"],["/tags/SHA-1/index.html","950672ee0585799a1d64e3550015af9e"],["/tags/Security/index.html","16b2390fd457dadaadb615368b064599"],["/tags/SpringBoot/index.html","e04b6256dd403d01fc4dcd189614e2cc"],["/tags/SpringBoot打包/index.html","30db1c9386308cc21d0a4a1db999fd12"],["/tags/TravisCI/index.html","5040fced0c341e3b4bd03d947847655e"],["/tags/Valine/index.html","5984a7097caf6eb34d334c88df645150"],["/tags/Vue/index.html","33adf46452762ef8b96888791705229e"],["/tags/Vue/page/2/index.html","df463a02660d561876834db3356997bb"],["/tags/el-date-picker/index.html","2029338d7bedbddf50e406bbd24c01ac"],["/tags/index.html","a73d244d4f2aa9e96313eed4e3caae40"],["/tags/lazyload/index.html","97aa805e402180fd2a6a539a4a9a2087"],["/tags/nginx-http-flv-module/index.html","71922a73489b4ab8aa79375ad8d2f60e"],["/tags/事务/index.html","9705d53727f367f301fabafc9fc29423"],["/tags/代码块/index.html","f125605cf2ea4417bdbe1fa245ae161b"],["/tags/图片/index.html","6cf2b57e90beb71b6d21a945edd2f965"],["/tags/工具类/index.html","6ec784e7d806dd797f62fd98c91e1f02"],["/tags/点击特效/index.html","1f2226456a254e180a5a4c838d993a2c"],["/tags/视频流播放/index.html","22c065563495b5af7cf35ee50f7ef280"],["/tags/豆瓣/index.html","849dbbd24a54e8fc1353743a8a382eb0"],["/tags/邮件订阅/index.html","79cfa622c53ab61a0bf01028ef96a0f3"],["/tools/index.html","033ef611e573b800267fbb81136c3399"]];
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




