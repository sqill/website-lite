import styled from '@emotion/styled';

import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const StyledButton = styled('button')(() => ({
  ...typo.H2,
  backgroundColor: colors.green3,
  border: `0.1rem solid ${colors.gray0}`,
  borderRadius: '1.5rem',
  color: colors.white,
  cursor: 'pointer',
  marginLeft: '50%',
  marginTop: '1rem',
  padding: '0.5rem 2rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  transform: 'translateX(-50%)',
  width: '20rem',
}));
