import { weight } from '@sqill/theme/fonts';

const baseStyles = (fontSize, fontWeight, lineHeight) => ({
  fontSize,
  fontWeight,
  lineHeight,
});

export const H1 = {
  ...baseStyles('3.5rem', weight.extrabold, '4.2rem'),
  fontStyle: 'italic',
  letterSpacing: '-0.02em',
};

export const H1_Logo = {
  ...baseStyles('6rem', weight.extrabold, '7.2rem'),
  fontStyle: 'italic',
  letterSpacing: '-0.02em',
};

export const H1_S1 = {
  ...baseStyles('4.6rem', weight.extrabold, '5.5rem'),
  fontStyle: 'italic',
  letterSpacing: '-0.02em',
};

export const H1_S2 = {
  ...baseStyles('3rem', weight.extrabold, '3.6rem'),
  fontStyle: 'italic',
  letterSpacing: '-0.02em',
};

export const H2 = {
  ...baseStyles('2rem', weight.extrabold, '2.4rem'),
  fontStyle: 'italic',
  letterSpacing: '-0.02em',
};

export const H2_S2 = {
  ...baseStyles('2.4rem', weight.extrabold, '2.9rem'),
  letterSpacing: '-0.02em',
};

export const H3 = {
  ...baseStyles('1.5rem', weight.extrabold, '1.8rem'),
  fontStyle: 'italic',
  letterSpacing: '-0.02em',
};

export const H3_B = {
  ...baseStyles('1.5rem', weight.bold, '1.8rem'),
  fontStyle: 'italic',
  letterSpacing: '-0.02em',
};

export const H3_S1 = {
  ...baseStyles('1.8rem', weight.extrabold, '2.2rem'),
  fontStyle: 'italic',
  letterSpacing: '-0.02em',
};

export const P_R = {
  ...baseStyles('1.4rem', weight.regular, '2.1rem'),
};

export const P_EB = {
  ...baseStyles('1.4rem', weight.extrabold, '1.7rem'),
  fontStyle: 'italic',
};

export const P_S1_R = {
  ...baseStyles('2rem', weight.regular, '3rem'),
};

export const P_S2_R = {
  ...baseStyles('1.3rem', weight.regular, '1.9rem'),
};

export const P_S2_M = {
  ...baseStyles('1.3rem', weight.medium, '1.9rem'),
};

export const P_S3_R = {
  ...baseStyles('1.1rem', weight.regular, '1.7rem'),
};

export const P_S3_M = {
  ...baseStyles('1.1rem', weight.medium, '1.7rem'),
};

export const P_S3_B = {
  ...baseStyles('1.1rem', weight.bold, '1.7rem'),
};
