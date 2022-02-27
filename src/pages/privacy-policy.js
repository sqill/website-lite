import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@sqill/components/layout';

import { Section, Wrapper, Content, H1, Div, Ol, Li } from '@sqill/components/pages/privacy-policy.styles';

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacyPolicy');
  const meta = t('meta');
  const options = t('header.options');
  const policies = t('policies');

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <H1>{t('header.title')}</H1>
          <Div dangerouslySetInnerHTML={{__html: t('header.text')}} />
          <Ol>
            {options.map((option, idx) => <Li key={idx}>{option}</Li>)}
          </Ol>
        </Wrapper>

        <Wrapper>
          {policies.map(({ title, content }, idx) => (
            <div key={idx}>
              <b>{idx+1}. {title}</b>
              {content.map(({ text }, index) => (
                <Content key={index}>
                  <span>{`${idx+1}.${index+1}.`}</span>
                  <Div dangerouslySetInnerHTML={{__html: text}} />
                </Content>
              ))}
            </div>
          ))}
        </Wrapper>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'privacyPolicy']),
  },
});

export default PrivacyPolicy;
