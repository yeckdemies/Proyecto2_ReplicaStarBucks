import { products } from './list';
import { productsAleatorios } from './utils';

const sectionCafeGrid = document.querySelector('.cafeGrid');
const filter = document.querySelector('#filter');
const section = document.createElement('section');

const generarGrid = (productList) => {
  if (productList == '') {
    section.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.classList.add('product-title', 'full-width');
    h2.innerText = `No hay resultados con los filtros seleccionados`;
    h2.style.marginLeft = '10px';
    section.append(h2);
    filter.parentNode.insertBefore(section, filter.nextSibling);
    productList = productsAleatorios(products, 3);
  }

  productList.forEach((product) => {
    const article = document.createElement('article');
    article.className = 'product';

    const img = document.createElement('img');
    img.src = product.image;

    img.alt = product.name;
    img.className = 'product-img';

    const div = document.createElement('div');
    div.className = 'product-text-container';

    const h2 = document.createElement('h2');
    h2.className = 'product-title';
    h2.innerText = product.name;

    const p = document.createElement('p');
    p.className = 'product-text';
    p.innerText = product.description;

    const price = document.createElement('h2');
    price.className = 'product-title';
    price.innerText = `Precio: ${product.price} €`;

    const spanToolTip = document.createElement('span');
    spanToolTip.className = 'tooltiptext';
    spanToolTip.innerText = `Ingredientes: ${product.ingredientes.join(', ')}`;

    article.addEventListener('mouseenter', () => {
      spanToolTip.classList.add('show');
    });

    article.addEventListener('mouseleave', () => {
      spanToolTip.classList.remove('show');
    });

    div.append(img, h2, p, price, spanToolTip);

    article.append(div);
    sectionCafeGrid.append(article);
  });
};

const limpiarGrid = () => {
  section.remove();
  sectionCafeGrid.innerHTML = '';
};

export { generarGrid, limpiarGrid };
