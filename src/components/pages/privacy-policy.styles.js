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
  margin: '0 auto 3rem',
  maxWidth: '80rem',
}));

export const Content = styled('div')(() => ({
  display: 'flex',

  '> div': {
    width: '100%',
  },

  span: {
    marginRight: '0.5rem',
  },

  table: {
    borderBottom: `0.2rem solid ${colors.brand1}`,
    borderTop: `0.2rem solid ${colors.brand1}`,
    textAlign: 'center',

    thead: {
      color: colors.brand1,
    },

    tr: {
      borderTop: `0.1rem solid ${colors.brand1}`,
    },

    th: {
      padding: '0.5rem 1rem',
    },

    td: {
      padding: '1rem',
    },
  },
}));

export const H1 = styled('h1')(() => ({
  ...typo.H2,
  color: colors.brand,
  marginBottom: '6rem',
  textAlign: 'center',
}));

export const Div = styled('div')(() => ({
  marginBottom: '3rem',
}));

export const Ol = styled('ol')(() => ({
  counterReset: 'li',
  listStyle: 'none',
}));

export const Li = styled('li')(() => ({
  counterIncrement: 'li',

  '&:before': {
    content: 'counter(li) "."',
    color: colors.brand1,
    display: 'inline-block',
    paddingRight: '0.5rem',
  },
}));
