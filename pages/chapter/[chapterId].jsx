import HeaderSection from 'components/common/header-section'
import { useRouter } from 'next/router'
import React from 'react'
import { chapterInfo } from '../../data'

const SubChapterPage = () => {
    const router = useRouter()
    const { chapterId } = router.query

    const chapter = chapterInfo[chapterId]

    return (
        <HeaderSection title={chapter.name} icon={chapter.icon}></HeaderSection>
    )
}


export default SubChapterPage