import fontFaces from '@sqill/theme/font-faces';
import normalize from '@sqill/theme/normalize';
import reset from '@sqill/theme/reset';
import * as colors from '@sqill/theme/colors';
import { weight } from '@sqill/theme/fonts';

export const globalStyles = `
  ${fontFaces};
  ${normalize};
  ${reset};

  html {
    background-color: ${colors.bg};
  }

  /**
   * Default headings
   */
  h1 {
    color: ${colors.textPrimary};
    font-size: 3.2rem;
    font-weight: ${weight.regular};
    line-height: 1.25;
  }

  h2 {
    color: ${colors.textPrimary};
    font-size: 2.4rem;
    font-weight: ${weight.regular};
    line-height: 1.25;
  }

  h3 {
    color: ${colors.textPrimary};
    font-size: 2rem;
    font-weight: ${weight.regular};
    line-height: 1.2;
  }

  h4 {
    color: ${colors.textPrimary};
    font-size: 2rem;
    font-weight: ${weight.regular};
    line-height: 1.2;
  }

  h5 {
    color: ${colors.textPrimary};
    font-size: 2rem;
    font-weight: ${weight.regular};
    line-height: 1.2;
  }

  h6 {
    color: ${colors.textPrimary};
    font-size: 2rem;
    font-weight: ${weight.regular};
    line-height: 1.2;
  }

  /**
   * Default link
   */
  a {
    color: ${colors.red};
    font-size: 1.4rem;
    font-weight: ${weight.regular};
    line-height: 1.4;
    text-decoration: underline;
    text-underline-position: under;

    @supports not (text-underline-position: under) {
      text-underline-offset: 0.2em;
    }
  }

  button {
    border: 0;
  }

  li {
    list-style: disc;
  }

  /**
   * Default text
   */
  p {
    font-size: 1.4rem;
    font-weight: ${weight.regular};
    line-height: 1.5;
    margin: 0 0 1rem;
  }
`;
