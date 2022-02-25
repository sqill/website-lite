import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const Section = styled('section')(() => ({
  ...typo.P_R,
  backgroundImage: `linear-gradient(${colors.black}, ${colors.gray2})`,
  color: colors.white,
  minHeight: 'calc(100vh - 6rem)',
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
  ...typo.H1,
  color: colors.white,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',

  span: {
    marginTop: '2rem',
  },
}));

export const H2 = styled('h2')(() => ({
  ...typo.H2,
  color: colors.green2,
  textAlign: 'center',
}));

export const SquareDiv = styled('div')(() => ({
  ...typo.P_S1_R,
  margin: '0 auto',
  maxWidth: '38rem',
  padding: '0 1rem',
  position: 'relative',
  textAlign: 'justify',

  '&:before, &:after': {
    borderBottom: `0.5rem solid ${colors.whiteA60}`,
    borderTop: `0.5rem solid ${colors.whiteA60}`,
    content: '""',
    height: 'calc(100% + 1rem)',
    pointerEvents: 'none',
    position: 'absolute',
    top: '-0.5rem',
    width: '3rem',
  },

  '&:before': {
    borderLeft: `0.5rem solid ${colors.whiteA60}`,
    left: '-1rem',
  },

  '&:after': {
    borderRight: `0.5rem solid ${colors.whiteA60}`,
    right: '-1rem',
  },
}));

export const ButtonWatch = styled('div')(() => ({
  backgroundColor: colors.whiteA60,
  borderRadius: '1rem',
  color: colors.black,
  display: 'inline-flex',
  justifyContent: 'center',
  margin: '6rem 0 6rem 50%',
  padding: '0.5rem 1.5rem',
  transform: 'translateX(-50%)',
}));

export const StoreButtons = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1rem auto',
  maxWidth: '30rem',

  a: {
    display: 'inline-flex',
    padding: '1rem',
  },
}));

export const SportsDiv = styled('div')(() => ({
  ...typo.P_EB,
  alignItems: 'center',
  color: colors.green2,
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '50%',
  marginTop: '6rem',
  maxWidth: '100vw',
  padding: '0 2rem',
  transform: 'translateX(-50%)',
  width: '100rem',

  '> div': {
    flex: '1 0 auto',
  },

  '> span': {
    margin: '0 6rem',
  },

  [breakpoints.extraSmallMedia]: {
    flexDirection: 'column',

    '> span': {
      margin: '1rem 0',
    },
  },

  [breakpoints.smallMedia]: {
    padding: '0 4rem',
  },
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
    color: colors.green1,
    display: 'inline-block',
    paddingRight: '0.5rem',
  },
}));
