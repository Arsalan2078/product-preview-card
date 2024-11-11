import { ProductPreviewCardProps } from "../types";

function ProductDescription({
  productDescription,
}: Pick<ProductPreviewCardProps, "productDescription">) {
  return (
    <p className="product-description text-preset-body text-aurometal-saurus">
      {productDescription}
    </p>
  );
}

export default ProductDescription;
