import { Box, Container, Divider, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box p={4}>
            <Container>
                <Stack spacing={4}>
                    <Divider borderColor="blackAlpha.300" />
                    <Text>©2021 IEEE McMaster Student Branch.</Text>
                </Stack>

            </Container>

        </Box>
    )
}

export default Footer