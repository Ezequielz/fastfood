
import { CategoryCard } from "./CategoryCard";
import { getCategories } from "@/actions/category/get-categories";

interface Props {
  basic?: boolean
}

export const CategoryList = async ({basic}: Props) => {

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
  const basicCategories = ['hamburguesas', 'postres', 'cajita_feliz','bebidas','ensaladas','mcnuggets','bebidas_mccafe']
  const reduceCategoriesToBasic = categories!.filter( category => basicCategories.includes( category.slug ) )


  const categoriesList = !basic ? categories : reduceCategoriesToBasic


  return (

    <nav
    className="flex justify-center gap-2 px-5 bg-white"

    >
      {
        categoriesList!.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))
      }
    </nav>

  )
}
