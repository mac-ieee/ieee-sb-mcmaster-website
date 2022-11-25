import { AspectRatio, Box, Center, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { IconHeartHandshake, IconServicemark } from '@tabler/icons'
import HeaderSection from 'components/common/header-section'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'
import { servicesData } from '../../data'
// import { chapterInfo } from '../../data'

const ServicePage = () => {
    // const chapter = chapterInfo['main-branch']
    return (
        <>
            <NextSeo
                title={`Services`}
                description=""
            />
            <HeaderSection title={'Services'} icon={IconHeartHandshake}></HeaderSection>
            <Container mt={[2, 2, 2, 2, 16]}>
                <SimpleGrid gap="4" columns={[1, 1, 2, 2, 3, 3]}>
                    {Object.entries(servicesData).map(([key, val]) => {
                        return <Link key={key} href={`/services/${key}`}>
                            <a>
                                <AspectRatio borderRadius={'xl'} className='anim-smooth hover-opacity' bg="blackAlpha.600" bgImage={val.bg} bgSize="cover" ratio={1}>
                                    <Flex alignItems={'end !important'} justifyContent={'start !important'}>
                                        <Box p={4}
                                            w="100%"
                                            bg="brand.primary" borderBottomRadius={'xl'}
                                        >
                                            <Heading color="brand.secondary" fontSize="lg" my="0 !important">{val.title}</Heading>
                                            <Text color="white">{val.desc}</Text>
                                        </Box>
                                    </Flex>
                                </AspectRatio>
                            </a>
                        </Link>
                    })}
                </SimpleGrid>

            </Container>
        </>

    )
}


export default ServicePage