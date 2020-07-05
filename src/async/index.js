const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve('Do Something Async'), 3000);
        } else {
            const error = new Error('Test Error');
            reject(error);
        }
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something + ' Async1');
}

console.log('Before1 Async');
doSomething();
console.log('After1 Async');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something + ' Async2');
    } catch {
        console.error(error);
    }
}

console.log('Before2 Async');
anotherFunction();
console.log('After2 Async');

(async () => {
    try {
        console.log('Before3 Sync');
        const something = await doSomethingAsync();
        console.log(something + ' Sync');
        console.log('After3 Sync');
    } catch {
        console.error(error);
    }
})();