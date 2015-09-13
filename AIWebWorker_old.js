/* WEBWORKER */


self.onmessage = function(e) {  
var totalWins = 0;
var totalLosses = 0;   
var aiIterations = e.data[1][0];
var board = e.data;
board[1][0] = 0;
var tmpAIMove = aiMoveManager(board, aiIterations);
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-1);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-2);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-3);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-4);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-5);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-6);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-7);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-8);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-9);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-10);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-11);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-12);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-13);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-14);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-15);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-16);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-17);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-18);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-19);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-20);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-21);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-22);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-23);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-24);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-25);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-26);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-27);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-28);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-29);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-30);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-31);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-32);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-33);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-34);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-35);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-36);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-37);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-38);}
    if (tmpAIMove === 0){tmpAIMove = aiMoveManager(board, aiIterations-39);}

self.postMessage(tmpAIMove);
}



function aiMoveManager(tmpBoard, tmpIterations)
{
//   tmpBoard = board;
//var tmpIterations = tmpBoard[1][0];
//tmpBoard[1][0] = 0;
// var tmpIterations = 10;
    /*var tmpBoard = board;*/
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
      //if (tmpList[count] === 1){ document.getElementById("uhOhMessages").innerHTML = "You need to play better than that to beat me."; return(count);}  
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