var MONEY = 1000;
addMoney(0);
var amtRed = 0,
	amtGreen = 0,
	amtBlack = 0,
	amtSpace = [],
	amtEven = 0,
	amtOdd = 0,
  amtLowHigh = [],
  amtThirds = [],
  amtCol = [];


for(var i = 0; i <= 37; i++) {
  amtSpace[i] = 0;
}
for(var i = 0; i < 2; i++) {
	amtLowHigh[i] = 0;
}
for (var i = 0; i < 3; i++) {
  amtThirds[i] = 0;
}
for(var i = 0; i < 3; i++) {
  amtCol[i] = 0;
}


  function addMoney(amount){
/*$.ajax({
   method:'post',
   dataType: "json",
   url: 'changeMoney.php',
  data: {username: localStorage.getItem('username'),
        dataAmount: amount
        },
  success: function(data) {
  MONEY=data;
}
  
 });*/
  }


//START GAME
function PlayGame() {
	var rand = Math.floor(Math.random() * 37);
	//var rand = 5;
	var outcome = [];
	outcome[1] = rand;
	if (rand !== 0 && rand !== 37 && rand % 2 === 0) {
		outcome[3] = 'EVEN';
	} else if (rand !== 0 && rand !== 37 && rand % 2 === 1) {
	  outcome[3] = 'ODD';
	} else {
	  outcome[3] = "NONE";
	}
	if (rand === 0 || rand === 37) {
	  outcome[0] = 'GREEN';
	} else if (rand === 2 || rand === 4 || rand === 6 || rand === 8 || rand === 10 || rand === 11 || rand === 13 || rand === 15 || rand === 17 || rand === 20 || rand === 22 || rand === 24 || rand === 26 || rand === 28 || rand === 29 || rand === 31 || rand === 33 || rand === 35) {
	  
	  outcome[0] = "BLACK";
	  
	} else if (rand === 1 || rand === 3 || rand === 5 || rand === 7 || rand === 9 || rand === 12 || rand === 14 || rand === 16 || rand === 18 || rand === 19 || rand === 21 || rand === 23 || rand === 25 || rand === 27 || rand === 30 || rand === 32 || rand === 34 || rand === 36) {
	  outcome[0] = "RED";
	}
	
	if (rand < 19 && rand !== 0 && rand !== 37) {
		outcome[2] = 'LOW';
	} else if (rand > 18 && rand !== 0 && rand !== 37) {
		outcome[2] = 'HIGH';
	} else {
		outcome[2] = 'NONE';
	}
	
	if ( rand <= 12 && rand !== 0) {
	  outcome[4] = "FIRST";
	} else if (rand > 12 && rand <= 24) {
	  outcome[4] = "SECOND";
	} else if (rand > 24 && rand !== 37) {
	  outcome[4] = "THIRD";
	} else {
	  outcome[4] = "NONE";
	}
	
	if (rand === 0) {
	  outcome[5] = 'GREEN';
	}
	else if (rand%3 === 1) {
	  outcome[5] = "LEFT";
	}
	else if (rand%3 === 2) {
	  outcome[5] = "MIDDLE";
	}
	else if (rand%3 === 0) {
	  outcome[5] = "RIGHT";
	}
	
	console.log(outcome);
	return outcome;
}

//TEST GAMES
function ButtonPlay() {
	var outcome = PlayGame();
	Bet('RED', amtRed, outcome[0]);
	Bet('GREEN', amtGreen, outcome[0]);
	Bet('BLACK', amtBlack, outcome[0]);
	
	oddEvenBet('EVEN', amtEven, outcome[3]);
	oddEvenBet('ODD', amtOdd, outcome[3]);
	
	LoHBet('LOW', amtLowHigh[0], outcome[2]);
	LoHBet('HIGH', amtLowHigh[1], outcome[2]);
	
	ThirdsBet('FIRST', amtThirds[0], outcome[4]);
	ThirdsBet('SECOND', amtThirds[1], outcome[4]);
	ThirdsBet('THIRD', amtThirds[2], outcome[4]);
	
	colBet('LEFT', amtCol[0], outcome[5]);
	colBet('MIDDLE', amtCol[1], outcome[5]);
	colBet('RIGHT', amtCol[2], outcome[5]);
	
	for(var j = 0; j <= 37; j++) {
	  spaceBet(j, amtSpace[j], outcome[1]);
	}
	
	(amtRed = 0), (amtGreen = 0), (amtBlack = 0), (amtOdd = 0), (amtEven = 0);
	for(var i = 0; i <= 37; i++) {
    amtSpace[i] = 0;
  }
  amtLowHigh[0] = 0;
	amtLowHigh[1] = 0;
	
	amtCol[0] = 0;
	amtCol[1] = 0;
	amtCol[2] = 0;
	
  amtThirds[0] = 0;
  amtThirds[1] = 0;
  amtThirds[2] = 0;
  
  if (outcome[1] === 37) {
    outcome[1] = "00";
  }
  document.getElementById('chances').innerHTML = '';
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
      addMoney(-amount);
		MONEY -= amount;
		console.log('Bet red ', amount);
		document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
	}
}

