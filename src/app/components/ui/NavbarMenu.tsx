import { Suspense } from 'react'
import { CategoryList } from '@/app/(fastfood)/menu/components/category/CategoryList'
import { NavbarMenuSkeleton } from './NavbarMenuSkeleton'

interface Props {
    basic?: boolean;
    quantityIcons?: number
}
export const NavbarMenu = ({ basic, quantityIcons = 7 }: Props) => {
    return (
        <Suspense fallback={<NavbarMenuSkeleton quantityIcons={quantityIcons}/>}>
            <CategoryList basic={basic}  />
        </Suspense>
    )
}
