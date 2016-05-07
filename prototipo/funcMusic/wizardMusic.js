
/*modelo:  rank img-album musica artista dislike/like favoritado contagemLikes contagemDislikes duracao_musica*/
/* int url string string int[-1,0,1] bool int int int[sec]*/
/*pedese ~20exemplares*/
var listaMusicas = [
	[1, "imgs/albuns/simonEgarfunkel.jpg", "Bridge Over Troubled Water", "Simon And Garfunkel", 0, false, 135, 14, 295]
	, [2, "imgs/albuns/Shakira_-_Oral_Fixation_Vol._2.jpg", "Hips don&#39t lie", "Shakira", 0, true, 100, 3, 218]
	, [3, "imgs/albuns/hotel-california-533cdcce254ac.jpg", "Hotel California", "The Eagles", 0, false, 135, 14, 390]
	, [4, "imgs/albuns/bobby.jpg", "No Woman No Cry", "Bob Marley", 0, false, 135, 14, 246]
	, [5, "imgs/albuns/Lightmyfire67.jpg", "Light My Fire", "The Doors", 0, false, 135, 14, 172]
	, [6, "imgs/albuns/081227964337_b.jpg", "Stairway To Heaven", "Led Zeppelin", 0, false, 135, 14, 483]
	, [7, "imgs/albuns/jonycash.jpg", "I Walk The Line", "Johnny Cash", 0, false, 135, 14, 165]
	, [8, "imgs/albuns/SgtPepper.jpg", "A Day In The Life", "Beatles", 0, false, 135, 14, 335]
	, [9, "imgs/albuns/Bruce-springsteen-born-to-run-single.jpg", "Born To Run", "Bruce Springsteen", 0, false, 135, 14, 270]
	, [10, "imgs/albuns/110.jpg", "Purple Haze", "Jimi Hendrix", 0, false, 135, 14, 166]
	, [11, "imgs/albuns/BlowingUnauthorized.jpg", "Blowin&#39 in The Wind", "Bob Dylan", 0, false, 135, 14, 168]
    , [12, "imgs/albuns/Linkin_Park_Hunting_Party.jpg", "Keys to the Kingdom", "Linkin park", 0, false, 80, 3, 218]
	, [13, "imgs/albuns/threedaysgrace.jpg", "Give Me a Reason", "three days grace", 0, false, 70, 3, 243]
	, [14, "imgs/albuns/threedaysgrace.jpg", "Misery Loves My Company", "three days grace", 0, false, 75, 3, 162]
	, [15, "imgs/albuns/threedaysgrace.jpg", "Lost in You", "three days grace", 0, false, 75, 3, 233]
	, [16, "imgs/albuns/threedaysgrace.jpg", "World So Cold", "three days grace", 0, false, 75, 3, 243]
	, [17, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "pain", "three days grace", 0, false, 75, 3, 203]
	, [18, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "Animal I Have Become", "three days grace", 0, false, 75, 3, 231]
	, [19, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "riot", "three days grace", 0, false, 75, 3, 208]
	, [20, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "never too late", "three days grace", 0, false, 75, 3, 209]
	, [21, "imgs/albuns/evanescence.jpg", "Going Under", "Evanescence", 0, false, 75, 3, 214]
	, [22, "imgs/albuns/evanescence.jpg", "Bring Me to Life", "Evanescence", 0, false, 75, 3, 237]
	, [23, "imgs/albuns/evanescence.jpg", "My Immortal", "Evanescence", 0, false, 75, 3, 264]
	, [24, "imgs/albuns/Hail-to-the-king-capa-avenged-sevenfold.jpg", "This Means War", "Avenged Sevenfold", 0, false, 75, 3, 369]
	, [25, "imgs/albuns/ThreeDaysGrace_LifeStartsNow.jpg", "Without You", "three days grace", 0, false, 75, 3, 214]

, ];

var listaFavoritos = [
	[15, "imgs/albuns/Shakira_-_Oral_Fixation_Vol._2.jpg", "Hips don&#39t lie", "Shakira", 0, true, 100, 3, 218]
	, [24, "imgs/albuns/Hail-to-the-king-capa-avenged-sevenfold.jpg", "This Means War", "Avenged Sevenfold", 0, false, 75, 3, 369]
	, ];

