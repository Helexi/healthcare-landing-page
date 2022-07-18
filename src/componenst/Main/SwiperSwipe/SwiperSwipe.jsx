import './SwiperSwipe';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { Slide } from './Slide/Slide';
import slideOne from '../../../img/appointment-1.png'


export const SwiperSwipe = () => {
  return (
    <Swiper
      loop={true}
      pagination={{
        type: "fraction",
      }}
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <Slide 
          slideEmphasize='Emphasize PrEP'
          slideHeader='Book an appointment'
          slideSalmon='with a specialist'
          slideTitle='Order one of our CLIA kits from the comfort
          of your own home. Kits can include everything
          you need to test for Hep B&C, Trich, Chlamydia,
          HIV, and more.'
          slideImg={slideOne}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </Swiper>
  )
}