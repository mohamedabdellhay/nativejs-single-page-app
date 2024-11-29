import View from "../view.js";

class Header extends View {
  _parentElement = document.querySelector(".navbar-nav");

  render(data) {
    this._data = data;
    const markup = this.markup();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  markup() {
    return `${this._data.slice(0, 3).map(this.generateMarkup).join("")} 
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#"
            id="navbarDropdown" role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            More Categories
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            ${this._data.slice(3).map(this.generateDropDown).join("")}
             </ul>
    </li>
    `;
  }
  generateMarkup(ele) {
    return `
        <li class="nav-item"><a class="nav-link category" href="category/${ele}">${ele}</a></li>
    `;
  }
  generateDropDown(element) {
    return `<li><a class="dropdown-item category" href="category/${element}">${element}</a></li>`;
  }

  addHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("category")) {
        const clickedCategory = e.target.textContent;
        handler(clickedCategory);
      }
    });
  }
}

export default new Header();