var listaPlaylist = [
	[1, "imgs/albuns/simonEgarfunkel.jpg", "Bridge Over Troubled Water", "Simon And Garfunkel", 0, false, 135, 14, 295]
	, [2, "imgs/albuns/Shakira_-_Oral_Fixation_Vol._2.jpg", "Hips don&#39t lie", "Shakira", 0, true, 100, 3, 218]
	, [3, "imgs/albuns/hotel-california-533cdcce254ac.jpg", "Hotel California", "The Eagles", 0, false, 135, 14, 390]
	, [4, "imgs/albuns/bobby.jpg", "No Woman No Cry", "Bob Marley", 0, false, 135, 14, 246]
	, [5, "imgs/albuns/Lightmyfire67.jpg", "Light My Fire", "The Doors", 0, false, 135, 14, 172]
	, [6, "imgs/albuns/081227964337_b.jpg", "Stairway To Heaven", "Led Zeppelin", 0, false, 135, 14, 483]
	, [7, "imgs/albuns/jonycash.jpg", "I Walk The Line", "Johnny Cash", 0, false, 135, 14, 165]
	, [8, "imgs/albuns/SgtPepper.jpg", "A Day In The Life", "Beatles", 0, false, 135, 14, 335]
	, [9, "imgs/albuns/Bruce-springsteen-born-to-run-single.jpg", "Born To Run", "Bruce Springsteen", 0, false, 135, 14, 270]
	, [10, "imgs/albuns/110.jpg", "Purple Haze", "Jimi Hendrix", 0, false, 135, 14, 166]
	, [11, "imgs/albuns/BlowingUnauthorized.jpg", "Blowin&#39 in The Wind", "Bob Dylan", 0, false, 135, 14, 168]
    , [12, "imgs/albuns/Linkin_Park_Hunting_Party.jpg", "Keys to the Kingdom", "Linkin park", 0, false, 80, 3, 218]
	, [13, "imgs/albuns/threedaysgrace.jpg", "Give Me a Reason", "three days grace", 0, false, 70, 3, 243]
	, [14, "imgs/albuns/threedaysgrace.jpg", "Misery Loves My Company", "three days grace", 0, false, 75, 3, 162]
	, [15, "imgs/albuns/threedaysgrace.jpg", "Lost in You", "three days grace", 0, false, 75, 3, 233]
	, [16, "imgs/albuns/threedaysgrace.jpg", "World So Cold", "three days grace", 0, false, 75, 3, 243]
	 ];

var currentMusic = [17, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "pain", "three days grace", 0, false, 75, 3, 203];

var currentTimeAt = 0;


//topmusic
//year
var topyear = [
    [1, "imgs/albuns/simonEgarfunkel.jpg", "Bridge Over Troubled Water", "Simon And Garfunkel", 0, false, 135, 14, 295]
	, [3, "imgs/albuns/hotel-california-533cdcce254ac.jpg", "Hotel California", "The Eagles", 0, false, 135, 14, 390]
	, [4, "imgs/albuns/bobby.jpg", "No Woman No Cry", "Bob Marley", 0, false, 135, 14, 246]
	, [5, "imgs/albuns/Lightmyfire67.jpg", "Light My Fire", "The Doors", 0, false, 135, 14, 172]
	, [6, "imgs/albuns/081227964337_b.jpg", "Stairway To Heaven", "Led Zeppelin", 0, false, 135, 14, 483]
	, [7, "imgs/albuns/jonycash.jpg", "I Walk The Line", "Johnny Cash", 0, false, 135, 14, 165]
	, [8, "imgs/albuns/SgtPepper.jpg", "A Day In The Life", "Beatles", 0, false, 135, 14, 335]
	, [9, "imgs/albuns/Bruce-springsteen-born-to-run-single.jpg", "Born To Run", "Bruce Springsteen", 0, false, 135, 14, 270]
	, [10, "imgs/albuns/110.jpg", "Purple Haze", "Jimi Hendrix", 0, false, 135, 14, 166]
	, [11, "imgs/albuns/BlowingUnauthorized.jpg", "Blowin&#39 in The Wind", "Bob Dylan", 0, false, 135, 14, 168]
];

//topmusic
//month
var topmonth = [
    [10, "imgs/albuns/110.jpg", "Purple Haze", "Jimi Hendrix", 0, false, 135, 14, 166]
	, [11, "imgs/albuns/BlowingUnauthorized.jpg", "Blowin&#39 in The Wind", "Bob Dylan", 0, false, 135, 14, 168]
    , [12, "imgs/albuns/Linkin_Park_Hunting_Party.jpg", "Keys to the Kingdom", "Linkin park", 0, false, 80, 3, 218]
	, [13, "imgs/albuns/threedaysgrace.jpg", "Give Me a Reason", "three days grace", 0, false, 70, 3, 243]
	, [14, "imgs/albuns/threedaysgrace.jpg", "Misery Loves My Company", "three days grace", 0, false, 75, 3, 162]
	, [15, "imgs/albuns/threedaysgrace.jpg", "Lost in You", "three days grace", 0, false, 75, 3, 233]
	, [16, "imgs/albuns/threedaysgrace.jpg", "World So Cold", "three days grace", 0, false, 75, 3, 243]
	, [17, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "pain", "three days grace", 0, false, 75, 3, 203]
	, [18, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "Animal I Have Become", "three days grace", 0, false, 75, 3, 231]
	, [19, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "riot", "three days grace", 0, false, 75, 3, 208]
];

