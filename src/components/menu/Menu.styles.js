import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const Div = styled('div')(() => ({
  ...typo.P_S2_R,
  backgroundColor: colors.black,
  position: 'fixed',
  top: '0',
  width: '100vw',
  zIndex: '10',

  a: {
    color: colors.brand,
    display: 'inline-flex',
    padding: '0 0.5rem',
    textDecoration: 'none',

    '&:focus, &:hover': {
      color: colors.brand1,
    },
  },
}));

export const Wrapper = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 'auto',
  maxWidth: '100rem',
  padding: '1rem 2rem',

  [breakpoints.extraSmallMedia]: {
    flexWrap: 'wrap',
  },
}));

export const Nav = styled('nav')(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  width: '65%',

  [breakpoints.extraSmallMedia]: {
    flex: '1 0 100%',
    marginTop: '1rem',
    order: '2',
  },
}));
