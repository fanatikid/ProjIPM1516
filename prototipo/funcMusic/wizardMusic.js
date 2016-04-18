/*modelo:  rank img-album musica artista dislike/like favoritado contagemLikes contagemDislikes duracao_musica*/
/* int url string string int[-1,0,1] bool int int int[sec]*/
/*pedese ~20exemplares*/
var funcMusic = {
	musiclist : [
				{	rank : 1,
					urlImgAlbum :"imgs/albuns/simonEgarfunkel.jpg",
					nomeMusica :"Bridge Over Troubled Water",
					nomeArtista :"Simon And Garfunkel",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :295
				},
				{	rank : 2,
					urlImgAlbum :"imgs/albuns/Shakira_-_Oral_Fixation_Vol._2.jpg",
					nomeMusica :"Hips don&#39t lie",
					nomeArtista :"Shakira",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :218
				},
				{	rank : 3,
					urlImgAlbum :"imgs/albuns/hotel-california-533cdcce254ac.jpg",
					nomeMusica :"Hotel California",
					nomeArtista :"The Eagles",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :390
				},
				{	rank : 4,
					urlImgAlbum :"imgs/albuns/bobby.jpg",
					nomeMusica :"No Woman No Cry", 
					nomeArtista :"Bob Marley",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :246
				},
				{	rank : 5,
					urlImgAlbum :"imgs/albuns/Lightmyfire67.jpg",
					nomeMusica :"Light My Fire",
					nomeArtista :"The Doors",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :172
				},
				{	rank : 6,
					urlImgAlbum :"imgs/albuns/081227964337_b.jpg",
					nomeMusica :"Stairway To Heaven",
					nomeArtista :"Led Zeppelin",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :483
				},
				{	rank : 7,
					urlImgAlbum :"imgs/albuns/jonycash.jpg", 
					nomeMusica :"I Walk The Line",
					nomeArtista :"Johnny Cash",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :165
				},
				{	rank : 8,
					urlImgAlbum :"imgs/albuns/SgtPepper.jpg", 
					nomeMusica :"A Day In The Life",
					nomeArtista :"Beatles",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :335
				},
				{	rank : 9,
					urlImgAlbum :"imgs/albuns/Bruce-springsteen-born-to-run-single.jpg",
					nomeMusica :"Born To Run",
					nomeArtista :"Bruce Springsteen",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :270
				},
				{	rank : 10,
					urlImgAlbum :"imgs/albuns/110.jpg",
					nomeMusica :"Purple Haze",
					nomeArtista :"Jimi Hendrix",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :166
				},
				{	rank : 11,
					urlImgAlbum :"imgs/albuns/BlowingUnauthorized.jpg",
					nomeMusica :"Blowin&#39 in The Wind",
					nomeArtista :"Bob Dylan",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :168
				},
				{	rank : 12,
					urlImgAlbum :"imgs/albuns/Linkin_Park_Hunting_Party.jpg",
					nomeMusica :"Keys to the Kingdom",
					nomeArtista :"Linkin park",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :218
				},
				{	rank : 13,
					urlImgAlbum :"imgs/albuns/threedaysgrace.jpg",
					nomeMusica :"Give Me a Reason",
					nomeArtista :"three days grace",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :243
				},
				{	rank : 14,
					urlImgAlbum :"imgs/albuns/threedaysgrace.jpg", 
					nomeMusica :"Misery Loves My Company",
					nomeArtista :"three days grace",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :162
				},
				{	rank : 15,
					urlImgAlbum :"imgs/albuns/threedaysgrace.jpg",
					nomeMusica :"Lost in You",
					nomeArtista :"three days grace",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :233
				},
				{	rank : 16,
					urlImgAlbum :"imgs/albuns/threedaysgrace.jpg",
					nomeMusica :"World So Cold",
					nomeArtista :"three days grace",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :243
				},
				{	rank : 17,
					urlImgAlbum :"imgs/albuns/Three_Days_Grace_-_One-X.jpg",
					nomeMusica :"pain",
					nomeArtista :"three days grace",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :203
				},
				{	rank : 18,
					urlImgAlbum :"imgs/albuns/Three_Days_Grace_-_One-X.jpg",
					nomeMusica :"Animal I Have Become",
					nomeArtista :"three days grace",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :231
				},
				{	rank : 19,
					urlImgAlbum :"imgs/albuns/Three_Days_Grace_-_One-X.jpg",
					nomeMusica :"riot",
					nomeArtista :"three days grace",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :208
				},
				{	rank : 20, 
					urlImgAlbum :"imgs/albuns/Three_Days_Grace_-_One-X.jpg",
					nomeMusica :"never too late",
					nomeArtista :"three days grace",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :209
				},
				{	rank : 21,
					urlImgAlbum :"imgs/albuns/evanescence.jpg",
					nomeMusica :"Going Under",
					nomeArtista :"Evanescence",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :214
				},
				{	rank : 22,
					urlImgAlbum :"imgs/albuns/evanescence.jpg",
					nomeMusica :"Bring Me to Life",
					nomeArtista :"Evanescence",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :237
				},
				{	rank : 23,
					urlImgAlbum :"imgs/albuns/evanescence.jpg",
					nomeMusica :"My Immortal",
					nomeArtista :"Evanescence",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :264
				},
				{	rank : 24,
					urlImgAlbum :"imgs/albuns/Hail-to-the-king-capa-avenged-sevenfold.jpg",
					nomeMusica :"This Means War",
					nomeArtista :"Avenged Sevenfold",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :369
				},
				{	rank : 25,
					urlImgAlbum :"imgs/albuns/ThreeDaysGrace_LifeStartsNow.jpg",
					nomeMusica :"Without You",
					nomeArtista :"three days grace",
					likeMusic : 0,
					favMusic : false,
					timeSeconds :214
				},
				],
	
	favlist :  null,
	playlist : null,
	topMlist : null, 
	topWlist : null,
	currentMusic : null,
	currentTimeAt : 0,
	

	
};

