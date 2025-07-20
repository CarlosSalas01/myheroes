import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/inicio.css";
import { commonConfig } from "../config/common.js";
import { initNavbar } from "../components/navbar.js";

// Función para configurar el head de cualquier página
export function setupPage(pageTitle, currentPage = "") {
  // Configurar título
  document.title = pageTitle;

  // Configurar meta tags
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute("content", commonConfig.meta.viewport);
  }

  // Cargar fuentes
  const link = document.createElement("link");
  link.href = commonConfig.fonts.lato;
  link.rel = "stylesheet";
  document.head.appendChild(link);

  // Cargar iconos de Bootstrap
  const iconLink = document.createElement("link");
  iconLink.href = commonConfig.icons.bootstrap;
  iconLink.rel = "stylesheet";
  document.head.appendChild(iconLink);

  // Configurar preconnect para optimización
  commonConfig.fonts.preconnect.forEach((url) => {
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = url;
    if (url.includes("gstatic")) preconnect.crossOrigin = "anonymous";
    document.head.appendChild(preconnect);
  });

  // Inicializar navbar automáticamente
  initNavbar();

  return currentPage;
}

// Configuración común de modales
export function setupModalFunctionality() {
  document.addEventListener("DOMContentLoaded", function () {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.addEventListener("show.bs.modal", function (event) {
        const button = event.relatedTarget;
        const modalTitle = button?.getAttribute("data-bs-title");
        const modalBody = button?.getAttribute("data-bs-body");

        const titleElement = modal.querySelector(".modal-title");
        const bodyElement = modal.querySelector(".modal-body");

        if (titleElement && modalTitle) {
          titleElement.innerHTML = modalTitle;
        }
        if (bodyElement && modalBody) {
          bodyElement.innerHTML = modalBody;
        }
      });
    });
  });
}
