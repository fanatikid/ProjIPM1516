var funcGames = {
	gamelist : [
				{	
					imgJogo :"imgs/games/cards/poker.png",
					videoJogo : null,
					nomeJogo:"Solitário",
					tipo : "cards",
					favGame : false
				},
				{	
					imgJogo :"imgs/games/cards/poker.png",
					videoJogo : null,
					nomeJogo : "Poker",
					tipo : "cards",
					favGame : false
				},
				{	
					imgJogo :"imgs/games/races/nfsu.png",
					videoJogo : null,
					nomeJogo: "FastWheels",
					tipo : "races",
					favGame : false
				},
				{	
					imgJogo :"imgs/games/races/nfsu.png",
					videoJogo : null,
					nomeJogo: "Need4Speed",
					tipo : "races",
					favGame : false
				},
				{	
					imgJogo :"imgs/games/shoot/cs.png",
					videoJogo : null,
					nomeJogo: "CounterStrike",
					tipo : "shoot",
					favGame : false
				},
				{	
					imgJogo :"imgs/games/shoot/cs.png",
					videoJogo : null,
					nomeJogo: "Battlefield",
					tipo : "shoot",
					favGame : false
				},
	],
};





function chooseMenu(){
	$(document).ready(function() {
		
		$('#menu-games > ul > li').on('click', function(){
			
			$('#menu-games').find('current-menu').removeClass('current-menu');
			var buttonId = $(this).attr('id').text();
			alert(buttonId);
			
			/*if( buttonId == 'menuFavJogos'){
				$("#central").load("funcGames/favGames.html");
				
			}else if ( buttonId == 'menuCartas'){
				$("#central").load("funcGames/cards.html");
				
			}else if ( buttonId == 'menuCorridas'){
				$("#central").load("funcGames/races.html");
				
			}else if ( buttonId == 'menuTiros'){
				$("#central").load("funcGames/shooting.html");
			}*/
			$(this).addClass('current-menu');
			
		});
	});
}


function favoritaJogo () {
    $(document).ready(function() {
		/** Switch favorite State of food */
		$('div.jogoEntry > #btnFav').on('click', function(e){
			e.stopPropagation();
			
			if( $(this).hasClass('favoritado') ){
				
				$(this).removeClass('favoritado');
				var nomeJogo = $(this).closest('#jogoNome').val();
				changeGameListFav(nomeJogo, false);
				
			}else{
				
				$(this).addClass('favoritado');
				nomeJogo = $(this).closest('#jogoNome').val();
				changeGameListFav( nomeJogo, true);
			}
		});
	});
}


function changeGameListFav( nomeJogo, isFav){
	
	/** Read Game List */
	for (var i = 0; i < funcGames.gamelist.length; i++) {
		
		var object = funcGames.gamelist[i],
			game = object.nomeJogo,
			textL = game.toLowerCase();
			
		/** Game MATCH */
		if(textL === nomeJogo){
			alert('unfaved ' + nomeJogo);
			object.favGame = isFav;
		}
	}
}


function escolheJogo(){
	$('div.jogoEntry').on('click', function(e){
	//POP-UP
	});
}

function começaJogo(){
	
}
