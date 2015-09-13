function onLoad()
{
	popupMessage("Welcome","Welcome to connect four by Alex & Vince. It's an easy game that gets harder with each win. Winning is as easy as linking 4 pieces vertically, horizontally, or diagonally before I do. You get to make the first move and have white pieces. Don't forget that columns are affected by gravity. While you can click anywhere on the board the piece will always fall to the lowest possible spot. Good luck."," I'm ready when you are. Click a column to place a move!");	
}




function moveFast(moveColumn)
{
    if (moveColumn < 1 && moveColumn > 7)
        {document.getElementById("uhOhMessages").innerHTML = "Move must be between 1 and 7."; return(37707);}
    if (board[1][6] !== 0 && board[2][6] !== 0 && board[3][6] !== 0 && board[4][6] !== 0 && board[5][6] !== 0 && board[6][6] !== 0 && board[7][6] !== 0)
		{document.getElementById("uhOhMessages").innerHTML = "Cats game! Stop trying to move already."; return(23423);}
	if (board[moveColumn][6] !== 0)
        {document.getElementById("uhOhMessages").innerHTML = "Column is full, please choose another column."; return(2343);}
    if (whosTurn === 3)
        {document.getElementById("uhOhMessages").innerHTML = "Game is over. Why are you trying to move?"; return(234);}
	if (whosTurn === 2)
		{document.getElementById("uhOhMessages").innerHTML = "Not your turn. Please wait, I'm thinking."; return(234);}
document.getElementById("popup").innerHTML="";
    drop(moveColumn);
    document.getElementById("uhOhMessages").innerHTML = "";
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
	setTimeout ( "computerMove()", 900);
}





function computerMove(moveColumn)
{
	document.getElementById("uhOhMessages").innerHTML = "";
    tmpAIMove = aiMoveManager(aiIterations);
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-1); document.getElementById("uhOhMessages").innerHTML = "Good work! Keep it up.";}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-2);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-3);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-4);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-5);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-6);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-7);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-8);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-9);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-10);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-11);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-12);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-13);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-14);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-15);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-16);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-17);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-18);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-19);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-20);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-21);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-22);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-23);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-24);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-25);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-26);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-27);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-28);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-29);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-30);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-31);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-32);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-33);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-34);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-35);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-36);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-37);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-38);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(aiIterations-39);}

     drop(tmpAIMove);
     if (checkForWin(tmpAIMove) === true){
		if (whosTurn === 1){
			popupMessage("You Win!", "Congrats! You've beat level "+(aiIterations-1)+" and have been bumped up to the next level, level "+ aiIterations +"!", "Celebrate! Then come back and play again.");
		} else if (whosTurn === 2){
			popupMessage("You Lose!","You've got to do better than that to beat me! Click 'New Game' to try again.","Good luck!");
		} else {
			popupMessage("Tie Game?","hmm, it appears nobody won and yet the game is over. How'd that happen?","Your close! Try again.");
		}
		whosTurn = 3;
		return 55;
	}
     switchTurn();
}





