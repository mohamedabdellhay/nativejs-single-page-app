class SearchInput {
  #parentElement = document.getElementById("search");

  addHandler(handler) {
    console.log(this.#parentElement);
    this.#parentElement.addEventListener("submit", handler);
  }
}

export default new SearchInput();
