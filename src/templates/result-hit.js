const resultHit = (hit, { html, sendEvent }) => {
  return html`<a
    onClick="${() => sendEvent('click', hit, 'Product Clicked')}"
    class="result-hit"
  >
    <div class="result-hit__image-container">
      <img class="result-hit__image" src="${hit.image}" />
    </div>
    <div class="result-hit__details">
      <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
      <p class="result-hit__price">$${hit.price}</p>
    </div>
    <div class="result-hit__controls">
      <button
        id="view-item"
        class="result-hit__view"
        onClick="${(event) => {
          event.stopPropagation();
          sendEvent('click', hit, 'Product Viewed');
          console.log('Product Viewed');
        }}"
      >
        View
      </button>
      <button
        id="add-to-cart"
        class="result-hit__car"
        onClick="${(event) => {
          event.stopPropagation();
          sendEvent('conversion', hit, 'Added To Cart', {
            // Special subtype
            eventSubtype: 'addToCart',
            // An array of objects representing each item added to the cart
            objectData: [
              {
                // The discount value for this item, if applicable
                discount: hit.discount || 0,
                // The price value for this item (minus the discount)
                price: hit.price,
                // How many of this item were added
                quantity: 1,
              },
            ],
            // The total value of all items
            value: hit.price,
            // The currency code
            currency: 'USD',
          });
          console.log('Product Added to Cart');
        }}"
      >
        Add To Cart
      </button>
    </div>
  </a>`;
};

export default resultHit;
