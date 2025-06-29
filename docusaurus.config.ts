import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const title = "ajfAfg's House";

const config: Config = {
  title,
  tagline: "健康指向エンジニア",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://ajfafg.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ajfAfg", // Usually your GitHub org/user name.
  projectName: "ajfAfg.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "/img/og-image.drawio.png",
    navbar: {
      title,
      logo: {
        alt: "ajfAfg's Logo",
        src: "img/ajfAfg.png",
      },
      items: [
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/ajfAfg",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} ajfAfg. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    // NOTE:
    // 個人ブログ刷新にあたって、ブログ記事の URL が変更されたため、
    // 古い URL から新しい URL へのリダイレクトを設定している。
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/giiku-camp-vol5-2022",
            to: "/blog/giiku-camp-vol5-2022",
          },
          {
            from: "/hello-world",
            to: "/blog/hello-world",
          },
          {
            from: "/giiku-camp-vol7-2022",
            to: "/blog/giiku-camp-vol7-2022",
          },
          {
            from: "/yumemi-frontend-1day-2022",
            to: "/blog/yumemi-frontend-1day-2022",
          },
          {
            from: "/chatwork-summer-internship-2022",
            to: "/blog/chatwork-summer-internship-2022",
          },
          {
            from: "/cybozu-intenship-2022",
            to: "/blog/cybozu-intenship-2022",
          },
          {
            from: "/cybozu-offer-acceptance",
            to: "/blog/cybozu-offer-acceptance",
          },
          {
            from: "/geek-ten-2023",
            to: "/blog/geek-ten-2023",
          },
          {
            from: "/taimen-ceed-in-kochi-2023",
            to: "/blog/taimen-ceed-in-kochi-2023",
          },
          {
            from: "/sasaetesou-tech-no1",
            to: "/blog/sasaetesou-tech-no1",
          },
        ],
      },
    ],
  ],
};

export default config;
