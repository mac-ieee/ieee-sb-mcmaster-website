import { TagLabel, Tag, TagLeftIcon, Wrap, WrapItem } from '@chakra-ui/react'
import { IconUsers } from '@tabler/icons'
import React from 'react'

const ChapterBadges = (props) => {
    const { data } = props
    return (
        <Wrap>
            <WrapItem>
                {data.meetingTimes && <Tag colorScheme="messenger" size="lg">
                    <TagLeftIcon boxSize='16px' as={IconUsers} />
                    <TagLabel>Meeting Times: {data.meetingTimes}</TagLabel>
                </Tag>}
            </WrapItem>
        </Wrap>
    )
}

export default ChapterBadges