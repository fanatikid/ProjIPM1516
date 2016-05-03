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
    var xhttp = new XMLHttpRequest();
    var want = "funcOrder/pagar.html";
	xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {	
            document.body.innerHTML += xhttp.responseText;
        }
    };
    
    
    xhttp.open("GET", want, true);
    xhttp.send();
    
    trickrelogio = setTimeout(populatePayment, 5);
    
};

function populatePayment() {
    var coisas = "";
    
    if (funcComida.shopCart.length != 0) {
        coisas = "<li><input type='checkbox' id='pedido0'>";
        
        coisas += "<a>";
        coisas += "#Pedido currente - ";
        coisas += funcComida.shopCartTotal;
        coisas += "€";
        coisas += "</a> ";
        coisas += "</li>";
    }
    for (i = 0; i < funcOrder.orderLog.length; i++) {
        coisas += "<li> <input type='checkbox' id='";
        coisas += "pedido"+(i+1);
        coisas += "'><a>";        
        coisas += "#"+(i+1)+" pedido - ";
        coisas += funcOrder.orderLog[i][1];
        coisas += "€";
        coisas += "</a>";
        
        coisas += " </li>";
    }
    
    document.getElementById("pedidosLista").innerHTML = coisas;
};

function showChecks() {
    var foo = document.querySelectorAll("input");    
    for(i = 0; i < foo.length; i++) {        
        if (foo[i].style.display == "none") {
            foo[i].style.display = "inline";
        } else foo[i].style.display = "none";
    }
    
};