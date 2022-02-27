import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image'

import Layout from '@sqill/components/layout';

import {
  SectionContent,
  Wrapper,
  StepWrapper,
  StepImage,
} from '@sqill/components/pages/home.styles';

const Athlete = () => {
  const { t } = useTranslation('athlete');
  const meta = t('meta');
  const section1 = t('section1');

  return (
    <Layout {...meta}>
      <SectionContent>
        <Wrapper>
          {section1.options.map(({ key, title, description, image, width, height }, idx) => (
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
      </SectionContent>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'athlete']),
  },
});

export default Athlete;
