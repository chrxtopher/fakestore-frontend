import axios from "axios";
const BASE_API_URL =
  process.env.REACT_APP_BASE_API_URL || "https://fakestoreapi.com";

export async function getOneProduct(productId) {
  try {
    const res = await axios.get(`${BASE_API_URL}/products/${productId}`);
    return res.data;
  } catch (err) {
    console.error(`ERROR :: ${err}`);
  }
}

export async function getCartProducts(productsIdList) {
  const productsList = [];
  for (let i = 0; i < productsIdList.length; i++) {
    const product = await getOneProduct(productsIdList[i].productId);
    productsList.push(product);
  }

  return productsList;
}
