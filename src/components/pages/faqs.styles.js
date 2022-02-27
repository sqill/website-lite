import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const Section = styled('section')(() => ({
  ...typo.P_R,
  backgroundImage: `linear-gradient(${colors.green0}, ${colors.brand})`,
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

export const Tabs = styled('div')(() => ({
  margin: '0 auto',
  maxWidth: '60rem',
}));

export const Tab = styled('div')(() => ({
  backgroundColor: colors.whiteA60,
  borderRadius: '2rem',
  marginBottom: '2rem',
  overflow: 'hidden',
  padding: '1rem',

  input: {
    opacity: '0',
    position: 'absolute',
    zIndex: '-1',
  },

  'input:checked': {
    '~ div': {
      maxHeight: '100vh',
      padding: '1rem 3rem 3rem',

      [breakpoints.smallMedia]: {
        padding: '1rem 2rem',
      },
    },
  },
}));

export const H1 = styled('h1')(() => ({
  ...typo.H1,
  color: colors.white,
  marginBottom: '6rem',
  textAlign: 'center',
}));

export const Label = styled('label')(() => ({
  ...typo.H3,
  color: colors.black,
  cursor: 'pointer',
  display: 'block',
  textAlign: 'center',
}));

export const Div = styled('div')(() => ({
  color: colors.black,
  maxHeight: 0,
  textAlign: 'center',
  transform: 'translateY(1rem)',
  transition: 'maxHeight 200ms',

  ul: {
    textAlign: 'left',
  },
}));
