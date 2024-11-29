import View from "../view.js";

class CategoryProducts extends View {
  markup() {
    return `
    <section style="background-color: #eee;">
        <div class="container py-5">
            <div class="row" style="gap: 10px 0">
                ${this._data.map(this.generateMarkup).join("")}
            </div>
        </div>
        </section>
    
    `;
  }
  generateMarkup(ele) {
    return `
    
        <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
              
                  <div class="card">
                <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0">Today's Combo Offer</p>
                    <div
                    class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style="width: 35px; height: 35px;">
                    <p class="text-white mb-0 small">x4</p>
                    </div>
                </div>
                <img src="${
                  ele.thumbnail
                }" style="height:250px" class="card-img-top" alt="Laptop" />
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                    <p class="small"><a href="#!" class="text-muted">${
                      ele.category
                    }</a></p>
                    <p class="small text-danger"><s>$${ele.oldPrice.toFixed(
                      2
                    )}</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                    <a href="product/${ele.title.replaceAll(" ", "-")}/${
      ele.id
    }" data-id='${ele.id}' style="text-decoration: none" class="product-link">
                    <h5 class="mb-0" style='overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;height: 43px;font-weight: normal;color: #000;'>${
                      ele.title
                    }</h5></a>
                    <h5 class="text-dark mb-0">$${ele.price}</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">Available: <span class="fw-bold">${
                      ele.stock
                    }</span></p>
                    <div class="ms-auto text-warning">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                
    `;
  }

  addHandler(handler) {
    this._parentElement.addEventListener("click", function (event) {
      event.preventDefault();
      const clickedElement = event.target.closest(".product-link");
      console.log(clickedElement);
      if (clickedElement) {
        handler(clickedElement.dataset.id);
      }
    });
  }
}

export default new CategoryProducts();
