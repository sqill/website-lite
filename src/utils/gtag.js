import React from 'react'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
export const LF_TRACKING_ID = process.env.NEXT_PUBLIC_LF_ID

export function injectgTagScript() {
	if (process.env.NODE_ENV !== 'production' || !GA_TRACKING_ID) return;

	return (
		<React.Fragment>
			<script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

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
	)
}

export function injectgTwitterScript() {
	if (process.env.NODE_ENV !== 'production') return;

	return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          // Insert Twitter Pixel ID and Standard Event data below
          twq('init','o5iyg');
          twq('track','PageView');
        `,
      }}
    />
	)
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window?.gtag?.('config', GA_TRACKING_ID, {
    page_path: url,
  })

  window.ldfdr?.pageview?.({
    pageUrl: url,
    pageTitle: document.title
  });
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label = null, value = null }) => {
  if (!window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

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
        `
      }}>
    </script>
  )
}

export const identify = ({ email, name = '' }) => {
  if (!window.ldfdr) return;

  window.ldfdr.identify({
    email,
    firstName: name.split(" ", 1)[0],
    lastName: name.split(" ").slice(1).join(" ")
  });
}
