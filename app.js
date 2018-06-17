


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
		check(openCardList);
		openCardList = [];
	}

}

function check(list){
	if(list[0].classList[1] === list[1].classList[1]){
		console.log('true');
	} else{
		console.log('false');
		list.forEach(function(item){
//			item.parentNode.classList.remove('no-match');
//			console.log(item.parentNode.classList.contains('no-match'));
			item.parentNode.classList.add('no-match');
			console.log(item.parentNode.classList.contains('no-match'));
		});

		setTimeout(noMatch, 500, list);
	}
}

function noMatch(list){
	list.forEach(function(item){
		item.parentNode.classList.remove('no-match')
		item.classList.remove('fas-open');
		item.parentNode.classList.remove('card-open');
//		item.parentNode.classList.add('no-match');
	});
}

