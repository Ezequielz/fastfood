// app/actions/getProduct.ts
import prisma from '@/lib/prisma';

export async function getProductByIdWithOptionsGroups(productId: string) {
    try {
        const product = await prisma.product.findUnique({
            where: { id: productId },
            include: {
                optionsGroups: {
                    include: {
                        options: true, // Incluye las opciones en cada grupo de opciones
                        children: {    // Incluye los subgrupos de opciones, si existen
                            include: {
                                options: true, // Opciones en los subgrupos
                            },
                        },
                    },
                },
            },
        });

        if (!product) {
            return {
                ok: false,
                error: 'Producto no encontrado'
            };
        }

        return {
            ok: true,
            product
        };
    } catch (error) {
        console.error('Error fetching product with options groups:', error);
        return {
            ok: false,
            error: 'Error en el servidor al obtener productos con options-groups'
        };
    }
}
