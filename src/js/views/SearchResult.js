class SearchResult {
  #parentElement = document.getElementById("search-result");
  #data;
  render(data) {
    this.#data = data;
    this.clear();
    this.#parentElement.closest(".container").style.placeItems = "baseline";
    console.log(this.#parentElement.classList);
    this.#parentElement.classList.remove("visually-hidden");
    console.log(this.#parentElement.classList);
    this.#parentElement.insertAdjacentHTML("beforeend", this.renderSpinner());
    this.clear();
    console.log(this.#data);
    this.#parentElement.insertAdjacentHTML("beforeend", this.markup());
  }
  clear() {
    this.#parentElement.innerHTML = "";
  }
  markup() {
    const html = this.#data.map(this.generateMarkup).join("");
    return `<div style='display: flex;flex-direction: column;gap: 15px;margin-top: 20px;'>
      ${html}
    </div>`;
  }
  generateMarkup(element) {
    return `
      <a href="product/${element.id}" data-id='${element.id}' class="product-link">
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <p class="card-text"><small class="text-muted">${element.price}</small></p>
        </div>
      </div>
      </a>
    `;
  }
  renderSpinner() {
    return `
      <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `;
  }
}

export default new SearchResult();
