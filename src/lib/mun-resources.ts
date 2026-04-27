export type FinderCategory =
  | "research"
  | "position-papers"
  | "speech-drafts"
  | "resolutions"
  | "certificates";

export type ResourceKind = "markdown" | "pdf" | "image";

export interface SpotlightItem {
  id: string;
  title: string;
  subtitle: string;
  keywords: string[];
  appId: "finder" | "architect" | "terminal" | "appstore";
  href?: string;
}

export interface FinderResource {
  id: string;
  category: FinderCategory;
  label: string;
  kind: ResourceKind;
  /** Public URL for fetch / iframe */
  url: string;
}

export const FINDER_RESOURCES: FinderResource[] = [
  {
    id: "res-1",
    category: "research",
    label: "India — Water Security",
    kind: "markdown",
    url: "/mun/research/india-water-security.md",
  },
  {
    id: "res-2",
    category: "research",
    label: "UNSC Reform Notes",
    kind: "markdown",
    url: "/mun/research/security-council-reform.md",
  },
  {
    id: "plan-seamuns-site",
    category: "research",
    label: "seamuns.site — main website planning doc (Bangkok/Thailand MUN)",
    kind: "pdf",
    url: "/mun/planning-seamuns-site.pdf",
  },
  {
    id: "prep-cismun",
    category: "research",
    label: "CISMUN Prep document",
    kind: "pdf",
    url: "/mun/cismun-prep.pdf",
  },
  {
    id: "prep-hexamun-26",
    category: "research",
    label: "HEXAMUN '26 Prep document",
    kind: "pdf",
    url: "/mun/hexamun-26-prep.pdf",
  },
  {
    id: "prep-template-shared",
    category: "research",
    label: "MUN Prep Template (for me + other delegates)",
    kind: "pdf",
    url: "/mun/mun-prep-template.pdf",
  },
  {
    id: "prep-mun07",
    category: "research",
    label: "MUN07 Prep document",
    kind: "pdf",
    url: "/mun/mun07-prep.pdf",
  },
  {
    id: "prep-newton-mun-i",
    category: "research",
    label: "Newton MUN I Prep document",
    kind: "pdf",
    url: "/mun/newton-mun-i-prep.pdf",
  },
  {
    id: "prep-regents-mun-i",
    category: "research",
    label: "Regents MUN I Prep document",
    kind: "pdf",
    url: "/mun/regents-mun-i-prep.pdf",
  },
  {
    id: "prep-sisbmun-iii",
    category: "research",
    label: "SISBMUN III Prep document",
    kind: "pdf",
    url: "/mun/sisbmun-iii-prep.pdf",
  },
  {
    id: "prep-stamun",
    category: "research",
    label: "StaMUN Prep document",
    kind: "pdf",
    url: "/mun/stamun-prep.pdf",
  },
  {
    id: "prep-thaimun-xii",
    category: "research",
    label: "THAIMUN XII Prep document",
    kind: "pdf",
    url: "/mun/thaimun-xii-prep.pdf",
  },
  {
    id: "prep-thaimun-xiii",
    category: "research",
    label: "THAIMUN XIII Prep document",
    kind: "pdf",
    url: "/mun/thaimun-xiii-prep.pdf",
  },
  {
    id: "prep-tsimun-i",
    category: "research",
    label: "TSIMUN I Prep document",
    kind: "pdf",
    url: "/mun/tsimun-i-prep.pdf",
  },
  {
    id: "pp-1",
    category: "position-papers",
    label: "GA4 — Quality Education",
    kind: "markdown",
    url: "/mun/position-papers/ga4-education.md",
  },
  {
    id: "pp-2",
    category: "position-papers",
    label: "UNHCR — Protection",
    kind: "markdown",
    url: "/mun/position-papers/unhcr-refugees.md",
  },
  {
    id: "pp-afghanistan-who",
    category: "position-papers",
    label: "WHO — Afghanistan (position paper)",
    kind: "pdf",
    url: "/mun/position-papers/afghanistan-who.pdf",
  },
  {
    id: "pp-france-interpol-mun107",
    category: "position-papers",
    label: "INTERPOL — France (MUN107 IV position paper)",
    kind: "pdf",
    url: "/mun/position-papers/france-interpol-mun107-iv.pdf",
  },
  {
    id: "pp-germany-cstd",
    category: "position-papers",
    label: "CSTD — Germany (position paper)",
    kind: "pdf",
    url: "/mun/position-papers/germany-cstd.pdf",
  },
  {
    id: "pp-israel-unoosa-sisbmun",
    category: "position-papers",
    label: "UNOOSA — Israel (SISBMUN III position paper)",
    kind: "pdf",
    url: "/mun/position-papers/israel-unoosa-sisbmun-iii.pdf",
  },
  {
    id: "pp-new-zealand-who-stamun",
    category: "position-papers",
    label: "WHO — New Zealand (STAMUN position paper)",
    kind: "pdf",
    url: "/mun/position-papers/new-zealand-who-stamun.pdf",
  },
  {
    id: "pp-pmf-hcc-hexamun-26",
    category: "position-papers",
    label: "HCC — Pierre Mendès France (HEXAMUN '26 position paper)",
    kind: "pdf",
    url: "/mun/position-papers/pierre-mendes-france-hcc-hexamun-26.pdf",
  },
  {
    id: "pp-belgium-who",
    category: "position-papers",
    label: "WHO — Belgium (position paper)",
    kind: "pdf",
    url: "/mun/position-papers/belgium-who.pdf",
  },
  {
    id: "pp-nicaragua-unodc",
    category: "position-papers",
    label: "UNODC — Nicaragua (position paper)",
    kind: "pdf",
    url: "/mun/position-papers/nicaragua-unodc.pdf",
  },
  {
    id: "pp-ted-cruz-uscc-thaimun",
    category: "position-papers",
    label: "USCC — Ted Cruz (THAIMUN XIII position paper)",
    kind: "pdf",
    url: "/mun/position-papers/ted-cruz-uscc-thaimun-xiii.pdf",
  },
  {
    id: "sp-1",
    category: "speech-drafts",
    label: "Opening General Debate",
    kind: "markdown",
    url: "/mun/speech-drafts/opening-general-debate.md",
  },
  {
    id: "sp-2",
    category: "speech-drafts",
    label: "Crisis Turn Lines",
    kind: "markdown",
    url: "/mun/speech-drafts/crisis-turn.md",
  },
  {
    id: "res-who-1-2",
    category: "resolutions",
    label: "WHO — Resolution 1.2 (draft)",
    kind: "pdf",
    url: "/mun/resolutions/who-resolution-1-2-draft.pdf",
  },
  {
    id: "res-unoosa-1-2",
    category: "resolutions",
    label: "UNOOSA Topic 1 — Resolution 1.2 (CRO1SSANT)",
    kind: "pdf",
    url: "/mun/resolutions/unoosa-topic-1-resolution-1-2.pdf",
  },
  {
    id: "res-cstd-1-2",
    category: "resolutions",
    label: "CSTD — Resolution 1.2 (Germany & China)",
    kind: "pdf",
    url: "/mun/resolutions/cstd-resolution-1-2-germany-china.pdf",
  },
  {
    id: "res-ecosoc-1-2",
    category: "resolutions",
    label: "ECOSOC — Resolution 1.2",
    kind: "pdf",
    url: "/mun/resolutions/ecosoc-resolution-1-2.pdf",
  },
  {
    id: "res-ga-bloc-c",
    category: "resolutions",
    label: "GA — Bloc C resolution",
    kind: "pdf",
    url: "/mun/resolutions/ga-bloc-c-resolution.pdf",
  },
  {
    id: "res-interpol-draft-1-1",
    category: "resolutions",
    label: "INTERPOL — Draft resolution 1.1",
    kind: "pdf",
    url: "/mun/resolutions/interpol-draft-resolution-1-1.pdf",
  },
  {
    id: "res-unodc-1-2",
    category: "resolutions",
    label: "UNODC — Resolution 1.2",
    kind: "pdf",
    url: "/mun/resolutions/unodc-resolution-1-2.pdf",
  },
  {
    id: "res-who-cismun-1-1",
    category: "resolutions",
    label: "WHO (CISMUN) — Resolution 1.1",
    kind: "pdf",
    url: "/mun/resolutions/who-cismun-resolution-1-1.pdf",
  },
  {
    id: "res-who-1-2-copy",
    category: "resolutions",
    label: "WHO — Resolution 1.2 (copy PDF)",
    kind: "pdf",
    url: "/mun/resolutions/who-resolution-1-2-alt.pdf",
  },
  {
    id: "pdf-demo",
    category: "position-papers",
    label: "Sample PDF (research excerpt)",
    kind: "pdf",
    url: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
  },
  {
    id: "cert-hexa-hm",
    category: "certificates",
    label: "HEXA MUN 2026 — Honorable Mention (HCC)",
    kind: "image",
    url: "/certificates/hexa-2026-honorable-mention.png",
  },
  {
    id: "cert-hexa-part",
    category: "certificates",
    label: "HEXA MUN 2026 — Certificate of Participation (HCC)",
    kind: "image",
    url: "/certificates/hexa-2026-participation.png",
  },
  {
    id: "cert-newton-part",
    category: "certificates",
    label: "Newton Sixth Form MUN I — Participation (WHO)",
    kind: "image",
    url: "/certificates/newton-mun-i-2026-participation.png",
  },
  {
    id: "cert-mun107-bpp",
    category: "certificates",
    label: "MUN107 IV — Best Position Paper (INTERPOL)",
    kind: "image",
    url: "/certificates/mun107-iv-best-position-paper-interpol.png",
  },
  {
    id: "cert-mun107-bd",
    category: "certificates",
    label: "MUN107 IV — Best Delegate (INTERPOL)",
    kind: "image",
    url: "/certificates/mun107-iv-best-delegate-interpol.png",
  },
  {
    id: "cert-mun107-part",
    category: "certificates",
    label: "MUN107 IV — Certificate of Participation (INTERPOL)",
    kind: "image",
    url: "/certificates/mun107-iv-participation-interpol.png",
  },
  {
    id: "cert-regents-bd",
    category: "certificates",
    label: "Regent’s MUN I — Best Delegate (US Congress)",
    kind: "image",
    url: "/certificates/regents-mun-i-2025-best-delegate.png",
  },
  {
    id: "cert-regents-part",
    category: "certificates",
    label: "Regent’s MUN I — Certificate of Participation (US Congress)",
    kind: "image",
    url: "/certificates/regents-mun-i-2025-participation.png",
  },
  {
    id: "cert-tsimun-bpp",
    category: "certificates",
    label: "TSIMUN 2026 — Best Position Paper (CSTD)",
    kind: "image",
    url: "/certificates/tsimun-2026-best-position-paper-cstd.png",
  },
  {
    id: "cert-stamun-bpp",
    category: "certificates",
    label: "STAMUNXI — Best Position Paper (WHO)",
    kind: "image",
    url: "/certificates/stamunxi-2025-best-position-paper-who.png",
  },
];

