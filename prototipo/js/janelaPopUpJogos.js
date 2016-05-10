


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
	var primeira = "<div id='PopUpJogo' class='PopUpJogo'> <div id='closeBotun' onclick='cleanPopUpGame()'>X</div> <div id='titulo'>";
	var titulo;
	var segunda = "</div><div id='detalhes'>";
	var detalhes;
	var terceira = "</div><div class='startGameBtn'>" +
						"<img src='imgs/games/startgamebtn.png'  onclick='launchGame()'></div>";
	var quarta = "<img src='";
	var quinta = "'></img>";
	var sexta = "<table class='topJogos'> <caption id='topTitulo'>TOP</caption>";
	/** TOP
	 *  FAV
	 */
	
	for (var i = 0; i < funcGames.gamelist.length; i++) {
		
			var object = funcGames.gamelist[i],
				nomeJogo = object.nomeJogo,
				nomeJogoL = nomeJogo.toLowerCase(),
				targetGameL = targetGame.toLowerCase(),
				top = object.top;
				//favoritado = object.favGame,
				detalhes = object.tipo.toLowerCase();
			
			/** TODO ADD 
			 *  - FAVORITOS
			 *  */
			//If matched game
			if( targetGameL == nomeJogoL){
				var topPlayers = 3;
				
				titulo = object.nomeJogo;
				quarta = quarta + object.imgJogo;
				
				//TOP 3
				for(var i = 0; i < topPlayers; i++){
					sexta += "<tr class='topJogosRow'>" + "<td id='topJogador'>" + top[i].jogador + "</td>" + 
				"<td id='topPontos'>" + top[i].pontos + "</td>" + "</tr>";
				}
				sexta += "</table>";
				var retorno2 = primeira+titulo+segunda+detalhes+terceira+quarta+quinta+sexta+"</div>";
				return retorno2;
			}		
	}
	var retorno = primeira+titulo+segunda+detalhes+terceira+quarta+quinta+sexta+"</div>";
	return retorno;		
}


function buildGameWiz(tipo, score, nomeJogo){
	
	var final = '<div id="janelaJogo" class="janelaJogo" name="'+ nomeJogo +'">';
	
	var load = '<div id="loading"> <div id="progressBar"><div></div></div>' +
					'<p> A carregar Jogo ... </p></div>',
		gamePage = '<div id="gamePageId">' +
						'<div class="pause-div" onclick="pauseGame()"><img id="pause-btn" src="imgs/games/pause-game.png"></div>'+
						'<div class="exit-div" onclick="menuExitGame()"><img id="exit-btn" src="imgs/games/exit-game.png"></div>'+
						'<div id="score-tag"><p id="score-header">Score</p><div class="count" onclick="incScore()">0</div></div></div>',
		//Menu buttons
		menuInit = '<div id="menu-jogo-inicial" class=""><ul>',
		menuPause = '<div id="menu-jogo-pausa" class=""><ul>' ,
		start = '<li id="start-game-btn" onclick="startGame()"><h1>Start Game</h1></li>',
		options = '<li id="options-game-btn"><h1>Options</h1></li>',
		highscores = '<li id="highscores-game-btn"><h1>HighScores</h1></li>',
		continuar = '<li id="continue-game-btn" onclick="continueGame()"><h1>Continue Game</h1></li>',
		exitM = '<li id="back-menu-game-btn" onclick="backMainM()"><h1>Back to main menu</h1></li>',
		exitG = '<li id="exit-game-btn" onclick="menuExitGame()"><h1>Exit Game</h1></li>',
		
		//Game Pop-Up States
		gameOver = '<div id="gameOver">'+
						'<p>Game Over!</p>'	+ 
						'<p> Score: '+ score +'</p>'+
					'</div>'+
					'<div class="confirmationPopUp">' + 
						'<p>Keep playing?</p>' + 
						'<div class="wrapButtons">'+
							'<div class="yesB" onclick="keepPlaying()">Yes</div>' + 
							'<div class="noB" onclick="backToGames()">No</div>' +
						'</div>' +
					'</div>',
		
		gameNewHighScore = '<div id="gameOver">'+
								'<p>Game Over!</p>' + 
								'<p> New HighScore: '+ score + '</p></div>' +
								'<div id="showPrize">' +
									'<p>Congratulations you have won this prize!!!</p>' +
									'<img id="prizeImg" src="imgs/comida/coca-cola.png"></img>'+
								'</div>'+
								'<div class="confirmationPopUp">' + 
									'<p>Claim prize now?</p>' + 
									'<div class="wrapButtons">'+
										'<div class="yesB" onclick="getPrizeNow()">Now</div>' + 
										'<div class="noB" onclick="getPrizeLater()">Later</div>' +
									'</div>' +
							'</div>';
	
	if(tipo == 'load'){
		final += load;
		
	}else if (tipo == 'menuInit'){
		final += menuInit + start + options + highscores + exitG + '</ul>';
		
	}else if (tipo == 'menuPause'){
		final += menuPause + continuar + options + exitM + exitG + '</ul>' ;
		
	}else if (tipo == 'enterGame'){
		final += gamePage + '</div>';
		
	}else if (tipo == 'gameOver'){
		final += gameOver + '</div>';
	
	}else if (tipo == 'gameNewHighScore'){
		final += gameNewHighScore + '</div>';
	}
	
	final += '</div>';
	$('body').append(final);	
}


