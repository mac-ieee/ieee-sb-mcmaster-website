import { Heading, Box, Icon, Stack } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react'

const HeaderSection = (props) => {
    const { title, icon, alt } = props
    return (
        <Box p={alt ? 0 : 2} py={alt ? 2 : 0} bg={alt ? 'transparent' : "blackAlpha.50"}>
            <Prose>
                <Stack direction={['column', 'column', undefined, undefined, 'row']} alignItems="center">
                    <Icon as={icon} display={['none', undefined, undefined, 'block', 'block']} strokeWidth="1.5px" boxSize={[9, 9, 10, 10]} color="brand.primary" bg="brand.secondary" p={2} rounded="xl" />
                    <Heading my="0 !important" as={"h1"} fontWeight="700 !important">{title}</Heading>
                </Stack>
            </Prose>
        </Box>
    )
}

export default HeaderSection