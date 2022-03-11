import styled from '@emotion/styled';

import * as colors from '@sqill/theme/colors';

export const Wrapper = styled('div')(() => ({
  alignItems: 'center',
  backgroundColor: colors.blackA50,
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  top: 0,
  width: '100vw',
  zIndex: '9',
}));

export const Div = styled('div')(() => ({
  display: 'inline-flex',
  marginTop: '-5rem',
  position: 'relative',
  width: 'auto',
  zIndex: '10',
}));
