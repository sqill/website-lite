import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Div } from './LanguageSwitcher.styles';

const LanguageSwitcher = () => {
  const { pathname, locales, locale, query } = useRouter();

  return (
    <Div>
      {locales.map((lang, idx) => (
        <Link key={idx} href={{pathname, query }} locale={lang}>{lang}</Link>
      ))}
    </Div>
  );
};

LanguageSwitcher.propTypes = {};

export default LanguageSwitcher;
