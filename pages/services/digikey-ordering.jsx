import { Container } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { IconSettings } from '@tabler/icons'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import DigiKeyOrderingMd from '../../data/md/services-digikey-ordering.md'

const DigikeyOrderingPage = () => {
    return (
        <>
            <NextSeo
                title={`Services: DigiKey Ordering`}
                description=""
            />
            <HeaderSection icon={IconSettings} category="Service" title="DigiKey Ordering" />
            <Container>
                <Prose>
                    <ReactMarkdown>
                        {DigiKeyOrderingMd}
                    </ReactMarkdown>
                </Prose>
            </Container>
        </>
    )
}

export default DigikeyOrderingPage