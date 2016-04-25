/* exemplo entrada
{   imgUrl :"imgs/comida/",
    name :"nome",
    price : 1.50,
    fav : false,
    qnt : 0,

},
*/
var funcComida = {
	shopCartTotal : 0,
    shopCart : [
                ],
	beerEntries : [
                    {	imgUrl :"imgs/comida/sagres.jpg",
                        name :"Sagres média",
                        price : 1.50,
                        fav : false,
                        qnt : 0,
                    },
                    {	imgUrl :"imgs/comida/superbock.jpg",
                        name :"Superbock mini",
                        price : 2.50,
                        fav : false,
                        qnt : 0,
                    },
                    {   imgUrl :"imgs/comida/Heineken.png",
                        name :"Heineken",
                        price : 2.00,
                        fav : false,
                        qnt : 0,
            
        			},
                    {   imgUrl :"imgs/comida/jagermeister.jpg",
                        name :"Jägermeister",
                        price : 2.00,
                        fav : false,
                        qnt : 0,
            
        			},
                ],
    sprtEntries : [
                    {   imgUrl :"imgs/comida/gin.jpg",
                        name :"Gin 20cl",
                        price : 2.00,
                        fav : false,
                        qnt : 0,
            
        			},
                    {   imgUrl :"imgs/comida/vodka.png",
                        name :"Vodka",
                        price : 1.50,
                        fav : false,
                        qnt : 0,
            
        			},
        
   				],
	 wineEntries : [
                    {   imgUrl :"imgs/comida/vinhodamadeira.jpg",
                        name :"Vinho da madeira",
                        price : 1.80,
                        fav : false,
                        qnt : 0,
            
        			},
                    {   imgUrl :"imgs/comida/vinhodepias.jpg",
                        name :"Vinho pias",
                        price : 1.90,
                        fav : false,
                        qnt : 0,
            
        			},
                    {   imgUrl :"imgs/comida/vinhodoporto.jpg",
                        name :"Vinho do porto",
                        price : 1.50,
                        fav : false,
                        qnt : 0,
            
        			},
 				],
	 favFoodEntries : [
 				],
	 snakEntries : [{   imgUrl :"imgs/comida/burger.png",
                        name :"Hamburguer",
                        price : 1.50,
                        fav : false,
                        qnt : 0,
            
        			},
                    {   imgUrl :"imgs/comida/pizza.jpg",
                        name :"Pizza",
                        price : 1.50,
                        fav : false,
                        qnt : 0,
            
        			},
                    {   imgUrl :"imgs/comida/salad.png",
                        name :"Salada",
                        price : 0.50,
                        fav : false,
                        qnt : 0,
            
        			},
 				],
	 sodaEntries : [
                    {   imgUrl :"imgs/comida/coca-cola.png",
                        name :"Coca-cola",
                        price : 1.00,
                        fav : false,
                        qnt : 0,
            
        			},
                    {   imgUrl :"imgs/comida/fanta.png",
                        name :"Sagres média",
                        price : 0.80,
                        fav : false,
                        qnt : 0,
            
        			},
                    {   imgUrl :"imgs/comida/pepsi.jpeg",
                        name :"Sagres média",
                        price : 0.90,
                        fav : false,
                        qnt : 0,
            
        			},
 				],
	 
				
    
	
};


/*
function initComida () {
    
	$("[id$=btnFav]").click(function () {
        event.target.css(" background-color: coral; box-shadow: 0px 0px 10px #EFE26F;");
		event.target.toggleClass("favoritado");
	});
	$("#btnAdd").click(function () {
		$("#btnAdd").css("background-color: chartreuse; box-shadow: 0px 0px 10px #C7E9C0;");
		$("#btnAdd").toggleClass("liked");
		
	});
    $("#btnRem").click(function () {
		$("#btnRem").css("background-color: crimson; box-shadow: 0px 0px 10px #E9C6C0;");
		$("#btnRem").toggleClass("disliked");
    });
    $("#btnRemove").click(function () {
		$("#btnRemove").css("background-color: crimson; box-shadow: 0px 0px 10px #E9C6C0;");
		$("#btnRemove").toggleClass("disliked");
        if (confirm("Tem a certeza que quer cancelar o pedido?") == true)
            console.log("accpet");
        else console.log("reject");
    });
        
}
*/

