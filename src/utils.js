import { products } from './list';

const eliminarDuplicados = (param) => {
  for (let i = 0; i < param.length; i++) {
    const primerPuntero = param[i];
    for (let j = i + 1; j < param.length; j++) {
      const segundoPuntero = param[j];
      if (primerPuntero === segundoPuntero) {
        param.splice(j, 1);
        j--;
      }
    }
  }
};

const extraerIngredientes = (productList) => {
  const ingredientes = [];
  productList.forEach((product) => {
    for (let i = 0; i < product.ingredientes.length; i++) {
      ingredientes.push(product.ingredientes[i]);
    }
  });
  eliminarDuplicados(ingredientes);
  return ingredientes;
};
const ingredientes = extraerIngredientes(products);

const filtrarIngredientes = (element) => {
  const newListProduct = [];
  for (const product of products) {
    for (let i = 0; i < product.ingredientes.length; i++) {
      if (product.ingredientes[i].includes(element)) {
        newListProduct.push(product);
      }
    }
  }
  return newListProduct;
};

const filtrarPrecio = (element, listProductActive) => {
  const newListProduct = [];
  for (const product of listProductActive) {
    if (product.price <= element) {
      newListProduct.push(product);
    }
  }
  return newListProduct;
};

const productsAleatorios = (listProduct, cantidad) => {
  const elementosAleatorios = [];

  const copiaArray = listProduct.slice();

  for (let i = 0; i < cantidad; i++) {
    const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
    elementosAleatorios.push(copiaArray.splice(indiceAleatorio, 1)[0]);
  }

  return elementosAleatorios;
};

export { ingredientes, filtrarIngredientes, filtrarPrecio, productsAleatorios };
