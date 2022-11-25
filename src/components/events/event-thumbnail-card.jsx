import { AspectRatio, Heading, Spacer, Stack, Text, Box, Badge } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import Link from 'next/link'
import React from 'react'
import { formatDateObj } from 'utils/date-fns'

const EventThumbnailCard = (props) => {
    const { evt, now } = props

    return (
        <Link href={`/events/${evt.id}`}>
            <a>
                <AspectRatio ratio={4 / 3} className="anim-smooth hover-opacity">
                    <Stack bg="brand.secondary" h="100%" p={4} rounded="xl" alignItems="baseline !important">

                        {now?.getTime() === 0 && <Badge colorScheme={"red"}>🔴 Live</Badge>}
                        <Spacer />
                        <Prose>
                            <Heading as="h4" my="0 !important">
                                {evt.summary}
                            </Heading>
                            <Text my="0 !important">
                                {formatDateObj(evt.start)}
                            </Text>
                        </Prose>
                    </Stack>
                </AspectRatio>
            </a>
        </Link>
    )
}

export default EventThumbnailCard