//https://www.iconfinder.com/icons/11150/256x256_shopcart_icon

function buildBeerMenu() {
    var t1 = "<div class='comidaEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><br /><p class='comidaPreco'>";
    var t3 = "€</p><br /><p id='comidaNome'>";
    var t4 = "</p><img id='btnAdd' src='icons/addCart.png' class='primary-2' onclick='addToShopcartBeer(";
    var t5 = ")'/><img id='btnRem' src='icons/removeCart.png' class='primary-2' onclick='remShopcartBeer(";
    var t6 = ")' /><img id='btnFav' src='icons/Places-favorites-icon.png' class='primary-2 ";
    var t6Fav = "favorited";
    var t61 = "' onclick='favBeerEntry(";
    var t7 = ")'/></div>";
    
    var texto = "";
    var foo;

    for (i = 0; i < funcComida.beerEntries.length; i++) {
		texto += t1;
		texto += funcComida.beerEntries[i].imgUrl;
		texto += t2;
		texto += funcComida.beerEntries[i].price;
		texto += t3;
		texto += funcComida.beerEntries[i].name;
		texto += t4;
        texto += i;
        texto += t5;
        texto += i;
        texto += t6;
        if (funcComida.beerEntries[i].fav)
        	texto += t6Fav;
        texto += t61;
        texto += i;
        texto += t7;
    }
    if (menudir == "beer") {
        $("#objsComida").html(texto);
    }
}
function buildFavFoodMenu() {
    var t1 = "<div class='comidaEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><br /><p class='comidaPreco'>";
    var t3 = "€</p><br /><p id='comidaNome'>";
    var t4 = "</p><img id='btnAdd' src='icons/addCart.png' class='primary-2' onclick='addToShopcartFav(";
    var t5 = ")'/><img id='btnRem' src='icons/removeCart.png' class='primary-2' onclick='remShopcartFav(";
    var t6 = ")' /><img id='btnFav' src='icons/Places-favorites-icon.png' class='primary-2 ";
    var t6Fav = "favorited";
    var t61 = "' onclick='favFavEntry(";
    var t7 = ")'/></div>";
    
    var texto = "";
    var foo;

    for (i = 0; i < funcComida.favFoodEntries.length; i++) {
		texto += t1;
		texto += funcComida.favFoodEntries[i].imgUrl;
		texto += t2;
		texto += funcComida.favFoodEntries[i].price;
		texto += t3;
		texto += funcComida.favFoodEntries[i].name;
		texto += t4;
        texto += i;
        texto += t5;
        texto += i;
        texto += t6;
        if (funcComida.favFoodEntries[i].fav)
        	texto += t6Fav;
        texto += t61;
        texto += i;
        texto += t7;
    }
    if (menudir == "favFood") {
        $("#objsComida").html(texto);
    }
}
function buildWineMenu() {
    var t1 = "<div class='comidaEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><br /><p class='comidaPreco'>";
    var t3 = "€</p><br /><p id='comidaNome'>";
    var t4 = "</p><img id='btnAdd' src='icons/addCart.png' class='primary-2' onclick='addToShopcartWine(";
    var t5 = ")'/><img id='btnRem' src='icons/removeCart.png' class='primary-2' onclick='remShopcartWine(";
    var t6 = ")' /><img id='btnFav' src='icons/Places-favorites-icon.png' class='primary-2 ";
    var t6Fav = "favorited";
    var t61 = "' onclick='favWineEntry(";
    var t7 = ")'/></div>";
    
    var texto = "";
    var foo;

    for (i = 0; i < funcComida.wineEntries.length; i++) {
		texto += t1;
		texto += funcComida.wineEntries[i].imgUrl;
		texto += t2;
		texto += funcComida.wineEntries[i].price;
		texto += t3;
		texto += funcComida.wineEntries[i].name;
		texto += t4;
        texto += i;
        texto += t5;
        texto += i;
        texto += t6;
        if (funcComida.wineEntries[i].fav)
        	texto += t6Fav;
        texto += t61;
        texto += i;
        texto += t7;
    }
    if (menudir == "wine") {
        $("#objsComida").html(texto);
    }
}
function buildSodaMenu() {
    var t1 = "<div class='comidaEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><br /><p class='comidaPreco'>";
    var t3 = "€</p><br /><p id='comidaNome'>";
    var t4 = "</p><img id='btnAdd' src='icons/addCart.png' class='primary-2' onclick='addToShopcartSoda(";
    var t5 = ")'/><img id='btnRem' src='icons/removeCart.png' class='primary-2' onclick='remShopcartSoda(";
    var t6 = ")' /><img id='btnFav' src='icons/Places-favorites-icon.png' class='primary-2 ";
    var t6Fav = "favorited";
    var t61 = "' onclick='favSodaEntry(";
    var t7 = ")'/></div>";
    
    var texto = "";
    var foo;

    for (i = 0; i < funcComida.sodaEntries.length; i++) {
		texto += t1;
		texto += funcComida.sodaEntries[i].imgUrl;
		texto += t2;
		texto += funcComida.sodaEntries[i].price;
		texto += t3;
		texto += funcComida.sodaEntries[i].name;
		texto += t4;
        texto += i;
        texto += t5;
        texto += i;
        texto += t6;
        if (funcComida.sodaEntries[i].fav)
        	texto += t6Fav;
        texto += t61;
        texto += i;
        texto += t7;
    }
    if (menudir == "soda") {
        $("#objsComida").html(texto);
    }
}
function buildSprtMenu() {
    var t1 = "<div class='comidaEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><br /><p class='comidaPreco'>";
    var t3 = "€</p><br /><p id='comidaNome'>";
    var t4 = "</p><img id='btnAdd' src='icons/addCart.png' class='primary-2' onclick='addToShopcartSprt(";
    var t5 = ")'/><img id='btnRem' src='icons/removeCart.png' class='primary-2' onclick='remShopcartSprt(";
    var t6 = ")' /><img id='btnFav' src='icons/Places-favorites-icon.png' class='primary-2 ";
    var t6Fav = "favorited"; 
    var t61 = "' onclick='favSprtEntry(";
    var t7 = ")'/></div>";
    
    var texto = "";
    var foo;

    for (i = 0; i < funcComida.sprtEntries.length; i++) {
		texto += t1;
		texto += funcComida.sprtEntries[i].imgUrl;
		texto += t2;
		texto += funcComida.sprtEntries[i].price;
		texto += t3;
		texto += funcComida.sprtEntries[i].name;
		texto += t4;
        texto += i;
        texto += t5;
        texto += i;
        texto += t6;
        if (funcComida.sprtEntries[i].fav)
        	texto += t6Fav;
        texto += t61;
        texto += i;
        texto += t7;
    }
    if (menudir == "sprt") {
        $("#objsComida").html(texto);
    }
}
function buildSnakMenu() {
    var t1 = "<div class='comidaEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><br /><p class='comidaPreco'>";
    var t3 = "€</p><br /><p id='comidaNome'>";
    var t4 = "</p><img id='btnAdd' src='icons/addCart.png' class='primary-2' onclick='addToShopcartSnak(";
    var t5 = ")'/><img id='btnRem' src='icons/removeCart.png' class='primary-2' onclick='remShopcartSnak(";
    var t6 = ")' /><img id='btnFav' src='icons/Places-favorites-icon.png' class='primary-2 ";
    var t6Fav = "favorited";	
    var t61 = "' onclick='favSnakEntry(";
    var t7 = ")'/></div>";
    
    var texto = "";
    var foo;

    for (i = 0; i < funcComida.snakEntries.length; i++) {
		texto += t1;
		texto += funcComida.snakEntries[i].imgUrl;
		texto += t2;
		texto += funcComida.snakEntries[i].price;
		texto += t3;
		texto += funcComida.snakEntries[i].name;
		texto += t4;
        texto += i;
        texto += t5;
        texto += i;
        texto += t6;
        if (funcComida.snakEntries[i].fav)
        	texto += t6Fav;
        texto += t61;
        texto += i;
        texto += t7;
    }
    if (menudir == "snak") {
        $("#objsComida").html(texto);
    }
}

