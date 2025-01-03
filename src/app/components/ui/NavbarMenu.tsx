import { CategoryList } from '@/app/(fastfood)/menu/components/category/CategoryList'
import React, { Suspense } from 'react'

export const NavbarMenu = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <CategoryList />
        </Suspense>
    )
}
