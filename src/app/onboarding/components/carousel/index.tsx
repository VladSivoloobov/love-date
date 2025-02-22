'use client';

import styles from './carousel.module.css';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '@/images/onboarding/1.png';
import image2 from '@/images/onboarding/2.png';
import image3 from '@/images/onboarding/3.png';

import 'swiper/css';
import Title from '@/components/title';
import Text from '@/components/text';

const Carousel: React.FC = () => {
  return (
    <>
      <Swiper
        className={styles.carousel}
        slidesPerView={1.5}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
      >
        {[image1, image2, image3, image1, image2, image3].map((image, i) => (
          <SwiperSlide className={styles.carouselItem} key={i}>
            <Image alt='' src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper>
        <SwiperSlide>
          <Title textAlign='center' text='Algorithm' />
          <Text text='User going through a vetting process to ensure you never match with bots.' />
        </SwiperSlide>
        <SwiperSlide>
          <Title textAlign='center' text='Matches' />
          <Text text='We match you with people that have a large array of similar interests.' />
        </SwiperSlide>
        <SwiperSlide>
          <Title textAlign='center' text='Premium' />
          <Text text='Sign up today and enjoy the first month of premium benefits on us.' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
