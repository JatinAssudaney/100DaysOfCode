const addItem = document.querySelector("#addItem");
const ulItems = document.querySelector("#items");
addItem.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) {
      return;
    }
    const li = document.createElement("li");
    li.innerText = this.value;
    this.value = "";
    ulItems.append(li);
  }
});
