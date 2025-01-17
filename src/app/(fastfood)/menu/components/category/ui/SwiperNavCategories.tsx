'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Category } from '@prisma/client';
import { CategoryCard } from '../CategoryCard';

interface Props {
  categoriesList: Category[]
}

export const SwiperNavCategories = ({ categoriesList }: Props) => {
  return (
    <Swiper
      spaceBetween={0.5}
      slidesPerView="auto"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      {
        categoriesList!.map(category => (
          <SwiperSlide
            style={{ width: 'auto' }}
            key={category.id} >

            <CategoryCard category={category} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}
