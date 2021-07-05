import { operation } from './data.js';
import data from './data/pokemon/pokemon.js';

const containerRoot = document.getElementById('root');


let htmlCode = '';

data.pokemon.forEach(element => {
    htmlCode += `<div id=${element.num} class="pokemonCard">
                    <div class="num">${"#" + element.num}</div>
                    <img class= "img" src=${element.img}>
                    <div class="name">${element.name}</div>
                    <div class=type>`

    element.type.forEach(type => {
            htmlCode += `<div class="${type}">${type}</div>`
    });
      htmlCode += `</div>
                </div>`

    containerRoot.innerHTML = htmlCode;
});

document.getElementById('searchButton').addEventListener("click", operation.search);

for (let i = 0; i < data.pokemon.length; i++) {
    document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
}



document.getElementById('generationButton').addEventListener('click', function () {
    document.getElementById("generationOverlay").style.display = "flex";
    document.getElementById("typeOverlay").style.display = "none"
    document.getElementById("weaknessesOverlay").style.display = "none"
});
document.getElementById('generationOverlay').addEventListener('click', function () {
    document.getElementById("generationOverlay").style.display = "none"
});


document.getElementById('typeButton').addEventListener('click', function () {
    document.getElementById("typeOverlay").style.display = "flex";
    document.getElementById("generationOverlay").style.display = "none"
    document.getElementById("weaknessesOverlay").style.display = "none"
});
document.getElementById('typeOverlay').addEventListener('click', function () {
    document.getElementById("typeOverlay").style.display = "none"
});


document.getElementById('weaknessesButton').addEventListener('click', function () {
    document.getElementById("weaknessesOverlay").style.display = "flex";
    document.getElementById("generationOverlay").style.display = "none"
    document.getElementById("typeOverlay").style.display = "none"
});
document.getElementById('weaknessesOverlay').addEventListener('click', function () {
    document.getElementById("weaknessesOverlay").style.display = "none"

});


document.getElementById('kantoButton').addEventListener("click", displayPokemonByGeneration)
document.getElementById('johtoButton').addEventListener("click", displayPokemonByGeneration)

function displayPokemonByGeneration() {

    let pokemonByGeneration = data.pokemon.filter(generationFilter)

    function generationFilter(pokemon) {
        let selectedGeneration = event.currentTarget.getAttribute("value")
        if (pokemon.generation.name == selectedGeneration){
            return true
        }
    }

    let htmlCode = '';
    pokemonByGeneration.forEach(element => {
        htmlCode += `<div id=${element.num} class="pokemonCard">
                        <div class="num">${"#" + element.num}</div>
                        <img class= "img" src=${element.img}>
                        <div class="name">${element.name}</div>
                        <div class=type>`
        element.type.forEach(type => {
                htmlCode += `<div class="${type}">${type}</div>`
            });
            htmlCode += `</div>
                    </div>`

        containerRoot.innerHTML = htmlCode;
    });
    for (let i = 0; i < pokemonByGeneration.length; i++) {
        document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
    }
}


document.getElementById('normalTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('fightingTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('flyingTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('poisonTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('groundTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('rockTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('bugTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('ghostTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('steelTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('fireTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('waterTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('grassTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('electricTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('psychicTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('iceTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('dragonTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('darkTypeButton').addEventListener("click", displayPokemonByType)
document.getElementById('fairyTypeButton').addEventListener("click", displayPokemonByType)

function displayPokemonByType() {

    let pokemonByType = data.pokemon.filter(typeFilter)

    function typeFilter(pokemon) {
        let selectedType = event.currentTarget.getAttribute("value")
        , pokemonType = pokemon.type.filter(filteredTypes)
            function filteredTypes(type) {
                if (type == selectedType) {
                    return true
                }
            }
        if (pokemonType == selectedType) {
            return true
        }
    }

    let htmlCode = '';
    pokemonByType.forEach(element => {
        htmlCode += `<div id=${element.num} class="pokemonCard">
                        <div class="num">${"#" + element.num}</div>
                        <img class= "img" src=${element.img}>
                        <div class="name">${element.name}</div>
                        <div class=type>`
        element.type.forEach(type => {
                htmlCode += `<div class="${type}">${type}</div>`
            });
            htmlCode += `</div>
                    </div>`
        containerRoot.innerHTML = htmlCode;
    });

    for (let i = 0; i < pokemonByType.length; i++) {
        document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
    }
}


document.getElementById('weakAgainstNormalButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstFightingButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstFlyingButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstPoisonButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstGroundButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstRockButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstBugButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstGhostButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstSteelButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstFireButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstWaterButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstGrassButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstElectricButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstPsychicButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstIceButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstDragonButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstDarkButton').addEventListener("click", displayPokemonByWeakness)
document.getElementById('weakAgainstFairyButton').addEventListener("click", displayPokemonByWeakness)

function displayPokemonByWeakness() {

    let pokemonByWeaknesses = data.pokemon.filter(getWeaknessesByPokemon)


    function getWeaknessesByPokemon(pokemon) {
        let selectedWeakness = event.currentTarget.getAttribute("value")
        , pokemonWeakness = pokemon.weaknesses.filter(getMatchingWeakness)

            function getMatchingWeakness(weakness) {                
                if (weakness == selectedWeakness) {
                    return true
                }
            }

        if (pokemonWeakness == selectedWeakness) {
            return true
        }
    }

    if (pokemonByWeaknesses.length > 0){

        let htmlCode = '';
        pokemonByWeaknesses.forEach(element => {
            htmlCode += `<div id=${element.num} class="pokemonCard">
                            <div class="num">${"#" + element.num}</div>
                            <img class= "img" src=${element.img}>
                            <div class="name">${element.name}</div>
                            <div class=type>`
            element.type.forEach(type => {
                    htmlCode += `<div class="${type}">${type}</div>`
                });
                htmlCode += `</div>
                        </div>`
        containerRoot.innerHTML = htmlCode;
        });

    }else {
    containerRoot.innerHTML = '';
    alert ("No existen pokémones débiles frente a pokémones tipo Normal")
    }

    for (let i = 0; i < pokemonByWeaknesses.length; i++) {
        document.querySelectorAll(".pokemonCard")[i].addEventListener("click", operation.clickedPokemonProfileDisplay);
    }
}














