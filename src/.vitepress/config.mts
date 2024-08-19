import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Reason AI Docs',
  description: 'Generative APIs for developers',
  base: '/',
  cleanUrls: true,
  themeConfig: {
    outline: { level: 'deep' },
    nav: [
      { text: 'Guide', link: '/guide/introduction/what-is-reason' },
      { text: 'Reference', link: '/reference/api' },
    ],
    sidebar: {
      '/guide': [
        {
          text: 'Introduction',
          base: '/guide',
          items: [
            {
              text: 'What is Reason AI',
              link: '/introduction/what-is-reason',
            },
            {
              text: 'Getting started',
              link: '/introduction/getting-started',
            },
            { text: 'Concepts', link: '/introduction/concepts' },
          ],
        },
        {
          text: 'Tutorials',
          base: '/guide',
          items: [
            { text: 'Create Integral', link: '/integrals/create' },
            { text: 'Create Reason Function', link: '/functions/create' },
            { text: 'Link Function to Integral', link: '/integrals/link' },
            { text: 'Running Integral', link: '/integrals/run' },
            { text: 'Update Integral', link: '/integrals/update' },
          ],
        },
        {
          text: 'Resources',
          base: '/guide',
          items: [
            { text: 'Cloud Providers', link: '/resources/cloud-providers' },
            { text: 'Models', link: '/resources/models' },
            { text: 'Prompt Generation', link: '/resources/prompt-generation' },
          ],
        },
      ],
      '/reference': [
        {
          text: 'Reference',
          base: '/reference',
          items: [
            { text: 'API Reference', link: '/api' },
            { text: 'CLI Reference', link: '/cli' },
            { text: 'Integral Config', link: '/integral-config' },
            { text: 'Function Config', link: '/function' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/reasonai' }],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Reason AI',
    },
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin as any)
    },
  },
})
