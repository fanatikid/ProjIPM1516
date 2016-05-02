var funcComida = {
    shopCart : [],
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
                 ],
    spiritEntries : [
                    {   imgUrl :"imgs/comida/",
                        name :"Sagres média",
                        price : 1.50,
                        fav : false,
                        qnt : 0,
            
        },
        
        ],
				
    
	
};



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


//https://www.iconfinder.com/icons/11150/256x256_shopcart_icon

function buildBeerMenu() {
    var t1 = "<div class='comidaEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><br /><p class='comidaPreco'>";
    var t3 = "€</p><br /><p id='comidaNome'>";
    var t4 = "</p><img id='btnAdd' src='icons/addCart.png' class='primary-2' onclick='addToShopcart(";
    var t5 = ")'/><img id='btnRem' src='icons/removeCart.png' class='primary-2' /><img id='btnFav' src='icons/Places-favorites-icon.png' class='primary-2' /></div>";
    
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
    }
    if (menudir == "beer") {
        $("#objsComida").html(texto);
    }
}

function buildShopcart() {
    var t1 = "<div class='compraEntry'><img src='";
    var t2 = "' class='comidaImagem'></img><p class='compraPreco'>";
    var t3 = "€</p><p class='compraQuant'>x";
    var t4 = "</p><p id='compraNome'>";
    var t5 = "</p><div id='btnRemove' class='primary-2'>X</div></div>";
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
}

function addToShopcart(targetItem) {
    funcComida.shopCart.push(funcComida.beerEntries[targetItem]);
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