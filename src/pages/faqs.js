import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@sqill/components/layout';

import { Section, Wrapper, Tabs, Tab, H1, Label, Div } from '@sqill/components/pages/faqs.styles';

const FAQs = () => {
  const { t } = useTranslation('faqs');
  const meta = t('meta');
  const options = t('faqs.options');

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <H1>{t('faqs.title')}</H1>
          <Tabs>
            {options.map(({ label, content }, idx) => (
              <Tab key={idx}>
                <input type='radio' id={idx} name='faqs' />
                <Label htmlFor={idx}>{label}</Label>
                <Div dangerouslySetInnerHTML={{__html: content}} />
              </Tab>
            ))}
          </Tabs>
        </Wrapper>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'faqs']),
  },
});

export default FAQs;
