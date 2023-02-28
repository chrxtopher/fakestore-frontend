import axios from "axios";
const BASE_API_URL =
  process.env.REACT_APP_BASE_API_URL || "https://fakestoreapi.com";

export async function getAllProducts() {
  try {
    const products = await axios.get(`${BASE_API_URL}/products`);
    return products.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getOneProduct(productId) {
  try {
    const res = await axios.get(`${BASE_API_URL}/products/${productId}`);
    return res.data;
  } catch (err) {
    console.error(`ERROR :: ${err}`);
  }
}

export async function getCartProducts(productsIdList) {
  const allProducts = await getAllProducts();
  const cartProductsList = [];
  productsIdList.forEach((item) => {
    const found = allProducts.find((product) => {
      return product.id === item.productId;
    });
    found.quantity = item.quantity;
    cartProductsList.push(found);
  });
  return cartProductsList;
}
