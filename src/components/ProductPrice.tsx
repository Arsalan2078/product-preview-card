import { ProductPreviewCardProps } from "../types";
import FormatCurrency from "./FormatCurrency";

function ProductPrice({
  original,
  discounted,
}: ProductPreviewCardProps["productPrice"]) {
  return (
    <div className="product-price">
      <p className="price-original">{FormatCurrency(original)}</p>
      <p className="price-discounted">{FormatCurrency(discounted)}</p>
    </div>
  );
}

export default ProductPrice;
