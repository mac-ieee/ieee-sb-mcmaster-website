import { Container, Heading, Text } from '@chakra-ui/react'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'
import { chapterInfo } from '../../data'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import EMBSChapterMd from "../../data/md/embs-chapter.md"
import ReactMarkdown from 'react-markdown'
import ChapterBadges from 'components/chapter/chapter-badges'


const EMBSPage = () => {
    const chapter = chapterInfo['engineering-in-medicine-and-biology-society']
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
                    <ReactMarkdown>{EMBSChapterMd}</ReactMarkdown>
                </Prose>
                {/* PUT YOUR CODE HERE */}
            </Container>
        </>

    )
}


export default EMBSPage