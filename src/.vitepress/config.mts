import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Reason AI",
  description: "Generative APIs for developers",
  base: "/",
  themeConfig: {
    outline: { level: "deep" },
    nav: [
      { text: "Guide", link: "/guide/introduction/what-is-reason" },
      { text: "Reference", link: "/reference/api" },
    ],
    sidebar: {
      "/guide": [
        {
          text: "Introduction",
          base: "/guide",
          items: [
            {
              text: "What is Reason API",
              link: "/introduction/what-is-reason",
            },
            {
              text: "Getting started",
              link: "/introduction/getting-started",
            },
            { text: "Concepts", link: "/introduction/concepts" },
          ],
        },
        {
          text: "Tutorials",
          base: "/guide",
          items: [
            { text: "Create Inference API", link: "/apis/create" },
            { text: "Create Reason Function", link: "/functions/create" },
            { text: "Link Function to API", link: "/apis/link" },
            { text: "Running Inference API", link: "/apis/run" },
            { text: "Update Inference API", link: "/apis/update" },
          ],
        },
        {
          text: "Resources",
          base: "/guide",
          items: [
            { text: "Cloud Providers", link: "/resources/cloud-providers" },
            { text: "Models", link: "/resources/models" },
            { text: "Prompt Generation", link: "/resources/prompt-generation" },
          ],
        },
      ],
      "/reference": [
        {
          text: "Reference",
          base: "/reference",
          items: [
            { text: "API Reference", link: "/api" },
            { text: "CLI Reference", link: "/cli" },
            { text: "API Config", link: "/api-config" },
            { text: "Function Config", link: "/function" },
          ],
        },
      ],
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: "Copyright © 2024-present Reason AI",
    },
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin as any);
    },
  },
});
