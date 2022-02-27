import styled from '@emotion/styled';

import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

export const StyledForm = styled('form')(() => ({
  margin: '0 auto',
  maxWidth: '25rem',
}));

export const Div = styled('div')(() => ({
  ...typo.P_S1_R,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto 1rem',
  maxWidth: '55rem',
  textAlign: 'center',
}));

export const Label = styled('label')(() => ({
  ...typo.P_R,
}));

export const Input = styled('input')(() => ({
  ...typo.P_S2_M,
  backgroundColor: colors.whiteA60,
  border: `0.1rem solid ${colors.gray0}`,
  borderRadius: '1.5rem',
  color: colors.black,
  padding: '1rem 2rem',
  textAlign: 'center',
  width: '100%',
}));

export const Button = styled('button')(() => ({
  ...typo.H2,
  backgroundColor: colors.green3,
  border: `0.1rem solid ${colors.gray0}`,
  borderRadius: '1.5rem',
  color: colors.white,
  cursor: 'pointer',
  marginTop: '1rem',
  padding: '0.5rem 2rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  width: '100%',
}));

export const P = styled('p')(() => ({
  ...typo.H3,
  marginTop: '2rem',
  textAlign: 'center',
}));
