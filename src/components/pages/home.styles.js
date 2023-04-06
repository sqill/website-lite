import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const Section = styled('section')(() => ({
  ...typo.P_R,
  backgroundImage: `linear-gradient(${colors.gray0}, ${colors.white}, ${colors.gray0}, ${colors.white}, ${colors.gray0})`,
  color: colors.black,
  overflow: 'hidden',
  padding: '6rem 2rem 10rem',

  [breakpoints.smallMedia]: {
    padding: '6rem 4rem 10rem',
  },
}));

export const Wrapper = styled('div')((props) => ({
  ...(props.isFlex && { display: 'flex' }),
  margin: 'auto',
  maxWidth: '80rem',
  padding: props.isSpaced ? '10rem 0' : '4rem 0',
}));

export const Hero = styled('div')(() => ({
  display: 'flex',
  marginLeft: '50%',
  marginTop: '6rem',
  maxWidth: '100vw',
  padding: '0 6rem',
  textAlign: 'center',
  transform: 'translateX(-50%)',
  width: '140rem',

  '> div': {
    flex: '1',
  },

  [breakpoints.extraSmallMedia]: {
    flexDirection: 'column-reverse',
    marginTop: '3rem',
    padding: '0',
    width: '100%',
  },
}));

export const HeroContent = styled('div')(() => ({
  marginRight: '9rem',
  maxWidth: '48rem',

  [breakpoints.extraSmallMedia]: {
    marginRight: '0',
    maxWidth: '100%',
  },
}));

export const ImageWrapper = styled('div')(() => ({
  paddingTop: '6rem',

  [breakpoints.extraSmallMedia]: {
    padding: '0 0 3rem',
  },
}));

export const StepImage = styled('div')(() => ({
  width: '60%',

  [breakpoints.extraSmallMedia]: {
    padding: '0 2rem',
    width: '100%',
  },
}));

export const StepWrapper = styled('div')((props) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: props.isOdd ? 'row' : 'row-reverse',
  marginTop: '6rem',
  justifyContent: 'space-between',
  textAlign: 'center',
  textTransform: 'uppercase',

  '> div:first-child': {
    maxWidth: '30rem',
  },

  [breakpoints.extraSmallMedia]: {
    flexDirection: 'column-reverse',
    padding: '0 1rem',
  },
}));

export const IconsWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',

  [breakpoints.extraSmallMedia]: {
    flexDirection: 'column',
    alignItems: 'center',

    '> div': {
      marginBottom: '3rem',
    },
  },
}));

export const IconGrid = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 'calc(33% - 4rem)',
  margin: '0 2rem',
  maxWidth: '40rem',
  textAlign: 'center',
}));

export const IconImage = styled('div')(({ width, height }) => ({
  margin: '0 auto',
  maxHeight: `${height}px`,
  maxWidth: `${width}px`,
}));

export const H1 = styled('h1')(() => ({
  ...typo.H1_Logo,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 0 3rem -1rem',
  textAlign: 'left',
  textShadow: colors.shadow,

  [breakpoints.extraSmallMedia]: {
    ...typo.H2_S2,
  },
}));

export const H2 = styled('h2')(() => ({
  ...typo.H2_S2,
  textShadow: colors.shadow,
  textTransform: 'uppercase',
}));

export const StyledH2 = styled('h2')(() => ({
  ...typo.H1,
  fontStyle: 'none',
  margin: '6rem auto',
  textAlign: 'center',
  textShadow: colors.shadow,
  textTransform: 'uppercase',
}));

export const H3 = styled('h3')(() => ({
  ...typo.H1_S1,
  color: colors.black,
  lineHeight: '70%',
  marginBottom: '2rem',
  marginTop: '6rem',
  textShadow: colors.shadow,
  textTransform: 'uppercase',

  div: {
    marginBottom: '1rem',
  },

  span: {
    ...typo.H2_S2,
    color: colors.white,
    fontStyle: 'italic',
    lineHeight: '0',
  },

  [breakpoints.extraSmallMedia]: {
    ...typo.H1,
    marginBottom: '1rem',

    span: {
      ...typo.H2,
    },
  },
}));

export const StyledP = styled('p')(() => ({
  ...typo.H2_S2,
  color: colors.white,
  fontStyle: 'italic',
  textShadow: colors.shadow,
  textTransform: 'uppercase',
}));

export const Div = styled('div')(() => ({
  ...typo.P_S1_R,
  lineHeight: '2.4rem',
  margin: '2rem 0',
  textAlign: 'justify',
  textTransform: 'uppercase',
}));

export const Partners = styled('div')(() => ({
  margin: '1rem 0',
}));

export const PartnersLogos = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const PartnerLogo = styled('div')(() => ({
  margin: '1.5rem',
}));

export const PartnersSubtitle = styled('h6')(() => ({
  ...typo.H3,
  fontStyle: 'none',
  textTransform: 'uppercase',
}));

export const P = styled('p')(() => ({
  ...typo.H3_S1,
  margin: '3rem 0 0',
  maxWidth: '20rem',
}));
