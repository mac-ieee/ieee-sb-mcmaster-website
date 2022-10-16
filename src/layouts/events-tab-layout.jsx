import { Container } from '@chakra-ui/react'
import { IconCalendarEvent } from '@tabler/icons'
import { DataTabs } from 'components/common/data-tabs'
import HeaderSection from 'components/common/header-section'
import { useRouter } from 'next/router'
import React from 'react'

const tabData = [
    {
        label: 'Upcoming',
        href: 'upcoming',
    },
    {
        label: 'Past Events',
        href: 'past-events',
    },
    {
        label: 'Calendar',
        href: 'calendar',

    }
]

const EventsTabLayout = (props) => {

    const router = useRouter()
    const handleTabsChange = (data) => {
        router.push(`/events/${data.href}`)
    }


    const tabIndexProp = tabData.findIndex(tab => router.asPath.includes(tab.href))

    // if (!tabIndexProp) { return null }
    return (
        <>
            <HeaderSection title="Events" icon={IconCalendarEvent} />
            <Container mt="-25px">
                <DataTabs tabIndex={tabIndexProp} data={tabData} onTabsChange={handleTabsChange} />
            </Container>
            {props.children}
        </>
    )
}

export default EventsTabLayout