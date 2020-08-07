const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const container = document.querySelector("#boxes");
const changeColor = function () {
  const h1 = document.querySelector("h1");
  // THE MOST IMPORTANT THING IS THAT WHENEVER WE CALL A FUNCTION
  // 'this' contains the value of the element which it is called on
  // HERE THE VALUE OF 'this' is of box
  h1.style.color = this.style.backgroundColor;
};
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.append(box);
  box.addEventListener("click", changeColor);
}