function initLists() {
	
	var tamanho = funcMusic.musiclist.length;
	funcMusic.favlist = new Array(tamanho);
	
	funcMusic.playlist = new Array(10);
	funcMusic.topMlist = new Array(10);
	funcMusic.topWlist = new Array(10);
	
	
	var foo = 3;
	for (i = 0; i < 10; i++) {
		funcMusic.topMlist[i] = funcMusic.musiclist[i];
		funcMusic.playlist[i] = funcMusic.musiclist[i+foo];
		funcMusic.topWlist[i] = funcMusic.musiclist[i+foo+3];
	}
	for (i = 0; i < funcMusic.musiclist.length; i++) {
		funcMusic.favlist[i] = 0;
	}
	
	
	
	/*
	var foo = Math.random()*10;
	
	for (i = 0; i < 10; i++) {
		funcMusic.topMlist[i] = funcMusic.musiclist[i];
		funcMusic.playlist[i] = funcMusic.musiclist[i+foo];
		funcMusic.topWlist[i] = funcMusic.musiclist[i+foo+3];
	}
	for (i = 0; i < funcMusic.musiclist.length; i++) {
		funcMusic.favlist[i] = 0;
	}
	*/
	
	funcMusic.currentMusic = funcMusic.playlist.pop();
	
}

initLists();
var myclock = setInterval(timeAtPlay, 1000);

function startNextSong() {
    if (funcMusic.playlist.length != 0) {
        funcMusic.currentMusic = funcMusic.playlist.pop();
    }
    updatePlaylist();
}

function timeAtPlay() {
    ++funcMusic.currentTimeAt;

    var minutes = Math.floor(funcMusic.currentTimeAt / 60);
    var seconds = (funcMusic.currentTimeAt - minutes * 60);
    if (seconds < 10)
        seconds = "0" + seconds;
    var lastminutes = Math.floor(funcMusic.currentMusic.timeSeconds / 60);

    var fillpercent = Math.floor(funcMusic.currentTimeAt / funcMusic.currentMusic.timeSeconds * 100) + "%";
    if (menudir == "play") {
        document.getElementById("tempoOverlay").innerHTML = minutes + ":" + seconds + " / " + lastminutes + ":" + (funcMusic.currentMusic.timeSeconds - lastminutes * 60);
        document.getElementById("barraPlayMusic").style.width = fillpercent;
    }
    if (fillpercent >= 100) {
        startNextSong();
        funcMusic.currentTimeAt = 0;
    }
}

