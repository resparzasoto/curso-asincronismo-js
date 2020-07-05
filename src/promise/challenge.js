const fetchData = require('../utils/fetchData');
const BASE_URL_API = 'https://rickandmortyapi.com/api';
const CHARACTER_ENDPOINT = '/character/';

fetchData(BASE_URL_API + CHARACTER_ENDPOINT)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${BASE_URL_API}${CHARACTER_ENDPOINT}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => console.log(data.dimension))
    .catch(error => console.error(error));