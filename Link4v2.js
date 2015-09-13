function onLoad()
{
	popupMessage("Welcome","Welcome to Link4 by Alex & Vince. It's a strikingly simple connect four style game. To win, link 4 pieces vertically, horizontally, or diagonally before I do. Good luck; you're going to need it.","Click a column to place the first move!");	
	AIWebWorker.onerror = function (event) {
		console.log(event.message, event);
	};
	AIWebWorker.onmessage = function(e) {  
		//when the work posts a message it's returning a AI move.
		drop(e.data);
		if (checkForWin(e.data) === true){
			if (whosTurn === 1){
				popupMessage("You Win!", "Congrats! You've beat level "+(aiIterations-1)+" and have been bumped up to the next level, level "+ aiIterations +"!", "Celebrate! Then come back and play again.");
			} else if (whosTurn === 2){
				popupMessage("You Lose!","You've got to do better than that to beat me! Click 'New Game' to try again.","Good luck!");
			} else {
				popupMessage("Tie Game?","hmm, it appears nobody won and yet the game is over. How'd that happen?","You're close! Try again.");
			}
			whosTurn = 3;
			return 55;
		}
		switchTurn();
	}; 
}





function moveFast(moveColumn)
{
	if (moveColumn < 1 && moveColumn > 7)
		{popupMessage("invalid","How did you even do that? A valid move is a column between 1 and 7","Any other number is invalid."); return(37707);}
	if (board[1][6] !== 0 && board[2][6] !== 0 && board[3][6] !== 0 && board[4][6] !== 0 && board[5][6] !== 0 && board[6][6] !== 0 && board[7][6] !== 0)
		{popupMessage("Cats Game","The game is over, please click New Game if you want to play again.",""); return(23423);}
	if (board[moveColumn][6] !== 0)
		{popupMessage("Column Full","That column is full! Please choose a different column.",""); return(2343);}
	if (whosTurn === 3)
		{popupMessage("Game Over","The game is over, please click New Game if you want to play again.",""); return(234);}
	if (whosTurn === 2)
		{popupMessage("Thinking...","It's still my turn! Please wait while I think it over.","Mr. Impatient."); return(234);}
	clearPopup();
	drop(moveColumn);
	if (checkForWin(moveColumn) === true){
		aiIterations=aiIterations+1;
		if (whosTurn === 1){
			popupMessage("You Win!", "Congrats! You've beat level "+(aiIterations-1)+" and have been bumped up to the next level, level "+ aiIterations +"!", "Celebrate! Then come back and play again.");
		} else if (whosTurn === 2){
			popupMessage("You Lose!","You've got to do better than that to beat me! Click 'New Game' to try again.","Good luck!");
		} else {
			popupMessage("Tie Game","hmm, it appears nobody won and yet the game is over. How'd that happen?","You're close! Try again.");
		}
		whosTurn = 3;
		return 55;
	}
	switchTurn();
	setTimeout ( "computerMove()", 1500);
}





function computerMove(moveColumn)
{
	//most of this code has been moved to AIWebWorker.js this just posts the current game board and level to the worker.
	board[1][0] = aiIterations;
	AIWebWorker.postMessage(board);
	board[1][0] = 0;
}





function popupMessage(messageTitle, messageText, messageText2)
{
	if (messageText2 !== "") {messageText2 = "<p>" + messageText2 + "</p>";}
	if ($("#popup").is(":hidden")) {
		$("#popup").html('<h2>'+messageTitle+'</h2><p>'+messageText+'</p>'+messageText2);
		$("#popup").slideDown(500);
	} else {
		$("#popup").slideUp(250, function(){
			$("#popup").html('<h2>'+messageTitle+'</h2><p>'+messageText+'</p>'+messageText2);
			$("#popup").slideDown(400);
		});
	}
}





function clearPopup()
{
	$("#popup").slideUp(500);
}





function switchTurn()
{
	if (whosTurn === 1){
		whosTurn = 2;
	} else if (whosTurn === 2){
		whosTurn = 1;
	} else {
		/* game must be over */
	}
}





function drop(tmpColumn)
{
var tmpRow;
	if (board[tmpColumn][1] === 0){
		board[tmpColumn][1] = whosTurn; tmpRow = 1;  
	} else if (board[tmpColumn][2] === 0){
		board[tmpColumn][2] = whosTurn; tmpRow = 2;
	} else if (board[tmpColumn][3] === 0){
		board[tmpColumn][3] = whosTurn; tmpRow = 3;
	} else if (board[tmpColumn][4] === 0){
		board[tmpColumn][4] = whosTurn; tmpRow = 4;
	} else if (board[tmpColumn][5] === 0){
		board[tmpColumn][5] = whosTurn; tmpRow = 5;
	} else if (board[tmpColumn][6] === 0){
		board[tmpColumn][6] = whosTurn; tmpRow = 6;
	}
	var tmpX = (tmpColumn*72) - 36 + boardOffset;
	var tmpY = -36;
	var tmpFinalD = (432-tmpRow*72) + 36 + boardOffset;
	dropAnimation(board[tmpColumn][tmpRow], tmpX, tmpY, 1.2, tmpFinalD)
}





