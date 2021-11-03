import React from 'react';
import { Container, Heading, Box, Stack } from '@chakra-ui/react';
import { useRouteMatch, useParams } from 'react-router';
import { teamData } from 'data/teamData';
import ChapterHeader from 'app/components/ChapterHeader';
import Marquee from 'react-fast-marquee';
import MainBranchPg from './ChapterPages/MainBranchPg';
import { responsiveSpacing } from 'styles/chakraTheme';
import { Helmet } from 'react-helmet-async';
import ComputerChapterPg from './ChapterPages/ComputerChapterPg';
import EMBSChapterPg from './ChapterPages/EMBSChapterPg';
import PESChapterPg from './ChapterPages/PESChapterPg';

interface Props {}

const Chapters = () => {
  const { chapterId } = useParams<any>();
  const { name, logo, headline } = teamData[chapterId];

  const renderChapter = React.useCallback(() => {
    switch (chapterId) {
      case 'main-branch':
        return <MainBranchPg />;
      case 'computer':
        return <ComputerChapterPg />;
      case 'power-and-energy-society':
        return <PESChapterPg />;
      case 'engineering-in-medicine-and-biology-society':
        return <EMBSChapterPg />;
      default:
        return null;
    }
  }, [chapterId]);
  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={headline} />
      </Helmet>
      <Box className="navbar-offset" />
      <Box
        pos="absolute"
        bg="black"
        w="100vw"
        h={{ base: '75px', lg: '100px' }}
        zIndex={-1}
      >
        <Marquee
          gradient={false}
          style={{ overflowY: 'hidden', height: '100%' }}
        >
          {[...Array(10).keys()].map(n => {
            return (
              <Heading color="white">
                {name.toUpperCase()}&nbsp;{teamData[chapterId].emoji}&nbsp;
              </Heading>
            );
          })}
        </Marquee>
      </Box>
      <Container py={{ base: 4, lg: 8 }}>
        <Stack spacing={responsiveSpacing}>
          <ChapterHeader id={chapterId} />
          {teamData[chapterId].headline && (
            <Box p={responsiveSpacing}>
              <Heading
                fontSize={{ base: 'lg', md: '4xl' }}
                fontWeight="300"
                textAlign="center"
              >
                {teamData[chapterId].headline}
              </Heading>
            </Box>
          )}

          {renderChapter()}
        </Stack>
      </Container>
    </>
  );
};

export default Chapters;
