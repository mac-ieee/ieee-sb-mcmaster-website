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
    <VStack
      className="rounded"
      height="100%"
      bg="transparent"
      textAlign="left"
      spacing={{ base: 4, lg: 8 }}
    >
      {props.evts.length ? (
        <Swiper
          className="event-swiper"
          pagination
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          slidesPerView={2}
          spaceBetween={15}
        >
          {props.evts.map(evt => {
            return (
              <SwiperSlide>
                <EventBox h="100%" key={evt.id} evt={evt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <EventBox h="100%" />
      )}
    </VStack>
  );
};

export default EventSwiper;
