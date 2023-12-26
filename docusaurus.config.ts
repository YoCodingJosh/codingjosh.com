import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";

import "dotenv/config";

const isDev = process.env.NODE_ENV === "development";

const developmentAnnouncementBar = {
  id: "development",
  content: "⚠️ This is the development version of the site. ⚠️",
  backgroundColor: "#fcebae",
  textColor: "#091E42",
  isCloseable: false,
};

const constructionAnnouncementBar = {
  id: "construction",
  content: "🚧👷‍♂️ This site is still under construction! 🏗️🚧",
  backgroundColor: "#fafbfc",
  textColor: "#091E42",
  isCloseable: false,
};

const maintenanceAnnouncementBar = {
  id: "maintenance",
  content: "🔧 This site is currently under maintenance. 🔧",
  backgroundColor: "#fafbfc",
  textColor: "#091E42",
  isCloseable: false,
};

const config: Config = {
  title: "CodingJosh",
  tagline: "CodingJosh's personal website",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://codingjosh.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  customFields: {
    // Put your custom environment here
    turnstileSiteKey: process.env.TURNSTILE_SITE_KEY,
    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "content-docs",
      {
        id: "about",
        path: "about",
        routeBasePath: "about",
        breadcrumbs: false,
        // sidebarPath: './sidebars.ts',
      } satisfies DocsOptions,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      ...(isDev ? developmentAnnouncementBar : constructionAnnouncementBar),
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "CodingJosh",
      logo: {
        alt: "Cool Yunocchi",
        src: "img/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png",
      },
      items: [
        {
          to: "/projects",
          label: "Projects",
          position: "left",
        },
        {
          to: "/about",
          label: "About",
          position: "left",
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/YoCodingJosh",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Important Stuff",
          items: [
            {
              label: "About Me",
              to: "/about",
            },
            {
              label: "Projects",
              to: "/projects",
            },
            {
              label: "Contact",
              to: "/contact",
            },
          ],
        },
        {
          title: "Interests",
          items: [
            {
              label: "Anime",
              to: "/anime",
            },
            // {
            //   label: "Manga",
            //   to: "/manga",
            // },
            // {
            //   label: "Games",
            //   to: "/games",
            // },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     // {
        //     //   label: 'Twitter',
        //     //   href: 'https://twitter.com/YoCodingJosh',
        //     // },
        //   ],
        // },
        {
          title: "More",
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: "GitHub",
              href: "https://github.com/YoCodingJosh",
            },
          ],
        },
      ],
      copyright: `<div>Copyright © ${new Date().getFullYear()} CodingJosh</div><div>Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a> &mdash; Powered by <a href="https://pages.cloudflare.com/" target="_blank">CloudFlare Pages</a></div>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "c",
        "cmake",
        "csharp",
        "elixir",
        "erlang",
        "glsl",
        "java",
        "php",
        "ruby",
        "sql",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
