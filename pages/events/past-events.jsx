import { Center, Container, Select, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import EventThumbnailCard from 'components/events/event-thumbnail-card';
import EventsTabLayout from 'layouts/events-tab-layout';
import { NextSeo } from 'next-seo';
import React from 'react'
import { getEventsWithinYear } from '../../lib/google-calendar-api';

const PastEventsPage = () => {
    const [evts, setEvts] = React.useState([]);
    const [yearSelected, setYearSelected] = React.useState(new Date().getFullYear())
    const yearOptions = []

    for (let i = new Date().getFullYear(); i >= 2020; i--) {
        yearOptions.push(i);
    }

    const handleChange = e => {
        setYearSelected(e.target.value);
    };

    React.useEffect(() => {
        const fn = async () => {

            try {
                const evts = await getEventsWithinYear(yearSelected);
                evts.reverse();
                setEvts(evts);
            } catch (error) {
                setEvts([]);
            }

        };

        fn();
    }, [yearSelected]);

    return (
        <>
            <NextSeo
                title="Past Events and Workshops"
            />
            <EventsTabLayout>
                <Container flexGrow={1} as={Stack} spacing={4} mt={[2, 2, 2, 2, 16]}>
                    <Stack direction="row" alignItems="center" bg="blackAlpha.50" w="fit-content" rounded="lg" border="solid 1px" borderColor="blackAlpha.300">
                        <Text whiteSpace="nowrap" pr={2} pl={4}>Year -{'>'}</Text>
                        <Select
                            size='md'
                            bg="white"
                            border="none"
                            w={{ base: '100%', md: '150px' }}
                            value={yearSelected}
                            onChange={handleChange}
                        >
                            {yearOptions.map(year => {
                                return <option key={year} value={year}>{year}</option>;
                            })}
                        </Select>
                    </Stack>

                    {evts.length ? <SimpleGrid
                        columns={[1, 2, 2, 3]}
                        // spacing={responsiveSpacing}
                        spacing={4}
                        minW="100%"
                    >
                        {evts.map((evt, i) => {
                            return <EventThumbnailCard key={i} evt={evt} />;
                        })}
                    </SimpleGrid> : <Center rounded="xl" bg="blackAlpha.50" display="flex" flexGrow={1}>No Events.</Center>}

                </Container>
            </EventsTabLayout>
        </>
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