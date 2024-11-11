import { ProductPreviewCardProps } from "../types";

function ProductName({
  productName,
}: Pick<ProductPreviewCardProps, "productName">) {
  return <h2 className="product-name">{productName}</h2>;
}

export default ProductName;
