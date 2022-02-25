import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { Global } from '@emotion/react';

import { pageview } from '@sqill/utils/gtag';
import { globalStyles } from '@sqill/theme/global';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);

    return () => {
      router.events.off('routeChangeComplete', pageview);
    }
  }, [router.events]);

  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
