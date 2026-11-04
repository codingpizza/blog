import type { UIStrings } from "../types";

export default {
  nav: {
    home: "ホーム",
    posts: "記事",
    tags: "タグ",
    about: "概要",
    archives: "アーカイブ",
    search: "検索",
  },
  post: {
    publishedAt: "公開日",
    updatedAt: "更新日",
    sharePostIntro: "この記事をシェア:",
    sharePostOn: "{{platform}} でこの記事をシェア",
    sharePostViaEmail: "メールでこの記事をシェア",
    tagLabel: "タグ",
    backToTop: "トップへ戻る",
    goBack: "戻る",
    editPage: "ページを編集",
    previousPost: "前の記事",
    nextPost: "次の記事",
  },
  pagination: {
    prev: "前へ",
    next: "次へ",
    page: "ページ",
  },
  home: {
    socialLinks: "ソーシャルリンク",
    featured: "注目記事",
    recentPosts: "最近の記事",
    allPosts: "すべての記事",
  },
  footer: {
    copyright: "著作権",
    allRightsReserved: "無断転載を禁じます。",
  },
  pages: {
    tagTitle: "タグ",
    tagDesc: "このタグが付いたすべての記事:",

    tagsTitle: "タグ",
    tagsDesc: "記事で使われているすべてのタグ。",

    postsTitle: "記事",
    postsDesc: "これまでに公開したすべての記事。",

    archivesTitle: "アーカイブ",
    archivesDesc: "アーカイブされたすべての記事。",

    searchTitle: "検索",
    searchDesc: "記事を検索...",
  },
  a11y: {
    skipToContent: "コンテンツへスキップ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    toggleTheme: "テーマを切り替える",
    searchPlaceholder: "記事を検索...",
    noResults: "結果が見つかりません",
    goToPreviousPage: "前のページへ",
    goToNextPage: "次のページへ",
    switchLanguage: "言語を切り替える",
  },
  notFound: {
    title: "404 見つかりません",
    message: "ページが見つかりません",
    goHome: "ホームへ戻る",
  },
} satisfies UIStrings;
