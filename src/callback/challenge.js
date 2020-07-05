let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const BASE_URL_API = 'https://rickandmortyapi.com/api';

function fetchData(urlApi, callback) {
    let xHttp = new XMLHttpRequest();
    xHttp.open('GET', urlApi, true);
    xHttp.onreadystatechange = (event) => {
        if (xHttp.readyState === 4) {
            if (xHttp.status === 200) {
                callback(null, JSON.parse(xHttp.responseText));
            } else {
                const error = new Error('Error ' + urlApi);
                callback(error, null);
            }
        }
    };
    xHttp.send();
}

const CHARACTER_ENDPOINT = `${BASE_URL_API}/character`;

fetchData(`${CHARACTER_ENDPOINT}/`, (error1, data1) => {
    if (error1) {
        return console.log(error1);
    }
    fetchData(`${CHARACTER_ENDPOINT}/${data1.results[0].id}`, (error2, data2) => {
        if (error2) {
            return console.log(error2);
        }
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) {
                return console.log(error3);
            }
            const obj = {
                people: data1.info.count,
                name: data2.name,
                dimension: data3.dimension,
            };
            console.log(obj);
        });
    });
});
