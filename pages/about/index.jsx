import { Container } from '@chakra-ui/react'
import { DataTabs } from 'components/common/data-tabs'
import HeaderSection from 'components/common/header-section'
import { useRouter } from 'next/router'
import React from 'react'



export const aboutChaptersTabData = [
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

const AboutPage = () => {
    const router = useRouter()
    router.push(`/about/main-branch`)
}
// export async function getStaticProps({ params }) {

// }
export default AboutPage