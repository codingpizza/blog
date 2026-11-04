import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Start",
    posts: "Beiträge",
    tags: "Tags",
    about: "Über",
    archives: "Archiv",
    search: "Suche",
  },
  post: {
    publishedAt: "Veröffentlicht am",
    updatedAt: "Aktualisiert",
    sharePostIntro: "Beitrag teilen:",
    sharePostOn: "Beitrag auf {{platform}} teilen",
    sharePostViaEmail: "Beitrag per E-Mail teilen",
    tagLabel: "Tags",
    backToTop: "Nach oben",
    goBack: "Zurück",
    editPage: "Seite bearbeiten",
    previousPost: "Vorheriger Beitrag",
    nextPost: "Nächster Beitrag",
  },
  pagination: {
    prev: "Zurück",
    next: "Weiter",
    page: "Seite",
  },
  home: {
    socialLinks: "Soziale Links",
    featured: "Empfohlen",
    recentPosts: "Neueste Beiträge",
    allPosts: "Alle Beiträge",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Alle Rechte vorbehalten.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Alle Beiträge mit dem Tag:",

    tagsTitle: "Tags",
    tagsDesc: "Alle in Beiträgen verwendeten Tags.",

    postsTitle: "Beiträge",
    postsDesc: "Alle Beiträge, die ich veröffentlicht habe.",

    archivesTitle: "Archiv",
    archivesDesc: "Alle archivierten Beiträge.",

    searchTitle: "Suche",
    searchDesc: "Suche nach einem Beitrag...",
  },
  a11y: {
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    toggleTheme: "Design wechseln",
    searchPlaceholder: "Beiträge suchen...",
    noResults: "Keine Ergebnisse gefunden",
    goToPreviousPage: "Zur vorherigen Seite",
    goToNextPage: "Zur nächsten Seite",
    switchLanguage: "Sprache wechseln",
  },
  notFound: {
    title: "404 Nicht gefunden",
    message: "Seite nicht gefunden",
    goHome: "Zur Startseite",
  },
} satisfies UIStrings;