function newGame()
{
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





function aiMoveManager(tmpIterations)
{
    var tmpBoard = board;
    var tmpList = [-1,0,0,0,0,0,0,0];
    tmpList = eliminateFullColumns(tmpBoard, tmpList); /* list of columns available for moving into */
    var tmpRatioList = [0,0,0,0,0,0,0,0];
    
    if (tmpList[1] === -1 && tmpList[2] === -1 && tmpList[3] === -1 && tmpList[4] === -1 && tmpList[5] === -1 && tmpList[6] === -1 && tmpList[7] === -1) {return false;} 
    var tmpRowList = giveRowList(tmpBoard, tmpList); /* proper row corisponding to open columns */
    for (var count = 1; count <=7; count++){
        if (tmpList[count] === 0){
            tmpBoard[count][tmpRowList[count]] = 2;
            if (aiCheckForWin(tmpBoard, count, 2) === true){tmpBoard[count][tmpRowList[count]] = 0;return(count);}
            tmpBoard[count][tmpRowList[count]] = 0;
        }
    }
    for (var count = 1; count <=7; count++){
        if (tmpList[count] === 0){
            tmpBoard[count][tmpRowList[count]] = 1;
            if (aiCheckForWin(tmpBoard, count, 1) === true){tmpBoard[count][tmpRowList[count]] = 0;return(count);}
            tmpBoard[count][tmpRowList[count]] = 0;
        }
    }
    if (tmpIterations>1){
	for (var count = 1; count <=7; count++){
    	if (tmpList[count] === 0){
        	totalWins=0;
        	totalLosses=0;
        	tmpBoard[count][tmpRowList[count]] = 2;
            tmpList[count] = aiMovep1(tmpIterations-1, tmpBoard);
            tmpBoard[count][tmpRowList[count]] = 0;
			tmpRatioList[count] = totalWins/totalLosses;
			/* console.log("column: " + count + " contains " + totalWins + " wins and " + totalLosses + " losses. Ratio: " + totalWins/totalLosses); */
            }
		} 
	}
    var tmpSelectFromList = [0];
    for (var count = 1; count <= 7; count ++){
      if (tmpList[count] === 1){ document.getElementById("uhOhMessages").innerHTML = "You need to play better than that to beat me."; return(count);}  
	if (tmpList[count] === 0){
            tmpSelectFromList.push(count);
        }   
    }
    
	/* this does a couple of things. firstly this check if its the last chance at a move. if it is it forces a random move. */
	/* then it selects a move at random from a list of approved moves */
	/* lastly it ... */
/* console.log("Move Options: " + tmpSelectFromList); */
	if (tmpSelectFromList.length === 1 && tmpIterations === 0){ /* if there is no good moves. force pick a bad one at random */
        tmpList = eliminateFullColumns(tmpBoard, tmpList); /* list of columns available for moving into */
        tmpSelectFromList = [0];
        for (var count = 1; count <= 7; count ++){
           if (tmpList[count] === 0){
                tmpSelectFromList.push(count);
            }   
        }
        var randomnumber=Math.floor(Math.random()*(tmpSelectFromList.length -1))
        randomnumber = randomnumber + 1;
        return(tmpSelectFromList[randomnumber]);
	}
	
/* select the highest ratio value as a move */
	var tmpHigh = 0;
	var tmpHighColumn = 0;
	for (var count = 1; count <= 7; count ++){
			if (tmpList[count]===0){
			if (tmpRatioList[count] > tmpHigh){ tmpHigh = tmpRatioList[count]; tmpHighColumn = count;}
	}}
	if (tmpHighColumn > 0){return tmpHighColumn;}
	var randomnumber=Math.floor(Math.random()*(tmpSelectFromList.length -1));
	randomnumber = randomnumber + 1;
	if (tmpSelectFromList.length === 1){
    	return(0);
	}	
	return(tmpSelectFromList[randomnumber]);
	
}





function aiMovep2(tmpIterations,tmpBoard)
{
    var tmpList = [-1,0,0,0,0,0,0,0];
    tmpList = eliminateFullColumns(tmpBoard, tmpList); /* list of columns available for moving into */
    if (tmpList[1] === -1 && tmpList[2] === -1 && tmpList[3] === -1 && tmpList[4] === -1 && tmpList[5] === -1 && tmpList[6] === -1 && tmpList[7] === -1) {
        return 0;
    } else {
        var tmpRowList = giveRowList(tmpBoard, tmpList); /* proper row corisponding to open columns */
        for (var count = 1; count <=7; count++)
        {
            if (tmpList[count] === 0)
            {
                tmpBoard[count][tmpRowList[count]] = 2;
                	if (aiCheckForWin(tmpBoard, count, 2) === true){totalWins=totalWins+1;tmpBoard[count][tmpRowList[count]] = 0;return 1;}
			if (tmpIterations > 1){
				tmpList[count] = aiMovep1(tmpIterations-1, tmpBoard);
            		if (tmpList[count] === 1){totalWins=totalWins+8;tmpBoard[count][tmpRowList[count]] = 0;return 1;}
			}
			tmpBoard[count][tmpRowList[count]] = 0;
		}
        }
	if (tmpList[1] === -1 && tmpList[2] === -1 && tmpList[3] === -1 && tmpList[4] === -1 && tmpList[5] === -1 && tmpList[6] === -1 && tmpList[7] === -1) { return -1;}
    	}
    return 0;
}





function aiMovep1(tmpIterations, tmpBoard)
{
    var tmpList = [-1,0,0,0,0,0,0,0];
    tmpList = eliminateFullColumns(tmpBoard, tmpList); /* list of columns available for moving into */
    if (tmpList[1] === -1 && tmpList[2] === -1 && tmpList[3] === -1 && tmpList[4] === -1 && tmpList[5] === -1 && tmpList[6] === -1 && tmpList[7] === -1 ) {
        return 0;
    } else {
        var tmpRowList = giveRowList(tmpBoard, tmpList); /* proper row corisponding to open columns */
        for (var count = 1; count <=7; count++)
        {
            if (tmpList[count] === 0)
            {
                tmpBoard[count][tmpRowList[count]] = 1;
                if (aiCheckForWin(tmpBoard, count, 1) === true){totalLosses=totalLosses+1;tmpBoard[count][tmpRowList[count]] = 0;return -1;}
                if (tmpIterations > 1){
                    tmpList[count] = aiMovep2(tmpIterations-1, tmpBoard);
                		if (tmpList[count] === -1){totalLosses=totalLosses+1;tmpBoard[count][tmpRowList[count]] = 0;return -1;}
			}
			
                tmpBoard[count][tmpRowList[count]] = 0;
            }
        }
    		if ((tmpList[1] === -1 || tmpList[1] === 1) && (tmpList[2] === -1 || tmpList[2] === 1) && (tmpList[3] === -1 || tmpList[3] === 1) && (tmpList[4] === -1 || tmpList[4] === 1) && (tmpList[5] === -1 || tmpList[5] === 1) && (tmpList[6] === -1 || tmpList[6] === 1) && (tmpList[7] === -1 || tmpList[7] === 1)) { return 1;}

	}
    return 0;
}





function giveRowList(tmpBoard, goodColumns)
{
    var tmpRows = [0,0,0,0,0,0,0,0];
    for (var count = 1; count <= 7; count++){
        if (goodColumns[count] === 0){
            if (tmpBoard[count][1] === 0){
                tmpRows[count] = 1;   
            } else if (tmpBoard[count][2] === 0){
                tmpRows[count] = 2;
            } else if (tmpBoard[count][3] === 0){
                tmpRows[count] = 3;
            } else if (tmpBoard[count][4] === 0){
                tmpRows[count] = 4;
            } else if (tmpBoard[count][5] === 0){
                tmpRows[count] = 5;
            } else if (tmpBoard[count][6] === 0){
                tmpRows[count] = 6;
            }
        }
    }
    return tmpRows;   
}






function eliminateFullColumns(tmpBoard, tmpList)
{
    tmpList[0] = 0;
    if (tmpBoard[1][6] === 0){
        tmpList[1] = 0;
    } else {
        tmpList[1] = -1;
    }
    if (tmpBoard[2][6] === 0){
        tmpList[2] = 0;
    } else {
        tmpList[2] = -1;
    }
    if (tmpBoard[3][6] === 0){
        tmpList[3] = 0;
    } else {
        tmpList[3] = -1;
    }
    if (tmpBoard[4][6] === 0){
        tmpList[4] = 0;
    } else {
        tmpList[4] = -1;
    }
    if (tmpBoard[5][6] === 0){
        tmpList[5] = 0;
    } else {
        tmpList[5] = -1;
    }
    if (tmpBoard[6][6] === 0){
        tmpList[6] = 0;
    } else {
        tmpList[6] = -1;
    }
    if (tmpBoard[7][6] === 0){
        tmpList[7] = 0;
    } else {
        tmpList[7] = -1;
    }
    return tmpList;
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
            } else if (tmpBoard[x][y]===1){
            	tmpGenerateBoard += '<img style="position:absolute; top:' + tmpY + 'px; Left:'+tmpX+'px; width:72px; height:72px" src="p1.png">';
            } else if (tmpBoard[x][y]===2){
                tmpGenerateBoard += '<img style="position:absolute; top:' + tmpY + 'px; Left:'+tmpX+'px; width:72px; height:72px" src="p2.png">';
            } else {
                /* uh oh, somebody messed up the board array */
            }
           
            }
    }
