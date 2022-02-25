import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image'

import Layout from '@sqill/components/layout';

import { Section, Wrapper, ImageWrapper, H1, H2, Div } from '@sqill/components/pages/sqill-for-business.styles';

const SqillForBusiness = () => {
  const { t } = useTranslation('sqillForBusiness');
  const meta = t('meta');
  const hero = t('header.hero');
  const options = t('section1.options');
  const section2 = t('section2');

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <button>{t('header.hint')}</button>
        </Wrapper>
        <Wrapper>
          <div>
            <H1>
              <Image src='/images/logo_gradient.svg' alt='sqill logo' width={80} height={80} />
              {t('header.title')}
            </H1>
            <H2>{t('header.subtitle')}</H2>
            <Div dangerouslySetInnerHTML={{__html: t('header.description')}} />
          </div>
          <ImageWrapper>
            <Image src={`/images/${hero.image}`} alt='sqill logo' width={hero.width} height={hero.height} />
          </ImageWrapper>
        </Wrapper>

        <Wrapper>
          {options.map(({ key, title, description, image, width, height }, idx) => (
            <div key={idx}>
              {key}
              {title}
              {description}
              <Image src={`/images/${image}`} alt='' width={width} height={height} />
            </div>
          ))}
        </Wrapper>

        <Wrapper>
          <H2>{section2.title}</H2>
          <div>
            {section2.options.map(({ description, image, width, height }, idx) => (
              <div key={idx}>
                <Image src={`/images/${image}`} alt='' width={width} height={height} />
                <span>{description}</span>
              </div>
            ))}
          </div>
          <div>
            {section2.subsection.title}
            {section2.subsection.options.map(({ label }, idx) => <div>{label}</div>)}
          </div>
        </Wrapper>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'sqillForBusiness']),
  },
});

export default SqillForBusiness;
