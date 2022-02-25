import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as typo from '@sqill/theme/typography';

export const Section = styled('section')(() => ({
  ...typo.P_R,
  padding: '6rem 2rem 10rem',
  position: 'relative',

  [breakpoints.smallMedia]: {
    padding: '6rem 4rem 10rem',
  },
}));
