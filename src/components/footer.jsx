import { Box, Container, Divider, IconButton, Image, Spacer, Stack, Text, Wrap } from '@chakra-ui/react'
import { IconBrandDiscord, IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons'
import Link from 'next/link'
import React from 'react'
import { contactInfo, socialInfo } from '../../data'

const SocialBtn = () => {

}

const Footer = () => {

    const year = React.useMemo(() => new Date().getFullYear(), [])

    const renderSocialInfo = () => {
        return (
            <>
                {Object.keys(socialInfo).map(key => {
                    let icon;
                    const iconProps = {
                        stroke: 1.5
                    }
                    switch (key) {
                        case 'facebook':
                            icon = <IconBrandFacebook {...iconProps} />;
                            break;
                        case 'insta':
                            icon = <IconBrandInstagram {...iconProps} />;
                            break;
                        case 'linkedin':
                            icon = <IconBrandLinkedin {...iconProps} />;
                            break;
                        case 'discord':
                            icon = <IconBrandDiscord {...iconProps} />;
                            break;
                        case 'github':
                            icon = <IconBrandGithub {...iconProps} />;
                            break;
                        default:
                            break;
                    }
                    return (
                        <Link
                            key={key}
                            href={socialInfo[key]}>
                            <a>
                                <IconButton
                                    icon={icon}
                                    variant="ghost"
                                    aria-label={key}
                                    size="md"
                                    isRound
                                />
                            </a>
                        </Link>
                    );
                })}
            </>
        );
    }
    return (
        <Box p={4} mt={[4, 4, 8, 8]}>
            <Container>
                <Stack spacing={4}>
                    <Wrap align="center" spacing={8} justify="base">
                        <Image w="30vh" src="/ece.png" alt="McMaster University Engineering ECE Logo" />
                        {/* <Image h="20vw" src="/ieeecanada.png" alt="IEEE Canada Logo" /> */}
                    </Wrap>

                    <Divider borderColor="blackAlpha.300" />
                    <Wrap spacing={4} fontSize="sm" align='center'>
                        <Image boxSize="5" src="/assets/ieee-sb-mcmaster-logo.png" alt="IEEE McMaster Student Branch Footer Logo"></Image>
                        <Text>{`©${year} IEEE McMaster Student Branch.`}</Text>

                        {Object.entries(contactInfo).map(([_, val]) => {
                            return <Link href={val.href} key={_}>{`${_}: ${val.label}`}</Link>
                        })}
                        {renderSocialInfo()}

                        <Link href="https://github.com/mac-ieee/ieee-sb-mcmaster-website">Contribute</Link>
                        {/* <Spacer />
                        <Link href="sitemap">Sitemap</Link> */}
                    </Wrap>


                </Stack>

            </Container>

        </Box>
    )
}

export default Footer