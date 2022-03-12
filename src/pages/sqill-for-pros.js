import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image'

import Layout from '@sqill/components/layout';
import Form from '@sqill/components/form';
import Button from '@sqill/components/button';
import Modal from '@sqill/components/modal';

import { Section, Wrapper, ImageWrapper, H1, H2, VideoWrapper, Div } from '@sqill/components/pages/sqill-for-pros.styles';

const SqillForPros = () => {
  const { t } = useTranslation('sqillForPros');
  const meta = t('meta');
  const form = t('header.form');

  const [showForm, setShowForm] = useState(false);

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
            <VideoWrapper>
              <video autoPlay playsInline loop muted src='/videos/4pros.mp4' />
            </VideoWrapper>
          </ImageWrapper>
          <H2>{t('header.subtitle')}</H2>
          <Div dangerouslySetInnerHTML={{__html: t('header.description')}} />
          <Button onClick={() => setShowForm(true)} label={form.button} />
        </Wrapper>
      </Section>

      {showForm && (
        <Modal onClick={() => setShowForm(false)}>
          <Form
            fields={form.fields}
            button={form.submit}
            tableName='4pros'
            success={`${form.feedback.title} ${form.feedback.text}`}
            error={form.feedback.error}
          />
        </Modal>
      )}
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'sqillForPros']),
  },
});

export default SqillForPros;
