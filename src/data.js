const pokeData = POKEMON.pokemon;
let list = [];
for (let i = 0; i < pokeData.length; i++) {
    let pokeList = " <img src='" + pokeData[i].img + "'/>" + " " + pokeData[i].name + " " + pokeData[i].num;
    list += pokeList;
}