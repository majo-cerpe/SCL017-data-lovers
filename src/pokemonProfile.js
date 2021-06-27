import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example);
console.log(data);

const containerRoot = document.getElementById('root');
let htmlCode = '';

let clickedPokemonId = sessionStorage.getItem("clickedPokemonId");
let nextPokemonId = 0;
let previousPokemonId = 0;

switch(clickedPokemonId){
    case "001":
        clickedPokemonId --;
        nextPokemonId = clickedPokemonId +1;
    htmlCode = 
        `<div>
            <button>${data.pokemon[nextPokemonId].name + "#" + data.pokemon[nextPokemonId].num}</button>
        </div>`
    break;

    case "251":
        clickedPokemonId --
        previousPokemonId = clickedPokemonId -1;
    htmlCode = 
        `<div>
           <button>${data.pokemon[previousPokemonId].name + "#" + data.pokemon[previousPokemonId].num}</button>
        </div>`
    break;

    default:
        clickedPokemonId --;
        nextPokemonId = clickedPokemonId +1;
        previousPokemonId = clickedPokemonId -1;
    htmlCode = 
        `<div>
            <button>${data.pokemon[previousPokemonId].name + "#" + data.pokemon[previousPokemonId].num}</button>
            <button>${data.pokemon[nextPokemonId].name + "#" + data.pokemon[nextPokemonId].num}</button>
        </div>`
}

htmlCode += `<h1>${data.pokemon[clickedPokemonId].name}</h1>
            <figure>
                <img src=${data.pokemon[clickedPokemonId].largeImg}>
            </figure>
            <section>
                <h2>${"Sobre " + data.pokemon[clickedPokemonId].name}</h2>
            <div>${data.pokemon[clickedPokemonId].about}</div>
            </section>
            <section>
                <h2>${"Características físicas"}</h2>
                <div>${"Altura: " + data.pokemon[clickedPokemonId].size.height}</div>
                <div>${"Peso: " + data.pokemon[clickedPokemonId].size.weight}</div>
            </section>
            <section>
                <h2>${"Generación"}</h2>
                <div>${data.pokemon[clickedPokemonId].generation.name}</div>
            </section>
            <section>
                <h2>${"Tipo"}</h2>
                <div>`
data.pokemon[clickedPokemonId].type.forEach(type => {
        htmlCode += `<div>${type}</div>`}); 
    htmlCode +=`</div>               
            </section>
            <section>
                <h2>${"Resistente a:"}</h2>
                <ul>`
data.pokemon[clickedPokemonId].resistant.forEach(resistant =>{
        htmlCode += `<li>${resistant}</li>`})
    htmlCode += `</ul>
            </section>
            <section>
                <h2>${"Débil contra:"}</h2>
                <ul>`
                
data.pokemon[clickedPokemonId].weaknesses.forEach(weaknesses =>{
        htmlCode += `<li>${weaknesses}</li>`})
    htmlCode += `</ul>
            </section>
            <section>
                <h2>${"Estadísticas"}</h2>
                <ul>
                    <li>${"Tasa de fuga base: " + data.pokemon[clickedPokemonId].encounter['base-flee-rate']}</li>
                    <li>${"Tasa de captura base: " + data.pokemon[clickedPokemonId].encounter['base-capture-rate']}</li>
                </ul>
            </section>`
            

containerRoot.innerHTML = htmlCode;

