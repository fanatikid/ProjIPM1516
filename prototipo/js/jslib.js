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
	
		document.getElementById("botaoHome").style.visibility = "visible";
		document.getElementById("janelaBotom").style.visibility = "hidden";
	if (menudir == "main") {
		document.getElementById("botaoHome").style.visibility = "hidden";
		document.getElementById("janelaBotom").style.visibility = "visible";
	} else if (menudir == "fav") {
		arrancaFavs();
        arrancaCover();
		
	} else if (menudir == "top") {
		updateYTop();
	} else if (menudir == "play") {
		updatePlaylist();
	} else if (menudir == "look") {
		arrancaKeyboard();
	} else if (menudir == "beer") {
		initComida ();
	}
	else {
	}
}

$(".left-corner").ready(function(){
    $("img").click(function (targetPage) {
	    $("central").load("funcMusic/main.html");
	    updatesJanelaPoster();
	    menudir = "main";
	});
});


$(document).ready(function(){    
	$("#MUSICA").click(function (targetPage) {
	    $("#central").load("funcMusic/music.html");
	    updatesJanelaPoster();
	    menudir = "music";
	});
});


$(document).ready(function(){
	$("#menuFavMusica").click(function (targetPage) {
	    $("#central").load("funcMusic/favoriteMusic.html");
	    updatesJanelaPoster();
	    menudir = "fav";
	});
});

$(document).ready(function(){
	$("#menuPlayMusica").click(function (targetPage) {
	    $("#central").load("funcMusic/playlist.html");
	    updatesJanelaPoster();
	    menudir = "play";
	});
});

$(document).ready(function(){
	$("#menuTopMusica").click(function (targetPage) {
	    $("#central").load("funcMusic/topMusic.html");
	    updatesJanelaPoster();
	    menudir = "top";
	});
});

$(document).ready(function(){
	$("#menuProcuraMusica").click(function (targetPage) {
	    $("#central").load("funcMusic/searchMusic.html");
	    updatesJanelaPoster();
	    menudir = "look";
	});
});

$(document).ready(function(){
	$("#COMIDA").click(function (targetPage) {
	    $("#central").load("<img>");
	    updatesJanelaPoster();
	    menudir = "comida";
	});
});


$(document).ready(function(){
	$("#COMIDA").click(function (targetPage) {
		var final;
		switch(targetPage) {
	        case 'favFood':
	            final = "funcComida/favoComida.html";
	            break;
	        case 'beer':
	            final = "funcComida/beers.html";
	            break;
	        case 'soda':			
	            final = "funcComida/sodas.html";
	            break;
	        case 'sprt':
	            final = "funcComida/spirituals.html";
	            break;
	        case 'wine':
	            final = "funcComida/wines.html";
	            break;
	        case 'snak':
	            final = "funcComida/snacks.html";
	            break;
	        default:
	            final = "ERRORHANDLE";
	    }
	    $("#central").load(final);
	    updatesJanelaPoster();
	    menudir = targetPage;
	});
});

function janelaCentralPoster(targetPage) {
    
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
    
    $("#central").load(final);
    updatesJanelaPoster();
    
    
    menudir = targetPage;
    
};


function forcebeers() {
    
    $("#central").load("funcComida/beers.html");
    updatesJanelaPoster();
    
    
    menudir = "beer";
    
};