var topweek = [
    [16, "imgs/albuns/threedaysgrace.jpg", "World So Cold", "three days grace", 0, false, 75, 3, 243]
	, [17, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "pain", "three days grace", 0, false, 75, 3, 203]
	, [18, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "Animal I Have Become", "three days grace", 0, false, 75, 3, 231]
	, [19, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "riot", "three days grace", 0, false, 75, 3, 208]
	, [20, "imgs/albuns/Three_Days_Grace_-_One-X.jpg", "never too late", "three days grace", 0, false, 75, 3, 209]
	, [21, "imgs/albuns/evanescence.jpg", "Going Under", "Evanescence", 0, false, 75, 3, 214]
	, [22, "imgs/albuns/evanescence.jpg", "Bring Me to Life", "Evanescence", 0, false, 75, 3, 237]
	, [23, "imgs/albuns/evanescence.jpg", "My Immortal", "Evanescence", 0, false, 75, 3, 264]
	, [24, "imgs/albuns/Hail-to-the-king-capa-avenged-sevenfold.jpg", "This Means War", "Avenged Sevenfold", 0, false, 75, 3, 369]
	, [25, "imgs/albuns/ThreeDaysGrace_LifeStartsNow.jpg", "Without You", "three days grace", 0, false, 75, 3, 214]
    
    ];

var myclock = setInterval(timeAtPlay, 1000);
var indexCurMusic = 0;

function startNextSong() {
    if (listaPlaylist.length > ++indexCurMusic) {
    	
        currentMusic = listaMusicas[listaPlaylist.length - indexCurMusic];
        listaPlaylist.splice(0,1);
    }
    updatePlaylist();
}

function timeAtPlay() {
    ++currentTimeAt;

    var minutes = Math.floor(currentTimeAt / 60);
    var seconds = (currentTimeAt - minutes * 60);
    if (seconds < 10)
        seconds = "0" + seconds;
    var lastminutes = Math.floor(currentMusic[8] / 60);
	var lastseconds = (currentMusic[8] - lastminutes * 60);
    var fillpercent = Math.floor(currentTimeAt / currentMusic[8] * 100);
    if (menudir == "play") {
        document.getElementById("tempoOverlay").innerHTML = minutes + ":" + seconds + " / " + lastminutes + ":" + lastseconds; 
        document.getElementById("barraPlayMusic").style.width = fillpercent + "%";
    }
    if (fillpercent >= 100) {
        startNextSong();
        currentTimeAt = 0;
    }
}

function favoritaMusica (targetmusic) {
    var foo = listaMusicas[targetmusic-1];
    if (foo[5]) {
        foo[5] = false;    
        listaFavoritos.splice(targetmusic-1);
    } else {
        foo[5] = true;
        listaFavoritos.push(foo); 
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
    var foo = listaMusicas[targetmusic];
    if (foo[4] != 1) {
        foo[4] = 1;    
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
    var foo = listaMusicas[targetmusic];
    if (foo[4] != -1) {
        foo[4] = -1;    
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
    
    var frontText = document.getElementById("nomePrimeira");
    var newMusic = currentMusic;
    
    if (frontText == null)
    	return;
    
    
    frontText.innerHTML = newMusic[2]+" - "+newMusic[3];
    frontText.setAttribute("onclick", "janelaInfoMusica("+newMusic[0]+","+newMusic[5]+","+newMusic[4]+")");
    
    
    

    for (i = listaPlaylist.length - 2; ((i >= 0) && (i >= listaPlaylist.length - 9)); i--) {
        foo = listaPlaylist[i];
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

function updateYTop() {
    var foo; 
    var texto = "";
    document.getElementById("topY").className = "current";
    document.getElementById("topM").className = "";
    document.getElementById("topS").className = "";
    for (i = 0; i < topyear.length; i++) {
        foo = topyear[i];
        texto += "<li><a>";
        texto += foo[2] + " - " + foo[3];
        texto += "</a><div id='botons'><img class='secondary-2-2 ";
        if (listaMusicas[i+1][5])
            texto += "favoritado";
        texto += "' src='icons/Places-favorites-icon.png' onclick='favoritaMusica("+foo[0]+")'  alt='favorita'><img id='dislike' class='secondary-2-2 ";
        if (listaMusicas[i+1][4] == -1)
            texto += "disliked";
        texto += "' src='icons/thin-0664_dislike_thumb_down_vote-512.png' onclick='dislikaMusica("+foo[0]+")'   alt='dislike'><img id='like' class='secondary-2-2 ";
        if (listaMusicas[i+1][4] == 1)
            texto += "liked";
        texto += "' src='icons/plainicon.com-48843-512px-e1a.png' onclick='likaMusica("+foo[0]+")'  alt='like'></div></li>";
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
    for (i = 0; i < listaFavoritos.length; i++) {
        foo = listaFavoritos[i];
        tit = foo[2];
        alb = foo[1];
        texto += (text1 + tit + text2 + alb + text3);
    }
    return primeira + texto + ultima;
}
