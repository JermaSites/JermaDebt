import { Flip } from 'number-flip'
var debt = parseInt((document.getElementById("debtCounterNum").innerHTML.slice(1)).replace(/,/g, ''));
document.getElementById("debtCounterNum").innerHTML = "$";
new Flip({
	node: document.getElementById("debtCounterNum"),
	from: 0,
	to: debt,
	separator: ',',
	duration: 2 // second
})