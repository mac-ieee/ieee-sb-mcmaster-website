import { Box, Center, Container, Divider, Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { IconCalendarEvent } from '@tabler/icons'
import HeaderSection from 'components/common/header-section'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { driveDirectURI, getEventForId } from '../../lib/google-calendar-api'
import rehypeRaw from "rehype-raw";
import { NextSeo } from 'next-seo'
import { start } from 'nprogress'
import { formatDateObj } from 'utils/date-fns'


const EventSubPage = ({ evt, error }) => {

    const imageUrl = React.useMemo(
        () => (evt.attachments ? driveDirectURI + evt.attachments[0].fileId : ''),
        [evt.attachments],
    );

    if (error) { return null }

    return (
        <>
            <NextSeo title={`${evt.summary} on ${evt.start.date}`} />
            <Stack spacing={4}>
                <HeaderSection category="Event" icon={IconCalendarEvent} title={evt.summary} />
                <Container>
                    <Stack spacing={[4, 4, 8, 8, 8]} mx={[4, 4, 4, 4, 0]}>



                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[4, 4, 8, 8, 8]}>
                            {imageUrl ? <Image src={imageUrl} alt={`Image for ${evt.summary}`} /> : <Center p={8} rounded="xl" bg="blackAlpha.50">No Image Provided</Center>}


                            <Stack spacing={4}>
                                {Object.keys((({ start, end }) => ({ start, end }))(evt)).length &&
                                    <Box p={4} bg="brand.primary" rounded="xl" color="white">
                                        {evt.start && <p><b>Start:</b> {formatDateObj(evt.start)}</p>}
                                        {evt.end && <p><b>End:</b>  {formatDateObj(evt.end)}</p>}

                                    </Box>
                                }
                                <Prose>
                                    {/* <Divider /> */}
                                    <Heading as="h3" my="0 !important">Event Description</Heading>
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>

                                        {evt.description ? evt.description : 'No Description Provided'}
                                    </ReactMarkdown>
                                </Prose>
                            </Stack>

                        </SimpleGrid>

                    </Stack>
                </Container >
            </Stack>
        </>
    )
}

export async function getServerSideProps(context) {
    let evt = undefined
    try {
        evt = await getEventForId(context.params.eventId)
        return {
            props: { evt }, // will be passed to the page component as props
        }
    } catch (error) {
        return { props: { error: 404 } }
    }

}

export default EventSubPage