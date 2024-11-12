
interface Props {
    params: {
        category: string
    }
}

export default function OrderCategoryPage({params}: Props) {
    const {category} = params
    console.log(category)
  return (
    <div>
      <h1>OrderCategoryPage</h1>
    </div>
  );
}