


document.getElementById("game-area").addEventListener('click', function(event){
	let x = event.target;
	if(x.classList.contains("grid-item") === true){
		cardOpen(x)
	} 
});

let openCardList = [];

function cardOpen(x){
	x.classList.add('card-open');
	x.childNodes[1].classList.add('fas-open');
	
	console.log(x.childNodes[1]);
	
	openCardList.push(x.childNodes[1]);
	if(openCardList.length == 2){
//		setTimeout(check,3000, openCardList);
		check(openCardList);
		openCardList = [];
	}

}




function check(list){
	if(list[0].classList[1] === list[1].classList[1]){
		console.log('true');
	} else{
		console.log('false');
//		list.forEach(noMatch);
		setTimeout(notMatch, 2000, list);
	}
}

function notMatch(list){
	list.forEach(noMatch);
}

function noMatch(item){
	console.log(item);
	item.classList.remove('fas-open');
	item.parentNode.classList.remove('card-open');
}


