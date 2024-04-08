const promise = new Promise((resolve, reject) => {
    setTimeout(resolve("hey i am resolvedddd"), 9000);
});

const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject("Promise1 rejected after 7000 ms"), 7000);
});

Promise.all([promise, promise1])
    .then(data => {
        console.log(data); // This will not be executed because promise1 rejects
    })
    .catch(err => {
        console.log(err); // This will log the rejection reason from promise1
});

Promise.allSettled([promise, promise1])
    .then(data => {
        console.log("This is the response of Promise.isSettled", data); // This will not be executed because promise1 rejects
    })
    .catch(err => {
        console.log(err); // This will log the rejection reason from promise1
});
