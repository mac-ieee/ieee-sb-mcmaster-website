import { Box, Stack, Image, Heading, Spacer, Icon } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { IconGitBranch } from '@tabler/icons'
import Link from 'next/link'
import React from 'react'
import { chapterInfo } from '../../../data/data'

const ChapterCard = (props) => {
    const { chapterData } = props
    return <Link href={`/chapter/${props.chapterId}`}>
        <a>
            <Stack bg="whiteAlpha.800" rounded="xl" p={2} pr={4} alignItems="center" direction="row">
                <Image boxSize="8" src={chapterData.logo} alt={`Chapter Logo for ${chapterData.name}`}></Image>
                <Prose><Heading as="h4" my="0 !important" >{chapterData.emoji} {chapterData.name}</Heading></Prose>
            </Stack>
        </a>
    </Link>

}

const SbChapterBranches = () => {
    return (
        <Stack p={2} direction="row" alignItems={"center"} bg="blackAlpha.50">

            <Stack direction="row" alignItems="center">
                <Icon as={IconGitBranch} boxSize="12" />
                <Prose>
                    <Heading my="0 !important" as="h1">BRANCHES -{'>'}</Heading>
                </Prose>
            </Stack>

            <Spacer />
            {Object.entries(chapterInfo).map(([id, val]) => {
                return <ChapterCard key={val.name} chapterData={val} chapterId={id} />
            })}
        </Stack>
    )
}

export default SbChapterBranches