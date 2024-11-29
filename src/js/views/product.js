import View from "../view.js";

class Product extends View {
  _parentElement = document.getElementById("search-result");
  _data;
  markup() {
    return `
    <style>
        .product-image {
            max-height: 400px;
            object-fit: cover;
        }
        .thumbnail {
            /* width: 80px;*/
            height: 80px;
            object-fit: cover;
            cursor: pointer;
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }
        .thumbnail:hover, .thumbnail.active {
            opacity: 1;
        }
    </style>
        <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">-->

<div class="container mt-5">
    <div class="row">
        <!-- Product Images -->
        <div class="col-md-6 mb-4">
            <img src='${
              this._data.images[0]
            }' alt="Product" class="img-fluid rounded mb-3 product-image" id="mainImage">
            <div class="d-flex justify-content-between">
                 ${
                   this._data.images.length > 0
                     ? this._data.images
                         .map(
                           (ele) =>
                             `<img src=${ele} alt="Thumbnail 2" class="thumbnail rounded">`
                         )
                         .join("")
                     : ""
                 }
            </div>
        </div>

        <!-- Product Details -->
        <div class="col-md-6">
            <h2 class="mb-3">${this._data.title}</h2>
            <p class="text-muted mb-4">SKU: ${this._data.sku}</p>
            <div class="mb-3">
                <span class="h4 me-2">$${this._data.price}</span>
                <span class="text-muted"><s>$${(
                  this._data.price * (this._data.discountPercentage / 100) +
                  this._data.price
                ).toFixed(2)}</s></span>
            </div>
            <div class="mb-3">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-half text-warning"></i>
                <span class="ms-2">${this._data.rating} (120 reviews)</span>
            </div>
            <p class="mb-4">${this._data.description}</p>
            <div class="mb-4">
                <h5>Color:</h5>
                <div class="btn-group" role="group" aria-label="Color selection">
                    <input type="radio" class="btn-check" name="color" id="black" autocomplete="off" checked>
                    <label class="btn btn-outline-dark" for="black">Black</label>
                    <input type="radio" class="btn-check" name="color" id="silver" autocomplete="off">
                    <label class="btn btn-outline-secondary" for="silver">Silver</label>
                    <input type="radio" class="btn-check" name="color" id="blue" autocomplete="off">
                    <label class="btn btn-outline-primary" for="blue">Blue</label>
                </div>
            </div>
            <div class="mb-4">
                <label for="quantity" class="form-label">Quantity:</label>
                <input type="number" class="form-control" id="quantity" value="1" min="1" style="width: 80px;">
            </div>
            <button class="btn btn-primary btn-lg mb-3 me-2">
                    <i class="bi bi-cart-plus"></i> Add to Cart
                </button>
            <button class="btn btn-outline-secondary btn-lg mb-3">
                    <i class="bi bi-heart"></i> Add to Wishlist
                </button>
            <div class="mt-4">
                <h5>Key Features:</h5>
                <ul>
                    <li>Industry-leading noise cancellation</li>
                    <li>30-hour battery life</li>
                    <li>Touch sensor controls</li>
                    <li>Speak-to-chat technology</li>
                </ul>
            </div>
        </div>
    </div>
</div>



     <scrip>
        
    </scrip>

    `;
  }
  generateMarkup(element) {
    return `
      <a href="product/${element.id}" target="_blank" rel="noopener noreferrer">
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

  addHandler(handler) {
    this._parentElement.addEventListener("click", function (event) {
      event.preventDefault();
      const clickedElement = event.target.closest("a");
      if (clickedElement) {
        handler(clickedElement.dataset.id);
      }
    });
  }
}

export default new Product();
