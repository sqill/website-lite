import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import Layout from '@sqill/components/layout';
import Form from '@sqill/components/form';
import Button from '@sqill/components/button';
import Modal from '@sqill/components/modal';

import {
  Section,
  Wrapper,
  Hero,
  HeroContent,
  HeroTitles,
  ImageWrapper,
  StepImage,
  StepWrapper,
  IconsWrapper,
  IconGrid,
  IconImage,
  H1,
  H2,
  StyledH2,
  H3,
  StyledP,
  SpanWrapper,
  Div,
  DivDescription,
  Partners,
  PartnersLogos,
  PartnerLogo,
  PartnersSubtitle,
  P,
} from '@sqill/components/pages/home.styles';

const Home = () => {
  const { t } = useTranslation('home');
  const meta = t('meta');
  const hero = t('header.hero');
  const form = t('form');
  const trustedBy = t('trustedBy');
  const section1 = t('section1');
  const section2 = t('section2');
  const section3 = t('section3');

  const [showForm, setShowForm] = useState(false);

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <Hero>
            <HeroContent>
              <HeroTitles hideOnMobile>
                <H1>
                  <Image
                    src="/images/logo_gradient.svg"
                    alt="sqill logo"
                    width={110}
                    height={110}
                  />
                  {t('header.title')}
                </H1>
                <H2>{t('header.subtitle')}</H2>
              </HeroTitles>
              <Div>{t('header.description')}</Div>

              <Partners>
                <PartnersLogos>
                  {trustedBy.options.map((partner, idx) => (
                    <PartnerLogo key={idx}>
                      <Image
                        src={`/images/4biz/${partner.image}`}
                        alt={partner.name}
                        width={partner.width}
                        height={partner.height}
                      />
                    </PartnerLogo>
                  ))}
                </PartnersLogos>
                <PartnersSubtitle>{trustedBy.title}</PartnersSubtitle>
              </Partners>

              <Button onClick={() => setShowForm(true)} label={form.button} />
            </HeroContent>
            <ImageWrapper>
              <Image
                src={`/images/4biz/${hero.image}`}
                alt="sqill logo"
                width={hero.width}
                height={hero.height}
              />
            </ImageWrapper>
            <HeroTitles hideOnDesktop>
              <H1>
                <Image src="/images/logo_gradient.svg" alt="sqill logo" width={110} height={110} />
                {t('header.title')}
              </H1>
              <H2>{t('header.subtitle')}</H2>
            </HeroTitles>
          </Hero>
        </Wrapper>

        {/* TODO: uncomment to show partners section */}
        {/* <Wrapper>
          <StyledH2>{trustedBy.title}</StyledH2>
          <PartnersLogos>
            {trustedBy.options.map((partner) => (
              <PartnerLogo>
                <Image
                  src={`/images/4biz/${partner.image}`}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                />
              </PartnerLogo>
            ))}
          </PartnersLogos>
          <Div>{trustedBy.description}</Div>
        </Wrapper> */}

        <Wrapper>
          <StyledH2>{section1.title}</StyledH2>
          <Hero isNotHero>
            <IconsWrapper>
              {section1.options.map(
                ({ title, description1, description2, image, width, height }, idx) => (
                  <IconGrid key={idx}>
                    <IconImage width={width} height={height}>
                      <Image src={`/images/4biz/${image}`} alt="" width={width} height={height} />
                    </IconImage>
                    <H3>{title}</H3>
                    <StyledP>
                      <SpanWrapper>
                        {description1.split('').map((letter, descriptionIdx) => (
                          <span key={descriptionIdx}>{letter}</span>
                        ))}
                      </SpanWrapper>
                      <SpanWrapper>
                        {description2.split('').map((letter, descriptionIdx) => (
                          <span key={descriptionIdx}>{letter}</span>
                        ))}
                      </SpanWrapper>
                    </StyledP>
                  </IconGrid>
                ),
              )}
            </IconsWrapper>
          </Hero>
        </Wrapper>

        <Wrapper>
          <StyledH2 dangerouslySetInnerHTML={{ __html: section2.title }} />
          {section2.options.map(
            ({ key, title1, title2, description, image, width, height }, idx) => (
              <StepWrapper key={idx} isOdd={idx % 2}>
                <div>
                  <H3>
                    <div>{key}</div>
                    <SpanWrapper>
                      {title1.split('').map((letter, titleIdx) => (
                        <span key={titleIdx}>{letter}</span>
                      ))}
                    </SpanWrapper>
                    <SpanWrapper>
                      {title2.split('').map((letter, titleIdx) => (
                        <span key={titleIdx}>{letter}</span>
                      ))}
                    </SpanWrapper>
                  </H3>
                  <DivDescription dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                <StepImage>
                  <Image src={`/images/4biz/${image}`} alt="" width={width} height={height} />
                </StepImage>
              </StepWrapper>
            ),
          )}
        </Wrapper>

        <Wrapper>
          <StyledH2>{section3.title}</StyledH2>
          <Hero isNotHero>
            <IconsWrapper>
              {section3.options.map(({ description, image, width, height }, idx) => (
                <IconGrid key={idx}>
                  <Image src={`/images/4biz/${image}`} alt="" width={width} height={height} />
                  <P>{description}</P>
                </IconGrid>
              ))}
            </IconsWrapper>
          </Hero>
        </Wrapper>

        <Wrapper>
          <Form
            fields={form.fields}
            button={{ send: form.submitMore, sending: form.submitSending }}
            tableName="4biz"
            successMessage={`${form.feedback.title} ${form.feedback.text}`}
            errorMessage={form.feedback.error}
          />
        </Wrapper>
      </Section>

      {showForm && (
        <Modal onClick={() => setShowForm(false)}>
          <Form
            fields={form.fields}
            button={{ send: form.submitSend, sending: form.submitSending }}
            tableName="4biz"
            successMessage={`${form.feedback.title} ${form.feedback.text}`}
            errorMessage={form.feedback.error}
          />
        </Modal>
      )}
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['menu', 'footer', 'home'])),
  },
});

export default Home;
