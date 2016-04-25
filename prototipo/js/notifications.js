function popApopUp (texto) {
	var final = "<div class='notification'> <div class='closeBotun' onclick='cleanNotification()'>X</div>";
	var t1 = "</div>";
	
	final += texto;
	final += t1;
	
    document.body.innerHTML += final;
}

function HackpopApopUp () {
	var final = "<div class='notification'><div class='acptBotun' onclick='startGame()'>Jogar</div> <div class='closeBotun' onclick='cleanNotification()'>X</div><p>Foi desafiado pelo André para jogar</p></div>";
	
    document.body.innerHTML += final;
}

function cleanNotification() {
	var foo = document.body;
	foo.removeChild(foo.lastElementChild);
	
}
