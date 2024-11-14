// app/actions/getProduct.ts
import prisma from '@/lib/prisma';

export async function getProductsByCategoryId(categoryId: string) {
  
    try {
        const products = await prisma.product.findMany({
            where: { categoryId },
            
        });

        if (!products) {
            return {
                ok: false,
                error: 'Productos no encontrados'
            };
        }
        
        return {
            ok: true,
            products
        };
    } catch (error) {
        console.error('Error fetching product with options groups:', error);
        return {
            ok: false,
            error: 'Error en el servidor al obtener productos con options-groups'
        };
    }
}
