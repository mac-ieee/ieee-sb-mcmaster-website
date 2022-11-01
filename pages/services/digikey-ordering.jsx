import { IconSettings } from '@tabler/icons'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'

const DigikeyOrderingPage = () => {
    return (
        <>
            <NextSeo
                title={`Services: DigiKey Ordering`}
                description=""
            />
            <HeaderSection icon={IconSettings} category="Service" title="DigiKey Ordering" />
        </>
    )
}

export default DigikeyOrderingPage