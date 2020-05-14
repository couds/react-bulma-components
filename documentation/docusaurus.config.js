const path = require('path');

module.exports = {
  title: 'React Bulma Components',
  tagline: 'Everything you love of Bulma Framwork as React Components',
  url: 'https://react-bulma.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: '@couds', // Usually your GitHub org/user name.
  projectName: 'react-bulma-components', // Usually your repo name.
  plugins: [
    'docusaurus-plugin-sass',
    ['@couds/docusaurus-resolve-plugin', {
      modules: ['src'],
      alias: {
        '_variables.sass': path.resolve(__dirname, 'src/css/_variables.sass'),
      }
    }]
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: 'React Bulma Components',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/getting-started/install',
          activeBasePath: 'docs/getting-started',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: 'docs/components/index',
          activeBasePath: 'docs/components',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/couds/react-bulma-components',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started/install',
            },
            {
              label: 'Docs',
              to: 'docs/components/index',
            },
          ],
        },
        {
          title: 'Community',
          items: [
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/couds/react-bulma-components',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Bulma Components, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        'docs': {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/couds/react-bulma-components/edit/master/documentation/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/base.scss'),
        },
      },
    ],
  ],
};
