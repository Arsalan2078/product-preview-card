import { ProductPreviewCardProps } from "../types";

function ProductDescription({
  productDescription,
}: Pick<ProductPreviewCardProps, "productDescription">) {
  return <p className="product-description">{productDescription}</p>;
}

export default ProductDescription;
