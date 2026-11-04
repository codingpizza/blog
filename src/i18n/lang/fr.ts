import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Accueil",
    posts: "Articles",
    tags: "Étiquettes",
    about: "À propos",
    archives: "Archives",
    search: "Rechercher",
  },
  post: {
    publishedAt: "Publié le",
    updatedAt: "Mis à jour",
    sharePostIntro: "Partager cet article :",
    sharePostOn: "Partager cet article sur {{platform}}",
    sharePostViaEmail: "Partager cet article par e-mail",
    tagLabel: "Étiquettes",
    backToTop: "Retour en haut",
    goBack: "Retour",
    editPage: "Modifier la page",
    previousPost: "Article précédent",
    nextPost: "Article suivant",
  },
  pagination: {
    prev: "Précédent",
    next: "Suivant",
    page: "Page",
  },
  home: {
    socialLinks: "Réseaux sociaux",
    featured: "À la une",
    recentPosts: "Articles récents",
    allPosts: "Tous les articles",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Tous droits réservés.",
  },
  pages: {
    tagTitle: "Étiquette",
    tagDesc: "Tous les articles avec l'étiquette :",

    tagsTitle: "Étiquettes",
    tagsDesc: "Toutes les étiquettes utilisées dans les articles.",

    postsTitle: "Articles",
    postsDesc: "Tous les articles que j'ai publiés.",

    archivesTitle: "Archives",
    archivesDesc: "Tous les articles archivés.",

    searchTitle: "Rechercher",
    searchDesc: "Rechercher un article...",
  },
  a11y: {
    skipToContent: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Changer de thème",
    searchPlaceholder: "Rechercher des articles...",
    noResults: "Aucun résultat trouvé",
    goToPreviousPage: "Aller à la page précédente",
    goToNextPage: "Aller à la page suivante",
    switchLanguage: "Changer de langue",
  },
  notFound: {
    title: "404 Introuvable",
    message: "Page introuvable",
    goHome: "Retour à l'accueil",
  },
} satisfies UIStrings;
