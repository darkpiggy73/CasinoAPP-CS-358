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
                    BETS
                <ul>
                    <li>
                      Straight
                      <li>This is a bet that covers only one number. In order to make this bet, place the chip inside the square of the number.</li>
                    </li>
                    <li>
                      Split
                      <li>A bet on two numbers which are adjacent on the table, made by placing the chip on the shared line of the two numbers’ squares.</li>
                    </li>
                    <li>
                      Street
                      <li>A bet on three consecutive numbers located on the same line. Make the bet by placing the chip on the outer corner of the row.</li>
                    </li>
                    <li>
                      Six Line
                      <li>A bet on two adjacent lines. In order to make this bet, you have to place the chip on the common outer corner of the two lines.</li>
                    </li>
                    <li>
                      Corner
                      <li>This is a four-number bet, placed by putting the chip on the common corner of the four numbers. Also called ‘square’ bet.</li>
                    </li>
                    <li>
                      Trio
                      <li>A three-number bet that includes the zero or zeros. Place the chip on the line shared by the zero box and the two other numbers.</li>
                    </li>
                    <li>
                      Basket
                      <li>Bet on 0, 1, 2 and 3 with a chip on the corner shared by the zero box and the first line. In American Roulette, it includes the double zero.</li>
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
