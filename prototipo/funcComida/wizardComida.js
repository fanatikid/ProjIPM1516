
function favoritaComida () {
    
	/** Switch favorite State of food */
	$('div.comidaEntry > #btnFav').on('click', function(e){
		e.stopPropagation();
		
		if( $(this).hasClass('favoritado') ){
			
			$(this).removeClass('favoritado');
			var nomeComida = $(this).closest('#comidaNome').val();
			$('#menuFavoritosInicial > #objsComida').find(nomeComida).closest('.comidaEntry').remove();
		
		}else{
			
			$(this).addClass('favoritado');
			var htmlContent = $(this).closest('.comidaEntry').html();
			/** FIX-ME Add favorite food to FavList */
			$('#menuFavoritosInicial > #objsComida').append( htmlContent );
		}
	});
		
	
}


function encomendaComida () {
	/** Switch favorite State of food */
	$('div.comidaEntry').on('click', function(){
		/** adicionar a detalhes comida */
		
		/** FIX-ME Add favorite food to FavList */
		$('#detalhesComida > #cestoCompras').append( '<div class="comidaPedido">'+ 
		'<img class="imagemPedido" src="' + $(this).find('.comidaImagem').attr('src') + 
		'"></img><p class="nomeComidaPedido">' + $(this).find('#comidaNome').text() + '</p</div>');
		
	});
}


function desencomendaComida () {
	/** Switch favorite State of food */
	$('.comidaPedido').on('dblclick', function(){
		/** adicionar a detalhes comida */
		alert('ahoy cap');
		/** FIX-ME Add favorite food to FavList */
		$(this).remove(); 
	});
}