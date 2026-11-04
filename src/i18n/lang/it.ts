import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Articoli",
    tags: "Tag",
    about: "Chi sono",
    archives: "Archivio",
    search: "Cerca",
  },
  post: {
    publishedAt: "Pubblicato il",
    updatedAt: "Aggiornato",
    sharePostIntro: "Condividi questo articolo:",
    sharePostOn: "Condividi questo articolo su {{platform}}",
    sharePostViaEmail: "Condividi questo articolo via e-mail",
    tagLabel: "Tag",
    backToTop: "Torna in cima",
    goBack: "Torna indietro",
    editPage: "Modifica pagina",
    previousPost: "Articolo precedente",
    nextPost: "Articolo successivo",
  },
  pagination: {
    prev: "Precedente",
    next: "Successivo",
    page: "Pagina",
  },
  home: {
    socialLinks: "Link social",
    featured: "In evidenza",
    recentPosts: "Articoli recenti",
    allPosts: "Tutti gli articoli",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Tutti i diritti riservati.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Tutti gli articoli con il tag:",

    tagsTitle: "Tag",
    tagsDesc: "Tutti i tag usati negli articoli.",

    postsTitle: "Articoli",
    postsDesc: "Tutti gli articoli che ho pubblicato.",

    archivesTitle: "Archivio",
    archivesDesc: "Tutti gli articoli archiviati.",

    searchTitle: "Cerca",
    searchDesc: "Cerca qualsiasi articolo...",
  },
  a11y: {
    skipToContent: "Salta al contenuto",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    toggleTheme: "Cambia tema",
    searchPlaceholder: "Cerca articoli...",
    noResults: "Nessun risultato trovato",
    goToPreviousPage: "Vai alla pagina precedente",
    goToNextPage: "Vai alla pagina successiva",
    switchLanguage: "Cambia lingua",
  },
  notFound: {
    title: "404 Non trovato",
    message: "Pagina non trovata",
    goHome: "Torna alla home",
  },
} satisfies UIStrings;
