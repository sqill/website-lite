import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';

export const Main = styled('main')(() => ({
  paddingTop: '6rem',

  [breakpoints.extraSmallMedia]: {
    paddingTop: '9rem',
  },
}));
