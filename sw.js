if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let l={};const b=e=>c(e,r),o={module:{uri:r},exports:l,require:b};i[r]=Promise.all(s.map((e=>o[e]||b(e)))).then((e=>(a(...e),l)))}}define(["./workbox-f8b5deff"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.54d762eb.css",revision:null},{url:"assets/index.630c3da7.js",revision:null},{url:"assets/vendor.9d0043d2.js",revision:null},{url:"built-games/baldis-basics/baldi.js",revision:"252cc114601d34c132b014746d4f6b7b"},{url:"built-games/baldis-basics/firebase-app.js",revision:"706e6e9de021a05ea2578e50795150f1"},{url:"built-games/baldis-basics/index.html",revision:"31dd74741ef83352e1042e6c9a1043d8"},{url:"built-games/baldis-basics/TemplateData/style.css",revision:"dd1395677c124d30fb88e2db25ed6c48"},{url:"built-games/baldis-basics/TemplateData/UnityProgress.js",revision:"167cabac2ccecfb25fd7453130f3bc0a"},{url:"built-games/chromedino/index.css",revision:"a05fb2c40ddc1eefe73973f4b3aaf3e3"},{url:"built-games/chromedino/index.html",revision:"e42d46a71b9d64f56ca27805b2410746"},{url:"built-games/chromedino/index.js",revision:"6965929e8ddc2487b11f9238e2460e6d"},{url:"built-games/cookieclicker/ajax.js",revision:"7f6f1d98f10bb7b55901394016c28809"},{url:"built-games/cookieclicker/base64.js",revision:"182372f6e60cacfaba96a0c767c2e78a"},{url:"built-games/cookieclicker/DungeonGen.js",revision:"c497e694e12d64b9f660834dd709ca45"},{url:"built-games/cookieclicker/dungeons.js",revision:"aaa5b297ba4cfe78284ea690502ab8e6"},{url:"built-games/cookieclicker/excanvas.compiled.js",revision:"df0bc1e5969f5eb559cb0ee10dfb135e"},{url:"built-games/cookieclicker/img/index.html",revision:"4b30b1d7797f8547d1617bfb7c9d15c9"},{url:"built-games/cookieclicker/index.html",revision:"dc0739b5bcad621864355455f90117b8"},{url:"built-games/cookieclicker/main.js",revision:"afdb3449d10a2f7771c005b3f7649646"},{url:"built-games/cookieclicker/minigameGarden.js",revision:"c8353fb68091f3563fe71cc2c3e9f35e"},{url:"built-games/cookieclicker/minigameGrimoire.js",revision:"5584286253e0061043d4cb2d539c1032"},{url:"built-games/cookieclicker/minigamePantheon.js",revision:"830e21d0c68c0bed7ad7635b6cde36cc"},{url:"built-games/cookieclicker/snd/index.html",revision:"c9934e3613e02824ea6ecbb51f064160"},{url:"built-games/cookieclicker/style.css",revision:"947b48d922efb051f119a8243c039e4f"},{url:"built-games/csgoclicker/css/stylesheet.css",revision:"c4b6a8c7386cc469c32f20213ef20b84"},{url:"built-games/csgoclicker/index.html",revision:"b3bc3d6d00ec7ea69b0120b17002b880"},{url:"built-games/csgoclicker/js/script.js",revision:"26a95026317c1548f50f6278ac1707d6"},{url:"built-games/takumiraccoon/index.html",revision:"ae3fb24bed6b3cfe18c20beea5a8c056"},{url:"built-games/takumiraccoon/tanuki_sunset.js",revision:"9aaa154a5d249214f9873d91d4b58127"},{url:"built-games/takumiraccoon/TemplateData/style.css",revision:"dd1395677c124d30fb88e2db25ed6c48"},{url:"built-games/takumiraccoon/TemplateData/UnityProgress.js",revision:"167cabac2ccecfb25fd7453130f3bc0a"},{url:"index.html",revision:"3a4face1fe1cac3850cf1ec6afbbf892"},{url:"IodineGBA.html",revision:"ce885d5902309cc9f67596c8962c0f50"},{url:"icon.png",revision:"5a69678214e7d9b1302d1a65d18aa516"},{url:"icon-maskable.png",revision:"93dabbacb48dc51bbf7b607102ae381f"},{url:"manifest.webmanifest",revision:"1c729cd94c2c3f27138fa11ebe7583f3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
