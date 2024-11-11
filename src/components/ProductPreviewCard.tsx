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
    <div className="product-preview-card flex max-w-card flex-col items-center justify-center rounded-xl bg-pure-white sm:flex-row">
      <div className="flex flex-1">
        <ProductPicture
          imgDesktop={imgDesktop}
          imgMobile={imgMobile}
          productName={productName}
        />
      </div>

      <div className="flex h-full flex-1">
        <div className="flex flex-col justify-between gap-8 p-8 sm:gap-0">
          <div className="flex flex-col gap-4 sm:gap-5">
            <ProductCategory productCategory={productCategory} />
            <ProductName productName={productName} />
            <ProductDescription productDescription={productDescription} />
          </div>

          <div className="flex flex-col gap-5 sm:gap-6">
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
