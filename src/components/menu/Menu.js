import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import Link from 'next/link';

import pages from '@sqill/utils/routes';

import LanguageSwitcher from '@sqill/components/language-switcher';

import { Div, Wrapper, Nav } from './Menu.styles';

const Menu = () => {
  const { t } = useTranslation('menu');
  const options = t('options');

  return (
    <Div>
      <Wrapper>
        <Link href={pages.HOME}>
          <a><Image src='/images/logo_gradient.svg' alt='sqill logo' width={40} height={40} /></a>
        </Link>
        <Nav>
          {options.map(({ label, url }, idx) => <Link key={idx} href={pages[url]}>{label}</Link>)}
        </Nav>
        <LanguageSwitcher />
      </Wrapper>
    </Div>
  );
};

Menu.propTypes = {};

export default Menu;
