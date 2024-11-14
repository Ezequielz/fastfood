import { ProductToCart } from "../../components/products/ProductToCart";

interface Props {
    params: Promise<{ product: string }>
  }
  
  // export async function generateMetadata({ params }: { params: Params }) {
  //   const { category } = await params
  // }
  
  export default async function OrderCategoryPage({ params }: Props) {
    const { product : productSlug } = await params;


    return (
        <ProductToCart productSlug={productSlug}/> 
      );
  }