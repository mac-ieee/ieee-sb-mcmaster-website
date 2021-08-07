import React from 'react';
import { VStack, AspectRatio, Text, Heading, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import EventBox from 'app/pages/Events/components/EventBox';

SwiperCore.use([Pagination, Autoplay]);
interface Props {
  evts: Array<any>;
}

const EventSwiper = (props: Props) => {
  return (
    <VStack className="rounded" bg="transparent" textAlign="center" spacing={8}>
      <Swiper
        className="event-swiper"
        pagination
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        //direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        style={{ paddingBottom: '50px' }}
      >
        {props.evts.map(evt => {
          return (
            <SwiperSlide style={{}}>
              <EventBox h="100%" key={evt.id} evt={evt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </VStack>
  );
};

export default EventSwiper;
