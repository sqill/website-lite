import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'fixed',
  right: '-1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: '10',

  a: {
    ...typo.H2,
    alignItems: 'center',
    backgroundColor: colors.blackA30,
    borderRadius: '1rem',
    color: colors.green3,
    display: 'flex',
    marginBottom: '1rem',
    padding: '1rem 2rem 1rem 1rem',
    textTransform: 'uppercase',

    '> div': {
      display: 'none',
      marginRight: '1rem',
    },

    '&:focus, &:hover': {
      '> div': {
        display: 'block',
      },
    },
  },

  [breakpoints.extraSmallMedia]: {
    'a > div': {
      display: 'none !important',
    },
  },
}));
