module.exports = {
  title: 'cathe-zhang',
  tagline: '前端，不止于前端。',
  url: 'https://cathe-zhang.github.io',
  baseUrl: '/my-blog-docusaurus/',
  favicon: 'img/favicon.ico',
  organizationName: 'cathe-zhang', // Usually your GitHub org/user name.
  projectName: 'my-blog-docusaurus', // Usually your repo name.
  themeConfig: {
    defaultDarkMode: true,
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content: '致力于创建一套稳定的生产环境可用的Taro生态， <a target="_blank" rel="noopener noreferrer" href="https://github.com/cathe-zhang/taro-template">Taro项目模板</a> <a target="_blank" rel="noopener noreferrer" href="https://github.com/cathe-zhang/taro-ui-hd">基于Taro2.x的第三方UI库</a> <a target="_blank" rel="noopener noreferrer" href="https://github.com/cathe-zhang/taro-plugin-init-app">taro应用初始化插件</a>',
      backgroundColor: '#25c2a0', // Defaults to `#fff`.
      textColor: '#333', // Defaults to `#000`.
    },
    navbar: {
      title: '主页',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文章',
          position: 'left',
        },
        {
          to: 'docs/taro_001',
          activeBasePath: 'docs/taro_001',
          label: 'Taro相关',
          position: 'left',
        },
        {to: 'blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/cathe-zhang/my-blog-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文章',
          items: [
            {
              label: 'H5定位终极解决方案',
              to: 'docs/h5_001',
            },
          ],
        },
        {
          title: 'Taro项目',
          items: [
            {
              label: '可用于生产环境的多端项目模板',
              href: 'https://github.com/cathe-zhang/taro-template',
            },
            {
              label: '基于Taro2.x的第三方组件库',
              href: 'https://github.com/cathe-zhang/taro-ui-hd',
            }
          ],
        },
        {
          title: 'Taro插件',
          items: [
            {
              label: 'taro-plugin-init-app',
              href: 'https://github.com/cathe-zhang/taro-plugin-init-app',
            },
            {
              label: 'taro-plugin-check-env',
              href: 'https://github.com/cathe-zhang/taro-plugin-check-env',
            },
            {
              label: 'taro-plugin-mp',
              href: 'https://github.com/cathe-zhang/taro-plugin-mp',
            },
          ],
        },
        {
          title: '最前端',
          items: [ {
              label: '美团技术团队',
              href: 'https://tech.meituan.com/',
            },
            {
              label: '京东 - 凹凸实验室',
              href: 'https://aotu.io/',
            }, 
            {
              label: '淘系前端团队',
              href: 'https://fed.taobao.org/',
            },
            {
              label: '腾讯AlloyTeam - 博客',
              href: 'http://www.alloyteam.com/page/0/',
            },
            {
              label: '360奇舞团 - 博客',
              href: 'https://75.team/post/list',
            },
            {
              label: '知乎 - 前端技术漫游指南',
              href: 'https://zhuanlan.zhihu.com/front-end',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      defaultLanguage: 'javascript',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cathe-zhang/my-blog-docusaurus/tree/dev/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cathe-zhang/my-blog-docusaurus/tree/dev/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
