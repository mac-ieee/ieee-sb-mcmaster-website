import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';
interface Props {}

const days = ['', 'MO', 'TU', 'WE', 'TH', 'FR'];
const generateTimes = () => {
  let times = [];
  const start = 8;
  const end = 17;
  for (let i = start; i <= end; i += 0.5) {
    times.push(i);
  }
  return times;
};
const time = generateTimes();

const Availability = (props: Props) => {
  const convertTimes = (t: number) => {
    let n: string = '';
    if (t % 1 !== 0) {
      n += '30';
    } else {
      n += '00';
    }
    return n;
  };
  return (
    <Grid
      templateRows="repeat(19, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={2}
    >
      {days.map(day => {
        return <Text>{day}</Text>;
      })}
      {[...Array(19 * 6)].map((block, i) => {
        if (i % 6 === 0) {
          return <Text>{convertTimes(time[i / 6])}</Text>;
        }
        return <Box bg="black" w="80px" h="50px" />;
      })}
    </Grid>
  );
};

export default Availability;
