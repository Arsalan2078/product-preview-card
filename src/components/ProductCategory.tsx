import { ProductPreviewCardProps } from "../types";

function ProductCategory({
  productCategory,
}: Pick<ProductPreviewCardProps, "productCategory">) {
  return (
    <p className="product-category text-aurometal-saurus text-preset-overline uppercase">
      {productCategory}
    </p>
  );
}

export default ProductCategory;
