import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const Section = styled('section')(() => ({
  ...typo.P_R,
  backgroundImage: `linear-gradient(${colors.gray0}, ${colors.white})`,
  color: colors.black,
  overflow: 'hidden',
  padding: '6rem 2rem 10rem',

  [breakpoints.smallMedia]: {
    padding: '6rem 4rem 10rem',
  },
}));

export const Wrapper = styled('div')(() => ({
  margin: 'auto',
  maxWidth: '80rem',
}));

export const H1 = styled('h1')(() => ({
  ...typo.H1_S1,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '3rem',
  textAlign: 'center',
}));
