import { Container } from '@chakra-ui/react'
import { IconCalendarEvent } from '@tabler/icons'
import { DataTabs } from 'components/common/data-tabs'
import HeaderSection from 'components/common/header-section'
import { useRouter } from 'next/router'
import React from 'react'

const tabData = [
    {
        label: 'Main Branch',
        href: 'main-branch',
    },
    {
        label: 'Computer',
        href: 'computer',
    },
    {
        label: 'PES',
        href: 'power-and-energy-society',
    },
    {
        label: 'EMBS',
        href: 'engineering-in-medicine-and-biology-society',
    }

]


const AboutTabLayout = (props) => {

    const router = useRouter()
    const handleTabsChange = (data) => {
        router.push(`/about/${data.href}`)
    }


    const tabIndexProp = tabData.findIndex(tab => router.asPath.includes(tab.href))

    // if (!tabIndexProp) { return null }
    return (
        <>
            <HeaderSection title="About" icon={IconCalendarEvent} />
            <Container mt="-35px">
                <DataTabs tabIndex={tabIndexProp} data={tabData} onTabsChange={handleTabsChange} />
            </Container>
            {props.children}
        </>
    )
}

export default AboutTabLayout