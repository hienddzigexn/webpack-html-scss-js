(()=>{"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(n){var e=function(n,e){if("object"!=t(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,e||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==t(e)?e:e+""}const r=new(function(){return t=function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)},(e=[{key:"init",value:function(){}}])&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r}());function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function u(t){var n=function(t,n){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==o(n)?n:n+""}(new(function(){return t=function t(){var n,e,o;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=[{module:r}],(e=u(e="components"))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o},(n=[{key:"init",value:function(){this.initComponents()}},{key:"initComponents",value:function(){this.components.forEach((function(t){t.module.init()}),this)}}])&&i(t.prototype,n),e&&i(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,e}())).init()})();