function dropAnimation(tmpTurn, tmpX, tmpY, tmpSpeed, tmpFinalD){
	tmpSpeed = tmpSpeed + (tmpSpeed * 0.196);
	tmpSpped = tmpSpeed.toFixed(0)
	tmpY = tmpY + tmpSpeed;
	$("#animation").html('<img id="gamepiece" style="position:absolute; top:' + tmpY + 'px; Left:'+tmpX+'px; width:72px; height:72px" src="./p' + tmpTurn + '.png">'); 
	$(".invisibleButton").hide();
	$('#gamepiece').animate({ 
		top: tmpFinalD
	}, 850,"easeOutBounce" , function() {
		display(board); 
		$("#animation").html("");
		$(".invisibleButton").show(); 
		if ($("#popup").html() === "<h2>Thinking...</h2><p>It's still my turn! Please wait while I think it over.</p><p>Mr. Impatient.</p>"){
			clearPopup();
		}
	});
}





function newGame()
{
	AIWebWorker.terminate();
	AIWebWorker = new Worker("AIWebWorker.js"); 
	AIWebWorker.onerror = function (event) {
		console.log(event.message, event);
	};
	AIWebWorker.onmessage = function(e) {  
		//when the work posts a message it's returning a AI move.
		drop(e.data);
		if (checkForWin(e.data) === true){
			if (whosTurn === 1){
				popupMessage("You Win!", "Congrats! You've beat level "+(aiIterations-1)+" and have been bumped up to the next level, level "+ aiIterations +"!", "Celebrate! Then come back and play again.");
			} else if (whosTurn === 2){
				popupMessage("You Lose!","You've got to do better than that to beat me! Click 'New Game' to try again.","Good luck!");
			} else {
				popupMessage("Tie Game?","hmm, it appears nobody won and yet the game is over. How'd that happen?","You're close! Try again.");
			}
			whosTurn = 3;
			return 55;
		}
		switchTurn();
	}; 	
	whosTurn = 1;
	for (var y=6;y>=1;y--){
		for (var x=1;x<=7;x++){
			board[x][y] = 0;
		}
	}
	display(board);
	popupMessage("New Game", "You are playing connect four on level "+aiIterations+". If you beat a level you'll be bumped up. There are 10 levels; see how far you can get!", "Good Luck! Click the board to play your first move.");

	var tmprandomnumber=Math.floor(Math.random()*(2));
	if (tmprandomnumber===1){ 
		whosTurn=2; 
		if (aiIterations < 8){
			computerMove();
		} else if (aiIterations > 7 && aiIterations < 11){
			drop(4);
			switchTurn();
			display(board);
		}
	}
}





function display(tmpBoard)
{
	var tmpX;
	var tmpY;
	var tmpGenerateBoard = "";
	for (var y=6;y>=1;y--){
		for (var x=1;x<=7;x++){
			tmpX = (x*72) - 36 + boardOffset;
			tmpY = (432-y*72) + 36 + boardOffset;
			if (tmpBoard[x][y]===0){
				/* Do Nothing */
			} else if (tmpBoard[x][y]===1){
				tmpGenerateBoard += '<img style="position:absolute; top:' + tmpY + 'px; Left:'+tmpX+'px; width:72px; height:72px" src="./p1.png">';
			} else if (tmpBoard[x][y]===2){
				tmpGenerateBoard += '<img style="position:absolute; top:' + tmpY + 'px; Left:'+tmpX+'px; width:72px; height:72px" src="./p2.png">';
			} else {
				/* uh oh, somebody messed up the board array */
				popupMessage("uhOh", "Somehow the game board has become corrupt. Please alert Alex Mudar via facebook or LinkedIn.", "Sorry about that. Click New Game to start fresh.");
			}
		}
	}
	$("#textdiv").html(tmpGenerateBoard);
}





function aiMoveManager(tmpIterations)
{
	//This function has been moved to the AIWebWorker.js
	return 0;
}





function aiMovep2(tmpIterations,tmpBoard)
{
	//this function has been moved to AIWebWorker.js
	return 0;
}





function aiMovep1(tmpIterations, tmpBoard)
{
	//this function has been moved to AIWebWorker.js 
	return 0;
}





function giveRowList(tmpBoard, goodColumns)
{
	//this function has been moved to AIWebWorker.js
	return 0;   
}





function eliminateFullColumns(tmpBoard, tmpList)
{
	//this funciton has been moved to AIWebWorker.js
	return 0;
}





/*
################################################################
After this, it's all code to check for a win. Very simple but very long.
################################################################
*/





function aiCheckForWin(tmpBoard, tmpColumn, tmpPlayer)
{
	//this function has been moved to aiWebWorker.js
	return 0;
}