document.getElementById("textdiv").innerHTML = tmpGenerateBoard;
}





function popupMessage(messageTitle, messageText, messageText2)
{
	document.getElementById("popup").innerHTML = '<div class="closex" onclick="javascript:clearPopup()">&nbsp;&nbsp;close</div><div class="announcement"><h2>'+messageTitle+'</h2><p>'+messageText+'</p><p>'+messageText2+'</p></div>';
}




function clearPopup()
{
	document.getElementById("popup").innerHTML ="";
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
		/* if a browser doesn't like a negative starting value change it back to positive 36. */
		var tmpY = -36;
		var tmpFinalD = (432-tmpRow*72) + 36 + boardOffset;
setTimeout(function(){dropAnimation(board[tmpColumn][tmpRow], tmpX, tmpY, 1.2, tmpFinalD)},25);
}




function dropAnimation(tmpTurn, tmpX, tmpY, tmpSpeed, tmpFinalD){
	tmpSpeed = tmpSpeed + (tmpSpeed * 0.196);
	tmpSpped = tmpSpeed.toFixed(0)
	tmpY = tmpY + tmpSpeed;
	if (tmpY > tmpFinalD){ 
		document.getElementById("animation").innerHTML = ""; display(board);} 
	else {
		setTimeout(function(){dropAnimation(tmpTurn, tmpX, tmpY, tmpSpeed, tmpFinalD)},25);
		document.getElementById("animation").innerHTML = '<img style="position:absolute; top:' + tmpY + 'px; Left:'+tmpX+'px; width:72px; height:72px" src="/p' + tmpTurn + '.png">';
	}
}





