
function janelaInfoMusica(targetPage) {
    var final;
    
    var curpopup = document.getElementById("PoPupMusica");
    if (curpopup != null)
    	document.body.removeChild(curpopup);
    
    final = parsePopUp(targetPage);
    
    document.body.innerHTML += final;
    
}

function cleanPopup() {
	var curpopup = document.getElementById("PoPupMusica");
    if (curpopup != null)
    	document.body.removeChild(curpopup);
}

function parsePopUp(targetMusic) {
	var primeira = "<div id='PoPupMusica'> <div id='closeBotun' onclick='cleanPopup()'>X</div> <div id='titulo'>";
	var titulo;
	var segunda = "</div><div id='detalhes'>";
	var detalhes;
	var terceira = "</div><div id='album' class='"+targetMusic+"'";
	var quarta ="></div><div id='botons'><img class='primary-2' src='icons/Places-favorites-icon.png' alt='favorita'><img id='dislike' class='primary-2' src='icons/thin-0664_dislike_thumb_down_vote-512.png' alt='dislike'><img id='like' class='primary-2' src='icons/plainicon.com-48843-512px-e1a.png' alt='like'></div></div>";
	switch(targetMusic) {
        case 'm1':
			titulo = "Hips Don&lsquo;t lie";
			detalhes = "Shakira";
			break;
		case 'm2':
			titulo = "Rock or Bust";
			detalhes = "ACDC";
			break;
		case 'm3':
			titulo = "Minutes to Midnight";
			detalhes = "Linkin Park";
			break;
		case 'm4':
			titulo = "Living Things";
			detalhes = "Linkin Park";
			break;
		case 'm5':
			titulo = "A thousand suns";
			detalhes = "Linkin Park";
			break;
		case 'm6':
			titulo = "Black Ice";
			detalhes = "ACDC";
			break;
		case 'm7':
			titulo = "Ballbreaker";
			detalhes = "ACDC";
			break;
		case 'm8':
			titulo = "Nightmare";
			detalhes = "Avenged Sevenfold";
			break;
		case 'm9':
			titulo = "Sale el Sol";
			detalhes = "Shakira";
			break;
		case 'm10':
			titulo = "She Wolf";
			detalhes = "N faço ideia";
			break;
        default:
            final = "ERRORHANDLE";
	}
	var retorno = primeira+titulo+segunda+detalhes+terceira+quarta;
	return retorno;
			
			
			
}