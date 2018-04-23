var MONEY = 500; //STARTING MONEY
document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
var 	amtRed = 0,
	amtGreen = 0,
	amtBlack = 0,
	amtSpace = [],
	amtLowHigh = [],
	amtCol = [];

for(var i = 0; i < 36; i++) {
  	amtSpace[i] = 0;
}
for(var i = 0; i < 2; i++) {
	amtLowHigh[i] = 0;
}
for(var i = 0; i < 3; i++) {
  amtCol[i] = 0;
}

//START GAME
function PlayGame() {
	var rand = Math.floor(Math.random() * 36);
	var outcome = [];
	outcome[1] = rand;
	if (rand !== 0 && rand % 2 === 0) {
		outcome[0] = 'BLACK';
	}
	if (rand !== 0 && rand % 2 === 1) {
	  outcome[0] = 'RED';
	} else if (rand === 0) {
	  outcome[0] = 'GREEN';
	}
	if (rand < 19 && rand !== 0) {
		outcome[2] = 'LOW';
	} else if (rand > 18 && rand !== 0) {
		outcome[2] = 'HIGH';
	} else {
		outcome[2] = 'GREEN';
	}
	if (rand === 0) {
	  outcome[3] = 'GREEN';
	}
	else if (rand%3 === 1) {
	  outcome[3] = "LEFT";
	}
	else if (rand%3 === 2) {
	  outcome[3] = "MIDDLE";
	}
	else if (rand%3 === 0) {
	  outcome[3] = "RIGHT";
	}
	
	return outcome;
}

//TEST GAMES
function ButtonPlay() {
	var outcome = PlayGame();
	Bet('RED', amtRed, outcome[0]);
	Bet('GREEN', amtGreen, outcome[0]);
	Bet('BLACK', amtBlack, outcome[0]);
	for(var j = 0; j < 36; j++) {
		spaceBet(j, amtSpace[j], outcome[1]);
	}
	LoHBet('LOW', amtLowHigh[0], outcome[2]);
	LoHBet('HIGH', amtLowHigh[1], outcome[2]);
	colBet('LEFT', amtCol[0], outcome[3]);
	colBet('MIDDLE', amtCol[1], outcome[3]);
	colBet('RIGHT', amtCol[2], outcome[3]);
	
	(amtRed = 0), (amtGreen = 0), (amtBlack = 0);
	amtLowHigh[0] = 0;
	amtLowHigh[1] = 0;
	amtCol[0] = 0;
	amtCol[1] = 0;
	amtCol[2] = 0;
	for(var i = 0; i < 36; i++) {
    amtSpace[i] = 0;
  }
	document.getElementById('money').innerHTML =
		'Balance: ' + MONEY + ' ' + outcome[0] + " " + outcome[1];
}

//Red button bet
function ButtonRed() {
	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('Money');
	if (amount > MONEY || amount < 0) {
		amount = 0;
	} else {
		amtRed += amount;
		MONEY -= amount;
		console.log('Bet red ', amount);
		document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
	}
}

//Green button bet
function ButtonGreen() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtGreen += amount;
	MONEY -= amount;
	console.log('Bet green ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

//Black button bet
function ButtonBlack() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtBlack += amount;
	MONEY -= amount;
	console.log('Bet black ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

//Specific button bet
function BetOnSpace(i) {
  var amount = parseInt(document.getElementById('Money').value);
  if (amount > MONEY || amount < 0) {
    amount = 0;
  }
  amtSpace[i] += amount;
  MONEY -= amount;
  console.log('Bet Space ', i);
  document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
 }

//Low button bet
function ButtonLow() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtLowHigh[0] += amount;
	MONEY -= amount;
	console.log('Bet Low ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

//High button bet
function ButtonHigh() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtLowHigh[1] += amount;
	MONEY -= amount;
	console.log('Bet High ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

//Left column bet
function ButtonLeft() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtCol[0] += amount;
	MONEY -= amount;
	console.log('Bet Left ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

//Middle column bet
function ButtonMiddle() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtCol[1] += amount;
	MONEY -= amount;
	console.log('Bet Middle ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

//Right column bet
function ButtonRight() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtCol[2] += amount;
	MONEY -= amount;
	console.log('Bet Right ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
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

//BET ON SPECIFIC SPACE
function spaceBet(bet, amount, game) {
  if(bet === game){
    spaceWin(amount);
  }
}

//BET LOW OR HIGH
function LoHBet(bet, amount, game) {
	if (bet === game) {
		LoHWin(amount);
	}
}

//BET ON COLUMNS
function colBet(bet, amount, game) {
  if (bet === game) {
    colWin(amount);
  }
}

//RED OR BLACK WIN
function RoBWin(amount) {
	MONEY += amount * 2;
}

//LOW OR HIGH WIN
function LoHWin(amount) {
	MONEY += amount * 2;
}

//GREEN WIN
function GWin(amount) {
	MONEY += amount * 14;
}

//SPACE WIN
function spaceWin(amount) {
  MONEY += amount * 36;
}

//COLUMN WIN
function colWin(amount) {
  MONEY += amount * 3;
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
