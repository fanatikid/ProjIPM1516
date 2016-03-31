function setDropdown() {
	var sheet = document.createElement('style');

	var cssmenu = document.getElementById("dedicatedMenu");
	var rect = cssmenu.getBoundingClientRect();
	var offset = rect.height - 3 + 'px';

	//the order is at,mc,proto,au
	var headList = ["#at-outter.getDown", "#mc-outter.getDown", "#proto-outter.getDown", "#au-outter.getDown"];

	//the order is webkit, moz, o, ms
	var kitList = ["-webkit-transform", "-moz-transform", "-o-transform", "-ms-transform"];

	var comandoHead = "translateY(";
	var comandoBottom = ");";

	for ( cat = 0; cat < 4; cat++) {
		sheet.innerHTML += headList[cat] + "{";
		for ( kit = 0; kit < 4; kit++) {
			sheet.innerHTML += kitList[kit] + ":" + comandoHead + offset + comandoBottom;
		}
		sheet.innerHTML += "}";
	}

	document.body.appendChild(sheet);
}

function DropAMenu(amenuname) {
	var amenu = document.getElementById(amenuname + "-outter");
	var aentry = document.getElementById(amenuname + "-poster");
	
	

	var cssmenuRect = document.getElementById("cssmenu").getBoundingClientRect();
	var entryRect = aentry.getBoundingClientRect();
	var menuRect = amenu.getBoundingClientRect();
	
	amenu.className = "dropdownMenu getDown";
	

	amenu.style.left = entryRect.left + 'px';
	amenu.style.top = entryRect.y + 'px';
	
	

}



function toggleMenus() {
	$(".dropdownMenu").removeClass("getDown");
	setTimeout(function(){
	    $(".dropdownMenu").toggleClass("getHide");
	}, 1500);
	
	$(".dropdownMenu").addClass("getUp");

}