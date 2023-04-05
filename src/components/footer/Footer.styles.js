import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const FooterWrapper = styled('footer')(() => ({
  ...typo.P_S3_R,
  backgroundColor: colors.black,
  color: colors.gray1,

  a: {
    ...typo.P_S3_R,
    color: colors.gray1,
    textDecoration: 'none',

    '&:focus, &:hover': {
      color: colors.brand1,
    },
  },
}));

export const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 'auto',
  maxWidth: '100rem',
  padding: '3rem 2rem 10rem',

  [breakpoints.lteSmallMedia]: {
    flexDirection: 'column',

    '> *': {
      marginBottom: '2rem',
    },
  },

  [breakpoints.smallMedia]: {
    padding: '3rem 4rem 10rem',
  },
}));

export const LinksWrapper = styled('div')(() => ({
  display: 'flex',
  flex: '1 0 auto',

  [breakpoints.extraSmallMedia]: {
    justifyContent: 'space-between',
  },

  [breakpoints.gteMediumMedia]: {
    padding: '0 5%',
  },
}));

export const Div = styled('div')(() => ({
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: 'column',
  minWidth: '14rem',
  width: '25%',

  '> *': {
    marginBottom: '0.5rem',
  },

  [breakpoints.extraSmallMedia]: {
    minWidth: '30%',
  },
}));

export const H6 = styled('h6')(() => ({
  ...typo.P_S3_B,
  color: colors.gray0,
  textTransform: 'uppercase',
}));

export const Copy = styled('div')(() => ({
  ...typo.P_S3_B,
  fontStyle: 'italic',

  [breakpoints.lteSmallMedia]: {
    marginTop: '3rem',
  },
}));
