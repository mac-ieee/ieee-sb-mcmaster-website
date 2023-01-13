import { IconSettings } from '@tabler/icons'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'
import { Container } from '@chakra-ui/react'

import { Prose } from '@nikolovlazar/chakra-ui-prose'
import ReactMarkdown from 'react-markdown'
import SolderingServiceMd from '../../data/md/services-soldering.md'

const SolderingPage = () => {
    return (
        <>
            <NextSeo
                title={`Services: Soldering`}
                description=""
            />
            <HeaderSection icon={IconSettings} category="Service" title="Soldering" />
            <Container>
                <Prose>
                    <ReactMarkdown>
                        {SolderingServiceMd}
                    </ReactMarkdown>
                </Prose>
            </Container>
        </>
    )
}

export default SolderingPage