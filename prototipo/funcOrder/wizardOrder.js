var funcOrder = {
	orderLog : [],
	currentOrder : [],
	debt : 0,
	paidDebt :0,
};



function pagaDebt (guita) {
	funcOrder.debt = funcOrder.debt - guita;
	if (funcOrder.debt <= 0)
		funcOrder.debt = 0;
};

function clearPagamento() {
	var curpopup = document.getElementById("pagaOqDevesMenu");
    if (curpopup != null)
    	document.body.removeChild(curpopup);
};

function clearMoney() {
	var curpopup = document.getElementById("comoPagasMenu");
    if (curpopup != null)
    	document.body.removeChild(curpopup);
};
var trickrelogio;

function pagaOqDeves() {
    if (document.getElementById("pagaOqDevesMenu") != null)
        return;
    
    var xhttp = new XMLHttpRequest();
    var want = "funcOrder/pagar.html";
	xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {	
            document.body.innerHTML += xhttp.responseText;
        }
    };
    
    
    xhttp.open("GET", want, true);
    xhttp.send();
    
    trickrelogio = setTimeout(populatePayment, 10);
    
};

function populatePayment() {
    var coisas = "";
    
    if (funcComida.shopCart.length != 0) {
        coisas = "<li onclick='mostraPedido(-1)'>";
        coisas += "<input style='display: none;' type='checkbox' id='0'>";
        
        coisas += "<a>";
        coisas += "#Pedido currente - ";
        
        coisas += (funcComida.shopCartTotal*100)/100;
        coisas += "€";
        coisas += "</a> ";
        coisas += "</li>";
    }
    for (i = 0; i < funcOrder.orderLog.length; i++) {
        coisas += "<li onclick=";
        coisas += "'mostraPedido("+i+")'> <input style='display: none;' type='checkbox' id='";
        coisas += (i+1);
        coisas += "'><a>";        
        coisas += "#"+(i+1)+" pedido - ";
        coisas += (funcOrder.orderLog[i][1]*100)/100;
        coisas += "€";
        coisas += "</a>";
        
        coisas += " </li>";
    }
    
        
    document.getElementById("pedidosLista").innerHTML = coisas;
    
    if (funcComida.shopCart.length != 0) {
        mostraPedido(-1);
    } else mostraPedido(0);
};

function showChecks() {
    var foo = document.querySelectorAll("input");
    
    var bar = document.querySelectorAll("#pedidosLista > li");
    
    
    
    if (document.getElementById("pedidosJuntos").innerHTML == "Juntar vários pedidos") {
        document.getElementById("pedidosJuntos").innerHTML = "Ver um pedido";
        document.getElementById("queroPagar").innerHTML = "Pagar Pedidos";
        for(i = 0; i < bar.length; i++) {
        	bar[i].onclick = null;
        }
        
        for(i = 0; i < foo.length; i++) {        
            foo[i].onclick = function () {showPedidos();};
        }
    } else {
        document.getElementById("pedidosJuntos").innerHTML = "Juntar vários pedidos";
        document.getElementById("queroPagar").innerHTML = "Pagar pedido";
        for(i = 0; i < bar.length; i++) {
        	bar[i].onclick = function (nr) {mostraPedido(nr);};
        }
        
        for(i = 0; i < foo.length; i++) {        
            foo[i].onclick = null;
        }
    }
    var foo = document.querySelectorAll("input");
    for(i = 0; i < foo.length; i++) {        
        if (foo[i].style.display == "none") {
            foo[i].style.display = "inline";
        } else foo[i].style.display = "none";
    }
    
    
    
    
};

function mostraPedido(index) {
    var coisas = "<ul>";
    var foo;
    if (index < 0) {
        for (i = 0; i < funcComida.shopCart.length; i++ ) {
            coisas += "<li>";
            coisas += funcComida.shopCart[i].name;
            coisas += " "+(funcComida.shopCart[i].qnt*funcComida.shopCart[i].price)+"€";
            coisas += "</li>";
        }
        coisas += "</ul>";
    } else {
    	if (funcOrder.orderLog.length == 0)
    		return;
        foo = funcOrder.orderLog[index][0];
        for (i = 0; i < Object.keys(foo).length; i++) {
            coisas += "<li>";
            coisas += foo[i].name.valueOf();
            coisas += " "+(foo[i].qnt.valueOf()*foo[i].price.valueOf())+"€";
            coisas += "</li>";
        }
        coisas += "</ul>";
    }
    
    document.getElementById("pedidosDet").innerHTML = coisas;
};

function showPedidos() {    
    var foo = document.querySelectorAll("input");
    var coisas = "<ul>";
    
    
    
    for(i = 0; i < foo.length; i++) {        
        if (foo[i].checked == true) {
            coisas += "<li>";
            coisas += "#";
            if (foo[i].id <= 0) {
                coisas += "currente";
                coisas += "pedido - ";                        
                coisas += funcComida.shopCartTotal+"€";
            } else {                
                coisas += Number(foo[i].id);
                coisas += "pedido - ";      
                //console.log("muhah");
                //console.log(foo[i]);
                //console.log(foo[i].id);
                coisas += funcOrder.orderLog[foo[i].id - 1][1]+"€";
            }
            coisas += "</li>";
        }
    }
    coisas += "</ul>";
    //console.log(coisas);
    document.getElementById("pedidosDet").innerHTML = coisas;
    
}

function sigaPagar() {
    if (document.getElementById("comoPagasMenu") != null)
        return;
    
    
    var coisas = "Montante a pagar: ";
    var total = 0;  
    var foo = document.querySelectorAll("input");
    
    //console.log(coisas);
    var xhttp = new XMLHttpRequest();
    var want = "funcOrder/gimeMoney.html";
	xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {	
            document.body.innerHTML += xhttp.responseText;
        }
    };
    
    
    xhttp.open("GET", want, true);
    xhttp.send();
    
    
    for(i = 0; i < foo.length; i++) {
    	//console.log("bb");        
        if (foo[i].checked == true) {
        	//console.log("aa");
        	
        	total += funcOrder.orderLog[foo[i].id-1][1];
        	funcOrder.orderLog.splice(foo[i].id-1, 1);
        	//console.log(total);
        }
    }
    
    coisas += total+"€";
    
    trickrelogio = setTimeout(function () {setMyTab(coisas);}, 50);
    
};


function setMyTab(coisas) {
        
    //console.log("!!!"+coisas);
    document.getElementById("quantoPagas").innerHTML = coisas;
    
};

function ahahPagas() {
	alert('Por Favor aguarde pelo funcionário'); 
	clearPagamento(); 
	clearMoney();
};