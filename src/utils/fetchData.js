let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (urlApi) => {
    return new Promise((resolve, reject) => {
        const xHttp = new XMLHttpRequest();
        xHttp.open('GET', urlApi, true);
        xHttp.onreadystatechange = event => {
            if (xHttp.readyState === 4) {
                if (xHttp.status === 200) {
                    resolve(JSON.parse(xHttp.responseText));
                } else {
                    const error = new Error('Error ' + urlApi);
                    reject(error);
                }
            }
        };
        xHttp.send();
    });
};

module.exports = fetchData;