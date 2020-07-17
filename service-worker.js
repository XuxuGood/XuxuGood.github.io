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

var precacheConfig = [["/404.html","d7119b4c75d970f1a3a5c55b70483033"],["/about/index.html","b6adff32958a858db342c41b70676db6"],["/archives/2019/10/index.html","a200e37df1f4146d457e40b0b49771b9"],["/archives/2019/11/index.html","94252f0ae12a8e265eb6dad26076b75b"],["/archives/2019/11/page/2/index.html","084f17e36e569853840730231c6ca9d8"],["/archives/2019/12/index.html","c22cf10432c28ba7fd21206cf42de39f"],["/archives/2019/index.html","a7e2f94deb0e6ea43586c3dc544f40c7"],["/archives/2019/page/2/index.html","4004eb19c56784d73347f0f40f0dad06"],["/archives/2020/01/index.html","4596630322250d49d4f8740863c7ef30"],["/archives/2020/02/index.html","b4314326f0975315650b97a73fac3458"],["/archives/2020/03/index.html","7f672886a8408851b0adb679c20eaee7"],["/archives/2020/04/index.html","1a015b0e0c74793ec6719d4beea46b09"],["/archives/2020/05/index.html","139c9268edbd9e09ba35968a042de30c"],["/archives/2020/07/index.html","a0ac69c9280482e739511f63dfffcbed"],["/archives/2020/index.html","946e1ca217b89853babea23bcd52b523"],["/archives/2020/page/2/index.html","1b0b2cbe86ff9a7318f0ac17c3d348df"],["/archives/2020/page/3/index.html","3e60bd3be2449d441e8bfe7f15cd43d7"],["/archives/index.html","5cb1d6ec6ca3e0bcfe777ec40c539695"],["/archives/page/2/index.html","5cb1d6ec6ca3e0bcfe777ec40c539695"],["/archives/page/3/index.html","5cb1d6ec6ca3e0bcfe777ec40c539695"],["/archives/page/4/index.html","5cb1d6ec6ca3e0bcfe777ec40c539695"],["/archives/page/5/index.html","5cb1d6ec6ca3e0bcfe777ec40c539695"],["/categories/BUG/index.html","4f58d7fcbbb9771c39c7edcd6c66c475"],["/categories/Gitlab/index.html","d4165c94ead67cd4f37df98cb4171d23"],["/categories/Hexo/index.html","449ff032c8bd10c84faee68adcf59dd8"],["/categories/Hexo/page/2/index.html","1cb840330deffe3beac073c0dc45ff7a"],["/categories/Java/index.html","954c4e33820143803007ed71647507b0"],["/categories/Nginx/index.html","b85ed652e9eea2bb62fc7e1d275a9648"],["/categories/SpringBoot/index.html","9603c8d7f4de5a0284e0447535d2c5c7"],["/categories/Vue/index.html","7bddbcc203e5d97e62fcf20ef6e5269c"],["/categories/Vue/page/2/index.html","385862b06fdfbe36f22a4bce535491ef"],["/categories/index.html","5556992386ca58d79f1cda7827ac4a62"],["/categories/事务/index.html","d43557c1975077ad20f0dbe6412e81c8"],["/categories/加密安全/index.html","3d9fa35f018ebbb884ca7acfaba59b7f"],["/categories/流媒体服务/index.html","208efad6697261f355f82e97011439e5"],["/comments/index.html","4f6666de8c18b1ad88d182a161daa9f0"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/botui-theme-default.css","45a9deda1bceeee9ffba3acec392563b"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/style.css","7a9d9fc031e48b3d382380c6b4d9cb4b"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/images/404.png","999e64811aba104fd8ff9da92340dccb"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/failure.png","81198a176284b72208abd8b5d0f0627d"],["/images/favicon.png","81198a176284b72208abd8b5d0f0627d"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/loading.gif","b82a71f3ae1c6f931f5370d86db5b6fa"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.png","2a86f7e2b84a1facc1d386733d3f4bce"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","b1dad6085602fc75ae8878d20be232fb"],["/js/DigitalRain.js","b6e0145f236bcbda8665ad74827b74fc"],["/js/app.js","4bda9732dace5f29688d6002791829cb"],["/js/botui-message.js","8aed2648d9ae4616e91781dedf068679"],["/js/botui.js","b72b5a0de1e7261b7d8c5a4f2913b2bf"],["/js/canvas-clock.js","67f30c72c7ad7218f8954abdea36b4c7"],["/js/crash_cheat.js","a39e37337e199565e809bd9dba0120d0"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/typed.js","6a140ffc4bfb252e209d333cba10689e"],["/js/typewriter-color.js","a821ea17301ff809820fc7b8407022c4"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","165278da506944ffb18394666c6c85b2"],["/page/2/index.html","0e8720362268e061499c1b4bc5257e72"],["/page/3/index.html","cda02b7180c801f2ec85dd00cd606665"],["/page/4/index.html","16a5ab516ae8fd183bbb9c45e8ce3d11"],["/page/5/index.html","32665031e204d1fb75ed0b84a129e3d5"],["/photos/css/bootstrap.min.css","a4f783edad4b6dcf80068780febb5bf2"],["/photos/css/hero-slider-style.css","0875004cae0ef502c5ea0e2c838604b9"],["/photos/css/magnific-popup.css","29aa252ccde7cd0bf84b2d1e1d4613b3"],["/photos/css/tooplate-style.css","12a4acc216fab9b60d6f524a0124fd73"],["/photos/font-awesome-4.5.0/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/photos/font-awesome-4.5.0/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/photos/font-awesome-4.5.0/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/photos/font-awesome-4.5.0/fonts/fontawesome-webfont.woff2","db812d8a70a4e88e888744c1c9a27e89"],["/photos/images/gotop.png","e6133f34f47eca3fdd759957c8599dc1"],["/photos/index.html","12d9ed4d0925a1189f92ca8842ef1530"],["/photos/js/bootstrap.min.js","0ca771b2c6d554021dcc1c01cdc77ef6"],["/photos/js/hero-slider-main.js","6329d6e81397fc8c53ad8570b95dd737"],["/photos/js/jquery-1.11.3.min.js","895323ed2f7258af4fae2c738c8aea49"],["/photos/js/jquery.magnific-popup.min.js","743ccc438e10ebe7e1def696d7b0884d"],["/photos/js/tether.min.js","3e50b6f75ff4128f2478b1d44f80fdfb"],["/posts/19c94341.html","8294a8d64524153e93fd3faecf268ca2"],["/posts/2b56997e.html","e1d116c20a7625fcca4e62c76c884b68"],["/posts/34469844.html","bbc0b6f24957cf8d2048c39831c51b2e"],["/posts/358f95d9.html","bf890e88b01ac0a783e69861cec33e0e"],["/posts/39d47c89.html","6a83f0a48817426cc6df19928232d5cb"],["/posts/3e5a3bb6.html","96b40fe6d0fcbabb381cef72e2e8c60b"],["/posts/41567ba6.html","9547dff5e60765a9684ec20b75274997"],["/posts/4394a738.html","85627ce7f1c520fe1062b65a21f81b9b"],["/posts/4598d3ed.html","a372d88562cdb8ec993ee5b8e291ad45"],["/posts/45c03634.html","e4a7acf098f72fcea191c97cada2af63"],["/posts/495d0b23.html","d26ac7a3e2bc3ecb21638233e5a86ceb"],["/posts/4fc8b649.html","d7cd9a9ea9ee32478e5983a1bad8f611"],["/posts/5e773fb.html","ef80ef5cb15bb5536422a29ff0bacc0e"],["/posts/61913369.html","2b5ed6e605301849f17e1d90535940d4"],["/posts/69ab28bb.html","a4e82a97db5622c30f3bd42958397e44"],["/posts/78d7e607.html","df90fa39c963654f5a20235117f01676"],["/posts/7fabafee.html","55affdf1062b3b009cd27d1daa16486c"],["/posts/7fbe9500.html","0f00d2faa99ed3ce9e4f79027b451d49"],["/posts/89ea6c8b.html","d45eb6ee825d947cdbc426b062ce2e7c"],["/posts/9b280ea3.html","b250eb4dcdb694456973ed0e98e30d2d"],["/posts/9c9b482b.html","cde98d3fde0ba2ffe6a76d5415160af2"],["/posts/a460b91e.html","d28ae4b0c58a3fcfd16673bae63a93f2"],["/posts/a63fb3ae.html","7bad7ae99a58c74cb9232c3e0c50439a"],["/posts/a7df3b40.html","d260df7eef96ec12982b7aaf40750ca5"],["/posts/ab21860c.html","1bb5a09f8180e40df5f29d57388198d2"],["/posts/b4831a5e.html","e4c5507de773f31af87b88ef2ea9f3c9"],["/posts/bf9eba42.html","cc91f72aad6ffe0438a979068a59315a"],["/posts/c1cdcf68.html","4aba6c0e1bc96e63f1603ce3f3ffe463"],["/posts/c4782247.html","651d8d0babd544580a5341e9c5c99bbe"],["/posts/c9b4cff2.html","81cef72d8670d567c38877bccc49a039"],["/posts/d0bc4f5d.html","d74475333a633245e44b9060dfde9486"],["/posts/d7399e80.html","6507cee17d94479a78e02a282c321cfc"],["/posts/dc877e7a.html","2a94248ffa5877cb2ceb71da519a857c"],["/posts/dd9d9f86.html","d7f711079aff0440ad7c19d792057eeb"],["/posts/dff7e11c.html","d6fd00b27d7a0e8a70e711218bab8cfd"],["/posts/ef31a0a3.html","2cd3af7256a7a95456b19b4971d9efe7"],["/posts/f4a01af3.html","ad3ae483bce7cf1c9205c1021d08d8e3"],["/posts/f68f129b.html","7233cb58c01658a1f3894aacc7da3a16"],["/posts/faf888d5.html","48a7cdae51f064734cf02bc090085b19"],["/posts/fc31ea3.html","e64eca7734c860e1f4a1c40b93b08b45"],["/posts/fe5c5e4f.html","bee695b18b63c4db5057996cc38865ac"],["/resume/css/bootstrap.css","ec6d378e2880f6038f7d0a8a538efe3c"],["/resume/css/font-awesome.css","11d30cd27e328b6b7a2d25e10f15f028"],["/resume/css/style.css","718c7d0f2ef4003162744d16041f731b"],["/resume/css/swipebox.css","32fd2ba934b9fcbf2ecd30f0f761698a"],["/resume/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/resume/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/resume/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/resume/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/resume/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/resume/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/resume/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/resume/images/g1.jpg","e2a28e97dee5ac4f444fc8f1dfa3ba00"],["/resume/images/g2.jpg","1469f42191942f543fb8f391b9d4fb37"],["/resume/images/g3.jpg","8141ced7bca754eb912c094a2682d367"],["/resume/images/g4.jpg","c6a54ad70ffcce48609c9ef253c6a070"],["/resume/images/g5.jpg","db3878193c0289fc8c0c34d69ce74b0f"],["/resume/images/g6.jpg","83e963b52ee99c9f07924cbed9b37063"],["/resume/index.html","fcc3d9466d7cd77951a6a6185368fcf6"],["/resume/js/bootstrap.js","9cb0532955cf4d4fb43f792ce0f87227"],["/resume/js/jquery-2.2.3.min.js","33cabfa15c1060aaa3d207c653afb1ee"],["/resume/js/jquery.swipebox.min.js","35ac20b142b2b40bbdb03ea8ff4a9ff4"],["/resume/js/skill.bars.jquery.js","fe1be3e502018cd80f941b3cf668adc0"],["/tags/AOP/index.html","276826e3fea8ed259c12474cdfc20af4"],["/tags/Allatori/index.html","9752a4a10d509737cbde6ae60812ecc5"],["/tags/Axios/index.html","6d0c296ce5c1c7adb1cb50aa753fe305"],["/tags/BUG/index.html","86be1c2784a92be5084474127e19bd90"],["/tags/Base64/index.html","d36ac9beeb41ffcdc8f8dceca973f9dc"],["/tags/CentOS/index.html","476d6e2b11cf06b7fc69a73907f58bdd"],["/tags/Coding/index.html","9250e75bb4695b58308bd5ab402a07d2"],["/tags/Emoji/index.html","7d7398134131736d30f0ef1a0ae4bcd8"],["/tags/Folding容器/index.html","4627e84e4e1d9ce8072a01c1b4b2dcd8"],["/tags/Github/index.html","1ea67aaa5890f8e348d5dbdd3502ef80"],["/tags/Gitlab/index.html","0e88af1449ce2cdda14f4f6b5716adea"],["/tags/Gulp/index.html","aa18c720e66e4c7480351a9830acda85"],["/tags/Hexo/index.html","cc95895fe15574ac66df0f9c6bfb1c3c"],["/tags/Hexo/page/2/index.html","bbadca5b1df2c0ec38f30589eaef7594"],["/tags/Java/index.html","bbb8eeb42ac3ba60c41d635a570b54dc"],["/tags/Jwt/index.html","68212b3a2e02ac9b1d85af2996e7e927"],["/tags/LocalDateTime/index.html","02d2db0db9553efab40f43c08ae4a63e"],["/tags/MD5/index.html","2eda0d6d1b40824f7e1dde481a8e03ae"],["/tags/Neat/index.html","e3211758ce7988923f17849aeb5de69e"],["/tags/Nginx/index.html","3473786253da999713afa8ca72229c9f"],["/tags/Password/index.html","3e9977645bd6711221b66feadcbe5054"],["/tags/Photos/index.html","8297eb9f92e4c43086b47572024d7f43"],["/tags/Rss/index.html","049684ea9e451d4c9257802e71e0fdce"],["/tags/SHA-1/index.html","8616f691092765c45b4c63b03cb4be65"],["/tags/Security/index.html","b8fcfb165cc721eec4403bbb5526a7e9"],["/tags/SpringBoot/index.html","1b2caf216e92bc3578724c723b814fdc"],["/tags/SpringBoot打包/index.html","b21bdddfd46bfbb91fd9f7394dee3b93"],["/tags/TravisCI/index.html","f7c0cb6b94aaf419f67fac92c4e2bf07"],["/tags/Valine/index.html","477c063995f4ac15e581e2b342b695e0"],["/tags/Vue/index.html","b71be80f7aa39192a0687e5343db3e14"],["/tags/Vue/page/2/index.html","41b64cf0420cb492717dcd23afea382a"],["/tags/el-date-picker/index.html","d2d3ec4476c5bb90ff090f58d7d581fc"],["/tags/index.html","d097f536a66a44419ff051df57c897f9"],["/tags/lazyload/index.html","113c1bb94f9774153258bfcd68658635"],["/tags/nginx-http-flv-module/index.html","ed44a578f1ca2a4c7f113ae5006dc82a"],["/tags/事务/index.html","dee5299c2d2bb2c0d2b419bba1a68602"],["/tags/代码块/index.html","267b95bfe11b77a7e22f7d5812ef6b0e"],["/tags/图片/index.html","69441b618db7fe484ff3210bf06d6db7"],["/tags/工具类/index.html","15642df137bbcb905cbd21595b92d037"],["/tags/点击特效/index.html","3e0580d86f1e631a08e3ca1b75d6b607"],["/tags/视频流播放/index.html","d87bfe1585633383ea366f9d0ba56138"],["/tags/豆瓣/index.html","b7504f14e78faf5034cf965e2f5419e6"],["/tags/邮件订阅/index.html","c11e6bab42e765aa05bf2ee80689511e"]];
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