function buildShopcart() {
    var t1 = "<div class='compraEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><div id='btnRemove' class='primary-2'>X</div><p class='compraPreco'>";
    var t3 = "€</p><p class='compraQuant'>x";
    var t4 = "</p><p id='compraNome'>";
    var t5 = "</p></div>";
    var texto = "";
    
    for (i = 0; i < funcComida.shopCart.length; i++) {
		texto += t1;
		texto += funcComida.shopCart[i].imgUrl;
		texto += t2;
		texto += funcComida.shopCart[i].price;
		texto += t3;
		texto += funcComida.shopCart[i].qnt;
		texto += t4;
        texto += funcComida.shopCart[i].name;
        texto += t5;
    }
    if (null != document.getElementById("cestoCompras"))
    		document.getElementById("cestoCompras").innerHTML = texto;
}

function addToShopcartBeer(targetItem) {
	var foo = funcComida.beerEntries[targetItem];
	foo.qnt += 1;
	if (funcComida.shopCart.indexOf(foo) == -1) {
    	funcComida.shopCart.push(foo);
	} 
    funcComida.shopCartTotal += foo.price;
    buildShopcart();
    updateCost();
}
function addToShopcartFav(targetItem) {
	var foo = funcComida.favFoodEntries[targetItem];
	foo.qnt += 1;
	if (funcComida.shopCart.indexOf(foo) == -1) {
    	funcComida.shopCart.push(foo);
	} 
    funcComida.shopCartTotal += foo.price;
    buildShopcart();
    updateCost();
}
function addToShopcartWine(targetItem) {
	var foo = funcComida.wineEntries[targetItem];
	foo.qnt += 1;
	if (funcComida.shopCart.indexOf(foo) == -1) {
    	funcComida.shopCart.push(foo);
	} 
    funcComida.shopCartTotal += foo.price;
    buildShopcart();
    updateCost();
}
function addToShopcartSprt(targetItem) {
	var foo = funcComida.sprtEntries[targetItem];
	foo.qnt += 1;
	if (funcComida.shopCart.indexOf(foo) == -1) {
    	funcComida.shopCart.push(foo);
	} 
    funcComida.shopCartTotal += foo.price;
    buildShopcart();
    updateCost();
}
function addToShopcartSnak(targetItem) {
	var foo = funcComida.snakEntries[targetItem];
	foo.qnt += 1;
	if (funcComida.shopCart.indexOf(foo) == -1) {
    	funcComida.shopCart.push(foo);
	} 
    funcComida.shopCartTotal += foo.price;
    buildShopcart();
    updateCost();
}
function addToShopcartSoda(targetItem) {
	var foo = funcComida.sodaEntries[targetItem];
	foo.qnt += 1;
	if (funcComida.shopCart.indexOf(foo) == -1) {
    	funcComida.shopCart.push(foo);
	} 
    funcComida.shopCartTotal += foo.price;
    buildShopcart();
    updateCost();
}

