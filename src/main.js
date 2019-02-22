
document.getElementById("pokeList").innerHTML= list;

$(document).ready(function(){
	var estado = false;

	$('#btn-toggle').on('click',function(){
		$('.seccionToggle').slideToggle();

	});
});