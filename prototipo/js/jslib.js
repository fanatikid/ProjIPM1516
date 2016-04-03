
function updatesJanelaPoster () {
	if (menudir == "main") {
		document.getElementById("botaoHome").style.visibility = "hidden";
	} else document.getElementById("botaoHome").style.visibility = "visible";
}


function janelaCentralPoster(targetPage) {
    var xhttp = new XMLHttpRequest();
    var final;
    switch(targetPage) {
        case 'fav':
            final = "../funcMusic/favoriteMusic.html";
            break;
        case 'music':
            final = "funcMusic/music.html";
            break;
        case 'play':
            final = "../funcMusic/playlist.html";
            break;
        case 'look':
            final = "../funcMusic/searchMusic.html";
            break;
        case 'top':
            final = "../funcMusic/topMusic.html";
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
    };
    
    
    xhttp.open("GET", final, true);
    xhttp.send();
    menudir = targetPage;
    updatesJanelaPoster();
} 
