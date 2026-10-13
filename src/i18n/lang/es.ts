import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Inicio",
    posts: "Artículos",
    tags: "Etiquetas",
    about: "Acerca de",
    archives: "Archivo",
    search: "Buscar",
  },
  post: {
    publishedAt: "Publicado el",
    updatedAt: "Actualizado",
    sharePostIntro: "Comparte este artículo:",
    sharePostOn: "Comparte este artículo en {{platform}}",
    sharePostViaEmail: "Comparte este artículo por correo",
    tagLabel: "Etiquetas",
    backToTop: "Volver arriba",
    goBack: "Volver",
    editPage: "Editar página",
    previousPost: "Artículo anterior",
    nextPost: "Artículo siguiente",
  },
  pagination: {
    prev: "Anterior",
    next: "Siguiente",
    page: "Página",
  },
  home: {
    socialLinks: "Redes sociales",
    featured: "Destacados",
    recentPosts: "Artículos recientes",
    allPosts: "Todos los artículos",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos los derechos reservados.",
  },
  pages: {
    tagTitle: "Etiqueta",
    tagDesc: "Todos los artículos con la etiqueta",

    tagsTitle: "Etiquetas",
    tagsDesc: "Todas las etiquetas usadas en los artículos.",

    postsTitle: "Artículos",
    postsDesc: "Todos los artículos que he publicado.",

    archivesTitle: "Archivo",
    archivesDesc: "Todos los artículos archivados.",

    searchTitle: "Buscar",
    searchDesc: "Busca cualquier artículo ...",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema",
    searchPlaceholder: "Buscar artículos...",
    noResults: "No se encontraron resultados",
    goToPreviousPage: "Ir a la página anterior",
    goToNextPage: "Ir a la página siguiente",
    switchLanguage: "Leer esta página en inglés",
  },
  notFound: {
    title: "404 No encontrado",
    message: "Página no encontrada",
    goHome: "Volver al inicio",
  },
} satisfies UIStrings;
