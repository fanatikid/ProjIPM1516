/*modelo:  rank img-album musica artista dislike/like favoritado contagemLikes contagemDislikes duracao_musica*/
/* int url string string int[-1,0,1] bool int int int[sec]*/
/*pedese ~20exemplares*/
var listaMusicas = [
	[1, "imgs/albuns/simonEgarfunkel.jpg","Bridge Over Troubled Water", "Simon And Garfunkel", 0, false, 135, 14, 295],	
	[3, "imgs/albuns/hotel-california-533cdcce254ac.jpg","Hotel California" ,"The Eagles", 0, false, 135, 14, 390],
	[4, "imgs/albuns/bobby.jpg","No Woman No Cry" ,"Bob Marley", 0, false, 135, 14, 246],
	[5, "imgs/albuns/Lightmyfire67.jpg","Light My Fire" ,"The Doors", 0, false, 135, 14, 172],
	[6, "imgs/albuns/081227964337_b.jpg","Stairway To Heaven" ,"Led Zeppelin", 0, false, 135, 14, 483],
	[7, "imgs/albuns/jonycash.jpg","I Walk The Line" ,"Johnny Cash", 0, false, 135, 14, 165],
	[8, "imgs/albuns/SgtPepper.jpg","A Day In The Life", "Beatles", 0, false, 135, 14, 335],
	[9, "imgs/albuns/Bruce-springsteen-born-to-run-single.jpg","Born To Run" ,"Bruce Springsteen", 0, false, 135, 14, 270],
	[10, "imgs/albuns/110.jpg","Purple Haze" ,"Jimi Hendrix", 0, false, 135, 14, 166],
	[11, "imgs/albuns/BlowingUnauthorized.jpg","Blowin&#39 in The Wind" ,"Bob Dylan", 0, false, 135, 14, 168],
	
	[12, "img/albuns/Linkin_Park_Hunting_Party.jpg", "Keys to the Kingdom" ,"Linkin park", 0, false, 80, 3, 218],
	[13, "img/albuns/Transitofvenustdg_threedaysgrace.jpg", "Give Me a Reason", "three days grace", 0, false, 70, 3, 243],
	[14, "img/albuns/Transitofvenustdg_threedaysgrace.jpg", "Misery Loves My Company", "three days grace" ,0, false, 75, 3, 162],
	[15, "img/albuns/Transitofvenustdg_threedaysgrace.jpg", "Lost in You",  "three days grace" ,0, false, 75, 3, 233],
	[16, "img/albuns/Transitofvenustdg_threedaysgrace.jpg", "World So Cold", "three days grace" ,0, false, 75, 3, 243],
	[17, "img/albuns/Three_Days_Grace_-_One-X.jpg", "pain", "three days grace",0, false, 75, 3, 203],
	[18, "img/albuns/Three_Days_Grace_-_One-X.jpg", "Animal I Have Become", "three days grace",0, false, 75, 3, 231],
	[19, "img/albuns/Three_Days_Grace_-_One-X.jpg", "riot", "three days grace",0, false, 75, 3, 208],
	[20, "img/albuns/Three_Days_Grace_-_One-X.jpg", "never too late", "three days grace",0, false, 75, 3, 209],
	[21, "img/albuns/evanescence.jpg", "Going Under", "Evanescence",0, false, 75, 3, 214],
	[22, "img/albuns/evanescence.jpg", "Bring Me to Life", "Evanescence",0, false, 75, 3, 237],
	[23, "img/albuns/evanescence.jpg", "My Immortal", "Evanescence", 0, false, 75, 3, 264],
	[24, "img/albuns/Hail-to-the-king-capa-avenged-sevenfold.jpg","This Means War", "Avenged Sevenfold",0, false, 75, 3, 369],
	[25, "img/albuns/ThreeDaysGrace_LifeStartsNow.jpg", "Without You", "three days grace",0, false, 75, 3,  214],
	[26, "imgs/albuns/Shakira_-_Oral_Fixation_Vol._2.jpg", "Hips don&#39t lie", "Shakira", 0, true, 100, 3, 218],
	[],
];

var listaFavoritos = [
	[15, "imgs/albuns/Shakira_-_Oral_Fixation_Vol._2.jpg", "Hips don&#39t lie", "Shakira", 0, true, 100, 3, 218],
	[1, "imgs/albuns/simonEgarfunkel.jpg","Bridge Over Troubled Water", "Simon And Garfunkel", 0, false, 135, 14, 295],
	];

