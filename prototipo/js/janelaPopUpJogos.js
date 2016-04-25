


function janelaInfoJogo(jogo) {
    var final;
    
    var curpopup = $('body').find("#PopUpJogo");
	
    if (curpopup != null)
    	curpopup.remove();
    
    final = parsePopUpGame(jogo);
    
   $('body').append(final);
}


function cleanPopUpGame() {
	var curpopup = $('body').find("#PopUpJogo");
	
    if (curpopup != null)
    	curpopup.remove();
}


function parsePopUpGame(targetGame) {
	var primeira = "<div id='PopUpJogo'> <div id='closeBotun' onclick='cleanPopUpGame()'>X</div> <div id='titulo'>";
	var titulo;
	var segunda = "</div><div id='detalhes'>";
	var detalhes;
	var terceira = "</div><div class='startGameBtn'>" +
						"<img src='imgs/games/startgamebtn.png'  onclick='launchGame()'></div>";
	var quarta = "<img src='";
	var quinta = "'></img></div>";
	/** TOP
	 *  FAV
	 */
	for (var i = 0; i < funcGames.gamelist.length; i++) {
			var object = funcGames.gamelist[i],
				nomeJogo = object.nomeJogo,
				nomeJogoL = nomeJogo.toLowerCase(),
				targetGameL = targetGame.toLowerCase(),
				favoritado = object.favGame,
				tipoObj = object.tipo.toLowerCase();
			
			
			/** TODO ADD 
			 *  - FAVORITOS
			 *  - TOP
			 *  */
			
			//If matched
			if( targetGameL == nomeJogoL){
				titulo = object.nomeJogo;
				detalhes = tipoObj;
				quarta = quarta + object.imgJogo;
			}		
	}
	var retorno = primeira+titulo+segunda+detalhes+terceira+quarta+quinta;
	return retorno;		
}


function buildGameWiz(tipo){
	
	var final = '<div id="janelaJogo" class="janelaJogo">';
	
	var load = '<div id="loading"> <div id="progressBar"><div></div></div>' +
					'<p> A carregar Jogo ... </p></div>',
		gamePage = '<div id="gamePageId">' +
						'<div onclick="pauseGame()"><img id="pause-btn" src="imgs/games/pause-game.png"></div>'+
						'<div onclick="menuExitGame()"><img id="exit-btn" src="imgs/games/exit-game.png"></div>'+
						'<div class="count" onclick="incScore()">0</div></div>',
		menuInit = '<div id="menu-jogo-inicial" class=""><ul>',
		menuPause = '<div id="menu-jogo-pausa" class=""><ul>' ,
		start = '<li id="start-game-btn" onclick="startGame()"><h1>Start Game</h1></li>',
		options = '<li id="options-game-btn"><h1>Options</h1></li>',
		highscores = '<li id="highscores-game-btn"><h1>HighScores</h1></li>',
		continuar = '<li id="continue-game-btn" onclick="continueGame()"><h1>Continue Game</h1></li>',
		exitM = '<li id="back-menu-game-btn" onclick="backMainM()"><h1>Back to main menu</h1></li>',
		exitG = '<li id="exit-game-btn" onclick="menuExitGame()"><h1>Exit Game</h1></li>';
	
	if(tipo == 'load'){
		final += load;
	}else if (tipo == 'menuInit'){
		final += menuInit + start + options + highscores + exitG + '</ul>';
	}else if (tipo == 'menuPause'){
		final += menuPause + continuar + options + exitM + exitG + '</ul>' ;
	}else if (tipo == 'enterGame'){
		final += gamePage;
	}
	
	final += '</div>';
	$('body').append(final);	
}


function launchGame(){
	var timeVar;
	cleanPopUpGame();
	
	buildGameWiz('load');
	progress(100, $('#progressBar'));
	
	var timeVar2;
	timeVar2 = setTimeout( function(){
		$('#loading > p').text('Pronto!');
	}, 1200);
	
	
	setTimeout(function()
	{
		$('#janelaJogo').remove();
		menuInitGame();
	}, 2300);
	
	clearTimeout(timeVar);
	clearTimeout(timeVar2);

}


function progress(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 1000).html(percent + "% ");
}


function menuInitGame(){
	buildGameWiz('menuInit');
}

function startGame(){
	$('#janelaJogo').remove();
	buildGameWiz('enterGame');
	
}

function backMainM(){
	if( confirm('Are you sure you want to go to main menu?') ){
		$('#janelaJogo').remove();
		buildGameWiz('menuInit');
	}else{
		
	}
	
}

function menuExitGame(){
	if( confirm('Are you sure you want to exit?')){
		$('.janelaJogo').remove();
	}else{
		
	}
	
}

function pauseGame(){
	buildGameWiz('menuPause');
}

function continueGame(){
	$('#menu-jogo-pausa').closest('#janelaJogo').remove();
}

function incScore(){
  	var el = $('.count');
  	var num = parseInt(el.text());
  	el.text(num+1);
}