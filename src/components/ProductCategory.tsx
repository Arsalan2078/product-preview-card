import { ProductPreviewCardProps } from "../types";

function ProductCategory({
  productCategory,
}: Pick<ProductPreviewCardProps, "productCategory">) {
  return <p className="product-category">{productCategory}</p>;
}

export default ProductCategory;
