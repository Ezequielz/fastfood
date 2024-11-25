
'use server'
import prisma from '@/lib/prisma';
import { Order } from '@prisma/client';

export const getOrders = async () => {
    

    try {
        
        const orders: Order[] = await prisma.order.findMany({

            include: {

                OrderProducts: {
                    include: {
                        product: {
                            include: {
                                category: true,
                                optionsGroups: {
                                    include: {
                                        options: true
                                    }
                                },

                                
                            }
                        }
                    }
                },

            }
        });
        return {
            ok: true,
            orders 
        }

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'Error al obtener las categorias',
            error
        };
    }

}