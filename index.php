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
                    TEST
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