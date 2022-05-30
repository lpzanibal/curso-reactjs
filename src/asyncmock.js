const products = [
  {
    id: 1,
    title: "iphone 12",
    price: 1000,
    category: "celular",
    pictureUrl:
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: 2,
    title: "samsung s21",
    price: 800,
    category: "celular",
    pictureUrl:
      "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG",
    stock: 16,
    description: "Descripcion de Samsung s21",
  },
  {
    id: 3,
    title: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    pictureUrl:
      "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 10,
    description: "Descripcion de Ipad",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 2000);
  });
};
