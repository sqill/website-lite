import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';

import constants from '@sqill/utils/constants';

import Layout from '@sqill/components/layout';

import { Tabs, Tab, Label, H1 as FaqsH1, Div as FaqsDiv } from '@sqill/components/pages/faqs.styles';

import {
  Section,
  SectionShadow,
  SectionCompare,
  SectionContent,
  Wrapper,
  CompareWrapper,
  PhoneWrapper,
  StepWrapper,
  Bg,
  BgCompare,
  HeroImage,
  ShadowImage,
  StepImage,
  H1,
  H2,
  SquareDiv,
  ButtonWatch,
  StoreButtons,
  SportsDiv,
} from '@sqill/components/pages/home.styles';

const Home = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('home');
  const meta = t('meta');
  const hero = t('header.hero');
  const section1 = t('section1');
  const section2 = t('section2');
  const section3 = t('section3');
  const section4 = t('section4');

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };

    return array;
  };

  const handleOnWatchClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <Bg>
            {shuffleArray(hero).map(({ image, width, height }, idx) => (
              <HeroImage key={idx}>
                <Image src={`/images/home/${image}`} alt='' width={width} height={height} layout='fill' objectFit='cover' />
              </HeroImage>
            ))}
          </Bg>
          <H1>
            <Image src='/images/logo_white_gradient.svg' alt='sqill logo' width={390} height={130} />
            <span>{t('header.subtitle')}</span>
          </H1>
          <SquareDiv dangerouslySetInnerHTML={{__html: t('header.description')}} />
          <ButtonWatch onClick={() => handleOnWatchClick(t('header.watch.url'))}>{t('header.watch.label')}</ButtonWatch>
          <H2>{t('header.download')}</H2>
          <StoreButtons>
            <Link href={constants.APP_STORE_URL}>
              <a><Image src={`/images/app_store_${locale}.svg`} alt='download app store' width={120} height={40} layout='fixed' /></a>
            </Link>
            <Link href={constants.PLAY_STORE_URL}>
              <a><Image src={`/images/google_play_${locale}.png`} alt='download play store' width={134} height={40} layout='fixed' /></a>
            </Link>
          </StoreButtons>
          <SportsDiv>
            <div>{t('header.available')}</div>
            <span><Image src='/images/icon_sports.png' alt='sqill logo' width={555} height={34} quality={100} /></span>
            <div>{t('header.andSports')}</div>
          </SportsDiv>
        </Wrapper>
      </Section>

      <SectionShadow>
        <Wrapper>
          <h2>{t('section1.title')}</h2>
          <ShadowImage>
            <Image src={`/images/home/${section1.hero.image}`} alt='' width={section1.hero.width} height={section1.hero.height} quality={90} />
          </ShadowImage>
          <p>{t('section1.description')}</p>
        </Wrapper>
      </SectionShadow>

      <SectionCompare>
        <Wrapper>
          <BgCompare>
            <Image src={`/images/home/${section2.bg.image}`} alt='' width={section2.bg.width} height={section2.bg.height} quality={90} />
          </BgCompare>
          <h2>{t('section2.title')}</h2>
          <CompareWrapper>
            <div>
              <PhoneWrapper>
                <ul>
                  {section2.without.options.map(({ label }, idx) => <li key={idx}>{label}</li>)}
                </ul>
                <h6>{section2.without.title}</h6>
              </PhoneWrapper>
              <Image src={`/images/home/${section2.without.image}`} alt='' width={section2.without.width} height={section2.without.height} quality={90} />
            </div>
            <div>
              <PhoneWrapper>
                <ul>
                  {section2.with.options.map(({ label }, idx) => <li key={idx}>{label}</li>)}
                </ul>
                <h6>{section2.with.title}</h6>
              </PhoneWrapper>
              <Image src={`/images/home/${section2.with.image}`} alt='' width={section2.with.width} height={section2.with.height} quality={90} />
            </div>
          </CompareWrapper>
        </Wrapper>
      </SectionCompare>

      <SectionContent>
        <Wrapper>
          {section3.options.map(({ key, title, description, image, width, height }, idx) => (
            <StepWrapper key={idx} isOdd={idx%2}>
              <div>
                <h3><span>{key}</span>{title}</h3>
                <div dangerouslySetInnerHTML={{__html: description }} />
              </div>
              <StepImage>
                <Image src={`/images/home/${image}`} alt='' width={width} height={height} />
              </StepImage>
            </StepWrapper>
          ))}
        </Wrapper>

        <Wrapper>
          <FaqsH1>{t('section4.title')}</FaqsH1>
          <Tabs>
            {section4.options.map(({ label, content }, idx) => (
              <Tab key={idx}>
                <input type='radio' id={idx} name='faqs' />
                <Label htmlFor={idx}>{label}</Label>
                <FaqsDiv dangerouslySetInnerHTML={{__html: content}} />
              </Tab>
            ))}
          </Tabs>
        </Wrapper>
      </SectionContent>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'home']),
  },
});

export default Home;
