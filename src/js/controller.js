// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import {
  getCategories,
  getProductsByCategory,
  searchProducts,
  getProductData,
  state,
} from "./model.js";
import SearchInput from "./views/searchInput.js";
import SearchResult from "./views/SearchResult.js";
import Product from "./views/product.js";
import Header from "./views/header.js";
import categoryProducts from "./views/categoryProducts.js";

//
const searchResult = async function (event) {
  event.preventDefault();
  const data = event.target[0].value.trim();
  await searchProducts(data);
  console.log(SearchResult);
  SearchResult.render(state.search.results);
  console.log(state.search.results);
  Product.addHandler(async function (id) {
    await getProductData(id);
    // update url
    console.log(window.history);
    history.pushState(
      "",
      "",
      `product/${state.product.title}/${state.product.id}`
    );
    Product.render(state.product);
  });
};

const renderCategory = async function (cat) {
  await getProductsByCategory(cat);
  console.log(cat);
  console.log(state.categoryProducts);
  categoryProducts.render(state.categoryProducts);
  categoryProducts.addHandler(async function (id) {
    await getProductData(id);
    Product.render(state.product);
  });
};
const init = async function () {
  await getCategories();
  console.log(state.categories);
  Header.render(state.categories);
};

init();
Header.addHandler(renderCategory);

SearchInput.addHandler(searchResult);
