function arrancaKeyboard() {
	$(document).ready(function() {
			
		$('#keyboard').css({ opacity: 0});
	
		/** Show keyboard */
		$('.search-field').on( 'click', function() {
			
			$('#keyboard').css({ 
				opacity: '1', 
				'max-height': '100%',
				'max-width': '100%'
			});
			
			
			if($('.search-field').val() == "Introduza o nome de artista...") {
				// remove all the text
				$('.search-field').val("");
			}
			
			return false;
		});
		
		/** Search matched songs  */
		$('.form-container').submit( function() {
			if($('.search-field').val() == "") {
				// Add the text "Search..."
				$('.search-field').val("Introduza o nome de artista...");	
			}else{
				
				var valInput = $('.search-field').val(),
				valThis = valInput.toLowerCase();
				
				/** Clean list */
				 $('#cssmenu > ul > li').each(function () {
					
					if( $(this).hasClass('hack-search') ){
						// ignore
					}else{
						$(this).remove();
					}
				});
				
				/** Read Music List */
				for (var i = 0; i < funcMusica.musiclist.length; i++) {
					var object = funcMusica.musiclist[i],
						musica = object.nomeMusica,
						artista = object.nomeArtista,
						inListFlag = 0,
						textL = artista.toLowerCase();
						
					/** ARTIST MATCH */
					if(textL.indexOf(valThis) == 0){
						$('#cssmenu > ul > li').each(function () {
							
							if( $(this).hasClass('hack-search') ){
								// ignore
							}else{
								if( $(this).find('.artist').text()  == artista){
									$(this).find('.song-list').append("<li><a href='#'><span>" + musica + "</span></a></li>");
									inListFlag = 1;
								}
							}
						});
						if(inListFlag == 0){
							$("#cssmenu > ul").append("<li class='has-sub'><a class='artist' id='artist' href='#'><span>" + artista + 
							"</span></a><ul class='song-list'><li><a href='#'><span>" + musica + "</span></a></li></ul></li>");
						}
					}
				}
				
			}
		
			
			/** Hide keyboard */
			$('#keyboard').css({ 
				opacity: '0', 
				'max-height': '1%',
				'max-width': '1%'
			});
			
			
			return false;
		});
		
		/**FIX-ME DropDownMenu here */
		$('#cssmenu > ul').on('click', 'li > .artist', function() {

			$('#cssmenu li').removeClass('active');
			$(this).closest('li').addClass('active');
			var checkElement = $(this).next();
			if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				$(this).closest('li').removeClass('active');
				checkElement.slideUp('normal');
			}
			if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('#cssmenu ul > ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
			}
			if($(this).closest('li').find('ul').children().length == 0) {
				return true;
			} else {
				return false;	
			}		
		});
	});
}

/*
 JS auxiliar, arranca o dinamismo do cover
 * */
function arrancaCover() {
		var carousel = $("#carousel").flipster({
			style : 'carousel',
			spacing : -0.5,
			nav : true,
			buttons : true,
		});
}

function arrancaFavs() {
	document.getElementById("carousel").innerHTML = buildFavPage();
}
/*
 JS auxiliar geral
 * */

function updatesJanelaPoster () {
	if (menudir == "main") {
		document.getElementById("botaoHome").style.visibility = "hidden";
		document.getElementById("janelaBotom").style.visibility = "visible";
	
	/** MUSIC */
	} else if (menudir == "fav") {
		arrancaFavs();
        arrancaCover();	
	} else if (menudir == "top") {
		updateYTop();
	} else if (menudir == "play") {
		updatePlaylist();
	} else if (menudir == "look") {
		arrancaKeyboard();
	
	/** GAMES */
	} else if (menudir == "favg"){
		favoritaJogo();
		chooseMenu();
		escolheJogo();
		document.getElementById("botaoHome").style.visibility = "visible";
		document.getElementById("janelaBotom").style.visibility = "hidden";
		
	} else if (menudir == "races"){
		favoritaJogo();
		chooseMenu();
		escolheJogo();
		
	} else if (menudir == "shoot"){
		favoritaJogo();
		chooseMenu();
		escolheJogo();
		
	} else if (menudir == "cards"){
		favoritaJogo();
		chooseMenu();
		escolheJogo();
		
	} else {
		document.getElementById("botaoHome").style.visibility = "visible";
		document.getElementById("janelaBotom").style.visibility = "hidden";
	}
}


function janelaCentralPoster(targetPage) {
    var xhttp = new XMLHttpRequest();
    var final;
    
	
    switch(targetPage) {
		/** MUSIC PAGES*/
        case 'fav':
            final = "funcMusic/favoriteMusic.html";
            break;
        case 'music':
            final = "funcMusic/music.html";
            break;
        case 'play':			
            final = "funcMusic/playlist.html";
            break;
        case 'look':
            final = "funcMusic/searchMusic.html";
            break;
        case 'top':
            final = "funcMusic/topMusic.html";
            break;
		/** GAME PAGES */
		case 'favg':
            final = "funcGames/favGames.html";
            break;
        case 'races':
            final = "funcGames/races.html";
            break;
        case 'shoot':			
            final = "funcGames/shooting.html";
            break;
        case 'cards':
            final = "funcGames/cards.html";
            break;
		/** ORDERS PAGES */
		// missing 
		
        case 'main':
        	final = "main.html";
        	break;
        default:
            final = "ERRORHANDLE";
    }
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {	
            document.getElementById("central").innerHTML = xhttp.responseText;
        }
        updatesJanelaPoster();
    };
    
    
    xhttp.open("GET", final, true);
    xhttp.send();
    menudir = targetPage;
}


