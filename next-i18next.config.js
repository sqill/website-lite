const path = require('path');

module.exports = {
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    fallbackLng: 'pt',
    localeDetection: false,
    preload: true,
    lowerCaseLng: true,
    returnObjects: true,
  },
  defaultNS: 'common',
  localeExtension: 'json',
  localePath: path.resolve('./src/translations'),
  reloadOnPrerender: true,
}
