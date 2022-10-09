import { Heading, Stack } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react'

const EventThumbnailCard = (props) => {
    const { evt } = props
    return (
        <Stack>
            <Prose>
                <Heading as="h4">Event Name</Heading>
            </Prose>
        </Stack>
    )
}

export default EventThumbnailCard