

document.getElementById("pokeList").innerHTML= list;

$(document).ready(function(){
	var estado = false;

	$('#btn-toggle').on('click',function(){
		$('.seccionToggle').slideToggle();

	});
});

document.getElementById("water-button").addEventListener("click", function() { filterType(pokeData, "Water"); });
document.getElementById("fire-button").addEventListener("click", function() { filterType(pokeData, "Fire"); });
document.getElementById("grass-button").addEventListener("click", function() { filterType(pokeData, "Grass"); });
document.getElementById("ground-button").addEventListener("click", function() { filterType(pokeData, "Ground"); });
document.getElementById("rock-button").addEventListener("click", function() { filterType(pokeData, "Rock"); });
document.getElementById("steel-button").addEventListener("click", function() { filterType(pokeData, "Steel"); });
document.getElementById("ice-button").addEventListener("click", function() { filterType(pokeData, "Ice"); });
document.getElementById("electric-button").addEventListener("click", function() { filterType(pokeData, "Electric"); });
document.getElementById("dragon-button").addEventListener("click", function() { filterType(pokeData, "Dragon"); });
document.getElementById("ghost-button").addEventListener("click", function() { filterType(pokeData, "Ghost"); });
document.getElementById("psychic-button").addEventListener("click", function() { filterType(pokeData, "Psychic"); });
document.getElementById("normal-button").addEventListener("click", function() { filterType(pokeData, "Normal"); });
document.getElementById("fighting-button").addEventListener("click", function() { filterType(pokeData, "Fighting"); });
document.getElementById("poison-button").addEventListener("click", function() { filterType(pokeData, "Poison"); });
document.getElementById("bug-button").addEventListener("click", function() { filterType(pokeData, "Bug"); });
document.getElementById("flying-button").addEventListener("click", function() { filterType(pokeData, "Flying"); });



