import { AspectRatio, Heading, Spacer, Stack, Text, Box } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import Link from 'next/link'
import React from 'react'

const EventThumbnailCard = (props) => {
    const { evt } = props

    return (
        <Link href={`/events/${evt.id}`}>
            <a>
                <AspectRatio ratio={4 / 3}>
                    <Stack bg="brand.secondary" h="100%" p={4} rounded="xl" alignItems="baseline !important">
                        <Spacer />
                        <Prose>
                            <Heading as="h4" my="0 !important">{evt.summary}</Heading>
                            <Text my="0 !important">{evt.start.date}</Text>
                            <Text my="0 !important">{evt.start.dateTime}</Text>
                        </Prose>

                    </Stack>
                </AspectRatio>
            </a>
        </Link>
    )
}

export default EventThumbnailCard