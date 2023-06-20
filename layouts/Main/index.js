import { useLocale } from 'next-intl';
import { useEffect } from 'react';

import { Box, Divider, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import Container from '../../components/Container';
import LXDAOLogo from '../../components/LXDAOLogo';
import Language from '../../components/Language';
import { MFL2ConnectButton } from '../../components/MFL2ConnectButton';
import MFL2 from '../../components/svg/MFL2';
import Question from '../../components/svg/Question';
import SectionTop from '../../sections/SectionTop';

const Main = ({ children = false }) => {
  const locale = useLocale();
  const theme = useTheme();
  const titles = {
    en: [
      { href: '#introduce', title: 'Introduce' },
      { href: '#content', title: 'Content' },
      { href: '#joinus', title: 'Join Us' },
    ],
    zh: [
      { href: '#introduce', title: '介绍' },
      { href: '#content', title: '内容' },
      { href: '#joinus', title: '加入我们' },
    ],
  };

  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const font = new FontFace('sucaijishikangkangti', 'url(/font/sucaijishikangkangti-2-webfont.woff2)');
    document.fonts.add(font);
    font.load();
  }, []);

  return (
    <>
      <Box id="fixed-header" bgcolor={'header.main'} zIndex={100} width={'100vw'} top={0} borderBottom="1px solid #1B1B1B">
        {smallScreen ? (
          <Container display="flex" flexDirection="column" gap={1} alignItems="center" paddingY={2} width="100%">
            <Stack width="100%" height="45px" direction="row" justifyContent="space-between">
              <Box display="flex" flexDirection="row" alignItems="center" mr='20px'>
                <Box component={'img'} src='/mfl2-logo-new.svg' />
                <Divider
                  orientation="vertical"
                  sx={{
                    borderColor: theme.palette.primary.contrastText,
                    height: '20px',
                    marginInline: '15px',
                  }}
                />
                <Box component='img' src='/lxdao-logo-white.svg' />

              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }} zIndex={10}>
                <Language color={theme.palette.primary.contrastText} />
              </Box>
            </Stack>
            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
              <Box minWidth="240px" height="36px" justifyContent="start" gap={3} alignItems="center" display="flex" mr="30px">
                {titles[locale].map((v, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          cursor: 'pointer',
                          fontSize: '15px',
                          fontWeight: '500',
                        }}
                      >
                        <Link
                          sx={{
                            textDecoration: 'none',
                            color: theme.palette.primary.contrastText,
                          }}
                          href={v.href}
                          target="_self"
                        >
                          {v.title}
                        </Link>
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              <MFL2ConnectButton />
            </Box>
          </Container>
        ) : (
          <Container maxWidth="1307px" paddingY="20px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" >
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box component={'img'} src='/mfl2-logo-new.svg' />

              {/* <MFL2 color={theme.palette.primary.contrastText} /> */}
              <Divider
                orientation="vertical"
                sx={{
                  borderColor: theme.palette.primary.contrastText,
                  height: '16px',
                  marginInline: '13px',
                }}
              />
              <Box component='img' src='/lxdao-logo-white.svg' />
              <Box
                sx={{
                  left: 0,
                  width: '300px',
                  right: 0,
                  margin: '0 auto',
                  ml: '60px',
                }}
              >
                <Box gap={4} display="flex" alignItems="center">
                  {titles[locale].map((v, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '15px',
                          lineHeight: '1.5',
                          fontWeight: '600',
                        }}
                      >
                        <Link
                          sx={{
                            textDecoration: 'none',
                            color: theme.palette.primary.contrastText,
                            cursor: 'pointer',
                          }}
                          href={v.href}
                          target="_self"
                        >
                          {v.title}
                        </Link>
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} zIndex={10}>
              {/* <Theme color={theme.palette.primary.contrastText} style={{ cursor: 'pointer' }} onClick={colorMode.toggleColorMode} /> */}
              <Language color={theme.palette.primary.contrastText} />

              <MFL2ConnectButton />

              {/* <Question color={theme.palette.primary.contrastText} style={{ margin: '12.5px', marginLeft: '21px' }} /> */}
            </Box>
          </Container>
        )}
      </Box>
      <Box bgcolor="bodyBg.main" component="main" id="main" >
        {children}
      </Box>
    </>
  );
};

export default Main;