export interface LogisticsRow {
  workstream: string;
  owner: string;
  status: "On track" | "Risk" | "Done";
  due: string;
}

export const LOGISTICS_MATRIX: LogisticsRow[] = [
  {
    workstream: "Committee allocations",
    owner: "USG Committees",
    status: "Done",
    due: "T-12w",
  },
  {
    workstream: "Crisis cell dry run",
    owner: "Crisis Director",
    status: "On track",
    due: "T-4w",
  },
  {
    workstream: "Delegate accreditation API",
    owner: "Digital",
    status: "Risk",
    due: "T-3w",
  },
  {
    workstream: "Social events / guest lists",
    owner: "Events",
    status: "On track",
    due: "T-2w",
  },
  {
    workstream: "Gavel & awards inventory",
    owner: "Logistics",
    status: "Done",
    due: "T-1w",
  },
];

export interface TimelinePhase {
  phase: string;
  detail: string;
  window: string;
}

export const CONFERENCE_TIMELINE: TimelinePhase[] = [
  {
    phase: "Concept & mandate",
    detail: "Committee slate, educational outcomes, equity targets.",
    window: "Weeks 1–3",
  },
  {
    phase: "Secretariat stand-up",
    detail: "Roles, comms cadence, risk register, sponsor alignment.",
    window: "Weeks 4–6",
  },
  {
    phase: "Delegate pipeline",
    detail: "School onboarding, training modules, crisis simulations.",
    window: "Weeks 7–10",
  },
  {
    phase: "Run of show",
    detail: "Tech rehearsals, accessibility checks, signage & wayfinding.",
    window: "Weeks 11–12",
  },
  {
    phase: "Conference execution",
    detail: "Committee blocks, crisis turns, plenary arcs, feedback loops.",
    window: "Days 1–3",
  },
  {
    phase: "Closing & retrospective",
    detail: "Certificates, delegate survey, sponsor report, archive materials.",
    window: "Final day",
  },
];

