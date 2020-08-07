// Basic Promise Example
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});
willGetYouADog.then(() => {
  console.log("Yay!! WE GOT A DOG");
});
willGetYouADog.catch(() => {
  console.log(":(");
});
