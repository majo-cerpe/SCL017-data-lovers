import { example } from './data.js';
//// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
//// import data from './data/rickandmorty/rickandmorty.js';

console.log(example);
console.log(data);

const containerRoot = document.getElementById('root');

data.pokemon.forEach(element => {

    containerRoot.innerHTML += `<div id="pokemonCardContainer" class="pokemonCardContainer">
                                    <div id="pokemonCard" class="pokemonCard">
                                        <div>${element.num}</div>
                                        <div><img src=${element.img}></div>
                                        <div>${element.name}</div>
                                        <div>${element.type}</div>
                                    </div> 
                                </div>`
});



