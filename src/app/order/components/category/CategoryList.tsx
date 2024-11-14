
import { CategoryCard } from "./CategoryCard";
import { getCategories } from "@/actions/category/get-categories";



export const CategoryList = async () => {

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

    <nav className="mt-10 ">

      <div
        className="grid gap-4 m-auto px-6"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 2fr))' }}
      >
        {
          categories!.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))
        }
      </div>
    </nav>
  )
}
