import { ProductPreviewCardProps } from "../types";

function ProductName({
  productName,
}: Pick<ProductPreviewCardProps, "productName">) {
  return (
    <h2 className="product-name text-preset-display text-gunmetal">
      {productName}
    </h2>
  );
}

export default ProductName;
