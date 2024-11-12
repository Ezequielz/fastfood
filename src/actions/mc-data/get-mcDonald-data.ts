/* eslint-disable @typescript-eslint/no-explicit-any */

'use server'

import fs from 'fs';
import path from 'path';
export const getMcDonaldData = async () => {

    const mcData = await fetch('https://api-mcd-ecommerce-ar.appmcdonalds.com/catalog/menu/lite')
    const data = await mcData.json();
    const categories: any= []
    const products: any = []

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