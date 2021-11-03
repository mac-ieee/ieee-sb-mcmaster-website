import React from 'react';
import {
  Stack,
  AspectRatio,
  Text,
  Heading,
  Button,
  IconButton,
  Box,
  Flex,
  IconButtonProps,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import './event-swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import EventBox from 'app/pages/Events/components/EventBox';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { responsiveSpacing } from 'styles/chakraTheme';

SwiperCore.use([Pagination, Autoplay, Navigation]);

interface Props {
  evts: Array<any>;
}

const swiperNavStyle = {
  isRound: true,
  border: 'solid 2px black',
  fontSize: '20px',
  color: 'black',
  bg: 'white',
  size: 'md',
  zIndex: '2',
  _hover: {
    color: 'white',
    bg: 'black',
    // transition: 'font-size 1s ease-in-out',
    // fontSize: '22px',
  },
};
// const EventNavBtn = ({
//   swiper,
//   icon,
// }: {
//   swiper: SwiperCore;
//   icon: React.ReactElement<any, string>;
// }) => {
//   <IconButton
//     {...swiperNavStyle}
//     // visibility={swiper && swiper.isBeginning ? 'hidden' : 'visible'}

//     onClick={() => swiper.slidePrev()}
//     icon={icon}
//     aria-label="swipeLeftButton"
//   />;
// };
const LeftButton = ({ swiper }: { swiper: SwiperCore }) => {
  return (
    <IconButton
      {...swiperNavStyle}
      // visibility={swiper && swiper.isBeginning ? 'hidden' : 'visible'}
      display={{ base: 'none', lg: 'flex' }}
      onClick={() => swiper.slidePrev()}
      icon={<RiArrowLeftLine />}
      aria-label="swipeLeftButton"
    />
  );
};

const RightButton = ({ swiper }: { swiper: SwiperCore }) => {
  return (
    <IconButton
      {...swiperNavStyle}
      display={{ base: 'none', lg: 'flex' }}
      onClick={() => swiper.slideNext()}
      icon={<RiArrowRightLine />}
      aria-label="swipeRightButton"
    />
  );
};
const EventSwiper = (props: Props) => {
  const [my_swiper, set_my_swiper] = React.useState<SwiperCore>();
  return (
    <Stack
      className="rounded"
      height="100%"
      bg="transparent"
      textAlign="left"
      spacing={responsiveSpacing}
    >
      {props.evts.length ? (
        <Flex w="100%" h="100%" alignItems="center" position="relative">
          {/* <Stack position="absolute" direction="row" left="-10px">
            <LeftButton swiper={my_swiper} />
            <RightButton swiper={my_swiper} />
          </Stack> */}
          <Box position="absolute" left="-20px">
            <LeftButton swiper={my_swiper} />
          </Box>
          <Swiper
            centeredSlides
            onBeforeInit={ev => set_my_swiper(ev)}
            onSlideChange={() => console.log('changed')}
            // onReachEnd={ev => set_my_swiper(ev)}
            // onReachBeginning={ev => set_my_swiper(ev)}
            style={{ width: '100%', height: '100%' }}
            className="event-swiper"
            autoplay={{
              delay: 10000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              999: {
                slidesPerView: 2,
              },
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
          <Box position="absolute" right="-20px">
            <RightButton swiper={my_swiper} />
          </Box>
        </Flex>
      ) : (
        <EventBox h="100%" />
      )}
    </Stack>
  );
};

export default EventSwiper;
