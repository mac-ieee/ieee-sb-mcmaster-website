import { Badge, Container, Heading, Icon, Tag, TagLeftIcon, TagLabel, Text, Wrap, WrapItem } from '@chakra-ui/react'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'
import { chapterInfo } from '../../data'

import { Prose } from '@nikolovlazar/chakra-ui-prose'
import ComputerPageMd from "../../data/md/computer-chapter.md"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { IconUsers } from '@tabler/icons'

const ComputerPage = () => {
    const chapter = chapterInfo['computer']

    return (
        <>
            <NextSeo
                title={`Chapter: ${chapter.name}`}
                description="Welcome to the Computer Branch of IEEE McMaster"
            />
            <HeaderSection useImage title={chapter.name} icon={chapter.logo}></HeaderSection>
            <Container mt={[2, 2, 2, 2, 16]}>
                <Prose>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{ComputerPageMd}</ReactMarkdown>
                </Prose>
                {/* PUT YOUR CODE HERE */}
            </Container>
        </>

    )
}


export default ComputerPage