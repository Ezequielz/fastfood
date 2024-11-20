'use server';

import prisma from '@/lib/prisma';

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
  console.log(newOrder)
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
        status: false,
        OrderProducts: {
          create: newOrder.map((product) => ({
            productId: product.id,
            subtotal: product.subtotal,
            quantity: product.quantity,
            options: {
              create: product.options.map((option) => ({
                optionId: option.id,
              })),
            },
          })),
        },
      }

    });

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
