import React, { useState, useEffect } from 'react';
import FullCalendar, { EventSource } from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
//import DatePicker from 'react-datepicker';
import axios from 'axios';
import { getEventsThisMonth } from 'utils/g-calendar-api/gCalendarAPI';
import { Box, SimpleGrid, Button } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import './fullcalendar.scss';
import CalendarEventModalContent from './CalendarEventModalContent';
import _ from 'lodash';
interface Props {}

const Calendar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState(new Date());
  const [pickedDate, setPickedDate] = useState<DateClickArg>();
  const [events, setEvents] = useState<Array<any>>();
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59,
  );

  useEffect(() => {
    async function setMonthlyEvts() {
      let monthlyEvts = getEventsThisMonth().then(evts => {
        setEvents(evts);
      });

      // let response = await fetch('api/data')
      // response = await response.json()
      // dataSet(response)
    }
    setMonthlyEvts();
  }, []);

  const formattedEvents = React.useMemo(() => {}, [events]);
  console.log(events);
  const handleEventClick = e => {
    console.log(e);
  };

  const handleDateClick = (date: DateClickArg) => {
    setPickedDate(date);
    onOpen();
  };
  return (
    // <DatePicker
    //   inline
    //   selected={startDate}
    //   onChange={date => setStartDate(date)}
    // />
    <>
      <SimpleGrid columns={{ base: 1 }} w="100%">
        <FullCalendar
          handleWindowResize
          themeSystem="dark"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          expandRows
          height="60vh"
          dateClick={handleDateClick}
          windowResizeDelay={300}
          events={[]}
          eventClick={handleEventClick}
        />
      </SimpleGrid>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="md">Events</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CalendarEventModalContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Calendar;
