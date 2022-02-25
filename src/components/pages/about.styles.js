import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const Section = styled('section')(() => ({
  ...typo.P_R,
  backgroundImage: `linear-gradient(${colors.black}, ${colors.gray2})`,
  color: colors.white,
  padding: '6rem 2rem 10rem',

  [breakpoints.smallMedia]: {
    padding: '6rem 4rem 10rem',
  },
}));

export const Wrapper = styled('div')(() => ({
  margin: 'auto',
  maxWidth: '80rem',
}));

export const ManifestoWrapper = styled('div')(() => ({
  backgroundColor: colors.whiteA60,
  borderRadius: '2rem',
  padding: '2rem 3rem',
}));

export const SignatureWrapper = styled('div')(() => ({
  ...typo.H3,
  color: colors.black,
  display: 'flex',
  justifyContent: 'flex-end',

  span: {
    marginLeft: '0.5rem',
    paddingTop: '0.2rem',
  },
}));

export const LogosWrapper = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '50%',
  maxWidth: '100vw',
  transform: 'translateX(-50%)',
  width: '100rem',

  '> div': {
    maxHeight: '9rem',
    maxWidth: '18rem',
    padding: '0 2rem',
  },

  [breakpoints.extraSmallMedia]: {
    flexWrap: 'wrap',
    justifyContent: 'center',

    '> div': {
      maxHeight: '10rem',
      maxWidth: '14rem',
      margin: '2rem 0',
    },
  },
}));

export const H1 = styled('h1')(() => ({
  ...typo.H1,
  color: colors.white,
  marginBottom: '6rem',
  textAlign: 'center',
}));

export const H2 = styled('h2')(() => ({
  ...typo.H2_S2,
  color: colors.green2,
  fontStyle: 'italic',
  margin: '0',
  textAlign: 'center',
}));

export const StyledH2 = styled('h2')(() => ({
  ...typo.H2,
  color: colors.whiteA60,
  fontStyle: 'italic',
  margin: '6rem 0 4rem',
  textAlign: 'center',
}));

export const H3 = styled('h3')(() => ({
  ...typo.H2_S2,
  color: colors.black,
  fontStyle: 'italic',
  margin: '2rem 0',
  textAlign: 'center',
}));

export const Div = styled('div')(() => ({
  color: colors.black,
  marginBottom: '3rem',

  b: {
    display: 'inline-flex',
    fontStyle: 'italic',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',

    span: {
      padding: '0 0.2rem',
    },
  },

  span: {
    color: colors.green3,
  },
}));
