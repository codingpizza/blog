import remarkCollapse from "remark-collapse";

/**
 * Turn the table of contents heading into a collapsible block.
 *
 * Both languages are handled by one plugin on purpose. Registering
 * `remark-collapse` twice in `astro.config.ts` leaves only the last instance
 * active, which silently dropped the collapsible table of contents from the
 * English articles.
 */
const TOC_HEADINGS = [
  { test: "Table of contents" },
  { test: "Tabla de contenidos", summary: "Tabla de contenidos" },
];

export function remarkCollapseTableOfContents() {
  const runs = TOC_HEADINGS.map(({ test, summary }) =>
    summary ? remarkCollapse({ test, summary }) : remarkCollapse({ test })
  );

  return (tree: unknown) => {
    for (const run of runs) {
      run(tree as Parameters<typeof run>[0]);
    }
  };
}
