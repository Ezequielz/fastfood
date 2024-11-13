import { getMcDonaldData } from "../../../actions/mc-data/get-mcDonald-data";



interface Props {
  params: Promise<{ category: string }>
}

// export async function generateMetadata({ params }: { params: Params }) {
//   const { category } = await params
// }

export default async function OrderCategoryPage({ params }: Props) {
  const { category } = await params;
  const { ok } = await getMcDonaldData()
  console.log(ok)
  return (
    <div>
      <h1>OrderCategoryPage</h1>
      <p>Category: {category}</p>
    </div>
  );
}