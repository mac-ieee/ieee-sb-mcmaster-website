import { AspectRatio, Container } from '@chakra-ui/react'
import EventsTabLayout from 'layouts/events-tab-layout'
import { NextSeo } from 'next-seo'
import React from 'react'

const CalendarPage = () => {
    return (
        <>
            <NextSeo title="Calendar" />
            <EventsTabLayout>
                <Container>
                    <AspectRatio ratio={{ base: 1, md: 16 / 9 }}>
                        <iframe
                            title="google-calendar-iframe"
                            src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f5f5f7&ctz=America%2FNew_York&src=ajVwYWZtMWpwdnFhb24zZmplcHVlcTE4dGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB`}
                            width="100%"
                            height="100%"
                        />
                    </AspectRatio>
                </Container>
            </EventsTabLayout>
        </>

    )
}

export default CalendarPage