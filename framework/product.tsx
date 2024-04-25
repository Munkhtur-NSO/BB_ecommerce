export async function getAllProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Уучлаарай алдаа гарлаа:", error);
  }
}

export async function getSingleProduct(id: any) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Уучлаарай алдаа гарлаа:", error);
  }
}

export async function getAllCategories() {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/categories`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Уучлаарай алдаа гарлаа:", error);
  }
}

export async function getProductCategory(code: string) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${code}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const category = await response.json();
    return category;
  } catch (error) {
    console.error("Уучлаарай алдаа гарлаа:", error);
  }
}
