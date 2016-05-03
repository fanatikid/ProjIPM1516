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
    
    
};