function remShopcart(targetItem) {
	var foo = funcComida.foodEntries[targetItem];
	var bar = funcComida.shopCart.indexOf(foo);
	if (foo.qnt <= 0)
		return;
	foo.qnt -= 1;
	if (foo.qnt <= 0) {
		funcComida.shopCart.splice(bar, 1);	
	}
	
}
function remShopcartWine(targetItem) {
	var foo = funcComida.wineEntries[targetItem];
	var bar = funcComida.shopCart.indexOf(foo);
	if (foo.qnt <= 0)
		return;
	foo.qnt -= 1;
    funcComida.shopCartTotal -= foo.price;
	if (foo.qnt <= 0) {
		funcComida.shopCart.splice(bar, 1);	
	}
    buildShopcart();
    updateCost();
}
function remShopcartBeer(targetItem) {
	var foo = funcComida.beerEntries[targetItem];
	var bar = funcComida.shopCart.indexOf(foo);
	if (foo.qnt <= 0)
		return;
	foo.qnt -= 1;
    funcComida.shopCartTotal -= foo.price;
	if (foo.qnt <= 0) {
		funcComida.shopCart.splice(bar, 1);	
	}
    buildShopcart();
    updateCost();
}
function remShopcartSprt(targetItem) {
	var foo = funcComida.sprtEntries[targetItem];
	var bar = funcComida.shopCart.indexOf(foo);
	if (foo.qnt <= 0)
		return;
	foo.qnt -= 1;
    funcComida.shopCartTotal -= foo.price;
	if (foo.qnt <= 0) {
		funcComida.shopCart.splice(bar, 1);	
	}
    buildShopcart();
    updateCost();
}
function remShopcartSnak(targetItem) {
	var foo = funcComida.snakEntries[targetItem];
	var bar = funcComida.shopCart.indexOf(foo);
	if (foo.qnt <= 0)
		return;
	foo.qnt -= 1;
    funcComida.shopCartTotal -= foo.price;
	if (foo.qnt <= 0) {
		funcComida.shopCart.splice(bar, 1);	
	}
    buildShopcart();
    updateCost();
}
function remShopcartSoda(targetItem) {
	var foo = funcComida.sodaEntries[targetItem];
	var bar = funcComida.shopCart.indexOf(foo);
	if (foo.qnt <= 0)
		return;
	foo.qnt -= 1;
    funcComida.shopCartTotal -= foo.price;
	if (foo.qnt <= 0) {
		funcComida.shopCart.splice(bar, 1);	
	}
    buildShopcart();
    updateCost();
}
function remShopcartFav(targetItem) {
	var foo = funcComida.favFoodEntries[targetItem];
	var bar = funcComida.shopCart.indexOf(foo);
	if (foo.qnt <= 0)
		return;
	foo.qnt -= 1;
    funcComida.shopCartTotal -= foo.price;
	if (foo.qnt <= 0) {
		funcComida.shopCart.splice(bar, 1);	
	}
    buildShopcart();
    updateCost();
}


