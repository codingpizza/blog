import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://codingpizza.com/",
    title: "Codingpizza",
    description: "Artículos sobre programación en Android y Kotlin",
    author: "Giuseppe Vetri",
    profile: "https://github.com/codingpizza",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Madrid",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    // every post has a real cover image, so generated OG images are not needed
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/codingpizza/blog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/codingpizza" },
    { name: "x", url: "https://x.com/0xSatellite0" },
    { name: "mail", url: "mailto:contact@codingpizza.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
