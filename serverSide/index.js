//in order to make the html file work without the server make var MONEY; into var MONEY=10000;
var MONEY;
addMoney(0);
var amtRed = 0,
	amtBlack = 0,
	amtSpace = [],
	amtEven = 0,
	amtOdd = 0,
  amtLowHigh = [],

(red = 0), (black = 0);

for(var i = 0; i <= 37; i++) {
  amtSpace[i] = 0;
}
for(var i = 0; i < 2; i++) {
	amtLowHigh[i] = 0;
}


var intervalBool=0;

var outcomeResult;

//in order to make the html file work without the server comment out everthing in the addmoney function
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

var spinValue = 0;




//START GAME
function PlayGame() {
    
  spin();
	
  
var refreshIntervalId = setInterval(function(){
    if(intervalBool===1){
      PlayGame2();
      clearInterval(refreshIntervalId);}
  }, 5);
  
}

function PlayGame2() {
  
  
  
  var rand=spinValue;
  intervalBool=0;
  console.log(rand);
	//var rand = 5;
	var outcome = [];
  if (rand === 0 || rand === 37) {
	  outcome[0]='GREEN';
    	green += 1;
	} 
  else if (rand == 2 || rand == 4 || rand == 6 || rand == 8 || rand == 10 || rand == 11 || rand == 13 || rand == 15 || rand == 17 || rand == 20 || rand == 22 || rand == 24 || rand == 26 || rand == 28 || rand == 29 || rand == 31 || rand == 33 || rand == 35) 
  {
	  outcome[0]='BLACK';
    black += 1;
	} 
  else
  {
	  outcome[0]='RED';
    red += 1;
}
  
	outcome.push(rand);
  
  if (rand < 19 && rand !== 0 && rand !== 37) {
		outcome[2] = 'LOW';
	} else if (rand > 18 && rand !== 0 && rand !== 37) {
		outcome[2] = 'HIGH';
	} else {
		outcome[2] = 'NONE';
	}
  
	if (rand !== 0 && rand !== 37 && rand % 2 === 0) {
		outcome[3] = 'EVEN';
	} else if (rand !== 0 && rand !== 37 && rand % 2 === 1) {
	  outcome[3] = 'ODD';
	} else {
	  outcome[3] = "NONE";
	}
	
	console.log(outcome);
	
	Bet('RED', amtRed, outcome[0]);
	Bet('BLACK', amtBlack, outcome[0]);
	
	oddEvenBet('EVEN', amtEven, outcome[3]);
	oddEvenBet('ODD', amtOdd, outcome[3]);
	
	LoHBet('LOW', amtLowHigh[0], outcome[2]);
	LoHBet('HIGH', amtLowHigh[1], outcome[2]);
	
  	history(outcome);
  
	for(var j = 0; j <= 37; j++) {
	  spaceBet(j, amtSpace[j], outcome[1]);
	}
	
	(amtRed = 0), (amtBlack = 0), (amtOdd = 0), (amtEven = 0);
	for(var i = 0; i <= 37; i++) {
   		amtSpace[i] = 0;
  	}
  	amtLowHigh[0] = 0;
	amtLowHigh[1] = 0;
  
  	if (outcome[1] === 37) {
    		outcome[1] = "00";
  	}
  	document.getElementById('chances').innerHTML = '';
	document.getElementById('money').innerHTML =
		'Balance: ' + MONEY + ' ' + outcome[0] + " " + outcome[1];
  
  	document.getElementById('stats').innerHTML =
		'Red:' + red + '<br> Green: ' + green + '<br>Black: ' + black;
}

//TEST GAMES
function ButtonPlay() {
	PlayGame();
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
  
function Bet(bet, amount, game) {
	if (bet === game) {
		if (game === 'RED' || game === 'BLACK') {
			RoBWin(amount);
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

function oddEvenBet(bet, amount, game) {
  if(bet === game) {
    evenOddWin(amount);
  }
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

//INDIVIDUAL SPACE WIN
function spaceWin(amount) {
   addMoney(amount*35);
  MONEY += amount * 35;
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

var hist = [];
function history(color) {
	var temp = color[0] + ' ' + color[1];
	hist.push(temp);

	if (hist.length > 8) {
		hist.splice(0, 1);
	}
	document.getElementById('history').innerHTML = hist.join('<br>');
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















var options = ["0", "28", "9", "26", "30", "11", "7", "20", "32", "17", "5", "22", "34", "15", "3", "24", "36", "13", "1","00", "27", "10", "25",
               "29", "12", "8", "19", "31", "18", "6", "21", "33", "16", "4", "23", "35", "14", "2"];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

//document.getElementById("spin").addEventListener("click", spin);

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item) {
  var colorRed="#FF0000";
  var colorBlack="#000000";
  var colorGreen="#66CD00";
  var returnVal;
  var itemtoint=parseInt(item);
  
  if(item==="0" ||item==="00"){
    returnVal=colorGreen;
  }
  else if(itemtoint===1 || itemtoint===3 || itemtoint===5 || itemtoint===7 || itemtoint===9 || itemtoint===12 || itemtoint===14 || itemtoint===16 || itemtoint===18 || itemtoint===19 || itemtoint===21 || itemtoint===23 ||
itemtoint===25 || itemtoint===27 || itemtoint===30 || itemtoint===32 || itemtoint===34 || itemtoint===36){
    returnVal=colorRed;
  }
  else{
    returnVal=colorBlack;
  }
  
  
  return returnVal;
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 125;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.font = 'bold 12px Helvetica, Arial';

    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      //ctx.fillStyle = colors[i];
      ctx.fillStyle = getColor(options[i]);

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur    = 0;
      ctx.shadowColor   = "rgb(220,220,220)";
      ctx.fillStyle = "white";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    } 

    //Arrow
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}
var  spinAngleStart;
var  spinTime = 0;
var  spinTimeTotal;
function spin(){
spinAngleStart = Math.random() * 10 + 10;
spinTime = 0;
spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
  
  var degrees = startAngle * 180 / Math.PI + 90;
var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  
  
  clearTimeout(spinTimeout);
  intervalBool=1;
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = options[index];
  if(text==="00"){
    spinValue=37;
  }
  else{
  spinValue=options[index];}
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
 
}


function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();
