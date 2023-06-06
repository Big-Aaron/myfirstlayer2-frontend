import { LXDAOIntroduction } from '@lxdao/lxdao-ui';
import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import React from 'react';

import { Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { DIRECTORY_NAME } from '../common/constans';
import Footer from '../components/Footer';
import Content from '../contents/Index';
import Main from '../layouts/Main';
import SectionMyFirstProject from '../sections/SectionMyFirstProject';
import SectionSponsors from '../sections/SectionSponsors';
import SectionTeam from '../sections/SectionTeam';
import { formatDirectory, getDocBySlug } from '/utils';

export default function Index({ content, directory }) {
  const theme = useTheme();
  return (
    <Main>
      <Content md={<MDXRemote {...content} file={directory} />} />
      <SectionMyFirstProject />
      <SectionSponsors />
      <SectionTeam />
      <Box id="joinus" paddingTop={{ xs: '50px', md: 15 }} marginBottom={{  md: 15 }} paddingX={0}>
        <LXDAOIntroduction imgBackground={`${theme?.palette.bodyBg.main}`} titleColor={theme?.palette?.mode === 'dark' ? '#fff' : '#141414'} detailColor={theme?.palette?.mode === 'dark' ? '#fff' : '#667085'} maxWidth="1240px" xsWidth="326px" />
      </Box>
      <Footer />
    </Main>
  );
}

export async function getStaticProps(params) {
  const { locale = 'en' } = params;

  const { content, meta } = getDocBySlug(DIRECTORY_NAME[0]?.text, locale);
  const mdxSource = await serialize(content);
  return {
    props: {
      messages: (await import(`../locale/${locale}.json`)).default,
      content: mdxSource,
      meta,
      directory: DIRECTORY_NAME,
    },
  };
}