function favoritaMusica (targetmusic) {
    var foo = funcMusic.musiclist[targetmusic-1];
    if (foo.favMusic) {
        foo.favMusic = false;    
        funcMusic.favlist.splice(targetmusic-1);
    } else {
        foo.favMusic = true;
        funcMusic.favlist.push(foo); 
    }
    
    if (menudir == "play")
        updatePlaylist();
    if (menudir == "top") {
        if (document.getElementById("topS").className == "current")
            updateToplist();
        if (document.getElementById("topY").className == "current")
            updateYTop();
        if (document.getElementById("topM").className == "current")
            updateMTop();
    }
     if (menudir == "music")
        janelaCentralPoster('music');
    
    
    var curpopup = document.getElementById("PoPupMusica");
    if (curpopup != null) {
        if (foo[5])
            document.getElementById("favo").className += " favoritado";
        else document.getElementById("favo").className = "primary-2";
    }
}


function likaMusica (targetmusic) {
    var foo = listaMusicas[targetmusic-1];
    if (foo[4] != 1) {
        foo[4] = 1;    
    } 
    
    if (menudir == "play")
        updatePlaylist();
    if (menudir == "top") {
        if (document.getElementById("topS").className == "current")
            updateToplist();
        if (document.getElementById("topM").className == "current")
            updateMTop();
    }
     if (menudir == "music")
        updatePlaylist();
    
    var curpopup = document.getElementById("PoPupMusica");
    if (curpopup != null) {
        if (foo[4] == 1) {
            document.getElementById("gosto").className += " liked";
            document.getElementById("ngosto").className = "primary-2";
        }
        else document.getElementById("gosto").className = "primary-2";
    }
    
}


function dislikaMusica (targetmusic) {
    var foo = listaMusicas[targetmusic-1];
    if (foo[4] != -1) {
        foo[4] = -1;    
    } 
    
    if (menudir == "play")
        updatePlaylist();
    if (menudir == "top") {
        if (document.getElementById("topS").className == "current")
            updateToplist();
       
        if (document.getElementById("topM").className == "current")
            updateMTop();
    }
    var curpopup = document.getElementById("PoPupMusica");
    if (curpopup != null) {
        if (foo[4] == -1) {
            document.getElementById("ngosto").className += " disliked";
            document.getElementById("gosto").className = "primary-2";
        }
        else document.getElementById("ngosto").className = "primary-2";
    }
}


function updatePlaylist() {
    
    var texto = "";
    var foo;
    //TODO alterar o janelainfopopup do primeiro 
    document.getElementById("nomePrimeira").innerHTML = funcMusic.playlist[funcMusic.playlist.length - 1][2] + " - " + funcMusic.playlist[funcMusic.playlist.length - 1][3];
    document.getElementById("nomePrimeira").setAttribute("onclick", "janelaInfoMusica("+funcMusic.playlist[funcMusic.playlist.length - 1][0]+","+funcMusic.playlist[funcMusic.playlist.length - 1][5]+","+funcMusic.playlist[funcMusic.playlist.length - 1][4]+")");

    for (i = funcMusic.playlist.length - 2; ((i >= 0) && (i >= funcMusic.playlist.length - 9)); i--) {
        foo = funcMusic.playlist[i];
        texto += "<li><a onclick='janelaInfoMusica(" + listaMusicas[i+1][0] + "," + listaMusicas[i+1][5] + "," + listaMusicas[i+1][4] + ")'>";
        texto += foo[2] + " - " + foo[3];
        texto += "</a><div id='botons'><img class='secondary-2-2 ";
        if (listaMusicas[i+1][5])
            texto += "favoritado";
        texto += "' src='icons/Places-favorites-icon.png' onclick='favoritaMusica("+foo[0]+")' alt='favorita'><img id='dislike' class='secondary-2-2 ";
        if (listaMusicas[i+1][4] == -1)
            texto += "disliked";
        texto += "' src='icons/thin-0664_dislike_thumb_down_vote-512.png' onclick='dislikaMusica("+foo[0]+")'  alt='dislike'><img id='like' class='secondary-2-2 ";
        if (listaMusicas[i+1][4] == 1)
            texto += "liked";
        texto += "' src='icons/plainicon.com-48843-512px-e1a.png' onclick='likaMusica("+foo[0]+")'  alt='like'></div></li>";
    }
    document.getElementById("tabelaMusicas").innerHTML = texto;
}

