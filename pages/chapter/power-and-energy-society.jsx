import { Container, Heading, Text } from '@chakra-ui/react'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import React from 'react'
import { chapterInfo } from '../../data'

const PESPage = () => {
    const chapter = chapterInfo['power-and-energy-society']
    return (
        <>
            <NextSeo
                title={`Chapter: ${chapter.name}`}
                description=""
            />
            <HeaderSection useImage title={chapter.name} icon={chapter.logo}></HeaderSection>
            <Container>
                {/* PUT YOUR CODE HERE */}
            </Container>
        </>

    )
}


export default PESPage