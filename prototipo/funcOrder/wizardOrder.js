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
        
        coisas += Math.floor(funcComida.shopCartTotal*100)/100;
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
        coisas += Math.floor(funcOrder.orderLog[i][1]*100)/100;
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
    if (document.getElementById("pedidosJuntos").innerHTML == "Juntar vários pedidos") {
        document.getElementById("pedidosJuntos").innerHTML = "Ver um pedido";
        
        for(i = 0; i < foo.length; i++) {        
            foo[i].onclick = function () {showPedidos();};
        }
    } else {
        document.getElementById("pedidosJuntos").innerHTML = "Juntar vários pedidos";
        
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
        foo = funcOrder.orderLog[index];
        for (i = 0; i < foo[0].length; i++) {
            coisas += "<li>";
            coisas += foo[0][i].name;
            coisas += " "+(foo[0][i].qnt*foo[0][i].price)+"€";
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
                console.log("muhah");
                console.log(foo[i]);
                console.log(foo[i].id);
                coisas += funcOrder.orderLog[--foo[i].id][1]+"€";
            }
            coisas += "</li>";
        }
    }
    coisas += "</ul>";
    
    document.getElementById("pedidosDet").innerHTML = coisas;
    
}