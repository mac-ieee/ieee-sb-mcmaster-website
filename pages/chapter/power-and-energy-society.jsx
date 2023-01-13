import { Container, Heading, Tag, TagLabel, TagLeftIcon, Text, Wrap, WrapItem } from '@chakra-ui/react'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'
import { chapterInfo } from '../../data'

import { Prose } from '@nikolovlazar/chakra-ui-prose'
import PESPageMd from "../../data/md/pes-chapter.md"
import ReactMarkdown from 'react-markdown'
import { IconUsers } from '@tabler/icons'
import ChapterBadges from 'components/chapter/chapter-badges'

const PESPage = () => {
    const chapter = chapterInfo['power-and-energy-society']
    return (
        <>
            <NextSeo
                title={`Chapter: ${chapter.name}`}
                description=""
            />
            <HeaderSection useImage title={chapter.name} icon={chapter.logo}></HeaderSection>
            <Container mt={[2, 2, 2, 2, 16]}>
                <ChapterBadges
                    data={{ ...chapter.data }}
                />
                <Prose>
                    <ReactMarkdown>{PESPageMd}</ReactMarkdown>
                </Prose>
            </Container>
        </>

    )
}


export default PESPage