var converter = require("number-to-words");
import confetti from "canvas-confetti";
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
		var duration = 15000;
		var animationEnd = Date.now() + duration;
		var colors = ["#a64ca6", "#4ca6a6"];
		var defaults = {startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, scalar: 1.5, colors: colors,};
		  
		  function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

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
