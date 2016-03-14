function myAjax(targetPage) {
    var xhttp = new XMLHttpRequest();
    var final;
    switch(targetPage) {
        case 'QS':
            final = "ipmajax/quemSomos.html";
            break;
        case 'Q1':
            final = "ipmajax/quest1.html";
            break;
        case 'Q2':
            final = "ipmajax/quest2.html";
            break;
        case 'AUT1':
            final = "ipmajax/aut1.html";
            break;
        case 'AUT2':
            final = "ipmajax/aut2.html";
            break;
        case 'MC1':
            final = "ipmajax/modconceptual.html";
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
