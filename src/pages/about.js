import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image'

import Layout from '@sqill/components/layout';

import { Section, Wrapper, ManifestoWrapper, SignatureWrapper, LogosWrapper, H1, H2, StyledH2, H3, Div } from '@sqill/components/pages/about.styles';

const About = () => {
  const { t } = useTranslation('about');
  const meta = t('meta');
  const manifesto = t('header.manifesto');
  const logos = t('section1.options');

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <H1>{t('header.title')}</H1>
          <ManifestoWrapper>
            <H2>{manifesto.title}</H2>
            <H3>{manifesto.subtitle}</H3>
            <Div dangerouslySetInnerHTML={{__html: manifesto.text}} />
            <SignatureWrapper>
              <Image src='/images/logo_white_gradient.svg' alt='sqill logo' width={60} height={20} />
              <span>{manifesto.signature}</span>
            </SignatureWrapper>
          </ManifestoWrapper>
        </Wrapper>
        <Wrapper>
          <StyledH2>{t('section1.title')}</StyledH2>
          <LogosWrapper>
            {logos.map(({ logo, label, height, width }, idx) => (
              <div key={idx}><Image src={`/images/partners/${logo}`} alt={label} width={width} height={height} /></div>
            ))}
          </LogosWrapper>
        </Wrapper>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'about']),
  },
});

export default About;
