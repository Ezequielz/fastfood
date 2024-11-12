import { getCategories } from "@/actions/category/get-categories"
import { CategoryIcon } from "./ui/CategoryIcon";

export const OrderSidebar = async () => {
  const { ok, categories } = await getCategories();

  if (!ok) {
    return (
      <aside className="md:w-72 md:h-screen bg-white">
        <div className="p-5">
          <p>No hay categorias</p>
        </div>
      </aside>
    )
  }

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <nav className="mt-10">
        {
          categories!.map(category => (
            <CategoryIcon 
              key={category.id}
              category={category}
            />
          ))
        }
      </nav>
    </aside>
  )
}
