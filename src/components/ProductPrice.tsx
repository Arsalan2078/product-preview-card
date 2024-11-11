import { ProductPreviewCardProps } from "../types";
import FormatCurrency from "./FormatCurrency";

function ProductPrice({
  original,
  discounted,
}: ProductPreviewCardProps["productPrice"]) {
  return (
    <div className="product-price flex flex-row items-center gap-5">
      <p className="price-discounted text-preset-display text-deep-aquamarine">
        {FormatCurrency(discounted)}
      </p>
      <p className="price-original text-preset-body text-aurometal-saurus line-through">
        {FormatCurrency(original)}
      </p>
    </div>
  );
}

export default ProductPrice;
