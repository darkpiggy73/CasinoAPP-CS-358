<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
  </head>
  
  <body>
    <p id = "money">
      Balance:
    </p>
    
    <button onclick="ButtonPlay()">Play</button>
    <button onclick="ButtonRed()">Red</button>
    <button onclick="ButtonGreen()">Green</button>
    <button onclick="ButtonBlack()">Black</button>

    <button onclick="$('#rulesModal').modal()">Rules</button>

    
    <div class="modal fade" id="rulesModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Rules</h4>
                </div>
                <div class="modal-body">
                <ul>
                    <li>
                      Straight
                      <ul>
                        <li>This is a bet that covers only one number. In order to make this bet, place the chip inside the square of the number.</li>
                        <li>Chances of winning: 2.63%</li>
                        <li>Payout: 35:1</li>
                      </ul>
                    </li>
                    <li>
                      Split
                      <ul>
                        <li>A bet on two numbers which are adjacent on the table, made by placing the chip on the shared line of the two numbers’ squares.</li>
                        <li>Chances of winning: 5.26%</li>
                        <li>Payout: 17:1</li>
                      </ul>
                    </li>
                    <li>
                      Street
                      <ul>
                        <li>A bet on three consecutive numbers located on the same line. Make the bet by placing the chip on the outer corner of the row.</li>
                        <li>Chances of winning: 7.89%</li>
                        <li>Payout: 11:1</li>
                      </ul>
                    </li>
                    <li>
                      Six Line
                      <ul>
                        <li>A bet on two adjacent lines. In order to make this bet, you have to place the chip on the common outer corner of the two lines.</li>
                        <li>Chances of winning: 15.79%</li>
                        <li>Payout: 5:1</li>
                      </ul>
                    </li>
                    <li>
                      Corner
                      <ul>
                        <li>This is a four-number bet, placed by putting the chip on the common corner of the four numbers. Also called ‘square’ bet.</li>
                        <li>Chances of winning: 10.53%</li>
                        <li>Payout: 8:1</li>
                      </ul>
                    </li>
                    <li>
                      Trio
                      <ul>
                        <li>A three-number bet that includes the zero or zeros. Place the chip on the line shared by the zero box and the two other numbers.</li>
                        <li>Chances of winning: 7.89%</li>
                        <li>Payout: 11:1</li>
                      </ul>
                    </li>
                    <li>
                      Basket
                      <ul>
                        <li>Bet on 0, 1, 2 and 3 with a chip on the corner shared by the zero box and the first line.</li>
                        <li>Chances of winning: 10.53%</li>
                        <li>Payout: 8:1</li>
                      </ul>
                    </li>
                    <li>
                      Outside Bets
                      <ul>
                        <li>Red or Black – Bet on the colour of the winning number</li>
                          <ul>
                            <li>Chances of winning: 46.37%</li>
                            <li>Payout: 1:1</li>
                          </ul>
                        <li>Odd or Even – Bet on whether the winning number will be odd or even</li>
                          <ul>
                            <li>Chances of winning: 46.37%</li>
                            <li>Payout: 1:1</li>
                          </ul>
                        <li>1 to 18 or 19 to 36 – Bet on whether the winning number will be low (lower than 19) or high</li>
                          <ul>
                            <li>Chances of winning: 46.37%</li>
                            <li>Payout: 1:1</li>
                          </ul>
                        <li>Dozens – Bet on one of the three dozen that are found on the layout of the table</li>
                          <ul>
                            <li>Chances of winning: 31.58%</li>
                            <li>Payout: 1:1</li>
                          </ul>
                        <li>Columns – Bet from which of the three columns will the winning number be</li>
                          <ul>
                            <li>Chances of winning: 31.58%</li>
                            <li>Payout: 1:1</li>
                          </ul>
                      </ul>
                    </li>
                </ul>
                        
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <input type="number" step="1" id="Money" />
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script>
    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
    <script src="index.js"></script>
  </body>
</html>
