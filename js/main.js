!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,exports){eval("\r\nconst savetext = document.querySelector('.save--js');\r\nconst loadtext = document.querySelector('.load--js');\r\nconst textarea = document.querySelector('.text--js');   \r\n\r\nsavetext.addEventListener(\"click\", (e)=> {\r\n    e.preventDefault();\r\n    localStorage.setItem('text', textarea.value);\r\n});\r\n\r\nloadtext.addEventListener(\"click\", (e)=> {\r\n    e.preventDefault();\r\n    textarea.value = localStorage.getItem('text');\r\n});\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0EscUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qgc2F2ZXRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS0tanMnKTtcclxuY29uc3QgbG9hZHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZC0tanMnKTtcclxuY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC0tanMnKTsgICBcclxuXHJcbnNhdmV0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGV4dCcsIHRleHRhcmVhLnZhbHVlKTtcclxufSk7XHJcblxyXG5sb2FkdGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGV4dGFyZWEudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGV4dCcpO1xyXG59KTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);