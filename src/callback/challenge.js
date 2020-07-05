import XMLHttpRequest from "xmlhttprequest";

function fetchData(urlApi, callback) {
    let xHttp = new XMLHttpRequest();
    xHttp.open('GET', urlApi, true);
    xHttp.onreadystatechange = (event) => {
        if (xHttp.readyState === 4) {
            if (xHttp.status === 200) {
                callback(null, JSON.parse(xHttp.responseText));
            } else {
                const error = new Error('Eror ' + urlApi);
                return callback(error, null);
            }
        }
    };
    xHttp.send();
}