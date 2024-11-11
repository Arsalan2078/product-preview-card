import { ProductPreviewCardProps } from "../types";
import ProductPicture from "./ProductPicture";
import ProductCategory from "./ProductCategory";
import ProductName from "./ProductName";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import AddToCart from "./AddToCart";

function ProductPreviewCard({
  imgDesktop,
  imgMobile,
  productCategory,
  productName,
  productDescription,
  productPrice,
}: ProductPreviewCardProps) {
  return (
    <div className="product-preview-card">
      <ProductPicture
        imgDesktop={imgDesktop}
        imgMobile={imgMobile}
        productName={productName}
      />

      <ProductCategory productCategory={productCategory} />
      <ProductName productName={productName} />
      <ProductDescription productDescription={productDescription} />
      <ProductPrice
        original={productPrice.original}
        discounted={productPrice.discounted}
      />

      <AddToCart />
    </div>
  );
}

export default ProductPreviewCard;
