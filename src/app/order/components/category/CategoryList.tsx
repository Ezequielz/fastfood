
import { CategoryCard } from "./CategoryCard";
import { getCategories } from "@/actions/category/get-categories";



export const CategoryList = async() => {

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
        <nav className="mt-10 grid grid-cols-10 px-72">
            {
                categories!.map(category => (
                    <CategoryCard key={category.id} category={category}/>
                ))
            }
        </nav>
    )
}
