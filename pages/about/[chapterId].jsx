import { Container, Grid, SimpleGrid, Stack } from '@chakra-ui/react'
import { IconInfoSquare } from '@tabler/icons'
import ExecCard from 'components/about/exec-card'
import { DataTabs } from 'components/common/data-tabs'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'
import { chapterInfo } from '../../data'
import { fetchAPI } from '../../lib/api'


const aboutChaptersTabData = [
    // {
    //     label: 'IEEEMSB',
    //     href: 'ieee',
    // },
    {
        label: 'Main Branch',
        href: 'main-branch',
    },
    {
        label: 'Computer',
        href: 'computer',
    },
    {
        label: 'PES',
        href: 'power-and-energy-society',
    },
    {
        label: 'EMBS',
        href: 'engineering-in-medicine-and-biology-society',
    }

]

const AboutChapterPage = ({ execs }) => {
    const router = useRouter()
    const { chapterId } = router.query

    const handleTabsChange = (data) => {
        router.push(`/about/${data.href}`)
    }

    if (!chapterId) { return null }

    const chapterIndex = aboutChaptersTabData.findIndex(data => data.href == chapterId)
    const chapterLabel = aboutChaptersTabData[chapterIndex].label

    return (
        <>
            <NextSeo
                title={`About: ${chapterLabel}`}
                description=""
            />
            {/* <HeaderSection title={chapterInfo[chapterId].name} icon={chapterInfo[chapterId].icon}></HeaderSection> */}
            <HeaderSection title={'About'} icon={IconInfoSquare}></HeaderSection>
            <Container>

                <Stack mt="-25px">
                    <DataTabs onTabsChange={handleTabsChange} tabIndexProp={aboutChaptersTabData.findIndex(data => data.href == chapterId)} data={aboutChaptersTabData}></DataTabs>

                </Stack>
                <SimpleGrid
                    w="100%"
                    spacing={4}
                    columns={{ base: 1, sm: 2, md: 4, lg: 6 }}
                >
                    {execs.map(exec => {
                        const { name, role } = exec.attributes;
                        return <ExecCard key={name} name={name} role={role} />
                    })}
                </SimpleGrid>
            </Container>
        </>
    )

}

export async function getServerSideProps(context) {

    const chapters = await fetchAPI("/chapters", {
        filters: {
            slug: {
                $eq: context.params.chapterId
            }
        },
        fields: ['slug'],
        // populate: ['executives']
        populate: {
            executives: {
                sort: ['name:desc']
            }
        }
    })

    const execs = chapters.data[0].attributes.executives.data

    return {
        props: { execs }, // will be passed to the page component as props
    }
}

export default AboutChapterPage