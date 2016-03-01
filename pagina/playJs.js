os menus começam hidden
o setmenu coloca-os na posicao certa
mais uma funcao corrida com mouse over em cada entrada do menu horizontal, que altera o tributo dos menus verticais|| usar jquery


function setDropMenu(args[] usar o id, concat com outter, ) usado com pageload(), trata de colocar os menus nas posiçoes correctas.
var rect = document.getElementById("at-poster").getBoundingClientRect();
var rect2 = document.getElementById("at-outter").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
console.log(rect2.top, rect2.right, rect2.bottom, rect2.left);
document.getElementById("at-outter").style.position = "absolute";
document.getElementById("at-outter").style.left = rect.left + 'px';
document.getElementById("at-outter").style.top = rect.top + 100 + 'px';
document.getElementById("at-outter").style.right = rect.right + 'px';
document.getElementById("at-outter").style.bottom = rect.bottom + 'px';
document.getElementById("at-outter").style.zIndex = 10;