function favBeerEntry(targetItem) {
	var foo = funcComida.beerEntries[targetItem];
	if (foo.fav)
		foo.fav = false;
	else foo.fav = true;
	funcComida.favFoodEntries.push(foo);
	buildBeerMenu();
}
function favWineEntry(targetItem) {
	var foo = funcComida.wineEntries[targetItem];
	if (foo.fav)
		foo.fav = false;
	else foo.fav = true;
	funcComida.favFoodEntries.push(foo);
	buildWineMenu();
}
function favSnakEntry(targetItem) {
	var foo = funcComida.snakEntries[targetItem];
	if (foo.fav)
		foo.fav = false;
	else foo.fav = true;
	funcComida.favFoodEntries.push(foo);
	buildSnakMenu();
}
function favSprtEntry(targetItem) {
	var foo = funcComida.sprtEntries[targetItem];
	if (foo.fav)
		foo.fav = false;
	else foo.fav = true;
	funcComida.favFoodEntries.push(foo);
	buildSprtMenu();
}
function favSodaEntry(targetItem) {
	var foo = funcComida.sodaEntries[targetItem];
	if (foo.fav)
		foo.fav = false;
	else foo.fav = true;
	funcComida.favFoodEntries.push(foo);
	buildSodaMenu();
}
function favFavEntry(targetItem) {
	var foo = funcComida.favFoodEntries[targetItem];
	if (foo.fav)
		foo.fav = false;
	else foo.fav = true;
	
	funcComida.favFoodEntries.splice(funcComida.favFoodEntries.indexOf(foo), 1);
	
	buildFavFoodMenu();
}

function updateCost() {
    if (null != document.getElementById("TOTALcestoCompras"))
    		document.getElementById("TOTALcestoCompras").innerHTML = Math.floor(funcComida.shopCartTotal*100)/100+"€";
}

function buildCompraBeer(targetItem) {
    var t1 = "<div class='compraEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><p class='compraPreco'>";
    var t3 = "€</p><p class='compraQuant'>x";
    var t4 = "</p><p id='compraNome'>";
    var t5 = "</p><div id='btnRemove' class='primary-2' onclick='removeCompra('";
    var t6 = "'>X</div></div>";
    var texto ="";
    
    
    texto += t1;
    texto += funcComida.beerEntries[i].imgUrl;
    texto += t2;
    texto += funcComida.beerEntries[i].price;
    texto += t3;
    texto += funcComida.beerEntries[i].qntShop;
    texto += t4;
    texto += funcComida.beerEntries[i].name;
    texto += t5;
    texto += targetItem;
    
    document.getElementById("objsComida").innerHTML = texto;
}