/*
################################################################
After this, it's all code to check for a win. Very simple but very long.
################################################################
*/

function aiCheckForWin(tmpBoard, tmpColumn, tmpPlayer)
{
    var tmpRow = 0;
    if (tmpBoard[tmpColumn][1] === 0){
        tmpRow = 1;   
    } else if (tmpBoard[tmpColumn][2] === 0){
        tmpRow = 2;
    } else if (tmpBoard[tmpColumn][3] === 0){
        tmpRow = 3;
    } else if (tmpBoard[tmpColumn][4] === 0){
        tmpRow = 4;
    } else if (tmpBoard[tmpColumn][5] === 0){
        tmpRow = 5;
    } else if (tmpBoard[tmpColumn][6] === 0){
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
        if (tmpBoard[tmpColumn-1][tmpRow+1] === tmpPlayer && tmpBoard[tmpColumn-2][tmpRow+2] === tmpPlayer && tmpBoard[tmpColumn-3][tmpRow+3] === tmpPlayer){
            return true;
        }
    }
     /* almost up and to the left */   
   if (tmpColumn >=3 && tmpRow <= 4 && tmpColumn <=6 && tmpRow >=2){
        if (tmpBoard[tmpColumn-1][tmpRow+1] === tmpPlayer && tmpBoard[tmpColumn-2][tmpRow+2] === tmpPlayer && tmpBoard[tmpColumn+1][tmpRow-1] === tmpPlayer){
            return true;
        }
    }
 
    /* almost down and to the right */
    if (tmpColumn <=5 && tmpRow >=3 && tmpColumn >=2 && tmpRow <= 5){
        if (tmpBoard[tmpColumn+1][tmpRow-1] === tmpPlayer && tmpBoard[tmpColumn+2][tmpRow-2] === tmpPlayer && tmpBoard[tmpColumn-1][tmpRow+1] === tmpPlayer){
            return true;
        }   
    }
 
    /* down and to the right */
    if (tmpColumn <=4 && tmpRow >=4){
        if (tmpBoard[tmpColumn+1][tmpRow-1] === tmpPlayer && tmpBoard[tmpColumn+2][tmpRow-2] === tmpPlayer && tmpBoard[tmpColumn+3][tmpRow-3] === tmpPlayer){
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
        if (tmpBoard[tmpColumn+1][tmpRow+1] === tmpPlayer && tmpBoard[tmpColumn+2][tmpRow+2] === tmpPlayer && tmpBoard[tmpColumn+3][tmpRow+3] === tmpPlayer){
            return true;
        }
    }
 
    /* almost up and to the right */
    if (tmpColumn <= 5 && tmpRow <= 4 && tmpColumn >=2 && tmpRow >=2){
        if (tmpBoard[tmpColumn+1][tmpRow+1] === tmpPlayer && tmpBoard[tmpColumn+2][tmpRow+2] === tmpPlayer && tmpBoard[tmpColumn-1][tmpRow-1] === tmpPlayer){
            return true;
        }
    }
 
    /* almost down and to the left */
    if (tmpColumn >=3 && tmpRow >=3 && tmpColumn <= 6 && tmpRow <= 5){
        if (tmpBoard[tmpColumn-1][tmpRow-1] === tmpPlayer && tmpBoard[tmpColumn-2][tmpRow-2] === tmpPlayer && tmpBoard[tmpColumn+1][tmpRow+1] === tmpPlayer){
            return true;
        }   
    }
 
    /* down and to the left */
    if (tmpColumn >=4 && tmpRow >=4){
        if (tmpBoard[tmpColumn-1][tmpRow-1] === tmpPlayer && tmpBoard[tmpColumn-2][tmpRow-2] === tmpPlayer && tmpBoard[tmpColumn-3][tmpRow-3] === tmpPlayer){
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
        if (tmpBoard[tmpColumn-1][tmpRow] === tmpPlayer && tmpBoard[tmpColumn-2][tmpRow] === tmpPlayer && tmpBoard[tmpColumn-3][tmpRow] === tmpPlayer){
            return true;
        }   
    }
 
    /* almost left ##*#  */
    if (tmpColumn >=3 && tmpColumn <=6){
        if (tmpBoard[tmpColumn-2][tmpRow] === tmpPlayer && tmpBoard[tmpColumn-1][tmpRow] === tmpPlayer && tmpBoard[tmpColumn+1][tmpRow] === tmpPlayer){
            return true;
        }
    }
 
    /* almost right #*##  */
    if (tmpColumn >=2 && tmpColumn <=5){
        if (tmpBoard[tmpColumn-1][tmpRow] === tmpPlayer && tmpBoard[tmpColumn+1][tmpRow] === tmpPlayer && tmpBoard[tmpColumn+2][tmpRow] === tmpPlayer){
            return true;
        }
    }
 
    /* right */
    if (tmpColumn <=4){
        if (tmpBoard[tmpColumn+1][tmpRow] === tmpPlayer && tmpBoard[tmpColumn+2][tmpRow] === tmpPlayer && tmpBoard[tmpColumn+3][tmpRow] === tmpPlayer){
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
        if (tmpBoard[tmpColumn][tmpRow-1] === tmpPlayer && tmpBoard[tmpColumn][tmpRow-2] === tmpPlayer && tmpBoard[tmpColumn][tmpRow-3] === tmpPlayer){
            return true;

        }
	}

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