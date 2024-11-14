// categories 
// https://cache-mcd-middleware.mcdonaldscupones.com/api/product/list/categories


// https://api-mcd-ecommerce-ar.appmcdonalds.com/catalog/product/26942/detail?area=MOP&restaurant=6197a005c6ad5f1260abd795&category=adsa-ar-high+competitive-900510&outdaypart=true
/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import fs from 'fs';
import path from 'path';
import { SeedProduct } from '../../../prisma/data/seed-database';
export const getMcDonaldData = async () => {

    const mcData = await fetch('https://api-mcd-ecommerce-ar.appmcdonalds.com/catalog/menu')
    const data = await mcData.json();
    const categories: any = []
    const products: SeedProduct[] = []

    data.map((item: any) => {
        categories.push({
            name: item.title,
            slug: item.title.toLowerCase(),
            imageUrl: item.imageUrl,
            active: item.active
        })

        item.products.map((product: any) => {

            products.push({
                category: item.title.toLowerCase(),
                name: product.name,
                identifier: product.identifier,
                imageUrl: product.imageUrl,
                description: product.description,
                price: product.price.amount,
                optionsGroups: product.optionsGroups && getOptionsGroup(product.optionsGroups)
            })
        })


    })

    const dataToSave = { categories, products };
    const directoryPath = path.join(process.cwd(), 'mcData', 'data');
    const filePath = path.join(directoryPath, 'data.json');

    try {
        // Crea la carpeta si no existe
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }

        // Guarda los datos en el archivo data.json
        fs.writeFileSync(filePath, JSON.stringify(dataToSave, null, 2), 'utf8');
        console.log('Data saved to mcData/data/data.json');
    } catch (error) {
        console.error('Error writing to file', error);
    }


    return {
        ok: true,
        categories,
        products
    }

}



const getOptionsGroup = (optionsGroups: any) => {

    const newOptionsGroups = optionsGroups.map((optionGroup: any) => {


        return {
            name: optionGroup.title,
            min: optionGroup.min,
            max: optionGroup.max,
            options: optionGroup.options && getOptions(optionGroup.options)
        }

    })


    return newOptionsGroups ?? []
}


const getOptions = (options: any) => {


    const newOptions = options.map((option: any) => {

        // let newOptionGroups = []

        // if (opt.optionsGroups.length > 1) {
        //     newOptionGroups = opt.optionsGroups.map((op: any) => {
        //         return {
        //             name: op.title,
        //             min: op.min,
        //             max: op.max,
        //             options: op.options
        //         }
        //     })
        // }


        return {
            name: option.name,
            min: option.min,
            max: option.max,
            available: option.available,
            price: option.price.amount,
            imageUrl: option.imageUrl,
            optionsGroups: option.optionsGroups && getOptionsGroup(option.optionsGroups) 
        }


    })

    return newOptions
}