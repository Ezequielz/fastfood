
'use server'
import prisma from '@/lib/prisma';
import { Order, Status } from '@prisma/client';



export const getOrders = async ( status? : Status ) => {
    
   
    try {
        
        const orders: Order[] = await prisma.order.findMany({
            where: {
                status: status
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