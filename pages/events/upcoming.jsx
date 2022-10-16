import { NextSeo } from 'next-seo'
import React from 'react'
import EventsTabSection from 'layouts/events-tab-layout'
import { Center, Container, SimpleGrid, Stack } from '@chakra-ui/react'
import EventThumbnailCard from 'components/events/event-thumbnail-card'
import { getUpcomingEvents } from '../../lib/google-calendar-api'

const UpcomingEventsPage = (props) => {
    if (!props.evts) return null

    return (
        <>
            <NextSeo
                title="Upcoming Events and Workshops"
            />
            <EventsTabSection>
                <Container flexGrow={1} as={Stack} spacing={4} p={[4, 4, 4, 4, 0]}>
                    {/* <Stack direction="row" alignItems="center" bg="blackAlpha.50" w="fit-content" rounded="lg" border="solid 1px" borderColor="blackAlpha.300">
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
                    </Stack> */}

                    {props.evts.length ? <SimpleGrid
                        columns={[1, 2, 2, 3]}
                        // spacing={responsiveSpacing}
                        spacing={4}
                        minW="100%"
                    >
                        {props.evts.map((evt, i) => {
                            return <EventThumbnailCard key={i} evt={evt} />;
                        })}
                    </SimpleGrid> : <Center rounded="xl" bg="blackAlpha.50" display="flex" flexGrow={1}>No Upcoming Events.</Center>}

                </Container>
            </EventsTabSection>
        </>

    )
}

export async function getServerSideProps(context) {
    try {
        const evts = await getUpcomingEvents()
        console.log(evts)
        return {
            props: { evts: evts }, // will be passed to the page component as props
        }
    } catch (error) {
        return {
            props: { evts: [], error: 500 }
        }
    }
}


export default UpcomingEventsPage