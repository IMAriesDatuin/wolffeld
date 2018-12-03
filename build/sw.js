/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.webp",
    "revision": "926339f48e43301a3e6aec9d7052ef09"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.webp",
    "revision": "1dede19592d92f97ac0adf6c751c67f8"
  },
  {
    "url": "assets/blank.png",
    "revision": "9529390786a6bfeb4ea5197a39d2e410"
  },
  {
    "url": "assets/blank.svg",
    "revision": "ce4e1da1f24283b19f1c62c9d91a376f"
  },
  {
    "url": "assets/blank.webp",
    "revision": "d70f227bd3cda1d6ce7e55cc31022dcf"
  },
  {
    "url": "assets/common/icon-dark.png",
    "revision": "7b23ca6feabdf91b46c6264dc788b5ad"
  },
  {
    "url": "assets/common/icon-dark.svg",
    "revision": "abd93f8cf459fa9e67456d45953fa57c"
  },
  {
    "url": "assets/common/icon-dark.webp",
    "revision": "5efd812ccebfc6a4ab3c83dd853e1883"
  },
  {
    "url": "assets/common/icon-light.png",
    "revision": "e41fd0dcc2084b17c49b6da19c770ceb"
  },
  {
    "url": "assets/common/icon-light.svg",
    "revision": "7381c3a0c5e3c2b9170347d20b96ffe3"
  },
  {
    "url": "assets/common/icon-light.webp",
    "revision": "47367d47742df76b97e92abed9a74392"
  },
  {
    "url": "assets/common/icon-primary.png",
    "revision": "f15d79e505d4942f28303731b259aac5"
  },
  {
    "url": "assets/common/icon-primary.svg",
    "revision": "f312b747151ef1228035182eb0671398"
  },
  {
    "url": "assets/common/icon-primary.webp",
    "revision": "26c73cf23b61da10c8047e057fbdd6a7"
  },
  {
    "url": "assets/common/icon-secondary.png",
    "revision": "4cc1b5ad0ab1eb147930b8ec672cf474"
  },
  {
    "url": "assets/common/icon-secondary.svg",
    "revision": "1faf184458e8bf569268b5c2e3e23824"
  },
  {
    "url": "assets/common/icon-secondary.webp",
    "revision": "4db99c568ec1a4b2285b85876b70a58c"
  },
  {
    "url": "assets/common/logo-dark.png",
    "revision": "33ba5132a202855620f378a9745fcccf"
  },
  {
    "url": "assets/common/logo-dark.svg",
    "revision": "7a36a649fcee4b0c04280f3387a252aa"
  },
  {
    "url": "assets/common/logo-dark.webp",
    "revision": "0def1b1b34962573a0125356ec5d8d91"
  },
  {
    "url": "assets/common/logo-light.png",
    "revision": "7477a3ebf8c7ad421cd4284f8ead4951"
  },
  {
    "url": "assets/common/logo-light.svg",
    "revision": "01222ef363708fb1c2924126658b5ec7"
  },
  {
    "url": "assets/common/logo-light.webp",
    "revision": "2194e7ab749455e1cbf8a8193e9baba7"
  },
  {
    "url": "assets/common/logo-primary.png",
    "revision": "4dee710eb39c412e267a66e39d8e7a2b"
  },
  {
    "url": "assets/common/logo-primary.svg",
    "revision": "f2335f40166baac8c2a483b870dd1933"
  },
  {
    "url": "assets/common/logo-primary.webp",
    "revision": "892977effc31d5069292899b69427b96"
  },
  {
    "url": "assets/common/logo-secondary.png",
    "revision": "555048085d5269f4e81d58be3968825a"
  },
  {
    "url": "assets/common/logo-secondary.svg",
    "revision": "dbc754b8b0c1b91d0adddd9b174ad3a6"
  },
  {
    "url": "assets/common/logo-secondary.webp",
    "revision": "29ddef350517379e6ac28e6f74012c6a"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon-google.png",
    "revision": "f5b13163332abdcfc094bd4e73892a16"
  },
  {
    "url": "assets/icon-google.svg",
    "revision": "f16ad52d955fc63de49886ff657e88cd"
  },
  {
    "url": "assets/icon-google.webp",
    "revision": "e86c267bbcfe3bbeb350b8945f8fdf0c"
  },
  {
    "url": "assets/icons-nav.png",
    "revision": "cadcc65884d2995f8e81bbe70041e82f"
  },
  {
    "url": "assets/icons-nav.svg",
    "revision": "54c5e42c9b101ef67753192ca9862933"
  },
  {
    "url": "assets/icons-nav.webp",
    "revision": "4f371fb4386a0cc23b844e06c956301c"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "50e54093a500c7f2a73113c929ce3e68"
  },
  {
    "url": "assets/icons/android-chrome-192x192.webp",
    "revision": "e1b581dfe1b9721107eae488f4a59006"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "f06748e0364a66d7846f1d5a356b10bb"
  },
  {
    "url": "assets/icons/android-chrome-512x512.webp",
    "revision": "94b6be1a2e4e0174b7c2a1ecf9184e28"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "deb70b877c5a5eae6fa25b67679cbe1d"
  },
  {
    "url": "assets/icons/apple-touch-icon.webp",
    "revision": "4a8189a7b6ca405fae7284b8bb93f849"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "189dc6dee3aacbd994b30767377bd21e"
  },
  {
    "url": "assets/icons/favicon-16x16.webp",
    "revision": "590d4e0ac4b893f5bbd4e57943bdcdc6"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "300f5d8907f7a8c2b0f42deb2a05ec3e"
  },
  {
    "url": "assets/icons/favicon-32x32.webp",
    "revision": "0bad44e6741a78760f4e1cd6d7064db3"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "6f814cdc9d96f3662e3963f37d3c1ef6"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "badaf8de1b40701c02649b073c079617"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "7c9e5751dcfdf56732b79559da1b7fb6"
  },
  {
    "url": "assets/icons/mstile-150x150.webp",
    "revision": "f5275a2cee44e1d04bc411025da6b3f0"
  },
  {
    "url": "assets/icons/safari-pinned-tab.png",
    "revision": "fbb39c09fb0955cc5346082c61add3a7"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "2c9c4b3fbed67ecd2932fe63cb0db2de"
  },
  {
    "url": "assets/icons/safari-pinned-tab.webp",
    "revision": "2c00b794fcf01aab101bd610c65f178f"
  },
  {
    "url": "assets/index/dr-wolffeld.webp",
    "revision": "ae3f56253fad57668c7993fdc654c701"
  },
  {
    "url": "assets/index/media-01.jpg",
    "revision": "80229e164318c793e15d182994820426"
  },
  {
    "url": "assets/index/media-01.webp",
    "revision": "987624748c2f9ed6a092e4e987d9053c"
  },
  {
    "url": "assets/index/media-02.jpg",
    "revision": "aa39ee052fcf865e3ad6371ce4489a42"
  },
  {
    "url": "assets/index/media-02.webp",
    "revision": "17716ba6dad449d5166fcc1fc5486f1c"
  },
  {
    "url": "assets/index/render-01.png",
    "revision": "60736cd0151bcadced7d5a48722a4deb"
  },
  {
    "url": "assets/index/render-01.webp",
    "revision": "ae6acf22365ba7ed891e326baf45fa6c"
  },
  {
    "url": "assets/index/render-02.webp",
    "revision": "04dc956045170c8923141d9526f2748d"
  },
  {
    "url": "assets/index/render-03.png",
    "revision": "9f3d111fc093ae6cae6ac5973c41e07d"
  },
  {
    "url": "assets/index/render-03.webp",
    "revision": "4f87a605429ac64a6d101f19d06ddc66"
  },
  {
    "url": "assets/social/profile.png",
    "revision": "5aaba300d0bba54e3465c5580b2f73de"
  },
  {
    "url": "assets/social/profile.webp",
    "revision": "e9f2611c56674f227b22742e95e3d84e"
  },
  {
    "url": "assets/social/social.png",
    "revision": "5fbbb94af1e01357c40d8e15b628bc22"
  },
  {
    "url": "assets/social/social.webp",
    "revision": "b298eee2e9de08d3d7fe3d70c91eadff"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.png",
    "revision": "52760cc677cb46499a85ae5591174683"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.svg",
    "revision": "74ff8527c203d6bedc49fe6b82dbcdad"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.webp",
    "revision": "6d7ea02809802a4e9a977ee6c8c565f1"
  },
  {
    "url": "assets/sprites/press/bitcoininst.png",
    "revision": "576be22eb52d49162ed85d6fa151d12d"
  },
  {
    "url": "assets/sprites/press/bitcoininst.svg",
    "revision": "f46faa0b2d9697cba95239c355ffff3d"
  },
  {
    "url": "assets/sprites/press/bitcoininst.webp",
    "revision": "ec5da2d0e183fd276889245e8c073b1e"
  },
  {
    "url": "assets/sprites/press/business-insider.png",
    "revision": "bf19ca10a4ccabc25d4212dc1a70303c"
  },
  {
    "url": "assets/sprites/press/business-insider.svg",
    "revision": "93f02a47909f5e12efed45929013f97b"
  },
  {
    "url": "assets/sprites/press/business-insider.webp",
    "revision": "f8e1ebeaf2e824eb86ef17a9cc485018"
  },
  {
    "url": "assets/sprites/press/ccn.png",
    "revision": "3934e6c03c3c9cd3fbda9271c4875299"
  },
  {
    "url": "assets/sprites/press/ccn.svg",
    "revision": "4dc7e24d8152a44eb40dfd10c5d0cbe3"
  },
  {
    "url": "assets/sprites/press/ccn.webp",
    "revision": "b1d05578df784adf210c3a90e8e2867e"
  },
  {
    "url": "assets/sprites/press/coin-announcer.png",
    "revision": "112ada5624b72fa73e4837b63dce052f"
  },
  {
    "url": "assets/sprites/press/coin-announcer.svg",
    "revision": "34b7c3a5b1204096ad4ef3d11267f7f8"
  },
  {
    "url": "assets/sprites/press/coin-announcer.webp",
    "revision": "5c8e1cfa578bcbfd32f81d5af98cdb9a"
  },
  {
    "url": "assets/sprites/press/coinmercenary.png",
    "revision": "863d112e1f0bc2db1122e4cc43cd7334"
  },
  {
    "url": "assets/sprites/press/coinmercenary.svg",
    "revision": "7961bdf3238b0f52eafe8d4be7f903f2"
  },
  {
    "url": "assets/sprites/press/coinmercenary.webp",
    "revision": "c59da4d64756b31bffd877d2810bc111"
  },
  {
    "url": "assets/sprites/press/crains.png",
    "revision": "53f95f969dd455481d5acb6d1fe5166e"
  },
  {
    "url": "assets/sprites/press/crains.svg",
    "revision": "a2be08b93013c1860e4382fbb30bc131"
  },
  {
    "url": "assets/sprites/press/crains.webp",
    "revision": "4eb8d5a82e8b5d22e4887c031f0b69ce"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.png",
    "revision": "d6ca12722ecaa87e16c363771fbd8adf"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.svg",
    "revision": "5bc25a35ce772a5eb5b123b345573867"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.webp",
    "revision": "7da9134bf5b14c07b58c89eb4f0b7190"
  },
  {
    "url": "assets/sprites/press/e27.png",
    "revision": "e062bdfd1fe6aba8c21e4df93810e6bc"
  },
  {
    "url": "assets/sprites/press/e27.svg",
    "revision": "186fcf7064f1135c927b4b04d642bdb3"
  },
  {
    "url": "assets/sprites/press/e27.webp",
    "revision": "5dded4cd8334dd7b1ad7414716941af7"
  },
  {
    "url": "assets/sprites/press/forbes.png",
    "revision": "36acd6067a2189ab2391acb3ddd5c220"
  },
  {
    "url": "assets/sprites/press/forbes.svg",
    "revision": "165047da2ec728088532786ea9fb176d"
  },
  {
    "url": "assets/sprites/press/forbes.webp",
    "revision": "c08bcf85e319f05a62603afbc532f66e"
  },
  {
    "url": "assets/sprites/press/kabn.png",
    "revision": "ba656339570930bcc23a523184e90404"
  },
  {
    "url": "assets/sprites/press/kabn.svg",
    "revision": "110e242484a61e2ed78dfea3c6aa25a6"
  },
  {
    "url": "assets/sprites/press/kabn.webp",
    "revision": "968438e2034066d1989e53f30e32a0d4"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.png",
    "revision": "ce6826c2af82c7d9dfb0d52193040f2b"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.svg",
    "revision": "c5df8cc8416bbbfa35c9a899e8d410fc"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.webp",
    "revision": "4d800fd68d445037c89f2d4bc68083d0"
  },
  {
    "url": "assets/sprites/press/pcmag.png",
    "revision": "c1db5c39aefdb1ecc7d506a4106e8f0c"
  },
  {
    "url": "assets/sprites/press/pcmag.svg",
    "revision": "0a3ed284676eae7d96492184cc5be55f"
  },
  {
    "url": "assets/sprites/press/pcmag.webp",
    "revision": "0c461d2a7676637e4721fbd3856bb9c5"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.png",
    "revision": "7b49c1b660a81061b08be16fb6f2df09"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.svg",
    "revision": "356f294d785552a5bf3791a0f7cea6e3"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.webp",
    "revision": "a2e36d0f610e57906cd3945ffba15f30"
  },
  {
    "url": "assets/sprites/press/tech-bullion.png",
    "revision": "995fe44dcf69e3186a6d32771fee83b7"
  },
  {
    "url": "assets/sprites/press/tech-bullion.svg",
    "revision": "b4cfab08633b2137de3db2cb2c4e04b4"
  },
  {
    "url": "assets/sprites/press/tech-bullion.webp",
    "revision": "e9a66b88cb5a22079e90a9b0170711be"
  },
  {
    "url": "assets/sprites/press/techaeris.png",
    "revision": "ec1f930a4dd170f223e33d9567856350"
  },
  {
    "url": "assets/sprites/press/techaeris.svg",
    "revision": "286a38902b3590b6306331855262e606"
  },
  {
    "url": "assets/sprites/press/techaeris.webp",
    "revision": "818e3ba9676861d48b27c769cd19fdf2"
  },
  {
    "url": "assets/sprites/press/vegastech.png",
    "revision": "e64fb529cd878135fd094b3f2b24a45a"
  },
  {
    "url": "assets/sprites/press/vegastech.svg",
    "revision": "9da63b2d5cfda73cda850ae0fb808d16"
  },
  {
    "url": "assets/sprites/press/vegastech.webp",
    "revision": "8895342a263801c8f44149f4b9b1e098"
  },
  {
    "url": "assets/sprites/press/zcorum.png",
    "revision": "d128e09b5f098ecb69529eeecc214713"
  },
  {
    "url": "assets/sprites/press/zcorum.svg",
    "revision": "97f337920fbcd0051c12da18bf4488dd"
  },
  {
    "url": "assets/sprites/press/zcorum.webp",
    "revision": "abc41b9bee5e3e48cc336dc1801c8f8c"
  },
  {
    "url": "assets/styleguide/hero.png",
    "revision": "c39316f141fbae8e59221e94f85d8779"
  },
  {
    "url": "assets/styleguide/hero.svg",
    "revision": "a1aaea5c7ed6df6c80b5c5a9ccba687e"
  },
  {
    "url": "assets/styleguide/hero.webp",
    "revision": "9ddd41e90357ef268ea61f63b83f0059"
  },
  {
    "url": "dialog/privacy-policy.html",
    "revision": "e73c91db8712e8cfd576a06f4c71cc49"
  },
  {
    "url": "dialog/sample.html",
    "revision": "282a391acb637cff9d641f46acacd2ab"
  },
  {
    "url": "error.html",
    "revision": "449a7aee3882821d12674876531a4dff"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fonts/fontawesome-webfont.png",
    "revision": "9529390786a6bfeb4ea5197a39d2e410"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "acf3dcb7ff752b5296ca23ba2c7c2606"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fonts/fontawesome-webfont.webp",
    "revision": "d70f227bd3cda1d6ce7e55cc31022dcf"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "index.html",
    "revision": "8519ddf79e8c9d4c21c059231f82df57"
  },
  {
    "url": "sample.html",
    "revision": "a732bdec12e72b860da0585c7d94ecfe"
  },
  {
    "url": "scripts/app.c14410d9cf.min.css",
    "revision": "c14410d9cfb9c4df7eaf0a4467c35d91"
  },
  {
    "url": "scripts/app.d0a90fe27e.min.js",
    "revision": "d0a90fe27e668d28511d917130d42e8d"
  },
  {
    "url": "scripts/styleguide.98ab78a312.min.css",
    "revision": "98ab78a31268335bba05af9d06ff16c5"
  },
  {
    "url": "scripts/styleguide.cb3ae6325e.min.js",
    "revision": "cb3ae6325e84f11f88ddc16b17677fb4"
  },
  {
    "url": "styleguide.html",
    "revision": "55a0d3860680d14ead9cdd6d6fa66ff1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
