import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Hjem",
    posts: "Innlegg",
    tags: "Tagger",
    about: "Om",
    archives: "Arkiv",
    search: "Søk",
  },
  post: {
    publishedAt: "Publisert",
    updatedAt: "Oppdatert",
    sharePostIntro: "Del dette innlegget:",
    sharePostOn: "Del dette innlegget på {{platform}}",
    sharePostViaEmail: "Del dette innlegget på e-post",
    tagLabel: "Tagger",
    backToTop: "Til toppen",
    goBack: "Tilbake",
    editPage: "Rediger side",
    previousPost: "Forrige innlegg",
    nextPost: "Neste innlegg",
  },
  pagination: {
    prev: "Forrige",
    next: "Neste",
    page: "Side",
  },
  home: {
    socialLinks: "Sosiale lenker",
    featured: "Utvalgte",
    recentPosts: "Nyeste innlegg",
    allPosts: "Alle innlegg",
  },
  footer: {
    copyright: "Opphavsrett",
    allRightsReserved: "Alle rettigheter forbeholdt.",
  },
  pages: {
    tagTitle: "Tagg",
    tagDesc: "Alle innlegg med taggen:",

    tagsTitle: "Tagger",
    tagsDesc: "Alle tagger som brukes i innleggene.",

    postsTitle: "Innlegg",
    postsDesc: "Alle innlegg jeg har publisert.",

    archivesTitle: "Arkiv",
    archivesDesc: "Alle arkiverte innlegg.",

    searchTitle: "Søk",
    searchDesc: "Søk i alle innlegg...",
  },
  a11y: {
    skipToContent: "Gå til innhold",
    openMenu: "Åpne meny",
    closeMenu: "Lukk meny",
    toggleTheme: "Bytt tema",
    searchPlaceholder: "Søk i innlegg...",
    noResults: "Ingen resultater funnet",
    goToPreviousPage: "Gå til forrige side",
    goToNextPage: "Gå til neste side",
    switchLanguage: "Bytt språk",
  },
  notFound: {
    title: "404 Ikke funnet",
    message: "Siden ble ikke funnet",
    goHome: "Tilbake til hjem",
  },
} satisfies UIStrings;
