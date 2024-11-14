// app/actions/getProduct.ts
import prisma from '@/lib/prisma';

export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany();

    if (!products) {
      return {
        ok: false,
        products: [],
        msg: 'No se encontraron productos'
      };
    }

    return {
        ok: true,
        products
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
        ok: false,
        error: 'Error en el servidor al obtener productos'
    };
  }
}
