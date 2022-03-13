import PropTypes from 'prop-types';
import Head from 'next/head';

import { generateOpenGraphTags } from '@sqill/utils/openGraphTags';
import { injectgTagScript, injectLfTracker, injectChatwootScript } from '@sqill/utils/gtag';

import Menu from '@sqill/components/menu';
import Footer from '@sqill/components/footer';

import { Main } from './Layout.styles';

const Layout = ({ title, description, keywords, children }) => {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {generateOpenGraphTags()}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {injectgTagScript()}
        {injectLfTracker()}
        {injectChatwootScript()}
      </Head>
      <Main>
        <Menu />
        {children}
        <Footer />
      </Main>
    </div>
  );
};

Layout.propTypes = {};

Layout.defaultProps = {
  title: "sqill",
  keywords: "sports, athletes, sportstech, sqill, video, app, android, ios, talent, football, technology, AI, video, portugal, startup, clubs, agents, brands, players, federations, associations, streaming, mobile, squill",
  description: "sqill is the video app for athletes. We are disrupting the sports industry through short-form vídeos (sqills) and artificial intelligence, showcasing talent (athletes) and connecting them with demand (clubs, agents and brands).",
};

export default Layout;
