import React from 'react';
import {
  VStack,
  AspectRatio,
  Text,
  Heading,
  Button,
  IconButton,
  Box,
  Flex,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import EventBox from 'app/pages/Events/components/EventBox';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
SwiperCore.use([Pagination, Autoplay, Navigation]);
interface Props {
  evts: Array<any>;
}

const LeftButton = ({ swiper }: { swiper: SwiperCore }) => {
  return (
    <IconButton
      // visibility={swiper && swiper.isBeginning ? 'hidden' : 'visible'}
      zIndex="2"
      onClick={() => swiper.slidePrev()}
      isRound
      border="solid 2px black"
      fontSize="20px"
      color="black"
      bg="white"
      size="md"
      icon={<RiArrowLeftLine />}
      aria-label="swipeLeftButton"
    />
  );
};

const RightButton = ({ swiper }: { swiper: SwiperCore }) => {
  return (
    <IconButton
      //display={swiper.isEnd && 'none'}
      zIndex="2"
      onClick={() => swiper.slideNext()}
      isRound
      border="solid 2px black"
      fontSize="20px"
      color="black"
      bg="white"
      size="md"
      icon={<RiArrowRightLine />}
      aria-label="swipeRightButton"
    />
  );
};
const EventSwiper = (props: Props) => {
  const [my_swiper, set_my_swiper] = React.useState<SwiperCore>();
  return (
    <VStack
      className="rounded"
      height="100%"
      bg="transparent"
      textAlign="left"
      spacing={{ base: 4, lg: 8 }}
    >
      {props.evts.length ? (
        <Flex w="100%" h="100%" alignItems="center">
          <LeftButton swiper={my_swiper} />
          <Swiper
            centeredSlides
            onBeforeInit={ev => set_my_swiper(ev)}
            // onReachEnd={ev => set_my_swiper(ev)}
            // onReachBeginning={ev => set_my_swiper(ev)}
            style={{ width: '100%', height: '100%', margin: '0px -20px' }}
            className="event-swiper"
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
          <RightButton swiper={my_swiper} />
        </Flex>
      ) : (
        <EventBox h="100%" />
      )}
    </VStack>
  );
};

export default EventSwiper;
