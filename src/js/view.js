export default class View {
  _parentElement = document.getElementById("search-result");
  _data;

  render(data) {
    // assign_data to the instance
    this._data = data;
    // clear the parent element
    this.clear();
    this._parentElement.closest(".container").style.placeItems = "baseline";
    // make element visible
    this._parentElement.classList.remove("visually-hidden");
    // render the spinner
    this._parentElement.insertAdjacentHTML("beforeend", this.renderSpinner());
    this.clear();
    console.log(this._data);
    // render the product
    this._parentElement.insertAdjacentHTML("beforeend", this.markup());
  }
  clear() {
    this._parentElement.innerHTML = "";
  }
  markup() {}

  renderSpinner() {
    return `
      <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `;
  }
}
