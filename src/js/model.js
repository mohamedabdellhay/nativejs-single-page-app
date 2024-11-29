import product from "./views/product";

export const state = {
  categories: [],
  categoryProducts: [],
  product: null,
  search: {
    query: "",
    results: [],
  },
};

export const getCategories = async function () {
  await fetch("https://dummyjson.com/products/category-list")
    .then((res) => res.json())
    .then((data) => (state.categories = data));
};

export const getProductsByCategory = async function (cat) {
  await fetch(`https://dummyjson.com/products/category/${cat}`)
    .then((res) => res.json())
    .then(({ products: data }) => {
      state.categoryProducts = data.map((ele) => {
        return {
          id: ele.id,
          title: ele.title,
          category: ele.category,
          thumbnail: ele.thumbnail,
          price: ele.price,
          oldPrice: ele.price * (ele.discountPercentage / 100) + ele.price,
          rating: ele.rating,
          stock: ele.stock,
        };
      });
    });
};

export const searchProducts = async (searchTerm) => {
  await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      state.search.results = data.products.map((ele) => {
        return {
          id: ele.id,
          title: ele.title,
          price: ele.price,
          discountPercentage: ele.discountPercentage,
          inStock: ele.stock > 0,
          description: ele.description,
        };
      });
      state.search.query = searchTerm;
    });
};

export const getProductData = async function (id) {
  await fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      state.product = data;
    });
};
