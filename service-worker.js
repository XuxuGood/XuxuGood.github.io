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

var precacheConfig = [["/404.html","7c14112f970f2dbac3b28b4edda7a5f8"],["/about/index.html","6f19454f5c1c36c9c90fd5ca2ec873a0"],["/archives/2019/10/index.html","81418bda6397c73d1208a99010960930"],["/archives/2019/11/index.html","7d85b1ce4b50ab3d04875d4df9827264"],["/archives/2019/11/page/2/index.html","87e3a1a35d8e80bde8d9263054ed3d6b"],["/archives/2019/12/index.html","4dd449b949484c717dabe97e68b49d1b"],["/archives/2019/index.html","eb3ed10d7c206674b508aced77566628"],["/archives/2019/page/2/index.html","95169d69a291e29c2c12191cddf1f596"],["/archives/2020/01/index.html","d3e39c13cdd3ba2967e62e0d37ffd149"],["/archives/2020/02/index.html","cd20845d98ab3e05e0b2dc494cee2265"],["/archives/2020/03/index.html","9db59d38c3c9f0f4bdee2be92992ce55"],["/archives/2020/04/index.html","6d1f0b8ba28bae7ee25364608f7a2ab9"],["/archives/2020/05/index.html","ddd7ee1763ba8aac62d38efe8c31862c"],["/archives/2020/07/index.html","dc47e4df2c81f8a8e89d5ad8263b8bad"],["/archives/2020/index.html","0bd2ee7c84ec47a8e6adf7d07962f989"],["/archives/2020/page/2/index.html","720cd2adff766e3e0e0177cd722517f4"],["/archives/2020/page/3/index.html","bf367ef409881e6bf6fa42a19533895e"],["/archives/index.html","9c01f1e9b637ef5325642aa772d0c49f"],["/archives/page/2/index.html","9c01f1e9b637ef5325642aa772d0c49f"],["/archives/page/3/index.html","9c01f1e9b637ef5325642aa772d0c49f"],["/archives/page/4/index.html","9c01f1e9b637ef5325642aa772d0c49f"],["/archives/page/5/index.html","9c01f1e9b637ef5325642aa772d0c49f"],["/catchTheCat/index.html","e054af9f3810543988e745fac301daf7"],["/categories/BUG/index.html","39935631f7cfb63b6cf94db5abc8829f"],["/categories/Gitlab/index.html","34d9c230ff15933790f7042e96bcb845"],["/categories/Hexo/index.html","cfc75122e87f8386bb670ce77ecbbb39"],["/categories/Hexo/page/2/index.html","b9f5bb7637a70aa86ddec0987ce10c89"],["/categories/Java/index.html","fe431216d8c2c7d859ca300b436d1e1d"],["/categories/Nginx/index.html","f19b4f9052e77d88e0fb09e30b773a90"],["/categories/SpringBoot/index.html","6714b51139971340648be311b570a4af"],["/categories/Vue/index.html","3a94be552ef24cf6885c86a3fab32c38"],["/categories/Vue/page/2/index.html","f388e51f22d51f5e912e1fe516f1c555"],["/categories/index.html","47f1279acf4801691794b67769cd5e63"],["/categories/事务/index.html","1e601527fbdfd0011ae87efde2eef081"],["/categories/加密安全/index.html","8bf37b4b72196818fe13aca1fff16035"],["/categories/流媒体服务/index.html","489bd3d4a670b296a98c1b5211131529"],["/comments/index.html","edeeda4715e97ab7020f05befaa9f142"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/botui-theme-default.css","61d76967232881aa5ab566db1e5ae842"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/message.css","91254c1f83bc163eacf43262c0971f17"],["/css/style.css","18b6945a4dad7b3a38f92ae2fd49aa15"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","aeaacfd09299c51433520bb57cc8f2e6"],["/js/DigitalRain.js","b6e0145f236bcbda8665ad74827b74fc"],["/js/app.js","6d52dda29df9fe9765db75431c9be2f8"],["/js/botui-message.js","8aed2648d9ae4616e91781dedf068679"],["/js/botui.js","b72b5a0de1e7261b7d8c5a4f2913b2bf"],["/js/canvas-clock.js","a80d7e1b302037e23907f1dd88d77d92"],["/js/crash_cheat.js","874c4f5bbe76d790ca9a2caebff31ad2"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/typed.js","6a140ffc4bfb252e209d333cba10689e"],["/js/typewriter-color.js","a821ea17301ff809820fc7b8407022c4"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","f58808981855b103df3aecb4f43c3ef5"],["/page/2/index.html","1dfa8666930e37d57c784800f5300149"],["/page/3/index.html","db504682ce02e8f3b5203a646ed017c8"],["/page/4/index.html","c75ec7d0b48fbc35c3ffd5208282ba9a"],["/page/5/index.html","fdcf1c58f7e5541b9e15eb487f33c499"],["/photos/index.html","c92cab5346324c6e115b75610935a74b"],["/posts/19c94341.html","0cbdefc3489ec78f040a1aac150edcac"],["/posts/2b56997e.html","f316a40787b48c54450dd4f93f03caf1"],["/posts/34469844.html","9bd305334d68d6c1ab3d3c0362fd23e3"],["/posts/358f95d9.html","39b543fb2af81f3415407860ca038e08"],["/posts/39d47c89.html","1878b8d7c0cc3807f2dc6105d79a992e"],["/posts/3e5a3bb6.html","04bf3b5c5eee0932f2406322bbbc6ce0"],["/posts/41567ba6.html","ad7351c4fdfdc7f021d68b5b355d91b0"],["/posts/4394a738.html","c533525350c5bedc239bdca81e6074a7"],["/posts/4598d3ed.html","36032858caf71ed6e264707f94a9dc9e"],["/posts/45c03634.html","b2f1a46781eb0e8ed036f1ee7cbc8eb8"],["/posts/461108bb.html","d4abf14f440bcd2b444310371455d6bb"],["/posts/495d0b23.html","157d4609a964fdd4fd0645bbade99b85"],["/posts/4fc8b649.html","ae471e9da092924b0f4120b68ba7bbd7"],["/posts/5e773fb.html","cd4a2ddcde1cd35c564319a2d1df7b4b"],["/posts/61913369.html","80fcd3962ebc27c01852f6146d64cd06"],["/posts/69ab28bb.html","04f6d2a7d1ca1169a0dc2a3da6164ce7"],["/posts/7fabafee.html","8e55b3272a50ec4c77d8f9ca1fce74b6"],["/posts/7fbe9500.html","b4e3776696720b4b6ada1a549f3d2eee"],["/posts/89ea6c8b.html","2b8b06ce77a57203c6aabc0254e8d0ff"],["/posts/9b280ea3.html","ccedf63d1f2a37ca0d29a9da4b0c3702"],["/posts/9c9b482b.html","c0d265a84dcaabd0d5fd8740f793ad40"],["/posts/a460b91e.html","949b0bb9a42f487bdf16aeedcb1da014"],["/posts/a63fb3ae.html","d8f93dbd67a9d247dde6a7ebbe90d85b"],["/posts/a7df3b40.html","889679d251a82573180039666f41d204"],["/posts/ab21860c.html","d1cd9d09f438a43c6854aa24c9d06071"],["/posts/b4831a5e.html","507b4b1581411b5f21d0a4bd429f426b"],["/posts/bf9eba42.html","0bab450193612058b42596dfdf21a43b"],["/posts/c1cdcf68.html","5fd1bbd9f92af31f5b003e73eead451f"],["/posts/c4782247.html","a1e31f1b2e72e41403696bd631895777"],["/posts/c9b4cff2.html","f8b89e869cc4291ad8951a29492b9992"],["/posts/d0bc4f5d.html","0f277e89f5afed3954dff7b51511579a"],["/posts/d7399e80.html","09f20bcb01f25885fdb41c42c6fa792e"],["/posts/dc877e7a.html","cd519013026e96c2b551e4266c6c33b4"],["/posts/dd9d9f86.html","edbc7be3b8779e33c87e53760a5b0fc1"],["/posts/dff7e11c.html","48b02f325d40f7d4f67df1ea96be383f"],["/posts/e1b9c6c5.html","8ac384ec01244bd1a4f0b9df3f6c7585"],["/posts/ef31a0a3.html","68c75c5dc0a4f9075c30d4e4f47ea6ac"],["/posts/f4a01af3.html","109e7ed1d6ba9d3f9c72b2a82b56d248"],["/posts/f68f129b.html","ef77bf15754b500740f65066bc0b8e7f"],["/posts/faf888d5.html","cd9642b011329f70f624a692f5c98784"],["/posts/fc31ea3.html","2cfbfea156cc05246064c8a2384b963a"],["/posts/fe5c5e4f.html","491a86721dcbf61f523cd4d9e2cb9f63"],["/resume/css/bootstrap.css","5e7ff7b339d0edec40f5be9d115d3dc6"],["/resume/css/font-awesome.css","6139f136bfb9d2cd360d1b04ac96785e"],["/resume/css/font.min.css","7c8cecf479042d2705acd2fc648c366e"],["/resume/css/handsome.css","3c01dd5efde73d997794ab74b5bcc21e"],["/resume/css/message.css","91254c1f83bc163eacf43262c0971f17"],["/resume/css/style.css","2f58b1249c70d91d596073fcaaaff6e6"],["/resume/css/swipebox.css","5ecf85f0774e9f751e8c8764fed5b5fd"],["/resume/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/resume/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/resume/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/resume/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/resume/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/resume/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/resume/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/resume/fonts/sourcesanspro/sourcesanspro-bold.woff","1146f3f229f5a3d3c711f0922ea2eb87"],["/resume/fonts/sourcesanspro/sourcesanspro-light.woff","7951903bff82a82e7cde0396dfc9d80c"],["/resume/fonts/sourcesanspro/sourcesanspro.woff","c4f39c8cef7f1746da98c25e82b76f29"],["/resume/images/favicon.png","3c73ba24b72390dbeea983d47154962b"],["/resume/images/note.jpg","2732b7b3a5c535aee92773a59fd2ddf3"],["/resume/index.html","0e155fd08bb52773e8ec7d40231591ce"],["/resume/js/bootstrap.js","9cb0532955cf4d4fb43f792ce0f87227"],["/resume/js/jquery-2.2.3.min.js","33cabfa15c1060aaa3d207c653afb1ee"],["/resume/js/jquery.swipebox.min.js","35ac20b142b2b40bbdb03ea8ff4a9ff4"],["/resume/js/md5.js","6d03025f455869185b57b5c138fd1c01"],["/resume/js/message.js","aed36a1e54f3df3f65d1c92aacca491d"],["/resume/js/skill.bars.jquery.js","fe1be3e502018cd80f941b3cf668adc0"],["/tags/AOP/index.html","7780e212ffeebd79c216c2641070df56"],["/tags/Allatori/index.html","7ba6c740228b94a670ec0f3eadb3eb78"],["/tags/Axios/index.html","37225ba2cd6c6c17179b2be62b903e9f"],["/tags/BUG/index.html","df7428e453fcb4236b1665f38c77e6dd"],["/tags/Base64/index.html","7bc2d8ae827e15ed5e11b271ab5a66bc"],["/tags/CentOS/index.html","8fb94a0ef59db416727e5c4d87f5adf3"],["/tags/Coding/index.html","90d5be3f44ab49338516ed7015fc5da7"],["/tags/Emoji/index.html","a741faa4d5225c9fa6b45404e60e1ade"],["/tags/Folding容器/index.html","d4dbbd951a71ab13558eb0056a3b8d17"],["/tags/Github/index.html","d6ebe793122990d90c6578d49cd707f6"],["/tags/Gitlab/index.html","53130e47868e5ae6fd73eca972b79454"],["/tags/Gulp/index.html","b49e831e53016066739166ad8fa24f0a"],["/tags/Hexo/index.html","53f609eaacd64b911e9fb3784e05e7a4"],["/tags/Hexo/page/2/index.html","8fb088bf7a342b1bb9cb2c5feb9cc2ca"],["/tags/Java/index.html","923a7f6dfa4e02f2611afdc43d9bea04"],["/tags/Jwt/index.html","4b5427562d895fab00d1a2a8c6dd7bef"],["/tags/LocalDateTime/index.html","104d8ada03890d2e35f717549cef4070"],["/tags/MD5/index.html","47aa777c945c299abfcda8be2f0d27ec"],["/tags/Neat/index.html","aa0670cc36d8368b0234ea3642d851d2"],["/tags/Nginx/index.html","df6d807f0c9a42a2a9ac8284ed621053"],["/tags/Password/index.html","fe311de84801bb04423d5bbf926c5591"],["/tags/Photos/index.html","bbf441fc5d198b437d21a4453f504fa2"],["/tags/Rss/index.html","60f3bef24422471eb6f4a102a4e442f3"],["/tags/SHA-1/index.html","25fe45906221a460928ed5f91d3043ea"],["/tags/Security/index.html","a12899e695199a7f5ceeaa81b1561ae1"],["/tags/SpringBoot/index.html","29149ad9ddb7cd0e356a4613632848f9"],["/tags/SpringBoot打包/index.html","583b3561ecdb9677519b37042e208695"],["/tags/TravisCI/index.html","76a5bf41099c4c0d412fdef7bdb35eb6"],["/tags/Valine/index.html","4f12dbf03ef47e9ad72a42882ab743de"],["/tags/Vue/index.html","7bdbe4be71c5fb2205eff764801c01a5"],["/tags/Vue/page/2/index.html","db9eeea50fc761b4102baf517d6c221b"],["/tags/el-date-picker/index.html","cc7b59da9101c4c6185011735497b272"],["/tags/index.html","cc0ac5de9da2ea0f7deda861ebba5c83"],["/tags/lazyload/index.html","56141329417797d73901fdf7304d6b8d"],["/tags/nginx-http-flv-module/index.html","788d58a4c146183b1a82dc0786c1e8e2"],["/tags/事务/index.html","ef53f4b5a5386fe34c8395237e77e448"],["/tags/代码块/index.html","3f50f24b54ea846a13dfe4046fc3e937"],["/tags/图片/index.html","985c0841536cb298a7787acfe4914e54"],["/tags/工具类/index.html","e7d0ad1a65e20ef5318f07d5f4df5734"],["/tags/文件上传/index.html","6a53e271c36265f28cb1e06cee78d362"],["/tags/点击特效/index.html","0f783073d99fcef82942682b654fc775"],["/tags/视频流播放/index.html","8b245ac14905f6317c8f6abf828357e2"],["/tags/豆瓣/index.html","d8619ed98494c0ca0aae8239892faec2"],["/tags/邮件订阅/index.html","735813d3c047d9c1f4280aac96ef5692"],["/tools/index.html","0526ec1eca65de0e55e4ba3eb1de5555"]];
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




