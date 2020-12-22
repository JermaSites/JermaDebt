var converter = require('number-to-words');
import { titleCase } from "title-case";
import { Flip } from 'number-flip'

async function readTextFile(file) {
	let resp = await fetch(file);
	return await resp.text();
}

(async () => {
	const result = await readTextFile("debt.txt");
	var resultMinusNum = result.replace(/\D/g,'');
	var debt = Number(resultMinusNum);
	var debtCounterNum = document.getElementById("debtCounterNum");
	var debtCounterText = document.getElementById("debtCounterText");
	
	new Flip({
		node: debtCounterNum,
		from: 0,
		to: debt,
		separator: ',',
		duration: 2 // second
	})
	
	debtCounterText.innerHTML = titleCase(converter.toWords(debt)).replace(/, and/g, ',<br>');
})();

