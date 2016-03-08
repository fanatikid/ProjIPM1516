function myAjax(targetPage) {
    var xhttp = new XMLHttpRequest();
    var final;
    switch(targetPage) {
        case 'QS':
            final = "quemSomos.html";
            break;
        case 'Q1':
            final = "quest1.html";
            break;
        case 'Q2':
            final = "quest2.html";
            break;
        case 'AUT1':
            final = "aut1.html";
            break;
            
        default:
            final = "ERRORHANDLE";
    }
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("facade").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", final, true);
    xhttp.send();
} 
