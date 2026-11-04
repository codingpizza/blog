import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Início",
    posts: "Artigos",
    tags: "Tags",
    about: "Sobre",
    archives: "Arquivo",
    search: "Buscar",
  },
  post: {
    publishedAt: "Publicado em",
    updatedAt: "Atualizado",
    sharePostIntro: "Compartilhe este artigo:",
    sharePostOn: "Compartilhe este artigo no {{platform}}",
    sharePostViaEmail: "Compartilhe este artigo por e-mail",
    tagLabel: "Tags",
    backToTop: "Voltar ao topo",
    goBack: "Voltar",
    editPage: "Editar página",
    previousPost: "Artigo anterior",
    nextPost: "Próximo artigo",
  },
  pagination: {
    prev: "Anterior",
    next: "Próximo",
    page: "Página",
  },
  home: {
    socialLinks: "Redes sociais",
    featured: "Destaques",
    recentPosts: "Artigos recentes",
    allPosts: "Todos os artigos",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos os direitos reservados.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Todos os artigos com a tag:",

    tagsTitle: "Tags",
    tagsDesc: "Todas as tags usadas nos artigos.",

    postsTitle: "Artigos",
    postsDesc: "Todos os artigos que publiquei.",

    archivesTitle: "Arquivo",
    archivesDesc: "Todos os artigos arquivados.",

    searchTitle: "Buscar",
    searchDesc: "Busque qualquer artigo...",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    toggleTheme: "Alternar tema",
    searchPlaceholder: "Buscar artigos...",
    noResults: "Nenhum resultado encontrado",
    goToPreviousPage: "Ir para a página anterior",
    goToNextPage: "Ir para a página seguinte",
    switchLanguage: "Mudar idioma",
  },
  notFound: {
    title: "404 Não encontrado",
    message: "Página não encontrada",
    goHome: "Voltar ao início",
  },
} satisfies UIStrings;
