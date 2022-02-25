import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@sqill/components/layout';

import { Section, Wrapper, H1, H2, Div } from '@sqill/components/pages/terms-and-conditions.styles';

const TermsAndConditions = () => {
  const { t } = useTranslation('termsAndConditions');
  const meta = t('meta');
  const options = t('header.options');

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <H1>{t('header.title')}</H1>
          {options.map(({ title, text }, idx) => (
            <React.Fragment key={idx}>
              {title && <H2>{title}</H2>}
              {text && <Div dangerouslySetInnerHTML={{__html: text}} />}
            </React.Fragment>
          ))}
        </Wrapper>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'termsAndConditions']),
  },
});

export default TermsAndConditions;
