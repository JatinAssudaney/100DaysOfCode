const backdrop = document.querySelector(".backdrop");
const planButton = document.querySelectorAll(".plan button");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (let btn of planButton) {
  btn.addEventListener("click", () => {
    modal.classList.add("open");
    backdrop.classList.add("open");
    // modal.style.display = "block";
    // backdrop.style.display = "block";
  });
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  // backdrop.style.display = "none";
  // modal.style.display = "none";
}