export interface CommunityCard {
  id: string;
  title: string;
  subtitle: string;
  icon: "users" | "mic" | "globe" | "book";
  color: string;
  frontBlurb: string;
  impactStat: string;
  testimonial: string;
}

export const COMMUNITY_CARDS: CommunityCard[] = [
  {
    id: "c1",
    title: "Delegate Skills Lab",
    subtitle: "Three-session sprint",
    icon: "mic",
    color: "#34C759",
    frontBlurb:
      "Speech architecture, moderated caucus tactics, and amendment hygiene.",
    impactStat: "180+ delegate-hours coached across 8 schools.",
    testimonial:
      "“Our bloc stopped recycling talking points — we finally built merges that stuck.”",
  },
  {
    id: "c2",
    title: "Crisis Writers’ Room",
    subtitle: "Simulation design",
    icon: "globe",
    color: "#007AFF",
    frontBlurb:
      "Scenario tension curves, credible sources, and chair-safe injects.",
    impactStat: "12 crisis arcs stress-tested with faculty review.",
    testimonial:
      "“Injects arrived with context layers, not gimmicks — committees stayed believable.”",
  },
  {
    id: "c3",
    title: "Chairs’ Studio",
    subtitle: "Parliamentary craft",
    icon: "users",
    color: "#AF52DE",
    frontBlurb:
      "Recognition balance, pacing, minority voice protection, closure discipline.",
    impactStat: "24 student officers mentored pre-conference.",
    testimonial:
      "“Our dais finally felt consistent — delegates knew what ‘good’ looked like.”",
  },
  {
    id: "c4",
    title: "Research Office Hours",
    subtitle: "Source + strategy",
    icon: "book",
    color: "#FF9500",
    frontBlurb:
      "Source triage, country profile structure, PP → speech alignment.",
    impactStat: "Avg. 3.4 source quality uplift on rubric audits.",
    testimonial:
      "“We stopped mistaking eloquence for evidence.”",
  },
];

