if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const d=e=>i(e,o),l={module:{uri:o},exports:t,require:d};s[o]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5e628c9c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.0f68b97c.js",revision:null},{url:"assets/index.11017548.css",revision:null},{url:"assets/vendor.d9868b2b.js",revision:null},{url:"index.html",revision:"575afaf50e076134288fd2c29f3ebbe5"},{url:"registerSW.js",revision:"45e8df86e80fb7a4f9bdc402fa6d28e8"},{url:"img/icons/pwa-192x192.png",revision:"ad9df44bbbc4d2ad16db58e7b4b35d26"},{url:"img/icons/pwa-512x512.png",revision:"aa99610161b8ed30c69f4ed0ed99fb67"},{url:"manifest.webmanifest",revision:"6faa5b1b5805dc034719733507048a39"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));