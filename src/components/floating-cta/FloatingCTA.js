import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import Link from 'next/link';

import constants from '@sqill/utils/constants';

import { Wrapper } from './FloatingCTA.styles';

const FloatingCTA = () => {
  const { t } = useTranslation('floatingCTA');
  const ctas = t('cta');

  return (
    <Wrapper>
      {ctas.map(({ store, label, url }, idx) => (
        <Link key={idx} href={constants[url]}>
          <a>
            <div>{label}</div>
            <Image src={`/images/icon_${store}_store.svg`} alt={`${store} store logo`} width={40} height={40} />
          </a>
        </Link>
      ))}
    </Wrapper>
  );
};

FloatingCTA.propTypes = {};

export default FloatingCTA;
