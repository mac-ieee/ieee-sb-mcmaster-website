import { Container, Grid } from '@chakra-ui/react'
import ExecCard from 'components/about/exec-card'
import { DataTabs } from 'components/common/data-tabs'
import HeaderSection from 'components/common/header-section'
import { useRouter } from 'next/router'
import React from 'react'
import { aboutChaptersTabData } from '.'
import { chapterInfo } from '../../data'

const AboutChapterPage = () => {
    const router = useRouter()
    const { chapterId } = router.query

    const handleTabsChange = (data) => {
        router.push(`/about/${data.href}`)
    }

    if (!chapterId) { return null }
    return (
        <>
            <Container>
                <DataTabs onTabsChange={handleTabsChange} data={aboutChaptersTabData}></DataTabs>
                <HeaderSection alt title={chapterInfo[chapterId].name} icon={chapterInfo[chapterId].icon}></HeaderSection>
                <Grid>
                    <ExecCard name="Calvin Suen"></ExecCard>
                </Grid>
            </Container>
        </>
    )

}

export default AboutChapterPage