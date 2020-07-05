const fetchData = require('../utils/fetchData');
const BASE_URL_API = 'https://rickandmortyapi.com/api';
const CHARACTER_ENDPOINT = '/character/';

const searchData = async () => {
    try {
        const dataCharacters = await fetchData(`${BASE_URL_API}${CHARACTER_ENDPOINT}`);
        console.log(dataCharacters.info.count);
        const dataCharacter1 = await fetchData(`${BASE_URL_API}${CHARACTER_ENDPOINT}/${dataCharacters.results[0].id}`);
        console.log(dataCharacter1.name);
        const dataOrigin = await fetchData(dataCharacter1.origin.url);
        console.log(dataOrigin.dimension);
    } catch {
        console.error(error);
    }
}

console.log('Before');
searchData();
console.log('After');