
import { formatText } from '../src/utils/formatSlug';
import prisma from '../src/lib/prisma';
import { initialData } from './data/seed-database';


async function main() {

    const { categories, products } = initialData;
    try {
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();

        const categoryWhitSlugFormated = categories.map(category => ({
            ...category,
            slug: formatText(category.slug)
        })
        )

        await prisma.category.createMany({
            data: categoryWhitSlugFormated
        })
        const categoriesDB = await prisma.category.findMany();
     

        const categoriesMap = categoriesDB.reduce((map, category) => {
            map[category.slug.toLowerCase()] = category.id;
            return map;
        }, {} as Record<string, string>);;


        products.forEach(async (product) => {

            const { category, ...rest } = product

            await prisma.product.create({
                data: {
                    ...rest,
                    slug: formatText(product.name),
                    categoryId: categoriesMap[formatText(category)]
                }
            })

        });


    } catch (error) {
        console.log(error)
    }
}



(() => {

    if (process.env.NODE_ENV === 'production') return;


    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
})();

