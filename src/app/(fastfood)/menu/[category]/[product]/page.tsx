import { ProductToOrder } from "@/app/(fastfood)/menu/components/products/ProductToOrder";
import { Suspense } from "react";
import { ProductToOrderSkeleton } from "../../components/products/ProductToOrderSkeleton";


interface Props {
  params: Promise<{ product: string }>
}

// export async function generateMetadata({ params }: { params: Params }) {
//   const { category } = await params
// }

export default async function OrderProductPAge({ params }: Props) {
  const { product: productSlug } = await params;


  return (
    <Suspense fallback={<ProductToOrderSkeleton />}>
      
      <ProductToOrder productSlug={productSlug} />

    </Suspense>
  );
}