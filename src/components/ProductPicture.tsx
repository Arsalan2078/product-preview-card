import { ProductPreviewCardProps } from "../types";

function ProductPicture({
  imgDesktop,
  imgMobile,
  productName,
}: Pick<ProductPreviewCardProps, "imgDesktop" | "imgMobile" | "productName">) {
  return (
    <picture className="product-picture">
      <source srcSet={imgDesktop} media="(min-width: 40rem)" />
      <img src={imgMobile} alt={`Image of ${productName}`} />
    </picture>
  );
}

export default ProductPicture;
