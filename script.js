document.getElementById('result').innerHTML = 1;
// document.getElementById('demo').innerHTML = 2;

const buttons = document.querySelectorAll('input');

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

let countWin = 0;
let countLose = 0;

function game(playerChoice) {
	let playerSelection = playerChoice;
	let computerSelection = computerPlay();
	// let input = window.prompt('enter your choice :');
	let result = '';

	playRound(playerSelection, computerSelection);
	function playRound(playerSelection, computerSelection) {
		if (playerSelection == 'rock') {
			if (computerSelection == 'rock') {
				result = 'rock and rock, tie';
			} else if (computerSelection == 'paper') {
				countLose++;
				result = 'rock and paper, computer win!';
			} else {
				countWin++;
				result = 'rock and scissors, player win!';
			}
		} else if (playerSelection == 'paper') {
			if (computerSelection == 'rock') {
				countWin++;
				result = 'paper and rock, player wins!';
			} else if (computerSelection == 'paper') {
				result = 'paper and paper, tie!';
			} else {
				countLose++;
				result = 'paper and scissors, computer wins!';
			}
		} else if (playerSelection == 'scissors') {
			if (computerSelection == 'rock') {
				countLose++;
				result = 'scissors and rock, computer wins!';
			} else if (computerSelection == 'paper') {
				countWin++;
				result = 'scissors and paper, player wins!';
			} else {
				result = 'scissors and scissors, tie!';
			}
		} else {
			result = 'enter valid statement';
		}

		document.getElementById('result').innerHTML = result;
		document.getElementById('win').innerHTML = countWin;
		document.getElementById('lose').innerHTML = countLose;
	}

	if (countWin == 5) {
		result = 'Human win';
		document.getElementById('result').innerHTML = result;

		disableButtons();
	} else if (countLose == 5) {
		result = 'Computer win';
		document.getElementById('result').innerHTML = result;

		disableButtons();
	}
}

buttons.forEach((button) => {
	button.addEventListener('click', function () {
		game(button.value);
	});
});

function disableButtons() {
	buttons.forEach((element) => {
		element.disabled = true;
	});
}
