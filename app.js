
/******************************************************************************
*																			  *		
* 									Main Game Logic 						  *	
*																			  *
*******************************************************************************/

let score = 0;
let moves = 0;
const movesDisplay = document.getElementById('movesInner');

// Sets event listener to turn over cards
document.getElementById("game-area").addEventListener('click', function(event){
	let card = event.target;
	if(card.classList.contains("grid-item") === true){
		cardOpen(card)
	} 
});

// this is a list to put open cards in 
let openCardList = [];

// Function to make card to diplay open side and initiate function check whether cards are the same
function cardOpen(card){
	card.classList.add('card-open');
	card.childNodes[1].classList.add('fas-open');	
	openCardList.push(card.childNodes[1]);
	if(openCardList.length == 2){
		check(openCardList);
		openCardList = [];
	}
}

// fucntion to check whether cards are the same.
function check(list){
	moves += 1;
	movesDisplay.innerHTML = moves;
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

function noMatch(list){
	list.forEach(function(item){
		item.parentNode.classList.remove('no-match')
		item.classList.remove('fas-open');
		item.parentNode.classList.remove('card-open');
	});
}


/******************************************************************************
*																			  *		
* 									Winning The Game 						  *	
*																			  *
*******************************************************************************/


function win(){
	alert("WOW YOU WON!!!!")
}


/******************************************************************************
*																			  *		
* 									Restart Button  						  *	
*																			  *
*******************************************************************************/

document.getElementById('restart').addEventListener('click', function(){
	window.location.reload();
});

