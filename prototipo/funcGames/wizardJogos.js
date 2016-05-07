var funcGames = {
	gamelist : [
				{
					imgJogo :"imgs/games/cards/poker.png",
					videoJogo : null,
					nomeJogo:"Solitário",
					tipo : "cards",
					top: [  
						{ jogador: 'Rob', pontos: 12},
						{ jogador: 'Ana', pontos: 9},
						{ jogador: 'John', pontos: 9},
						{ jogador: 'Redy', pontos: 7},
						{ jogador: 'Tito', pontos: 5},
					],
					favGame : false
				},
				{
					imgJogo :"imgs/games/cards/poker.png",
					videoJogo : null,
					nomeJogo : "Poker",
					tipo : "cards",
					top: [  
						{ jogador: 'Rob', pontos: 12},
						{ jogador: 'Ana', pontos: 9},
						{ jogador: 'John', pontos: 9},
						{ jogador: 'Redy', pontos: 7},
						{ jogador: 'Tito', pontos: 5},
					],
					favGame : false
				},
				{
					imgJogo :"imgs/games/races/nfsu.png",
					videoJogo : null,
					nomeJogo: "FastWheels",
					tipo : "races",
					top: [  
						{ jogador: 'Rob', pontos: 12},
						{ jogador: 'Ana', pontos: 9},
						{ jogador: 'John', pontos: 9},
						{ jogador: 'Redy', pontos: 7},
						{ jogador: 'Tito', pontos: 5},
					],
					favGame : false
				},
				{
					imgJogo :"imgs/games/races/nfsu.png",
					videoJogo : null,
					nomeJogo: "Need4Speed",
					tipo : "races",
					top: [  
						{ jogador: 'Rob', pontos: 12},
						{ jogador: 'Ana', pontos: 9},
						{ jogador: 'John', pontos: 9},
						{ jogador: 'Redy', pontos: 7},
						{ jogador: 'Tito', pontos: 5},
					],
					favGame : false
				},
				{
					imgJogo :"imgs/games/shoot/cs.png",
					videoJogo : null,
					nomeJogo: "CounterStrike",
					tipo : "shoot",
					top: [  
						{ jogador: 'Rob', pontos: 12},
						{ jogador: 'Ana', pontos: 9},
						{ jogador: 'John', pontos: 9},
						{ jogador: 'Redy', pontos: 7},
						{ jogador: 'Tito', pontos: 5},
					],
					favGame : false
				},
				{
					imgJogo :"imgs/games/shoot/cs.png",
					videoJogo : null,
					nomeJogo: "Battlefield",
					tipo : "shoot",
					top: [  
						{ jogador: 'Rob', pontos: 12},
						{ jogador: 'Ana', pontos: 9},
						{ jogador: 'John', pontos: 9},
						{ jogador: 'Redy', pontos: 7},
						{ jogador: 'Tito', pontos: 5},
					],
					favGame : false
				},
				{
					imgJogo :"imgs/games/shoot/cs.png",
					videoJogo : null,
					nomeJogo: "Donkey Kong",
					tipo : "shoot",
					top: [  
						{ jogador: 'Rob', pontos: 12},
						{ jogador: 'Ana', pontos: 9},
						{ jogador: 'John', pontos: 9},
						{ jogador: 'Redy', pontos: 7},
						{ jogador: 'Tito', pontos: 5},
					],
					favGame : false
				},
	],
};





function chooseMenu(){

		$('#menu-games > ul > li').on('click', function(){

			var buttonId = $(this).attr('id');

			if( buttonId == 'menuFavJogos'){
				janelaCentralPoster('favg');
				buildGameDom('', true);

			}else if ( buttonId == 'menuCartas'){
				janelaCentralPoster('cards');
				buildGameDom('cards', false);

			}else if ( buttonId == 'menuCorridas'){
				janelaCentralPoster('races');
				buildGameDom('races', false);

			}else if ( buttonId == 'menuTiros'){
				janelaCentralPoster('shoot');
				buildGameDom('shoot', false);
			}

		});
}

var cheatHack;
function hackDisShit(tipo) {
	for (var i = 0; i < funcGames.gamelist.length; i++) {
			var object1 = funcGames.gamelist[i],
				favoritado1 = object1.favGame,
				tipoObj = object1.tipo.toLowerCase();

				if( tipo == tipoObj){
					if(favoritado1 == true){
						$('#paginaJogos > #objsJogos').append('<div class="jogoEntry">' +
							'<img src="' + object1.imgJogo + '" class="jogosImagem"></img>' +
							'<img id="btnFav" class="favoritado" src="icons/Places-favorites-icon.png"/>' +
							'<p id="jogoNome">' + object1.nomeJogo + '</p>' +
						'</div>');

					}else{
						$('#paginaJogos > #objsJogos').append('<div class="jogoEntry">' +
							'<img src="' + object1.imgJogo + '" class="jogosImagem"></img>' +
							'<img id="btnFav" class="" src="icons/Places-favorites-icon.png"/>' +
							'<p id="jogoNome">' + object1.nomeJogo + '</p>' +
						'</div>');
					}
				}
		}
}

var cheatHack2;
function hackDisShit2(tipo) {

	for (var i = 0; i < funcGames.gamelist.length; i++) {
		var object = funcGames.gamelist[i],
			favoritado = object.favGame;

			if(favoritado == true){
				$('#paginaJogos > #objsJogos').append('<div class="jogoEntry">' +
					'<img src="' + object.imgJogo + '" class="jogosImagem"></img>' +
					'<img id="btnFav" class="favoritado" src="icons/Places-favorites-icon.png"/>' +
					'<p id="jogoNome">' + object.nomeJogo + '</p>' +
				'</div>');
			}
		}
}

function buildGameDom(tipo, isFav){


	if(isFav == true){
		//alert('jogos favoritos');
		cheatHack2 = setTimeout(function() {

		hackDisShit2(tipo);
		}, 100);


	}else{
		cheatHack = setTimeout(function() {

		hackDisShit(tipo);
		}, 100);
	}
}


function favoritaJogo () {
	$(document).ready( function(){


		$('#objsJogos').on('click', '.jogoEntry > #btnFav', function(e){
			e.stopPropagation();

			if( $(this).hasClass('favoritado') ){

				$(this).removeClass('favoritado');
				var nomeJogo = $(this).closest('.jogoEntry').find('#jogoNome').text();
				var nomeJogoL = nomeJogo.toLowerCase();
				changeGameListFav(nomeJogoL, false);

			}else{

				$(this).addClass('favoritado');
				var nomeJogo2 = $(this).closest('.jogoEntry').find('#jogoNome').text();
				var nomeJogo2L = nomeJogo2.toLowerCase();
				changeGameListFav( nomeJogo2L, true);
			}
		});
	});
}


function changeGameListFav( nomeJogo, isFav){
	$(document).ready(function() {
		/** Read Game List */
		for (var i = 0; i < funcGames.gamelist.length; i++) {

			var object = funcGames.gamelist[i],
				game = object.nomeJogo,
				textL = game.toLowerCase();

			/** Game MATCH */
			if(textL == nomeJogo){
				object.favGame = isFav;
			}
		}
	});
}


function escolheJogo(){

	$('#objsJogos').on('click', '.jogoEntry', function(){
		var targetGame = $(this).find('#jogoNome').text();
		//alert('target game ' + targetGame);
		janelaInfoJogo(targetGame);
	});
}

function começaJogo(){

}


function foo (callback) {
  $.ajax({
      janelaCentralPoster: callback,
      success: function(){
        this.janelaCentralPoster(true);
      }
  });
}



