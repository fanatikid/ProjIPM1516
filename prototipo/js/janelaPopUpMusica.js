
function janelaInfoMusica(musica, fav, like) {
    var final;
    
    var curpopup = document.getElementById("PoPupMusica");
    if (curpopup != null)
    	document.body.removeChild(curpopup);
    
    final = parsePopUp(musica, fav, like);
    
    document.body.innerHTML += final;
    
}

function cleanPopup() {
	var curpopup = document.getElementById("PoPupMusica");
    if (curpopup != null)
    	document.body.removeChild(curpopup);
}

function parsePopUp(targetMusic, fav, like) {
	var primeira = "<div id='PoPupMusica'> <div id='closeBotun' onclick='cleanPopup()'>X</div> <div id='titulo'>";
	var titulo;
	var segunda = "</div><div id='detalhes'>";
	var detalhes;
	var terceira = "</div><div id='album' class='"+ "m" +targetMusic+"'";
	var quarta ="></div><div id='botons'><img id='favo' class='primary-2";
    if (fav)
        quarta += " favoritado";
    quarta += "' src='icons/Places-favorites-icon.png'  onclick='favoritaMusica("+listaMusicas[targetMusic-1][0]+")' alt='favorita'><img id='ngosto'  onclick='dislikaMusica("+listaMusicas[targetMusic-1][0]+")' class='primary-2";
    if (like == -1)
        quarta += " disliked";
    quarta += "' src='icons/thin-0664_dislike_thumb_down_vote-512.png' alt='dislike'><img id='gosto' onclick='likaMusica("+listaMusicas[targetMusic-1][0]+")' class='primary-2";
    if (like == 1)
        quarta += " liked";
    quarta += "' src='icons/plainicon.com-48843-512px-e1a.png' alt='like'></div></div>";
    
    switch (targetMusic) {
        case 1:
            titulo = "Bridge Over Troubled Water";
            detalhes = "Simon And Garfunkel";
            break;
        case 2:
            titulo = "Hips don&#39t lie";
            detalhes = "Shakira";
            break;
        case 3:
            titulo = "Hotel California";
            detalhes = "The Eagles";
            break;
        case 4:
            titulo = "No Woman No Cry";
            detalhes = "Bob Marley";
            break;
        case 5:
            titulo = "Light My Fire";
            detalhes = "The Doors";
            break;
        case 6:
            titulo = "Stairway To Heaven";
            detalhes = "Led Zeppelin";
            break;
        case 7:
            titulo = "I Walk The Line";
            detalhes = "Johnny Cash";
            break;
        case 8:
            titulo = "A Day In The Life";
            detalhes = "Beatles";
            break;
        case 9:
            titulo = "Born To Run";
            detalhes = "Bruce Springsteen";
            break;
        case 10:
            titulo = "Purple Haze";
            detalhes = "Jimi Hendrix";
            break;
        case 11:
            titulo = "Blowin&#39 in The Wind";
            detalhes = "Bob Dylan";
            break;
        case 12:
            titulo = "Keys to the Kingdom";
            detalhes = "Linkin park";
            break;
        case 13:
            titulo = "Give Me a Reason";
            detalhes = "three days grace";
            break;
        case 14:
            titulo = "Misery Loves My Company";
            detalhes = "three days grace";
            break;
        case 15:
            titulo = "Lost in You";
            detalhes = "three days grace";
            break;
        case 16:
            titulo = "World So Cold";
            detalhes = "three days grace";
            break;
        case 17:
            titulo = "pain";
            detalhes = "three days grace";
            break;
        case 18:
            titulo = "Animal I Have Become";
            detalhes = "three days grace";
            break;
        case 19:
            titulo = "riot";
            detalhes = "three days grace";
            break;
        case 20:
            titulo = "never too late";
            detalhes = "three days grace";
            break;
        case 21:
            titulo = "Going Under";
            detalhes = "Evanescence";
            break;
        case 22:
            titulo = "Bring Me to Life";
            detalhes = "Evanescence";
            break;
        case 23:
            titulo = "My Immortal";
            detalhes = "Evanescence";
            break;
        case 24:
            titulo = "This Means War";
            detalhes = "Avenged Sevenfold";
            break;
        case 25:
            titulo = "Without You";
            detalhes = "three days grace";
            break;
            
    }
    
	var retorno = primeira+titulo+segunda+detalhes+terceira+quarta;
	return retorno;
			
			
			
}