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

var precacheConfig = [["/404.html","3dbbc8e1f20ddac819aa2e1f75dd7ee8"],["/about/index.html","0072a410ed4e2155a6c99317fe98a7d6"],["/archives/2019/10/index.html","d9f1862efa803a2cba266a7b7a8efa8a"],["/archives/2019/11/index.html","fda8f2c812441d6c92ff8074ea08bb55"],["/archives/2019/11/page/2/index.html","fa0a23ce81b6dd87493298d2b7b2d9c9"],["/archives/2019/12/index.html","9c01d05f80cc02048956af8d7f1e3cae"],["/archives/2019/index.html","c4f2531ee53f7f94f7da6a935848bbd4"],["/archives/2019/page/2/index.html","ee82446cdf39e2c7619fcee0b5464ff0"],["/archives/2020/01/index.html","8bde6fb88b91294cecd9da3a555ae670"],["/archives/2020/02/index.html","17cce91cbfcf7df479f35cd07e254c51"],["/archives/2020/03/index.html","633fdf8f7680b053cc2381e4970a505f"],["/archives/2020/04/index.html","7f6cf72434b33b9c95d6a65d00b298dc"],["/archives/2020/05/index.html","56968d7789378287870349276818633f"],["/archives/2020/07/index.html","acd7cf3f4504d1dc91f8322570b1d4ba"],["/archives/2020/index.html","08013ad84055d97288d57cd3bfae2154"],["/archives/2020/page/2/index.html","e6bd8a55401d88da5c6260011e2a580d"],["/archives/2020/page/3/index.html","010bb71730bd6333475349b1ee909f59"],["/archives/index.html","9bd35c8724a3497edf71846006dcdac5"],["/archives/page/2/index.html","9bd35c8724a3497edf71846006dcdac5"],["/archives/page/3/index.html","a37d678d8136455ef8669baac009210b"],["/archives/page/4/index.html","a37d678d8136455ef8669baac009210b"],["/archives/page/5/index.html","a37d678d8136455ef8669baac009210b"],["/catchTheCat/index.html","fb98e33847fd544a8138975465109b1f"],["/categories/BUG/index.html","e531959bf9cb94bf05200f33c1135715"],["/categories/Gitlab/index.html","3f8b22870ca4963cb91996e34755e138"],["/categories/Hexo/index.html","d80fa17bb5e3ca12eced01094705b18e"],["/categories/Hexo/page/2/index.html","4361b7b40bb6396d806699a303072051"],["/categories/Java/index.html","7dfc9a90794dd105d1c9d563d730d3eb"],["/categories/Nginx/index.html","bdd26783cf968e19d86a8a3253e92409"],["/categories/SpringBoot/index.html","815d3fb5c47ced7a53efca7cb4f1505f"],["/categories/Vue/index.html","23cea292c0814945ef85e70a23836b12"],["/categories/Vue/page/2/index.html","aed6663808f474aa21c11f9fcb392384"],["/categories/index.html","5d3cf2c74fe05f0fadea3e385a82aa29"],["/categories/事务/index.html","ec779d4d39cf843afb673c9175d5ec49"],["/categories/加密安全/index.html","e508629d31c5d39f1ded1aecf34b4aeb"],["/categories/流媒体服务/index.html","55ba600f8bdfffbbfdb41d02bad27c97"],["/comments/index.html","05ed8c2cfd87e56016c16f19c8fcbe86"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/botui-theme-default.css","c1ab39ba1d08861d7de700ff9982f05e"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/message.css","a210dbffac4444f5ad5ce4d78f72a593"],["/css/style.css","bb45c22e985f4a7afd0d59d60af8ed02"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","f609ae1e24a4df445c1154041e571783"],["/js/DigitalRain.js","b6e0145f236bcbda8665ad74827b74fc"],["/js/app.js","6d52dda29df9fe9765db75431c9be2f8"],["/js/botui-message.js","8aed2648d9ae4616e91781dedf068679"],["/js/botui.js","b72b5a0de1e7261b7d8c5a4f2913b2bf"],["/js/canvas-clock.js","a80d7e1b302037e23907f1dd88d77d92"],["/js/crash_cheat.js","874c4f5bbe76d790ca9a2caebff31ad2"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/typed.js","6a140ffc4bfb252e209d333cba10689e"],["/js/typewriter-color.js","a821ea17301ff809820fc7b8407022c4"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","6ec5e066f36b08d3e71a55c0422662b1"],["/page/2/index.html","25b168f8029bc87780ae67123d9ce2f2"],["/page/3/index.html","beb2a9363ddeef0323446c9083f16165"],["/page/4/index.html","82447a58c15097ef5f51688b003d0b18"],["/page/5/index.html","7c63fdc02a0c4059538218c161a925da"],["/photos/index.html","57a5cddb0834e9ea833c6a97ce1a6c87"],["/posts/19c94341.html","22cebca0fa2ef3b7818fdc1b6f4bc279"],["/posts/2b56997e.html","245974f8b66fc8f2316018ec54a6d59c"],["/posts/34469844.html","70ffc19d0dc3a56f14021e0807848153"],["/posts/358f95d9.html","21b24bafa43b3e9cc737762c07531473"],["/posts/39d47c89.html","814c0908a1bee89015dbbbe2cde8348e"],["/posts/3e5a3bb6.html","f1953b143226b54860aaae52329679ab"],["/posts/41567ba6.html","87739f1f156168271ce382e7e763a36b"],["/posts/4394a738.html","323c6aeb297fa8b216e799f05824eba0"],["/posts/4598d3ed.html","f04cfc0f51c9cbb9567e603b9c50e1cd"],["/posts/45c03634.html","a69d6068552ea013c73dcfc4a9d41628"],["/posts/495d0b23.html","e9122ca6fb5f90528ec9b17e7543e468"],["/posts/4fc8b649.html","6b41b88f1356ec3c349e7995d930920c"],["/posts/5e773fb.html","39220a5586afb739971c4491b6dd7e50"],["/posts/61913369.html","fcb74887c3af91a1cd90e61e05340f4f"],["/posts/69ab28bb.html","f930f764e619131bb45844a218217d41"],["/posts/7fabafee.html","6830fd90370a474b2a9be6b8c5348636"],["/posts/7fbe9500.html","5dad23e7963afd1087955367b16a056a"],["/posts/89ea6c8b.html","36ecad4ddf02dc2e099f6e5c90d575e8"],["/posts/9b280ea3.html","a766d2b5baa74de3a3a73b02299f6a4d"],["/posts/9c9b482b.html","2d1d8689d64349c444723d58ec7ec2d7"],["/posts/a460b91e.html","40b8ef0adfb05c59d850d19bb26bf7e0"],["/posts/a63fb3ae.html","2d202831beaec8f15675b05193aeee3f"],["/posts/a7df3b40.html","4b0274f71eee936c2475273959569665"],["/posts/ab21860c.html","82fc85ecfccd86da1e726671bee83442"],["/posts/b4831a5e.html","7df83fdaecdbc1d1a70fa840cee15215"],["/posts/bf9eba42.html","3019b4b5d7fa5591f8d0354bb2acdce3"],["/posts/c1cdcf68.html","a9a531802b875a5f2c9abb61fbf50ba9"],["/posts/c4782247.html","c99057a844ee88dd3ce85e7a99e1660e"],["/posts/c9b4cff2.html","dabd7576f3a110e8d2272b17d5750c48"],["/posts/d0bc4f5d.html","27d5a8e1dca5789e263d2e8a681f5548"],["/posts/d7399e80.html","04ec133323d745021e7983c616704a61"],["/posts/dc877e7a.html","27295f108cc26270a4f9696831aa7294"],["/posts/dd9d9f86.html","6a72c904c4ef78e82fd956b3cd43961c"],["/posts/dff7e11c.html","df60e68299f2f388ba7a29623538f7df"],["/posts/e1b9c6c5.html","24c16d5eadd97bbd2eba12aa00f163de"],["/posts/ef31a0a3.html","80403cccc4e082e263369aff08f046b4"],["/posts/f4a01af3.html","3cd922c3c0a14724a0ed54502ebdf314"],["/posts/f68f129b.html","fa0b44cc8a8313097a692641dbdac123"],["/posts/faf888d5.html","b7cdeeafd84b3748329200ba2686f0f0"],["/posts/fc31ea3.html","5dd01bf79f290722d2866dc7984b6483"],["/posts/fe5c5e4f.html","e54f0ad0bf094b90508fda2f2a0c2dfa"],["/resume/css/bootstrap.css","8fafb5534cd8a24b995171a08e8e462f"],["/resume/css/font-awesome.css","8412bc9981648b79622677bd0f274d00"],["/resume/css/font.min.css","7c8cecf479042d2705acd2fc648c366e"],["/resume/css/handsome.css","4a405a8df859a04bb12a7710be40fc93"],["/resume/css/message.css","a210dbffac4444f5ad5ce4d78f72a593"],["/resume/css/style.css","1684a524b5e7224a3151281965430a97"],["/resume/css/swipebox.css","5b1fdf948c4876d1988cab4a8bf1f3cc"],["/resume/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/resume/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/resume/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/resume/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/resume/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/resume/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/resume/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/resume/fonts/sourcesanspro/sourcesanspro-bold.woff","1146f3f229f5a3d3c711f0922ea2eb87"],["/resume/fonts/sourcesanspro/sourcesanspro-light.woff","7951903bff82a82e7cde0396dfc9d80c"],["/resume/fonts/sourcesanspro/sourcesanspro.woff","c4f39c8cef7f1746da98c25e82b76f29"],["/resume/images/favicon.png","3c73ba24b72390dbeea983d47154962b"],["/resume/images/note.jpg","2732b7b3a5c535aee92773a59fd2ddf3"],["/resume/index.html","0e155fd08bb52773e8ec7d40231591ce"],["/resume/js/bootstrap.js","9cb0532955cf4d4fb43f792ce0f87227"],["/resume/js/jquery-2.2.3.min.js","33cabfa15c1060aaa3d207c653afb1ee"],["/resume/js/jquery.swipebox.min.js","35ac20b142b2b40bbdb03ea8ff4a9ff4"],["/resume/js/md5.js","6d03025f455869185b57b5c138fd1c01"],["/resume/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/resume/js/skill.bars.jquery.js","fe1be3e502018cd80f941b3cf668adc0"],["/tags/AOP/index.html","1b273f263cb5427cf24dd469fd4a5a82"],["/tags/Allatori/index.html","8a5e292595fec3a6603bcb3271abbd9a"],["/tags/Axios/index.html","fb5d51b4ba218103252798696772c060"],["/tags/BUG/index.html","0ce2ea8aeecc0ad11eff960c2c191a13"],["/tags/Base64/index.html","50deb1cdea691929f98841e3c5ffdd05"],["/tags/CentOS/index.html","b063cecaee3e538cbd219cb4d59dc119"],["/tags/Coding/index.html","0a96531500279a52af29eea2fa91000f"],["/tags/Emoji/index.html","422531a9274cbb7d25ed1a5ae4d0758a"],["/tags/Folding容器/index.html","cc3017fc81241fd5111f13ef19961991"],["/tags/Github/index.html","9fea4bd38c49d357d7df807bdbe1556c"],["/tags/Gitlab/index.html","15d55015a07429a8edb327efa23667d3"],["/tags/Gulp/index.html","0d977b189214c42d1e5222348b1bb25a"],["/tags/Hexo/index.html","2014725e77d375d62238575169397eeb"],["/tags/Hexo/page/2/index.html","e3bb784cbcd0a32293645f29f070815f"],["/tags/Java/index.html","7434e64668ed5c2c8c37f5b663d530cf"],["/tags/Jwt/index.html","a4befeb0e9e67ea1a90b0deaf0881600"],["/tags/LocalDateTime/index.html","bcaa17ce4d177b0b87e9ee1bea7ad316"],["/tags/MD5/index.html","49c4e3f472fe8e589b1fd0fe10f5b844"],["/tags/Neat/index.html","df3941f0610b8ee8e8bc9d4dd04eb383"],["/tags/Nginx/index.html","afc4cd259da5745ce28c004b310cdf61"],["/tags/Password/index.html","c23b8f67333aa9016ac766e3f788e841"],["/tags/Photos/index.html","5638a66726b1e9c3a539804e54dec15f"],["/tags/Rss/index.html","da29316fdd03a0182a5fda6e79182c81"],["/tags/SHA-1/index.html","4b668f71cd712ce6e60423e1d6e08c07"],["/tags/Security/index.html","8ee7eed260164720f91f8a9cc6233000"],["/tags/SpringBoot/index.html","8a4794adb835b4fbb0f4f8855b651655"],["/tags/SpringBoot打包/index.html","77fb3c360c1d6cc668c0515adec37570"],["/tags/TravisCI/index.html","09fd8d4323202be8e1b92c1998be4d5d"],["/tags/Valine/index.html","e43d79df844ae31a7a86d2230a510c76"],["/tags/Vue/index.html","78b548e00ba9d1cd0cbc5ec2efc010cc"],["/tags/Vue/page/2/index.html","4c0de073bcdc0fae02957b6667d2d4c3"],["/tags/el-date-picker/index.html","e9b8d3a0de074621ce40b7b841e38248"],["/tags/index.html","337f168990ab6353fd7183a2f84800f6"],["/tags/lazyload/index.html","ea0d745bc1f5ceb68ad80a80ab923ebc"],["/tags/nginx-http-flv-module/index.html","62465a8a72423a369d6aae7249698bff"],["/tags/事务/index.html","9c2df37adc338f0e013b8eb74a33938c"],["/tags/代码块/index.html","d0c21ea27257b17651342d4ad9ee5854"],["/tags/图片/index.html","cec82991356e44f2353fc15e9bce63dc"],["/tags/工具类/index.html","7e1d90233ea7d5dfbc303c9fb03901de"],["/tags/点击特效/index.html","7f121f5984b3d56c8f2e24d581306569"],["/tags/视频流播放/index.html","485155e9841d2e855318adcd432fc8a6"],["/tags/豆瓣/index.html","fb3b81bcd7e647d9e6bff267b1c8d212"],["/tags/邮件订阅/index.html","e5af1db84492bd5cba00808a944e8c88"],["/tools/index.html","7f4bb4e3c0f4be54b4c89feb6d196e6d"]];
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




