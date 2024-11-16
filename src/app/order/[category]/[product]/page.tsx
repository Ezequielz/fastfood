import { Suspense } from "react";
import { ProductToOrder } from "../../components/products/ProductToOrder";

interface Props {
  params: Promise<{ product: string }>
}

// export async function generateMetadata({ params }: { params: Params }) {
//   const { category } = await params
// }

export default async function OrderCategoryPage({ params }: Props) {
  const { product: productSlug } = await params;


  return (
    <Suspense fallback={<div>Cargando...</div>}>

      <ProductToOrder productSlug={productSlug} />

    </Suspense>
  );
}