import { IconSettings } from '@tabler/icons'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'

const PCBMillingPage = () => {
    return (
        <>
            <NextSeo
                title={`Services: PCB Milling`}
                description=""
            />
            <HeaderSection icon={IconSettings} category="Service" title="PCB Milling" />
        </>
    )
}

export default PCBMillingPage