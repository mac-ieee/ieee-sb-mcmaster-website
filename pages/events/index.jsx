import { AspectRatio, Container, Heading, Stack } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { IconCalendarEvent } from '@tabler/icons'
import { DataTabs } from 'components/common/data-tabs'
import HeaderSection from 'components/common/header-section'
import React from 'react'


const tabData = [
    {
        label: 'Upcoming',
        href: 'upcoming',
        content: 'Perhaps the greatest dish ever invented.',
    },
    {
        label: 'Past Events',
        href: 'past-events',
        content:
            'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
    {
        label: 'Calendar',
        href: 'calendar',
        content: (
            <AspectRatio ratio={{ base: 1, md: 16 / 9 }}>
                <iframe
                    title="google-calendar-iframe"
                    src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f5f5f7&ctz=America%2FNew_York&src=ajVwYWZtMWpwdnFhb24zZmplcHVlcTE4dGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB`}
                    width="100%"
                    height="100%"
                />
            </AspectRatio>
        )

    }
]


const EventsPage = () => {
    return (
        <Stack>
            <HeaderSection title="Events" icon={IconCalendarEvent} />
            <Container>
                <DataTabs data={tabData} />
            </Container>

        </Stack>
    )
}

export default EventsPage