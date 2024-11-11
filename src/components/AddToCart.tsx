function AddToCart() {
  return (
    <button
      className="flex flex-row justify-center gap-3 rounded-lg bg-deep-aquamarine py-4 hover:bg-deep-aquamarine-hover"
      aria-label="Add the product to Cart"
    >
      <img src="./images/icon-cart.svg" alt="Cart icon" />
      <span className="text-preset-button text-pure-white">Add to Cart</span>
    </button>
  );
}

export default AddToCart;
