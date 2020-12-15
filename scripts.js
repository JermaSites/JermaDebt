var converter = require('number-to-words');
import { titleCase } from "title-case";
import { Flip } from 'number-flip'

var debt = Number(' 54549301430 ');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var debtCounterNum = document.getElementById("debtCounterNum");
var debtCounterText = document.getElementById("debtCounterText");

new Flip({
  node: document.getElementById("debtCounterNum"),
  from: 0,
  to: debt,
  separator: ',',
  duration: 2 // second
})

//debtCounterNum.innerHTML = numberWithCommas(debt);
debtCounterText.innerHTML = titleCase(converter.toWords(debt)).replace(/, and/g, ',<br>');
