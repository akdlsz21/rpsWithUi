function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function computerPlay() {
	let computerRandom = getRandomInt(3);
	if (computerRandom == 0) {
		return 'rock';
	} else if (computerRandom == 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function playerChoice(string) {
	if (string.toLowerCase() == 'rock') {
		return 'rock';
	} else if (string.toLowerCase() == 'paper') {
		return 'paper';
	} else {
		return 'scissors';
	}
}

//asdasdsad
function game() {
	let countWin = 0;
	let countLose = 0;

	for (count = 0; count < 49; count++) {
		if (countWin == 5 || countLose == 5) {
			break;
		}
		let computerSelection = computerPlay();
		let input = window.prompt('enter your choice :');
		let playerSelection = playerChoice(input);
		console.log(playRound(playerSelection, computerSelection));
		function playRound(string, func) {
			if (string == 'rock') {
				if (func == 'rock') {
					return 'rock and rock, tie';
				} else if (func == 'paper') {
					countLose++;
					return 'rock and paper, computer win!';
				} else {
					countWin++;
					return 'rock and scissors, player win!';
				}
			} else if (string == 'paper') {
				if (func == 'rock') {
					countWin++;
					return 'paper and rock, player wins!';
				} else if (func == 'paper') {
					return 'paper and paper, tie!';
				} else {
					countLose++;
					return 'paper and scissors, computer wins!';
				}
			} else if (string == 'scissors') {
				if (func == 'rock') {
					countLose++;
					return 'scissors and rock, computer wins!';
				} else if (func == 'paper') {
					countWin++;
					return 'scissors and paper, player wins!';
				} else {
					return 'scissors and scissors, tie!';
				}
			} else {
				return 'enter valid statement';
			}
		}
	}

	console.log(countWin);
	console.log(countLose);
}

game();
