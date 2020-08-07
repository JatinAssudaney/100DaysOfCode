const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  root.innerHTML = `
        <label><b>Search</b></label>
        <input class="input" />
        <div class = "dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results">
                </div>
            </div>
        </div>
    `;
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = async (event) => {
    const items = await fetchData(event.target.value);
    if (!items.length) {
      // If we remove the search term we should also remove the dropdown
      dropdown.classList.remove("is-active");
      return;
    }
    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active"); // TO SHOW THE DROPDOWN MENU : REFER BULMA.CSS
    for (let item of items) {
      const option = document.createElement("a");
      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(item);
      option.addEventListener("click", (event) => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        onOptionSelect(item);
      });
      resultsWrapper.appendChild(option);
    }
  };

  input.addEventListener("input", debounce(onInput, 500));

  // TO CLOSE THE DROPDOWN WHEN USER CLICKS ANYWHERE ELSE EXCEPT THE SEARCH PART
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
