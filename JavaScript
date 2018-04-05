var MONEY = 500; //STARTING MONEY
document.getElementById("money").innerHTML= "Balance: " + MONEY;
var amtRed = 0, amtGreen = 0, amtBlack = 0;

//START GAME
function PlayGame() {
	var rand = Math.floor(Math.random() * 15);
		if (rand !== 0 && rand % 2 === 0) {
			return 'RED';
		}
		if (rand !== 0 && rand % 2 === 1) {
			return 'BLACK';
		} else if (rand === 0) {
			return 'GREEN';
		}
	
}

//TEST GAMES
function ButtonPlay()
{
    var outcome = PlayGame();
		Bet('RED',amtRed,outcome);
		Bet('GREEN',amtGreen,outcome);
		Bet('BLACK',amtBlack,outcome);
		amtRed = 0,amtGreen = 0,amtBlack = 0;
		document.getElementById("money").innerHTML= "Balance: " + MONEY + " " + outcome;
}

//Red button bet
function ButtonRed()
{
  var amount = parseInt(document.getElementById("Money").value);
  amtRed += amount;
  MONEY -= amount;
  console.log("Bet red ",amount);
	document.getElementById("money").innerHTML= "Balance: " + MONEY;
}

//Green button bet
function ButtonGreen()
{
  var amount = parseInt(document.getElementById("Money").value);
  amtGreen += amount;
  MONEY -= amount;
  console.log("Bet green ",amount)
	document.getElementById("money").innerHTML= "Balance: " + MONEY;
}

//Black button bet
function ButtonBlack()
{  
  var amount = parseInt(document.getElementById("Money").value);
  amtBlack += amount;
  MONEY -= amount;
  console.log("Bet black ",amount);
	document.getElementById("money").innerHTML= "Balance: " + MONEY;

}

//BETTING
function Bet(bet,amount, game) {
	if (bet === game) {
		if (game === 'RED' || game === 'BLACK') {
			RoBWin(amount);
		} else if (game === 'GREEN') {
			GWin(amount);
		}
	}
}

//RED OR BLACK WIN
function RoBWin(amount) {
	MONEY += amount * 2;
}

//GREEN WIN
function GWin(amount) {
	MONEY += amount * 14;
}
