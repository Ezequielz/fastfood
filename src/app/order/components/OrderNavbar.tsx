
import { Suspense } from "react";
import { CategoryList } from "./category/CategoryList";

export const OrderNavbar = async () => {


  return (
   
    <Suspense fallback={<div>Cargando...</div>}>
      <CategoryList />
    </Suspense>

  )
}
