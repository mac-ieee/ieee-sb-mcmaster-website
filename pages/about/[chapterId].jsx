import { Container, SimpleGrid } from '@chakra-ui/react'
import { IconInfoSquare } from '@tabler/icons'
import ExecCard from 'components/about/exec-card'
import { DataTabs } from 'components/common/data-tabs'
import HeaderSection from 'components/common/header-section'
import AboutTabLayout from 'layouts/about-tab-layout'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'
import { chapterInfo, execData } from '../../data'
import { fetchAPI } from '../../lib/api'


const aboutChaptersTabData = [
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

const AboutChapterPage = () => {
    const router = useRouter()
    const { chapterId } = router.query

    // const handleTabsChange = (data) => {
    //     router.push(`/about/${data.href}`)
    // }

    if (!chapterId) { return null }

    // const chapterIndex = aboutChaptersTabData.findIndex(data => data.href == chapterId)
    // const chapterLabel = aboutChaptersTabData[chapterIndex].label
    const execs = execData[chapterId]

    return (
        <>
            <NextSeo
                title={`About: ${''}`}
                description=""
            />
            <AboutTabLayout>
                <Container mt={[2, 2, 2, 2, 16]}>
                    <SimpleGrid
                        w="100%"
                        spacing={4}
                        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                    >

                        {Object.entries(execs).map(([key, val]) => {
                            return <ExecCard key={key} name={val} role={key} />
                        })}
                    </SimpleGrid>
                </Container>
            </AboutTabLayout>
        </>
    )

}

// export async function getServerSideProps(context) {

//     const chapters = await fetchAPI("/chapters", {
//         filters: {
//             slug: {
//                 $eq: context.params.chapterId
//             }
//         },
//         fields: ['slug'],
//         // populate: ['executives']
//         populate: {
//             executives: {
//                 sort: ['name:desc']
//             }
//         }
//     })

//     const execs = chapters.data[0].attributes.executives.data

//     return {
//         props: { execs }, // will be passed to the page component as props
//     }
// }

export default AboutChapterPage