function hoverRed()
{
  	var amount = parseInt(document.getElementById('Money').value);
  	document.getElementById('chances').innerHTML =
			'BET RED: ' + amount + ', CHANCE OF WINNING: 46.37%, PAYOUT:' + amount * 2;
}

function unhoverRed()
{
    	document.getElementById('chances').innerHTML = "";
}

//Black button bet
function ButtonBlack() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0 ) {
		amount = 0;
	}
	amtBlack += amount;
   addMoney(-amount);
	MONEY -= amount;
	console.log('Bet black ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

function hoverBlack()
{
  	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('chances').innerHTML = 
	  'BET BLACK: ' + amount + ', CHANCE OF WINNING: 46.37%, PAYOUT:' + amount*2 + '<br>';
}

function unhoverRed()
{
    	document.getElementById('chances').innerHTML = "";
}

//Betting on one of the spaces
function BetOnSpace(i) {
  var amount = parseInt(document.getElementById('Money').value);
  if (amount > MONEY || amount < 0 ) {
    amount = 0;
  }
  amtSpace[i] += amount;
   addMoney(-amount);
  MONEY -= amount;
  console.log('Bet Space ', i);
  document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
 }
 
 function hoverSpace(i)
{
  	var amount = parseInt(document.getElementById('Money').value);
	if(i === 37) {
	document.getElementById('chances').innerHTML = 'BET 00' + ': ' + amount + ', CHANCE OF WINNING: 2.63%, PAYOUT:' + amount*36 + '<br>';
  }
  else {
	document.getElementById('chances').innerHTML = 'BET ' + i + ': ' + amount + ', CHANCE OF WINNING: 2.63%, PAYOUT:' + amount*36 + '<br>';
  }
}

function unhoverSpace()
{
    	document.getElementById('chances').innerHTML = "";
}
 
//Betting on Evens
function ButtonEven() {
   var amount = parseInt(document.getElementById('Money').value);
   if (amount > MONEY || amount < 0 ) {
     amount = 0;
   }
   amtEven += amount;
    addMoney(-amount);
   MONEY -= amount;
   console.log('Bet Even');
   document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
   
 }
 
 function hoverEven()
{
  	var amount = parseInt(document.getElementById('Money').value);
	 document.getElementById('chances').innerHTML = 
	    'BET EVEN: ' + amount + ', CHANCE OF WINNING: 46.37%, PAYOUT:' + amount*2 + '<br>';
}

function unhoverEven()
{
    	document.getElementById('chances').innerHTML = "";
}
 
//Betting on Odds
function ButtonOdd(){
  var amount = parseInt(document.getElementById('Money').value);
   if (amount > MONEY || amount < 0) {
     amount = 0;
   }
   amtOdd += amount;
   addMoney(-amount);
   MONEY -= amount;
   console.log('Bet Odd');
   document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}
function hoverOdd()
{
  	var amount = parseInt(document.getElementById('Money').value);
   document.getElementById('chances').innerHTML = 
      'BET ODD: ' + amount + ', CHANCE OF WINNING: 46.37%, PAYOUT:' + amount*2 + '<br>';
}

function unhoverOdd()
{
    	document.getElementById('chances').innerHTML = "";
}

//Low button bet
function ButtonLow() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtLowHigh[0] += amount;
   addMoney(-amount);
	MONEY -= amount;
	console.log('Bet Low ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

function hoverLow()
{
  	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('chances').innerHTML = 
	'BET 1 TO 18: ' + amount + ', CHANCE OF WINNING: 46.37%, PAYOUT:' + amount*2 + '<br>';
}

function unhoverLow()
{
    	document.getElementById('chances').innerHTML = "";
}

//High button bet
function ButtonHigh() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtLowHigh[1] += amount;
   addMoney(-amount);
	MONEY -= amount;
	console.log('Bet High ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

function hoverHigh()
{
  	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('chances').innerHTML = 
	'BET 19 TO 36: ' + amount + ', CHANCE OF WINNING: 46.37%, PAYOUT:' + amount*2 + '<br>';
}

function unhoverHigh()
{
    	document.getElementById('chances').innerHTML = "";
}

function ButtonFirst() {
  var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtThirds[0] += amount;
   addMoney(-amount);
	MONEY -= amount;
	console.log('Bet First ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

function hoverFirst()
{
  	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('chances').innerHTML = 
	    'BET FIRST DOZEN: ' + amount + ', CHANCE OF WINNING: 31.58%, PAYOUT:' + amount*3 + '<br>';
}

function unhoverFirst()
{
    	document.getElementById('chances').innerHTML = "";
}

function ButtonSecond() {
  var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0 ) {
		amount = 0;
	}
	amtThirds[1] += amount;
   addMoney(-amount);
	MONEY -= amount;
	console.log('Bet Second ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

function hoverSecond()
{
  	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('chances').innerHTML = 
	    'BET SECOND DOZEN: ' + amount + ', CHANCE OF WINNING: 31.58%, PAYOUT:' + amount*3 + '<br>';
}

function unhoverSecond()
{
    	document.getElementById('chances').innerHTML = "";
}

function ButtonThird() {
  var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtThirds[2] += amount;
   addMoney(-amount);
	MONEY -= amount;
	console.log('Bet Third ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

function hoverThird()
{
  	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('chances').innerHTML = 
	    'BET THIRD DOZEN: ' + amount + ', CHANCE OF WINNING: 31.58%, PAYOUT:' + amount*3 + '<br>';
}

function unhoverThird()
{
    	document.getElementById('chances').innerHTML = "";
}

function ButtonLeft() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtCol[0] += amount;
   addMoney(-amount);
	MONEY -= amount;
	console.log('Bet Left ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

function hoverLeft()
{
  	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('chances').innerHTML = 
	    'BET LEFT COLUMN: ' + amount + ', CHANCE OF WINNING: 31.58%, PAYOUT:' + amount*3 + '<br>';
}

function unhoverLeft()
{
    	document.getElementById('chances').innerHTML = "";
}

//Middle column bet
function ButtonMiddle() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtCol[1] += amount;
   addMoney(-amount);
	MONEY -= amount;
	console.log('Bet Middle ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

function hoverMiddle()
{
  	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('chances').innerHTML = 
	    'BET MIDDLE COLUMN: ' + amount + ', CHANCE OF WINNING: 31.58%, PAYOUT:' + amount*3 + '<br>';
}

function unhoverMiddle()
{
    	document.getElementById('chances').innerHTML = "";
}

//Right column bet
function ButtonRight() {
	var amount = parseInt(document.getElementById('Money').value);
	if (amount > MONEY || amount < 0) {
		amount = 0;
	}
	amtCol[2] += amount;
   addMoney(-amount);
	MONEY -= amount;
	console.log('Bet Right ', amount);
	document.getElementById('money').innerHTML = 'Balance: ' + MONEY;
}

function hoverRight()
{
  	var amount = parseInt(document.getElementById('Money').value);
	document.getElementById('chances').innerHTML = 
	'BET RIGHT COLUMN: ' + amount + ', CHANCE OF WINNING: 31.58%, PAYOUT:' + amount*3 + '<br>';
}

function unhoverRight()
{
    	document.getElementById('chances').innerHTML = "";
}
  
function Bet(bet, amount, game) {
	if (bet === game) {
		if (game === 'RED' || game === 'BLACK') {
			RoBWin(amount);
		} else if (game === 'GREEN') {
			GWin(amount);
		}
	}
}
//If you win by selecting a space
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

function ThirdsBet(bet, amount, game) {
  if (bet === game) {
    thirdsWin(amount);
  }
}

function oddEvenBet(bet, amount, game) {
  if(bet === game) {
    evenOddWin(amount);
  }
}

//BET ON COLUMNS
function colBet(bet, amount, game) {
  if (bet === game) {
    colWin(amount);
  }
}

function thirdsWin(amount) {
   addMoney(amount*3);
  MONEY += amount * 3;
}
//LOW OR HIGH WIN
function LoHWin(amount) {
   addMoney(amount*2);
	MONEY += amount * 2;
}

function evenOddWin(amount) {
   addMoney(amount*2);
  MONEY += amount * 2;
}
//RED OR BLACK WIN
function RoBWin(amount) {
   addMoney(amount*2);
	MONEY += amount * 2;
}

//GREEN WIN
function GWin(amount) {
   addMoney(amount*14);
	MONEY += amount * 14;
}
//INDIVIDUAL SPACE WIN
function spaceWin(amount) {
   addMoney(amount*35);
  MONEY += amount * 35;
}

//COLUMN WIN
function colWin(amount) {
   addMoney(amount*3);
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



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("instructions");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
