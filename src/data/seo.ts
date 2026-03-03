export const SITE = {
  name: 'Stagent',
  url: 'https://stagent.io',
  description:
    'Desktop-native, open-source harness that turns high-level goals into observable, long-running agent workflows — across any model, any tool, any timeline.',
  logo: 'https://stagent.io/favicon.svg',
  ogImage: 'https://stagent.io/og-image.png',
  themeColor: '#0a0a0a',
  license: 'Apache-2.0',
};

export const ORGANIZATION = {
  '@type': 'Organization',
  name: 'Stagent',
  url: SITE.url,
  logo: SITE.logo,
  description: SITE.description,
  founder: {
    '@type': 'Person',
    name: 'Navam',
  },
  foundingDate: '2026',
  sameAs: [
    'https://github.com/stagent',
    'https://x.com/stagent',
  ],
};

export const PUBLISHER = {
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: SITE.logo,
  },
};
