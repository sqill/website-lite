import styled from '@emotion/styled';

import * as breakpoints from '@sqill/theme/breakpoints';
import * as colors from '@sqill/theme/colors';
import * as typo from '@sqill/theme/typography';

const commonSectionStyles = {
  ...typo.P_R,
  color: colors.white,
  minHeight: 'calc(100vh - 6rem)',
  overflow: 'hidden',
  padding: '6rem 2rem 10rem',

  [breakpoints.smallMedia]: {
    padding: '6rem 4rem 10rem',
  },
};

export const Section = styled('section')(() => ({
  ...commonSectionStyles,

  [breakpoints.extraSmallMedia]: {
    minHeight: 'calc(100vh - 9rem)',
    padding: '3rem 2rem 6rem',
  },
}));

export const SectionShadow = styled('section')(() => ({
  ...commonSectionStyles,
  backgroundImage: `linear-gradient(${colors.gray0}, ${colors.white})`,

  h2: {
    ...typo.H1_S1,
    color: colors.white,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  p: {
    ...typo.H2,
    color: colors.black,
    margin: '0 auto',
    maxWidth: '40rem',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

export const SectionCompare = styled('section')(() => ({
  ...commonSectionStyles,
  minHeight: 'auto',
  position: 'relative',

  '&:before, &:after': {
    content: '""',
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '50vw',
    zIndex: '-1',
  },

  '&:before': {
    backgroundImage: `linear-gradient(${colors.gray0}, ${colors.white})`,
  },

  '&:after': {
    backgroundImage: `linear-gradient(${colors.brand}, ${colors.green0})`,
    left: '50vw',
  },

  h2: {
    ...typo.H2,
    color: colors.black,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

export const SectionContent = styled('section')(() => ({
  ...commonSectionStyles,
  backgroundImage: `linear-gradient(${colors.brand}, ${colors.green0}, ${colors.brand}, ${colors.green0}, ${colors.brand})`,
}));

export const Wrapper = styled('div')(() => ({
  margin: 'auto',
  maxWidth: '80rem',
}));

export const CompareWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '50%',
  maxWidth: '100vw',
  padding: '6rem 3rem 3rem',
  transform: 'translateX(-50%)',
  width: '120rem',

  '> div': {
    backgroundColor: colors.blackA50,
    display: 'flex',
    width: 'calc(50% - 4rem)',

    '&:first-child': {
      alignContent: 'flex-end',
      borderRadius: '2rem 10rem 10rem 2rem',
      textAlign: 'right',
    },

    '&:last-child': {
      borderRadius: '10rem 2rem 2rem 10rem',
      flexDirection: 'row-reverse',
    },
  },

  [breakpoints.extraSmallMedia]: {
    flexDirection: 'column',

    '> div': {
      flexDirection: 'row',
      width: '100%',

      '&:last-child': {
        marginTop: '3rem',
      },
    },
  },
}));

export const PhoneWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 50%',
  justifyContent: 'center',
  margin: '1.5rem',
  position: 'relative',
  textTransform: 'uppercase',

  'ul li': {
    ...typo.P_S3_R,
    listStyle: 'none',
    marginBottom: '0.5rem',
  },

  h6: {
    ...typo.H2,
    bottom: '1rem',
    color: colors.white,
    position: 'absolute',
    width: '100%',
  },

  [breakpoints.extraSmallMedia]: {
    flex: '1 0 40%',
    justifyContent: 'flex-start',
    paddingTop: '3rem',
  },
}));

export const StepWrapper = styled('div')((props) => ({
  alignItems: 'center',
  color: colors.black,
  display: 'flex',
  flexDirection: props.isOdd ? 'row' : 'row-reverse',
  marginTop: '6rem',
  justifyContent: 'space-around',
  textAlign: 'center',
  textTransform: 'uppercase',

  '&:last-child': {
    marginBottom: '12rem',
  },

  '> div:first-child': {
    maxWidth: '28rem',
  },

  h3: {
    ...typo.H2,
    color: colors.white,
    marginBottom: '1rem',
    textTransform: 'none',
    textShadow: colors.shadow,

    span: {
      backgroundColor: colors.black,
      marginRight: '0.5rem',
    },
  },

  [breakpoints.extraSmallMedia]: {
    flexDirection: 'column-reverse',
    padding: '0 1rem',
  },
}));

export const Bg = styled('div')(() => ({
  display: 'flex',
  left: 0,
  height: 'calc(100vh - 4rem)',
  pointerEvents: 'none',
  position: 'absolute',
  top: '6rem',
  width: '100vw',

  '&:after': {
    backgroundColor: colors.black,
    content: '""',
    height: '100%',
    opacity: '0.5',
    position: 'absolute',
    width: '100%',
  },

  [breakpoints.lteSmallMedia]: {
    flexWrap: 'wrap',
    height: 'calc(100% + 5rem)',
    top: '9rem',
  },
}));

export const BgCompare = styled('div')(() => ({
  height: '75%',
  left: '50%',
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',

  [breakpoints.extraSmallMedia]: {
    height: 'auto',
    width: '200vw',
  },
}));

export const HeroImage = styled('div')(() => ({
  position: 'relative',
  width: '25%',

  [breakpoints.lteSmallMedia]: {
    display: 'none',
    width: '50%',

    '&:first-child, &:last-child': {
      display: 'block'
    },
  },
}));

export const ShadowImage = styled('div')(() => ({
  margin: '4rem auto',
}));

export const StepImage = styled('div')(() => ({
  padding: '0 3rem',
  width: '55%',

  [breakpoints.extraSmallMedia]: {
    marginBottom: '2rem',
    padding: '0 2rem',
    width: '100%',
  },
}));

export const H1 = styled('h1')(() => ({
  ...typo.H1_S2,
  color: colors.white,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  textAlign: 'center',

  span: {
    marginTop: '2rem',
  },

  [breakpoints.extraSmallMedia]: {
    '> span:first-child': {
      left: '10%',
      maxWidth: '80% !important',
    },
  },
}));

export const H2 = styled('h2')(() => ({
  ...typo.H2,
  color: colors.brand,
  position: 'relative',
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

  [breakpoints.extraSmallMedia]: {
    transform: 'scale(0.9)',
  },
}));

export const ButtonWatch = styled('div')(() => ({
  alignItems: 'center',
  backgroundColor: colors.whiteA60,
  borderRadius: '1rem',
  color: colors.black,
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  margin: '6rem 0 6rem 50%',
  padding: '0.5rem 1.5rem',
  textTransform: 'uppercase',
  transform: 'translateX(-50%)',
  width: 'max-content',

  '&:before': {
    borderColor: `transparent transparent transparent ${colors.black}`,
    borderStyle: 'solid',
    borderWidth: '0.8rem 1.6rem',
    content: '""',
    height: '0.8rem',
    marginRight: '-0.5rem',
    marginTop: '-0.1rem',
    width: '1.6rem',
  },

  '&:focus, &:hover': {
    backgroundColor: colors.white,
  },
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
  color: colors.brand,
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
