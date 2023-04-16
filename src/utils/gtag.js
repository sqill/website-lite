import React from 'react';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
export const LF_TRACKING_ID = process.env.NEXT_PUBLIC_LF_ID;

export function injectgTagScript() {
  if (process.env.NODE_ENV !== 'production' || !GA_TRACKING_ID) return;

  return (
    <React.Fragment>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </React.Fragment>
  );
}

export function injectChatwootScript() {
  if (process.env.NODE_ENV !== 'production') return;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(d,t) {
            var BASE_URL="https://app.chatwoot.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: 'qQUeSy3Sa1xuA1ZUeameW1nF',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");
        `,
      }}
    />
  );
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window?.gtag?.('config', GA_TRACKING_ID, {
    page_path: url,
  });

  window.ldfdr?.pageview?.({
    pageUrl: url,
    pageTitle: document.title,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label = null, value = null }) => {
  if (!window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export function injectLfTracker() {
  if (process.env.NODE_ENV !== 'production') return;

  if (!LF_TRACKING_ID) return;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            window.ldfdr = window.ldfdr || {};
            (function(d, s, ss, fs){
              fs = d.getElementsByTagName(s)[0];
              function ce(src){
                var cs  = d.createElement(s);
                cs.src = src;
                setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1);
              }
              ce(ss);
            })(document, 'script', 'https://sc.lfeeder.com/lftracker_${LF_TRACKING_ID}.js');
          })();
        `,
      }}
    ></script>
  );
}

export const identify = ({ email, name = '' }) => {
  if (!window.ldfdr && !window.ldfdr?.identify) return;

  window.ldfdr.identify?.({
    email,
    firstName: name.split(' ', 1)[0],
    lastName: name.split(' ').slice(1).join(' '),
  });
};
