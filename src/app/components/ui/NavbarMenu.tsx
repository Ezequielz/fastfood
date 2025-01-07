import { Suspense } from 'react'
import { CategoryList } from '@/app/(fastfood)/menu/components/category/CategoryList'


interface Props {
    basic?: boolean
}
export const NavbarMenu = ({ basic }: Props) => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <CategoryList basic={basic}  />
        </Suspense>
    )
}
