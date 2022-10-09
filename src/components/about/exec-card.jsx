import { Avatar, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ExecCard = (props) => {
    const { name, avatar, role } = props
    return (
        <Stack p={8} bg="blackAlpha.50"
            bgGradient="linear(to-b, whiteAlpha.500, transparent)"
            textAlign="center" alignItems={'center'}
            spacing={6} width="auto">
            <Avatar color="white" bg="brand.primary" size="2xl" name={name} />
            <Stack>
                <Heading size="md">{name}</Heading>
                <Text>{role || 'Member'}</Text>
            </Stack>
        </Stack>
    )
}

export default ExecCard