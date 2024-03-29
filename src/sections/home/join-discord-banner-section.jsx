import { Button, Container, Heading, Stack, Spacer } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react'
import { socialInfo } from '../../../data'

const JoinDiscordBannerSection = () => {
    return (
        <Container>
            <Prose>
                <Stack p="8" spacing={{ base: 4, md: 8 }} rounded="xl" bgGradient='linear(to-r, #242EA7, #8E8AF7)' direction={["column", "column", "row"]} alignItems={['baseline', 'center']}>
                    <Heading as={'h3'} my="0 !important" color="white">Interested in becoming a member?</Heading>
                    <Spacer display={{ base: 'none', sm: 'block' }} />
                    <Button onClick={() => window.open(socialInfo.discord)} size="lg" variant="white">Join our Discord!</Button>
                </Stack>
            </Prose>
        </Container>
    )
}

export default JoinDiscordBannerSection