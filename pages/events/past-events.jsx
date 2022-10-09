import { Container, Select, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import EventThumbnailCard from 'components/events/event-thumbnail-card';
import React from 'react'
import { getEventsWithinYear } from '../../lib/google-calendar-api';

const PastEventsPage = () => {
    const [evts, setEvts] = React.useState([]);
    const [yearSelected, setYearSelected] = React.useState(new Date().getFullYear())

    const handleChange = e => {
        setYearSelected(e.target.value);
    };

    // React.useEffect(() => {
    //     const fn = async () => {
    //         const evts = await getEventsWithinYear(yearSelected);
    //         evts.reverse();
    //         setEvts(evts);
    //     };

    //     fn();
    // }, [yearSelected]);

    return (
        <Container>
            <Stack direction="row" alignItems="center" bg="blackAlpha.50" w="fit-content" rounded="sm" border="solid 1px" borderColor="blackAlpha.300">
                <Text whiteSpace="nowrap" pr={2} pl={4}>Year -{'>'}</Text>
                <Select
                    size='md'
                    bg="white"
                    border="none"
                    w={{ base: '100%', md: '150px' }}
                    value={yearSelected}
                    onChange={handleChange}
                >
                    {[2022, 2021, 2020].map(year => {
                        return <option key={year} value={year}>{year}</option>;
                    })}
                </Select>
            </Stack>

            <SimpleGrid
                columns={[1, 2, 2, 3]}
                // spacing={responsiveSpacing}
                spacing={4}
                minW="100%"
            >
                {evts.map((evt, i) => {
                    return <EventThumbnailCard key={i} evt={evt} />;
                })}
            </SimpleGrid>
        </Container>
    )
}

// export async function getServerSideProps(context) {

//     return {
//         props: {
//             evts: []
//         }, // will be passed to the page component as props
//     }
// }

export default PastEventsPage