var converter = require('number-to-words');
import { titleCase } from "title-case";
import { Flip } from "number-flip";
import Chart from "chart.js";


async function readTextFile(file) {
	let resp = await fetch(file);
	return await resp.text();
}

async function getChart(debt) {
	let labels     = [], allPaid = [], colors = [];
	var count      =  0;
	var ctx        = document.getElementById('myChart').getContext('2d');
	var allPaidTxt = document.getElementById("paid").getElementsByTagName("li");

	var dynamicColors = function(test) {
		var r = 0;
		var g = 0 + test;
		var b = 255;
		return "rgb(" + r + "," + g + "," + b + ")";
	};

	for(var item of allPaidTxt)
	{
		var split = item.innerText.split("$");
		var total = split[1].split(" ")[0];
		var resultMinusNum = total.replace(/,/g,'');
		var paidDebt = Number(resultMinusNum);
		allPaid.push(paidDebt);
		labels.push(split[1].split("-")[1]);
		colors.push(dynamicColors(count));
		count+=15;
	}

	allPaid.push(debt);
	labels.push(" Debt Left");
	var gradient = ctx.createRadialGradient(0, 0, 1090, 500, 500, 100);
	gradient.addColorStop(0, 'rgba(126, 26, 150,100)');
	gradient.addColorStop(0.5, 'rgba(172, 41, 204,100)');   
	gradient.addColorStop(1, 'rgba(223, 94, 255,100)');

	var borderGradient = ctx.createRadialGradient(0, 0, 1090, 500, 500, 100);
	borderGradient.addColorStop(0, 'rgba(131, 58, 180,100)');
	borderGradient.addColorStop(0.5, 'rgba(253, 29, 29,100)');   
	borderGradient.addColorStop(1, 'rgba(252, 176, 69,100)');
	colors.push(gradient);

	new Chart(ctx, {
		// The type of chart we want to create
		type: 'doughnut',
	
		// The data for our dataset
		data: {
			labels: labels,
			datasets: [{
				backgroundColor: colors,
				borderColor: borderGradient,
				borderWidth: 5,
				data: allPaid
			}]
		},
	
		// Configuration options go here
		options: {
			legend: {
			  position: 'right',
			  labels: {
				fontColor: "white",
				fontSize: 18,
				},
			},
		}
	});
}

(async () => {
	const result = await readTextFile("debt.txt");
	var resultMinusNum = result.replace(/\D/g,'');
	var debt = Number(resultMinusNum);
	var debtCounterNum = document.getElementById("debtCounterNum");
	var debtCounterText = document.getElementById("debtCounterText");
	
	getChart(debt);
	new Flip({
		node: debtCounterNum,
		from: 0,
		to: debt,
		separator: ',',
		duration: 2 // second
	})
	
	debtCounterText.innerHTML = titleCase(converter.toWords(debt)).replace(/, and/g, ',<br>');
})();
