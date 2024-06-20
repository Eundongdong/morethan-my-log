const CONFIG = {
  // profile setting (required)
  profile: {
    name: "eundongdong",
    image: "/wishwing.jpg",//"/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "I develop the world.",
    email: "kej4373@gmail.com",
    linkedin: "eundongdong",
    github: "eundongdong",
    instagram: "",
  },
  projects: null,
  //   {
  //     name: `morethan-my-log`,
  //     href: "https://github.com/Eundongdong/morethan-my-log",
  //   },
  
  // blog setting (required)
  blog: {
    title: "Eundongdong-log",
    description: "welcome to Eundongdong-log!",
  },

  // CONFIG configration (required)
  link: "https://morethan-my-log.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      // repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      repo: "Eundongdong/Eundongdong",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1000 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
