import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image'

import Layout from '@sqill/components/layout';

import { Section, Wrapper, ImageWrapper, H1, H2, Div } from '@sqill/components/pages/sqill-for-pros.styles';

const SqillForPros = () => {
  const { t } = useTranslation('sqillForPros');
  const meta = t('meta');

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <H1>
            <Image src='/images/logo_gradient.svg' alt='sqill logo' width={80} height={80} />
            {t('header.title')}
          </H1>
          <ImageWrapper>
            <Image src='/images/sqill4props_cta_image.png' alt='sqill logo' width={1350} height={590} />
          </ImageWrapper>
          <H2>{t('header.subtitle')}</H2>
          <Div dangerouslySetInnerHTML={{__html: t('header.description')}} />
        </Wrapper>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'sqillForPros']),
  },
});

export default SqillForPros;
