const startGame = () => {
  let counter = 0;
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    counter++;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (counter > 5) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

startGame()
  .then(() => {
    alert(`You WON!!`);
  })
  .catch(() => {
    alert("You LOST");
  });
