'use server';

import prisma from '@/lib/prisma';
import { Status } from '@prisma/client';
import { getOrderById } from './get-order-by-id';
import { revalidatePath } from 'next/cache';

interface Props {
    orderId: string;
    status: Status;
}

export const changeOrderStatus = async ({ orderId, status }: Props) => {

    try {

        const { ok } = await getOrderById(orderId)

        if (!ok) {
            return {
                ok: false,
                msg: `No se encontro la orden con el id ${orderId}`
            }
        }


        const orderUpdated = await prisma.order.update({
            where: {
                id: orderId
            },
            data: {
                status: status
            }
        });
        revalidatePath('/')
        revalidatePath('/admin')
        revalidatePath('/admin/kitchen')

        return {
            ok: true,
            orderUpdated
        }


    } catch (error) {

        console.log(error);
        return {
            ok: false,
            msg: 'Error al cambiar el estado de la orden'
        }

    }

};
