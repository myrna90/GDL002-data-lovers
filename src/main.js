//funcion para la barra deslizable
$(document).ready(function() {
    var estado = false;

    $('#btn-toggle').on('click', function() {
        $('.seccionToggle').slideToggle();

    });
});
//llamar funcion para mostrar pokemon
//document.getElementById("pokeList").innerHTML = list;

document.getElementById("btnGrass").addEventListener("click", function() { filterType(pokeData, "Grass"); });