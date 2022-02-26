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
}));

export const Hero = styled('div')(() => ({
  display: 'flex',
  marginLeft: '50%',
  marginTop: '6rem',
  maxWidth: '100vw',
  padding: '0 6rem',
  textAlign: 'justify',
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
  maxWidth: '50rem',

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
  padding: '0 3rem',
  width: '55%',

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

  '> div': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '20rem',
    textAlign: 'center',
  },

  p: {
    marginTop: '2rem',
    textTransform: 'uppercase',
  },

  [breakpoints.extraSmallMedia]: {
    flexDirection: 'column',
    alignItems: 'center',

    '> div': {
      marginBottom: '3rem',
    },
  },
}));

export const AndWrapper = styled('div')(() => ({
  textAlign: 'center',

  p: {
    ...typo.H2,
    margin: '3rem 0',
  },

  'ul li': {
    backgroundColor: colors.whiteA60,
    borderRadius: '2rem',
    listStyle: 'none',
    margin: '0 auto 1rem',
    maxWidth: '40rem',
    padding: '0.2rem 2rem',
    textTransform: 'uppercase',
  },
}));

export const Hint = styled('div')(() => ({
  ...typo.H2,
  backgroundColor: colors.whiteA60,
  borderRadius: '2rem',
  color: colors.black,
  margin: '0 auto',
  padding: '1rem 3rem',
  textTransform: 'uppercase',

  [breakpoints.extraSmallMedia]: {
    ...typo.H3,
    padding: '1rem',
    textAlign: 'center',
    width: '100%',
  },
}));

export const H1 = styled('h1')(() => ({
  ...typo.H1_S1,
  alignItems: 'center',
  display: 'flex',
  margin: '0 0 3rem -1rem',

  [breakpoints.extraSmallMedia]: {
    ...typo.H2_S2,
  },
}));

export const H2 = styled('h2')(() => ({
  ...typo.H2_S2,
  textTransform: 'uppercase',

  [breakpoints.extraSmallMedia]: {
    ...typo.H2,
  },
}));

export const StyledH2 = styled('h2')(() => ({
  ...typo.H2_S2,
  color: colors.green3,
  fontStyle: 'italic',
  margin: '6rem auto',
  textAlign: 'center',
  textTransform: 'uppercase',

  [breakpoints.extraSmallMedia]: {
    ...typo.H2,
  },
}));

export const H3 = styled('h3')(() => ({
  ...typo.H1_S1,
  color: colors.black,
  display: 'inline-flex',
  flexDirection: 'column',
  marginBottom: '2rem',
  textTransform: 'uppercase',

  span: {
    ...typo.H2_S2,
    backgroundColor: colors.green3,
    color: colors.white,
    fontStyle: 'italic',
  },

  [breakpoints.extraSmallMedia]: {
    ...typo.H1,
    marginBottom: '1rem',

    span: {
      ...typo.H2,
    },
  },
}));

export const Div = styled('div')(() => ({
  ...typo.P_S1_R,
  margin: '3rem 0',
  textTransform: 'uppercase',
}));
