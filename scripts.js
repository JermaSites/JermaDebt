var converter = require("number-to-words");
var confetti = require("canvas-confetti");
import {titleCase} from "title-case";
import {Flip} from "number-flip";

async function readTextFile(file) {
	let resp = await fetch(file);
	return await resp.text();
}

(async () => {
	const result = await readTextFile("debt.txt");
	var resultMinusNum = result.replace(/\D/g, "");
	var debt = Number(resultMinusNum);
	var debtCounterNum = document.getElementById("debtCounterNum");
	var debtCounterText = document.getElementById("debtCounterText");

	new Flip({
		node: debtCounterNum,
		from: 0,
		to: debt,
		separator: ",",
		duration: 2, // second
	});

	debtCounterText.innerHTML = titleCase(converter.toWords(debt)).replace(/, and/g, ",<br>");

	if (debt == 0) {
		(function frame() {
			var duration = 15 * 1000;
			var animationEnd = Date.now() + duration;
			var defaults = {startVelocity: 30, spread: 360, ticks: 60, zIndex: 0};

			function randomInRange(min, max) {
				return Math.random() * (max - min) + min;
			}

			var interval = setInterval(function () {
				var timeLeft = animationEnd - Date.now();

				if (timeLeft <= 0) {
					return clearInterval(interval);
				}

				var particleCount = 50 * (timeLeft / duration);
				// since particles fall down, start a bit higher than random
				confetti(Object.assign({}, defaults, {particleCount, origin: {x: randomInRange(0.1, 0.3), y: Math.random() - 0.2}}));
				confetti(Object.assign({}, defaults, {particleCount, origin: {x: randomInRange(0.7, 0.9), y: Math.random() - 0.2}}));
			}, 250);

			var end = Date.now() + 15 * 1000;
			var colors = ["#800080", "#008080"];
			confetti({
				particleCount: 2,
				angle: 60,
				spread: 55,
				origin: {x: 0},
				colors: colors,
			});
			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				origin: {x: 1},
				colors: colors,
			});

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		});
	}
});
