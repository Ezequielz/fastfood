import { getCategorieBySlug } from "@/actions/category/get-category-by-slug";

import { Suspense } from "react";
import { ProductsByCategoryList } from "../../components/products/ProductsByCategoryList";



interface Props {
  params: Promise<{ category: string }>
}

// export async function generateMetadata({ params }: { params: Params }) {
//   const { category } = await params
// }

export default async function OrderCategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;

  if (!categorySlug) {
    return (
      <div>
        <span>cargando....</span>
      </div>
    )
  }
  const { ok, category } = await getCategorieBySlug(categorySlug ?? '')

  if (!ok) {
    return (
      <div>
        <p>No existe esa categoria</p>
      </div>
    )
  }


  return (
    <div className="p-5">

      <h2 className="my-5 text-2xl font-bold md:text-3xl">{category!.name}</h2>
      <Suspense fallback={ <div>Cargando...</div> }>

        <ProductsByCategoryList category={category!} />
      </Suspense>
    </div>
  );
}