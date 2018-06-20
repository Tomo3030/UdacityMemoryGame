
/******************************************************************************
*																			  *		
* 									Main Game Logic 						  *	
*																			  *
*******************************************************************************/

let score = 0;
let moves = 0;
let started = false;
let timer = 0;
let minutes = 0; 


const movesDisplay = document.getElementById('movesInner');

// Sets event listener to turn over cards
document.getElementById("game-area").addEventListener('click', function(event){
	let card = event.target;
	if(card.classList.contains("grid-item") === true){
		cardOpen(card);
		if(started === false){
			startTimer();
		}
	} 
});

// this is a list to put open cards in 
let openCardList = [];

// This makes a card diplay the 'open' side. If there are two open cards. It:
// 1) initiates the function to increase the moves score
// 2) initisates the function to check if two open cards are the same
// 3) clears the openCardList
function cardOpen(card){
	card.classList.add('card-open');
	card.childNodes[1].classList.add('fas-open');	
	openCardList.push(card.childNodes[1]);
	if(openCardList.length == 2){
		increaseMovesScore();
		check(openCardList);
		openCardList = [];
	}
}

// increase the movesScore then check whether cards are the same.
// If cards are the same we: 1) Add points 2) initiate match animation 3) checks if win requirements met.
// If there is no match - initiate the no-match animation.
// **** If there is a match nothing really happens. If there isn't then noMatch function starts. 
function check(list){
	if(list[0].classList[1] === list[1].classList[1]){
		list.forEach(function(item){
			item.parentNode.classList.add('match');
		});
		score += 1;
		if(score === 8){
			setTimeout(win, 700);
		}
	} else{
		list.forEach(function(item){
			item.parentNode.classList.add('no-match');
		});
		setTimeout(noMatch, 700, list);
	}
}

// This function removes the no-match animation (which is on an infinite loop). Then this function 'closes' the cards.
function noMatch(list){
	list.forEach(function(item){
		item.parentNode.classList.remove('no-match')
		item.classList.remove('fas-open');
		item.parentNode.classList.remove('card-open');
	});
}

function increaseMovesScore(){
	moves += 1;
	movesDisplay.innerHTML = moves;
	if(removeStarLimits.indexOf(moves) >= 0){
		removeStars();
	}
}


/******************************************************************************
*																			  *		
* 									Winning/Losing The Game 						  *	
*																			  *
*******************************************************************************/


function win(){
	document.getElementById('contents').classList.add('end-screen');
	document.getElementById('end-game-box').style.display = 'block';
	document.getElementById('moves-stats').innerHTML = moves;
	document.getElementById('time-stats').innerHTML = minutes + ":" + ("0"+timer).slice(-2);
	document.getElementById('end-restart-button').addEventListener('click', function(){
	window.location.reload();
});
}

function lose(){
	alert("Sorry, You lost!");
	window.location.reload();
}


/******************************************************************************
*																			  *		
* 									Restart Button  						  *	
*																			  *
*******************************************************************************/

document.getElementById('restart').addEventListener('click', function(){
	window.location.reload();
});

/******************************************************************************
*																			  *		
* 									Timer 			  						  *	
*																			  *
*******************************************************************************/



function startTimer(){
	started = true;
setInterval(function(){
	timer += 1;
	if(timer > 59){
		timer = 0;
		minutes += 1;
		if(minutes > 10){
			lose();
		}
	}
	document.getElementById('timer').innerHTML = minutes + ":" + ("0"+timer).slice(-2);
},1000);
}

/******************************************************************************
*																			  *		
* 									Stars 			  						  *	
*																			  *
*******************************************************************************/

// Here we have an arrray which dictaes how many moves until a star is removed. 

const removeStarLimits = [4,6,8];

// find the stars in the DOM
const starArray = document.getElementsByClassName('star');

//because we got stars by class name (above) They come back in an array. 
// We need to itterate through this array each time the removeStar function 
// gets called. So we need an iterator so:

let starIterator = 2;
let endStarIterator = 5;

function removeStars(){
	starArray[starIterator].style.color = '#F2F3F5';
	starIterator -= 1;
	starArray[endStarIterator].style.color = '#F2F3F5';
	endStarIterator -=1;
}