export function buildSpotlightIndex(): SpotlightItem[] {
  const finderItems: SpotlightItem[] = FINDER_RESOURCES.map((r) => ({
    id: `finder-${r.id}`,
    title: r.label,
    subtitle: `Finder — ${categoryTitle(r.category)}`,
    keywords: [
      r.label,
      r.category,
      r.kind,
      "finder",
      "prep",
      "delegate",
      "mun",
      "certificate",
      "award",
      "HEXA",
      "HEXAMUN",
      "HCC",
      "Mendès",
      "Pierre Mendès",
      "Newton",
      "Regents",
      "INTERPOL",
      "UNODC",
      "CISMUN",
      "TSIMUN",
      "STAMUNXI",
      "resolution",
      "WHO",
      "UNOOSA",
      "Israel",
      "SISBMUN",
      "New Zealand",
      "STAMUN",
      "StaMUN",
      "CSTD",
      "ECOSOC",
      "GA",
      "General Assembly",
      "bloc",
      "Afghanistan",
      "Belgium",
      "Nicaragua",
      "Ted Cruz",
      "USCC",
      "THAIMUN",
      "France",
      "MUN107",
      "MUN07",
      "position paper",
      "Germany",
      "China",
    ],
    appId: "finder",
    href: `finder:${r.id}`,
  }));

  const matrixRows: SpotlightItem[] = LOGISTICS_MATRIX.map((row, i) => ({
    id: `matrix-${i}`,
    title: `${row.workstream}`,
    subtitle: `Architect — Logistics (${row.status})`,
    keywords: [
      row.workstream,
      row.owner,
      row.status,
      "planning",
      "logistics",
      "secretariat",
      "mun",
    ],
    appId: "architect",
    href: "architect:matrix",
  }));

  const timelineItems: SpotlightItem[] = CONFERENCE_TIMELINE.map((t, i) => ({
    id: `timeline-${i}`,
    title: t.phase,
    subtitle: `Architect — Timeline (${t.window})`,
    keywords: [t.phase, t.detail, t.window, "conference", "mun"],
    appId: "architect",
    href: "architect:timeline",
  }));

  const terminalItems: SpotlightItem[] = [
    {
      id: "term-packets",
      title: "Packet stream prototype",
      subtitle: "Terminal — Digital Systems",
      keywords: [
        "websocket",
        "packets",
        "telemetry",
        "digital",
        "live",
        "mun",
      ],
      appId: "terminal",
      href: "terminal:main",
    },
  ];

  const communityItems: SpotlightItem[] = COMMUNITY_CARDS.map((c) => ({
    id: `com-${c.id}`,
    title: c.title,
    subtitle: `Community — ${c.subtitle}`,
    keywords: [c.title, c.subtitle, c.frontBlurb, "workshop", "mun"],
    appId: "appstore",
    href: "appstore:grid",
  }));

  return [
    ...finderItems,
    ...matrixRows,
    ...timelineItems,
    ...terminalItems,
    ...communityItems,
  ];
}

function categoryTitle(c: FinderCategory): string {
  switch (c) {
    case "research":
      return "Research Folders";
    case "position-papers":
      return "Position Papers";
    case "speech-drafts":
      return "Speech Drafts";
    case "certificates":
      return "Certificates & awards";
    case "resolutions":
      return "Draft resolutions";
    default:
      return c;
  }
}

/** Draft resolution PDFs for galleries and links. */
export function resolutionPdfItems(): FinderResource[] {
  return FINDER_RESOURCES.filter(
    (r) => r.category === "resolutions" && r.kind === "pdf"
  );
}

/** Indexed certificate assets for galleries (subset of Finder image resources). */
export function certificateGalleryItems(): FinderResource[] {
  return FINDER_RESOURCES.filter(
    (r) => r.category === "certificates" && r.kind === "image"
  );
}
