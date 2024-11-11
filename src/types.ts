export interface ProductPreviewCardProps {
  imgDesktop: string;
  imgMobile: string;
  productCategory: string;
  productName: string;
  productDescription: string;
  productPrice: {
    original: number;
    discounted: number;
  };
}
