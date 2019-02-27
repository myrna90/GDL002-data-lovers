
document.getElementById("pokeList").innerHTML= list;
const waterpower =() =>{
document.getElementById("pokeList").innerHTML= pokewater;
};
const buttonw = document.getElementById("water-button");
buttonw.addEventListener("click", waterpower);


$(document).ready(function(){
	var estado = false;

	$('#btn-toggle').on('click',function(){
		$('.seccionToggle').slideToggle();

	});
});