function checkForWin(tmpColumn)
{
	var tmpRow = 0;
	if (board[tmpColumn][1] === 0){
		tmpRow = 1;   
	} else if (board[tmpColumn][2] === 0){
		tmpRow = 2;
	} else if (board[tmpColumn][3] === 0){
		tmpRow = 3;
	} else if (board[tmpColumn][4] === 0){
		tmpRow = 4;
	} else if (board[tmpColumn][5] === 0){
		tmpRow = 5;
	} else if (board[tmpColumn][6] === 0){
		tmpRow = 6;
	} else {
		tmpRow = 7;
	}
	tmpRow = tmpRow - 1;
	tmpColumn = parseInt(tmpColumn);

/*
o###
#o##
##o#
###o
*/
	/* up and to the left */
	if (tmpColumn >=4 && tmpRow <= 3 ){
		if (board[tmpColumn-1][tmpRow+1] === whosTurn && board[tmpColumn-2][tmpRow+2] === whosTurn && board[tmpColumn-3][tmpRow+3] === whosTurn){
			return true;
		}
	}
   
	/* almost up and to the left */   
	if (tmpColumn >=3 && tmpRow <= 4 && tmpColumn <=6 && tmpRow >=2){
		if (board[tmpColumn-1][tmpRow+1] === whosTurn && board[tmpColumn-2][tmpRow+2] === whosTurn && board[tmpColumn+1][tmpRow-1] === whosTurn){
			return true;
		}
	}
 
	/* almost down and to the right */
	if (tmpColumn <=5 && tmpRow >=3 && tmpColumn >=2 && tmpRow <= 5){
		if (board[tmpColumn+1][tmpRow-1] === whosTurn && board[tmpColumn+2][tmpRow-2] === whosTurn && board[tmpColumn-1][tmpRow+1] === whosTurn){
			return true;
		}
	}
 
	/* down and to the right */
	if (tmpColumn <=4 && tmpRow >=4){
		if (board[tmpColumn+1][tmpRow-1] === whosTurn && board[tmpColumn+2][tmpRow-2] === whosTurn && board[tmpColumn+3][tmpRow-3] === whosTurn){
			return true;
		}
	}
 
/*
###o
##o#
#o##
o###
*/
 
	/* up and to the right */
	if (tmpColumn <= 4 && tmpRow <= 3){
		if (board[tmpColumn+1][tmpRow+1] === whosTurn && board[tmpColumn+2][tmpRow+2] === whosTurn && board[tmpColumn+3][tmpRow+3] === whosTurn){
			return true;
		}
	}
 
	/* almost up and to the right */
	if (tmpColumn <= 5 && tmpRow <= 4 && tmpColumn >=2 && tmpRow >=2){
		if (board[tmpColumn+1][tmpRow+1] === whosTurn && board[tmpColumn+2][tmpRow+2] === whosTurn && board[tmpColumn-1][tmpRow-1] === whosTurn){
			return true;
		}
	}
 
	/* almost down and to the left */
	if (tmpColumn >=3 && tmpRow >=3 && tmpColumn <= 6 && tmpRow <= 5){
		if (board[tmpColumn-1][tmpRow-1] === whosTurn && board[tmpColumn-2][tmpRow-2] === whosTurn && board[tmpColumn+1][tmpRow+1] === whosTurn){
			return true;
		}
	}
 
	/* down and to the left */
	if (tmpColumn >=4 && tmpRow >=4){
		if (board[tmpColumn-1][tmpRow-1] === whosTurn && board[tmpColumn-2][tmpRow-2] === whosTurn && board[tmpColumn-3][tmpRow-3] === whosTurn){
			return true;
		}
	}

/*
####
oooo
####
####
*/
 
	/* left */
	if (tmpColumn >=4){
		if (board[tmpColumn-1][tmpRow] === whosTurn && board[tmpColumn-2][tmpRow] === whosTurn && board[tmpColumn-3][tmpRow] === whosTurn){
			return true;
		}
	}
 
	/* almost left */
	if (tmpColumn >=3 && tmpColumn <=6){
		if (board[tmpColumn-2][tmpRow] === whosTurn && board[tmpColumn-1][tmpRow] === whosTurn && board[tmpColumn+1][tmpRow] === whosTurn){
			return true;
		}
	}
 
	/* almost right */
	if (tmpColumn >=2 && tmpColumn <=5){
		if (board[tmpColumn-1][tmpRow] === whosTurn && board[tmpColumn+1][tmpRow] === whosTurn && board[tmpColumn+2][tmpRow] === whosTurn){
			return true;
		}
	}
 
	/* right */
	if (tmpColumn <=4){
		if (board[tmpColumn+1][tmpRow] === whosTurn && board[tmpColumn+2][tmpRow] === whosTurn && board[tmpColumn+3][tmpRow] === whosTurn){
			return true;
		}
	}
 
/*
##o##
##o##
##o##
##o##
*/
 
	/* straight down */
	if (tmpRow >= 4){
		if (board[tmpColumn][tmpRow-1] === whosTurn && board[tmpColumn][tmpRow-2] === whosTurn && board[tmpColumn][tmpRow-3] === whosTurn){
			return true;
		}
	}
}
