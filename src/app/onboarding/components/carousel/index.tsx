'use client';

import styles from './carousel.module.css';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination, Controller, Autoplay } from 'swiper/modules';

import { useState } from 'react';

import image1 from '@/images/onboarding/1.png';
import image2 from '@/images/onboarding/2.png';
import image3 from '@/images/onboarding/3.png';

import 'swiper/css';
import Title from '@/components/title';
import Text from '@/components/text';
import VStack from '@/components/layout/vstack';
import Container from '@/components/layout/container';

const sliderTextSlides = [
  {
    heading: 'Algorithm',
    text: 'User going through a vetting process to ensure you never match with bots.',
  },
  {
    heading: 'Matches',
    text: 'We match you with people that have a large array of similar interests.',
  },
  {
    heading: 'Premium',
    text: 'Sign up today and enjoy the first month of premium benefits on us.',
  },
];

/**
 * Компонент карусели, который показывает связаные слайдеры с фото и текстом.
 * TODO: Нужно сделать этот компонент переиспользуемым с возможностью передавать разные данные
 * @returns
 */
const Carousel: React.FC = () => {
  const [textSwiper, setTextSwiper] = useState<SwiperClass>();
  const [photoSwiper, setPhotoSwiper] = useState<SwiperClass>();

  return (
    <div>
      <Swiper
        className={styles.carousel}
        slidesPerView={1.5}
        centeredSlides={true}
        modules={[Controller, Autoplay]}
        speed={700}
        controller={{ control: textSwiper }}
        onInit={setPhotoSwiper}
        autoplay={{
          delay: 5000,
          waitForTransition: true,
        }}
        slideToClickedSlide={true}
        grabCursor={true}
      >
        {[image1, image2, image3].map((image, i) => (
          <SwiperSlide className={styles.carouselItem} key={i}>
            <Image alt='' src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Container>
        <Swiper
          modules={[Pagination, Controller]}
          className={styles.textSwiper}
          pagination={{
            type: 'bullets',
            bulletClass: styles.dot,
            bulletActiveClass: styles.dotActive,
          }}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          init={true}
          speed={700}
          controller={{
            control: photoSwiper,
          }}
          onInit={setTextSwiper}
          grabCursor={true}
        >
          {sliderTextSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <VStack className={styles.slideWrapper} gap={10}>
                <Title textAlign='center' text={slide.heading} />
                <Text textAlign='center' text={slide.text} textSize={16} />
              </VStack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Carousel;