function launchGame(){
	var timeVar;
	var nomeJogo = $('#PopUpJogo > #titulo').text().toLowerCase();
	
	cleanPopUpGame();
	//just load script
	randomGameOver();
	
	buildGameWiz('load', -1, nomeJogo);
	progress(100, $('#progressBar'));
	
	var timeVar2;
	timeVar2 = setTimeout( function(){
		$('#loading > p').text('Pronto!');
	}, 1200);
	
	
	setTimeout(function()
	{
		$('#janelaJogo').remove();
		menuInitGame(nomeJogo);
	}, 2300);
	
	clearTimeout(timeVar);
	clearTimeout(timeVar2);

}


function progress(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 1000).html(percent + "% ");
}


function menuInitGame(nomeJogo){
	buildGameWiz('menuInit', -1, nomeJogo);
}

function startGame(){
	var nomeJogo = $('#janelaJogo').attr('name');
	
	$('#janelaJogo').remove();
	buildGameWiz('enterGame', -1, nomeJogo);
	
}

function backMainM(){
	if( confirm('Are you sure you want to go to main menu?') ){
		var nomeJogo = $('#janelaJogo').attr('name');
		$('#janelaJogo').remove();
		buildGameWiz('menuInit', -1, nomeJogo);
	}else{
		// do nuffin
	}
	
}

function menuExitGame(){
	if( confirm('Are you sure you want to exit?')){
		$('.janelaJogo').remove();
	}else{
		// do nuffin
	}
}

function homeExit(){
	$('.janelaJogo').remove();
	$('.PopUpJogo').remove();
}

function pauseGame(){
	var nomeJogo = $('.janelaJogo').attr('name').toLowerCase();
	buildGameWiz('menuPause', -1, nomeJogo);
}

function continueGame(){
	$('#menu-jogo-pausa').closest('#janelaJogo').remove();
}

//go to game menu
function keepPlaying(){
	var nomeJogo = $('.janelaJogo ').attr('name').toLowerCase();
	/** This method asks for a confirmation */
	//backMainM();
	
	/** This way doesn't ask for confirmation */
	$('.janelaJogo').remove();
	buildGameWiz('menuInit', -1, nomeJogo);
	randomGameOver();
}

//leave current game
function backToGames(){
	menuExitGame();
}

function incScore(){
  	var el = $('.count');
  	var num = parseInt(el.text());
  	el.text(num+1);
}

function setScore(num){
	var el = $('.count');
	el.text(num);
}

/**
 * Game EVENTS 
 * -> play those in console for now.
 * TODO:
 *  -> activate functions by keyDown/Press
 *
 */

function gameOver(){
	var score = $('.main-background > #janelaJogo > #gamePageId > #score-tag > .count').text(),
	nomeJogo = $('#janelaJogo').attr('name'),
	isHighScore = false;
	
	//Update top score and check HighScore
	isHighScore = updateTopScore(nomeJogo, score);
	
	if(isHighScore){
		buildGameWiz('gameNewHighScore', score, nomeJogo);
	}else{
		buildGameWiz('gameOver', score, nomeJogo);
	}
}


function updateTopScore(nomeJogo, playerScore){
	
	for (var i = 0; i < funcGames.gamelist.length; i++) {
		var object = funcGames.gamelist[i],
		nomeObj = object.nomeJogo.toLowerCase(),
		isHighScore = false,
		toAppend = true;
		
		
		//do jogo atual
		if(nomeJogo == nomeObj){
			var length = object.top.length;
			
			//verificar pontuacoes
			for (var j = 0; j < length; j++){
				var objScore = object.top[j].pontos;
				
				if( playerScore > objScore ){
					//check HighScore
					if( j < 3 )
						isHighScore = true;
						
					toAppend = false;
					object.top.splice(j, 0, { jogador: 'Eu', pontos: playerScore});
					return isHighScore;
				}
			}
			
			if(toAppend){
				object.top.push( { jogador: 'Eu', pontos: playerScore});
			}
		}
	}
	return isHighScore;
}


function getPrizeNow(){
	$('.janelaJogo').remove();
	//jump to food
	//TODO
}

function getPrizeLater(){
	var nomeJogo = $('.janelaJogo').attr('name').toLowerCase();
	//back to main menu
	$('.janelaJogo').remove();
	buildGameWiz('menuInit', -1, nomeJogo);
	randomGameOver();
}

function randomGameOver(){
	
	$(document).on('keypress', function(e) {
		//Key 'Enter' highscore
		if (e.keyCode == 13) {
			var score = $('.main-background > #janelaJogo > #gamePageId > #score-tag > .count').text();
			
			if( score == ''){
				return true;
			}
			
			setScore(15);
			gameOver();
			$(document).unbind('keypress');
		
		//Key 'Delete' low Highscore
		}else if(e.keyCode == 8){
			var score = $('.main-background > #janelaJogo > #gamePageId > #score-tag > .count').text();
			
			if( score == '')
				return true;
			
			setScore(4);
			gameOver();
			$(document).unbind('keypress');
		}
		
		
	});
	
}
