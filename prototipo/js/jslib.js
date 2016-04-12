function arrancaKeyboard() {
	$(document).ready(function() {
	
		$('#keyboard').css({ opacity: 0});
	
		$('.form-container').submit(function() {
			
			$('#keyboard').css({ 
				opacity: '1', 
				'max-height': '100%',
				'max-width': '100%'
			});
			
			return false;
		
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
	} else if (menudir == "fav") {
		arrancaCover();
		//arrancaFavs();
	} else if (menudir == "look") {
		arrancaKeyboard();
	}
	else {
		document.getElementById("botaoHome").style.visibility = "visible";
		document.getElementById("janelaBotom").style.visibility = "hidden";
	}
}


function janelaCentralPoster(targetPage) {
    var xhttp = new XMLHttpRequest();
    var final;
    
	
    switch(targetPage) {
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


