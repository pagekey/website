// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PageKey Solutions',
  tagline: 'Education • Apps • Websites',
  url: 'https://pagekeysolutions.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'pagekeysolutions', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // blogSidebarTitle: 'All posts',
          blogSidebarCount: 10,
          // Enable latex
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Enable blog archive
          archiveBasePath: '/archive',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Google Analytics
        gtag: {
          trackingID: 'G-LCGN32XDMX',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PageKey Solutions',
        logo: {
          alt: 'PageKey Solutions Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/about',
            position: 'left',
            label: 'About',
          },
          {
            type: 'dropdown',
            label: 'Projects',
            to: '/docs',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Fitness App: PFL',
                docId: 'pfl/index',
              },
              {
                type: 'doc',
                label: 'OS Development: PKOS',
                docId: 'pkos/index',
              },
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog/archive', label: 'Archive', position: 'left'},

          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'About',
                to: '/about',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'YouTube',
                href: 'https://youtube.com/c/pagekeysolutions',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pagekeysolutions',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/pagekeysolutions',
              },
              {
                label: 'Email',
                href: 'mailto:info@pagekeysolutions.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PageKey Solutions, LLC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    i18n: {
      defaultLocale: 'en',
      locales: [
        'en', 
        'es', 
        // 'ru'
      ],
    },

    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
};

module.exports = config;
