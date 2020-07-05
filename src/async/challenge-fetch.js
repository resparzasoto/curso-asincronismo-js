const fetch = require('node-fetch');
const BASE_URL_API = 'https://rickandmortyapi.com/api';
const CHARACTER_ENDPOINT = '/character/';

function getData() {
    return fetch(BASE_URL_API + CHARACTER_ENDPOINT)
        .then(response => response.json())
        .then(json => json);
}

async function anotherFunction() {
    try {
        const data = await getData();
        const character = await data.results[0];
        const origin = await fetch(character.origin.url)
            .then(response => response.json())
            .then(json => json);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch(error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction();
console.log('After');