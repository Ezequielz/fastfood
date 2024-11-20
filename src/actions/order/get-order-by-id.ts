'use server'
import prisma from '@/lib/prisma';

export const getOrderById = async (id: string) => {


    try {
        const order = await prisma.order.findUnique({
            where: {
                id
            },
            include: {
                OrderProducts: {
                    include: {
                        product: true,
                        options: {
                            include: {
                                option: true
                            }
                        }
                    }
                }
            }
        });

        if (!order) {
            return {
                ok: false,
                message: 'No se encontró la orden con el id proporcionado',
                order: null
            };
        }

        return {
            ok: true,
            order
        };

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'Error al obtener la orden',
            error
        };
    }
};
