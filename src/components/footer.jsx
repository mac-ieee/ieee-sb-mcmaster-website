import { Box, Container, Divider, IconButton, Image, Stack, Text, Wrap } from '@chakra-ui/react'
import { IconBrandDiscord, IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons'
import Link from 'next/link'
import React from 'react'
import { contactInfo, socialInfo } from '../../data'

const SocialBtn = () => {

}

const Footer = () => {
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
        <Box p={4}>
            <Container>
                <Stack spacing={4}>
                    <Divider borderColor="blackAlpha.300" />
                    <Wrap spacing={4} fontSize="sm" align='center'>
                        <Image boxSize="5" src="/assets/ieee-sb-mcmaster-logo.png" alt="IEEE McMaster Student Branch Footer Logo"></Image>
                        <Text>©2022 IEEE McMaster Student Branch.</Text>



                        {Object.entries(contactInfo).map(([_, val]) => {
                            return <Link href={val.href} key={_}>{`${_}: ${val.label}`}</Link>
                        })}
                        {renderSocialInfo()}

                        <Link href="https://github.com/mac-ieee/ieee-sb-mcmaster-website">Contribute</Link>
                        <Link href="sitemap">Sitemap</Link>
                    </Wrap>


                </Stack>

            </Container>

        </Box>
    )
}

export default Footer