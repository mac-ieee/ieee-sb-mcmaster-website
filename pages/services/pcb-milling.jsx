import { Container } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { IconSettings } from '@tabler/icons'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'
import PCBMillingMd from '../../data/md/services-pcb-milling.md'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const PCBMillingPage = () => {
    return (
        <>
            <NextSeo
                title={`Services: PCB Milling`}
                description=""
            />
            <HeaderSection icon={IconSettings} category="Service" title="PCB Milling" />
            <Container>
                <Prose>
                    <ReactMarkdown>
                        {PCBMillingMd}
                    </ReactMarkdown>
                </Prose>
            </Container>
        </>
    )
}

export default PCBMillingPage