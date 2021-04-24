async function getChart(results) {
	let labels = [], allPaid = [], colors = [];
	let time = [], event = [], additiveDebt = [], eventReason = [];
	var count =  0;
	var ctx = document.getElementById('myChart').getContext('2d');
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

	
	var gradient = ctx.createRadialGradient(0, 0, 1090, 500, 500, 100);
	gradient.addColorStop(0, 'rgba(126, 26, 150,100)');
	gradient.addColorStop(0.5, 'rgba(172, 41, 204,100)');   
	gradient.addColorStop(1, 'rgba(223, 94, 255,100)');

	var borderGradient = ctx.createRadialGradient(0, 0, 1090, 500, 500, 100);
	borderGradient.addColorStop(0, 'rgba(131, 58, 180,100)');
	borderGradient.addColorStop(0.5, 'rgba(253, 29, 29,100)');   
	borderGradient.addColorStop(1, 'rgba(252, 176, 69,100)');
	colors.push(gradient);

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
			elements: {
				line: {
					tension: 0.15
				}
			},
			scales: {
				xAxes: [{
					type: 'time',
					ticks: {
						fontSize: 18
					}
				}],
				yAxes: [{
					ticks: {
						fontSize: 18,
						callback: function(value, index, values) {
								return ('$' + value.toLocaleString()).replace("$-", "-$");
						}
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

	new Chart(ctx, {
		// The type of chart we want to create
		type: 'doughnut',
	
		// The data for our dataset
		data: {
			labels: labels,
			datasets: [{
				backgroundColor: colors,
				// borderColor: '#530866',
				// borderWidth: 1,
				data: allPaid
			}]
		},
	
		// Configuration options go here
		options: {
			legend: {
				position: "bottom",
				labels: {
					fontColor: "white",
					fontSize: 18,
					fontFamily: "ubuntu",
				},
			},
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				callbacks: {
				  // this callback is used to create the tooltip label
				  label: function(tooltipItem, data) {
						// get the data label and data value to display
						// convert the data value to local string so it uses a comma seperated number
						var dataLabel = data.labels[tooltipItem.index];
						var value = (': $' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString()).replace("$-", "-$");
			
						// make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
						if (Chart.helpers.isArray(dataLabel)) {
							// show value on first line of multiline label
							// need to clone because we are changing the value
							dataLabel = dataLabel.slice();
							dataLabel[0] += value;
						} else {
							dataLabel += value;
						}
			
						// return the text to display on the tooltip
						return dataLabel;
					}
				}
			}
		}
	});
}

(async () => {	
	Chart.defaults.global.defaultFontFamily = "Ubuntu";
	Chart.defaults.global.defaultFontColor = "white";
	Chart.defaults.global.fontSize = 18;
	d3.csv("_data/debt.csv").then(getChart);
})();
