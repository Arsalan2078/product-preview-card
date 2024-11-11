import { ProductPreviewCardProps } from "../types";

function ProductName({
  productName,
}: Pick<ProductPreviewCardProps, "productName">) {
  return (
    <h1 className="product-name text-preset-display text-gunmetal">
      {productName}
    </h1>
  );
}

export default ProductName;
