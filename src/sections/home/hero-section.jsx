import { Box, Center, Container, Heading, Stack } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react'

const HeroSection = () => {
    return (
        <Container p={[8, 16, 32, 32, 32]} bg="brand.primary" rounded="xl">
            <Prose>
                <Center>
                    <Stack>
                        <Heading my={'0 !important'} color="white" as="h3" >Welcome to the</Heading>
                        <Heading my={'0 !important'} color="brand.secondary" as="h1">IEEE McMaster Student Branch</Heading>
                    </Stack>
                </Center>
            </Prose>
        </Container>
    )
}

export default HeroSection