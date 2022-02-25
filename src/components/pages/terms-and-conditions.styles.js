import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const Section = styled('section')(() => ({
  ...typo.P_R,
  backgroundImage: `linear-gradient(${colors.gray2}, ${colors.black})`,
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

export const H1 = styled('h1')(() => ({
  ...typo.H2,
  color: colors.green1,
  marginBottom: '6rem',
  textAlign: 'center',
}));

export const H2 = styled('h2')(() => ({
  ...typo.H3,
  color: colors.white,
  margin: '3rem 0',
  textAlign: 'center',
}));

export const Div = styled('div')(() => ({
  marginBottom: '3rem',
}));
