!function(){function e(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=o),o.register("eWrZJ",(function(n,r){function t(){return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_VHDVVux3SVijcjZSSBm7129BnTI6xq99uZEub9u0AbdAfLmgA18YpfMgo3WkUaVv"}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((function(e){return e.map((function(e){return{id:e.id,name:e.name}}))})).catch((function(e){throw console.error(e),e}))}function o(e){return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e),{headers:{"x-api-key":"live_VHDVVux3SVijcjZSSBm7129BnTI6xq99uZEub9u0AbdAfLmgA18YpfMgo3WkUaVv"}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch cat by breed");return e.json()})).then((function(e){return e[0]})).catch((function(e){throw console.error(e),e}))}e(n.exports,"fetchBreeds",(function(){return t})),e(n.exports,"fetchCatByBreed",(function(){return o}))})),o("eWrZJ")}();
//# sourceMappingURL=index.ba564d54.js.map
