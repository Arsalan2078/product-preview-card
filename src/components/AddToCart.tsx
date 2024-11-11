function AddToCart() {
  return (
    <button
      className="bg-deep-aquamarine hover:bg-deep-aquamarine-hover flex flex-row justify-center gap-3 rounded-lg py-4"
      aria-label="Add the product to Cart"
    >
      <img src="./images/icon-cart.svg" alt="Add to Cart" />
      <p className="text-preset-button text-pure-white">Add to Cart</p>
    </button>
  );
}

export default AddToCart;
