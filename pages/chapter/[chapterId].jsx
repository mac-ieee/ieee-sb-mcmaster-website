import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'
import { chapterInfo } from '../../data'

const SubChapterPage = () => {
    const router = useRouter()
    const { chapterId } = router.query

    if (!chapterId) { return null }

    const chapter = chapterInfo[chapterId]

    return (
        <>
            <NextSeo
                title={`Chapter: ${chapter.name}`}
                description=""
            />
            <HeaderSection useImage title={chapter.name} icon={chapter.logo}></HeaderSection>
        </>

    )
}


export default SubChapterPage