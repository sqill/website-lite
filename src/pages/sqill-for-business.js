import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image'

import Layout from '@sqill/components/layout';
import Form from '@sqill/components/form';
import Button from '@sqill/components/button';
import Modal from '@sqill/components/modal';

import { Section, Wrapper, Hero, HeroContent, ImageWrapper, StepImage, StepWrapper, IconsWrapper, AndWrapper, Hint, H1, H2, StyledH2, H3, Div } from '@sqill/components/pages/sqill-for-business.styles';

const SqillForBusiness = () => {
  const { t } = useTranslation('sqillForBusiness');
  const meta = t('meta');
  const hero = t('header.hero');
  const form = t('header.form');
  const options = t('section1.options');
  const section2 = t('section2');

  const [showForm, setShowForm] = useState(false);

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper isFlex>
          <Hint>{t('header.hint')}</Hint>
        </Wrapper>

        <Wrapper>
          <Hero>
            <HeroContent>
              <H1>
                <Image src='/images/logo_gradient.svg' alt='sqill logo' width={80} height={80} />
                {t('header.title')}
              </H1>
              <H2>{t('header.subtitle')}</H2>
              <Div dangerouslySetInnerHTML={{__html: t('header.description')}} />
              <Button onClick={() => setShowForm(true)} label={form.button} />
            </HeroContent>
            <ImageWrapper>
              <Image src={`/images/4biz/${hero.image}`} alt='sqill logo' width={hero.width} height={hero.height} />
            </ImageWrapper>
          </Hero>
        </Wrapper>

        <Wrapper>
          {options.map(({ key, title, description, image, width, height }, idx) => (
            <StepWrapper key={idx} isOdd={idx%2}>
              <div>
                <H3><div>{key}</div>{title.split('').map((letter, titleIdx) => <span key={titleIdx}>{letter}</span>)}</H3>
                <div dangerouslySetInnerHTML={{__html: description }} />
              </div>
              <StepImage>
                <Image src={`/images/4biz/${image}`} alt='' width={width} height={height} />
              </StepImage>
            </StepWrapper>
          ))}
        </Wrapper>

        <Wrapper>
          <StyledH2>{section2.title}</StyledH2>
          <IconsWrapper>
            {section2.options.map(({ description, image, width, height }, idx) => (
              <div key={idx}>
                <Image src={`/images/4biz/${image}`} alt='' width={width} height={height} />
                <p>{description}</p>
              </div>
            ))}
          </IconsWrapper>
          <AndWrapper>
            <p>{section2.subsection.title}</p>
            <ul>
              {section2.subsection.options.map(({ label }, idx) => <li key={idx}>{label}</li>)}
            </ul>
          </AndWrapper>
          <Form
            fields={section2.subsection.form.fields}
            button={section2.subsection.form.button}
            tableName='4biz'
            success={`${section2.subsection.form.feedback.title} ${section2.subsection.form.feedback.text}`}
            error={section2.subsection.form.feedback.error}
          />
        </Wrapper>
      </Section>

      {showForm && (
        <Modal onClick={() => setShowForm(false)}>
          <Form
            fields={form.fields}
            button={form.submit}
            tableName='4biz'
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
    ...await serverSideTranslations(locale, ['menu', 'footer', 'sqillForBusiness']),
  },
});

export default SqillForBusiness;
