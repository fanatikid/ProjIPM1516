function popApopUp (texto) {
	var final = "<div class='notification'> <div class='closeBotun' onclick='cleanNotification()'>X</div>";
	var popStack = "<div id='popStack'>";
	var t1 = "</div>";
	var leStack = document.body.querySelectorAll(".notification");
	
	
	final += texto;
	if (leStack.length > 0) {
		final += popStack+(leStack.length+1)+t1;
		final += "<div id='limpaAll' onclick='clearAllnotes()'>Limpa Tudo</div>";	
	}
	
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

function clearAllnotes() {
	if (!confirm("Quer apagar todas as notificações?"))
		return;
	var foo = document.body.querySelectorAll(".notification");
	for (i = foo.length-1; i >= 0; i--) {
		foo[i].remove();
	}
}
