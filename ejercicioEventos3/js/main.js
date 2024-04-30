
      function addProduct() {
        // Obtener los valores del formulario
        const productName = document.getElementById('productName').value;
        const productDescription =
          document.getElementById('productDescription').value;
        const productPrice = document.getElementById('productPrice').value;
        const productCategory =
          document.getElementById('productCategory').value;
        const productImageUrl =
          document.getElementById('productImageUrl').value;

        // Crear la tarjeta (card)
        const card = document.createElement('div');
        card.classList.add(
          'card',
          'col-3',
          'row',
          'd-flex',
          'justify-content-between'
        );
        card.style.width = '18rem';

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = productImageUrl;
        img.alt = productName;
        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = productName;
        cardBody.appendChild(title);

        const price = document.createElement('p');
        price.classList.add('card-text');
        price.textContent = 'Precio: ' + productPrice;
        cardBody.appendChild(price);

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = 'Descripción: ' + productDescription;
        cardBody.appendChild(description);

        card.appendChild(cardBody);

        // Agregar la tarjeta a la lista de productos
        const productList = document.getElementById('productsList');
        productList.appendChild(card);
      }
