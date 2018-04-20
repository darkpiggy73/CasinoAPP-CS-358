var MONEY = document.getElementById('money').value; //STARTING MONEY
// jshint maxerr:200
document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
var amtRed = 0,
	amtGreen = 0,
	amtBlack = 0;
amtSpace = [];
amtLowHigh = [];
(red = 0), (green = 0), (black = 0);
timer();

for (var i = 0; i < 36; i++) {
	amtSpace[i] = 0;
}
for (var i = 0; i < 2; i++) {
	amtLowHigh[i] = 0;
}





  function addMoney(amount){
$.ajax({
   method:'post',
   dataType: "json",
   url: 'changeMoney.php',
  data: {username: localStorage.getItem('username'),
        dataAmount: amount
        },
  success: function(data) {
  MONEY=data;
}
 });
  }





//START GAME
function PlayGame() {
	var rand = Math.floor(Math.random() * 37);
	var outcome = [];
	outcome[1] = rand;
	if (rand !== 0 && rand % 2 === 0) {
		outcome[0] = 'BLACK';
		black += 1;
		return outcome;
	}
	if (rand !== 0 && rand % 2 === 1) {
		outcome[0] = 'RED';
		red += 1;
		return outcome;
	} else if (rand === 0 || rand === 37) {
		outcome[0] = 'GREEN';
		green += 1;
		return outcome;
	}
}

//TEST GAMES
function ButtonPlay() {
	var outcome = PlayGame();
	history(outcome);
	Bet('RED', amtRed, outcome[0]);
	Bet('GREEN', amtGreen, outcome[0]);
	Bet('BLACK', amtBlack, outcome[0]);
	for (var j = 0; j < 36; j++) {
		spaceBet(j, amtSpace[j], outcome[1]);
	}
	(amtRed = 0), (amtGreen = 0), (amtBlack = 0);
	for (var i = 0; i < 36; i++) {
		amtSpace[i] = 0;
	}
	//What is K?
	//LoHBet('LOW', amtLowHigh[k], outcome[2]);
	//LoHBet('HIGH', amtLowHigh[k], outcome[2]);
	document.getElementById('money').innerHTML =
		'Balance: ' + MONEY + '  ' + 'Stats: ' + red + ' ' + green + ' ' + black;

	document.getElementById('game').innerHTML = outcome[0] + ' ' + outcome[1];
}

//Red button bet
function ButtonRed() {
	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('money');
	if (amount > MONEY || amount < 0) {
		amount = 0;
	} else {
		amtRed += amount;
		addMoney(-amount);
		console.log('Bet red ', amount);
		document.getElementById('money').innerHTML =
			'Balance: ' + MONEY + '  ' + red + ' ' + green + ' ' + black;
	}
}

//Green button bet
function ButtonGreen() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtGreen += amount;
	addMoney(-amount);
	console.log('Bet green ', amount);
	document.getElementById('money').innerHTML =
		'Balance: ' + MONEY + '  ' + red + ' ' + green + ' ' + black;
}

//Black button bet
function ButtonBlack() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtBlack += amount;
	addMoney(-amount);
	console.log('Bet black ', amount);
	document.getElementById('money').innerHTML =
		'Balance: ' + MONEY + '  ' + red + ' ' + green + ' ' + black;
}

function BetOnSpace(i) {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtSpace[i] += amount;
	addMoney(-amount);
	console.log('Bet Space ', i);
	document.getElementById('money').innerHTML =
		'Balance: ' + MONEY + '  ' + red + ' ' + green + ' ' + black;
}

//BETTING
function Bet(bet, amount, game) {
	if (bet === game) {
		if (game === 'RED' || game === 'BLACK') {
			RoBWin(amount);
		} else if (game === 'GREEN') {
			GWin(amount);
		}
	}
}
function spaceBet(bet, amount, game) {
	if (bet === game) {
		spaceWin(amount);
	}
}
//RED OR BLACK WIN
function RoBWin(amount) {
	addMoney(2*amount);
}

//GREEN WIN
function GWin(amount) {
	addMoney(14*amount);
}

function spaceWin(amount) {
	addMoney(35*amount);
}

function ButtonAdd(num) {
	var value = parseInt(document.getElementById('Money').value);
	value += num;
	document.getElementById('Money').value = value;
}
function ButtonMulti(num) {
	var value = parseInt(document.getElementById('Money').value);
	value *= num;
	document.getElementById('Money').value = value;
}

function ButtonClear() {
	var value = parseInt(document.getElementById('Money').value);
	document.getElementById('Money').value = 0;
}

function ButtonMax() {
	var value = parseInt(document.getElementById('Money').value);
	value = MONEY;
	document.getElementById('Money').value = value;
}
//Specific button bet
function BetOnSpace(i) {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtSpace[i] += amount;
	addMoney(-amount);
	console.log('Bet Space ', i);
	document.getElementById('money').innerHTML =
		'Balance: ' + MONEY + '  ' + red + ' ' + green + ' ' + black;
}

//Low button bet
function ButtonLow() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtLowHigh[0] += amount;
	addMoney(-amount);
	console.log('Bet Low ', amount);
	document.getElementById('money').innerHTML =
		'Balance: ' + MONEY + '  ' + red + ' ' + green + ' ' + black;
}

//High button bet
function ButtonHigh() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtLowHigh[1] += amount;
	addMoney(-amount);
	console.log('Bet High ', amount);
	document.getElementById('money').innerHTML =
		'Balance: ' + MONEY + '  ' + red + ' ' + green + ' ' + black;
}

//BET LOW OR HIGH
function LoHBet(bet, amount, game) {
	if (bet === game) {
		LoHWin(amount);
	}
}
//LOW OR HIGH WIN
function LoHWin(amount) {
	addMoney(2*amount);
}

var hist = [];
function history(color) {
	hist.push(color);
	if (hist.length > 8) {
		hist.splice(0, 1);
	}
	document.getElementById('history').innerHTML = hist.join(' ');
}

function timer() {
	var timeleft = 10;
	var downloadTimer = setInterval(function() {
		timeleft -= 1;
		document.getElementById('countdowntimer').textContent = timeleft;
		if (timeleft <= 0) {
			ButtonPlay();
			clearInterval(downloadTimer);
			setInterval(timer());
		}
	}, 1000);
}