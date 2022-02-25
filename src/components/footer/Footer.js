import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import Link from 'next/link';

import constants from '@sqill/utils/constants';
import pages from '@sqill/utils/routes';

import { FooterWrapper, Wrapper, LinksWrapper, Div, H6, Copy } from './Footer.styles';

const Footer = () => {
  const { t } = useTranslation('footer');
  const country = t('country');
  const about = t('about');
  const social = t('social');

  return (
    <FooterWrapper>
      <Wrapper>
        <Link href={pages.HOME}>
          <a><Image src='/images/logo_white_gradient.svg' alt='sqill logo' width={90} height={30} /></a>
        </Link>
        <LinksWrapper>
          <Div>
            <H6>{country.title}</H6>
            {country.options.map(({ label }, idx) => <div key={idx}>{label}</div>)}
          </Div>
          <Div>
            <H6>{about.title}</H6>
            {about.options.map(({ label, url }, idx) => <Link key={idx} href={pages[url]}>{label}</Link>)}
          </Div>
          <Div>
            <H6>{social.title}</H6>
            {social.options.map(({ label, url }, idx) => <Link key={idx} href={constants[url]}>{label}</Link>)}
          </Div>
        </LinksWrapper>
        <Copy>{t('copyright')} &copy; {new Date().getFullYear()}</Copy>
      </Wrapper>
    </FooterWrapper>
  );
};

Footer.propTypes = {};

export default Footer;
