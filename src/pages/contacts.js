// import { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image'

import Layout from '@sqill/components/layout';
import Form from '@sqill/components/form';

import { Section, Wrapper, H1 } from '@sqill/components/pages/contacts.styles';

const Contacts = () => {
  const { t } = useTranslation('contacts');
  const meta = t('meta');
  const form = t('header.form');

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <H1>
            <Image src='/images/logo_gradient.svg' alt='sqill logo' width={80} height={80} />
            {t('header.title')}
          </H1>
          <Form
            fields={form.fields}
            button={form.button}
            tableName='sayHi'
            success={`${form.feedback.title} ${form.feedback.text}`}
            error={form.feedback.error}
          />
        </Wrapper>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'contacts']),
  },
});

export default Contacts;
