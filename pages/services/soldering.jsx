import { IconSettings } from '@tabler/icons'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'

const SolderingPage = () => {
    return (
        <>
            <NextSeo
                title={`Services: Soldering`}
                description=""
            />
            <HeaderSection icon={IconSettings} category="Service" title="Soldering" />
        </>
    )
}

export default SolderingPage