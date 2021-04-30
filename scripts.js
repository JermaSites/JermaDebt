async function getChart(results) {
	let labels = [], allPaid = [], colors = [];
	let time = [], event = [], additiveDebt = [], eventReason = [];
	var count =  0;
	var ctxLine = document.getElementById('lineChart').getContext('2d');
	
	var dynamicColors = function(test) {
		var r = 0;
		var g = 0 + test;
		var b = 245;
		return "rgb(" + r + "," + g + "," + b + ")";
	};

	var totalEvents = 0;
	//how much should we change each colour by?
	for(var item of results) {
		if(item.Active == "TRUE") {
			if(item.DebtChange < 0) {
				totalEvents++;
			}
		}
	}
	console.log(totalEvents);

	// Color of paid debts
	for(var item of results) {
		if(item.Active == "TRUE") {
			var paidDebt = Number(item.DebtChange);
			event.push(paidDebt);
			eventReason.push(item.Reason);
			event.reduce(function(a,b,i) { return additiveDebt[i] = a+b; }, 0);
			time.push(new Date(item.Time*1000));
			if(item.DebtChange < 0) {
				allPaid.push(paidDebt);
				labels.push(item.Reason);
				colors.push(dynamicColors(count));
				count += Math.round(((100 / totalEvents) * 2)); //change extremes between colors
			}
		}
	}

	allPaid.push(additiveDebt[additiveDebt.length - 1]);
	labels.push("Debt Left");
	
	additiveDebt.push(additiveDebt[additiveDebt.length - 1]);
	event.push(0);
	eventReason.push("Current Day");
	time.push(new Date());

	
	// var gradient = ctx.createRadialGradient(0, 0, 1090, 500, 500, 100);
	// gradient.addColorStop(0, 'rgba(126, 26, 150,100)');
	// gradient.addColorStop(0.5, 'rgba(172, 41, 204,100)');   
	// gradient.addColorStop(1, 'rgba(223, 94, 255,100)');

	// var borderGradient = ctx.createRadialGradient(0, 0, 1090, 500, 500, 100);
	// borderGradient.addColorStop(0, 'rgba(131, 58, 180,100)');
	// borderGradient.addColorStop(0.5, 'rgba(253, 29, 29,100)');   
	// borderGradient.addColorStop(1, 'rgba(252, 176, 69,100)');
	// colors.push(gradient);

	new Chart(ctxLine, {
		type: 'line',
		data: {
			labels: time,
			datasets: [{
				data: additiveDebt,
				pointBorderColor: '#c2394a',
				pointBackgroundColor: '#c2394a',
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgba(28,59,80,0.5)',
				fill: true,
			}]
		},
		
		options: {
			legend: { display: false },
			responsive: true,
			onResize: function(chart, size) {
				chart.update();
				console.log(chart);
				chart.padding = {
					// top: 5 * (parseInt(getComputedStyle(document.getElementById("lineChart")).fontSize)),
					// bottom: 3 * (parseInt(getComputedStyle(document.getElementById("lineChart")).fontSize)),					
					left: (parseInt(getComputedStyle(document.getElementById("div-wrapper")).paddingRight)),
					right: (parseInt(getComputedStyle(document.getElementById("div-wrapper")).paddingRight)),
				}
			},
			layout: {
				padding: {
					// top: 5 * (parseInt(getComputedStyle(document.getElementById("lineChart")).fontSize)),
					// bottom: 3 * (parseInt(getComputedStyle(document.getElementById("lineChart")).fontSize)),					
					left: (parseInt(getComputedStyle(document.getElementById("div-wrapper")).paddingRight)),
					right: (parseInt(getComputedStyle(document.getElementById("div-wrapper")).paddingRight)),
				}
			},
			scales: {
				xAxes: [{
					type: 'time',
					ticks: {
						fontSize: 18,
						maxTicksLimit: 20
					},
					gridLines: {
						color: ""
					}
				}],
				yAxes: [{
					ticks: {
						fontSize: 18,
						callback: function(value, index, values) {
								return ('$' + value.toLocaleString()).replace("$-", "-$");
						}
					},
					gridLines: {
						color: "#FFFFFF"
					}
				}]
		 	}, 
			tooltips: {
				enabled: true,
				mode: 'single',
				callbacks: {
					title: function(tooltipItems, data) { 
						return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(data.labels[tooltipItems[0].index]);
					},
					label: function(tooltipItem) { 
						return ('$' + additiveDebt[tooltipItem.index].toLocaleString()).replace("$-", "-$");
					},
					beforeFooter: function(tooltipItems, data) { 
						return ("+$" + event[tooltipItems[0].index].toLocaleString()).replace("+$-", "-$");
					},
					footer: function(tooltipItems, data) { 
						return eventReason[tooltipItems[0].index];
					}
				}
			}
		},
	});	  
}

function randomInRange(min, max) {
	return Math.random() * (max - min) + min;
}

(async () => {	
	Chart.defaults.global.defaultFontFamily = "Ubuntu";
	Chart.defaults.global.defaultFontColor = "white";
	Chart.defaults.global.fontSize = 18;
	d3.csv("_data/debt.csv").then(getChart);

	var debt = parseInt((document.getElementById("debtCounterNum").innerHTML.slice(1)).replace(/,/g, ''));

	if (debt == 0) {
		var duration = 15000;
		var animationEnd = Date.now() + duration;
		var colors = ["#a64ca6", "#4ca6a6"];
		var defaults = {startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, scalar: 1.5, colors: colors,};

		(function frame() {

			var timeLeft = animationEnd - Date.now();

			var particleCount = 4 * (timeLeft / duration);

			// since particles fall down, start a bit higher than random
			confetti(Object.assign({}, defaults, {particleCount, origin: {x: randomInRange(0.3, 0.5), y: Math.random() +.1 }}));
			confetti(Object.assign({}, defaults, {particleCount, origin: {x: randomInRange(0.5, 0.7), y: Math.random() +.1 }}));

			//side confetti
			
			confetti({
				particleCount: 2,
				angle: 50,
				spread: 55,
				origin: {x: 0},
				scalar: 1.5,
				ticks: 400,
				colors: colors,
			});
			confetti({
				particleCount: 2,
				angle: 130,
				spread: 55,
				origin: {x: 1},
				scalar: 1.5,
				ticks: 400,
				colors: colors,
			});

			if (Date.now() < animationEnd) {
				requestAnimationFrame(frame);
			}
		})();
	}
})();
