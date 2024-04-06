import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Products',
      links: [
        {
          text: '💣 Boom Languages',
          href: getPermalink('/products/boom'),
        },
        {
          text: '✅ KeyDo',
          href: getPermalink('/products/keydo'),
        },
        {
          text: '📙 KeyReader',
          href: getPermalink('/products/keyreader'),
        },
        {
          text: '💻 PageKey Operating System',
          href: getPermalink('/products/pkos'),
        },
        {
          text: '🎥 PKVid',
          href: getPermalink('/products/pkvid'),
        },
        {
          text: '🎹 Plaintext DAW',
          href: getPermalink('/products/ptd'),
        },
      ],
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Team',
      href: '/team',
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Boom Languages', href: '/products/boom' },
        { text: 'KeyDo', href: '/products/keydo' },
        { text: 'KeyReader', href: '/products/keyreader' },
        { text: 'PageKey Operating System', href: '/products/pkos' },
        { text: 'PKVid', href: '/products/pkvid' },
        { text: 'Plaintext DAW', href: '/products/ptd' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'GitHub', href: 'https://github.com/pagekey' },
        { text: 'Discord', href: 'https://discord.gg/5m5yFgDPF5' },
        { text: 'YouTube', href: 'https://youtube.com/@PageKey' },
      ],
    },
    {
      title: 'Tags',
      links: [
        { text: 'All Tags', href: '/blog/tags' },
        { text: 'Python', href: '/tag/python' },
        { text: 'Rust', href: '/tag/rust' },
      ],
    },
    {
      title: 'Languages',
      links: [
        { text: 'English', href: '/blog' },
        { text: 'Español', href: '/tag/spanish' },
        // { text: 'Русский', href: '/tag/russian' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/5m5yFgDPF5' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@PageKey' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/pagekey' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/pagekeysolutions' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(/favicon.ico)]"></span>
    Copyright &copy; ${new Date().getFullYear()} PageKey Solutions, LLC · All rights reserved.
  `,
};
