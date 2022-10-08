import { Button, Container, Heading, Stack, Spacer } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { IconBrandDiscord } from '@tabler/icons'
import React from 'react'

const JoinDiscordBannerSection = () => {
    return (
        <Container>
            <Prose>
                <Stack p="8" rounded="xl" bgGradient='linear(to-r, #242EA7, #8E8AF7)' direction={["column", "row"]} alignItems={['baseline', 'center']} spacing="4">
                    <Heading as={'h3'} my="0 !important" color="white">Interested in joining us?</Heading>
                    <Spacer />
                    <Button size="md" variant="white" leftIcon={<IconBrandDiscord />}>Hop into the Discord!</Button>
                </Stack>
            </Prose>
        </Container>
    )
}

export default JoinDiscordBannerSection