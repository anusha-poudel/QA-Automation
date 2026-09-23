//Q25. Predict the Output (Event Loop)
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
//output: A D C B -synchronous tasks run first, then microtasks (Promises) and finally macrotasks (setTimeout) run


//Q26. Delay Function (Promise)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
delay(10000).then(() => console.log("Hi"));


//Q27. Rewrite with async/await
async function run() {
  console.log('Start');
  await delay(1000);
  console.log('End');
}
run();


//Q28. Simulated Fetch
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: 'User' + id }), 500);
  });
}
async function getUser() {
  const user = await fetchUser(1);
  console.log(user);
}
getUser();


//Q29. Run in Parallel (Promise.all)
async function loadAll() {
  const users = await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
  console.log(users);
}

loadAll();


//Q30. Handle a Rejection
function riskyFetch() {
  return new Promise((resolve, reject) => reject(new Error("Network failed")));
}

async function safe() {
  try {
    await riskyFetch();
  } catch (err) {
    console.log('Caught:', err.message);
  }
}

safe();


//Q31. Timeout Wrapper
function timeoutPromise(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timed out'));
    }, ms);
  });
}
function withTimeout(promise, ms) {
  return Promise.race([promise, timeoutPromise(ms)]);
}
try {
    await withTimeout(delay(3000), 1000);
  } catch (err) {
    console.log('withTimeout rejected:', err.message);
  }


//Q32. Retry with Recovery
async function retry(fn, times) {
  let error;
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (err) {
      error = err;
      console.log(`Attempt ${i + 1} failed ${err.message}`);
    }
  }
  throw error;
}

let counter = 0;
async function flakyFetch() {
  counter++;
  if (counter < 3) {
    throw new Error("Temporary glitch");
  }
  return `Successful on attempt number: ${counter} `;
}

retry(flakyFetch, 3)
  .then((result) => console.log("Result:", result))
  .catch((error) => console.log(`Error: ${error.message}`));

