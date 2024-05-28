import { ingredientes } from './utils';
import { generarGrid } from './grid';
import { products } from './list';
import { limpiarGrid } from './grid';

const select = document.querySelector('#selectIngredientes');
const inputPrecio = document.querySelector('#price');

const generaFiltros = () => {
  if (inputPrecio.value != '' || select.value != '') {
    limpiarGrid();
    select.value = -1;
    inputPrecio.value = '';
  }

  ingredientes.forEach((ingrediente) => {
    const option = document.createElement('option');
    option.innerText = ingrediente;
    select.append(option);
  });

  select.selectedIndex = -1;

  const filter = document.querySelector('#filter');
  filter.classList.toggle('hidden');

  if (filter.classList[1] == 'hidden') {
    limpiarGrid();
    select.selectedIndex = -1;
    inputPrecio.value = '';
    generarGrid(products);
  }
};

export { generaFiltros };
