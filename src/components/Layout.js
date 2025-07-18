import { createNavbar } from "./navbar.js";

export class Layout {
  constructor(currentPage) {
    this.currentPage = currentPage;
  }
  render() {
    const navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer) {
      navbarContainer.innerHTML = createNavbar(this.currentPage);
    }
  }
}
