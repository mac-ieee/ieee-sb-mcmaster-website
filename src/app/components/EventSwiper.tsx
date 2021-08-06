import React from 'react';
import { VStack, AspectRatio, Text, Heading, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Pagination, Navigation]);
interface Props {}

const EventSwiper = (props: Props) => {
  return (
    <VStack
      className="rounded"
      bg="transparent"
      textAlign="center"
      spacing={8}
      mt={'-30vh'}
    >
      <Heading>Upcoming Events</Heading>
      <Swiper
        className="event-swiper"
        navigation
        spaceBetween={100}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        centeredSlides={true}
      >
        <SwiperSlide style={{ background: 'red' }}>
          <AspectRatio ratio={16 / 9}>
            <Text>asd</Text>
          </AspectRatio>
        </SwiperSlide>
        <SwiperSlide style={{ background: 'red' }}>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </VStack>
  );
};

export default EventSwiper;
