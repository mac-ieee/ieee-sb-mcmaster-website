import { Heading, Box, Icon, Stack, Container, Image, Badge } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import React from 'react'

const HeaderSection = (props) => {
    const { title, icon, image = true, useImage = false, category = '', noIcon = false } = props
    return (
        <Box
            py={8}
            pt={[8, 8, 8, 8, 24]}
            // mb={[2, 2, 2, 12, 32]}
            bg=""
            bgGradient="linear(to-b, blackAlpha.100, blackAlpha.50)"
            roundedBottom="xl"
        >
            <Container>
                <Prose>
                    <Stack direction={['column', 'column', undefined, undefined, 'row']}
                        alignItems="center"
                        // justify="center"
                        gap={2}
                    >
                        {useImage ? <Image
                            src={icon}
                            alt={`Logo for ${title}`}
                            boxSize={[12, 12, 10, 10]} /> :
                            !noIcon &&
                            <Icon
                                as={icon}
                                strokeWidth="1.5px"
                                boxSize={[12, 12, 10, 10]}
                                color="brand.primary"
                                bg="brand.secondary"
                                p={2}
                                rounded="xl" />
                        }
                        <Heading textAlign="center" my="0 !important" as={"h1"} fontWeight="700 !important">{title}</Heading>
                        {category && <Badge rounded="sm" colorScheme="messenger">
                            <Heading as="h4" my="0 !important">{category}</Heading>
                        </Badge>}
                    </Stack>
                </Prose>
            </Container>
        </Box >
    )
}

export default HeaderSection