var listaPlaylist = [
	[15, "imgs/albuns/Shakira_-_Oral_Fixation_Vol._2.jpg", "Hips don&#39t lie", "Shakira", 0, true, 100, 3, 218],
	[1, "imgs/albuns/simonEgarfunkel.jpg","Bridge Over Troubled Water", "Simon And Garfunkel", 0, false, 135, 14, 295],
	];

var currentMusic = [15, "imgs/albuns/Shakira_-_Oral_Fixation_Vol._2.jpg", "Hips don&#39t lie", "Shakira", 0, true, 100, 3, 218];

var currentTimeAt = 0;


//topmusic
//year
var topyear = [
	["Bridge Over Troubled Water" ,"Simon And Garfunkel"],
	["Hotel California" ,"The Eagles"],
	["No Woman No Cry" ,"Bob Marley"],
	["Light My Fire" ,"The Doors"],
	["Stairway To Heaven" ,"Led Zeppelin"],
	["I Walk The Line" ,"Johnny Cash"],
	["A Day In The Life", "Beatles"],
	["Born To Run" ,"Bruce Springsteen"],
	["Purple Haze" ,"Jimi Hendrix"],
	["Blowin&#39 in The Wind" ,"Bob Dylan"],
];

//topmusic
//month
var topmonth = [
	[],
];

var myclock = setInterval(timeAtPlay, 1000);;

function startNextSong() {
	if (listaPlaylist.length != 0) {
		var currentMusic = listaPlaylist.pop();		
	}
}

function timeAtPlay () {
	++currentTimeAt;
	
	var minutes = Math.floor(currentTimeAt / 60);
	var seconds = (currentTimeAt - minutes*60);
	if (seconds < 10)
		seconds = "0" + seconds;
	var lastminutes = Math.floor(currentMusic[8] / 60);
	
	var fillpercent = Math.floor(currentTimeAt /currentMusic[8] * 100)+"%";
	if (menudir == "play") {
		document.getElementById("tempoOverlay").innerHTML = minutes + ":" + seconds + " / " + lastminutes + ":" + (currentMusic[8] - lastminutes*60);
		document.getElementById("barraPlayMusic").style.width =fillpercent;
	}
	if (fillpercent >= 100) {
		startNextSong();
		currentTimeAt = 0;
	}
} 

function updatePlaylist() {
	
	document.getElementById("nomePrimeira").innerHTML = listaPlaylist[0][2] + " - " + listaPlaylist[0][3];
	
	for (i = 1; (i < 10)||(i < listaPlaylist.length); i++){
	//TODO	
	}
}

function updateToplist() {
	
	//TODO
	//do year month first
	
}

function clearTimeAtPlay() {
    clearInterval(myclock);
}

function setProperCurrentMusic(musica) {
	currentMusic = musica;
	
}

function buildFavPage() {
	var primeira= "<ul class='flip-items' style='max-height: 420px'>";
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


/*
 * 
(00:50:11) Fernando Costa Oliveira: para dar +- ideia do q falta:
Xmusica acaba -> inicia a proxima da playlist
sistema reconhece q user fez like/dislike/fav e altera os icones (tou a pensar um glowy effect)
janela playlist, ordem é ditada pelo racio de likes/dislikes, havera um exemplo em q pode-se fazer like numa musica e ela sobe uma posicao na playlist (precisa de mais regras, mas esta seria a base)
+janela top, ordem é ditada pela quantidade de fav's dessa musica, havera um exemplo em q fazer fav numa musica, faz ela subir no top (considera-se apenas o intervalo de tempo menor, e q o user n consgue influenciar a tendencia anual)
!!sistema precisa de no minimo 2 favoritos, janela favorisot, so aparecem as musicas q o user favoritou (vou tirar a barra do album, e é +- aqi q arrenpendome d nao usar json nisto)
janela procura, lololol é possivel, mas vou deixar para o fim if its okay
os popups funcionam, vai ser beutified e scattered por todos os labels de musica, mas vao precisar de um tweak, not sure yet how, tem q receber argumentos doutra forma
sei q nao é pedido para a prox entrega, mas vai haver uma beutifying process, alterar umas cores, acrescentar uns fundos, etc etc
 * 
 * 


 * 
 * 
 */