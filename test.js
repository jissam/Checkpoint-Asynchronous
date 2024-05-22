//Task 1

const x = [1, 2, 3, 4, 5];

async function iterateWithAsyncAwait(tab) {
  for (const i of tab) {
    const promise1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    console.log(i);
  }
}

iterateWithAsyncAwait(x);

//Tak 2

async function awaitCall() {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetching data from database is done!");
    }, 3000);
  });
  console.log(data);
}

awaitCall();

//Task 3

async function awaitCallWithError() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        var x = Math.random();
        console.log(x);
        if (x < 0.5) {
          resolve("ok");
        } else {
          reject("Error");
        }
        resolve("fetching data from database is done!");
      }, 3000);
    });
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

awaitCallWithError();

//Task 4

async function firstFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first");
    }, 1000);
  });
}

async function secondFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second");
    }, 5000);
  });
}

async function concurrentRequests() {
  try {
    const [firstresult, secondresult] = await Promise.all([
      firstFetch(),
      secondFetch(),
    ]);
    console.log(firstresult);
    console.log(secondresult);
  } catch (e) {
    console.error(e);
  }
}

concurrentRequests();
