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
    <div className="product-preview-card bg-pure-white max-w-card flex flex-col items-center justify-center rounded-xl sm:flex-row">
      <div className="flex-1">
        <ProductPicture
          imgDesktop={imgDesktop}
          imgMobile={imgMobile}
          productName={productName}
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-grow flex-col gap-6 p-8">
          <div className="flex flex-col gap-4">
            <ProductCategory productCategory={productCategory} />
            <ProductName productName={productName} />
            <ProductDescription productDescription={productDescription} />
          </div>

          <div className="flex flex-col gap-5">
            <ProductPrice
              original={productPrice.original}
              discounted={productPrice.discounted}
            />

            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreviewCard;
