/* eslint-disable @typescript-eslint/no-explicit-any */

import { formatText } from '../src/utils/formatSlug';
import prisma from '../src/lib/prisma';
import { initialData } from './data/seed-database';

async function main() {
  const { categories, products } = initialData;

  try {
    await prisma.orderProductOption.deleteMany();
    await prisma.orderProducts.deleteMany();
    await prisma.order.deleteMany();

    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.optionsGroup.deleteMany();
    await prisma.option.deleteMany();
 

    // Formateo de slug de categorías
    const categoryWithSlugFormatted = categories.map((category) => ({
      ...category,
      slug: formatText(category.name),
    }));

    // Creación de categorías
    await prisma.category.createMany({
      data: categoryWithSlugFormatted,
    });

    // Obtiene las categorías para mapear sus IDs
    const categoriesDB = await prisma.category.findMany();
    const categoriesMap = categoriesDB.reduce((map, category) => {
      map[category.slug.toLowerCase()] = category.id;
      return map;
    }, {} as Record<string, string>);

    // Creación de productos con grupos de opciones y opciones
    await Promise.all(
      products.map(async (product) => {
        const { category, optionsGroups, ...rest } = product;

        const prodCreated = await prisma.product.create({
          data: {
            ...rest,
            slug: formatText(product.name, product.category),
            categoryId: categoriesMap[formatText(category)],
          },
        });

        if (prodCreated && optionsGroups) {
          await Promise.all(
            optionsGroups.map((group) =>
              createOptionsGroupWithOptions(group, prodCreated.id, null)
            )
          );
        }
      })
    );

    
  } catch (error) {
    console.log(error);
  }
}

(() => {
  if (process.env.NODE_ENV === 'production') return;

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
})();

async function createOptionsGroupWithOptions(
  optionsGroupData: any,
  productId: string | null = null,
  parentGroupId: string | null = null
) {
  const { options, ...optionsGroupInfo } = optionsGroupData;

  // Crear el grupo de opciones
  const optionsGroupRecord = await prisma.optionsGroup.create({
    data: {
      ...optionsGroupInfo,
      products: { connect: { id: productId } },
      parentId: parentGroupId,
    },
  });

  // Crear opciones y sus subgrupos si existen
  if (options) {
    await Promise.all(
      options.map((option: any) => createOptionWithSubGroups(option, productId, optionsGroupRecord.id))
    );
  }
}

async function createOptionWithSubGroups(optionData: any, productId: string | null, optionsGroupId: string) {
  const { optionsGroups, ...optionInfo } = optionData;

  // Crear la opción
  await prisma.option.create({
    data: {
      ...optionInfo,
      optionsGroups: { connect: { id: optionsGroupId } },
    },
  });

  // Crear subgrupos si existen
  if (optionsGroups) {
    await Promise.all(
      optionsGroups.map((subGroup: any) =>
        createOptionsGroupWithOptions(subGroup, productId, optionsGroupId)
      )
    );
  }
}
