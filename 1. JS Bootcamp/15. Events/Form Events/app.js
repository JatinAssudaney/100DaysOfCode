const creditCard = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");
for (let input of [creditCard, termsCheckbox, veggieSelect]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
    console.log(formData);
  });
}
