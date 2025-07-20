import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/style.css";

// Navbar activo según página
const currentPage = window.location.pathname
  .split("/")
  .pop()
  .replace(".html", "");
document.querySelectorAll(".navbar-nav a").forEach((link) => {
  if (link.getAttribute("href").includes(currentPage)) {
    link.classList.add("active");
  }
});

// Modal dinámico
document.addEventListener("DOMContentLoaded", function () {
  const exampleModal = document.getElementById("exampleModal");
  if (exampleModal) {
    exampleModal.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget;
      const modalTitle = button?.getAttribute("data-bs-title");
      const modalBody = button?.getAttribute("data-bs-body");
      const modalTitleElement = exampleModal.querySelector(".modal-title");
      const modalBodyElement = exampleModal.querySelector(".modal-body");
      if (modalTitleElement && modalTitle)
        modalTitleElement.innerHTML = modalTitle;
      if (modalBodyElement && modalBody) modalBodyElement.innerHTML = modalBody;
    });
  }
});
