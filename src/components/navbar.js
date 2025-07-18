export function createNavbar(currentPage = "") {
  // Detectar página actual automáticamente si no se proporciona
  if (!currentPage) {
    const path = window.location.pathname;
    const filename = path.split("/").pop().replace(".html", "");
    currentPage = filename === "index" ? "inicio" : filename;
  }

  return `
    <nav class="navbar navbar-expand-lg" style="background: none;">
      <div class="container">
        <!-- Título oculto temporalmente -->
        <span style="display:none;">
          <a class="navbar-brand fw-bold" href="index.html">
            <i class="bi bi-lightning-charge-fill text-warning me-2"></i>
            HÉROES
          </a>
        </span>
        <button 
          class="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list text-white fs-2"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="text-white-50 nav-link ${
                currentPage === "inicio" || currentPage === "index"
                  ? "active text-warning"
                  : ""
              }" 
                 href="index.html">
                <i class="bi bi-house-fill me-1 ${
                  currentPage === "inicio" || currentPage === "index"
                    ? "text-warning"
                    : "text-white-50"
                }"></i>Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="text-white-50 nav-link ${
                currentPage === "spiderman"
                  ? "active text-spiderman-active fw-semibold"
                  : ""
              }" 
                 href="spiderman.html">
                <img src="src/assets/img/spiderman/escudo-spiderman-white.png"
                     alt="Spider-Man Logo"
                     class="navbar-spiderman-logo me-1"
                     style="width: 24px; height: 24px; vertical-align: middle; ${
                       currentPage === "spiderman"
                         ? "filter: drop-shadow(0 0 2px #DF1F2D) brightness(1.2);"
                         : "filter: grayscale(1) brightness(0.7);"
                     }"
                />Spider-Man
              </a>
            </li>
            <li class="nav-item">
              <a class="text-white-50 nav-link ${
                currentPage === "batman"
                  ? "active text-warning fw-semibold"
                  : ""
              }" 
                 href="batman.html">
                <img src="src/assets/img/batman/escudo-batman-white.png"
                     alt="Batman Logo"
                     class="navbar-batman-logo me-1 mb-1"
                     style="width: 24px; height: 24px; vertical-align: middle; ${
                       currentPage === "batman"
                         ? "filter: drop-shadow(0 0 2px #ffc107) brightness(1.2) sepia(1) hue-rotate(-20deg) saturate(5);"
                         : "filter: grayscale(1) brightness(0.7);"
                     }"
                />Batman
              </a>
            </li>
            <li class="nav-item">
              <a class="text-white-50 nav-link ${
                currentPage === "thor"
                  ? "active text-thor-active fw-semibold"
                  : ""
              }" 
                 href="thor.html">
                <img src="src/assets/img/thor/thorLogo.png"
                     alt="Thor Logo"
                     class="navbar-thor-logo me-1 mb-1"
                     style="width: 24px; height: 24px; vertical-align: middle; ${
                       currentPage === "thor"
                         ? "filter: drop-shadow(0 0 2px #d3d3d3) brightness(1.2) sepia(1) hue-rotate(0deg) saturate(5);"
                         : "filter: grayscale(1) brightness(0.7);"
                     }"
                />Thor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

// Función para inicializar el navbar automáticamente
export function initNavbar(containerId = "navbar-container") {
  document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById(containerId);
    if (navbarContainer) {
      navbarContainer.innerHTML = createNavbar();

      // Agregar clase active dinámicamente después de cargar
      const currentPath = window.location.pathname;
      const currentFile = currentPath.split("/").pop();

      // Remover todas las clases active
      navbarContainer.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });

      // Agregar clase active al link correspondiente
      navbarContainer.querySelectorAll(".nav-link").forEach((link) => {
        const href = link.getAttribute("href");
        if (
          href === currentFile ||
          (currentFile === "" && href === "index.html")
        ) {
          link.classList.add("active");
        }
      });
    }
  });
}
