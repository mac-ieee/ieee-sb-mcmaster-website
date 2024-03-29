import { Center, Container, Heading, Stack } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react'

const HeroSection = () => {
    return (
        <Container pos="relative" p={[8, 12, 16, 32, 48]} bg="brand.primary" roundedBottom={'xl'}>
            {/* <Center pos="absolute">
                <Icon as={IconCpu} boxSize="200" strokeWidth={1} transform="auto-gpu" rotate={'45'} />
            </Center> */}
            <Prose>
                <Center>
                    <Stack>
                        <Heading my={'0 !important'} color="white" as="h3" fontWeight="300 !important" >Welcome to the</Heading>
                        <Heading my={'0 !important'} color="brand.secondary" as="h1">IEEE McMaster Student Branch</Heading>
                    </Stack>
                </Center>
            </Prose>
        </Container>
    )
}

export default HeroSection