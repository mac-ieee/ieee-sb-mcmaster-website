import { Box, Stack, Button, Heading, Text, Flex, Center, chakra } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { IconCalendarPlus } from '@tabler/icons'
import Link from 'next/link'
import React from 'react'

const UpcomingEventsAndWorkshopsSection = () => {
    return (
        <Stack direction={['column', undefined, 'row', 'row']} w="100%">
            <Box>
                <Prose>
                    <Heading as="h2">Upcoming Events & Workshops</Heading>
                    <Text >Check out a preview of events happening soon. Learn a new skill, meet new people, or just have fun!</Text>
                </Prose>
                <Link href="/events" passHref>
                    <Button size="lg" leftIcon={<IconCalendarPlus />} variant="secondary">View All -{'>'}</Button>
                </Link>
            </Box>
            <Flex grow={1} bg="blackAlpha.50"><Center w="100%" border={"solid black 1px"}>There are no upcoming events</Center></Flex>
        </Stack>
    )
}

export default UpcomingEventsAndWorkshopsSection