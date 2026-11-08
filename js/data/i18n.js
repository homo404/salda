/* ============================================================================
   i18n.js — interface dictionary  (the second language only)
   ----------------------------------------------------------------------------
   The DEFAULT language comes straight from the live DOM, so you never translate
   it here. This dictionary supplies the SECOND language (set CONFIG.languages.second
   in js/config.js, e.g. { code:"es", rtl:false, label:"Español" }). For each key
   below, add a field named with that language code:

       "nav.search": { en: "Search", es: "Buscar" }

   The `en` values are only a reference for translators — the runtime ignores
   them. Any key without a second-language field falls back to the on-screen
   default. HTML elements opt in with data-i18n / data-i18n-html /
   data-i18n-placeholder / data-i18n-aria-label / data-i18n-title.

   The single Spanish ("es") example below shows the pattern; the rest are
   English-only stubs for a fluent translator to complete. See CONTENT-GUIDE.md.
   ============================================================================ */
var siteI18N = {

  /* Header */
  "head.sub":        { en: "A documentary map", ru: "Историческая карта" },

  /* Navigation / top bar */
  "nav.layers":      { en: "Layers", ru: "Слои" },
  "nav.search":      { en: "Search", ru: "Поиск" },
  "nav.wander":      { en: "Wander", ru: "Случайное фото" },
  "nav.gallery":     { en: "Gallery", ru: "Галерея" },
  "nav.timeline":    { en: "Timeline", ru: "Таймлайн" },
  "nav.stats":       { en: "Statistics", ru: "Статистика" },
  "nav.sources":     { en: "Sources", ru: "Источники" },
  "nav.compare":     { en: "Compare", ru: "Сравнить" },
  "nav.map":         { en: "Map", ru: "Карта" },
  "nav.essay":       { en: "Essay", ru: "Эссе" },

  /* Accessibility panel */
  "a11y.title":      { en: "Accessibility", ru: "Настройки" },
  "a11y.textsize":   { en: "Text size", ru: "Размер шрифта" },
  "a11y.hc":         { en: "High contrast", ru: "Высокая контрастность" },
  "a11y.rm":         { en: "Reduce motion", ru: "Отключить плавные движения" },
  "a11y.hint":       { en: "Settings are saved and persist across pages.", ru: "Настройки сохраняются и остаются доступными при переходе между страницами" },

  /* Search panel */
  "search.placeholder": { en: "Search captions and narratives…", ru: "" },
  "search.status":      { en: "Type to search across the photos and their narratives.", ru: "" },

  /* Compare bar */
  "cmp.label":       { en: "Compare", ru: "Сравнить" },
  "cmp.exit":        { en: "Exit", ru: "Выйти" },
  "cmp.hint":        { en: "drag the handle &nbsp;&middot;&nbsp; pan/zoom shared", ru: "" },

  /* Layers panel */
  "lp.title":        { en: "Map layers", ru: "Слои карты" },
  "lp.photos":       { en: "Photo markers", ru: "" },
  "lp.landmarks":    { en: "Landmarks", ru: "" },
  "lp.sightlines":   { en: "Sightlines (all photos)", ru: "" },
  "lp.area1":        { en: "Area 1", ru: "" },
  "lp.area2":        { en: "Area 2", ru: "" },
  "lp.area3":        { en: "Area 3", ru: "" },
  "lp.area4":        { en: "Area 4", ru: "" },
  "lp.places":       { en: "Places", ru: "" },
  "lp.line":         { en: "Line overlay", ru: "" },
  "lp.voices":       { en: "Voices", ru: "" },
  "lp.historical":   { en: "Historical photographs", ru: "" },
  "lp.trail":        { en: "Walking trail", ru: "" },
  "lp.pace":         { en: "Walking pace", ru: "" },

  /* Panels */
  "tl.title":        { en: "Timeline", ru: "Таймлайн" },
  "tl.foot":         { en: "Each entry is sourced; superscripts link to the reference.", ru: "" },
  "st.title":        { en: "In numbers", ru: "" },
  "st.foot":         { en: "Figures are sourced; superscripts link to the reference.", ru: "" },
  "src.title":       { en: "Sources", ru: "Источники" },
  "src.foot":        { en: "Every figure, date, and quotation is tied to one of these sources.", ru: "" },

  /* Photo drawer */
  "drawer.prev":     { en: "← Prev", ru: "← Предыдущий" },
  "drawer.next":     { en: "Next →", ru: "Следующий →" },
  "cite.title":      { en: "Cite this photograph", ru: "" },

  /* Intro splash */
  "intro.title":     { en: "MIRL Map", ru: "" },
  "intro.subtitle":  { en: "A documentary photo-map", ru: "" },
  "intro.p1":        { en: "EDIT ME — introduce your project here.", ru: "" },
  "intro.tip":       { en: "Click any photograph on the map for its caption and narrative.", ru: "" },
  "intro.enter":     { en: "Enter the map →", ru: "" },
  "intro.essay":     { en: "View as photo essay", ru: "" },
  "intro.credit":    { en: "EDIT ME — your credit line.", ru: "" },

  /* Empty state (a map with no photographs yet) */
  "empty.h":         { en: "No photographs yet", ru: "" },
  "empty.p":         { en: "This map is waiting for its first photograph.", ru: "" },
  "empty.btn":       { en: "Add your first photograph →", ru: "" },

  /* Gallery page */
  "g.sub":           { en: "Photographs", ru: "" },
  "g.intro.h2":      { en: "MIRL Map", ru: "" },
  "g.intro.p":       { en: "EDIT ME — a short introduction to the essay.", ru: "" },
  "g.sources":       { en: "Sources", ru: "" },
  "g.onmap":         { en: "on the map ↗", ru: "" }
};
