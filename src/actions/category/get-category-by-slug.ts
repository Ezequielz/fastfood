'use server'
import prisma from '@/lib/prisma';

export const getCategorieBySlug = async (slug: string) => {


    try {
        const category = await prisma.category.findUnique({
            where: {
                slug
            }
        });

        if (!category) {
            return {
                ok: false,
                message: 'No se encontró la categoría con el slug proporcionado',
                category: null
            };
        }

        return {
            ok: true,
            category
        };

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'Error al obtener las categorías',
            error
        };
    }
};