function updateToplist() {
    var foo; 
    var texto = "";
    document.getElementById("topS").className = "current";
    document.getElementById("topY").className = "";
    document.getElementById("topM").className = "";
    for (i = 0; i < topweek.length; i++) {
        foo = topweek[i];
        texto += "<li><a>";
        texto += foo[2] + " - " + foo[3];
        texto += "</a><div id='botons'><img class='secondary-2-2 ";
        if (listaMusicas[topweek[i][0] - 1])
            texto += "favoritado";
        texto += "' src='icons/Places-favorites-icon.png' onclick='favoritaMusica("+foo[0]+")'  alt='favorita'><img id='dislike' class='secondary-2-2 ";
        if (listaMusicas[topweek[i][4] - 1] == -1)
            texto += "disliked";
        texto += "' src='icons/thin-0664_dislike_thumb_down_vote-512.png' onclick='dislikaMusica("+foo[0]+")'   alt='dislike'><img id='like' class='secondary-2-2 ";
        if (listaMusicas[topweek[i][4] - 1] == 1)
            texto += "liked";
        texto += "' src='icons/plainicon.com-48843-512px-e1a.png'  onclick='likaMusica("+foo[0]+")' alt='like'></div></li>";
    }
    document.getElementById("tabelaMusicas").innerHTML = texto;


}

function updateMTop () {
    var foo; 
    var texto = "";
    document.getElementById("topM").className = "current";
    document.getElementById("topY").className = "";
    document.getElementById("topS").className = "";
    for (i = 0; i < topmonth.length; i++) {
        foo = topmonth[i];
        texto += "<li><a>";
        texto += foo[2] + " - " + foo[3];
        texto += "</a><div id='botons'><img class='secondary-2-2 ";
        if (listaMusicas[i+1][5])
            texto += "favoritado";
        texto += "' src='icons/Places-favorites-icon.png' onclick='favoritaMusica("+foo[0]+")'  alt='favorita'><img id='dislike' class='secondary-2-2 ";
        if (foo[4] == -1)
            texto += "disliked";
        texto += "' src='icons/thin-0664_dislike_thumb_down_vote-512.png' onclick='dislikaMusica("+foo[0]+")'   alt='dislike'><img id='like' class='secondary-2-2 ";
        if (foo[4] == 1)
            texto += "liked";
        texto += "' src='icons/plainicon.com-48843-512px-e1a.png' onclick='likaMusica("+foo[0]+")'  alt='like'></div></li>";
    }
    document.getElementById("tabelaMusicas").innerHTML = texto;
        
}

function clearTimeAtPlay() {
    clearInterval(myclock);
}

function setProperCurrentMusic(musica) {
    currentMusic = musica;

}

function buildFavPage() {
    var primeira = "<ul class='flip-items' style='max-height: 420px'>";
    var text1 = "<li data-flip-title='";
    var text2 = "'><img src='";
    var text3 = "'></li>";
    var ultima = "</ul>";
    var texto = "";
    var foo;
    var tit;
    var alb;
    for (i = 0; i < funcMusic.favlist.length; i++) {
        foo = funcMusic.favlist[i];
        tit = foo[2];
        alb = foo[1];
        texto += (text1 + tit + text2 + alb + text3);
    }
    return primeira + texto + ultima;
}
