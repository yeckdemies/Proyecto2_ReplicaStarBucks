import './style.css';
import { products } from './src/list';
import { generarGrid, limpiarGrid } from './src/grid';
import { generaFiltros } from './src/filter';
import {
  filtrarIngredientes,
  filtrarPrecio,
  productsAleatorios
} from './src/utils';
const initApp = () => {
  generarGrid(products);

  const buttonFilter = document.querySelector('#filterButton');
  const select = document.querySelector('#selectIngredientes');
  const inputPrecio = document.querySelector('#price');
  const buttonBuscar = document.querySelector('#buscar');
  const buttonLimpiar = document.querySelector('#limpiar');

  buttonFilter.addEventListener('click', () => {
    select.innerText = '';
    generaFiltros();
  });

  select.addEventListener('change', () => {
    limpiarGrid();
    inputPrecio.value = '';
    const newProducts = filtrarIngredientes(select.value);
    generarGrid(newProducts);
  });

  buttonBuscar.addEventListener('click', () => {
    if (select.value != '') {
      const filtroIngredientes = filtrarIngredientes(select.value);
      if (inputPrecio.value != '') {
        limpiarGrid();
        generarGrid(filtrarPrecio(inputPrecio.value, filtroIngredientes));
      }
    } else {
      limpiarGrid();
      generarGrid(filtrarPrecio(inputPrecio.value, products));
    }
  });

  buttonLimpiar.addEventListener('click', () => {
    limpiarGrid();
    select.value = -1;
    inputPrecio.value = '';
    generarGrid(products);
  });
};

initApp();
