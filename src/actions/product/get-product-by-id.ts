// app/actions/getProduct.ts
import prisma from '@/lib/prisma';

export async function getProductById(productId: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return {
        ok: false,
        error: 'Product not found'
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
        error: 'Error en el servidor al obtener producto'
    };
  }
}
