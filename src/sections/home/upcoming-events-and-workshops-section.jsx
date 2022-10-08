import { Box, Stack, Button, Heading, Text, Flex, Center, chakra, Container, SimpleGrid, GridItem, Icon } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { IconCalendarPlus, IconHourglassLow, IconX } from '@tabler/icons'
import Link from 'next/link'
import React from 'react'

const UpcomingEventsAndWorkshopsSection = () => {
    return (
        <Container>
            <SimpleGrid gap={16} columns={{ base: 1, md: 3 }}>
                <GridItem colSpan={1}>
                    <Box>
                        <Center bg="blackAlpha.500" p={2} w="fit-content" rounded="2xl">
                            <Icon as={IconHourglassLow} strokeWidth="1px" boxSize="12" color="white" />
                        </Center>

                        <Prose>
                            <Heading mt="4 !important" as="h2">Upcoming Events & Workshops</Heading>
                            <Text >Check out a preview of events happening soon. Learn a new skill, meet new people, or just have fun!</Text>
                        </Prose>
                        <Link href="/events" passHref>
                            <Button size="lg" leftIcon={<IconCalendarPlus />} variant="secondary">View All -{'>'}</Button>
                        </Link>
                    </Box>

                </GridItem>
                <GridItem colSpan={2}>
                    <Flex grow={1} h="100%" bg="blackAlpha.50" rounded="xl">
                        <Center w="100%">
                            <Icon as={IconX} />
                            &nbsp; There are no upcoming events!
                        </Center>
                    </Flex>
                </GridItem>

            </SimpleGrid>

            {/* <Stack
                // direction={['column', undefined, 'row', 'row']}
                w="100%">
                <Box>
                    <Prose>
                        <Heading as="h2">Upcoming Events & Workshops</Heading>
                        <Text >Check out a preview of events happening soon. Learn a new skill, meet new people, or just have fun!</Text>
                    </Prose>
                    <Link href="/events" passHref>
                        <Button size="lg" leftIcon={<IconCalendarPlus />} variant="secondary">View All -{'>'}</Button>
                    </Link>
                </Box>
                <Flex grow={1} bg="blackAlpha.50"><Center w="100%">There are no upcoming events</Center></Flex>
            </Stack> */}
        </Container>
    )
}

export default UpcomingEventsAndWorkshopsSection