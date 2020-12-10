(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCase = void 0;
var SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i;
var TOKENS = /[^\s:–—-]+|./g;
var WHITESPACE = /\s/;
var IS_MANUAL_CASE = /.(?=[A-Z]|\..)/;
var ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;
function titleCase(input) {
    var result = "";
    var m;
    // tslint:disable-next-line
    while ((m = TOKENS.exec(input)) !== null) {
        var token = m[0], index = m.index;
        if (
        // Ignore already capitalized words.
        !IS_MANUAL_CASE.test(token) &&
            // Ignore small words except at beginning or end.
            (!SMALL_WORDS.test(token) ||
                index === 0 ||
                index + token.length === input.length) &&
            // Ignore URLs.
            (input.charAt(index + token.length) !== ":" ||
                WHITESPACE.test(input.charAt(index + token.length + 1)))) {
            // Find and uppercase first word character, skips over *modifiers*.
            result += token.replace(ALPHANUMERIC_PATTERN, function (m) { return m.toUpperCase(); });
            continue;
        }
        result += token;
    }
    return result;
}
exports.titleCase = titleCase;

},{}],3:[function(require,module,exports){
var converter = require('number-to-words');
var titleCase = require("title-case");

var debt = Number(' 4549301430 ');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var debtCounterNum = document.getElementById("debtCounterNum");
var debtCounterText = document.getElementById("debtCounterText");

debtCounterNum.innerHTML = numberWithCommas(debt);
debtCounterText.innerHTML = titleCase.titleCase(converter.toWords(debt)).replace(/, and/g, '<br>');
},{"number-to-words":1,"title-case":2}]},{},[3]);
