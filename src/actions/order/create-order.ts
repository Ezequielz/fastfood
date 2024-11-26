'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';



interface Props {
  newOrder: Product[];
  totalPrice: number;
}

type Product = {
  id: string;
  quantity: number;
  price: number;
  subtotal: number;
  options: Option[];
};

type Option = {
  id: string;
  price: number;
  subtotal: number;
  quantity: number;
};

export const createOrder = async ({ newOrder, totalPrice }: Props) => {
 
  try {

    if (!newOrder || newOrder.length === 0) {
      throw new Error('La orden no contiene productos.');
    }

    if (totalPrice <= 0) {
      throw new Error('El precio total debe ser mayor a 0.');
    }


    const orderCreated = await prisma.order.create({
      data: {
        total: totalPrice,
        quantityProducts: newOrder.reduce((total, product) => total + product.quantity,  0 ),
        OrderProducts: {
          create: newOrder.map((product) => ({
            productId: product.id,
            subtotal: product.subtotal,
            quantity: product.quantity,
            options: {
              create: product.options.map((option) => ({
                optionId: option.id,
                quantity: option.quantity,
                subtotal: option.subtotal
              })),
            },
          })),
        },
      }

    });

    revalidatePath('/')
    revalidatePath('/admin')
    revalidatePath('/admin/kitchen')
    revalidatePath('/admin/orders')
    revalidatePath('/admin/delivery')
    // Retornar la orden creada
    return {
      ok: true,
      orderCreated,
    };
  } catch (error) {
    console.error('Error al crear la orden:', error);
    return {
      ok: false,
      message: 'Error al crear la orden',
      error,
    };
  }
};
