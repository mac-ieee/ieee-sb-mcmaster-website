import { Heading, Box, Icon, Stack, Container, Image } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react'

const HeaderSection = (props) => {
    const { title, icon, useImage = false } = props
    return (
        <Box py={4}
            bgGradient="linear(to-b, blackAlpha.100, blackAlpha.50)"
        >
            <Container>
                <Prose>
                    <Stack direction={['column', 'column', undefined, undefined, 'row']} alignItems="center" justify={'center'} gap={2}>
                        {useImage ? <Image src={icon} alt={`Logo for ${title}`} boxSize={[12, 12, 10, 10]} /> : <Icon as={icon} strokeWidth="1.5px" boxSize={[12, 12, 10, 10]} color="brand.primary" bg="brand.secondary" p={2} rounded="xl" />}
                        <Heading textAlign="center" my="0 !important" as={"h1"} fontWeight="700 !important">{title}</Heading>
                    </Stack>
                </Prose>
            </Container>
        </Box>
    )
}

export default HeaderSection