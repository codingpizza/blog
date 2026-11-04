import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Главная",
    posts: "Статьи",
    tags: "Теги",
    about: "О сайте",
    archives: "Архив",
    search: "Поиск",
  },
  post: {
    publishedAt: "Опубликовано",
    updatedAt: "Обновлено",
    sharePostIntro: "Поделиться статьёй:",
    sharePostOn: "Поделиться статьёй в {{platform}}",
    sharePostViaEmail: "Поделиться статьёй по почте",
    tagLabel: "Теги",
    backToTop: "Наверх",
    goBack: "Назад",
    editPage: "Редактировать страницу",
    previousPost: "Предыдущая статья",
    nextPost: "Следующая статья",
  },
  pagination: {
    prev: "Назад",
    next: "Вперёд",
    page: "Страница",
  },
  home: {
    socialLinks: "Социальные ссылки",
    featured: "Избранное",
    recentPosts: "Последние статьи",
    allPosts: "Все статьи",
  },
  footer: {
    copyright: "Авторские права",
    allRightsReserved: "Все права защищены.",
  },
  pages: {
    tagTitle: "Тег",
    tagDesc: "Все статьи с тегом:",

    tagsTitle: "Теги",
    tagsDesc: "Все теги, используемые в статьях.",

    postsTitle: "Статьи",
    postsDesc: "Все статьи, которые я опубликовал.",

    archivesTitle: "Архив",
    archivesDesc: "Все статьи в архиве.",

    searchTitle: "Поиск",
    searchDesc: "Поиск любой статьи...",
  },
  a11y: {
    skipToContent: "Перейти к содержимому",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    toggleTheme: "Переключить тему",
    searchPlaceholder: "Поиск статей...",
    noResults: "Ничего не найдено",
    goToPreviousPage: "Перейти на предыдущую страницу",
    goToNextPage: "Перейти на следующую страницу",
    switchLanguage: "Сменить язык",
  },
  notFound: {
    title: "404 Не найдено",
    message: "Страница не найдена",
    goHome: "На главную",
  },
} satisfies UIStrings;
