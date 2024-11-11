import ProductPreviewCard from "./components/ProductPreviewCard";

function App() {
  return (
    <>
      <ProductPreviewCard
        imgDesktop="./images/image-product-desktop.jpg"
        imgMobile="./images/image-product-mobile.jpg"
        productCategory="perfume"
        productName="Gabrielle Essence Eau De Parfum"
        productDescription="  A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        productPrice={{ original: 169.99, discounted: 149.99 }}
      />
    </>
  );
}

export default App;
