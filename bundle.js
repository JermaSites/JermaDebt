(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.NumberFlip=e():t.NumberFlip=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=1)}([function(t,e,r){window,t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.g=void 0;var i=function(t){return null!==t&&"object"===n(t)};e.g=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"div";return function(){var r=document.createElement(e),n=i(t)?t:{class:t};Object.keys(n).forEach((function(t){var e=n[t];void 0!==e&&(/^\$/.test(t)?r.setAttribute("data-"+t.slice(1),e):"style"===t&&i(e)?r.setAttribute("style",Object.keys(e).map((function(t){return"".concat(t,":").concat(e[t])})).join(";")):r.setAttribute(t,e))}));for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return a.forEach((function(t){var n,i;(i=t)instanceof HTMLElement&&1===i.nodeType?r.appendChild(t):"img"===e.toLowerCase()&&("string"==typeof(n=t)||n instanceof String)?r.setAttribute("src",t):r.innerHTML+=t})),r}}}])},function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";r.r(e),r.d(e,"Flip",(function(){return u}));var n=r(0);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t,e){return(t>e?t:e).toString().length},s=function(t,e){return function(t){return t.split("").map(Number)}(function t(e,r){return e.length<r?t("0"+e,r):e}(t.toString(),e)).reverse()},u=function(){function t(e){var r=this,n=e.node,i=e.from,o=void 0===i?0:i,s=e.to,u=e.duration,c=void 0===u?.5:u,f=e.delay,l=e.easeFn,p=void 0===l?function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}:l,d=e.systemArr,h=void 0===d?[0,1,2,3,4,5,6,7,8,9]:d,y=e.direct,v=void 0===y||y,b=e.separator,m=e.seperateOnly,g=void 0===m?0:m,A=e.separateEvery,j=void 0===A?3:A;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.beforeArr=[],this.afterArr=[],this.ctnrArr=[],this.duration=1e3*c,this.systemArr=h,this.easeFn=p,this.from=o,this.to=s||0,this.node=n,this.direct=v,this.separator=b,this.seperateOnly=g,this.separateEvery=g?0:j,this._initHTML(a(this.from,this.to)),void 0!==s&&(f?setTimeout((function(){return r.flipTo({to:r.to})}),1e3*f):this.flipTo({to:this.to}))}var e,r,u;return e=t,(r=[{key:"_initHTML",value:function(t){var e,r=this;this.node.classList.add("number-flip"),this.node.style.position="relative",this.node.style.overflow="hidden";for(var o=0;o<t;o+=1){var a=Object(n.g)("ctnr ctnr".concat(o)).apply(void 0,i(this.systemArr.map((function(t){return Object(n.g)("digit")(t)}))).concat([Object(n.g)("digit")(this.systemArr[0])]));if(a.style.position="relative",a.style.display="inline-block",a.style.verticalAlign="top",this.ctnrArr.unshift(a),this.node.appendChild(a),this.beforeArr.push(0),this.separator&&(this.separateEvery||this.seperateOnly)&&o!==t-1&&((t-o)%this.separateEvery==1||t-o-this.seperateOnly==1)){var s=(e=this.separator,"[object String]"===Object.prototype.toString.call(e)?this.separator:this.separator.shift()),u=Object(n.g)("sprtr")(s);u.style.display="inline-block",this.node.appendChild(u)}}var c=function(){if(r.height=r.ctnrArr[0].clientHeight/(r.systemArr.length+1),r.node.style.height=r.height+"px",r.afterArr.length)r.frame(1);else for(var t=0,e=r.ctnrArr.length;t<e;t+=1)r._draw({digit:t,per:1,alter:~~(r.from/Math.pow(10,t))})};c(),window.addEventListener("resize",c)}},{key:"_draw",value:function(t){var e=t.per,r=t.alter,n=t.digit,i=this.ctnrArr[0].clientHeight/(this.systemArr.length+1);i&&this.height!==i&&(this.height=i);var o=this.beforeArr[n],a="translateY(".concat(-((e*r+o)%10+10)%10*this.height,"px)");this.ctnrArr[n].style.webkitTransform=a,this.ctnrArr[n].style.transform=a}},{key:"frame",value:function(t){for(var e=0,r=this.ctnrArr.length-1;r>=0;r-=1){var n=this.afterArr[r]-this.beforeArr[r];e+=n,this._draw({digit:r,per:this.easeFn(t),alter:this.direct?n:e}),e*=10}}},{key:"flipTo",value:function(t){var e=this,r=t.to,n=t.duration,i=t.easeFn,o=t.direct;i&&(this.easeFn=i),void 0!==o&&(this.direct=o);var a=this.ctnrArr.length;this.beforeArr=s(this.from,a),this.afterArr=s(r,a);var u=Date.now(),c=1e3*n||this.duration;requestAnimationFrame((function t(){var n=Date.now()-u;e.frame(n/c),n<c?requestAnimationFrame(t):(e.from=r,e.frame(1))}))}}])&&o(e.prototype,r),u&&o(e,u),t}()}])}));
},{}],2:[function(require,module,exports){
(function (global){(function (){
/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
(function(){'use strict';var root=typeof self=='object'&&self.self===self&&self||typeof global=='object'&&global.global===global&&global||this;var MAX_SAFE_INTEGER=9007199254740991;function isFinite(value){return!(typeof value!=='number'||value!==value||value===Infinity||value===-Infinity)}
function isSafeNumber(value){return typeof value==='number'&&Math.abs(value)<=MAX_SAFE_INTEGER}
var ENDS_WITH_DOUBLE_ZERO_PATTERN=/(hundred|thousand|(m|b|tr|quadr)illion)$/;var ENDS_WITH_TEEN_PATTERN=/teen$/;var ENDS_WITH_Y_PATTERN=/y$/;var ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;var ordinalLessThanThirteen={zero:'zeroth',one:'first',two:'second',three:'third',four:'fourth',five:'fifth',six:'sixth',seven:'seventh',eight:'eighth',nine:'ninth',ten:'tenth',eleven:'eleventh',twelve:'twelfth'};function makeOrdinal(words){if(ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words)||ENDS_WITH_TEEN_PATTERN.test(words)){return words+'th'}else if(ENDS_WITH_Y_PATTERN.test(words)){return words.replace(ENDS_WITH_Y_PATTERN,'ieth')}else if(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)){return words.replace(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN,replaceWithOrdinalVariant)}
return words}
function replaceWithOrdinalVariant(match,numberWord){return ordinalLessThanThirteen[numberWord]}
function toOrdinal(number){var num=parseInt(number,10);if(!isFinite(num)){throw new TypeError('Not a finite number: '+number+' ('+typeof number+')')}
if(!isSafeNumber(num)){throw new RangeError('Input is not a safe number, it’s either too large or too small.')}
var str=String(num);var lastTwoDigits=Math.abs(num%100);var betweenElevenAndThirteen=lastTwoDigits>=11&&lastTwoDigits<=13;var lastChar=str.charAt(str.length-1);return str+(betweenElevenAndThirteen?'th':lastChar==='1'?'st':lastChar==='2'?'nd':lastChar==='3'?'rd':'th')}
var TEN=10;var ONE_HUNDRED=100;var ONE_THOUSAND=1000;var ONE_MILLION=1000000;var ONE_BILLION=1000000000;var ONE_TRILLION=1000000000000;var ONE_QUADRILLION=1000000000000000;var MAX=9007199254740992;var LESS_THAN_TWENTY=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];var TENTHS_LESS_THAN_HUNDRED=['zero','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];function toWords(number,asOrdinal){var words;var num=parseInt(number,10);if(!isFinite(num)){throw new TypeError('Not a finite number: '+number+' ('+typeof number+')')}
if(!isSafeNumber(num)){throw new RangeError('Input is not a safe number, it’s either too large or too small.')}
words=generateWords(num);return asOrdinal?makeOrdinal(words):words}
function generateWords(number){var remainder,word,words=arguments[1];if(number===0){return!words?'zero':words.join(' and ').replace(/,$/,'')}
if(!words){words=[]}
if(number<0){words.push('minus');number=Math.abs(number)}
if(number<20){remainder=0;word=LESS_THAN_TWENTY[number]}else if(number<ONE_HUNDRED){remainder=number%TEN;word=TENTHS_LESS_THAN_HUNDRED[Math.floor(number/TEN)];if(remainder){word+='-'+LESS_THAN_TWENTY[remainder];remainder=0}}else if(number<ONE_THOUSAND){remainder=number%ONE_HUNDRED;word=generateWords(Math.floor(number/ONE_HUNDRED))+' hundred'}else if(number<ONE_MILLION){remainder=number%ONE_THOUSAND;word=generateWords(Math.floor(number/ONE_THOUSAND))+' thousand,'}else if(number<ONE_BILLION){remainder=number%ONE_MILLION;word=generateWords(Math.floor(number/ONE_MILLION))+' million,'}else if(number<ONE_TRILLION){remainder=number%ONE_BILLION;word=generateWords(Math.floor(number/ONE_BILLION))+' billion,'}else if(number<ONE_QUADRILLION){remainder=number%ONE_TRILLION;word=generateWords(Math.floor(number/ONE_TRILLION))+' trillion,'}else if(number<=MAX){remainder=number%ONE_QUADRILLION;word=generateWords(Math.floor(number/ONE_QUADRILLION))+' quadrillion,'}
words.push(word);return generateWords(remainder,words)}
function toWordsOrdinal(number){var words=toWords(number);return makeOrdinal(words)}
var numberToWords={toOrdinal:toOrdinal,toWords:toWords,toWordsOrdinal:toWordsOrdinal};if(typeof exports!='undefined'){if(typeof module!='undefined'&&module.exports){exports=module.exports=numberToWords}
exports.numberToWords=numberToWords}else{root.numberToWords=numberToWords}}())
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleCase = titleCase;
var SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i;
var TOKENS = /[^\s:–—-]+|./g;
var WHITESPACE = /\s/;
var IS_MANUAL_CASE = /.(?=[A-Z]|\..)/;
var ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;

function titleCase(input) {
  var result = "";
  var m; // tslint:disable-next-line

  while ((m = TOKENS.exec(input)) !== null) {
    var token = m[0],
        index = m.index;

    if ( // Ignore already capitalized words.
    !IS_MANUAL_CASE.test(token) && ( // Ignore small words except at beginning or end.
    !SMALL_WORDS.test(token) || index === 0 || index + token.length === input.length) && ( // Ignore URLs.
    input.charAt(index + token.length) !== ":" || WHITESPACE.test(input.charAt(index + token.length + 1)))) {
      // Find and uppercase first word character, skips over *modifiers*.
      result += token.replace(ALPHANUMERIC_PATTERN, function (m) {
        return m.toUpperCase();
      });
      continue;
    }

    result += token;
  }

  return result;
}

},{}],4:[function(require,module,exports){
"use strict";

var _titleCase = require("title-case");

var _numberFlip = require("number-flip");

var converter = require('number-to-words');

var debt = Number(' 4549301430 ');

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var debtCounterNum = document.getElementById("debtCounterNum");
var debtCounterText = document.getElementById("debtCounterText");
new _numberFlip.Flip({
  node: document.getElementById("debtCounterNum"),
  from: 0,
  to: debt,
  separator: ',',
  duration: 2 // second

}); //debtCounterNum.innerHTML = numberWithCommas(debt);

debtCounterText.innerHTML = (0, _titleCase.titleCase)(converter.toWords(debt)).replace(/, and/g, '<br>');

},{"number-flip":1,"number-to-words":2,"title-case":3}]},{},[4]);
