const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Correct!');
        } else {
            reject('Wrong!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve(true), 3000);
        } else {
            const error = new Error('Wrong!');
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error));

Promise.all([somethingWillHappen2(), somethingWillHappen()])
    .then(response => console.log('Results of parallels promises', response))
    .catch(error => console.error(error));