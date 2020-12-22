var converter = require('number-to-words');
import { titleCase } from "title-case";
import { Flip } from 'number-flip'

function readTextFile(file)
{
	return new Promise(resolve => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					var allText = rawFile.responseText;
					resolve(allText);
				}
			}
		}
		rawFile.send(null);
	  });
}

async function asyncCall() {
  //console.log('calling');
  const result = await readTextFile("debt.txt");
  //console.log(result);
  var resultMinusNum = result.replace(/\D/g,'');
  var debt = Number(resultMinusNum);
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
}

asyncCall();

