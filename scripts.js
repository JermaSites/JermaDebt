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